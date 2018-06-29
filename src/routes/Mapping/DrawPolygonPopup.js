import { Component } from 'react';
import { Input, Button, Checkbox, Popover, Modal } from 'antd';
import DrawPolygonPanel from './DrawPolygonPanel';
import st from './DrawPolygonPopup.less';

const confirm = Modal.confirm;
class DrawPolygonPopup extends Component {
  state = {
    popup: false,
    edit: false,
  };

  getOptions() {
    return {
      type: 'polygon',
      popup: this.state.popup,
      popupTitle: this.popupTitle,
      popupContent: this.popupContent,
      ...this.props.style,
      ...(this.drawPolygonPanel ? this.drawPolygonPanel.getOptions() : this.props.style),
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
    let { layer, style } = this.props;
    let { edit, popup } = this.state;

    return (
      <div className={st.drawpolygonpopup}>
        <div>
          <Checkbox defaultValue={popup} onChange={e => this.setState({ popup: e.target.checked })}>
            弹出框
          </Checkbox>
          <div>
            <div>
              <span>标题：</span>
              <Input
                disabled={!popup}
                onChange={e => {
                  this.popupTitle = e.target.value;
                }}
              />
            </div>
            <div>
              <span>内容：</span>
              <Input
                disabled={!popup}
                onChange={e => {
                  this.popupContent = e.target.value;
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <Popover
            trigger="click"
            title="设置符号"
            placement="top"
            autoAdjustOverflow={false}
            content={
              <DrawPolygonPanel
                ref={e => {
                  this.drawPolygonPanel = e;
                }}
                layer={layer}
                style={style}
              />
            }
          >
            <Button type="primary">设置符号</Button>
          </Popover>&ensp;
          <Button onClick={this.delete.bind(this)}>删除</Button>
        </div>
      </div>
    );
  }
}

DrawPolygonPopup.init = (layer, style) => {
  let dom = document.createElement('div');
  let cmp = ReactDOM.render(<DrawPolygonPopup layer={layer} style={style} />, dom);
  layer.bindPopup(dom);
  layer.component = cmp;
};

export default DrawPolygonPopup;
