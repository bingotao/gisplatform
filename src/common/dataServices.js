export default [
  {
    id: 'xzq',
    name: '行政区',
    children: [
      {
        id: 'xzz',
        name: '街道乡镇',
        url:
          'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/XZZ/MapServer/0/query',
        description: '获取乡镇街道数据',
        params: [
          {
            id: '0',
            name: '行政区名称',
            field: 'XZQMC',
            type: 'text',
            defaultValue:'',
            where: true,
          },
          {
            id: '1',
            name: '返回图形',
            field: 'returnGeometry',
            type: 'radio',
            values: [true, false],
            defaultValue: false,
          },
          {
            id: '2',
            name: '',
            field: 'outFields',
            defaultValue: '*',
            show: false,
          },
          {
            id: '3',
            name: '',
            field: 'f',
            defaultValue: 'pjson',
            show: false,
          },
        ],
      },
    ],
  },
];
