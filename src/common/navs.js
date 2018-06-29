import { Link } from 'dva/router';

let navs = [
  {
    id: 'home',
    name: '首 页',
    to: '/home',
  },
  {
    id: 'mapservice',
    name: '地图服务',
    to: '/mapservice',
  },
  {
    id: 'dataservice',
    name: '数据服务',
    to: '/dataservice',
  },
  // {
  //   id: 'analysize',
  //   name: '分析服务',
  //   to: '/analysize',
  // },
  {
    id: 'mapping',
    name: '制图服务',
    to: '/mapping',
  },
  {
    id: 'developping',
    name: '应用开发',
    to: '/developping',
  },
  {
    id: 'servicemanager',
    name: '服务管理',
    to: '/servicemanager',
  },
];

navs.map(i => {
  i.component = (
    <Link to={i.to} key={i.id}>
      {i.name}
    </Link>
  );
});

export default navs;
