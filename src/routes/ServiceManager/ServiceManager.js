import { Component } from 'react';
import { Icon, Tabs } from 'antd';
import navs from '../../common/navs.js';
import st from './ServiceManager.less';
import Usage from './Usage';
import Services from './Services';

const TabPane = Tabs.TabPane;

class ServiceManager extends Component {
  render() {
    return (
      <div className={st.servicemanager}>
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
          <Tabs defaultActiveKey="1" tabPosition="top">
            <TabPane
              tab={
                <span>
                  <Icon type="line-chart" />服务总览
                </span>
              }
              key="1"
            >
              <Usage />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="book" />服务管理
                </span>
              }
              key="2"
            >
              <Services />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default ServiceManager;
