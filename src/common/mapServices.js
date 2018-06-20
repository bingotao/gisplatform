import L from './leaflet.extends.js';

const baseMaps = {
  id: 'baseMap',
  name: '底图',
  children: [
    {
      id: 'tdtgj_vec',
      name: '天地图·国家-地图',
      layer: L.tileLayer.tdtgj_vec,
    },
    {
      id: 'tdtgj_img',
      name: '天地图·国家-影像',
      layer: L.tileLayer.tdtgj_img,
      on: true,
    },
    {
      id: 'tdtjs_vec',
      name: '天地图·江苏-地图',
      layer: L.tileLayer.tdtjs_vec,
    },
    {
      id: 'tdtjs_img',
      name: '天地图·江苏-地图',
      layer: L.tileLayer.tdtjs_img,
    },
  ],
};

const mapServices = [
  {
    id: 'gt',
    name: '国土',
    children: [
      {
        id: 'gt01',
        name: '国土01',
        children: [
          {
            id: 'gt021',
            name: '国土021',
          },
          {
            id: 'gt031',
            name: '国土031',
          },
          {
            id: 'gt041',
            name: '国土041',
          },
        ],
      },
      {
        id: 'gt02',
        name: '国土02',
      },
      {
        id: 'gt03',
        name: '国土03',
      },
      {
        id: 'gt04',
        name: '国土04',
      },
    ],
  },
];

export { baseMaps, mapServices };
