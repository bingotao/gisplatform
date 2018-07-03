import L from './leaflet.extends.js';
import echarts from 'echarts';
import demoData from './demoGeoJSON.js';
import { mapConfig, baseMapImgs } from './config.js';
let { mapboxAccessToken } = mapConfig;
let img0 = baseMapImgs[0];
let img1 = baseMapImgs[1];
let img2 = baseMapImgs[2];
let img3 = baseMapImgs[3];

const getXZQ = () => {
  return L.esri.dynamicMapLayer({
    url: 'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/XZQ/MapServer',
    pane: 'layerspane',
  });
};

const getBaseMaps = () => {
  return {
    id: 'baseMap',
    name: '底图',
    children: [
      {
        id: 'tdtgj_vec',
        name: '天地图·国家-地图',
        layer: L.tileLayer.tdtgj_vec(),
        img: img0,
      },
      {
        id: 'tdtgj_img',
        name: '天地图·国家-影像',
        layer: L.tileLayer.tdtgj_img(),
        on: true,
        img: img1,
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
      {
        id: 'mapbox_dark',
        name: '深色底图（定制）',
        layer: L.mapboxGL({
          style: 'mapbox://styles/bingotao/cja7i6f7p092n2rmxhf8qdymc',
          accessToken: mapboxAccessToken,
        }),
        img: img2,
      },
      {
        id: 'mapbox_light',
        name: '浅色底图（定制）',
        layer: L.mapboxGL({
          style: 'mapbox://styles/bingotao/cjivckkk36pzs2spgyxhqtqyq',
          accessToken: mapboxAccessToken,
        }),
        img: img3,
      },
    ],
  };
};

const getBaseMaps2 = () => {
  return {
    id: 'baseMap',
    name: '底图',
    children: [
      {
        id: 'tdtgj_vec_w',
        name: '天地图·国家-地图',
        layer: L.tileLayer.tdtgj_vec_w(),
        img: img0,
      },
      {
        id: 'tdtgj_img_w',
        name: '天地图·国家-影像',
        layer: L.tileLayer.tdtgj_img_w(),
        on: true,
        img: img1,
      },
      {
        id: 'mapbox_dark',
        name: '深色底图（定制）',
        layer: L.mapboxGL({
          style: 'mapbox://styles/bingotao/cja7i6f7p092n2rmxhf8qdymc',
          accessToken: mapboxAccessToken,
        }),
        img: img2,
      },
      {
        id: 'mapbox_light',
        name: '浅色底图（定制）',
        layer: L.mapboxGL({
          style: 'mapbox://styles/bingotao/cjivckkk36pzs2spgyxhqtqyq',
          accessToken: mapboxAccessToken,
        }),
        img: img3,
      },
    ],
  };
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
    case 'statistic':
      var groupBase = L.layerGroup();
      var geojson = L.geoJSON(demoData, {
        ...i,
        style: function(feature) {
          return { color: feature.properties.color, fillOpacity: 0.8, weight: 0 };
        },
      });
      geojson.on('add', function() {
        for (let t in geojson._layers) {
          let layer = geojson._layers[t];
          let pnt = layer.getCenter();
          let { gsqy, ybqy } = layer.feature.properties;
          let id = i.id + t;
          L.marker(pnt, {
            icon: L.divIcon({
              iconSize: [100, 100],
              className: 'map-pie-chart',
              html: `<div id=${id}></div>`,
            }),
          })
            .on('add', function() {
              var dom = document.getElementById(id);

              var option = {
                title: {
                  text: '',
                },
                series: [
                  {
                    name: '',
                    type: 'pie',
                    label: {
                      show: false,
                    },
                    labelLine: {
                      show: false,
                    },
                    data: [
                      { name: '规上企业', value: gsqy, itemStyle: { color: 'rgb(103,224,227)' } },
                      { name: '一般企业', value: ybqy, itemStyle: { color: 'rgb(255,240,101)' } },
                    ],
                  },
                ],
                tooltip: {
                  trigger: 'item',
                  formatter: '{b}：{c}',
                },
              };
              echarts.init(dom).setOption(option);
            })
            .addTo(groupBase);
        }
      });
      i.layer = L.layerGroup([geojson, groupBase], { pane: i.pane });
    default:
      break;
  }
};

const getMapServices = () => {
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
          opacity: 1,
          legendLayer: 0,
          description: '新吴区乡镇街道动态地图服务。',
          typeAlias: 'ArcGIS动态地图服务',
          date: '2018年3月22日',
          applyable: true,
        },
      ],
    },
    {
      id: 'gyydzt',
      name: '工业用地专题',
      children: [
        {
          id: 'gyydzt000',
          name: '工业企业',
          type: 'esri/dynamic',
          url:
            'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/GYYD_Point/MapServer',
          pane: 'layerspane',
          identifyLayers: [0],
          opacity: 1,
          legendLayer: 0,
          description: '工业企业分布情况',
          typeAlias: 'ArcGIS动态地图服务',
          date: '2018年3月22日',
          applyable: true,
          heatLayerSource: 0,
          clusterLayerSource: 0,
        },
        {
          id: 'gyydzt001',
          name: '工业用地分布',
          type: 'esri/dynamic',
          url: 'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/GYYD/MapServer',
          pane: 'layerspane',
          identifyLayers: [0],
          opacity: 1,
          legendLayer: 0,
          description: '工业用地分布情况，按照工业用地是否承载规上企业制图。',
          typeAlias: 'ArcGIS动态地图服务',
          date: '2018年3月22日',
          applyable: true,
        },
        {
          id: 'gyydzt002',
          name: '规上企业用地',
          type: 'esri/dynamic',
          url:
            'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/GYYD_GSQY/MapServer',
          pane: 'layerspane',
          identifyLayers: [0],
          opacity: 1,
          legendLayer: 0,
          description: '规模以上工业企业用地分布情况。',
          typeAlias: 'ArcGIS动态地图服务',
          date: '2018年3月22日',
          applyable: true,
        },
        {
          id: 'gyydzt003',
          name: '重点项目用地',
          type: 'esri/dynamic',
          url:
            'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/GYYD_ZDXM/MapServer',
          pane: 'layerspane',
          identifyLayers: [0],
          opacity: 1,
          legendLayer: 0,
          description: '重点项目用地分布情况。',
          date: '2018年3月22日',
          typeAlias: 'ArcGIS动态地图服务',
          applyable: true,
          featureLayerSource: 0,
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
          description: '采用聚合图的形式展示工业企业的聚集程度。',
          typeAlias: '聚合图地图服务',
          date: '2018年3月22日',
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
          description: '采用热力图的形式展示工业企业的聚集程度。',
          typeAlias: '热力图地图服务',
          date: '2018年3月22日',
        },
        {
          id: 'gyqyfxztt003',
          name: '工业企业统计图',
          type: 'statistic',
          description: '采用统计图的形式展示工业企业的聚集程度。',
          typeAlias: '统计地图服务',
          date: '2018年3月22日',
          data: demoData,
          labelField: 'XZQMC',
          valueField: 'total',
          pane: 'layerspane',
        },
      ],
    },
  ];

  for (let i of mapServices) {
    for (let s of i.children) {
      initLayers(s);
    }
  }
  return mapServices;
};

export { getBaseMaps, getBaseMaps2, getXZQ, getMapServices };
