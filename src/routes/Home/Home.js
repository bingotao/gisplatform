import React, { Component } from 'react';
import { Input, Carousel, Button, Icon } from 'antd';
import navs from '../../common/navs.js';
import st from './Home.less';

class Home extends Component {
  componentDidMount() {
    setInterval(e => {
      if (!this.in && this.carousel) this.carousel.next();
    }, 7000);

    this.slides.onmouseenter = e => {
      this.in = true;
    };
    this.slides.onmouseout = e => {
      this.in = false;
    };
  }

  render() {
    return (
      <div className={st.home}>
        <div className={st.header}>
          <div className={st.logo}>
            <span className="iconfont icon-geographic-information" />地理信息公共服务平台
          </div>
          <div className={st.toolbar}>
            <span className={st.sign}>注册</span>
            <span className={st.login}>登录</span>
          </div>
        </div>
        <div className={st.navs}>
          <div>
            {navs.map(i => i.component)}
            <Input placeholder="搜索..." />
          </div>
        </div>
        <div
          ref={e => {
            this.slides = e;
          }}
          className={st.slides}
        >
          <div className={st.pic} />
          <Carousel
            ref={e => {
              this.carousel = e;
            }}
            effect="fade"
          >
            <div key="0">
              <div className={st.d}>
                <Button type="primary" size="large">
                  在线地图服务<Icon type="arrow-right" />
                </Button>
                <div className={st.content}>汇集部门数据，提供OGC服务、ArcGIS服务</div>
                <div className={[st.d0, st.dd].join(' ')}>
                  <div />
                </div>
              </div>
            </div>
            <div key="1">
              <div className={st.d}>
                <Button type="primary" size="large">
                  在线数据服务<Icon type="arrow-right" />
                </Button>
                <div className={st.content}>在线数据服务接口，提供标准GeoJSON数据</div>
                <div className={[st.d1, st.dd].join(' ')}>
                  <div />
                </div>
              </div>
            </div>
            <div key="2">
              <div className={st.d}>
                <Button type="primary" size="large">
                  地理分析服务<Icon type="arrow-right" />
                </Button>
                <div className={st.content}>在线地理分析，洞悉数据地理空间特征</div>
                <div className={[st.d2, st.dd].join(' ')}>
                  <div />
                </div>
              </div>
            </div>
            <div key="3">
              <div className={st.d}>
                <Button type="primary" size="large">
                  在线制图服务<Icon type="arrow-right" />
                </Button>
                <div className={st.content}>轻松定制属于您自己的专题地图</div>
                <div className={[st.d3, st.dd].join(' ')}>
                  <div />
                </div>
              </div>
            </div>
            <div key="4">
              <div className={st.d}>
                <Button type="primary" size="large">
                  应用开发服务<Icon type="arrow-right" />
                </Button>
                <div className={st.content}>为开发人员提供地图深度定制的SDK</div>
                <div className={[st.d4, st.dd].join(' ')}>
                  <div />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className={st.item}>
          <div>
            <div className={[st.pic, st.pic0].join(' ')} />
            <div className={st.content}>
              <div>地理信息服务中心</div>
              <div>
                融合了包括地图服务、数据服务、制图服务、空间分析、应用开发等多种功能的服务平台
              </div>
            </div>
          </div>
        </div>
        <div className={st.item}>
          <div>
            <div className={st.content}>
              <div>地理数据轻松展示</div>
              <div>支持地理数据批量标注与展示，并提供多种可视化方式，让你轻轻松松浏览地图</div>
            </div>
            <div className={[st.pic, st.pic1].join(' ')} />
          </div>
        </div>
        <div className={st.item}>
          <div>
            <div className={[st.pic, st.pic2].join(' ')} />
            <div className={st.content}>
              <div>空间分析辅助决策</div>
              <div>支持按区域、类别对空间数据进行统计分析，辅助政务决策</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
