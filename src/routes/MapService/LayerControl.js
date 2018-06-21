import React, { Component } from 'react';
import { Icon, Input, Radio, Collapse, Checkbox, Popover, Slider, Tooltip } from 'antd';
import { baseMaps, mapServices, xzq } from '../../common/mapServices.js';
import st from './LayerControl.less';
import LayerDesciption from './LayerDescription';

const { Search } = Input;
const RadioGroup = Radio.Group;
const { Panel } = Collapse;

class LayerControl extends Component {
  state = {
    isSearch: false,
    mapServices: mapServices,
    searchResult: [],
  };

  changeBaseMap(item) {
    for (const b of baseMaps.children) {
      b.layer.remove();
    }
    item.layer.addTo(this.props.map);
  }

  getSettingPanel(i) {
    switch (i.type) {
      case 'esri/dynamic':
        return (
          <div>
            <div className={st.settingitem}>
              透明度
              <Slider
                style={{ width: '160px' }}
                min={0}
                max={1}
                onChange={e => {
                  i.layer.setOpacity(e);
                }}
                defaultValue={i.opacity}
                step={0.01}
              />
            </div>
          </div>
        );
      case 'heat':
        return (
          <div>
            <div className={st.settingitem}>
              半径&ensp;
              <Slider
                style={{ width: '160px' }}
                min={1}
                max={100}
                onChange={e => {
                  i.layer.setOptions({ radius: e });
                }}
                defaultValue={i.radius}
                step={1}
              />
            </div>
            <div className={st.settingitem}>
              模糊&ensp;
              <Slider
                style={{ width: '160px' }}
                min={1}
                max={100}
                onChange={e => {
                  i.layer.setOptions({ blur: e });
                }}
                defaultValue={i.blur}
                step={1}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  getBaseMaps() {
    let defaultValue = null;
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const radios = baseMaps.children.map(e => {
      if (e.on) {
        defaultValue = e.id;
      }
      return (
        <Radio item={e} style={radioStyle} value={e.id}>
          {e.name}
        </Radio>
      );
    });
    return (
      <Collapse defaultActiveKey={[baseMaps.id]}>
        <Panel header={baseMaps.name} key={baseMaps.id}>
          <RadioGroup defaultValue={defaultValue} onChange={e => this.changeBaseMap(e.target.item)}>
            {radios}
          </RadioGroup>
        </Panel>
      </Collapse>
    );
  }

  getLayerDescription(i) {
    return <div className={st.layerdescription} />;
  }

  getServices() {
    var { mapServices } = this.state;
    var cmps = [];

    for (let m of mapServices) {
      cmps.push(
        <Collapse defaultActiveKey={[m.id]}>
          <Panel header={m.name} key={m.id}>
            {m.children.map(i => {
              return (
                <Checkbox
                  checked={i.on}
                  onChange={e => {
                    i.on = e.target.checked;
                    this.toggleLayer(i);
                    this.setState({});
                  }}
                  key={i.id}
                >
                  {i.name}

                  <Tooltip placement="right" title="点击设置">
                    <Popover title="设置" content={this.getSettingPanel(i)} trigger="click">
                      <Icon className={i.on ? 'show' : ''} type="setting" />
                    </Popover>
                  </Tooltip>
                  <Popover placement="right" title={i.name} content={<LayerDesciption item={i} />}>
                    <Icon type="bars" />
                  </Popover>
                </Checkbox>
              );
            })}
          </Panel>
        </Collapse>
      );
    }
    return cmps;
  }

  toggleLayer(i) {
    if (i.layer) {
      if (i.on) i.layer.addTo(this.props.map);
      else i.layer.remove();
    }
  }

  getResults() {
    const { searchResult } = this.state;
    return (
      <Collapse defaultActiveKey={['ssjg']}>
        <Panel header="搜索结果" key="ssjg">
          {searchResult.length ? (
            searchResult.map(i => {
              return (
                <Checkbox
                  checked={i.on}
                  onChange={e => {
                    i.on = e.target.checked;
                    this.toggleLayer(i);
                    this.setState({});
                  }}
                  key={i.id}
                >
                  {i.name}

                  <Tooltip placement="right" title="点击设置">
                    <Popover title="设置" content={this.getSettingPanel(i)} trigger="click">
                      <Icon className={i.on ? 'show' : ''} type="setting" />
                    </Popover>
                  </Tooltip>
                  <Popover placement="right" title={i.name} content={<LayerDesciption item={i} />}>
                    <Icon type="bars" />
                  </Popover>
                </Checkbox>
              );
            })
          ) : (
            <div className={st.nullresult}>未找到相应服务</div>
          )}
        </Panel>
      </Collapse>
    );
  }

  getSearchResult(keyword) {
    const { mapServices } = this.state;
    let services = [];
    const loop = (ss, services) => {
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
          isSearch: true,
          searchResult: services,
        });
      }
    } else {
      this.setState({ isSearch: false });
    }
  }

  onLayerControlClose() {
    if (this.props.closeLayerControl) this.props.closeLayerControl();
  }

  componentDidMount() {
    this.baseMapPane = this.props.map.createPane('basemappane');
    this.layerPanes = this.props.map.createPane('layerspane');

    for (const b of baseMaps.children) {
      if (b.on) {
        this.changeBaseMap(b);
      }
    }
    xzq.addTo(this.props.map);
  }

  render() {
    const { show } = this.props;
    const { isSearch } = this.state;
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
              onSearch={value => this.getSearchResult(value)}
            />
            <div className={st.services}>
              <div className={isSearch ? '' : 'active'}>
                {this.getBaseMaps()}
                {this.getServices()}
              </div>
              <div className={isSearch ? 'active' : ''}>{this.getResults()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LayerControl;
