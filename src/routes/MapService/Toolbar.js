import { Component } from 'react';
import st from './Toolbar.less';

class Toolbar extends Component {
  static deafaultProps = {
    onMeasureLength: () => {},
    onMeasureArea: () => {},
    onPickCoordinates: () => {},
    onGetLocation: () => {},
    onLayers: () => {},
    onClear: () => {},
  };

  render() {
    return (
      <div className={st.toolbar}>
        <span className="iconfont icon-changduceliang" onClick={this.props.onMeasureLength}>
          测距
        </span>
        <span className="iconfont icon-mianji" onClick={this.props.onMeasureArea}>
          测面
        </span>
        <span className="iconfont icon-qingchu" onClick={this.props.onClear}>
          清除
        </span>
        <span className="iconfont icon-zuobiao" onClick={this.props.onPickCoordinates}>
          坐标拾取
        </span>
        <span className="iconfont icon-location" onClick={this.props.onGetLocation}>
          坐标定位
        </span>
        <span className="iconfont icon-shuju2" onClick={this.props.onLayers}>
          资源目录
        </span>
      </div>
    );
  }
}

export default Toolbar;
