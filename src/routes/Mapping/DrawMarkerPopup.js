import { Component } from 'react';
import { Checkbox, Input, Radio, Button, Modal } from 'antd';
import DrawMarkerPanel from './DrawMarkerPanel';
import st from './DrawMarkerPopup.less';
import { Popover } from 'antd';

const confirm = Modal.confirm;

class DrawMarkerPopup extends Component {
  state = {
    popup: false,
    tooltip: false,
    icon: this.props.icon,
  };

  tooltipPosition = 'top';

  getOptions() {
    return {
      type: 'marker',
      popup: this.state.popup,
      tooltip: this.state.tooltip,
      iconId: this.state.icon.id,
      popupTitle: this.popupTitle,
      popupContent: this.popupContent,
      tooltipContent: this.tooltipContent,
    };
  }

  setTooltip() {
    let { layer } = this.props;
    if (this.state.tooltip) {
      layer.unbindTooltip().bindTooltip(this.tooltipContent, {
        permanent: true,
        direction: this.tooltipPosition,
        className: 'ct-tooltip',
      });
    } else {
      layer.unbindTooltip();
    }
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
    let { popup, tooltip, icon } = this.state;

    return (
      <div className={st.drawmarkerpopup}>
        <div>
          <Checkbox
            onChange={e => {
              this.setState({ popup: e.target.checked });
            }}
          >
            弹出框
          </Checkbox>
          <div>
            标题：<Input
              disabled={!popup}
              onChange={e => {
                this.popupTitle = e.target.value;
              }}
            />
          </div>
          <div>
            内容：<Input.TextArea
              disabled={!popup}
              onChange={e => {
                this.popupContent = e.target.value;
              }}
            />
          </div>
        </div>
        <div>
          <Checkbox
            onChange={e => this.setState({ tooltip: e.target.checked }, this.setTooltip.bind(this))}
          >
            地图标注
          </Checkbox>
          <div>
            内容：<Input
              disabled={!tooltip}
              onChange={e => {
                this.tooltipContent = e.target.value;
                this.setTooltip();
              }}
            />
          </div>
          {/* <div>
            位置：
            <Radio.Group
              onChange={e => {
                this.tooltipPosition = e.target.value;
                this.setTooltip();
              }}
              defaultValue={this.tooltipPosition}
              disabled={!tooltip}
            >
              <Radio value="top">上</Radio>
              <Radio value="bottom">下</Radio>
              <Radio value="left">左</Radio>
              <Radio value="right">右</Radio>
            </Radio.Group>
          </div> */}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          符号：
          <Popover
            placement="right"
            content={
              <DrawMarkerPanel
                iconClick={i => {
                  this.setState({ icon: i });
                  this.props.layer.setIcon(i.icon);
                }}
              />
            }
          >
            <div className="ct-icon">
              <svg className="icon" ariaHidden="true">
                <use xlinkHref={`#${icon.id}`} />
              </svg>
            </div>
          </Popover>
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

DrawMarkerPopup.init = (layer, icon) => {
  let dom = document.createElement('div');
  let cmp = ReactDOM.render(<DrawMarkerPopup layer={layer} icon={icon} />, dom);
  layer.bindPopup(dom);
  layer.component = cmp;
};

export default DrawMarkerPopup;
