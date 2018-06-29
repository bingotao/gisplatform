import { Component } from 'react';
import { Input, Slider, Checkbox, Button, Radio } from 'antd';
import DrawLinePanel from './DrawLinePanel';
import st from './DrawPolygonPanel.less';

let RadioGroup = Radio.Group;

class DrawPolygonPanel extends Component {
  state = {
    popup: false,
  };

  color = this.props.style.color;
  weight = this.props.style.weight;
  opacity = this.props.style.opacity;
  strokeType = this.props.style.strokeType;
  fillColor = this.props.style.fillColor;
  fillOpacity = this.props.style.fillOpacity;

  getOptions() {
    let options = {
      color: this.color,
      weight: this.weight,
      opacity: this.opacity,
      dashArray: DrawLinePanel.getDashArray(this.strokeType, this.weight),
      fillColor: this.fillColor,
      fillOpacity: this.fillOpacity,
    };
    return options;
  }

  setStyle() {
    let { layer } = this.props;
    layer.setStyle(this.getOptions());
  }

  render() {
    let { popup } = this.state;
    let { color, weight, opacity, strokeType, fillColor, fillOpacity } = this.props.style;

    return (
      <div className={st.drawpolygonpanel}>
        <div>
          <div>边框线形：</div>
          <RadioGroup
            defaultValue={strokeType}
            onChange={e => {
              let strokeType = e.target.value;
              this.strokeType = strokeType;
              DrawPolygonPanel.options.strokeType = strokeType;
              this.setStyle();
            }}
          >
            <Radio.Button value="solid">实线</Radio.Button>
            <Radio.Button value="dot">点状</Radio.Button>
            <Radio.Button value="dash">虚线</Radio.Button>
          </RadioGroup>
        </div>
        <div>
          <div>边框颜色：</div>
          <div>
            <input
              type="color"
              defaultValue={color}
              onChange={e => {
                let color = e.target.value;
                this.color = color;
                DrawPolygonPanel.options.color = color;
                this.setStyle();
              }}
            />
          </div>
        </div>
        <div>
          <div>边框宽度：</div>
          <div>
            <Slider
              style={{ width: 160 }}
              min={0}
              max={10}
              defaultValue={weight}
              step={1}
              onChange={e => {
                let weight = e;
                this.weight = weight;
                DrawPolygonPanel.options.weight = weight;
                this.setStyle();
              }}
            />
          </div>
        </div>
        <div>
          <div>边框透明度：</div>
          <div>
            <Slider
              style={{ width: 160 }}
              min={0.1}
              max={1}
              step={0.1}
              defaultValue={opacity}
              onChange={e => {
                let opacity = e;
                this.opacity = opacity;
                DrawPolygonPanel.options.opacity = opacity;
                this.setStyle();
              }}
            />
          </div>
        </div>
        <div>
          <div>填充透明度：</div>
          <div>
            <Slider
              style={{ width: 160 }}
              min={0.1}
              max={1}
              step={0.1}
              defaultValue={fillOpacity}
              onChange={e => {
                let fillOpacity = e;
                this.fillOpacity = fillOpacity;
                DrawPolygonPanel.options.fillOpacity = fillOpacity;
                this.setStyle();
              }}
            />
          </div>
        </div>
        <div>
          <div>填充颜色：</div>
          <div>
            <input
              type="color"
              defaultValue={fillColor}
              onChange={e => {
                let fillColor = e.target.value;
                this.fillColor = fillColor;
                DrawPolygonPanel.options.fillColor = fillColor;
                this.setStyle();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

DrawPolygonPanel.options = {
  color: '#ff0000',
  weight: 2,
  opacity: 1,
  strokeType: 'solid',
  dashArray: '',
  fillColor: '#ff0000',
  fillOpacity: 0.3,
  fill: true,
};

export default DrawPolygonPanel;
