import { Component } from 'react';
import L from '../../common/leaflet.extends.js';
import { Icon, Popover } from 'antd';
import BaseMapPanel from './BaseMapPanel';
import ControlsPanel from './ControlsPanel';
import LayersPanel from './LayersPanel';
import st from './Mapping.less';
import { mapConfig } from '../../common/config.js';
import { getXZQ } from '../../common/mapServices.js';
let { x, y, zoom } = mapConfig;
let xzq = getXZQ();
class Mapping extends Component {
  state = {
    mapReady: false,
    layerControl: false,
  };

  initMap() {
    let map = L.map('mapping', {
      zoomControl: false,
      attributionControl: false,
      crs: L.CRS.EPSG4490,
    }).setView([y, x], zoom);

    map.createPane('layerspane');

    this.map = map;
    xzq.addTo(map);
    this.setState({ mapReady: true });
    map.on('click', e => {
      this.setState({ layerControl: false });
    });
  }

  componentDidMount() {
    this.initMap();
  }

  render() {
    const { mapReady, layerControl } = this.state;
    return (
      <div className={st.mapping}>
        <div
          id="mapping"
          className={st.map}
          ref={e => {
            this.mapDom = e;
          }}
        />
        <div className={st.toolbar}>
          <span className="iconfont icon-geographic-information">
            <span>在线制图</span>
          </span>
          <Popover
            trigger={'click'}
            defaultVisible={true}
            title="选择底图"
            content={mapReady ? <BaseMapPanel map={this.map} /> : null}
            placement="rightBottom"
          >
            <div className="iconfont icon-map1">底图</div>
          </Popover>
          <Popover
            trigger={'click'}
            title="选择图层"
            visible={layerControl}
            content={mapReady ? <LayersPanel map={this.map} /> : null}
            placement="right"
          >
            <div
              onClick={e => this.setState({ layerControl: true })}
              className="iconfont icon-shuju2"
            >
              图层
            </div>
          </Popover>

          <Popover
            trigger={'click'}
            title="设置控件"
            content={mapReady ? <ControlsPanel map={this.map} /> : null}
            placement="right"
          >
            <div className="iconfont icon-kefujingli-">控件</div>
          </Popover>

          <div className="iconfont icon-wenzi">文字</div>
          <div className="iconfont icon-location">绘点</div>
          <div className="iconfont icon-kongjianjuliceliang">绘线</div>
          <div className="iconfont icon-mianji">绘面</div>
          <div className="iconfont icon-biaoti">标题</div>
          <div className="iconfont icon-miaoshu">描述</div>
          <div className="anticon anticon-desktop">预览</div>
        </div>
      </div>
    );
  }
}

export default Mapping;
