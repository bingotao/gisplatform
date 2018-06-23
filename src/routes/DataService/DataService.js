import { Component } from 'react';
import st from './DataService.less';

class DataService extends Component {
  render() {
    return (
      <div className={st.dataservice}>
        <div className={st.header}>
          <div className={st.logo}>
            <span className="iconfont icon-geographic-information" />地理信息公共服务平台
          </div>
        </div>
        <div className={st.body} />
      </div>
    );
  }
}

export default DataService;