import React, { Component } from 'react';
import {
  Icon,
  Input,
  Radio,
  Collapse,
  Checkbox,
  Popover,
  Slider,
  Tooltip,
  notification,
  Button,
} from 'antd';
import { getBaseMaps, getXZQ, getMapServices } from '../../common/mapServices.js';
import st from './LayerControl.less';
import LayerDesciption from './LayerDescription';
import IdentifyPopup from './IdentifyPopup';

const { Search } = Input;
const RadioGroup = Radio.Group;
const { Panel } = Collapse;
const mapServices = getMapServices();
const baseMaps = getBaseMaps();
const xzq = getXZQ();

class LayerControl extends Component {
  state = {
    isSearch: false,
    mapServices: mapServices,
    searchResult: [],
  };

  identifyLayers = [];
  applyServices = [];

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
      <Collapse>
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

  refreshIdentifyLayers() {
    var { mapServices } = this.state;
    this.identifyLayers = [];
    mapServices.map(i => {
      i.children.map(j => {
        if (j.on && j.identifyLayers && j.identifyLayers.length) {
          this.identifyLayers.push(j);
        }
      });
    });
  }

  getServices() {
    var { mapServices } = this.state;
    var cmps = [];

    for (let m of mapServices) {
      cmps.push(
        <Collapse defaultActiveKey={[m.id]}>
          <Panel header={m.name} key={m.id}>
            {this.getLayerCheckbox(m.children)}
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

  getLayerCheckbox(layers) {
    return layers.map(i => {
      return (
        <Checkbox
          checked={i.on}
          onChange={e => {
            i.on = e.target.checked;
            this.toggleLayer(i);
            this.refreshIdentifyLayers();
            this.setState({});
          }}
          key={i.id}
        >
          {i.name}
          <Popover
            placement="right"
            title={
              <div>
                {i.name}
                {i.applyable ? (
                  <span>
                    <Button
                      className={st.applybtn}
                      size="small"
                      onClick={e => this.disapplyMapService(i)}
                      type="primary"
                    >
                      - 申请
                    </Button>
                    <Button
                      className={st.applybtn}
                      size="small"
                      onClick={e => this.applyMapService(i)}
                      type="primary"
                    >
                      + 申请
                    </Button>
                  </span>
                ) : null}
              </div>
            }
            content={<LayerDesciption item={i} />}
          >
            <Icon type="bars" />
          </Popover>
          <Tooltip placement="right" title="点击设置">
            <Popover title="设置" content={this.getSettingPanel(i)} trigger="click">
              <Icon className={i.on ? 'show' : ''} type="setting" />
            </Popover>
          </Tooltip>
        </Checkbox>
      );
    });
  }

  applyMapService(layer) {
    layer.apply = true;
    this.refreshApplyServices();
  }

  disapplyAll() {
    var { mapServices } = this.state;
    mapServices.map(i => {
      i.children.map(j => {
        if (j.applyable) {
          j.apply = false;
        }
      });
    });
    this.refreshApplyServices();
  }

  disapplyMapService(layer) {
    layer.apply = false;
    this.refreshApplyServices();
  }

  refreshApplyServices() {
    var { mapServices } = this.state;
    this.applyServices = [];
    mapServices.map(i => {
      i.children.map(j => {
        if (j.applyable && j.apply) {
          this.applyServices.push(j);
        }
      });
    });
    if (this.props.applyServicesChange) this.props.applyServicesChange(this.applyServices);
  }

  getResults() {
    const { searchResult } = this.state;
    return (
      <Collapse defaultActiveKey={['ssjg']}>
        <Panel header="搜索结果" key="ssjg">
          {searchResult.length ? (
            this.getLayerCheckbox(searchResult)
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
    const { map } = this.props;
    // 加载底图
    for (const b of baseMaps.children) {
      if (b.on) {
        this.changeBaseMap(b);
      }
    }
    xzq.addTo(map);

    // 要素查询
    map.on('click', e => {
      let pnt = e.latlng,
        iLayers = this.identifyLayers;
      let l = iLayers.length;
      if (l) {
        var returnCnt = 0;
        var results = [];
        var ftCnt = 0,
          identifyCnt = 0;
        for (var i = 0; i < l; i++) {
          var layer = iLayers[i],
            identifyLayers = layer.identifyLayers;
          let name = layer.name;
          // 如果设定了识别级别
          if (!layer.identifyLevel || (layer.identifyLevel && zoom >= layer.identifyLevel)) {
            identifyCnt++;
            var layerstr =
              identifyLayers.indexOf('*') == 0 ? 'all' : 'all:' + identifyLayers.join(',');
            layer.layer
              .identify()
              .on(map)
              .layers(layerstr)
              .at(pnt)
              .run(function(er, ftCol, eFtCol) {
                returnCnt++;
                if (!er && ftCol.features.length) {
                  ftCnt += ftCol.features.length;
                  results.push({
                    name: name,
                    ftCol: ftCol,
                    eFtCol: eFtCol,
                  });
                }
                if (returnCnt == identifyCnt) {
                  if (ftCnt) {
                    IdentifyPopup.init(map, results);
                  } else {
                    notification.warn({ message: '提示', description: '未找到任何要素' });
                  }
                }
              });
          }
        }
      }
    });
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
