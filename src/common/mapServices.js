import L from './leaflet.extends.js';

const xzq = L.esri.dynamicMapLayer({
  url: 'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/XZQ/MapServer',
  //pane: 'layerspane',
});

const baseMaps = {
  id: 'baseMap',
  name: '底图',
  children: [
    {
      id: 'tdtgj_vec',
      name: '天地图·国家-地图',
      layer: L.tileLayer.tdtgj_vec(),
    },
    {
      id: 'tdtgj_img',
      name: '天地图·国家-影像',
      layer: L.tileLayer.tdtgj_img(),
      on: true,
    },
    {
      id: 'tdtjs_vec',
      name: '天地图·江苏-地图',
      layer: L.tileLayer.tdtjs_vec(),
    },
    {
      id: 'tdtjs_img',
      name: '天地图·江苏-影像',
      layer: L.tileLayer.tdtjs_img(),
    },
  ],
};

const initLayers = i => {
  switch (i.type) {
    case 'esri/dynamic':
      i.layer = L.esri.dynamicMapLayer({
        ...i,
      });
      break;
    case 'cluster':
      i.layer = L.esri.Cluster.featureLayer({
        ...i,
      });
      break;
    case 'heat':
      i.layer = L.esri.Heat.featureLayer({
        ...i,
      });
      break;
    default:
      break;
  }
};

const mapServices = [
  {
    id: 'wggl',
    name: '网格管理',
    children: [
      {
        id: 'wggl001',
        name: '乡镇街道',
        type: 'esri/dynamic',
        url: 'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/XZZ/MapServer',
        pane: 'layerspane',
        identifyLayers: [0],
        opacity: 0.5,
        legendLayer: 0,
      },
    ],
  },
  {
    id: 'gyydzt',
    name: '工业用地专题',
    children: [
      {
        id: 'gyydzt001',
        name: '工业用地分布',
        type: 'esri/dynamic',
        url: 'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/GYYD/MapServer',
        pane: 'layerspane',
        identifyLayers: [0],
        opacity: 1,
        legendLayer: 0,
      },
      {
        id: 'gyydzt002',
        name: '规上企业用地',
        type: 'esri/dynamic',
        url: 'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/GYYD_GSQY/MapServer',
        pane: 'layerspane',
        identifyLayers: [0],
        opacity: 1,
        legendLayer: 0,
      },
      {
        id: 'gyydzt003',
        name: '重点项目用地',
        type: 'esri/dynamic',
        url: 'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/GYYD_ZDXM/MapServer',
        pane: 'layerspane',
        identifyLayers: [0],
        opacity: 1,
        legendLayer: 0,
      },
    ],
  },
  {
    id: 'gyqyfxztt',
    name: '工业用地分析专题图',
    children: [
      {
        id: 'gyqyfxztt001',
        name: '企业分布聚合图',
        type: 'cluster',
        url:
          'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/GYYD_Point/MapServer/0',
        pane: 'layerspane',
      },
      {
        id: 'gyqyfxztt002',
        name: '企业聚集热力图',
        type: 'heat',
        url:
          'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/GYYD_Point/MapServer/0',
        radius: 50,
        blur: 50,
        pane: 'layerspane',
      },
      {
        id: 'gyqyfxztt003',
        name: '工业企业统计图',
      },
    ],
  },
];

for (let i of mapServices) {
  for (let s of i.children) {
    initLayers(s);
  }
}

export { baseMaps, mapServices, xzq };
