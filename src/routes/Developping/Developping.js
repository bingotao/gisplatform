import { Component } from 'react';
import { Icon, Tabs } from 'antd';
import navs from '../../common/navs.js';
import st from './Developping.less';
import QuickStart from './QuickStart';
import Guidelines from './Guidelines';
import ClassReference from './ClassReference';
import BackTop from './BackTop';
import InstanceLearning from './InstanceLearning';

const { TabPane } = Tabs;

class Developping extends Component {
  getAnchor = (dom) => {
    $('#developing').animate({
      scrollTop: $(dom).offset().top
    }, { duration: 500, easing: "swing" });
    return false;
  }
  render() {
    return (
      <div className={st.developing} id="developing">
        <div className={st.header}>
          <div className={st.logo}>
            <span className="iconfont icon-geographic-information" />新吴区地理信息公共服务平台
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
        <div className={st.body} id="developing-body">
          <Tabs defaultActiveKey="1" size={"Default"} tabPosition={"left"}>
            <TabPane tab="概述" key="1"><QuickStart getAnchor={this.getAnchor} /></TabPane>
            <TabPane tab="开发指南" key="2"><Guidelines getAnchor={this.getAnchor} /></TabPane>
            <TabPane tab="类参考" key="3"><ClassReference getAnchor={this.getAnchor} />></TabPane>
            <TabPane tab="实例学习" key="4"><InstanceLearning getAnchor={this.getAnchor} /></TabPane>
          </Tabs>
        </div>
        <BackTop />
      </div>
    );
  }
}

export default Developping;