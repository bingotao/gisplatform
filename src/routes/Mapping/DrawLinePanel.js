import { Component } from 'react';

import { Input, Slider, Checkbox, Button, Radio } from 'antd';

import st from './DrawLinePanel.less';

let RadioGroup = Radio.Group;

class DrawLinePanel extends Component {
  state = {
    popup: false,
  };

  color = this.props.style.color;
  weight = this.props.style.weight;
  opacity = this.props.style.opacity;
  strokeType = this.props.style.strokeType;

  getOptions() {
    let options = {
      
      color: this.color,
      weight: this.weight,
      opacity: this.opacity,
      dashArray: DrawLinePanel.getDashArray(this.strokeType, this.weight),
    };
    return options;
  }

  setStyle() {
    let { layer } = this.props;
    layer.setStyle(this.getOptions());
  }

  render() {
    let { popup } = this.state;
    let { color, weight, opacity, strokeType } = this.props.style;

    return (
      <div className={st.drawlinepanel}>
        <div>
          <div>线形：</div>
          <RadioGroup
            defaultValue={strokeType}
            onChange={e => {
              let strokeType = e.target.value;
              this.strokeType = strokeType;
              DrawLinePanel.options.strokeType = strokeType;
              this.setStyle();
            }}
          >
            <Radio.Button value="solid">实线</Radio.Button>
            <Radio.Button value="dot">点状</Radio.Button>
            <Radio.Button value="dash">虚线</Radio.Button>
          </RadioGroup>
        </div>
        <div>
          <div>颜色：</div>
          <div>
            <input
              type="color"
              defaultValue={color}
              onChange={e => {
                let color = e.target.value;
                this.color = color;
                DrawLinePanel.options.color = color;
                this.setStyle();
              }}
            />
          </div>
        </div>
        <div>
          <div>线宽：</div>
          <div>
            <Slider
              style={{ width: 200 }}
              min={1}
              max={10}
              defaultValue={weight}
              step={1}
              onChange={e => {
                let weight = e;
                this.weight = weight;
                DrawLinePanel.options.weight = weight;
                this.setStyle();
              }}
            />
          </div>
        </div>
        <div>
          <div>透明度：</div>
          <div>
            <Slider
              style={{ width: 200 }}
              min={0.1}
              max={1}
              step={0.1}
              defaultValue={opacity}
              onChange={e => {
                let opacity = e;
                this.opacity = opacity;
                DrawLinePanel.options.opacity = opacity;
                this.setStyle();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

DrawLinePanel.getDashArray = (type, weight) => {
  let dashArray = '';
  switch (type) {
    case 'solid':
      dashArray = '';
      break;
    case 'dot':
      dashArray = `${weight / 2},${weight * 2}`;
      break;
    case 'dash':
      dashArray = `${weight * 2},${weight * 4}`;
      break;
    default:
      break;
  }
  return dashArray;
};

DrawLinePanel.options = {
  color: '#ff0000',
  weight: 2,
  opacity: 1,
  strokeType: 'solid',
  dashArray: '',
};

export default DrawLinePanel;
