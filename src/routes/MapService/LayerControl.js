import { Component } from 'react';
import mapServices from '../../common/mapServices.js';
import st from './LayerControl.less';

class LayerControl extends Component {
  state = {
    mapServices: mapServices,
  };

  addLayer(ms) {
    if (this.map) {
    }
  }

  render() {
    var { show } = this.props;
    return <div className={`${st.layercontrol} ${show ? 'active' : ''}`}>layerControl</div>;
  }
}

export default LayerControl;
