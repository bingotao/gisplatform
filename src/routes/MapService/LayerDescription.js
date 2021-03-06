import { Component } from 'react';
import $ from 'jquery';
import st from './LayerDescription.less';

class LayerDesciption extends Component {
  state = {
    legendData: null,
  };

  getLegendData() {
    const { item } = this.props;
    if (item.legendLayer !== undefined) {
      const legendUrl = `${item.url}/legend?f=pjson`;
      $.post(
        legendUrl,
        legendData => {
          if (legendData && legendData.layers && legendData.layers.length) {
            legendData = legendData.layers[item.legendLayer];

            legendData = legendData.legend.map(i => {
              return {
                name: i.label,
                base64: `data:${i.contentType};base64,${i.imageData}`,
              };
            });
            this.setState({ legendData: legendData });
          }
        },
        'json'
      );
    }

    if (item.type === 'statistic') {
      var legendData = item.data.features
        .sort((a, b) => b.properties[item.valueField] - a.properties[item.valueField])
        .map(i => {
          return {
            name: `${i.properties[item.labelField]}(${i.properties[item.valueField]})`,
            color: i.properties.color,
          };
        });

      this.setState({ legendData: legendData });
    }
  }

  getLegend() {
    const { legendData } = this.state;
    if (legendData) {
      return (
        <div className={st.layerlegend}>
          <div className={st.legendtitle}>图例</div>
          {legendData.map(i => {
            return (
              <span className={st.legenditem}>
                {i.base64 ? (
                  <img src={i.base64} />
                ) : (
                  <span className={st.statisticlegenditem} style={{ background: i.color }} />
                )}
                <span>{i.name}</span>
              </span>
            );
          })}
        </div>
      );
    }
  }

  componentDidMount() {
    this.getLegendData();
  }

  render() {
    const i = this.props.item;
    return (
      <div className={st.layerdescription}>
        <div>{i.description}</div>
        <div className={st.fts}>
          <span>服务类型：{i.typeAlias}</span>
          <span>发布时间：{i.date}</span>
          <span>是否可查询：{i.identifyLayers ? '可查询' : '不可查询'}</span>
          <span>是否可申请：{i.applyable ? '可申请' : '不可申请'}</span>
        </div>
        {this.getLegend()}
      </div>
    );
  }
}

export default LayerDesciption;
