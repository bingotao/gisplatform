import { Component } from 'react';
import { Icon, Input, Tree } from 'antd';
import ServicePanel from './ServicePanel';
import dataServices from '../../common/dataServices';
import navs from '../../common/navs.js';
import st from './DataService.less';

const Search = Input.Search;
const TreeNode = Tree.TreeNode;

class DataService extends Component {
  state = {
    data: {},
  };

  getDataTree() {
    return (
      <Tree onSelect={(i, j) => this.updateServicePanel(j.node.props.data)}>
        {dataServices.map(i => {
          return (
            <TreeNode selectable={false} title={`${i.name}(${i.children.length})`}>
              {i.children
                ? i.children.map(j => {
                    return <TreeNode selectable={true} data={j} title={j.name} />;
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
            <ServicePanel service={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default DataService;
