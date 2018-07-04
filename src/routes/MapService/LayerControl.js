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
  Modal,
  Table,
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

const demoColumns = [
  {
    title: '编号',
    dataIndex: 'OBJECTID',
    key: 'OBJECTID',
  },
  {
    title: '所属乡镇',
    dataIndex: 'SSXZ',
    key: 'SSXZ',
  },
  {
    title: '所属园区',
    dataIndex: 'SSYQMC',
    key: 'SSYQMC',
  },
  {
    title: '权利人名称',
    dataIndex: 'QLRMC',
    key: 'QLRMC',
  },
  {
    title: '建筑面积',
    dataIndex: 'JZMJ',
    key: 'JZMJ',
  },
  {
    title: '土地证号',
    dataIndex: 'TDZH',
    key: 'TDZH',
  },
];

const demoData = [
  {
    attributes: {
      OBJECTID: 1,
      MBBSM: 6,
      DKYBH: '3202920010010006',
      DKSYH: '3202920010010006',
      XZQDM: '320292',
      JDXZDM: '001',
      JFXZCDM: '001',
      SZDQ: '无锡市新区',
      SSXZ: '旺庄街道',
      SSYQMC: '新区园区外',
      SSYQDM: '3202920000',
      PQBH: '1',
      QLRMC: '无锡市新区旺庄街道新光社区居民委员会',
      TDZL: '新区迎宾路',
      TBBH: '6',
      DLBM: '201',
      DLMC: '城市',
      TDMJ: 31338.989587550001,
      ZDMJ: 0,
      QSXZ: '20',
      SYQLX: '11',
      HBYDPWH: null,
      JGH: null,
      YDLB: '1',
      PZYT: '061',
      SJYT: '061',
      GDSJ: -2209161600000,
      TJYT: '11',
      LYZK: '建成',
      JZMJ: 15161,
      JZJDMJ: 14699,
      SFDDW: '是',
      SFBZCF: '否',
      DJH: '0046000',
      GDID: null,
      BZ: null,
      CFCS: '1',
      HTBH: null,
      TDZH: '锡南国用(2004)第132号',
      XZQXZQ: '320292',
      SFZDXM: '否',
      SFCZGSQY: '否',
      HYDM: '34,58,38',
      ORIG_FID: 1,
    },
  },
  {
    attributes: {
      OBJECTID: 2,
      MBBSM: 17,
      DKYBH: '3202920010010018',
      DKSYH: '3202920010010018',
      XZQDM: '320292',
      JDXZDM: '001',
      JFXZCDM: '001',
      SZDQ: '无锡市新区',
      SSXZ: '旺庄街道',
      SSYQMC: '新区园区外',
      SSYQDM: '3202920000',
      PQBH: '1',
      QLRMC: '江苏无锡朝阳集团股份有限公司',
      TDZL: '新区物流配套加工区04号地铁',
      TBBH: '17',
      DLBM: '201',
      DLMC: '城市',
      TDMJ: 37870.163354759999,
      ZDMJ: 0,
      QSXZ: '20',
      SYQLX: '11',
      HBYDPWH: null,
      JGH: null,
      YDLB: '1',
      PZYT: '063',
      SJYT: '063',
      GDSJ: -2209161600000,
      TJYT: '12',
      LYZK: '建成',
      JZMJ: 113,
      JZJDMJ: 113,
      SFDDW: '否',
      SFBZCF: '否',
      DJH: '0048000',
      GDID: null,
      BZ: null,
      CFCS: '1',
      HTBH: null,
      TDZH: '锡南国用(2009)第203号',
      XZQXZQ: '320292',
      SFZDXM: '否',
      SFCZGSQY: '是',
      HYDM: '59',
      ORIG_FID: 2,
    },
  },
  {
    attributes: {
      OBJECTID: 3,
      MBBSM: 36,
      DKYBH: '3202920030010037',
      DKSYH: '3202920030010037',
      XZQDM: '320292',
      JDXZDM: '003',
      JFXZCDM: '001',
      SZDQ: '无锡市新区',
      SSXZ: '江溪街道',
      SSYQMC: '新区园区外',
      SSYQDM: '3202920000',
      PQBH: '1',
      QLRMC: '无锡市新区江溪街道办事处',
      TDZL: '新区兴源路',
      TBBH: '36',
      DLBM: '201',
      DLMC: '城市',
      TDMJ: 19247.641221490001,
      ZDMJ: 0,
      QSXZ: '20',
      SYQLX: '11',
      HBYDPWH: null,
      JGH: null,
      YDLB: '1',
      PZYT: '061',
      SJYT: '061',
      GDSJ: -2209161600000,
      TJYT: '11',
      LYZK: '建成',
      JZMJ: 13579,
      JZJDMJ: 8895,
      SFDDW: '否',
      SFBZCF: '是',
      DJH: '0018000',
      GDID: null,
      BZ: null,
      CFCS: '2',
      HTBH: null,
      TDZH: '锡南国用(1996)第1893号',
      XZQXZQ: '320292',
      SFZDXM: '否',
      SFCZGSQY: '否',
      HYDM: '36',
      ORIG_FID: 3,
    },
  },
  {
    attributes: {
      OBJECTID: 4,
      MBBSM: 37,
      DKYBH: '3202920010010038',
      DKSYH: '3202920010010038',
      XZQDM: '320292',
      JDXZDM: '001',
      JFXZCDM: '001',
      SZDQ: '无锡市新区',
      SSXZ: '旺庄街道',
      SSYQMC: '新区园区外',
      SSYQDM: '3202920000',
      PQBH: '1',
      QLRMC: '无锡产业资产经营有限公司',
      TDZL: '城南路10号',
      TBBH: '37',
      DLBM: '201',
      DLMC: '城市',
      TDMJ: 144277.50244005999,
      ZDMJ: 144300.80000000002,
      QSXZ: '20',
      SYQLX: '12',
      HBYDPWH: null,
      JGH: null,
      YDLB: '1',
      PZYT: '061',
      SJYT: '061',
      GDSJ: -2209161600000,
      TJYT: '11',
      LYZK: '建成',
      JZMJ: 90602,
      JZJDMJ: 73358,
      SFDDW: '是',
      SFBZCF: '是',
      DJH: '0118000',
      GDID: null,
      BZ: null,
      CFCS: '1',
      HTBH: null,
      TDZH: '锡新国用(2007)第236号',
      XZQXZQ: '320292',
      SFZDXM: '否',
      SFCZGSQY: '是',
      HYDM: '29,54,38',
      ORIG_FID: 4,
    },
  },
  {
    attributes: {
      OBJECTID: 5,
      MBBSM: 39,
      DKYBH: '3202920030010040',
      DKSYH: '3202920030010040',
      XZQDM: '320292',
      JDXZDM: '003',
      JFXZCDM: '001',
      SZDQ: '无锡市新区',
      SSXZ: '江溪街道',
      SSYQMC: '新区园区外',
      SSYQDM: '3202920000',
      PQBH: '1',
      QLRMC: '江苏无锡朝阳(集团)有限公司',
      TDZL: '长   路57号',
      TBBH: '39',
      DLBM: '201',
      DLMC: '城市',
      TDMJ: 17150.08078222,
      ZDMJ: 17150.400000000001,
      QSXZ: '20',
      SYQLX: '12',
      HBYDPWH: null,
      JGH: null,
      YDLB: '2',
      PZYT: '063',
      SJYT: '051',
      GDSJ: -2209161600000,
      TJYT: '21',
      LYZK: '建成',
      JZMJ: 11966,
      JZJDMJ: 8392,
      SFDDW: '否',
      SFBZCF: '否',
      DJH: '0011000',
      GDID: null,
      BZ: null,
      CFCS: '1',
      HTBH: null,
      TDZH: '锡南国用(2001)第280号',
      XZQXZQ: '320292',
      SFZDXM: '否',
      SFCZGSQY: '否',
      HYDM: '51',
      ORIG_FID: 5,
    },
  },
  {
    attributes: {
      OBJECTID: 6,
      MBBSM: 40,
      DKYBH: '3202920010020041',
      DKSYH: '3202920010020041',
      XZQDM: '320292',
      JDXZDM: '001',
      JFXZCDM: '002',
      SZDQ: '无锡市新区',
      SSXZ: '旺庄街道',
      SSYQMC: '新区园区外',
      SSYQDM: '3202920000',
      PQBH: '1',
      QLRMC: '无锡市卫生高等职业技术学校',
      TDZL: '新区旺庄街道新光路305号',
      TBBH: '40',
      DLBM: '201',
      DLMC: '城市',
      TDMJ: 56958.999407950003,
      ZDMJ: 9396.3000000000011,
      QSXZ: '20',
      SYQLX: '11',
      HBYDPWH: '\u003c国有土地划拨决定书\u003eNO.00218*',
      JGH: null,
      YDLB: '3',
      PZYT: '083',
      SJYT: '083',
      GDSJ: -2209161600000,
      TJYT: '3',
      LYZK: '建成',
      JZMJ: 40550,
      JZJDMJ: 8996,
      SFDDW: '否',
      SFBZCF: '否',
      DJH: '0004000',
      GDID: null,
      BZ: null,
      CFCS: '5',
      HTBH: null,
      TDZH: '锡新国用(2005)第211号',
      XZQXZQ: '320292',
      SFZDXM: '否',
      SFCZGSQY: '否',
      HYDM: '74',
      ORIG_FID: 6,
    },
  },
].map(i => i.attributes);

class LayerControl extends Component {
  state = {
    isSearch: false,
    mapServices: mapServices,
    searchResult: [],
    showDataResult: false,
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
          <Popover
            placement="right"
            title="数据查询"
            content={
              <div className={st.layerquery}>
                <div>
                  <span>名称：</span>
                  <div>
                    <Input style={{ width: 180 }} />
                  </div>
                </div>
                <div>
                  <span>面积：</span>
                  <div>
                    <Input style={{ width: 60 }} />&ensp;-&ensp;<Input style={{ width: 60 }} />&ensp;平方米
                  </div>
                </div>
                <Button
                  onClick={e => {
                    this.setState({ showDataResult: true });
                  }}
                  type="primary"
                >
                  查询
                </Button>
              </div>
            }
          >
            <Icon type="info-circle-o" />
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
    const { isSearch, showDataResult } = this.state;
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
        <Modal
          onCancel={e => this.setState({ showDataResult: false })}
          visible={showDataResult}
          footer={null}
          width={1000}
        >
          <Table pagination={false} columns={demoColumns} dataSource={demoData} />
        </Modal>
      </div>
    );
  }
}

export default LayerControl;
