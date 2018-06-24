import { Component } from 'react';
import { Icon } from 'antd';
import navs from '../../common/navs.js';
import st from './Constructing.less';

class Constructing extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <div className={st.constructing}>
        <div className={st.header}>
          <div className={st.logo}>
            <span className="iconfont icon-geographic-information" />地理信息公共服务平台
          </div>
          <div className={st.phone}>
            <Icon type="phone" />服务热线：0000-123456
          </div>
        </div>
        <div className={st.navs}>
          <div>
            <div>{navs.map(i => i.component)}</div>
            <div className={st.user}>
              <Icon type="user" />张三（国土资源局）
            </div>
          </div>
        </div>
        <div className={st.body}>
          <div className={st.img}>
            <img src={require('./建设中1.jpg')} alt="" />
          </div>
          <div className={st.blank}>
            <canvas />
          </div>
        </div>
      </div>
    );
  }
}

export default Constructing;
