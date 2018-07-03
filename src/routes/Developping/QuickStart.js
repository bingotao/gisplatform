import { Component } from 'react';
import st from './QuickStart.less';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';


class QuickStart extends Component {
    getAnchor = (dom) => {
        this.props.getAnchor(dom);
        // $('#developing').animate({
        //     scrollTop: $(dom).offset().top
        // }, { duration: 500, easing: "swing" });
        // return false;
    }

    render() {
        return (
            <div className={st.quickstart}>
                <h1>概述</h1>
                <p>zhxwMap API for JavaScript 4.x以其对2D和3D的支持，易用性，在ArcGIS地理信息模型中作为条目存储的地图和图层网络资源的能力以及其对吸引人和优雅的用户体验。</p>
                <img src="https://developers.arcgis.com/javascript/latest/assets/img/guide/overview/ArcGISAPIforJavaScript_Overview_Small.png" alt="zhxwMap API for JavaScript 4.x In Action" />
                <figcaption style={{ marginTop: 0 }}>
                    <font>Dev Summit 2018 Hurricanes应用程序使用zhxwMap API for JavaScript 4.7</font>
                </figcaption>
                <p>开发人员可以构建由Web场景支持的全功能3D应用程序，该应用程序可以包含丰富的信息图层，如地形，底图，图像，特征以及可以通过图块，特征，图像和场景服务进行流式传输的3D对象。此外，还包括核心功能，用于处理可用于使用简化编程模式构建引人注目的2D应用程序的Web地图和图层。</p>
                <p>如果不相同，开发人员会发现在2D和3D中工作的编程模式会非常相似。</p>
                <div className={st.esrimdPanel}>
                    <p>并非4.7中支持3.x API支持的所有2D图层和功能（请参阅<a href="https://developers.arcgis.com/javascript/latest/guide/choose-version/index.html">选择版本</a>以了解更多信息）。我们希望开发人员能够研究<a href='https://developers.arcgis.com/javascript/latest/guide/functionality-matrix/index.html'>支持的功能</a>，并根据需要在3.x API或4.x API上针对其应用程序进行明智的选择。4.x API正在迅速发展，不仅与3.x中的功能相匹配，而且远远超出了它的范围。有关3.x和4.x发布计划的信息，请参阅<a href='https://developers.arcgis.com/javascript/latest/guide/faq/index.html'>FAQ</a>。</p>
                </div>
                <p>这是API的一些关键功能的概述：</p>
                <div className={st.tablecontents}>
                    <ul>
                        <li>
                            <a href="#/developping?anchor=simple-and-consistent-api" onClick={e => this.getAnchor('#simple-and-consistent-api')}>简单而一致的API</a>
                            <ul>
                                <li>
                                    <a href="#/developping?anchor=constructors-and-properties" onClick={e => this.getAnchor('#constructors-and-properties')}>构造函数和属性</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=watching-property-changes" onClick={e => this.getAnchor('#watching-property-changes')}>看着财产变化</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=autocasting" onClick={e => this.getAnchor('#autocasting')}>Autocasting</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#/developping?anchor=make-a-3d-map-as-easily-as-a-2d-map" onClick={e => this.getAnchor('#make-a-3d-map-as-easily-as-a-2d-map')}>像2D地图一样轻松制作3D地图</a>
                            <ul>
                                <li>
                                    <a href="#/developping?anchor=3d-support" onClick={e => this.getAnchor('#3d-support')}>3D支持</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=3d-symbology" onClick={e => this.getAnchor('#3d-symbology')}>3D符号</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#/developping?anchor=easily-integrate-with-your-web-gis" onClick={e => this.getAnchor('#easily-integrate-with-your-web-gis')}>轻松与您的Web GIS集成</a>
                        </li>
                        <li>
                            <a href="#/developping?anchor=author-manage-and-mash-up-layers-using-layer-items" onClick={e => this.getAnchor('#author-manage-and-mash-up-layers-using-layer-items')}>使用图层项目创作，管理和混搭图层</a>
                        </li>
                        <li>
                            <a href="#/developping?anchor=build-a-great-user-experience" onClick={e => this.getAnchor('#build-a-great-user-experience')}>构建出色的用户体验</a>
                        </li>
                        <li>
                            <a href="#/developping?anchor=create-meaningful-visualizations-of-your-data" onClick={e => this.getAnchor('#create-meaningful-visualizations-of-your-data')}>创建有意义的数据可视化</a>
                        </li>
                        <li>
                            <a href="#/developping?anchor=enable-interactivity-using-the-geometry-and-projection-engines" onClick={e => this.getAnchor('#enable-interactivity-using-the-geometry-and-projection-engines')}>使用几何和投影引擎启用交互性</a>
                        </li>
                        <li>
                            <a href="#/developping?anchor=bring-in-vector-tile-layers" onClick={e => this.getAnchor('#bring-in-vector-tile-layers')}>引入矢量瓷砖图层</a>
                        </li>
                        <li>
                            <a href="#/developping?anchor=login-to-the-platform-and-access-secured-content" onClick={e => this.getAnchor('#login-to-the-platform-and-access-secured-content')}>登录到平台并访问安全内容</a>
                        </li>
                        <li>
                            <a href="#/developping?anchor=integrate-gis-capabilities-using-tasks" onClick={e => this.getAnchor('#integrate-gis-capabilities-using-tasks')}>使用任务集成GIS功能</a>
                        </li>
                        <li>
                            <a href="#/developping?anchor=work-with-third-party-tools" onClick={e => this.getAnchor('#work-with-third-party-tools')}>使用第三方工具</a>
                        </li>
                    </ul>
                </div>
                <h2 id="simple-and-consistent-api">简单而一致的API</h2>
                <p>zhxwMap API for JavaScript通过简洁的实现提供了流畅的开发人员体验。随着这个变化，开发人员应该如何规划他们的应用程序的实现。以下分解了使用API​​编写应用程序时要考虑的一些要点。</p>
                <h3 id="constructors-and-properties">构造函数和属性</h3>
                <p>一个类的所有属性都可以在构造函数中设置，并且每个类只有一个构造函数。类的属性可以通过其构造函数或直接在属性本身上设置。</p>
                <p>该片段直接在2D <a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html">MapView</a>构造函数中设置中心点和缩放比例。</p>
                <SyntaxHighlighter language='javascript' style={docco}>{`
                const view = new MapView({
                    center: [ -122, 38 ],
                    scale: 12345678
                });`
                }</SyntaxHighlighter>
                <p>该片段创建一个具有空构造函数的2D MapView，并分别设置中心点和缩放属性。</p>
                <SyntaxHighlighter language='javascript' style={docco}>{`
                    view = new MapView();
                    view.center = [ -122, 38 ];
                    view.scale = 12345678;`
                }</SyntaxHighlighter>
                <h3 id="watching-property-changes">看着财产变化</h3>
                <p>您可以使用该<code>.watch()</code>方法监听属性更改。观察属性更改是使用该<code>.watch(property, callback)</code>方法处理的。每次观看的属性更改时都会调用回调。也可以观察嵌套属性，例如<code>basemap.title</code>。</p>
                <SyntaxHighlighter language='javascript' style={docco}>{`
                // watch handler: the callback fires each time the title of the map's basemap changes
                var handle = map.watch('basemap.title', function(newValue, oldValue, property, object) {
                    console.log("New value: ", newValue,              // The new value of the property
                                "<br>Old value: ", oldValue,          // The previous value of the changed property
                                "<br>Watched property: ", property,   // In this example this value will always be "basemap.title"
                                "<br>Watched object: ", object);      // In this example this value will always be the map object
                });`
                }</SyntaxHighlighter>
                <h3 id="autocasting">Autocasting</h3>
                <p>Autocasting是一种设置键入属性的方便方式，无需通过require()函数引用额外的API模块。开发人员可以将构造函数参数直接传递给所需的属性，并且API将在内部使用提供的构造函数参数实例化对象，从而使开发人员可以更轻松地进行处理。</p>
                <h2 id="make-a-3d-map-as-easily-as-a-2d-map">像2D地图一样轻松制作3D地图</h2>
                <p>通过地图视图和场景视图，开发人员可以用几行代码渲染具有2D视图或3D视图（或两者）的地图。使用3D视图很像使用2D视图。例如，两个视图在图层，渲染器，任务，几何图形，符号系统，弹出窗口和导航中共享相同的实现，但3D添加了特定于3D的概念，例如环境（大气和光照）以及相机。详细了解<a href="https://developers.arcgis.com/javascript/latest/sample-code/intro-mapview/index.html">二维地图视图</a>和<a href="https://developers.arcgis.com/javascript/latest/sample-code/intro-sceneview/index.html">三维场景视图</a>。</p>
                <figure><a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html"><img src="https://developers.arcgis.com/javascript/latest/assets/img/guide/overview/2D_3D_Comparisson.png" /></a></figure>
                <h3 id="3d-support">3D支持</h3>
                <p>SceneView 使用WebGL 显示Map或WebScene实例的3D视图。</p>
                <p>此3D代码片段直接在SceneView构造函数中设置中心点和缩放。</p>
                <SyntaxHighlighter language='javascript' style={docco}>{`
                const view = new SceneView({
                    container: "viewDiv",
                    map: map,
                    scale: 500000,
                    center: [-101.17, 21.78]
                });`
                }</SyntaxHighlighter>
                <p>Viewpoint和Camera类是3D工作的一个组成部分。Camera在3D视图中为可见范围提供了观察点。视点描述2D或3D视图的视角，并支持旋转。它可以通过以下任一方式来实现：</p>
                <ul>
                    <li>通过存储区域来显示区域</li>
                    <li>通过存储关于比例的信息来显示制图表示。</li>
                </ul>
                <p>在二维视图中，视点是使用中心点和比例值确定的，而“Camera”位置确定它为3D视图。这是因为缩放在2D和3D视图之间被不同地对待。</p>
                <p>此3D代码片段使用SceneView构造函数中的Camera位置。</p>
                <SyntaxHighlighter language='javascript' style={docco}>{`
                var view = new SceneView({
                    container: "viewDiv",
                    map: map,
                    camera: {
                      position: [7.654, 45.919, 5184],
                      tilt: 80
                    }
                });`
                }</SyntaxHighlighter>
                <p>此Viewpoint代码片段适用于2D和3D。</p>
                <SyntaxHighlighter language='javascript' style={docco}>{`
                var viewpoint = new Viewpoint({
                    targetGeometry: new Point({
                        x: 4.4856,
                        y: 48.3908
                    }),
                    scale: 2000
                });`
                }</SyntaxHighlighter>
                <h3 id="3d-symbology">3D符号</h3>
                <p>除了SceneView映射组件外，这还包括对3D图层类型和3D符号体系的支持。每个3D符号可以由几个符号层组成。因此，单个图形和/或几何可以用多种方式符号化。以下是两种不同类型的3D符号体系的示例。</p>
                <table className={st.table}>
                    <thead>
                        <tr>
                            <th>3D填充符号</th>
                            <th>3D对象符号</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src="https://developers.arcgis.com/javascript/latest/assets/img/guide/3dFillSymbol.png" alt="3D填充符号" title="3D填充符号" /></td>
                            <td><img src="https://developers.arcgis.com/javascript/latest/assets/img/guide/3DObjectSymbol.png" alt="3D物体符号体系" title="3D物体符号体系" /></td>
                        </tr>
                    </tbody>
                </table>
                <h2 id="easily-integrate-with-your-web-gis">轻松与您的Web GIS集成</h2>
                <p>许多开发人员采用了在zhxwMap Online和/或Portal for ArcGIS中创作Web地图并在应用程序中使用它的模式。他们创建数据的美观可视化，配置弹出窗口，设置书签，然后仅通过引用Web地图的ID将地图加载到他们的应用中。使用此版本的zhxwMap API for JavaScript，您可以使用Web场景在3D地图中遵循相同的模式。这可以通过在zhxwMap Online或Portal for ArcGIS中对地图进行造型，将其保存为Web场景，然后使用Web场景的ID将其加载到您的应用中来完成。</p>
                <figure>
                    <a href="https://developers.arcgis.com/javascript/latest/sample-code/webscene-basic/index.html"><img src="https://developers.arcgis.com/javascript/latest/assets/img/guide/overview/webscene.png" alt="WebScene在行动" /></a>
                    <figcaption>通过加载Web场景来创建交互式3D网页制图应用程序。</figcaption>
                </figure>
                <p>zhxwMap API for JavaScript的体系结构反映了Web地图和Web场景结构。因此，您可以在网络地图或网络场景（如操作图层，底图（具有参考图层）以及其他地图属性（如书签和幻灯片））中获得与期望相同的结构。无论您自己在代码中构建地图，还是从门户项目打开地图，此映射API结构都保持不变。</p>
                <h2 id="author-manage-and-mash-up-layers-using-layer-items">使用图层项目创作，管理和混搭图层</h2>
                <p>图层项目与网络地图类似，因为它们允许开发人员设置初始范围，渲染，过滤，弹出窗口和其他设置。与由整个地图组成的网络地图相反，图层项代表各个地图图层。这使您可以选择每个应用程序所需的单个图层。如果您在团队环境中开发，其他人也可以使用以有意义且一致的方式表示的图层。API允许您通过引用图层项目的ID来加载图层。</p>
                <h2 id="build-a-great-user-experience">构建出色的用户体验</h2>
                <p>zhxwMap API for JavaScript旨在为您提供构建具有优化用户界面和响应式设计的应用程序的工具。小部件，灵活的用户界面布局以及对地图视图的控制都是该API中的一些功能，可帮助您构建适用于任何设备的用户友好的应用程序。</p>
                <p>小部件是UI构建块。API小部件从头开始构建，具有适用于任何屏幕分辨率的清晰用户体验。小部件可以很容易地放置在其中一个角落或偏离边缘。UI元素的相对位置有助于适应多种屏幕分辨率。</p>
                <p>您可以使用原样使用API​​小部件或使用CSS更改小部件的特定方面，例如按钮颜色。</p>
                <figure>
                    <img src="https://developers.arcgis.com/javascript/latest/assets/img/guide/overview/styled_widgets.png" alt="风格的小部件" />
                    <figcaption>图例，搜索框和使用CSS样式化的导航小部件。</figcaption>
                </figure>
                <p>控制地图视图：如果您需要地图仅填充屏幕的一部分，以便菜单或其他UI元素占据空间的其余部分，则需要将屏幕上的某个特定范围保持居中。使用视图填充可以使地图中心或范围在完整视图的一个子部分上运行。随着屏幕尺寸的变化，您的地图将相对于您指定的位置居中。</p>
                <h2 id="create-meaningful-visualizations-of-your-data">创建有意义的数据可视化</h2>
                <p>开发人员可以使用简单的图层样式将原始数据转换为信息，使用API​​的弹出式实现和数据驱动的可视化功能提供丰富的弹出窗口。zhxwMap API for JavaScript支持使用颜色，大小和不透明度在2D和3D视图中可视化功能。渲染器可用于以主题表示数据，如人口或代表真实世界的值，如树冠的宽度或建筑物的高度。有关更多信息，请参阅可视化概述指南页面。</p>
                <figure>
                    <a href="https://developers.arcgis.com/javascript/latest/sample-code/visualization-vv-extrusion/index.html"><img src="https://developers.arcgis.com/javascript/latest/assets/img/guide/overview/data-driven-3D.png" alt="数据驱动的可视化" /></a>
                    <figcaption>数据驱动的挤出和连续的颜色。</figcaption>
                </figure>
                <h2 id="enable-interactivity-using-the-geometry-and-projection-engines">使用几何和投影引擎启用交互性</h2>
                <p>开发人员可以利用API的<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngine.html">geometryEngine</a>来构建交互式应用程序。使用geometryEngine客户端可以让开发人员执行诸如缓冲区，度量和空间交叉等操作，而无需调用服务器; 这意味着应用可以向用户显示即时反馈，从而实现出色的用户体验。</p>
                <p><a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-projection.html"> client-side projection engine </a>提供了一种几何形状从一个空间参考转换为另一种。具体参考<a href="https://developers.arcgis.com/javascript/latest/sample-code/client-projection/index.html">Client-side projection sample。</a></p>
                <h2 id="bring-in-vector-tile-layers">引入矢量瓷砖图层</h2>
                <p>zhxwMap Online支持将<a href="https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-VectorTileLayer.html">矢量切片图层</a>作为网络地图中的图层，并且是API中支持的图层类型。矢量切片与图像切片类似，但它们存储数据的矢量表示。矢量图块的客户端绘制允许为地图的目的定制矢量图块图层并驱动动态交互式制图。</p>
                <figure>
                    <a href="https://developers.arcgis.com/javascript/latest/sample-code/layers-vectortilelayer/index.html"><img src="https://developers.arcgis.com/javascript/latest/assets/img/guide/overview/vectortiles.png" alt="矢量切片地图" /></a>
                    <figcaption>将您自己的样式应用于zhxwMap Online矢量切片底图。</figcaption>
                </figure>
                <h2 id="login-to-the-platform-and-access-secured-content">登录到平台并访问安全内容</h2>
                <p>允许最终用户使用OAuth登录平台以访问安全内容，或使用基于旧式令牌的身份验证。使用OAuth将允许您管理对Online或Enterprise中的地图和应用的访问，并跟踪统计信息以查看人们如何使用您创建的应用。在Access安全资源指南页面中了解更多关于安全内容的信息。</p>
                <h2 id="integrate-gis-capabilities-using-tasks">使用任务集成GIS功能</h2>
                <p>开发人员使用任务将强大的ArcGIS功能嵌入其应用程序中。一些任务总是可用的，例如：地理处理，网络分析师任务（如最近的设施和路由），定位器和QueryTask。另外，一些功能是新的，例如：<a href="https://developers.arcgis.com/javascript/latest/guide/intro-workflows/index.html">Workflow Manager任务</a>。“ API参考”提供了当前支持的任务的完整列表。</p>
                <h2 id="work-with-third-party-tools">使用第三方工具</h2>
                <p>zhxwMap API for JavaScript中的所有小部件都进行了重新设计，以增强其可扩展性和自定义性。每个小部件的呈现都与其属性，方法和数据分开。您可以按原样使用小部件，使用CSS的样式主题，或完全自定义UI。虽然API是基于Dojo构建的，但它的小部件并不完全依赖于Dojo的Dijit框架。核心逻辑和表示的分离使您可以更轻松地创建新的小部件，并使用任何第三方框架（如Bootstrap，React或jQuery）重新调整现有小部件的用途。通过<a href="https://developers.arcgis.com/javascript/latest/sample-code/intro-widgets/index.html">BasemapToggle教程</a>和<a href="https://developers.arcgis.com/javascript/latest/guide/custom-widget/index.html">Widget development</a>开发指南页面了解更多信息。</p>
                <p><strong>与框架集成：</strong>在处理诸如企业应用程序等复杂解决方案时，您可能希望将zhxwMap API for JavaScript API集成到第三方框架（如Angular，React，Vue或Ember）中。这可以使代码更易于维护，并且在与其他开发人员协作时可以促进开发。了解有关<a href="https://developers.arcgis.com/javascript/latest/guide/using-frameworks/index.html">将4.x版与其他开发框架集成</a>的更多信息。</p>
                <p><strong>开发环境：</strong>创建本地构建并将API引入现代开发环境。我们建议使用<a href="https://developers.arcgis.com/javascript/latest/guide/using-npm/index.html">npm来生成 JavaScript的zhxwMap API的自定义版本</a>，以利用更多Web开发工具（如使用Webpack）的优势。您也可以使用<a hre="https://github.com/Esri/jsapi-resources/tree/master/4.x/bower">GitHub上</a>提供的Bower 。</p>
            </div>
        );
    }
}
export default QuickStart;