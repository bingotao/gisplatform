import React, { Component } from 'react';
import { baseMaps, mapServices } from '../../common/mapServices.js';
import st from './LayerControl.less';
import { Icon, Input, Tree, Radio, Collapse } from 'antd';

const Search = Input.Search,
  TreeNode = Tree.TreeNode,
  RadioGroup = Radio.Group,
  Panel = Collapse.Panel;

var t = mapServices;

class LayerControl extends Component {
  state = {
    checkedKeys: [],
    showBaseMapGroup: true,
    mapServices: mapServices,
  };

  checkedKeys = {};

  getBaseMaps() {
    var defaultValue = null;
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    var radios = baseMaps.children.map(e => {
      if (e.on) {
        defaultValue = e.id;
      }
      return (
        <Radio style={radioStyle} value={e.id}>
          {e.name}
        </Radio>
      );
    });
    return (
      <Collapse
        className={this.state.showBaseMapGroup ? '' : 'hidden'}
        defaultActiveKey={[baseMaps.id]}
      >
        <Panel header={baseMaps.name} key={baseMaps.id}>
          <RadioGroup defaultValue={defaultValue}>{radios}</RadioGroup>
        </Panel>
      </Collapse>
    );
  }

  getServices() {
    var { mapServices, checkedKeys } = this.state;
    var cmps = [];

    var loop = svs => {
      return svs.map(ss => {
        if (ss.children && ss.children.length) {
          return (
            <TreeNode disableCheckbox key={ss.id} title={ss.name}>
              {loop(ss.children)}
            </TreeNode>
          );
        } else {
          return <TreeNode item={ss} key={ss.id} title={ss.name} />;
        }
      });
    };

    for (let m of mapServices) {
      let id = m.id;
      cmps.push(
        <Collapse defaultActiveKey={[m.id]}>
          <Panel header={m.name} key={m.id}>
            <Tree
              checkedKeys={checkedKeys}
              onCheck={checkedKeys => {
                this.checkedKeys[id] = checkedKeys;
                let cks = [];

                for (let i in this.checkedKeys) {
                  cks = cks.concat(this.checkedKeys[i]);
                }

                this.setState({ checkedKeys: cks });
              }}
              checkable
              defaultExpandedKeys={[]}
            >
              {loop(m.children)}
            </Tree>
          </Panel>
        </Collapse>
      );
    }
    return cmps;
  }

  updateServices(keyword) {
    var services = [];
    var loop = (ss, services) => {
      for (let s of ss) {
        if (s.children && s.children.length) {
          loop(s.children, services);
        } else if (s.name.indexOf(keyword) > -1) {
          services.push(s);
        }
      }
    };
    if (keyword) {
      keyword = keyword.trim();
      if (keyword) {
        loop(mapServices, services);
        this.setState({
          showBaseMapGroup: false,
          mapServices: [
            {
              id: 'ssjg',
              name: '搜索结果',
              children: services,
            },
          ],
        });
      }
    } else {
      this.setState({ showBaseMapGroup: true, mapServices: mapServices });
    }
  }

  onLayerControlClose() {
    if (this.props.closeLayerControl) this.props.closeLayerControl();
  }

  render() {
    const { show } = this.props;
    return (
      <div className={`${st.layercontrol} ${show ? 'active' : ''}`}>
        <Icon
          className={st.closebtn}
          type="close-circle"
          onClick={() => this.onLayerControlClose()}
        />
        <div className={st.container}>
          <div className={st.header}>
            <span className="iconfont icon-shuju2" />
            资源目录
          </div>
          <div className={st.body}>
            <Search
              enterButton
              placeholder="请输入关键字..."
              onSearch={value => this.updateServices(value)}
            />
            <div className={st.services}>
              {this.getBaseMaps()}
              {this.getServices()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LayerControl;
