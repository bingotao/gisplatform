import { Component } from 'react';
import $ from 'jquery';
import './IdentifyPopup.less';

class IdentifyPopup extends Component {
  constructor(ps) {
    super(ps);
    this.state = {
      currentFt: null,
    };
    this.map = ps.map;
  }

  getFtInfos() {
    var ft = this.state.currentFt;
    if (ft) {
      var trs = [];
      for (var attr in ft.properties) {
        if (attr.toLowerCase().indexOf('shape') === -1)
          trs.push(
            <tr>
              <th>{attr}</th>
              <td>{ft.properties[attr]}</td>
            </tr>
          );
      }
      return <table>{trs}</table>;
    }
  }

  setIdentifyFt(ft) {
    IdentifyPopup.clearIdentifyResult();
    IdentifyPopup.identifyFt = L.geoJSON(ft, { pane: 'layerspane' })
      .bindPopup(this.root, { maxWidth: 400 })
      .addTo(this.map);
    IdentifyPopup.identifyFt.openPopup();
  }

  getFeatureItems(fts, rlts, index) {
    var cmpts = [];
    for (var i = 0, l = fts.length; i < l; i++) {
      var ft = fts[i],
        rlt = rlts[i];
      var displayName = rlt.value;
      displayName = displayName.trim() ? displayName : i;
      cmpts.push(
        <li className="anticon" data-i0={index - 0} data-i1={i - 0}>
          {displayName}
        </li>
      );
    }
    return cmpts;
  }

  getResults() {
    var s = this.props;
    // 计算要素数量
    var resultsCnt = 0;
    for (var i = 0, l = s.results.length; i < l; i++) {
      resultsCnt += s.results[i].ftCol.features.length;
    }
    // 有要素
    if (resultsCnt) {
      return (
        <div className="identifypanel">
          <div className="identify-feautres">
            {s.results.map(
              function(t, i) {
                return (
                  <div>
                    <div>{t.name}</div>
                    <ul>{this.getFeatureItems(t.ftCol.features, t.eFtCol.results, i)}</ul>
                  </div>
                );
              }.bind(this)
            )}
          </div>
          <div className="identify-feautreinfo">{this.getFtInfos()}</div>
        </div>
      );
    } else {
      // 无要素
      return <div className="noneresults" />;
    }
  }

  componentDidMount() {
    var cThis = this;
    $(this.root)
      .find('li')
      .on('click', function() {
        var i0 = $(this).data('i0'),
          i1 = $(this).data('i1');

        $(cThis.root)
          .find('li')
          .removeClass('active');
        $(this).addClass('active');

        var ft = cThis.props.results[i0].ftCol.features[i1];
        cThis.setState({ currentFt: ft });
        cThis.setIdentifyFt(ft);
      })
      .first()
      .click();
  }

  render() {
    var s = this.state,
      ps = this.props;
    return (
      <div ref={root => (this.root = root)} className="identifypopup">
        {this.getResults()}
      </div>
    );
  }
}

IdentifyPopup.init = function(map, results) {
  var dom = $('<div></div>')[0];
  var cmp = ReactDOM.render(<IdentifyPopup map={map} results={results} />, dom);
  cmp.dom = dom;
  return { dom: dom, cmp: cmp };
};

IdentifyPopup.clearIdentifyResult = function() {
  if (IdentifyPopup.identifyFt) IdentifyPopup.identifyFt.remove();
  IdentifyPopup.identifyFt = null;
};

export default IdentifyPopup;
