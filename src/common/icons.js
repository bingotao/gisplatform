import L from './leaflet.extends';

let iconConfig = {
  'icon-weizhi6': {
    className: 'ct-icon',
    iconSize: [30, 42],
    iconAnchor: [14, 30],
    popupAnchor: [1, -30],
  },
  'icon-weizhi7': {
    className: 'ct-icon',
    iconSize: [30, 42],
    iconAnchor: [13, 34],
    popupAnchor: [1, -30],
  },
  'icon-xuanzezhidingweizhi': {
    className: 'ct-icon',
    iconSize: [30, 42],
    iconAnchor: [13, 34],
    popupAnchor: [3, -30],
  },
  'icon-keyiyidongderendeweizhi': {
    className: 'ct-icon',
    iconSize: [30, 42],
    iconAnchor: [13, 34],
    popupAnchor: [3, -30],
  },
  'icon-weizhi5': {
    className: 'ct-icon',
    iconSize: [30, 42],
    iconAnchor: [13, 30],
    popupAnchor: [3, -30],
  },
  'icon-sijiweizhi': {
    className: 'ct-icon',
    iconSize: [30, 42],
    iconAnchor: [13, 34],
    popupAnchor: [3, -30],
  },
  'icon-weizhi4': {
    className: 'ct-icon',
    iconSize: [30, 42],
    iconAnchor: [13, 34],
    popupAnchor: [3, -30],
  },
  'icon-weizhi21': {
    className: 'ct-icon',
    iconSize: [30, 42],
    iconAnchor: [13, 32],
    popupAnchor: [3, -30],
  },
  'icon-weizhi3': {
    className: 'ct-icon',
    iconSize: [30, 42],
    iconAnchor: [13, 30],
    popupAnchor: [3, -30],
  },
  'icon-weizhi2': {
    className: 'ct-icon',
    iconSize: [30, 42],
    iconAnchor: [13, 34],
    popupAnchor: [3, -30],
  },
  'icon-weizhi1': {
    className: 'ct-icon',
    iconSize: [30, 42],
    iconAnchor: [13, 34],
    popupAnchor: [3, -30],
  },
  'icon-weizhi': {
    className: 'ct-icon',
    iconSize: [30, 42],
    iconAnchor: [13, 34],
    popupAnchor: [2, -30],
  },
  'icon-weizhi-dingwei': {
    className: 'ct-icon',
    iconSize: [30, 42],
    iconAnchor: [13, 34],
    popupAnchor: [2, -30],
  },
  'icon-weizhibubaokuo': {
    className: 'ct-icon',
    iconSize: [30, 42],
    iconAnchor: [13, 34],
    popupAnchor: [2, -30],
  },
  // 交通类
  'icon-anquanbiaozhi': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-tuolaji': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-xiaoche': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-zihangche': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-xiaofangche': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-lameiche': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-ting': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  },
  'icon-anquanbiaozhi': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-lahuoche': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-jiuhuche': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-jingcha': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-gongjiaoche': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-huoche': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-dianche': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-honglvdeng': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-chuan': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-anquan': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  // 建筑
  'icon-shipinjiankong': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-shigongquyu': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  },
  'icon-guojijijingdian': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  },
  'icon-tingchechang': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  },
  'icon-gonganjiankong': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  },
  'icon-shineitingchechang1': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  },
  'icon-shigongzhong': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-lou': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon--yiyuanlou': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-Djianzhu-': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-jianzhu1': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-jianzhu': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-gujianzhu1': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-louyudasha': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  },
  'icon-gujianzhu': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-chengshijianzhu': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-loufang': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-dalou': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
  'icon-tongyongjianzhu-fuse': {
    className: 'ct-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  },
};

let initIcons = () => {
  var icons = [];
  for (let i in iconConfig) {
    let html = `<svg class="icon" aria-hidden="true"><use xlink:href="#${i}"></use></svg>`;

    iconConfig[i].tooltipAnchor = iconConfig[i].popupAnchor;
    iconConfig[i].id = i;
    iconConfig[i].html = html;
    iconConfig[i].icon = L.divIcon({
      ...iconConfig[i],
      html: html,
    });
    icons.push(iconConfig[i]);
  }
  return icons;
};

let icons = initIcons();

export { icons };
