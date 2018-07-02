import { Component } from 'react';
import { Input, Button, Slider, Checkbox } from 'antd';

import st from './TitlePanel.less';

class MapTitle extends Component {
  render() {
    let { title, titleStyle, backgroundStyle } = this.props;

    return (
      <div className={st.maptitle}>
        {title ? (
          <div style={titleStyle}>
            {title}
            <div style={backgroundStyle} />
          </div>
        ) : null}
      </div>
    );
  }
}

class TitlePanel extends Component {
  title = '';
  color = TitlePanel.options.color;
  fontSize = TitlePanel.options.fontSize;
  background = TitlePanel.options.background;
  opacity = TitlePanel.options.opacity;

  getOptions() {
    return {
      title: this.title,
      titleStyle: {
        color: this.color,
        fontSize: this.fontSize,
      },
      backgroundStyle: {
        background: this.background,
        opacity: this.opacity,
      },
    };
  }

  changeTitle() {
    this.props.onTitleChange(this.getOptions());
  }

  render() {
    return (
      <div className={st.titlepanel}>
        <div>
          <span>标题：</span>
          <Input
            onChange={e => {
              this.title = e.target.value;
              this.changeTitle();
            }}
          />
        </div>
        <div>
          <span>字色：</span>
          <input
            type="color"
            defaultValue={TitlePanel.options.color}
            onChange={e => {
              this.color = e.target.value;
              this.changeTitle();
            }}
          />
        </div>
        <div>
          <span>字号：</span>
          <Slider
            min={18}
            max={70}
            step={2}
            style={{ width: 220 }}
            defaultValue={TitlePanel.options.fontSize}
            onChange={e => {
              this.fontSize = e;
              this.changeTitle();
            }}
          />
        </div>
        <div>
          <span>背景色：</span>
          <input
            type="color"
            defaultValue={TitlePanel.options.background}
            onChange={e => {
              this.background = e.target.value;
              this.changeTitle();
            }}
          />
        </div>
        <div>
          <span>透明度：</span>
          <Slider
            min={0}
            max={1}
            step={0.1}
            style={{ width: 220 }}
            defaultValue={TitlePanel.options.opacity}
            onChange={e => {
              this.opacity = e;
              this.changeTitle();
            }}
          />
        </div>
      </div>
    );
  }
}

TitlePanel.options = {
  color: '#000000',
  fontSize: 22,
  background: '#ffffff',
  opacity: 0,
};

export { MapTitle };
export default TitlePanel;
