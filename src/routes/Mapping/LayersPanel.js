import { Component } from 'react';
import { Tree, Icon, Popover, Slider, Checkbox } from 'antd';
import { getMapServices } from '../../common/mapServices';
import st from './LayersPanel.less';
const TreeNode = Tree.TreeNode;

let mapServices = getMapServices().filter(i => i.id !== 'gyqyfxztt');

class LayerSetting extends Component {
  state = { heat: false };

  toggleHeatlayer(checked) {
    let { layer, map } = this.props;
    if (!layer.heatLayer) {
      layer.heatLayer = L.esri.Heat.featureLayer({
        url: `${layer.url}/${layer.heatLayerSource}`,
        pane: layer.pane,
        radius: layer.radius || 50,
        blur: layer.blur || 50,
      });
    }
    checked ? layer.heatLayer.addTo(map) : layer.heatLayer.remove();
  }

  toggleClusterlayer(checked) {
    let { layer, map } = this.props;
    if (!layer.clusterLayer) {
      layer.clusterLayer = L.esri.Cluster.featureLayer({
        url: `${layer.url}/${layer.clusterLayerSource}`,
        pane: layer.pane,
      });
    }
    checked ? layer.clusterLayer.addTo(map) : layer.clusterLayer.remove();
  }

  render() {
    var { layer } = this.props;
    var { heat } = this.state;
    return (
      <div className={st.layersetting}>
        <div className={st.layercontrol}>
          透明度：<Slider
            defaultValue={layer.opacity || 1}
            style={{ width: 200 }}
            min={0}
            max={1}
            step={0.01}
            onChange={e => layer.layer.setOpacity(e)}
          />
        </div>
        {layer.heatLayerSource !== undefined ? (
          <div>
            <Checkbox
              ref={e => {
                this.checkHeat = e;
              }}
              onChange={e => {
                var checked = e.target.checked;
                this.setState({ heat: checked });
                this.toggleHeatlayer(checked);
              }}
            >
              热力图
            </Checkbox>
            <div className={st.layercontrol}>
              半&emsp;径：<Slider
                style={{ width: 200 }}
                defaultValue={layer.radius || 50}
                disabled={!heat}
                min={0}
                max={100}
                step={1}
                onChange={e => {
                  layer.heatLayer.setOptions({ radius: e });
                }}
              />
            </div>
            <div className={st.layercontrol}>
              模&emsp;糊：<Slider
                style={{ width: 200 }}
                defaultValue={layer.blur || 50}
                disabled={!heat}
                min={0}
                max={100}
                step={1}
                onChange={e => {
                  layer.heatLayer.setOptions({ blur: e });
                }}
              />
            </div>
          </div>
        ) : null}
        {layer.clusterLayerSource !== undefined ? (
          <div>
            <Checkbox
              ref={e => {
                this.checkCluster = e;
              }}
              onChange={e => {
                var checked = e.target.checked;
                this.toggleClusterlayer(checked);
              }}
            >
              聚合图
            </Checkbox>
          </div>
        ) : null}
      </div>
    );
  }
}

class LayersPanel extends Component {
  getTreeNodes = () => {
    return mapServices.map(i => {
      return (
        <TreeNode title={i.name} key={i.id} disableCheckbox>
          {i.children.map(j => {
            return (
              <TreeNode
                title={
                  <span>
                    {j.name}
                    <Popover
                      trigger="click"
                      placement="right"
                      title="设置"
                      content={<LayerSetting map={this.props.map} layer={j} />}
                    >
                      <Icon type="setting" />
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
  onCheck = (key, e) => {
    if (e.checked) {
      e.node.props.data.layer.addTo(this.props.map);
    } else {
      e.node.props.data.layer.remove();
    }
  };
  render() {
    return (
      <div className={st.layerspanel}>
        <Tree checkable defaultExpandAll onCheck={(key, e) => this.onCheck(key, e)}>
          {this.getTreeNodes()}
        </Tree>
      </div>
    );
  }
}

export default LayersPanel;
