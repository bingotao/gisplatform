import { Component } from 'react';
import L from '../../common/leaflet.extends.js';
import { Button } from 'antd';
import { getBaseMaps, getXZQ } from '../../common/mapServices.js';
import { mapConfig } from '../../common/config.js';
import { icons } from '../../common/icons.js';

import st from './MappingViewer.less';

let mfg = store.get('mapping');
console.log(mfg);
let pane = 'layerspane';

class MappingViewer extends Component {
  initMap() {
    let { mapState, layers, title, control, baseMap, drawLayers } = mfg;

    let baseMapLayer = getBaseMaps().children.filter(i => i.id === baseMap)[0];
    let { x, y, zoom } = mapConfig;
    let xzq = getXZQ();

    let map = L.map(this.mapDom, {
      zoomControl: false,
      attributionControl: false,
      crs: L.CRS.EPSG4490,
    }).setView(mapState.center, mapState.zoom);
    map.createPane(pane);

    map.addLayer(baseMapLayer.layer);
    map.addLayer(xzq);

    this.map = map;
    // add controls
    if (control) {
      let { attr, attributionPosition, positionPosition, scalePostion, zoomPosition } = control;
      if (attributionPosition) {
        let attribution = L.control
          .attribution({ prefix: null, position: attributionPosition })
          .addTo(map);
        attribution.setAttribution(attr);
      }
      if (positionPosition) {
        L.control.mousePosition({ position: positionPosition }).addTo(map);
      }
      if (scalePostion) {
        L.control.scale({ imperial: false, position: scalePostion }).addTo(map);
      }
      if (zoomPosition) {
        L.control.zoom({ position: zoomPosition }).addTo(map);
      }
    }

    // add layers
    for (let i of layers) {
      let layer = this.getLayer(i);
      if (layer) layer.addTo(map);
    }

    // add draw layers
    for (let i of drawLayers) {
      let layer = this.getDrawLayer(i);
      if (layer) layer.addTo(map);
    }
  }

  getLayer(layer) {
    debugger;
    var flayer = null;
    switch (layer.type) {
      case 'featureLayer':
        return L.esri.featureLayer({
          url: layer.url,
          style: e => {
            return {
              fillColor: layer.fillColor,
              fillOpacity: layer.fillOpacity,
              stroke: false,
            };
          },
        });
      case 'heatLayer':
        return L.esri.Heat.featureLayer({
          url: layer.url,
          blur: layer.blur,
          radius: layer.radius,
        });
      case 'clusterLayer':
        return L.esri.Cluster.featureLayer({
          url: layer.url,
        });
      case 'esri/dynamic':
        return L.esri.dynamicMapLayer({
          ...layer,
        });
    }
  }

  getDrawLayer(layer) {
    var geoLayer = null;
    switch (layer.type) {
      case 'text':
        var { color, fontSize, fontFamily, fontStyle, fontWeight, text } = layer;
        geoLayer = L.marker(layer.geometry, {
          icon: L.divIcon({
            className: 'ct-text-divicon',
            iconSize: [10, 10],
            html: `<nobr style="color:${color};font-size:${fontSize};font-family:${fontFamily};font-style:${fontStyle};font-weight:${fontWeight}">${text}</nobr>`,
          }),
        });
        break;
      case 'marker':
        geoLayer = L.marker(layer.geometry, {
          icon: icons.filter(i => i.id === layer.iconId)[0].icon,
        });
        break;
      case 'polyline':
        geoLayer = L.polyline(layer.geometry, {
          ...layer,
        });
        break;
      case 'polygon':
        geoLayer = L.polygon(layer.geometry, {
          ...layer,
        });
        break;
      default:
        break;
    }

    if (geoLayer && layer.popup) {
      geoLayer.bindPopup(
        `<div class="ct-draw-popup"><h3>标题</h3><div>${layer.popupTitle}</div><h3>内容</h3><div>${
          layer.popupContent
        }</div></div>`
      );
    }
    if (geoLayer && layer.tooltip) {
      geoLayer.bindTooltip(layer.tooltipContent, {
        direction: 'top',
        permanent: true,
      });
    }
    return geoLayer;
  }

  componentDidMount() {
    if (mapConfig) {
      this.initMap(mapConfig);
    }
  }

  render() {
    let { title } = mfg;
    return (
      <div className={st.MappingViewer}>
        {
          <div className={st.maptitle}>
            {title && title.title ? (
              <div style={title.titleStyle}>
                {title.title}
                <div style={title.backgroundStyle} />
              </div>
            ) : null}
          </div>
        }
        <div
          id="mappingviewer"
          ref={e => {
            this.mapDom = e;
          }}
        />
      </div>
    );
  }
}

export default MappingViewer;
