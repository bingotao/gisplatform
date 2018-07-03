import L from 'leaflet';
import './leaflet.extends.less';

// 天地图·江苏
L.tileLayer.tdtjs_imgo = options =>
  L.tileLayer(
    `http://218.2.231.246/mapservice/wmts/raster?tilematrix={z}&tilerow={y}&tilecol={x}`,
    options
  );

L.tileLayer.tdtjs_imga = options =>
  L.tileLayer(
    `http://218.2.231.246/mapservice/wmts/rasteranno?tilematrix={z}&tilerow={y}&tilecol={x}`,
    options
  );

L.tileLayer.tdtjs_veco = options =>
  L.tileLayer(
    `http://218.2.231.246/mapservice/wmts/vector?tilematrix={z}&tilerow={y}&tilecol={x}`,
    options
  );

L.tileLayer.tdtjs_veca = options =>
  L.tileLayer(
    `http://218.2.231.246/mapservice/wmts/slzj?tilematrix={z}&tilerow={y}&tilecol={x}`,
    options
  );

L.tileLayer.tdtjs_img = options =>
  L.layerGroup([L.tileLayer.tdtjs_imgo(options), L.tileLayer.tdtjs_imga(options)]);
L.tileLayer.tdtjs_vec = options =>
  L.layerGroup([L.tileLayer.tdtjs_veco(options), L.tileLayer.tdtjs_veca(options)]);

// 天地图·国家 4490
L.tileLayer.tdtgj_imgo = options =>
  L.tileLayer('http://t{s}.tianditu.com/DataServer?T=img_c&x={x}&y={y}&l={z}', {
    ...options,
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
  });

L.tileLayer.tdtgj_imga = options =>
  L.tileLayer('http://t{s}.tianditu.com/DataServer?T=cia_c&x={x}&y={y}&l={z}', {
    ...options,
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
  });

L.tileLayer.tdtgj_veco = options =>
  L.tileLayer('http://t{s}.tianditu.com/DataServer?T=vec_c&x={x}&y={y}&l={z}', {
    ...options,
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
  });

L.tileLayer.tdtgj_veca = options =>
  L.tileLayer('http://t{s}.tianditu.com/DataServer?T=cva_c&x={x}&y={y}&l={z}', {
    ...options,
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
  });

L.tileLayer.tdtgj_img = options =>
  L.layerGroup([L.tileLayer.tdtgj_imgo(options), L.tileLayer.tdtgj_imga(options)]);
L.tileLayer.tdtgj_vec = options =>
  L.layerGroup([L.tileLayer.tdtgj_veco(options), L.tileLayer.tdtgj_veca(options)]);

// 天地图国家 900913
L.tileLayer.tdtgj_imgo_w = options =>
  L.tileLayer('http://t{s}.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}', {
    ...options,
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
  });

L.tileLayer.tdtgj_imga_w = options =>
  L.tileLayer('http://t{s}.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}', {
    ...options,
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
  });

L.tileLayer.tdtgj_veco_w = options =>
  L.tileLayer('http://t{s}.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}', {
    ...options,
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
  });

L.tileLayer.tdtgj_veca_w = options =>
  L.tileLayer('http://t{s}.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}', {
    ...options,
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
  });

L.tileLayer.tdtgj_img_w = options =>
  L.layerGroup([L.tileLayer.tdtgj_imgo_w(options), L.tileLayer.tdtgj_imga_w(options)]);
L.tileLayer.tdtgj_vec_w = options =>
  L.layerGroup([L.tileLayer.tdtgj_veco_w(options), L.tileLayer.tdtgj_veca_w(options)]);

L.CRS.EPSG4490 = L.extend({}, L.CRS.EPSG4326, {
  code: 'EPSG:4490',
  transformation: new L.Transformation(1 / 360, 0.5, -1 / 360, 0.25),
});

L.drawLocal.draw.handlers = L.extend(L.drawLocal.draw.handlers, {
  marker: {
    tooltip: {
      start: '点击放置',
    },
  },
  polygon: {
    tooltip: {
      start: '点击开始',
      cont: '点击继续',
      end: '点击起始点完成',
    },
  },
  polyline: {
    tooltip: {
      start: '点击开始',
      cont: '点击继续',
      end: '双击完成',
    },
  },
});

L.Draw.Feature = L.Draw.Feature.include({
  _fireCreatedEvent: function(layer) {
    this._map.fire(L.Draw.Event.CREATED, { layer: layer, layerType: this.type });
    this.fire(L.Draw.Event.CREATED, { layer: layer, layerType: this.type });
  },
});

var defaultPrecision = {
  km: 2,
  ha: 2,
  m: 0,
  mi: 2,
  ac: 2,
  yd: 0,
  ft: 0,
  nm: 2,
};

L.GeometryUtil.readableArea = function(area, isMetric, precision) {
  var areaStr,
    units,
    precision = L.Util.extend({}, defaultPrecision, precision);

  if (isMetric) {
    units = ['km', 'm'];
    var type = typeof isMetric;
    if (type === 'string') {
      units = [isMetric];
    } else if (type !== 'boolean') {
      units = isMetric;
    }

    if (area >= 1000000 && units.indexOf('km') !== -1) {
      areaStr = L.GeometryUtil.formattedNumber(area * 0.000001, precision['km']) + ' km²';
    } else {
      areaStr = L.GeometryUtil.formattedNumber(area, precision['m']) + ' m²';
    }
  } else {
    area /= 0.836127; // Square yards in 1 meter

    if (area >= 3097600) {
      //3097600 square yards in 1 square mile
      areaStr = L.GeometryUtil.formattedNumber(area / 3097600, precision['mi']) + ' mi²';
    } else if (area >= 4840) {
      //4840 square yards in 1 acre
      areaStr = L.GeometryUtil.formattedNumber(area / 4840, precision['ac']) + ' acres';
    } else {
      areaStr = L.GeometryUtil.formattedNumber(area, precision['yd']) + ' yd²';
    }
  }

  return areaStr;
};

L.Control.MousePosition = L.Control.extend({
  options: {
    position: 'bottomleft',
    separator: ',',
    emptyString: '( x : 0 , y: 0 )',
    lngFirst: true,
    numDigits: 5,
    lngFormatter: undefined,
    latFormatter: undefined,
    prefix: '',
  },

  onAdd: function(map) {
    this._container = L.DomUtil.create('div', 'leaflet-control-mouseposition');
    L.DomEvent.disableClickPropagation(this._container);
    map.on('mousemove', this._onMouseMove, this);
    this._container.innerHTML = this.options.emptyString;
    return this._container;
  },

  onRemove: function(map) {
    map.off('mousemove', this._onMouseMove);
  },

  _onMouseMove: function(e) {
    var lng = this.options.lngFormatter
      ? this.options.lngFormatter(e.latlng.lng)
      : //L.Util.formatNum(e.latlng.lng, this.options.numDigits);
        e.latlng.lng.toFixed(this.options.numDigits);
    var lat = this.options.latFormatter
      ? this.options.latFormatter(e.latlng.lat)
      : //L.Util.formatNum(e.latlng.lat, this.options.numDigits);
        e.latlng.lat.toFixed(this.options.numDigits);

    var value = this.options.lngFirst
      ? `( x : ${lng} ${this.options.separator} y : ${lat} )`
      : `( y : ${lat} ${this.options.separator} x : ${lng} )`;
    var prefixAndValue = this.options.prefix + ' ' + value;
    this._container.innerHTML = prefixAndValue;
  },
});

L.Map.mergeOptions({
  positionControl: false,
});

L.Map.addInitHook(function() {
  if (this.options.positionControl) {
    this.positionControl = new L.Control.MousePosition();
    this.addControl(this.positionControl);
  }
});

L.control.mousePosition = function(options) {
  return new L.Control.MousePosition(options);
};

L.Control.Attribution.include({
  setAttribution: function(text) {
    if (text === undefined || text === null) {
      return this;
    }

    this._attributions = {};
    this._attributions[text] = 1;

    this._update();

    return this;
  },
});

export default L;
