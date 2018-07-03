import { Component } from 'react';
import st from './Guidelines.less';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

class Guidelines extends Component {
    getAnchor = (dom) => {
        this.props.getAnchor(dom);
    }
    render() {
        return (
            <div className={st.guidelines}>
                <div className={st.catalog}>
                    <h1>开发指南</h1>
                    <ul style={{padding:'30'}}>
                        <li>
                            <a href="#/developping?anchor=abstract" onClick={e => this.getAnchor('#abstract')}>1 简介</a>
                            <ul>
                                <li>
                                    <a href="#/developping?anchor=11" onClick={e => this.getAnchor('#11')}>1.1 什么是zhxwMapAPI for JavaScript？</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=12" onClick={e => this.getAnchor('#12')}>1.2 zhxwMapJavaScript API包括什么？</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=13" onClick={e => this.getAnchor('#13')}>1.3 面向的读者</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=14" onClick={e => this.getAnchor('#14')}>1.4 获取API</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=15" onClick={e => this.getAnchor('#15')}>1.5 兼容性</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=16" onClick={e => this.getAnchor('#16')}>1.6 版本说明</a>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a href="#/developping?anchor=developmentportal" onClick={e => this.getAnchor('#developmentportal')}>2 应用开发入门</a>
                            <ul>
                                <li>
                                    <a href="#/developping?anchor=21" onClick={e => this.getAnchor('#21')}>2.1 地图图层</a>
                                    <ul>
                                        <li>
                                            <a href="#/developping?anchor=211" onClick={e => this.getAnchor('#211')}>2.1.1 Maps</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=212" onClick={e => this.getAnchor('#212')}>2.1.2 Layers</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=22" onClick={e => this.getAnchor('#22')}>2.2 图形</a>
                                    <ul>
                                        <li>
                                            <a href="#/developping?anchor=221" onClick={e => this.getAnchor('#221')}>2.2.1 增加图形到地图</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=222" onClick={e => this.getAnchor('#222')}>2.2.2 选择一个范围内的点</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=223" onClick={e => this.getAnchor('#223')}>2.2.3 创建并显示图形内容菜单</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=23" onClick={e => this.getAnchor('#23')}>2.3 事件</a>
                                    <ul>
                                        <li>
                                            <a href="#/developping?anchor=231" onClick={e => this.getAnchor('#231')}>2.3.1 地图事件概述</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=232" onClick={e => this.getAnchor('#232')}>2.3.2 添加和删除事件监听器</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=233" onClick={e => this.getAnchor('#233')}>2.3.3 常用事件</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=24" onClick={e => this.getAnchor('#24')}>2.4 渲染</a>
                                    <ul>
                                        <li>
                                            <a href="#/developping?anchor=241" onClick={e => this.getAnchor('#241')}>2.4.1 使用唯一值渲染</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=242" onClick={e => this.getAnchor('#242')}>2.4.2 使用分级渲染</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=243" onClick={e => this.getAnchor('#243')}>2.4.3 计算相等间隔分级</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=244" onClick={e => this.getAnchor('#244')}>2.4.4 用于时间轴图层的渲染</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=25" onClick={e => this.getAnchor('#25')}>2.5 查询检索</a>
                                    <ul>
                                        <li>
                                            <a href="#/developping?anchor=251" onClick={e => this.getAnchor('#251')}>2.5.1 Identify任务</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=252" onClick={e => this.getAnchor('#252')}>2.5.2 查找任务</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=253" onClick={e => this.getAnchor('#253')}>2.5.3 查询任务</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=26" onClick={e => this.getAnchor('#26')}>2.6 网络分析</a>
                                    <ul>
                                        <li>
                                            <a href="#/developping?anchor=261" onClick={e => this.getAnchor('#261')}>2.6.1 RouteTask概述</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=262" onClick={e => this.getAnchor('#262')}>2.6.2 使用RouteTask</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=263" onClick={e => this.getAnchor('#263')}>2.6.3 查找路线</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=264" onClick={e => this.getAnchor('#264')}>2.6.4 获得驾车指示k</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=263" onClick={e => this.getAnchor('#263')}>2.6.5 查找有障碍物和多个端点的路线</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=266" onClick={e => this.getAnchor('#266')}>2.6.6 服务区分析</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=267" onClick={e => this.getAnchor('#267')}>2.6.7 查找最近设施</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=27" onClick={e => this.getAnchor('#27')}>2.7 地理处理服务</a>
                                    <ul>
                                        <li>
                                            <a href="#/developping?anchor=271" onClick={e => this.getAnchor('#271')}>2.7.1 地理处理概述</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=272" onClick={e => this.getAnchor('#272')}>2.7.2 服务区域任务</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=273" onClick={e => this.getAnchor('#273')}>2.7.3 计算一个可视域</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=274" onClick={e => this.getAnchor('#274')}>2.7.4 瓶中信</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=27" onClick={e => this.getAnchor('#27')}>2.8 工具栏</a>
                                    <ul>
                                        <li>
                                            <a href="#/developping?anchor=281" onClick={e => this.getAnchor('#281')}>2.8.1 使用一个绘画工具栏</a>
                                        </li>
                                        <li>
                                            <a href="#/developping?anchor=282" onClick={e => this.getAnchor('#282')}>2.8.2 使用一个导航工具栏</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#/developping?anchor=learningresources" onClick={e => this.getAnchor('#learningresources')}>3 学习资源</a>
                        </li>
                    </ul>
                </div>
                <div className={st.content}>
                    <h2 id="abstract">1 简介</h2>
                    <h3 id="11">1.1 什么是zhxwMap API for JavaScript？</h3>
                    <p>zhxwMap JavaScript API是一个在web应用中嵌入GIS地图和任务的轻量级的方式。通过这个API可以很容易地建立和部署应用。可以在应用中使用所有需要的zhxwMap Server上可用的地图和工具。JavaScript API 版权归ESRI所有，为客户提供免费的在线应用。</p>
                    <h3 id="12">1.2 zhxwMap JavaScript API包括什么？</h3>
                    <p>zhxwMap JavaScript API为在web应用中使用提供下列资源：</p>
                    <ul style={{ listStyle: "none" }}>
                        <li>Maps - API支持zhxwMap Server的动态地图服务和缓冲（切片）地图服务。通过zhxwMap JavaScript API，能够用任意投影显示地图。</li>
                        <li>Graphics - 通过允许用户绘制图形和用户在地图的图形要素上单击或悬停鼠标提供信息弹出窗口来增强web应用。</li>
                        <li>Tasks - API包含常用GIS任务的类和方法:</li>
                    </ul>
                    <ul>
                        <li>查询；</li>
                        <li>查找地址；</li>
                        <li>查找属性；</li>
                        <li>Identify要素；</li>
                        <li>地理处理。</li>
                    </ul>
                    <p>访问Dojo和其它程序库 - zhxwMap JavaScript API建立在Dojo JavaScript Toolkit上, 提供用户访问dijits (Dojo widgets)和其他JavaScript工具。用户也能够在应用中集成其他的程序库，如Google Chart API。</p>
                    <h3 id="13">1.3 面向的读者</h3>
                    <p>API是提供给那些具有一定JavaScript编程经验和了解面向对象概念的读者使用。此外，读者还应该对地图产品有一定的了解。</p>
                    <h3 id="14">1.4 获取API</h3>
                    <p>地图API是由JavaScript语言编写的，您在使用之前需要通过<code>{"<script>"}</code>标签将API引用到页面中：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    <script src="http://serverapi.arcgisonline.com/jsapi/arcgis/?v=2.8" type="text/javascript"></script>
                    `}</SyntaxHighlighter>
                    <p>其中参数v为API当前的版本号，目前最新版本为2.8。</p>
                    <h3 id="15">1.5 兼容性</h3>
                    <p>浏览器：IE 6.0+、Firefox 3.0+、Opera 9.0+、Safari 3.0+、Chrome。</p>
                    <p>操作系统：Windows、Mac、Linux。</p>
                    <p>移动平台: iPhone、Android。</p>
                    <p>操作系统：Windows、Mac、Linux。</p>
                    <h3 id="16">1.6 版本说明</h3>
                    <p>地址 http://serverapi.arcgisonline.com/jsapi/arcgis/?v=2.8 中的参数v表示您加载API的版本，例如当前API的最新版本为2.8，则您可在地址中添加 v=2.8。当API升级后，如果已有接口在使用、命名等方面发生了变化，我们会为其增加一个新的版本号，这不会对您现有的应用造成任何影响。如果升级只是修复一些bug或者在不影响现有功能的前提下增加接口、改善性能，则版本号不会发生变化。您可以在更新日志页面查看版本的变化。</p>
                    <h2 id="developmentportal">2 应用开发入门</h2>
                    <h3 id="21">2.1 地图图层</h3>
                    <h4 id="211">2.1.1 Maps</h4>
                    <h5>2.1.1.1 地图图层概念</h5>
                    <p>地图可以包含一个或多个图层，每个图层在每个级别都是由若干张图块组成的，它们覆盖了地球的整个表面。例如您所看到包括街道、兴趣点、学校、公园等内容的地图展现就是一个图层。</p>
                    <h5>2.1.1.2 添加和移除地图</h5>
                    <p>通过map.addTileLayer方法可向地图添加图层：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    map.addLayer(tiledMapServiceLayer); // 添加图层  
                    `}</SyntaxHighlighter>
                    <p>若要从地图上移除图层，需要调用map.removeTileLayer方法：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    map.removeTileLayer(tiledMapServiceLayer); // 将图层移除 
                    `}</SyntaxHighlighter>
                    <h5>2.1.1.3 加入地图并显示当前地图范围</h5>
                    <p>使用如下代码创建地图：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    var map = new esri.Map("map");  
                    `}</SyntaxHighlighter>
                    <p>下行代码为onExtentChange事件创建了一个事件监听器：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    dojo.connect(map, "onExtentChange", showExtent); 
                    `}</SyntaxHighlighter>
                    <p>这意味着如果地图的范围被修改，回调函数showExtent将被调用。showExtent函数构建一个包含地图的两个角的坐标的字符串。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    Lower left corner = (extent.xmin, extent.ymin);  
                    Upper right corner = (extent.xmax, extent.ymax);  
                    `}</SyntaxHighlighter>
                    <p>这两个角是需要知道用于地图的边界框的。showExtent函数的最后一行通过增加完整的字符串到'info' DIV在页面上显示坐标:<cod>dojo.byId("info").innerHTML = s;</cod></p>
                    <p>代码如下所示：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function showExtent(extent) {  
                        var s = "";  
                        s = "XMin: "+ extent.xmin.toFixed(2)  
                        +"YMin: " + extent.ymin.toFixed(2)  
                        +"XMax: " + extent.xmax.toFixed(2)  
                        +"YMax: " + extent.ymax.toFixed(2);  
                        dojo.byId("info").innerHTML = s;  
                    } 
                    `}</SyntaxHighlighter>
                    <h5>2.1.1.4 加入地图并显示x，y坐标</h5>
                    <p>这两行代码增加了事件监听器到地图。一个监听器为了onMouseMove，另外一个为了onMouseDrag，但是他们都是调用函数showCoordinates:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    dojo.connect(map, "onMouseMove", showCoordinates);  
                    dojo.connect(map, "onMouseDrag", showCoordinates);   
                    `}</SyntaxHighlighter>
                    <p>这些事件都传递地图点坐标到showCoordinates函数。下列代码是函数如何获得坐标并写到"info"标签：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    var mp = evt.mapPoint;  
                    dojo.byId("info").innerHTML = mp.x + ", " + mp.y;  
                    `}</SyntaxHighlighter>
                    <h5>2.1.1.5 定制平移动画</h5>
                    <p>panDuration和panRate是Dojo动画属性，可以分别确定动画的duration和帧刷新的rate。这些属性的单位都是毫秒，panDuration默认为值是250，panRate默认值是25。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function init() {  
                        //configure map pan animation to be slower  
                        esri.config.defaults.map.panDuration = 1000; //time in milliseconds; default panDuration:250  
                        esri.config.defaults.map.panRate = 50;  
                        //refresh rate of zoom animation; default panRate:25  
                        var myExtent = new esri.geometry.Extent(-125, 28,  
                        -62, 45, new esri.SpatialReference({wkid:4326}));  
                        var map = new esri.Map("map", {nav:true, extent:esri.geometry.geographicToWebMercator(myExtent)});  
                        map.addLayer(new esri.layers.ArcGISTiledMapServiceLayer  
                        ("http://server.arcgisonline.com/ArcGIS/rest/services/  
                        World_Imagery/MapServer"));  
                    }  
                    `}</SyntaxHighlighter>
                    <h4 id="212">2.1.2 Layers</h4>
                    <h5>2.1.2.1 创建WMS图层类型的图层</h5>
                    <p>首先，代码声明一个新的类my.CityStatesRiversUSAWMSLayer，该类继承esri.layers.DynamicMapServiceLayer：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    dojo.declare("my.CityStatesRiversUSAWMSLayer", DynamicMapServiceLayer, {  
                        ...  
                    });
                    `}</SyntaxHighlighter>
                    <p>接下来定义了类的构造函数。图层的初始化和完整的范围和空间参考都被定义在构造函数中。代码也设置了图层的loaded属性为true并调用onLoad函数。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    constructor: function() {  
                        this.initialExtent = this.fullExtent = new esri.geometry.Extent(...);  
                        this.spatialReference = new esri.SpatialReference(...);  
                        this.loaded = true;  
                        this.onLoad(this);  
                    }
                    `}</SyntaxHighlighter>
                    <p>最后，getImageUrl方法被执行。getImageUrl方法返回被加到地图的图片的URL。URL使用带范围，宽和高的参数的函数生成。callback函数被调用别且URL作为单一参数被传回</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    getImageUrl: function(extent, width, height, callback) {  
                        ...  
                        callback("..." + dojo.objectToQuery(params));  
                    }
                    `}</SyntaxHighlighter>
                    <p>为了使用这个图层，代码创建一个地图并且增加一个来自ArcGIS　Online的切片图层，然后在上面放置新建的WMS图层。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function init() {  
                        var map = new esri.Map("map");  
                        map.addLayer(new esri.layers.ArcGISTiledMapServiceLayer("..."));  
                        map.addLayer(new my.CityStatesRiversUSAWMSLayer());  
                    }
                    `}</SyntaxHighlighter>
                    <h5>2.1.2.2 创建定制的切片图层类型的图层</h5>
                    <p>首先，代码声明一个继承esri.layers.TiledMapServiceLayer的定制的图层my.PortlandTiledMapServiceLayer。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    dojo.declare("my.PortlandTiledMapServiceLayer", esri.layers.TiledMapServiceLayer, {  
                        ...  
                    });
                    `}</SyntaxHighlighter>
                    <p>接下来定义一个图层的构造函数。除空间参考和范围外，构造函数还定义了tileInfo对象。esri.layers.TileInfo包含关于缓存切片大小和比例的信息。对于zhxwMap Server服务，切片信息可以在服务的缓存目录里的缓存配置文件(conf.xml)找到，也能通过服务目录检索这个信息。对于不是zhxwMap Server切片的Web地图，需要从服务器管理员或发布切片的单位组织获得切片的大小，比例等等信息。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    constructor: function() {  
                        this.spatialReference = new esri.SpatialReference(...);  
                        this.initialExtent = (this.fullExtent = new esri.geometry.Extent(...));  
                        ...  
                        this.tileInfo = new esri.layers.TileInfo(...);  
                        ...  
                        this.onLoad(this);  
                    }
                    `}</SyntaxHighlighter>
                    <p>最后getTileUrl方法被执行，按等级，方和列参数生成一个切片的URL。本例中，行数和列数需要转换为十六进制的并补0来获得正确的URL。定制图层的URL语法取决于访问的切片缓存的结构。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    getTileUrl: function(level, row, col) {  
                        return "..." +  
                        "L" + dojo.string.pad(level, 2, '0') + "/" +  
                        "R" + dojo.string.pad(row.toString(16), 8, '0') + "/" +  
                        "C" + dojo.string.pad(col.toString(16), 8, '0') + "." +  
                        "png";  
                    }
                    `}</SyntaxHighlighter>
                    <p>这个函数增加了图层到地图。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function init() {  
                        var map = new esri.Map("map");  
                        map.addLayer(new my.PortlandTiledMapServiceLayer());  
                    }
                    `}</SyntaxHighlighter>
                    <h3 id="22">2.2 图形</h3>
                    <h4 id="221">2.2.1 增加图形到地图</h4>
                    <p>zhxwMap JavaScript API包含工具栏。下面说明如何使用Draw工具栏在地图上描绘许多种类的几何体。</p>
                    <p>工具栏不是一个在页面上自动地可见的用户界面组件。相反，工具栏是一个助手类，可以用来让用户在地图上描绘几何体。它保存为描绘每个几何体类型而写的代码。仅仅激活需要描绘的几何体类型。本例中，每个html按钮激活一个不同的几何体类型。这是Point按钮的代码：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    <button onclick="tb.activate(esri.toolbars.Draw.POINT);" ID="Button1">Point</button>  
                    `}</SyntaxHighlighter>
                    <p>当用户点击这个按钮，工具栏激活点几何体。允许人们从一个下拉列表，一组radio按钮或一些其他组件中选择几何体的类型。</p>
                    <p>本例中，工具栏的"onDrawEnd"事件确保完成描绘一个要素后，要素可以在地图上看到：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    dojo.connect(tb, "onDrawEnd", addGraphic);
                    `}</SyntaxHighlighter>
                    <p>addGraphic函数为几何体类型设置适当的符号。本例中，符号从下拉列表中提供。每个列表的项目都是在一行上的符号的定义，像这样：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    <option  
                        value="new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_SQUARE, 10,  
                        new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,  
                        new dojo.Color([255,0,0]), 1),  
                        new dojo.Color([0,255,0,0.25]))"
                    >Square</option>  
                    `}</SyntaxHighlighter>
                    <h4 id="222">2.2.2 选择一个范围内的点</h4>
                    <p>使用图形显示查询结果，利用draw toolbar在地图上选择图形并修改图形符号为“高亮”。 draw toolbar帮助用户在地图上画矩形。工具栏不是一个用户界面控件；工具栏仅仅是为了显示矩形和捕获范围保存JavaScript代码的帮助类。 创建功能栏，激活绘制的类型，提供一个绘制完成时做些事情的事件监听器。在本例中，所以这些都在initToolbar函数中实现:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function initToolbar(map) {  
                        var tb = new esri.toolbars.Draw(map);  
                        dojo.connect(tb, "onDrawEnd", findPointsInExtent);  
                        tb.activate(esri.toolbars.Draw.EXTENT);  
                    }
                    `}</SyntaxHighlighter>
                    <p>当画矩形结束时回调函数findPointsInExtent被调用。这个函数循环访问地图里每个graphic并确定它是否在绘制工具栏返回的范围内。如果在范围内，代码修改该图形为加亮符号并且增加所需信息到结果数组。</p>
                    <p>注意InfoTemplate利用html在一个表格行中放置每个结果。 results.join()方法连结结果数组中的所有的元素为一个字符串。这个字符串被放置在<code>{'<table>'}</code>标签里面来创建一个表格。</p>
                    <h4 id="223">2.2.3 创建并显示图形内容菜单</h4>
                    <p>使用Dojo dijit.Menu创建菜单，当用户右键单击地图或者图形的时候显示出来。下列代码表示如何创建一个新的dijit.Menu并且计算用户右键单击的地图的位置：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    ctxMenuForMap = new dijit.Menu({  
                        onOpen: function(box) {  
                            currentLocation = getMapPointFromMenuPosition(box);  
                            editToolbar.deactivate();  
                        }  
                    });  
                    `}</SyntaxHighlighter>
                    <p>右键单击某位置并创建一个新的图形同时添加到地图中来：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    ctxMenuForMap.addChild(new dijit.MenuItem({  
                        label: "Add Point",  
                        onClick: function(evt) {  
                            var graphic = new esri.Graphic(esri.geometry.fromJson(currentLocation.toJson()), symbol);  
                            map.graphics.add(graphic);  
                        }  
                    })); 
                    `}</SyntaxHighlighter>
                    <h3 id="23">2.3 事件</h3>
                    <h4 id="231">2.3.1 地图事件概述</h4>
                    <p>浏览器中的JavaScript是“事件驱动”的，这表示JavaScript通过生成事件来响应交互，并期望程序能够“监听”感兴趣的活动。例如，在浏览器中，用户的鼠标和键盘交互可以创建在DOM内传播的事件。对某些事件感兴趣的程序会为这些事件注册JavaScript事件监听器，并在接收这些事件时执行代码。ArcGIS地图API拥有一个自己的事件模型，程序员可监听地图API对象的自定义事件，使用方法和DOM事件类似。但请注意，地图API事件是独立的，与标准DOM事件不同。</p>
                    <h4 id="232">2.3.2 添加和删除事件监听器</h4>
                    <p>为了处理一个事件，必须为事件添加监听器代码。为一个事件注册一个监听器迫使应用密切注意着这个事件发生时需要做的事情。特别是监听器能够调用处理函数响应事件。</p>
                    <p>在zhxwMap JavaScript API中，使用dojo.connect方法监听事件。这个方法的参数是监听的元素，监听的时间和事件触发时调用的函数。下面的代码行监听地图上的鼠标单击事件，并通过调用myOnClickHandler函数处理该事件：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    var myOnClick_connect = dojo.connect(map, "onClick", myOnClickHandler);  
                    `}</SyntaxHighlighter>
                    <p>为了避免内存泄漏，当应用被关闭时应该删除监听器。通过添加另外一个监听器，监听地图的onUnload事件来删除已注册的监听器:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    var myUnload_connect = dojo.connect(map, "onUnload", myUnloadHandler);    
                    `}</SyntaxHighlighter>
                    <p>另外一个处理方式，可以注册卸载处理器在窗口卸载时候被调用:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    dojo.addOnUnload(myUnloadHandler);
                    `}</SyntaxHighlighter>
                    <p>用处理器函数，断开所有添加的监听器，包括为onUnload事件添加的监听器:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    dojo.disconnect(myOnClick_connect);  
                    dojo.disconnect(myUnload_connect);  
                    `}</SyntaxHighlighter>
                    <h4 id="2.3.3">2.3.3 常用事件</h4>
                    <h5 id="2.3.3.1">2.3.3.1 Map.onLoad</h5>
                    <p>当添加一个地图到页面时，直到第一个图层被添加的地图上地图才能被使用。添加一个图层到地图初始化了图形并且激发了onLoad 事件。在这时，才能够和地图交互:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function init() {  
                        var map = new esri.Map("mapDiv");  
                        mapOnLoad_connect = dojo.connect(map, "onLoad", configNavigation);  
                        map.addLayer(...);  
                    }  
                    function configNavigation(map) {  
                        map.disableMapNavigation();  
                    }  
                    `}</SyntaxHighlighter>
                    <p>对这个规则有一个例外是setExtent方法。能够在地图的构造函数里设置地图的初始范围或在添加第一个图层前通过调用setExtent函数设置：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function init() {  
                        //setting initial extent in constructor  
                        var map = new esri.Map("mapDiv", { extent: new esri.geometry.Extent(...) });  
                        //or use set extent method  
                        var map = new esri.Map("mapDiv");  
                        map.setExtent(new esri.geometry.Extent(...));  
                        //add first layer  
                        map.addLayer(...);  
                    }  
                    `}</SyntaxHighlighter>
                    <h5 id="2.3.3.2">2.3.3.2 ArcGISDynamicMapServiceLayer.onLoad和ArcGISTiledMapServiceLayer.onLoad</h5>
                    <p>esri.layers.ArcGISDynamicMapServiceLayer和esri.layers.ArcGISTiledMapServiceLayer使用zhxwMap Server REST服务端点来工作。图层被创建时必须提出请求到zhxwMap Server来获得服务信息。应该等到图层的onLoad被激发才能和图层进行交互。下面的代码在激发onLoad事件后使用一个事件监听器访问initialExtent属性。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function init() {  
                        var layer = new esri.layers.ArcGISDynamicMapServiceLayer(...);  
                        dojo.connect(layer, "onLoad", printInitialExtent);  
                        }  
                        function printInitialExtent(layer) {  
                        alert(layer.initialExtent);  
                    }
                    `}</SyntaxHighlighter>
                    <p>对Internet Explorer, 由于资源缓冲，图层一被构造就触发onLoad事件。因此在注册onLoad事件监听器前应该检查图层的loaded属性是否是true:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function init() {  
                        var layer = new esri.layers.ArcGISDynamicMapServiceLayer(...);  
                        if (layer.loaded) {  
                            printInitialExtent(layer);  
                        }  
                        else {  
                            dojo.connect(layer, "onLoad", printInitialExtent);  
                        }  
                    }
                    `}</SyntaxHighlighter>
                    <h5 id="2.3.3.3">2.3.3.3 地图和图形上的鼠标事件</h5>
                    <p>zhxwMap JavaScript API地图和图形图层提供大量的用户可以与这些对象交互的鼠标事件。注册监听器到地图的onClick事件：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function init() {  
                        var map = new esri.Map(...);  
                        dojo.connect(map, "onClick", myClickHandler);  
                        map.addLayer(...);  
                    }
                    `}</SyntaxHighlighter>
                    <p>当用户单击地图，鼠标事件被产生并且所有注册的单击处理器被调用。鼠标事件作为一个参数被传递到每个处理器。除通过浏览器填充的所有属性以外，mapPoint和screenPoint作为事件的属性。mapPoint代表用地图坐标表示的单击的坐标，而screenPoint是用屏幕坐标表示的单击的坐标。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function myClickHandler(event) {  
                        alert("User clicked at " + event.screenPoint.x + ", "  
                        + event.screenPoint.y + " on the screen. The map coordinate at this point is "  
                        + event.mapPoint.x + ", " + event.mapPoint.y);  
                    } 
                    `}</SyntaxHighlighter>
                    <p>除了mapPoint和screenPoint属性，事件返回一个图层属性，这是接受事件的esri.Graphic。下面的代码展示了如何运用地图的onClick事件报告那个图形被用户单击。注意onClick事件的监听器仅在地图的onLoad事件已经触发后有效。在这种情况下，一个监听器是依赖于另外一个监听器。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function init() {  
                        var map = new esri.Map(...);  
                        dojo.connect(map, "onLoad", function() {  
                            dojo.connect(map.graphics, "onClick", myGraphicsClickHandler);  
                        });  
                    }  
                    function myGraphicsClickHandler(evt) {  
                        alert("User clicked on " + evt.graphic);  
                    }   
                    `}</SyntaxHighlighter>
                    <p>既然Map.graphics对象仅在Map.onLoad事件触发后才能被使用，那么就应该等待到Map.onLoad事件被触发再注册事件监听器。</p>
                    <h5 id="2.3.3.4">2.3.3.4 Map.onMouseWhell</h5>
                    <p>鼠标滚轮事件是一个跨浏览器的标准事件。一个值属性被加到DOMMouseScroll (Firefox)或鼠标滚轮事件(Internet Explorer/Safari)。正数表示鼠标滚轮向上滚动而负数表示鼠标滚轮向下滚动</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function init() {  
                        ...  
                        dojo.connect(map, "onMouseWheel", myMouseWheelHandler);  
                    }  
                    function myMouseWheelHandler(event) {  
                        alert("Mouse wheel value = " + event.value);  
                    }     
                    `}</SyntaxHighlighter>
                    <h3 id="24">2.4 渲染</h3>
                    <h4 id="241">2.4.1 使用唯一值渲染</h4>
                    <p>UniqueValueRenderer.addValue()方法被用来重复地为每个区域定义一个颜色。以使用唯一值渲染器来作为美国的符号为例：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function initOperationalLayers() {  
                        var defaultSymbol = new esri.symbol.SimpleFillSymbol().setStyle( esri.symbol.SimpleFillSymbol.STYLE_NULL);  
                        defaultSymbol.outline.setStyle(esri.symbol.SimpleLineSymbol.STYLE_NULL);  
                        //create renderer  
                        var renderer = new esri.renderer.UniqueValueRenderer(defaultSymbol, "SUB_REGION");  
                        //add symbol for each possible value  
                        renderer.addValue("Pacific", new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([255, 0, 0, 0.5])));  
                        renderer.addValue("Mtn", new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([0, 255, 0, 0.5])));  
                        renderer.addValue("N Eng", new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([0, 0, 255, 0.5])));  
                        renderer.addValue("S Atl", new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([255, 0, 255, 0.5])));  
                        renderer.addValue("Mid Atl", new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([255, 255, 255, 0.75])));  
                        renderer.addValue("E N Cen", new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([0, 255, 255, 0.5])));  
                        renderer.addValue("W N Cen", new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([255, 255, 0, 0.5])));  
                        renderer.addValue("E S Cen", new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([127, 127, 127, 0.5])));  
                        renderer.addValue("W S Cen", new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([0, 0, 0, 0.5])));  
                        var featureLayer = new esri.layers.FeatureLayer("http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer/1", {  
                            mode: esri.layers.FeatureLayer.MODE_SNAPSHOT,  
                            outFields: ["SUB_REGION"]  
                        });  
                        featureLayer.setRenderer(renderer);  
                        map.addLayer(featureLayer);  
                    }
                    `}</SyntaxHighlighter>
                    <h4 id="242">2.4.2 使用分级渲染</h4>
                    <p>使用ClassBreaksRenderer.addBreak()方法定义类，参数是在类中包含的最大值和最小值以及类使用的符号。</p>
                    <p>注意"Infinity"用于表示最后的中断没有上限。下列代码以使用一个分级渲染通过人口密度用符号表示Kansas为例，代码明确地增加类并为每一个定义颜色。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function initOperationalLayer() {  
                        var symbol = new esri.symbol.SimpleFillSymbol();  
                        symbol.setColor(new dojo.Color([150, 150, 150, 0.5]));  
                        //Add five breaks to the renderer.  
                        //If you have ESRI's ArcMap available, this can be a good way to determine break values.  
                        //You can also copy the RGB values from the color schemes ArcMap applies, or use colors  
                        //from a site like www.colorbrewer.org  
                        var renderer = new esri.renderer.ClassBreaksRenderer(symbol, "POP07_SQMI");  
                        renderer.addBreak(0, 25, new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([56, 168, 0, 0.5])));  
                        renderer.addBreak(25, 75, new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([139, 209, 0, 0.5])));  
                        renderer.addBreak(75, 175, new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([255, 255, 0, 0.5])));  
                        renderer.addBreak(175, 400, new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([255, 128, 0, 0.5])));  
                        renderer.addBreak(400, Infinity, new esri.symbol.SimpleFillSymbol().setColor(new dojo.Color([255, 0, 0, 0.5])));  
                        var infoTemplate = new esri.InfoTemplate('$'{NAME}, '$'{*});  
                        var featureLayer = new esri.layers.FeatureLayer("http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer/3", {  
                            mode: esri.layers.FeatureLayer.MODE_SNAPSHOT,  
                            outFields: ["*"],  
                            infoTemplate: infoTemplate  
                        });  
                        featureLayer.setDefinitionExpression("STATE_NAME = 'Kansas'");  
                        featureLayer.setRenderer(renderer);  
                        map.addLayer(featureLayer);  
                    }     
                    `}</SyntaxHighlighter>
                    <h4 id="243">2.4.3 计算相等间隔分级</h4>
                    <p>下列代码展示了如何配置分级渲染使用一个相等间隔分类。在这个分类类型中，断点被设置为相等的距离。</p>
                    <p>可以手工添加相等距离的断点；然而，如果数据被修改了，那些断点就会是不合理的。本例自动地计算断点，因此相同的代码可以用于不同的数据集。断点用相同颜色的逐渐增大的圆符号。如果想要应用某种颜色渐变到断点，需要手工重定义一个颜色数组，然后在循环中给断点加入颜色。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                            //divide the range of values by the number of classes to find the interval  
                            var numRanges = 7;  
                            var breaks = (max - min) / numRanges;  
                            var outline = new esri.symbol.SimpleLineSymbol().setWidth(1);  
                            var fillColor = new dojo.Color([240, 150, 240, 0.75]);  
                            var defaultSymbol = new esri.symbol.SimpleMarkerSymbol().setSize(1).setOutline(outline);  
                            var renderer = new esri.renderer.ClassBreaksRenderer(defaultSymbol, attributeField);  
                            //add the breaks using the interval calculated above  
                            for (var i = 0; i < numRanges; i++) {  
                                renderer.addBreak(parseFloat(min + (i * breaks)), parseFloat(min + ((i + 1) * breaks)), new esri.symbol.SimpleMarkerSymbol().setSize((i + 1) * 6).setColor(fillColor).setOutline(outline));  
                            }  
                            featureLayer.setRenderer(renderer);  
                        });  
                        map.addLayer(featureLayer);  
                    }     
                    `}</SyntaxHighlighter>
                    <h4 id="244">2.4.4 用于时间轴图层的渲染</h4>
                    <p>下列代码显示了在图层中配置一个时间渲染器，基于时间对图层进行渲染。这种类型的渲染是对有价值的历史或者实时数据的一种可视化，例如地震。</p>
                    <p>基于时间轴图层的渲染允许您定义跟踪如何进行渲染。采用分级渲染定义，通过重要程度定义符号，重要程度越高，符号大小越大。</p>
                    <p>接下来，定义一个符号调色装置，其决定如何随着时间的推移功能的符号的变化。随着时间的推移对每个符号的颜色进行修改：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    var ageSymbols = [];  
                    ageSymbols.push({label: "Less than 1 hour",symbol: new esri.symbol.SimpleLineSymbol()  
                    .setStyle(esri.symbol.SimpleLineSymbol.STYLE_SOLID)  
                    .setColor(new dojo.Color([255,0,0])).setWidth(10)});  
                    ageSymbols.push({label: "1 to 24 hours",symbol: new esri.symbol.SimpleLineSymbol()  
                    .setStyle(esri.symbol.SimpleLineSymbol.STYLE_SOLID)  
                    .setColor(new dojo.Color([49,154,255])).setWidth(10)});  
                    ageSymbols.push({label: "24 + hours",symbol: new esri.symbol.SimpleLineSymbol()  
                    .setStyle(esri.symbol.SimpleLineSymbol.STYLE_SOLID)  
                    .setColor(new dojo.Color([255,255,8])).setWidth(10)});  
                    `}</SyntaxHighlighter>
                    <h3 id="25">2.5 查询检索</h3>
                    <h4 id="251">2.5.1 Identify任务</h4>
                    <h5 id="2511">2.5.1.1 在地图上Identify要素</h5>
                    <p>Identify操作可能返回大量的信息，这取决于需要被Identify的图层的数量和设置的容差。容差是从单击点到可以作为结果的要素的像素数。Dojo Dijit库的TabContainer在一个标签界面组织结果。</p>
                    <p>本例包含许多函数，函数按下面顺序运行:</p>
                    <ul>
                        <li>init - 建立地图并增加来自zhxwMap Online的影像基础地图，以及ESRI Sample Server的波特兰的分区/地籍地图。</li>
                        <li>initFunctionality - 当地图加载时调用。建立IdentifyTask,IdentifyParameters和用于显示结果的Symbol和InfoWindow的一些选项。注意Identify任务需要zhxwMap Server地图服务上那些图层需要被Identify的URL。可以使用服务目录发现自己的服务的URL。</li>
                        <li>doIdentify- 当某人单击地图时被调用。清除任何存在的图形，增加单击的点的坐标到identify参数，并执行identify。</li>
                        <li>addToMap- 当identify任务结束时被调用。循环访问每个结果并根据结果来自哪个图层将它加到数组。这产生三个数组，每个图层一个数组。这些是指定给TabContainer Dijit的内容。这个函数以tab页效果显示了结果信息的信息窗口。</li>
                        <li>layerTabContent - 作为一个辅助函数被addToMap函数调用。格式化结果信息到TabContainer Dijit里。</li>
                        <li>showFeature - 当某人单击结果tab的"Show"链接时被调用。从地图清除任何存在的高亮的要素并高亮显示输入参数要素。</li>
                    </ul>
                    <h4 id="252">2.5.2 查找任务</h4>
                    <h5 id="2521">2.5.2.1 没有地图查找要素</h5>
                    <p>尽管FindTask不需要显示一个地图，但是构造函数需要一个zhxwMap Server地图服务的URL。 本例使用ESRI sample server上的ESRI_StatesCitiesRivers_USA地图服务。 FindParameters限定了仅仅搜索州图层（索引2）的STATE_NAME和STATE_FIPS字段。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                     params = new esri.tasks.FindParameters();  
                    params.layerIds = [2];  
                     params.searchFields = ["STATE_NAME","STATE_FIPS"];  
                    `}</SyntaxHighlighter>
                    <p>当单击Find按钮时，函数doFind读取输入框并用输入框的值作为查询文本。然后查找被执行：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    params.searchText = dojo.byId("searchText").value;  
                    find.execute(params, showResults);
                    `}</SyntaxHighlighter>
                    <p>结果以FindResult对象返回。通过如result.feature.attributes.STATE_NAME的语法取得graphics的属性。查找任务完成后，回调函数showResults循环访问这些要素并构造从它们的属性构造一个html表格。然后将表格写到"tbl" div里:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function showResults(results) {  
                        var result, attribs;  
                        var s = ["  
                        <table border=\"1\"><thead><tr style=\"background-color:#ccc;\"><td>State Name</td><td>FIPS</td><td>Population (1990)</td><td>Population (1999)</td></tr></thead><tbody id=\"states\">"];  
                        dojo.forEach(results,function(result){  
                        attribs = result.feature.attributes;  
                        s.push("  
                        <tr>  
                            <td>  
                                " + attribs.STATE_NAME + "  
                            </td>  
                            <td>  
                                " + attribs.STATE_FIPS + "  
                            </td>  
                            <td>  
                                " + attribs.POP1990 + "  
                            </td>  
                            <td>  
                                " + attribs.POP1999 + "  
                            </td>  
                        </tr>");  
                        });  
                        s.push("</tbody></table>");  
                        dojo.byId("tbl").innerHTML = s.join("");  
                    }
                    `}</SyntaxHighlighter>
                    <h5 id="2522">2.5.2.2 在地图上查找要素</h5>
                    <p>FindTask构造函数需要一个zhxwMap Server地图服务的URL。使用ESRI sample server上的ESRI_StatesCitiesRivers_USA服务。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    findTask = new esri.tasks.FindTask("http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer");  
                    `}</SyntaxHighlighter>
                    <p>FindParameters指出哪些图层和字段将被搜索。如果多个图层包含相同的字段名称（例如"NAME"）两个字段都要被搜索。注意returnGeometry被设置为true以便结果能被显示在地图上。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    findParams = new esri.tasks.FindParameters();  
                    findParams.returnGeometry = true;  
                    findParams.layerIds = [0,1,2];  
                    findParams.searchFields = ["CITY_NAME","NAME","SYSTEM","STATE_ABBR","STATE_NAME"];  
                    `}</SyntaxHighlighter>
                    <p>FindParameters的searchText参数是任务将要搜索什么。这个文本来自输入框并且当单击Find按钮时被发送到execute函数。这行代码执行任务:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    findTask.execute(findParams,showResults); 
                    `}</SyntaxHighlighter>
                    <p>当任务执行结束，showResults函数循环访问FindResult里的graphics数组并增加每个图形到地图。函数也增加每个结果的属性到表格。</p>
                    <h5 id="2523">2.5.2.3 在DataGrid里显示查找任务结果</h5>
                    <p>DataGrid允许用户排序和调整列大小，并且提供很多可以处理的事件。可以使用这些事件绑定表格到地图。在本例中，当用户单击一行，地图放大到关联的税区(tax lot)。</p>
                    <p>FindTask返回FindResult的数组。 每个结果包含能被放到数组里并和Dojo ItemFileReadStore关联的属性。ItemFileReadStore是DataGrid的数据存储的有效类型，适合于zhxwMap JavaScript API显示任务结果。可以在dojo.data和dojox.data里找到其它感兴趣的各种数据存储类型。</p>
                    <p>放大地图到单击的行的逻辑在onRowClickHandler函数里。从单击的行取出税区ID(tax lot ID)，然后按税区ID(tax lot ID)搜索存在的几何体。当税区ID(tax lot ID)的几何体被找到，地图范围被设置为这个几何体的范围。</p>
                    <h4 id="253">2.5.3 查询任务</h4>
                    <h5 id="2531">2.5.3.1 查询没有地图的数据</h5>
                    <p>用户可以从没有显示服务的地图服务查询数据。大部分地图服务包含属性信息的数据集，数据集能够被查询并显示在一个简单的列或表格里。</p>
                    <p>代码创建了一个QueryTask和一个用做任务输入的Query。注意QueryTask的构造函数需要地图服务里的图层的URL(http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer/5)。 在URL结尾的数字5是地图目录里的州图层的索引号。要找到你自己的地图服务的URL及它们的图层索引，使用Services Directory。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    var queryTask, query;  
                    function init() {  
                        //build query  
                        queryTask = new esri.tasks.QueryTask("http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer/5");  
                        //dojo.connect(queryTask, "onComplete", showResults);  
                        //build query filter  
                        query = new esri.tasks.Query();  
                        query.returnGeometry = false;  
                        query.outFields = ["SQMI","STATE_NAME","STATE_FIPS","SUB_REGION","STATE_ABBR","POP2000","POP2007","POP00_SQMI","POP07_SQMI","HOUSEHOLDS","MALES","FEMALES","WHITE","BLACK","AMERI_ES","ASIAN","OTHER","HISPANIC","AGE_UNDER5","AGE_5_17","AGE_18_21","AGE_22_29","AGE_30_39","AGE_40_49","AGE_50_64","AGE_65_UP"];  
                    }  
                    `}</SyntaxHighlighter>
                    <p>注意query.returnGeometry被设置为false因为结果不需要被显示在地图上。outFields确定州图层中的那些字段被查到。</p>
                    <p>当单击“Get Details”按钮，execute函数被调用。查询任务在被查询的图层的主要显示字段里搜索query.text，在这个图层里面是STATE_NAME字段。这就是为什么query.text被设置在文本框里输入的州名。如果想要输入任意SQL where子句，可以使用query.where代替query.text。</p>
                    <p>查询指定的所有属性能作为参数传递给QueryTask，当查询完成时连同函数一起被调用。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function execute(stateName) {  
                        query.text = stateName;  
                        //execute query  
                        queryTask.execute(query,showResults);  
                    }
                    `}</SyntaxHighlighter>
                    <p>查询结果作为FeatureSet被传递给showResults函数。函数循环访问所有结果的属性并使用html为查询结果构建一个列表。然后这个HTML被写到"info" div中。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function showResults(results) {  
                        var s = "";  
                        for (var i=0, il=results.features.length; i<il; i++) {  
                        var featureAttributes = results.features[i].attributes;  
                        for (att in featureAttributes) {  
                        s = s + "<b>" + att + ":</b>  
                        " + featureAttributes[att] + "  
                        <br/>  
                        ";  
                        }  
                    }
                    `}</SyntaxHighlighter>
                    <h5 id="2532">2.5.3.2 用图表显示查询结果</h5>
                    <p>使用查询任务结果用去Google Chart API构建一个图表。</p>
                    <p>函数init创建了一个Map，一个QueryTask和一个Query。注意QueryTask的构造函数需要地图服务里一个图层的URL (http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer/3)。 URL末尾的数字3是地图目录里郡县图层的索引号。 要找到你自己的地图服务的URL及它们的图层索引，使用Services Directory</p>
                    <p>Query对象包含查询的条件，例如查询什么几何体，是否返回几何体以便它能够显示在地图上，以及哪些字段被查询。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    query = new esri.tasks.Query();  
                    query.spatialRelationship = esri.tasks.Query.SPATIAL_REL_INTERSECTS;  
                    query.outFields = ["NAME", "WHITE", "BLACK", "ASIAN", "HISPANIC", "OTHER"];  
                    query.returnGeometry = true;  
                    query.outSpatialReference = {"wkid":102100};
                    `}</SyntaxHighlighter>
                    <p>单击地图时，下面的时间监听器会察觉：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    dojo.connect(map, "onClick", doQuery);
                    `}</SyntaxHighlighter>
                    <p>上面监听器中的doQuery函数捕获地图单击的位置并将单击位置设置为query.Geometry。 这个点相交的郡县将被查询。下列代码行运行查询任务：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    queryTask.execute(query);
                    `}</SyntaxHighlighter>
                    <p>当查询任务完成，另一个事件激发，调用getChart函数:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    dojo.connect(queryTask, "onComplete", getChart);  
                    `}</SyntaxHighlighter>
                    <p>getChart读取最初以FeatureSet返回的查询结果。</p>
                    <h5 id="2533">2.5.3.3 以地理处理结果为条件查询地图</h5>
                    <p>当第一次单击地图，单击的坐标被发送到一个Geoprocessor任务。该任务访问服务器上的通过zhxwMap Server 地理处理服务提供的可用的GIS模型。本例中模型计算驱动时间，它有2个输入参数"Input_Location"和 "Drive_Times"。输入位置是一个要素，设置从单击点开始驱动，驱动时间被硬编码为2分钟。如果对zhxwMap JavaScript API的地图处理服务不熟悉，地图处理使用和站点中的地理处理示例能帮助你更好的理解这个示例。</p>
                    <p>地图处理的输出作为QueryTask的输入几何体被提交。这个任务被配置仅仅在一个图层上操作：ESRI_Census_USA服务的Census Block Points图层。任务对驱车事件多边形内的区点执行一个空间查询。这个重要的代码行指定地理处理服务输出几何体做为查询几何体：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    query.geometry = feature.geometry;   
                    `}</SyntaxHighlighter>
                    <p>地图处理和查询任务的结果几何体都会用FeatureSets里的图形返回。注意在增加返回图形要素集到地图以前，必须为这些图形指定符号。如果想要用户在单击图形时见到信息窗口，还必须格式化一个InfoTemplate。</p>
                    <p>注意本示例通过事件驱动。鼠标单击，地理处理完成和查询任务完成是应用里引发新事情所有事件。见Working with events学习更多关于如何在应用中使用事件。</p>
                    <p>本例应用一个代理页面以防止提交到查询任务的驱动时间多边形几何体超过一些Web浏览器的get请求的2000个字符的限制。见Using the proxy page学习更多代理页面信息。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    esriConfig.defaults.io.proxyUrl = "/arcgisserver/apis/javascript/proxy/proxy.ashx";  
                    esriConfig.defaults.io.alwaysUseProxy = false; 
                    `}</SyntaxHighlighter>
                    <h3 id="26">2.6 网络分析</h3>
                    <h4 id="261">2.6.1 RouteTask概述</h4>
                    <p>zhxwMap JavaScript API的RouteTask可以查找两个或多个地址间的路线并且可选择地获得驾车指示。RouteTask使用zhxwMap Server网络分析服务来计算路线。网络分析服务可以解答简单的路线问题和有多个端点，障碍物和时间窗口的复杂路线问题。</p>
                    <h4 id="262">2.6.2 使用RouteTask</h4>
                    <p>当使用RouteTask时，需要下列步骤: 1) 创建任务, 2) 配置参数,3) 解答路线。也必须指定对结果的操作和处理任务返回的错误信息。</p>
                    <h5 id="2621">2.6.2.1 创建路线任务</h5>
                    <p>当创建一个RouteTask的实例，要提供网路分析图层资源的URL。这个通过zhxwMap Server 网络分析服务的REST端点提供。如果不能确定如何构造URL，可以使用服务目录。在下面的代码段中，MyMapDoc是网络分析服务，MyRoute是网络图层资源。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    routeTask = new esri.tasks.RouteTask("http://myServer/ArcGIS/rest/services/MyMapDoc/NAServer/MyRoute");  
                    `}</SyntaxHighlighter>
                    <h5 id="2622">2.6.2.2 配置路线参数</h5>
                    <p>为了从路线任务获得想要的结果，需要指定路线问题的详细信息，例如端点地址，障碍物地址，阻抗属性和其他。使用esri.tasks.RouteParameters指定。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    routeParams = new esri.tasks.RouteParameters();    
                    `}</SyntaxHighlighter>
                    <p>下面示例展示了如何使用RouteParameters为一个路线定义两个端点:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    //define 2 stops by coordinate pairs  
                    var stop1 =  new esri.Graphic(new esri.geometry.Point(-117.21,34.065), stopSymbol);  
                    var stop2 =  new esri.Graphic(new esri.geometry.Point(-117.185,34.05), stopSymbol);  
                    routeParams.stops = new esri.tasks.FeatureSet();  
                    routeParams.stops.features.push(stop1);  
                    routeParams.stops.features.push(stop2);  
                    `}</SyntaxHighlighter>
                    <p>路线参数也指定了是否返回驾车指示，端点是否按它们被增加的顺序访问，如果一个端点是不可到达的任务是否失败。关于每个参数的完整的描述，见API参考里的RouteParameters。</p>
                    <p>在上例中，端点使用x，y几何体指定。也能够选择地指定端点和障碍物作network locations。使用网络地点能导致解决最快路线。关于4个网络位置字段：SourceID, SourceOID, PosAlong, 和 SideOfEdge，见zhxwMap Desktop里的Network analysis classes。可以通过添加路线名称到每个端点一次解答多个路线。下面的代码建立两个路线：Route A和Route B。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    var stop1 = new esri.Graphic(new esri.geometry.Point(-117.21,  34.065), stopSymbol);  
                    stop1.attributes = new Object();  
                    stop1.attributes.Name = "A";  
                    stop1.attributes.RouteName = "Route A";  
                    var stop2 = new esri.Graphic(new esri.geometry.Point(-117.185, 34.05 ), stopSymbol);  
                    stop2.attributes = new Object();  
                    stop2.attributes.Name = "B";  
                    stop2.attributes.RouteName = "Route A";  
                    var stop3 = new esri.Graphic(new esri.geometry.Point(-117.19,  34.062), stopSymbol);  
                    stop3.attributes = new Object();  
                    stop3.attributes.Name = "C";  
                    stop3.attributes.RouteName = "Route B";  
                    var stop4 = new esri.Graphic(new esri.geometry.Point(-117.18,  34.05), stopSymbol);  
                    stop4.attributes = new Object();  
                    stop4.attributes.Name = "D";  
                    stop4.attributes.RouteName = "Route B";  
                    `}</SyntaxHighlighter>
                    <p>通过这个方式解答多个路线，将获得一个RouteResult对象数组。可以循环这个数组并添加路线到地图。</p>
                    <h5 id="2623">2.6.2.3 解答路线</h5>
                    <p>一旦创建路线任务并配置了它们的参数，可以调用RouteTask.solve()为路线求解。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    routeTask.solve(routeParams);
                    `}</SyntaxHighlighter>
                    <p>除了调用solve方法外，还需要处理RouteTask上的onSolveComplete和onError事件。这些函数定义了应用如何操作结果，结果是一个路线还是一个错误信息。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    dojo.connect(routeTask, "onSolveComplete", showRoute);  
                    dojo.connect(routeTask, "onError", errorHandler);  
                    . . .  
                    function showRoute(routeResults, barriers) {. . .}  
                    function errorHandler(err) {. . .}  
                    `}</SyntaxHighlighter>
                    <p>有时一个有效值和警告信息一同返回。为了访问这些信息可以在onSolveComplete处理器函数添加第三个参数，如下:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function showRoute(routeResults, barriers, gpMessages) {  
                        for (var i = 0; i < gpMessages.length; i++)  
                        alert(gpMessages[i].type + ": " + gpMessages[i].description);  
                        map.graphics.add(routeResults[0].route.setSymbol(routeSymbol));  
                    }
                    `}</SyntaxHighlighter>
                    <p>onError处理函数能按同样的方式打印信息:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function errorHandler(err) {  
                        alert("An error occured\n" + err.message +  
                        "\n" + err.details.join("\n"));  
                    }
                    `}</SyntaxHighlighter>
                    <h4 id="263">2.6.3 查找路线</h4>
                    <p>路线任务最简单的用途：在两点间查找路线。单击地图增加路线的点。当增加了两个点，路线将被计算。增加后续的点扩展路线。</p>
                    <p>当使用路线任务工作时，需要建立一些RouteParameters，比如端点，然后准备好查找路线时调用RouteTask.solve()方法。地图的onClick事件增加一个端点。当监测到两个端点，solve方法被调用。可以通过对onSolveComplete事件监听在地图上画出结果。通过showRoute函数完成绘制。</p>
                    <p>如果路线不能被算出，将需要处理错误。如果路线任务触发一个onError事件，errorHandler函数被调用。该函数显示错误文本信息并且删除发生错误的点，从而允许用户继续增加端点。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    //Adds a graphic when the user clicks the map. If 2 or more points exist, route is solved.  
                    function addStop(evt) {  
                        var stop = map.graphics.add(new esri.Graphic(evt.mapPoint, stopSymbol));  
                        routeParams.stops.features.push(stop);  
                        if (routeParams.stops.features.length >= 2) {  
                            routeTask.solve(routeParams);  
                            lastStop = routeParams.stops.features.splice(0, 1)[0];  
                        }  
                    }  
                    //Adds the solved route to the map as a graphic  
                    function showRoute(solveResult) {  
                        map.graphics.add(solveResult.routeResults[0].route.setSymbol(routeSymbol));  
                    }  
                    //Displays any error returned by the Route Task  
                    function errorHandler(err) {  
                        alert("An error occured\n" + err.message + "\n" + err.details.join("\n"));  
                        routeParams.stops.features.splice(0, 0, lastStop);  
                        map.graphics.remove(routeParams.stops.features.splice(1, 1)[0]);  
                    }  
                    `}</SyntaxHighlighter>
                    <h4 id="264">2.6.4 获得驾车指示</h4>
                    <p>当为路线任务建立了RouteParameters，可以指定返回路线里面是否包含指示信息:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    routeParams.returnDirections = true;
                    `}</SyntaxHighlighter>
                    <p>路线指示通过RouteResults.directions返回，返回的是一个DirectionsFeatureSet。DirectionsFeatureSet里面每个要素相当于一段路线。本例循环访问路段并创建一个顺序的超链接的列表。每个超链接能在地图上画出一个路段的几何体(用粗的红线)并放大到路段的范围。</p>
                    <p>代码如下：</p>
                    <p>设置其起始点：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    //Parse and geocode "from" address  
                        var fromArr = dojo.byId("fromTxf").value.split(","),  
                        fromAddress = { Address:fromArr[0], City:fromArr[1], State:fromArr[2], Zip:fromArr[3] };  
                        locator.addressToLocations(fromAddress, ["Loc_name"], function(addressCandidates) { configureRoute(addressCandidates, "from"); });  
                        //Parse and geocode "to" address  
                        var toArr = dojo.byId("toTxf").value.split(","),  
                        toAddress = { Address:toArr[0], City:toArr[1], State:toArr[2], Zip:toArr[3] };  
                        locator.addressToLocations(toAddress, ["Loc_name"], function(addressCandidates) { configureRoute(addressCandidates, "to"); });  
                    }  
                    `}</SyntaxHighlighter>
                    <p>注意完整的路线(细的蓝线)不是被画为一系列的路段，而是通过DirectionsFeatureSet.mergedGeometry获得：</p>
                    <p>结果也包含驾驶时间和距离。整个路线和每个路段都返回了驾驶时间和距离：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    //Display the total time and distance of the route  
                    dojo.byId("summary").innerHTML = "  
                    <br/>  
                    Total distance: "  
                    + formatDistance(directions.totalLength, "miles")  
                    + "  
                    <br/>  
                    Total time: " + formatTime(directions.totalTime);  
                    `}</SyntaxHighlighter>
                    <p>zhxwMap JavaScript API也允许通过DirectionsFeatureSet.mergedGeometry一次绘出整个路线。下列代码展示了如何绘出整个路线:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function showRoute(routeResults, barriers, gpMessages) {  
                        var directions = routeResults[0].directions;  
                        map.graphics.add(  
                        new esri.Graphic(directions.mergedGeometry, routeSymbol));  
                    }
                    `}</SyntaxHighlighter>
                    <h4 id="265">2.6.5 查找有障碍物和多个端点的路线</h4>
                    <p>如同障碍物一样，端点被保存在一个路线参数的数组里(RouteParameters.stops)。端点通过addStop函数增加。每个端点都和一个特定的路线关联。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    //Begins listening for click events to add stops  
                    function addStops() {  
                        removeEventHandlers();  
                        mapOnClick_addStops_connect = dojo.connect(map, "onClick", addStop);  
                    }  
                    //Clears all stops  
                    function clearStops() {  
                        removeEventHandlers();  
                        for (var i=routeParams.stops.features.length-1; i>=0; i--) {  
                            map.graphics.remove(routeParams.stops.features.splice(i, 1)[0]);  
                        }  
                    }  
                    //Adds a stop. The stop is associated with the route currently displayed in the dropdown  
                    function addStop(evt) {  
                        routeParams.stops.features.push(  
                            map.graphics.add(  
                                new esri.Graphic(  
                                    evt.mapPoint,  
                                    stopSymbol,  
                                    { RouteName:dojo.byId("routeName").value }  
                                )  
                            )  
                        );  
                    }  
                    `}</SyntaxHighlighter>
                    <p>障碍物表示网络上一个路线不能通过的点。路线参数能包含一个解答路线时RouteTask将避开的障碍物数组(RouteParameters.barriers)。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    //Begins listening for click events to add barriers  
                    function addBarriers() {  
                        removeEventHandlers();  
                        mapOnClick_addBarriers_connect = dojo.connect(map, "onClick", addBarrier);  
                    }  
                    //Clears all barriers  
                    function clearBarriers() {  
                        removeEventHandlers();  
                        for (var i=routeParams.barriers.features.length-1; i>=0; i--) {  
                            map.graphics.remove(routeParams.barriers.features.splice(i, 1)[0]);  
                        }  
                    }  
                    //Adds a barrier  
                    function addBarrier(evt) {  
                        routeParams.barriers.features.push(  
                            map.graphics.add(  
                                new esri.Graphic(  
                                    evt.mapPoint,  
                                    barrierSymbol  
                                )  
                            )  
                        );  
                    } 
                    `}</SyntaxHighlighter>
                    <p>当调用<code>RouteTask.solve()</code>时，解答器挑选端点并计算每个路线。路线通过RouteResult对象数组被返回。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                   //Stops listening for click events to add barriers and stops  
                   function removeEventHandlers() {  
                        dojo.disconnect(mapOnClick_addStops_connect);  
                        dojo.disconnect(mapOnClick_addBarriers_connect);  
                   }  
                   //Solves the routes. Any errors will trigger the errorHandler function.  
                   function solveRoute() {  
                        removeEventHandlers();  
                        routeTask.solve(routeParams);  
                   }  
                   //Clears all routes  
                   function clearRoutes() {  
                        for (var i=routes.length-1; i>=0; i--) {  
                        map.graphics.remove(routes.splice(i, 1)[0]);  
                   }  
                   routes = [];  
                   }  
                   //Draws the resulting routes on the map  
                   function showRoute(solveResult) {  
                        clearRoutes();  
                        dojo.forEach(solveResult.routeResults, function(routeResult, i) {  
                            routes.push(  
                                map.graphics.add(  
                                    routeResult.route.setSymbol(routeSymbols[routeResult.routeName])  
                                )  
                            );  
                        });  
                   } 
                    `}</SyntaxHighlighter>
                    <h4 id="266">2.6.6 服务区分析</h4>
                    <p>服务区是指在指定范围内所有可访问的地区。使用 zhxwMap 网络分析，可以查找网络中任何位置周围的服务区。网络服务区是指包含所有通行街道（即在指定的阻抗范围内的街道）的区域。例如，网络上某一点的 5分钟服务区包含从该点出发在五分钟内可以到达的所有街道。由“网络分析”创建的服务区还有助于评估可达性。同心服务区显示可达性随阻抗的变化方式。服务区创建好以后，就可以用来标识邻域或区域内的人数、土地量，或其他任何数量。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                        params = new esri.tasks.ServiceAreaParameters();  
                        params.defaultBreaks= [2];  
                        params.outSpatialReference = map.spatialReference;  
                        params.returnFacilities = false;  
                        serviceAreaTask = new esri.tasks.ServiceAreaTask("http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Network/USA/NAServer/Service Area");  
                    }  
                    function mapClickHandler(evt){  
                    map.graphics.clear(); //clear existing graphics  
                    //define the symbology used to display the results and input point  
                    var pointSymbol = new esri.symbol.SimpleMarkerSymbol(  
                        esri.symbol.SimpleMarkerSymbol.STYLE_DIAMOND,  
                        20,  
                        new esri.symbol.SimpleLineSymbol(  
                            esri.symbol.SimpleLineSymbol.STYLE_SOLID,  
                            new dojo.Color([88,116,152]), 2  
                        ),  
                        new dojo.Color([88,116,152,0.45])  
                    );  
                    var inPoint = new esri.geometry.Point(evt.mapPoint.x,evt.mapPoint.y,map.spatialReference);  
                    var location = new esri.Graphic(inPoint,pointSymbol);  
                    map.graphics.add(location);  
                    var features = [];  
                    features.push(location);  
                    var facilities = new esri.tasks.FeatureSet();  
                    facilities.features = features;  
                    params.facilities = facilities;  
                    //solve  
                    serviceAreaTask.solve(params,function(solveResult){  
                        var result = solveResult;  
                        var serviceAreaSymbol = new esri.symbol.SimpleFillSymbol(  
                            esri.symbol.SimpleFillSymbol.STYLE_SOLID,  
                            new esri.symbol.SimpleLineSymbol(  
                                esri.symbol.SimpleLineSymbol.STYLE_SOLID,  
                                new dojo.Color([232,104,80]), 2  
                            ),  
                            new dojo.Color([232,104,80,0.25])  
                        );  
                        var polygonSymbol = new esri.symbol.SimpleFillSymbol(
                            esri.symbol.SimpleFillSymbol.STYLE_SOLID, new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,  
                            new dojo.Color([232,104,80]), 2),new dojo.Color([232,104,80,0.25]));  
                            dojo.forEach(solveResult.serviceAreaPolygons, function(serviceArea){  
                                serviceArea.setSymbol(polygonSymbol);  
                                map.graphics.add(serviceArea);  
                            }
                        );  
                    `}</SyntaxHighlighter>
                    <h4 id="267">2.6.7 查找最近设施</h4>
                    <p>最近设施分析计算事件点和设施点间的行程成本，然后确定最近的行程。计算最近设施点时，您可以指定查找数量和行进方向（朝向设施点或远离设施点）。最近设施分析操作将显示事件点与设施点间的最佳路径，报告它们的行程成本并返回驾车指示。在计算最近设施的时候，也可以考虑路障、限速，交通管制等阻抗因素。</p>
                    <p>参数设置：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    params = new esri.tasks.ClosestFacilityParameters();  
                    params.defaultCutoff= 3.0;  
                    params.returnIncidents=false;  
                    params.returnRoutes=true;  
                    params.returnDirections=true;
                    `}</SyntaxHighlighter>
                    <p>用户通过在地图上某位置单击创建新的事件，一旦事件发生则建立最近设施请求并发送到服务器，解决路线后，结果返回到客户端，并在地图上的图形层显示。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function mapClickHandler(evt){  
                        clearGraphics();  
                        dojo.byId("directionsDiv").innerHTML= "";  
                        var inPoint = new esri.geometry.Point(evt.mapPoint.x,evt.mapPoint.y,map.spatialReference);  
                            var location = new esri.Graphic(inPoint);  
                            incidentsGraphicsLayer.add(location);  
                            var features = [];  
                            features.push(location);  
                            var incidents = new esri.tasks.FeatureSet();  
                            incidents.features = features;  
                            params.incidents = incidents;  
                            map.graphics.enableMouseEvents();  
                            dojo.connect(routeGraphicLayer,"onMouseOver", function(evt){  
                                //clear existing directions and highlight symbol  
                                map.graphics.clear();  
                                dojo.byId("directionsDiv").innerHTML= "Hover over the route to view directions";  
                                var highlightSymbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([0,255,255],0.25), 4.5);  
                                var highlightGraphic = new esri.Graphic(evt.graphic.geometry,highlightSymbol);  
                                map.graphics.add(highlightGraphic);  
                                dojo.byId("directionsDiv").innerHTML = esri.substitute(evt.graphic.attributes,"'$'{*}");  
                            });  
                            //solve  
                            closestFacilityTask.solve(params,function(solveResult){  
                            var directions = solveResult.directions;  
                            dojo.forEach(solveResult.routes, function(route, index){  
                            //build an array of route info  
                            var attr = dojo.map(solveResult.directions[index].features,function(feature){  
                                return feature.attributes.text;  
                        });  
                        var infoTemplate = new esri.InfoTemplate("Attributes", "'$'{*}");  
                        route.setInfoTemplate(infoTemplate);  
                        route.setAttributes(attr);  
                        routeGraphicLayer.add(route);  
                        dojo.byId("directionsDiv").innerHTML = "Hover over the route to view directions";  
                    });
                    `}</SyntaxHighlighter>
                    <h3 id="27">2.7 地理处理服务</h3>
                    <h4 id="271">2.7.1 地理处理概述</h4>
                    <p>地理处理允许自动化并将GIS分析操作连在一起。这通过创建ArcGIS自定义工具和模型实现。一个模型通常由ESRI的ArcToolbox里的一系列工具组成，用一种合理的方法链接在一起去完成特定的事务。例如，一个模型可以按一组输入的地点高度插入一个地面标高，然后按这个地面创建等高线。可以运行这个模型来替代手工操作ArcToolbox两个不同的同居。如果需要在100个数据集上做这个操作，能够自动化模型运行100次。地理处理服务是强大而且方便的。</p>
                    <p>zhxwMap JavaScript API的Geoprocessor类提供访问zhxwMap Server上运行的地理处理模型的能力。这些模型通过地理处理服务提供。这些服务是有用的因为地理处理能够集中计算并请求GIS软件运行工具和模型。发送地理处理工作到一个集中的服务器而不是在每个机器上安装软件并使用每个机器的处理能力执行分析，这种方式通常更有效率。</p>
                    <p>要使用地理处理器，必须知道下面三个事物:</p>
                    <ul>
                        <li>要使用的地理处理模型（任务）的URL。</li>
                        <li>任务的必需的输入和输出参数。</li>
                        <li>任务是异步的还是同步的。</li>
                    </ul>
                    <h4 id="272">2.7.2 服务区域任务</h4>
                    <p>发送输入值到zhxwMap Server上的GIS模型并获得结果反馈给web应用，这个模型通过zhxwMap Server 地理处理服务提供。查看CalculateDriveTimePolygons服务的服务目录获得模型中可以使用的输入输出。可以创建一个地理处理任务从zhxwMap Server访问自己的模型:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    gp = new esri.tasks.Geoprocessor("http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Network/ESRI_DriveTime_US/GPServer/CreateDriveTimePolygons");  
                    `}</SyntaxHighlighter>
                    <p>使用服务目录查出自己的地理处理服务的URL。当使用一个地理处理任务时，通常配置一组输入参数，然后执行任务。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    var params = { "Input_Location":featureSet, "Drive_Times":driveTimes };  
                    gp.execute(params, getDriveTimePolys);
                    `}</SyntaxHighlighter>
                    <p>代码如下：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function computeServiceArea(evt) {  
                        map.graphics.clear();  
                        var pointSymbol = new esri.symbol.SimpleMarkerSymbol();  
                        pointSymbol.setOutline = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255,0,0]), 1);  
                        pointSymbol.setSize(5);  
                        pointSymbol.setColor(new dojo.Color([0,255,0,0.25]));  
                        var graphic = new esri.Graphic(evt.mapPoint,pointSymbol);  
                        map.graphics.add(graphic);  
                        var features= [];  
                        features.push(graphic);  
                        var featureSet = new esri.tasks.FeatureSet();  
                        featureSet.features = features;  
                        var params = { "Input_Location":featureSet, "Drive_Times":driveTimes };  
                        gp.execute(params, getDriveTimePolys);  
                    }
                    `}</SyntaxHighlighter>
                    <p>能够选择地包含一个回调函数，当任务执行完成时运行。可利用回调函数getDriveTimePolys配置结果多边形的符号并将它们加到地图:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    function getDriveTimePolys(results, messages) {  
                        var features = results[0].value.features;  
                        for (var f=0, fl=features.length; f<fl; f++) {  
                            var feature = features[f];  
                            if(f == 0) {  
                                var polySymbolRed = new esri.symbol.SimpleFillSymbol();  
                                polySymbolRed.setOutline(new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([0,0,0,0.5]), 1));  
                                polySymbolRed.setColor(new dojo.Color([255,0,0,0.7]));  
                                feature.setSymbol(polySymbolRed);  
                            }  
                            else if(f == 1) {  
                                var polySymbolGreen = new esri.symbol.SimpleFillSymbol();  
                                polySymbolGreen.setOutline(new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([0,0,0,0.5]), 1));  
                                polySymbolGreen.setColor(new dojo.Color([0,255,0,0.7]));  
                                feature.setSymbol(polySymbolGreen);  
                            }  
                            else if(f == 2) {  
                                var polySymbolBlue = new esri.symbol.SimpleFillSymbol();  
                                polySymbolBlue.setOutline(new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([0,0,0,0.5]), 1));  
                                polySymbolBlue.setColor(new dojo.Color([0,0,255,0.7]));  
                                feature.setSymbol(polySymbolBlue);  
                            }  
                            map.graphics.add(feature);  
                        }  
                    }  
                    dojo.addOnLoad(init);  
                    `}</SyntaxHighlighter>
                    <h4 id="273">2.7.3 计算一个可视域</h4>
                    <p>可视域计算是通过zhxwMap Server 地理处理服务实现。该服务提供访问服务器上的一个包含可视域(viewshed)工具的模型（任务）。 Geoprocessor构造函数需要任务的URL(http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Elevation/ESRI_Elevation_World/GPServer/Viewshed)。 可以使用Services Directory查出自己的地理处理服务的URL并使用。</p>
                    <p>当地图被单击，一个事件监听器调用函数computeViewShed，在单击的位置增加一个SimpleMarkerSymbol。该函数还为任务建立了两个参数。第一个参数是单击的点，第二个参数是维持可视域合理的大小的缓存距离。在本例中可视域被计算到单击点距离为5英里。</p>
                    <p>下面的第一行为地理处理任务按正确的格式建立参数，第二行代码执行任务。因为任务是同步的，所以使用execute方法，这意味着用户做其他事情以前要等待结果出现。对于大的工作，能够调用submitJob异步地运行工作，过一会再获得结果。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    var params = { "Input_Observation_Point":featureSet, "Viewshed_Distance":vsDistance };  
                    gp.execute(params, drawViewshed);
                    `}</SyntaxHighlighter>
                    <p>上面的执行方法体的回调函数是drawViewshed，当结果可用时drawViewshed函数被调用。这个函数定义了结果的符号并将它们增加到地图上。下面的循环是必需的以防结果返回的是多个部分的要素。这在可视域图层是很有可能发生的因为不平地形会留下分开的可视区域块。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    for (var f=0, fl=features.length; f<fl; f++) {  
                        var feature = features[f];  
                        feature.setSymbol(polySymbol);  
                        map.graphics.add(feature);  
                    }
                    `}</SyntaxHighlighter>
                    <h4 id="274">2.7.4 瓶中信</h4>
                    <p>如果在海洋中丢下一个瓶子，本例使用颗粒追踪模型显示指定的天数后瓶子在的地方。首先，输入一个追踪瓶子的天数。然后单击按钮并在海洋里的任意地方画一个点来开始模型。几秒以后将看到一条线出现描述瓶子将去的地方。</p>
                    <p>关于这个模型的更多信息，见本例中引用的zhxwMap Server地理处理任务的服务目录页: </p>
                    <p>http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_Currents_World/GPServer/MessageInABottle。这个页面列出了模型的参数并包含一个如何创建模型的帮助URL。</p>
                    <p>本例使用绘画工具栏帮助画点。工具栏不是一个可以加到页面的用户界面组件。而是一个帮助类，能够画某一几何体类型。更多信息见示例”使用一个绘画工具栏”。</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                        var resizeTimer;  
                        dojo.connect(map, 'onLoad', function(theMap) {  
                            //resize the map when the browser resizes  
                            dojo.connect(dijit.byId('map'), 'resize', map,map.resize);  
                        });  
                    }  
                    function executeParticleTrack(geometry) {  
                        map.graphics.clear();  
                        var simplePictureMarkerSymbol = new esri.symbol.PictureMarkerSymbol('../images/sailboat.png', 26, 26);  
                        var graphic = new esri.Graphic(geometry,simplePictureMarkerSymbol);  
                        map.graphics.add(graphic);  
                        toolbar.deactivate();  
                        var features= [];  
                        features.push(graphic);  
                        var featureSet = new esri.tasks.FeatureSet();  
                        featureSet.features = features;  
                        //set the input parameters. View the task in the services explorer to see the input variables required to run the model.  
                        //see http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_Currents_World/GPServer/MessageInABottle  
                        var params = { "Input_Point":featureSet, "Days": dojo.byId("days").value };  
                        gp.execute(params, displayTrack);  
                    }  
                    function displayTrack(results, messages) {  
                        var simpleLineSymbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255,255,0]), 3);  
                        var features = results[0].value.features;  
                        dojo.forEach(features,function(feature){  
                            feature.setSymbol(simpleLineSymbol);  
                            map.graphics.add(feature);  
                        });  
                    }  
                    `}</SyntaxHighlighter>
                    <h3 id="28">2.8 工具栏</h3>
                    <h4 id="281">2.8.1 使用一个绘画工具栏</h4>
                    <p>使用draw toolbar可以绘出地图上的多种几何体。zhxwMap JavaScript API包含这个工具栏。</p>
                    <p>工具栏不是可以在页面上自动显示的用户界面组件。而是一个帮助类，能够用来让人们在地图上绘出几何体。工具栏保存了绘制每个几何体类型的相关代码。可以激活想要绘制的几何体类型。每个HTML按钮激活不同的几何体类型。下面是Point按钮的代码：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    <button onclick="tb.activate(esri.toolbars.Draw.POINT);" ID="Button1">Point</button>  
                    `}</SyntaxHighlighter>
                    <p>当用户单击这个按钮，工具栏激活点几何体。也可以通过一个下拉列表，一组radio按钮或一些其它控件选择几何体类型。</p>
                    <p>工具栏的"onDrawEnd"事件确保了当完成绘制一个要素时可以在地图上见到该要素:</p>
                    <p><code>dojo.connect(tb, "onDrawEnd", addGraphic);</code></p>
                    <p>addGraphic函数设置几何类型的合适的符号。本例中，符号通过一个下拉列表提供。列表中的每一项都是一行符号的定义，像这样:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    <option value="new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_SQUARE, 10,  
                        new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,  
                        new dojo.Color([255,0,0]), 1),  
                        new dojo.Color([0,255,0,0.25]))"
                    >Square</option>
                    `}</SyntaxHighlighter>
                    <h4 id="282">2.8.2 使用一个导航工具栏</h4>
                    <p>使用zhxwMap JavaScript API包含的导航工具栏可以实现：创建平移，缩放和其他导航按钮。</p>
                    <p>工具栏不是一个可以加到地图上的用户界面组件。而是一个帮助类，保存了绘制缩放框，捕获鼠标单击坐标等的行为。因而本例包含很少的代码。可以使用的按钮请查看Dijits。每个按钮激活工具栏不同的方法。可以使用文本或图标作为按钮；在每个按钮上调用正确的方法是很重要的。下面代码是缩小按钮的</p>
                    <p>代码:</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    <div dojoType="dijit.form.Button" id="zoomout" iconClass="zoomoutIcon"  
                    onClick="navToolbar.activate(esri.toolbars.Navigation.ZOOM_OUT);">Zoom Out</div>  
                    `}</SyntaxHighlighter>
                    <p>如果要用上一个范围和下一个范围的按钮，仍需要去确定一些逻辑。这些逻辑被包含在函数extentHistoryChangedHandler里：</p>
                    <SyntaxHighlighter language='javascript' style={docco}>{`
                    dijit.byId("zoomprev").disabled = navToolbar.isFirstExtent();  
                    dijit.byId("zoomnext").disabled = navToolbar.isLastExtent();
                    `}</SyntaxHighlighter>
                    <p>这些代码行确保如果没有上一个范围可用(isFirstExtent = true)，Previous按钮是不可用的。如果没有下一个范围(isLastExtent = true)，Next按钮是不可用的。</p>
                    <h2 id="learningresources">3 学习资源</h2>
                    <p>在线帮助：<a href="http://help.arcgis.com/en/webapi/javascript/arcgis/index.html">http://help.arcgis.com/en/webapi/javascript/arcgis/index.html</a></p>
                    <p>API参考：<a href="http://help.arcgis.com/en/webapi/javascript/arcgis/help/jsapi_start.htm">http://help.arcgis.com/en/webapi/javascript/arcgis/help/jsapi_start.htm</a></p>
                    <p>示例代码：<a href="http://help.arcgis.com/en/webapi/javascript/arcgis/help/jssamples_start.htm">http://help.arcgis.com/en/webapi/javascript/arcgis/help/jssamples_start.htm</a></p>
                    <p>更多代码：<a href="http://help.arcgis.com/en/webapi/javascript/arcgis/help/gallery.html">http://help.arcgis.com/en/webapi/javascript/arcgis/help/gallery.html</a></p>
                    <p>Esri中国社区论坛：<a href="http://bbs.esrichina-bj.cn/ESRI/">http://bbs.esrichina-bj.cn/ESRI/</a></p>
                </div>
            </div>
        );
    }
}
export default Guidelines;
