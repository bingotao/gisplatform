import { Component } from 'react';
import L from '../../common/leaflet.extends.js';
import { Radio, Input } from 'antd';
import st from './ControlsPanel.less';

const RadioGroup = Radio.Group;

class ControlsPanel extends Component {
  zoomPosition = '';
  scalePostion = '';
  positionPosition = '';
  attributionPosition = '';
  attr = '';

  getOptions() {
    return {
      zoomPosition: this.zoomPosition,
      scalePostion: this.scalePostion,
      positionPosition: this.positionPosition,
      attributionPosition: this.attributionPosition,
      attr: this.attr,
    };
  }

  changeZoom(e) {
    let { map } = this.props;
    this.zoomPosition = e;
    if (e) {
      this.zoom.setPosition(e).addTo(map);
    } else {
      this.zoom.remove();
    }
  }

  changeScale(e) {
    this.scalePostion = e;
    let { map } = this.props;
    if (e) {
      this.scale.setPosition(e).addTo(map);
    } else {
      this.scale.remove();
    }
  }

  changePosition(e) {
    this.positionPosition = e;
    let { map } = this.props;
    if (e) {
      this.position.setPosition(e).addTo(map);
    } else {
      this.position.remove();
    }
  }

  changeAttribution() {
    let { map } = this.props;
    if (this.attributionPosition && this.attr) {
      this.attribution.setAttribution(this.attr);
      this.attribution.setPosition(this.attributionPosition).addTo(map);
    } else {
      this.attribution.remove();
    }
  }

  componentDidMount() {
    this.zoom = L.control.zoom({
      zoomInTitle: '放大',
      zoomOutTitle: '缩小',
    });
    this.scale = L.control.scale({ imperial: false });
    this.position = L.control.mousePosition();
    this.attribution = L.control.attribution({ prefix: false });
  }

  render() {
    let { zoomPosition, scalePosition, positionPosition, attributionPosition } = this;

    return (
      <div className={st.controlspanel}>
        <div>
          <h4>缩放</h4>
          <RadioGroup onChange={e => this.changeZoom(e.target.value)} defaultValue={zoomPosition}>
            <Radio value="">无</Radio>
            <br />
            <Radio value="topleft">左上</Radio>
            <Radio value="topright">右上</Radio>
            <br />
            <Radio value="bottomleft">左下</Radio>
            <Radio value="bottomright">右下</Radio>
          </RadioGroup>
        </div>
        <div>
          <h4>比例尺</h4>
          <RadioGroup onChange={e => this.changeScale(e.target.value)} defaultValue={scalePosition}>
            <Radio value="">无</Radio>
            <br />
            <Radio value="topleft">左上</Radio>
            <Radio value="topright">右上</Radio>
            <br />
            <Radio value="bottomleft">左下</Radio>
            <Radio value="bottomright">右下</Radio>
          </RadioGroup>
        </div>
        <div>
          <h4>坐标</h4>
          <RadioGroup
            onChange={e => this.changePosition(e.target.value)}
            defaultValue={positionPosition}
          >
            <Radio value="">无</Radio>
            <br />
            <Radio value="topleft">左上</Radio>
            <Radio value="topright">右上</Radio>
            <br />
            <Radio value="bottomleft">左下</Radio>
            <Radio value="bottomright">右下</Radio>
          </RadioGroup>
        </div>
        <div>
          <h4>描述</h4>
          <div style={{ display: 'flex' }}>
            <RadioGroup
              style={{ width: 160 }}
              onChange={e => {
                this.attributionPosition = e.target.value;
                this.changeAttribution();
              }}
              defaultValue={attributionPosition}
            >
              <Radio value="">无</Radio>
              <br />
              <Radio value="topleft">左上</Radio>
              <Radio value="topright">右上</Radio>
              <br />
              <Radio value="bottomleft">左下</Radio>
              <Radio value="bottomright">右下</Radio>
            </RadioGroup>
            <Input.TextArea
              style={{ width: 200 }}
              placeHolder="请输入描述信息"
              onChange={e => {
                // this.oAttr = this.attr;
                this.attr = e.target.value;
                this.changeAttribution();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ControlsPanel;
