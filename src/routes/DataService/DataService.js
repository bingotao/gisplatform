import { Component } from 'react';
import { Icon, Input, Tree, Button, notification } from 'antd';
import ServicePanel from './ServicePanel';
import dataServices from '../../common/dataServices';
import navs from '../../common/navs.js';
import st from './DataService.less';

const Search = Input.Search;
const TreeNode = Tree.TreeNode;

class DataService extends Component {
  state = {
    data: {},
    applyObject: {},
  };

  addToApplyList(service) {
    if (service) {
      let { applyObject } = this.state;
      applyObject[service.id] = service;
      this.setState({});
    }
  }

  removeFromApplyList(service) {
    let { applyObject } = this.state;
    applyObject[service.id] = null;
    this.setState({});
  }

  clearApplyList() {
    this.setState({ applyObject: {} });
  }

  getApplyList() {
    let { applyObject } = this.state;
    let list = [];
    for (let i in applyObject) {
      if (applyObject[i]) {
        list.push(applyObject[i]);
      }
    }
    return list;
  }

  getDataTree() {
    return (
      <Tree onSelect={(i, j) => this.updateServicePanel(j.node.props.data)}>
        {dataServices.map(i => {
          return (
            <TreeNode selectable={false} title={<span>{`${i.name}(${i.children.length})`}</span>}>
              {i.children
                ? i.children.map(j => {
                    return (
                      <TreeNode
                        selectable={true}
                        data={j}
                        title={
                          <span>
                            <Icon type="pushpin-o" />
                            {j.name}
                          </span>
                        }
                      />
                    );
                  })
                : null}
            </TreeNode>
          );
        })}
      </Tree>
    );
  }

  updateServicePanel(data) {
    this.setState({ data });
  }

  render() {
    let { applyObject } = this.state;
    let applyList = this.getApplyList();

    return (
      <div className={st.dataservice}>
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
          <div className={st.datatree}>
            <div className={st.header}>
              <Icon type="bars" />资源目录
            </div>
            <div className={st.search}>
              <Search
                placeholder="请输入服务名称"
                onSearch={value => console.log(value)}
                enterButton
              />
            </div>
            <div className={st.tree}>{this.getDataTree()}</div>
          </div>
          <div className={st.setting}>
            <ServicePanel
              addToApplyList={this.addToApplyList.bind(this)}
              service={this.state.data}
            />
          </div>
        </div>
        <div className={st.applylist + (applyList.length ? ' active' : '')}>
          <h3>申请单</h3>
          <div>
            <h4>申请内容</h4>
            <div>
              {applyList.map((i, index) => {
                return (
                  <span key={i.id}>
                    ({index + 1}){i.name}
                    <Icon
                      type="close-circle-o"
                      onClick={e => {
                        this.removeFromApplyList(i);
                      }}
                    />
                  </span>
                );
              })}
            </div>
          </div>
          <div>
            <h4>申请说明</h4>
            <Input.TextArea />
          </div>
          <Button
            type="primary"
            onClick={e => {
              notification.success({
                description: '申请提交成功，请等待管理员审核！',
                message: '成功',
              });
              this.clearApplyList();
            }}
          >
            提交申请
          </Button>
        </div>
      </div>
    );
  }
}

export default DataService;
