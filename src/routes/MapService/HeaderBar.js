import { Component } from 'react';
import { Tooltip } from 'antd';
import st from './HeaderBar.less';

class HeaderBar extends Component {
  onLayerClick() {
    var { onLayerClick } = this.props;
    if (onLayerClick) onLayerClick();
  }

  render() {
    return (
      <div className={st.headerbar}>
        <span className="iconfont icon-geographic-information" />地理信息公共服务平台
        <Tooltip placement="right" title="资源目录">
          <span className="iconfont icon-shuju2" onClick={e => this.onLayerClick()} />
        </Tooltip>
      </div>
    );
  }
}

export default HeaderBar;
