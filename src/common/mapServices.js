import L from './leaflet.extends.js';

export default [
  {
    id: 'baseMap',
    name: '底图',
    children: [
      {
        id: 'tdtgj',
        name: '天地图·国家',
        children: [
          {
            id: 'tdtgj_vec',
            name: '地图',
            layer: L.tileLayer.tdtgj_vec,
          },
          {
            id: 'tdtgj_img',
            name: '影像',
            layer: L.tileLayer.tdtgj_img,
            layerOn: true,
          },
        ],
      },
      {
        id: 'tdtjs',
        name: '天地图·江苏',
        children: [
          {
            id: 'tdtjs_vec',
            name: '地图',
            layer: L.tileLayer.tdtjs_vec,
          },
          {
            id: 'tdtjs_img',
            name: '影像',
            layer: L.tileLayer.tdtjs_img,
          },
        ],
      },
    ],
  },
];
