import { Component } from 'react';
import $ from 'jquery';
import st from './BaseMapPanel.less';
import { getBaseMaps } from '../../common/mapServices.js';

let baseMaps = getBaseMaps().children.filter(i => i.id.indexOf('js') === -1);

let defaultBaseMapIndex = 0;

class BaseMapPanel extends Component {
  state = {};

  changeBaseMap(index) {
    if (!this.$baseMaps) {
      this.$baseMaps = $(this.root).find('.basemapitem');
    }
    let aCls = 'active';
    this.$baseMaps.removeClass(aCls);
    $(this.$baseMaps.get(index)).addClass(aCls);
    var { map } = this.props;
    for (let bm of baseMaps) {
      bm.layer.remove();
    }
    baseMaps[index].layer.addTo(map);
    this.baseMapId = baseMaps[index].id;
  }

  getOptions() {
    return this.baseMapId;
  }

  componentDidMount() {
    this.changeBaseMap(defaultBaseMapIndex);
  }

  render() {
    return (
      <div
        ref={e => {
          this.root = e;
        }}
        className={st.basemappanel}
      >
        {baseMaps.map((i, index) => {
          return (
            <div className="basemapitem" key={i.id} onClick={e => this.changeBaseMap(index)}>
              <img src={i.img} />
              <div>{i.name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BaseMapPanel;
