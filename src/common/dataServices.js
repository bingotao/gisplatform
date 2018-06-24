export default [
  {
    id: 'xzq',
    name: '行政区',
    children: [
      {
        id: 'xzq',
        name: '新吴区',
        url:
          'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/XZQ/MapServer/0/query',
        description: '获取新吴区范围地理数据',
        params: [
          {
            id: 'xzq1',
            name: '返回图形',
            field: 'returnGeometry',
            type: 'radio',
            values: [true, false],
            defaultValue: false,
          },
          {
            id: 'xzq2',
            name: '',
            field: 'outFields',
            defaultValue: '*',
            show: false,
          },
          {
            id: 'xzq3',
            name: '',
            field: 'f',
            defaultValue: 'pjson',
            show: false,
          },
        ],
      },
      {
        id: 'xzz',
        name: '街道乡镇',
        url:
          'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/XZZ/MapServer/0/query',
        description: '获取乡镇街道数据',
        params: [
          {
            id: 'xzz0',
            name: '行政区名称',
            field: 'XZQMC',
            type: 'text',
            defaultValue: '',
            where: true,
          },
          {
            id: 'xzz1',
            name: '返回图形',
            field: 'returnGeometry',
            type: 'radio',
            values: [true, false],
            defaultValue: false,
          },
          {
            id: 'xzz2',
            name: '',
            field: 'outFields',
            defaultValue: '*',
            show: false,
          },
          {
            id: 'xzz3',
            name: '',
            field: 'f',
            defaultValue: 'pjson',
            show: false,
          },
        ],
      },
    ],
  },
  {
    id: 'gt',
    name: '国土资源局',
    children: [
      {
        id: 'gsqyyd',
        name: '工业企业用地',
        url:
          'http://221.228.242.3:6080/arcgis/rest/services/gisplatform_demo/GYYD_Point/MapServer/0/query',
        description: '根据企业名称获取企业用地',
        params: [
          {
            id: 'gt0',
            name: '企业名称',
            field: 'QLRMC',
            type: 'text',
            where: true,
            defaultValue: '江苏无锡朝阳集团股份有限公司',
          },
          {
            id: 'gt1',
            name: '返回图形',
            field: 'returnGeometry',
            type: 'radio',
            values: [true, false],
            defaultValue: false,
          },
          {
            id: 'gt2',
            name: '',
            field: 'outFields',
            defaultValue: 'QLRMC,TDZL,SZDQ,SSXZ,SSYQMC',
            show: false,
          },
          {
            id: 'gt3',
            name: '',
            field: 'f',
            defaultValue: 'pjson',
            show: false,
          },
        ],
      },
    ],
  },
  {
    id: 'fgw',
    name: '发展与改革',
    children: [],
  },
  {
    id: 'jxw',
    name: '经济与信息化',
    children: [],
  },
  {
    id: 'sl',
    name: '水利',
    children: [],
  },
  {
    id: 'hb',
    name: '环保',
    children: [],
  },
  {
    id: 'gh',
    name: '规划',
    children: [],
  },
  {
    id: 'js',
    name: '建设',
    children: [],
  },
  {
    id: 'jy',
    name: '教育',
    children: [],
  },
  {
    id: 'ty',
    name: '体育',
    children: [],
  },
  {
    id: 'ga',
    name: '公安',
    children: [],
  },
  {
    id: 'mz',
    name: '民政',
    children: [],
  },
];
