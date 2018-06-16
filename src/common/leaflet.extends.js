import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
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

L.tileLayer.tdtjs_img = () => L.layerGroup([L.tileLayer.tdtjs_imgo(), L.tileLayer.tdtjs_imga()]);
L.tileLayer.tdtjs_vec = () => L.layerGroup([L.tileLayer.tdtjs_veco(), L.tileLayer.tdtjs_veca()]);

// 天地图·国家
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

L.tileLayer.tdtgj_img = () => L.layerGroup([L.tileLayer.tdtgj_imgo(), L.tileLayer.tdtgj_imga()]);
L.tileLayer.tdtgj_vec = () => L.layerGroup([L.tileLayer.tdtgj_veco(), L.tileLayer.tdtgj_veca()]);

L.CRS.EPSG4490 = L.extend({}, L.CRS.EPSG4326, {
  code: 'EPSG:4490',
  transformation: new L.Transformation(1 / 360, 0.5, -1 / 360, 0.25),
});

export default L;
