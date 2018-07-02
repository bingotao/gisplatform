import { Component } from 'react';
import { Tree, Icon, Popover, Slider, Checkbox, Switch, Button, Collapse } from 'antd';
import { getMapServices } from '../../common/mapServices';
import st from './LayersPanel.less';

const TreeNode = Tree.TreeNode;
const Panel = Collapse.Panel;

let mapServices = getMapServices().filter(i => i.id !== 'gyqyfxztt');

class LayersPanel extends Component {
  state = {
    layers: {},
  };

  featureLayerDefaultStyle = {
    stroke: false,
    fillColor: '#ff0000',
    fillOpacity: 1,
  };

  getOptions() {
    let { layers } = this.state;
    let ls = [];
    for (let i in layers) {
      let layer = layers[i];
      if (layer) {
        if (i.indexOf('_heat') !== -1) {
          ls.push({
            id: i,
            type: 'heatLayer',
            name: `${layer.name}(热力图)`,
            url: `${layer.url}/${layer.heatLayerSource}`,
            radius: layer.radius || 50,
            blur: layer.blur || 50,
          });
        } else if (i.indexOf('_cluster') !== -1) {
          ls.push({
            id: i,
            type: 'clusterLayer',
            name: `${layer.name}(聚合图)`,
            url: `${layer.url}/${layer.clusterLayerSource}`,
          });
        } else if (i.indexOf('_feature') !== -1) {
          ls.push({
            id: i,
            type: 'featureLayer',
            name: `${layer.name}(矢量图)`,
            url: `${layer.url}/${layer.featureLayerSource}`,
            fillColor: layer.fillColor || this.featureLayerDefaultStyle.fillColor,
            fillOpacity: layer.fillOpacity || this.featureLayerDefaultStyle.fillOpacity,
          });
        } else {
          ls.push({
            id: i,
            type: 'esri/dynamic',
            name: `${layer.name}`,
            url: `${layer.url}`,
            opacity: layer.opacity || 1,
          });
        }
      }
    }
    return ls;
  }

  getLayers() {
    let { layers } = this.state;
    let layerArr = [];
    for (let i in layers) {
      let layer = layers[i];
      if (layer) {
        if (i.indexOf('_heat') !== -1) {
          layerArr.push(
            <Collapse key={i}>
              <Panel
                header={
                  <div>
                    {`${layer.name} (热力图)`}
                    <Icon
                      type="close-circle"
                      onClick={e => {
                        layer.heatLayer.remove();
                        this.state.layers[i] = undefined;
                        this.setState({});
                      }}
                    />
                  </div>
                }
                key="1"
              >
                <div className={st.layercontrol}>
                  半&emsp;径：<Slider
                    style={{ width: 140 }}
                    defaultValue={layer.radius || 50}
                    min={0}
                    max={100}
                    step={1}
                    onChange={e => {
                      layer.radius = e;
                      layer.heatLayer.setOptions({ radius: e });
                    }}
                  />
                </div>
                <div className={st.layercontrol}>
                  模&emsp;糊：<Slider
                    style={{ width: 140 }}
                    defaultValue={layer.blur || 50}
                    min={0}
                    max={100}
                    step={1}
                    onChange={e => {
                      layer.blur = e;
                      layer.heatLayer.setOptions({ blur: e });
                    }}
                  />
                </div>
              </Panel>
            </Collapse>
          );
        } else if (i.indexOf('_cluster') !== -1) {
          layerArr.push(
            <Collapse key={i}>
              <Panel
                header={
                  <div>
                    {`${layer.name} (聚合图)`}
                    <Icon
                      type="close-circle"
                      onClick={e => {
                        layer.clusterLayer.remove();
                        this.state.layers[i] = undefined;
                        this.setState({});
                      }}
                    />
                  </div>
                }
                key="1"
              />
            </Collapse>
          );
        } else if (i.indexOf('_feature') !== -1) {
          layerArr.push(
            <Collapse key={i}>
              <Panel
                header={
                  <div>
                    {`${layer.name} (矢量图)`}
                    <Icon
                      type="close-circle"
                      onClick={e => {
                        layer.featureLayer.remove();
                        this.state.layers[i] = undefined;
                        this.setState({});
                      }}
                    />
                  </div>
                }
                key="1"
              >
                <div className={st.layercontrol}>
                  颜&emsp;色：<input
                    style={{ width: 120 }}
                    type="color"
                    defaultValue={this.featureLayerDefaultStyle.fillColor}
                    onChange={e => {
                      layer.fillColor = e.target.value;
                      layer.featureLayer.setStyle({
                        fillColor: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className={st.layercontrol}>
                  透明度：<Slider
                    defaultValue={1}
                    style={{ width: 140 }}
                    min={0}
                    max={1}
                    step={0.01}
                    onChange={e => {
                      layer.fillOpacity = e;
                      layer.featureLayer.setStyle({
                        fillOpacity: e,
                      });
                    }}
                  />
                </div>
              </Panel>
            </Collapse>
          );
        } else {
          layerArr.push(
            <Collapse key={i}>
              <Panel
                header={
                  <div>
                    {`${layer.name}`}
                    <Icon
                      type="close-circle"
                      onClick={e => {
                        layer.layer.remove();
                        this.state.layers[i] = undefined;
                        this.setState({});
                      }}
                    />
                  </div>
                }
                key="1"
              >
                <div className={st.layercontrol}>
                  透明度：<Slider
                    defaultValue={layer.opacity || 1}
                    style={{ width: 140 }}
                    min={0}
                    max={1}
                    step={0.01}
                    onChange={e => {
                      layer.layer.setOpacity(e);
                      layer.opacity = e;
                    }}
                  />
                </div>
              </Panel>
            </Collapse>
          );
        }
      }
    }
    return layerArr;
  }

  addLayer(layer) {
    if (!this.state.layers[layer.id]) {
      layer.layer.addTo(this.props.map);
      this.state.layers[layer.id] = layer;
      this.setState({});
    }
  }

  addHeatLayer(layer) {
    if (layer.heatLayerSource !== undefined && !this.state.layers[layer.id + '_heat']) {
      let { map } = this.props;
      if (!layer.heatLayer) {
        layer.heatLayer = L.esri.Heat.featureLayer({
          url: `${layer.url}/${layer.heatLayerSource}`,
          pane: layer.pane,
          radius: layer.radius || 50,
          blur: layer.blur || 50,
        });
      }
      layer.heatLayer.addTo(map);
      this.state.layers[layer.id + '_heat'] = layer;
      this.setState({});
    }
  }

  addClusterLayer(layer) {
    if (layer.clusterLayerSource !== undefined && !this.state.layers[layer.id + '_cluster']) {
      let { map } = this.props;
      if (!layer.clusterLayer) {
        layer.clusterLayer = L.esri.Cluster.featureLayer({
          url: `${layer.url}/${layer.clusterLayerSource}`,
          pane: layer.pane,
        });
      }
      layer.clusterLayer.addTo(map);
      this.state.layers[layer.id + '_cluster'] = layer;
      this.setState({});
    }
  }

  addFeatureLayer(layer) {
    if (layer.featureLayerSource !== undefined && !this.state.layers[layer.id + '_feature']) {
      let { map } = this.props;
      if (!layer.featureLayer) {
        layer.featureLayer = L.esri.featureLayer({
          url: `${layer.url}/${layer.featureLayerSource}`,
          pane: layer.pane,
          style: e => this.featureLayerDefaultStyle,
        });
      }
      layer.featureLayer.addTo(map);
      this.state.layers[layer.id + '_feature'] = layer;
      this.setState({});
    }
  }

  getTreeNodes = () => {
    return mapServices.map(i => {
      return (
        <TreeNode title={i.name} key={i.id} disableCheckbox>
          {i.children.map(j => {
            let heat = j.heatLayerSource !== undefined && j.heatLayerSource !== null;
            let cluster = j.clusterLayerSource !== undefined && j.clusterLayerSource !== null;
            let feature = j.featureLayerSource !== undefined && j.featureLayerSource !== null;
            return (
              <TreeNode
                title={
                  <span>
                    {j.name}
                    <Popover
                      title="工具"
                      placement="right"
                      content={
                        <div className={st.layeractions}>
                          <Button onClick={e => this.addLayer(j)} size="small" type="primary">
                            <Icon type="plus" />图层
                          </Button>
                          {heat ? (
                            <Button onClick={e => this.addHeatLayer(j)} size="small" type="primary">
                              <Icon type="plus" />热力图
                            </Button>
                          ) : null}
                          {cluster ? (
                            <Button
                              onClick={e => this.addClusterLayer(j)}
                              size="small"
                              type="primary"
                            >
                              <Icon type="plus" />聚合图
                            </Button>
                          ) : null}
                          {feature ? (
                            <Button
                              onClick={e => this.addFeatureLayer(j)}
                              size="small"
                              type="primary"
                            >
                              <Icon type="plus" />矢量图
                            </Button>
                          ) : null}
                        </div>
                      }
                    >
                      <Icon type="tool" />
                    </Popover>
                  </span>
                }
                key={j.id}
                data={j}
              />
            );
          })}
        </TreeNode>
      );
    });
  };

  render() {
    let { layers } = this.state;
    return (
      <div className={st.layerspanel}>
        <div>
          <Tree checkable={false} defaultExpandAll>
            {this.getTreeNodes()}
          </Tree>
        </div>
        <div className={st.layers}>
          <h3>已选图层</h3>
          <div className={st.layercontainer}>{this.getLayers()}</div>
        </div>
      </div>
    );
  }
}

export default LayersPanel;
