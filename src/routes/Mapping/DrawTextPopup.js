import { Component } from 'react';
import { Radio, Checkbox, Button, Input, Modal } from 'antd';
import st from './DrawTextPopup.less';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const confirm = Modal.confirm;

class DrawTextPopup extends Component {
  text = '';
  color = DrawTextPopup.options.color;
  fontSize = DrawTextPopup.options.fontSize;
  fontFamily = DrawTextPopup.options.fontFamily;
  fontStyle = DrawTextPopup.options.fontStyle;
  fontWeight = DrawTextPopup.options.fontWeight;

  setText() {
    let { text, color, fontSize, fontFamily, fontStyle, fontWeight } = this;

    let { layer } = this.props;
    layer.setIcon(
      L.divIcon({
        className: 'ct-text-divicon',
        iconSize: [10, 10],
        html: `<nobr style="color:${color};font-size:${fontSize};font-family:${fontFamily};font-style:${fontStyle};font-weight:${fontWeight}">${text}</nobr>`,
      })
    );
  }

  getOptions() {
    let { text, color, fontSize, fontFamily, fontStyle, fontWeight } = this;
    return {
      type: 'text',
      text,
      text,
      color,
      fontSize,
      fontFamily,
      fontStyle,
      fontWeight,
    };
  }

  delete() {
    confirm({
      title: '确定',
      content: '确定删除？',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        this.props.layer.remove();
      },
      onCancel() {},
    });
  }

  render() {
    var opts = DrawTextPopup.options;
    return (
      <div className={st.drawtextpopup}>
        <div>
          <div>内容：</div>
          <div>
            <Input
              onChange={e => {
                this.text = e.target.value;
                this.setText();
              }}
            />
          </div>
        </div>
        <div>
          <div>字体：</div>
          <div>
            <RadioGroup
              defaultValue={opts.fontFamily}
              size="small"
              onChange={e => {
                this.fontFamily = e.target.value;
                opts.fontFamily = this.fontFamily;
                this.setText();
              }}
            >
              <RadioButton value="黑体">黑体</RadioButton>
              <RadioButton value="宋体">宋体</RadioButton>
              <RadioButton value="微软雅黑">微软雅黑</RadioButton>
            </RadioGroup>
          </div>
        </div>
        <div>
          <div>字号：</div>
          <div>
            <RadioGroup
              defaultValue={opts.fontSize}
              size="small"
              onChange={e => {
                this.fontSize = e.target.value;
                opts.fontSize = this.fontSize;
                this.setText();
              }}
            >
              <RadioButton value="18px">18px</RadioButton>
              <RadioButton value="24px">24px</RadioButton>
              <RadioButton value="32px">32px</RadioButton>
              <RadioButton value="40px">40px</RadioButton>
              <RadioButton value="50px">50px</RadioButton>
            </RadioGroup>
          </div>
        </div>
        <div>
          <div>颜色：</div>
          <div>
            <input
              type="color"
              defaultValue={opts.color}
              onChange={e => {
                this.color = e.target.value;
                opts.color = this.color;
                this.setText();
              }}
            />
          </div>
        </div>
        <div>
          <Checkbox
            defaultValue={opts.fontWeight !== 'normal'}
            onChange={e => {
              this.fontWeight = e.target.checked ? '700' : 'normal';
              opts.fontWeight = this.fontWeight;
              this.setText();
            }}
          >
            加粗
          </Checkbox>
          <Checkbox
            defaultValue={opts.fontStyle !== 'normal'}
            onChange={e => {
              this.fontStyle = e.target.checked ? 'italic' : 'normal';
              opts.fontStyle = this.fontStyle;
              this.setText();
            }}
          >
            斜体
          </Checkbox>
        </div>
        <div>
          <Button type="ghost" onClick={e => this.delete()}>
            删除
          </Button>
        </div>
      </div>
    );
  }
}

DrawTextPopup.options = {
  fontSize: '14px',
  fontFamily: '宋体',
  fontWeight: 'normal',
  color: '#ff0000',
  fontStyle: 'normal',
};

DrawTextPopup.init = layer => {
  let dom = document.createElement('div');
  let cmp = ReactDOM.render(<DrawTextPopup layer={layer} />, dom);
  layer.bindPopup(dom);
  layer.component = cmp;
};

export default DrawTextPopup;
