import React, { Component } from 'react';
import L from '../../common/leaflet.extends.js';
import st from './MapService.less';

class MapService extends Component {
  componentDidMount() {
    this.initMap();
  }

  initMap() {
    const map = L.map(this.mapDom, {
      zoomControl: false,
      attributionControl: false,
      crs: L.CRS.EPSG4490,
      center: [31.4928, 120.3596],
      zoom: 14,
    });

    L.control.scale({ position: 'bottomleft', imperial: false }).addTo(map);

    L.tileLayer.tdtgj_vec().addTo(map);
    this.map = map;
  }

  render() {
    return (
      <div className={st.mapservice}>
        <div
          className={st.map}
          ref={e => {
            this.mapDom = e;
          }}
        />
      </div>
    );
  }
}

export default MapService;
