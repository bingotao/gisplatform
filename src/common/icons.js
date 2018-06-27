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
