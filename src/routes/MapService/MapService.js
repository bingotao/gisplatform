import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'dva/router';
import { Button, Input, Icon, notification } from 'antd';
import L from '../../common/leaflet.extends.js';
import st from './MapService.less';
import HeaderBar from './HeaderBar.js';
import LayerControl from './LayerControl.js';
import Toolbar from './Toolbar.js';

let x = 120.3596,
  y = 31.4928;

let icon0 = L.divIcon({
    className: 'div-icon0',
    iconSize: [25, 36],
    iconAnchor: [13, 32],
    popupAnchor: [0, -35],
  }),
  icon1 = L.divIcon({
    className: 'div-icon1',
    iconSize: [25, 36],
    iconAnchor: [13, 32],
    popupAnchor: [0, -35],
  }),
  touchIcon = L.divIcon({
    iconSize: [16, 16],
    className: 'ct-touchicon',
  });

class MapService extends Component {
  x = x;
  y = y;

  drawTools = {
    length: null,
    area: null,
    marker: null,
  };

  state = {
    mapReady: false,
    showLayerControl: false,
    x: x,
    y: y,
    showLocationPanel: false,
  };

  toggleLayerControl() {
    var { showLayerControl } = this.state;
    this.setState({ showLayerControl: !showLayerControl });
  }

  showLayerControl() {
    this.setState({ showLayerControl: true });
  }

  pickerCoordinates() {
    if (!this.drawTools.marker) {
      var drawPoint = new L.Draw.Marker(this.map, { icon: icon1 });
      this.drawTools.marker = drawPoint;
      drawPoint.on(
        L.Draw.Event.CREATED,
        (e => {
          var { layer } = e;
          var { lat, lng } = layer.getLatLng();
          this.clearCoordinatesMarker();

          var dom = document.createElement('div');
          var lat = lat.toFixed(8) - 0,
            lng = lng.toFixed(8) - 0;

          var pInstance = ReactDOM.render(
            <div className={st.coordinatespopup}>
              <Input type="number" addonBefore="维度" defaultValue={lat} />
              <Input type="number" addonBefore="经度" defaultValue={lng} />
              <Button className={'copy'} type="primary">
                复制坐标
              </Button>
            </div>,
            dom
          );
          if (this.clipboard) this.clipboard.destroy();
          this.clipboard = new ClipboardJS('.copy', {
            text: e => `(${lat},${lng})`,
            container: pInstance,
          });

          this.clipboard.on('success', e =>
            notification.success({
              description: '复制坐标成功',
              message: '成功',
            })
          );

          this.coordinatesMarker = layer
            .bindPopup(dom, { maxWidth: 200 })
            .addTo(this.map)
            .openPopup();
        }).bind(this)
      );
    }
    this.drawTools.marker.enable();
  }

  enableMeasureArea() {
    var drawPolygon = this.drawTools.area;
    if (!drawPolygon) {
      drawPolygon = new L.Draw.Polygon(this.map, {
        showArea: true,
        // allowIntersection 必须为false才能显示面积
        feet: false,
        allowIntersection: false,
        shapeOptions: {
          stroke: true,
          color: 'red',
          weight: 4,
          opacity: 0.5,
          fill: true,
          clickable: true,
        },
        icon: touchIcon,
      });
      this.drawTools.area = drawPolygon;
      drawPolygon.on(
        L.Draw.Event.CREATED,
        (e => {
          this.clearMeasureAreaLayer();
          var { layer } = e;
          this.measureAreaLayer = layer;
          var dom = document.createElement('div');
          var latlngs = layer.getLatLngs()[0];
          var area = L.GeometryUtil.geodesicArea(latlngs);
          var text = L.GeometryUtil.readableArea(area, true);

          ReactDOM.render(
            <div>
              总面积：<span>{text}</span>
              <Icon type="close-square-o" onClick={e => this.clearMeasureAreaLayer()} />
            </div>,
            dom
          );

          layer
            .bindTooltip(dom, {
              permanent: true,
              interactive: true,
              direction: 'right',
              className: 'measuretooltip',
            })
            .addTo(this.map)
            .openTooltip(latlngs[0]);
        }).bind(this)
      );
    }
    drawPolygon.enable();
  }

  clearMeasureAreaLayer() {
    if (this.measureAreaLayer) this.measureAreaLayer.remove();
  }

  enableMeasureLength() {
    var draw = this.drawTools.length;
    if (!draw) {
      draw = new L.Draw.Polyline(this.map, {
        shapeOptions: {
          stroke: true,
          color: 'red',
          weight: 4,
          opacity: 0.5,
          fill: false,
          clickable: true,
        },
        icon: touchIcon,
      });
      this.drawTools.length = draw;
      draw.on(
        L.Draw.Event.CREATED,
        (e => {
          this.clearMeasureLengthLayer();
          var { layer } = e;
          this.measureLengthLayer = layer;

          var dom = document.createElement('div');
          var latlngs = layer.getLatLngs();
          var distance = 0;
          for (let i = 0, j = latlngs.length - 1; i < j; i++) {
            let p1 = latlngs[i],
              p2 = latlngs[i + 1];
            distance += this.map.distance(p1, p2);
          }

          var text = L.GeometryUtil.readableDistance(distance, true, false, false, 2);

          ReactDOM.render(
            <div>
              总长度：<span>{text}</span>
              <Icon type="close-square-o" onClick={e => this.clearMeasureLengthLayer()} />
            </div>,
            dom
          );

          layer
            .bindTooltip(dom, {
              permanent: true,
              interactive: true,
              direction: 'right',
              className: 'measuretooltip',
            })
            .addTo(this.map)
            .openTooltip(latlngs[latlngs.length - 1]);
        }).bind(this)
      );
    }
    draw.enable();
  }

  clearMeasureLengthLayer() {
    if (this.measureLengthLayer) this.measureLengthLayer.remove();
  }

  getLocation() {
    var { x, y } = this;
    if (!(x > -180 && x < 180)) {
      notification.error({
        description: '经度坐标范围应在-180°~180°之间',
        message: '错误',
      });
      return;
    }
    if (!(y < 90 && y > -90)) {
      notification.error({
        description: '维度坐标范围应在-90°~90°之间',
        message: '错误',
      });
      return;
    }
    this.clearLocationMarker();
    this.setLocationMarker(x, y);
  }

  setLocationMarker(x, y) {
    var pnt = [y, x];
    this.map.panTo(pnt);
    this.locationMarker = L.marker(pnt, { icon: icon0 }).addTo(this.map);
  }

  clearCoordinatesMarker() {
    if (this.coordinatesMarker) this.coordinatesMarker.remove();
  }

  clearLocationMarker() {
    if (this.locationMarker) this.locationMarker.remove();
  }

  showLocationPanel() {
    this.setState({ showLocationPanel: true });
  }

  hideLocationPanel() {
    this.setState({ showLocationPanel: false });
  }

  clearMap() {
    this.clearLocationMarker();
    this.clearCoordinatesMarker();
    this.clearMeasureAreaLayer();
    this.clearMeasureLengthLayer();
  }

  componentDidMount() {
    var map = this.initMap();
    this.map = map;
    window.map = map;
    this.setState({ mapReady: true });
  }

  initMap() {
    var { x, y } = this.state;
    const map = L.map(this.mapDom, {
      zoomControl: false,
      attributionControl: false,
      crs: L.CRS.EPSG4490,
      center: [y, x],
      zoom: 14,
    });

    map.on('mousemove', e =>
      this.setState({ x: e.latlng.lng.toFixed(4) - 0, y: e.latlng.lat.toFixed(4) - 0 })
    );

    L.tileLayer.tdtgj_vec().addTo(map);

    L.control.scale({ position: 'bottomleft', imperial: false }).addTo(map);
    L.control
      .zoom({ position: 'bottomright', zoomInTitle: '放大', zoomOutTitle: '缩小' })
      .addTo(map);
    return map;
  }

  render() {
    var { mapReady, showLayerControl, x, y, showLocationPanel } = this.state;
    return (
      <div className={st.mapservice}>
        <div
          className={st.map}
          ref={e => {
            this.mapDom = e;
          }}
        />
        <div className={st.latlng}>
          ( 经度: {x} , 维度 : {y} )
        </div>
        <div className={st.navs}>
          <span>©地理信息公共服务平台&emsp;@智慧新吴科技有限公司</span>
          <Link to="/home">首&ensp;页</Link>
          <Link to="/data">数据服务</Link>
          <Link to="/home">分析服务</Link>
          <Link to="/home">制图服务</Link>
          <Link to="/developer">应用开发</Link>
        </div>
        <HeaderBar onLayerClick={e => this.toggleLayerControl()} ref={e => (this.headerBar = e)} />
        <Toolbar
          onMeasureLength={this.enableMeasureLength.bind(this)}
          onMeasureArea={this.enableMeasureArea.bind(this)}
          onPickCoordinates={this.pickerCoordinates.bind(this)}
          onGetLocation={this.showLocationPanel.bind(this)}
          onLayers={this.showLayerControl.bind(this)}
          onClear={this.clearMap.bind(this)}
        />
        {mapReady ? (
          <LayerControl show={showLayerControl} map={this.map} ref={e => (this.layerControl = e)} />
        ) : null}

        <div className={st.locationpanel + (showLocationPanel ? ' active' : '')}>
          <Input
            type="number"
            onChange={e => {
              this.x = e.target.value - 0;
            }}
            addonBefore="经度"
            defaultValue={this.x}
          />
          <Input
            type="number"
            onChange={e => {
              this.y = e.target.value - 0;
            }}
            addonBefore="维度"
            defaultValue={this.y}
          />
          <Button onClick={e => this.clearLocationMarker()}>清除定位</Button>
          <Button type="primary" onClick={e => this.getLocation()}>
            <span className="iconfont icon-location" />定位
          </Button>
          <Icon type="close-circle" onClick={this.hideLocationPanel.bind(this)} />
        </div>
      </div>
    );
  }
}

export default MapService;
