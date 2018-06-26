import { Component } from 'react';
import L from '../../common/leaflet.extends.js';
import { Radio } from 'antd';
import st from './ControlsPanel.less';

const RadioGroup = Radio.Group;

class ControlsPanel extends Component {
  static defaultProps = {
    zoom: '',
    scale: '',
  };

  changeZoom(e) {
    let { map } = this.props;
    if (e) {
      this.zoom.setPosition(e).addTo(map);
    } else {
      this.zoom.remove();
    }
  }

  changeScale(e) {
    let { map } = this.props;
    if (e) {
      this.scale.setPosition(e).addTo(map);
    } else {
      this.scale.remove();
    }
  }

  changePosition(e) {
    let { map } = this.props;
    if (e) {
      this.position.setPosition(e).addTo(map);
    } else {
      this.position.remove();
    }
  }

  componentDidMount() {
    this.zoom = L.control.zoom({
      zoomInTitle: '放大',
      zoomOutTitle: '缩小',
    });
    this.scale = L.control.scale({ imperial: false });
    this.position = L.control.mousePosition();
  }

  render() {
    let { zoom, scale } = this.props;

    return (
      <div className={st.controlspanel}>
        <div>
          <h4>缩放</h4>
          <RadioGroup onChange={e => this.changeZoom(e.target.value)} defaultValue={zoom}>
            <Radio value="">无</Radio>
            <br/>
            <Radio value="topleft">左上</Radio>
            <Radio value="topright">右上</Radio>
            <br/>
            <Radio value="bottomleft">左下</Radio>
            <Radio value="bottomright">右下</Radio>
          </RadioGroup>
        </div>
        <div>
          <h4>比例尺</h4>
          <RadioGroup onChange={e => this.changeScale(e.target.value)} defaultValue={scale}>
            <Radio value="">无</Radio>
            <br/>
            <Radio value="topleft">左上</Radio>
            <Radio value="topright">右上</Radio>
            <br/>
            <Radio value="bottomleft">左下</Radio>
            <Radio value="bottomright">右下</Radio>
          </RadioGroup>
        </div>
        <div>
          <h4>坐标</h4>
          <RadioGroup onChange={e => this.changePosition(e.target.value)} defaultValue={scale}>
            <Radio value="">无</Radio>
            <br/>
            <Radio value="topleft">左上</Radio>
            <Radio value="topright">右上</Radio>
            <br/>
            <Radio value="bottomleft">左下</Radio>
            <Radio value="bottomright">右下</Radio>
          </RadioGroup>
        </div>
      </div>
    );
  }
}

export default ControlsPanel;
