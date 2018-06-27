import { Component } from 'react';
import { icons } from '../../common/icons';
import st from './DrawMarkerPanel.less';

class DrawMarkerPanel extends Component {
  render() {
    let { iconClick } = this.props;
    return (
      <div className={st.drawmarkerpanel}>
        {icons.map(i => {
          return (
            <div key={i.id} onClick={e => iconClick(i)}>
              <div className="ct-icon">
                <svg className="icon" ariaHidden="true">
                  <use xlinkHref={`#${i.id}`} />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DrawMarkerPanel;
