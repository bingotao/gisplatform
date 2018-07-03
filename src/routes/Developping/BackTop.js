import { Component } from 'react';
import st from './BackTop.less';

class BackTop extends Component {
    componentDidMount() {
        document.getElementById('developing').onscroll = function () {
            // 变量t就是滚动条滚动时，到顶部的距离
            const t = document.getElementById('developing').scrollTop;
            const top_view = document.getElementById('top_view');
            if (top_view !== null) {
                top_view.style.display = t >= 1000 ? 'block' : 'none';
            }
        };
    }
    scrollToTop = () => {
        document.getElementById('developing').scrollTo(0, 0);
    };

    render() {
        return (
            <div
                id="top_view"
                onClick={this.scrollToTop}
                className={st.backtop}
            >
                回到顶部
            </div>
        );
    }
}
export default BackTop;