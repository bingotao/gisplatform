import { Component } from 'react';
import st from './InstanceLearning.less';
import { Icon } from 'antd';

class InstanceLearning extends Component {
    getAnchor = (dom) => {
        this.props.getAnchor(dom);
    }
    render() {
        return (
            <div className={st.instancelearning}>
                {/* <div className={st.catalog}>
                    <h1>目录</h1>
                    <ul style={{ padding: 10 }}>
                        <li ><a href="#/developping?anchor=mapLearning" onClick={e => this.getAnchor('#mapLearning')}>1 Map</a>
                            <ul style={{ padding: 10 }}>
                                <li>
                                    <a href="#/developping?anchor=WorldStreetMap" onClick={e => this.getAnchor('#WorldStreetMap')}>1.1 World Street Map</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#/developping?anchor=toolbarLearning" onClick={e => this.getAnchor('#toolbarLearning')}>2 Toolbars</a>
                            <ul style={{ padding: 10 }}>
                                <li>
                                    <a href="#/developping?anchor=DrawingToolbar" onClick={e => this.getAnchor('#DrawingToolbar')}>2.1 Drawing Toolbar</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#/developping?anchor=queryLearning" onClick={e => this.getAnchor('#queryLearning')}>3 Query</a>
                            <ul style={{ padding: 10 }}>
                                <li>
                                    <a href="#/developping?anchor=QuerywithGPResult" onClick={e => this.getAnchor('#QuerywithGPResult')}>3.1 Query with GP Result</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={st.content}>
                    <h2 id="mapLearning">1 Map</h2>
                    <h3 id="WorldStreetMap">1.1 World Street Map</h3>
                    <p>街道图层地图显示,通过鼠标滑轮，放大地图显示不同级别的瓦片</p>
                </div> */}
                <h1>示例</h1>
                <div className={st.blockgroup}>

                    <div className={st.trailer}>
                        <figure className={st.cardimagewrap}>
                            <a target="_blank" href="https://developers.arcgis.com/javascript/latest/sample-code/widgets-layerlist-legend/index.html">
                                <img class={st.cardimg} src="https://developers.arcgis.com/javascript/latest/assets/img/sample-code/thumbnails/widgets-layerlist-legend.png" alt="layers-scenelayer-edges" />
                            </a>
                        </figure>
                        <div className={st.cardcontent}>
                            <p className={st.cardlast}><a href="https://developers.arcgis.com/javascript/latest/sample-code/widgets-layerlist-legend/index.html">Combine LayerList and Legend widgets</a></p>
                            <div class={st.openoutcontainer}>
                                <a target="_blank" className={st.openouticon} href="https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=widgets-layerlist-legend"><Icon style={{ fontSize: 20 }} type="book" /></a>
                                <a target="_blank" className={st.openouticon} href="https://codepen.io/pen?&editors=100"><Icon style={{ fontSize: 20 }} type="calendar" /></a>
                                <a target="_blank" className={st.openouticon} href="https://developers.arcgis.com/javascript/latest/sample-code/widgets-layerlist-legend/live/index.html"><Icon style={{ fontSize: 20 }} type="bulb" /></a>
                            </div>
                        </div>
                    </div>

                    <div className={st.trailer}>
                        <figure className={st.cardimagewrap}>
                            <a target="_blank" href="https://developers.arcgis.com/javascript/latest/sample-code/layers-csv-projection/index.html">
                                <img class={st.cardimg} src="https://developers.arcgis.com/javascript/latest/assets/img/sample-code/thumbnails/layers-csv-projection.png" alt="layers-scenelayer-edges" />
                            </a>
                        </figure>
                        <div className={st.cardcontent}>
                            <p className={st.cardlast}><a href="https://developers.arcgis.com/javascript/latest/sample-code/layers-csv-projection/index.html">CSVLayer-Project points on the fly</a></p>
                            <div class={st.openoutcontainer}>
                                <a target="_blank" className={st.openouticon} href="https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=layers-csv-projection"><Icon style={{ fontSize: 20 }} type="book" /></a>
                                <a target="_blank" className={st.openouticon} href="https://codepen.io/pen?&editors=100"><Icon style={{ fontSize: 20 }} type="calendar" /></a>
                                <a target="_blank" className={st.openouticon} href="https://developers.arcgis.com/javascript/latest/sample-code/layers-csv-projection/live/index.html"><Icon style={{ fontSize: 20 }} type="bulb" /></a>
                            </div>
                        </div>
                    </div>

                    <div className={st.trailer}>
                        <figure className={st.cardimagewrap}>
                            <a target="_blank" href="https://developers.arcgis.com/javascript/latest/sample-code/layers-scenelayer-filter-query/index.html">
                                <img class={st.cardimg} src="https://developers.arcgis.com/javascript/latest/assets/img/sample-code/thumbnails/layers-scenelayer-filter-query.png" alt="layers-scenelayer-edges" />
                            </a>
                        </figure>
                        <div className={st.cardcontent}>
                            <p className={st.cardlast}><a href="https://developers.arcgis.com/javascript/latest/sample-code/layers-scenelayer-filter-query/index.html">SceneLayer filter and query</a></p>
                            <div class={st.openoutcontainer}>
                                <a target="_blank" className={st.openouticon} href="https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=layers-scenelayer-filter-query"><Icon style={{ fontSize: 20 }} type="book" /></a>
                                <a target="_blank" className={st.openouticon} href="https://codepen.io/pen?&editors=100"><Icon style={{ fontSize: 20 }} type="calendar" /></a>
                                <a target="_blank" className={st.openouticon} href="https://developers.arcgis.com/javascript/latest/sample-code/layers-scenelayer-filter-query/live/index.html"><Icon style={{ fontSize: 20 }} type="bulb" /></a>
                            </div>
                        </div>
                    </div>

                    <div className={st.trailer}>
                        <figure className={st.cardimagewrap}>
                            <a target="_blank" href="https://developers.arcgis.com/javascript/latest/sample-code/layers-custom-elevation-thematic/index.html">
                                <img class={st.cardimg} src="https://developers.arcgis.com/javascript/latest/assets/img/sample-code/thumbnails/layers-custom-elevation-thematic.png" alt="layers-scenelayer-edges" />
                            </a>
                        </figure>
                        <div className={st.cardcontent}>
                            <p className={st.cardlast}><a href="https://developers.arcgis.com/javascript/latest/sample-code/layers-custom-elevation-thematic/index.html">Custom ElevationLayer-Thematic data as elevation</a></p>
                            <div class={st.openoutcontainer}>
                                <a target="_blank" className={st.openouticon} href="https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=layers-custom-elevation-thematic"><Icon style={{ fontSize: 20 }} type="book" /></a>
                                <a target="_blank" className={st.openouticon} href="https://codepen.io/pen?&editors=100"><Icon style={{ fontSize: 20 }} type="calendar" /></a>
                                <a target="_blank" className={st.openouticon} href="https://developers.arcgis.com/javascript/latest/sample-code/layers-custom-elevation-thematic/live/index.html"><Icon style={{ fontSize: 20 }} type="bulb" /></a>
                            </div>
                        </div>
                    </div>

                    <div className={st.trailer}>
                        <figure className={st.cardimagewrap}>
                            <a target="_blank" href="https://developers.arcgis.com/javascript/latest/sample-code/layers-imagery-pixelvalues/index.html">
                                <img class={st.cardimg} src="https://developers.arcgis.com/javascript/latest/assets/img/sample-code/thumbnails/layers-imagery-pixelvalues.png" alt="layers-scenelayer-edges" />
                            </a>
                        </figure>
                        <div className={st.cardcontent}>
                            <p className={st.cardlast}><a href="https://developers.arcgis.com/javascript/latest/sample-code/layers-imagery-pixelvalues/index.html">ImageryLayer-client side pixel filter</a></p>
                            <div class={st.openoutcontainer}>
                                <a target="_blank" className={st.openouticon} href="https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=layers-imagery-pixelvalues"><Icon style={{ fontSize: 20 }} type="book" /></a>
                                <a target="_blank" className={st.openouticon} href="https://codepen.io/pen?&editors=100"><Icon style={{ fontSize: 20 }} type="calendar" /></a>
                                <a target="_blank" className={st.openouticon} href="https://developers.arcgis.com/javascript/latest/sample-code/layers-imagery-pixelvalues/live/index.html"><Icon style={{ fontSize: 20 }} type="bulb" /></a>
                            </div>
                        </div>
                    </div>

                    <div className={st.trailer}>
                        <figure className={st.cardimagewrap}>
                            <a target="_blank" href="https://developers.arcgis.com/javascript/latest/sample-code/visualization-vv-color-animate/index.html">
                                <img class={st.cardimg} src="https://developers.arcgis.com/javascript/latest/assets/img/sample-code/thumbnails/visualization-vv-color-animate.png" alt="layers-scenelayer-edges" />
                            </a>
                        </figure>
                        <div className={st.cardcontent}>
                            <p className={st.cardlast}><a href="https://developers.arcgis.com/javascript/latest/sample-code/visualization-vv-color-animate/index.html">Animate color visual variable [beta]</a></p>
                            <div class={st.openoutcontainer}>
                                <a target="_blank" className={st.openouticon} href="https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=visualization-vv-color-animate"><Icon style={{ fontSize: 20 }} type="book" /></a>
                                <a target="_blank" className={st.openouticon} href="https://codepen.io/pen?&editors=100"><Icon style={{ fontSize: 20 }} type="calendar" /></a>
                                <a target="_blank" className={st.openouticon} href="https://developers.arcgis.com/javascript/latest/sample-code/visualization-vv-color-animate/live/index.html"><Icon style={{ fontSize: 20 }} type="bulb" /></a>
                            </div>
                        </div>
                    </div>

                    <div className={st.trailer}>
                        <figure className={st.cardimagewrap}>
                            <a target="_blank" href="https://developers.arcgis.com/javascript/latest/sample-code/visualization-vv-opacity-animate/index.html">
                                <img class={st.cardimg} src="https://developers.arcgis.com/javascript/latest/assets/img/sample-code/thumbnails/visualization-vv-opacity-animate.png" alt="layers-scenelayer-edges" />
                            </a>
                        </figure>
                        <div className={st.cardcontent}>
                            <p className={st.cardlast}><a href="https://developers.arcgis.com/javascript/latest/sample-code/visualization-vv-opacity-animate/index.html">Animate opacity visual variable [beta]</a></p>
                            <div class={st.openoutcontainer}>
                                <a target="_blank" className={st.openouticon} href="https://developers.arcgis.com/javascript/latest/sample-code/sandbox/index.html?sample=visualization-vv-opacity-animate"><Icon style={{ fontSize: 20 }} type="book" /></a>
                                <a target="_blank" className={st.openouticon} href="https://codepen.io/pen?&editors=100"><Icon style={{ fontSize: 20 }} type="calendar" /></a>
                                <a target="_blank" className={st.openouticon} href="https://developers.arcgis.com/javascript/latest/sample-code/visualization-vv-opacity-animate/live/index.html"><Icon style={{ fontSize: 20 }} type="bulb" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InstanceLearning;