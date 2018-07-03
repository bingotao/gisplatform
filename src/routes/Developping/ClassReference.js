import { Component } from 'react';
import st from './ClassReference.less';


class ClassReference extends Component {
    getAnchor = (dom) => {
        this.props.getAnchor(dom);
    }
    render() {
        return (
            <div className={st.classreference}>
                <div className={st.catalog}>
                    <h1>类参考</h1>
                    <ul style={{ padding: 10}}>
                        <li>
                            <a href="#/developping?anchor=coreclasses" onClick={e => this.getAnchor('#coreclasses')}>1 核心类</a>
                            <ul>
                                <li>
                                    <a href="#/developping?anchor=map" onClick={e => this.getAnchor('#map')}>1.1 Map</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#/developping?anchor=foundationclass" onClick={e => this.getAnchor('#foundationclass')}>2 基础类</a>
                            <ul>
                                <li>
                                    <a href="#/developping?anchor=extent" onClick={e => this.getAnchor('#extent')}>2.1 Extent</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=point" onClick={e => this.getAnchor('#point')}>2.2 Point</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=polygon" onClick={e => this.getAnchor('#polygon')}>2.3 Polygon</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=polyline" onClick={e => this.getAnchor('#polyline')}>2.4 Polyline</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#/developping?anchor=symbol" onClick={e => this.getAnchor('#symbol')}>3 符号</a>
                            <ul>
                                <li>
                                    <a href="#/developping?anchor=linesymbol" onClick={e => this.getAnchor('#linesymbol')}>3.1 Linesymbol</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=markersymbol" onClick={e => this.getAnchor('#markersymbol')}>3.2 Markersymbol</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=fillsymbol" onClick={e => this.getAnchor('#fillsymbol')}>3.3 Fillsymbol</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#/developping?anchor=controlclass" onClick={e => this.getAnchor('#controlclass')}>4 控件类</a>
                            <ul>
                                <li>
                                    <a href="#/developping?anchor=infowindow" onClick={e => this.getAnchor('#infowindow')}>4.1 InfoWindow</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=navigation" onClick={e => this.getAnchor('#navigation')}>4.2 Navigation</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#/developping?anchor=maplayers" onClick={e => this.getAnchor('#maplayers')}>5 地图图层类</a>
                            <ul>
                                <li>
                                    <a href="#/developping?anchor=layer" onClick={e => this.getAnchor('#layer')}>5.1 Layer</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=layerinfo" onClick={e => this.getAnchor('#layerinfo')}>5.2 LayerInfo</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=ArcGISDynamicMapServiceLayer" onClick={e => this.getAnchor('#ArcGISDynamicMapServiceLayer')}>5.3 ArcGISDynamicMapServiceLayer</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=ArcGISImageServiceLayer" onClick={e => this.getAnchor('#ArcGISImageServiceLayer')}>5.4 ArcGISImageServiceLayer</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=ArcGISTiledMapServiceLayer" onClick={e => this.getAnchor('#ArcGISTiledMapServiceLayer')}>5.5 ArcGISTiledMapServiceLayer</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=DynamicMapServiceLayer" onClick={e => this.getAnchor('#DynamicMapServiceLayer')}>5.6 DynamicMapServiceLayer</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#/developping?anchor=utilityclass" onClick={e => this.getAnchor('#utilityclass ')}>6 工具类</a>
                            <ul>
                                <li>
                                    <a href="#/developping?anchor=draw" onClick={e => this.getAnchor('#draw')}>6.1 Draw</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#/developping?anchor=serviceclass" onClick={e => this.getAnchor('#serviceclass ')}>7 服务类</a>
                            <ul>
                                <li>
                                    <a href="#/developping?anchor=GeometryService" onClick={e => this.getAnchor('#GeometryService')}>7.1 GeometryService</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=Identify" onClick={e => this.getAnchor('#Identify')}>7.2 Identify</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=Find" onClick={e => this.getAnchor('#Find')}>7.3 Find</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=Locator" onClick={e => this.getAnchor('#Locator')}>7.4 Locator</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=Query" onClick={e => this.getAnchor('#Query')}>7.5 Query</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=Querytask" onClick={e => this.getAnchor('#Querytask')}>7.6 Querytask</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=Route" onClick={e => this.getAnchor('#Route')}>7.7 Route</a>
                                </li>
                                <li>
                                    <a href="#/developping?anchor=GP" onClick={e => this.getAnchor('#GP')}>7.8 GP</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={st.content}>
                    <h2 id="coreclasses">1 核心类</h2>
                    <h3 id="map">1.1 Map</h3>
                    <h4>1.1.1 描述</h4>
                    <p>esri.Map类创建一个容器和为增加图层，图形，信息窗口和其它导航控制所必需的DOM结构。地图通常使用DIV增加到页面。地图的宽度和高度被初始化为DIV容器的宽度和高度。第一个图层增加到地图后，Map.onLoad事件被触发。此时地图是全功能的。Map.onLoad处理函数用于增加内容和该白地图行为。</p>
                    <h4>1.1.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>构造函数</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.Map(divId,options?)</td>
                                <td>在给定的HTML容器中创建地图，HTML容器通常是DIV。地图大小和容器大小一致。地图的构造函数也能包含选项参数。这些选项参数能包容任意顺序。 </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>1.1.3 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>extent</td>
                                <td>Extent</td>
                                <td>地图的当前范围。该属性是只读的。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>graphics</td>
                                <td>GraphicsLayer</td>
                                <td>从GraphicsLayer中增加删除图形。</td>
                            </tr>
                            <tr>
                                <td>graphicsLayerIds</td>
                                <td>String[]</td>
                                <td>地图里当前GraphicsLayers的数组。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>height</td>
                                <td>Number</td>
                                <td>地图的当前高度，高度单位是屏幕像数</td>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td>String</td>
                                <td>地图位于页面的HTML    DIV或其他元素的引用。该属性在地图构造函数里设置。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>infoWindow</td>
                                <td>InfoWindow</td>
                                <td>在地图上显示信息窗口</td>
                            </tr>
                            <tr>
                                <td>isClickRecenter</td>
                                <td>Boolean</td>
                                <td>当属性为true，按shift+click键重定义地图中心点。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>isDoubleClickZoom</td>
                                <td>Boolean</td>
                                <td>当属性为true，双击放大地图可用，允许用户使用鼠标双击放大和重定义地图中心点。</td>
                            </tr>
                            <tr>
                                <td>isKeyboardNavigation</td>
                                <td>Boolean</td>
                                <td>当属性为true，键盘导航可用。该属性允许用户用箭头键移动地图，用+和-键缩放地图。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>isPan</td>
                                <td>Boolean</td>
                                <td>当属性为true，可以使用鼠标移动地图。</td>
                            </tr>
                            <tr>
                                <td>isPanArrows</td>
                                <td>Boolean</td>
                                <td>当属性为true，在地图边缘显示移动箭头。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>isRubberBandZoom</td>
                                <td>Boolean</td>
                                <td>当属性为true，伸缩线可用。允许用户使用鼠标画一个边界框缩放区域。</td>
                            </tr>
                            <tr>
                                <td>isScrollWheelZoom</td>
                                <td>Boolean</td>
                                <td>当属性为true，可用鼠标滚动缩放地图</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>isShiftDoubleClickZoom</td>
                                <td>Boolean</td>
                                <td>当属性为true，可用shift键+双击鼠标放大地图。这允许用户使用shift + 鼠标双击去放大和重定向地图中心。</td>
                            </tr>
                            <tr>
                                <td>isZoomSlider</td>
                                <td>Boolean</td>
                                <td>当属性为true，地图上显示缩放滑动条。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>layerIds</td>
                                <td>String[]</td>
                                <td>加到地图里的当前TiledMapServiceLayers和DynamicMapServiceLayers的数组</td>
                            </tr>
                            <tr>
                                <td>loaded</td>
                                <td>Boolean</td>
                                <td>第一个图层被加载后，属性值被设置为true</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>position</td>
                                <td>Point</td>
                                <td>该屏幕坐标的点几何体代表地图容器的左上角。这个坐标也担当了地图和GraphicsLayer事件返回的所有屏幕坐标的原点。</td>
                            </tr>
                            <tr>
                                <td>spatialReference</td>
                                <td>SpatialReference</td>
                                <td>地图的空间参考。支持的空间参考列表，见投影坐标系统和地理坐标系统。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>width</td>
                                <td>Number</td>
                                <td>地图当前宽度，宽度单位是屏幕像数。</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4>1.1.4 方法表</h4>
                    <p>地图功能：</p>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>addLayer(layer,index?)</td>
                                <td>Layer</td>
                                <td>增加ESRI图层到地图。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>getInfoWindowAnchor(screenCoords)</td>
                                <td>String</td>
                                <td>设置调用InfoWindow.show方法时信息窗口的定位点。</td>
                            </tr>
                            <tr>
                                <td>getLayer(id)</td>
                                <td>Layer</td>
                                <td>返回地图一个单独的图层。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>getLevel()</td>
                                <td>Number</td>
                                <td>获得当前地图的级别ID。仅仅ArcGISTiledMapService有效。</td>
                            </tr>
                            <tr>
                                <td>removeAllLayers()</td>
                                <td>none</td>
                                <td>从地图上删除所有图层。当图层被删除是，已定义的地图范围，空间参考，切片模式不会修改。当下一个图层被加到地图，图层以相同的范围和空间参考显示。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>removeLayer(layer)</td>
                                <td>none</td>
                                <td>删除地图的指定图层。</td>
                            </tr>
                            <tr>
                                <td>reorderLayer(layer,    index)</td>
                                <td>none</td>
                                <td>修改地图里图层顺序。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>reposition()</td>
                                <td>none</td>
                                <td>在页面上重新放置地图DIV。当地图已经被重新放置后需要使用这个方法。</td>
                            </tr>
                            <tr>
                                <td>resize()</td>
                                <td>none</td>
                                <td>调整地图DIV。当重新调整map DIV大小后这个方法要被使用。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setExtent(extent,    fit?)</td>
                                <td>none</td>
                                <td>设置地图范围。范围必需参照和地图一样的空间参考</td>
                            </tr>
                            <tr>
                                <td>setLevel(level)</td>
                                <td>none</td>
                                <td>设置地图到指定级别ID。基于当前地图中心点缩放到新的级别。仅仅对ArcGISTiledMapService图层有效。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setMapCursor(cursor)</td>
                                <td>none</td>
                                <td>设置地图默认指针。除了拖拽地图进行移动或使用SHIFT+拖拽放大地图时外，鼠标位于地图上时该指针总被显示。如果没有设置，地图使用系统默认指针，通常使用箭头。</td>
                            </tr>
                            <tr>
                                <td>toMap(screenPoint)</td>
                                <td>Point</td>
                                <td>转换单个屏幕点坐标或屏幕点坐标数组为地图坐标。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>toScreen(mapPoint)</td>
                                <td>Point</td>
                                <td>转换单个地图点坐标或地图点坐标的数组为屏幕坐标。</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>地图导航：</p>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>centerAndZoom(mapPoint,levelOrFactor)</td>
                                <td>none</td>
                                <td>地图居中并缩放。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>centerAt(mapPoint)</td>
                                <td>none</td>
                                <td>以指定地图坐标作为中心点坐标重定位地图。</td>
                            </tr>
                            <tr>
                                <td>disableClickRecenter()</td>
                                <td>none</td>
                                <td>不允许单击地图来重定位地图中心点。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>disableDoubleClickZoom()</td>
                                <td>none</td>
                                <td>不允许双击地图来放大地图一个级别并重定位地图中心点</td>
                            </tr>
                            <tr>
                                <td>disableMapNavigation()</td>
                                <td>none</td>
                                <td>除了滑动条和移动箭头，不允许其它所有地图导航。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>disablePan()</td>
                                <td>none</td>
                                <td>不允许用鼠标移动地图。</td>
                            </tr>
                            <tr>
                                <td>disableRubberBandZoom()</td>
                                <td>none</td>
                                <td>不允许使用边界框放大或缩小地图。</td>
                            </tr>
                            <tr>
                                <td>disableScrollWheelZoom()</td>
                                <td>none</td>
                                <td>不允许使用鼠标滚动滑轮放大或缩小地图。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>disableShiftDoubleClickZoom()</td>
                                <td>none</td>
                                <td>不允许shift键+鼠标双击放大地图并重定位地图中心点。</td>
                            </tr>
                            <tr>
                                <td>disbleKeyboardNavigation()</td>
                                <td>none</td>
                                <td>不允许使用键盘移动和缩放地图。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>enableClickRecenter()</td>
                                <td>none</td>
                                <td>允许用户单击地图来重定位中心点。</td>
                            </tr>
                            <tr>
                                <td>enableDoubleClickZoom()</td>
                                <td>none</td>
                                <td>允许用户双击地图放大一个级别并重定位地图中心点。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>enableKeyboardNavigation()</td>
                                <td>none</td>
                                <td>允许用户使用键盘移动和缩放地图。</td>
                            </tr>
                            <tr>
                                <td>enableMapNavigation()</td>
                                <td>none</td>
                                <td>允许所有地图导航。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>enablePan()</td>
                                <td>none</td>
                                <td>允许使用鼠标移动地图。</td>
                            </tr>
                            <tr>
                                <td>enableRubberBandZoom()</td>
                                <td>none</td>
                                <td>允许使用划定边界框放大或缩小地图。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>enableScrollWheelZoom()</td>
                                <td>none</td>
                                <td>允许用户用鼠标滑轮放大或缩小地图。</td>
                            </tr>
                            <tr>
                                <td>enableShiftDoubleClickZoom()</td>
                                <td>none</td>
                                <td>允许用使用shift+双击鼠标去放大地图一个级别并重定位地图中心点。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>hidePanArrows()</td>
                                <td>none</td>
                                <td>隐藏地图移动指针。</td>
                            </tr>
                            <tr>
                                <td>hideZoomSlider()</td>
                                <td>none</td>
                                <td>隐藏地图缩放滚动条。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>panDown()</td>
                                <td>none</td>
                                <td>向南移动地图。</td>
                            </tr>
                            <tr>
                                <td>panLeft()</td>
                                <td>none</td>
                                <td>向西移动地图。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>panLowerLeft()</td>
                                <td>none</td>
                                <td>向西南移动地图。</td>
                            </tr>
                            <tr>
                                <td>panLowerRight()</td>
                                <td>none</td>
                                <td>向东南移动地图。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>panRight()</td>
                                <td>none</td>
                                <td>向东移动地图。</td>
                            </tr>
                            <tr>
                                <td>panUp()</td>
                                <td>none</td>
                                <td>向北移动地图。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>panUpperLeft()</td>
                                <td>none</td>
                                <td>向西北移动地图。</td>
                            </tr>
                            <tr>
                                <td>panUpperRight()</td>
                                <td>none</td>
                                <td>向东北移动地图。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>showPanArrows()</td>
                                <td>none</td>
                                <td>显示地图移动指针。</td>
                            </tr>
                            <tr>
                                <td>showZoomSlider()</td>
                                <td>none</td>
                                <td>显示缩放滚动条。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>1.1 5 事件</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>事件 </th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onClick(event) </td>
                                <td>当用户使用鼠标单击地图且鼠标在HTML页面的地图范围内时触发。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onDblClick(event) </td>
                                <td>当用户在地图上双击鼠标且鼠标在html页面的地图范围内时触发该事件</td>
                            </tr>
                            <tr>
                                <td>onExtentChange(extent,delta,    levelChange, lod) </td>
                                <td>当地图范围已经修改触发该事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onKeyDown(keyEvent) </td>
                                <td>当键盘某键被按下时触发该事件</td>
                            </tr>
                            <tr>
                                <td>onKeyUp(keyEvent) </td>
                                <td>当键盘某键被释放时触发该事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onLayerAdd(layer) </td>
                                <td>图层被增加到地图时触发该事件。</td>
                            </tr>
                            <tr>
                                <td>onLayerRemove(layer) </td>
                                <td>图层已经被删除后触发事件</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onLayerReorder(layer,    index) </td>
                                <td>当地图图顺序已经被改变时触发事件。</td>
                            </tr>
                            <tr>
                                <td>onLayersRemoved() </td>
                                <td>所有图层被删除后触发事件</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onLayersReordered(layerIds) </td>
                                <td>所有图层被重新排序是触发事件。</td>
                            </tr>
                            <tr>
                                <td>onLoad(map) </td>
                                <td>第一个或基础图层被成功增加到地图时触发事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onMouseDown(event) </td>
                                <td>当鼠标按钮被按下且鼠标指针在HTML页面的地图范围里时触发事件。</td>
                            </tr>
                            <tr>
                                <td>onMouseDrag(event) </td>
                                <td>鼠标被拖转直到鼠标按钮被释放时触发事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onMouseDragEnd(event) </td>
                                <td>当鼠标按钮被释放并且用户停止拖拽鼠标时触发事件。</td>
                            </tr>
                            <tr>
                                <td>onMouseDragStart(event) </td>
                                <td>当鼠标按钮被按下并用户开始拖拽鼠标时触发事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onMouseMove(event) </td>
                                <td>鼠标指针在地图范围上移动时触发事件。通常该事件用于用户移动鼠标指针时显示当前地图x,y坐标。</td>
                            </tr>
                            <tr>
                                <td>onMouseOut(event) </td>
                                <td>当鼠标移出HTML页的地图范围时触发事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onMouseOver(event) </td>
                                <td>鼠标移入HTML页面的地图范围时触发事件。</td>
                            </tr>
                            <tr>
                                <td>onMouseUp(event) </td>
                                <td>当地图按钮被释放并且鼠标指针在HTML页面的地图范围内时触发事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onMouseWheel(event) </td>
                                <td>鼠标滚轮滚动时触发事件。</td>
                            </tr>
                            <tr>
                                <td>onPan(extent,    delta) </td>
                                <td>地图移动过程中触发事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onPanEnd(extent,    endPoint) </td>
                                <td>移动完成时触发事件。</td>
                            </tr>
                            <tr>
                                <td>onPanStart(extent,    startPoint) </td>
                                <td>用户开始移动时触发事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onReposition(x,    y) </td>
                                <td>地图DIV被重新定位时触发事件。</td>
                            </tr>
                            <tr>
                                <td>onResize(extent,    height, width) </td>
                                <td>包含地图的DIV已经被调整大小时触发事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onUnload(map) </td>
                                <td>刷新页面时触发事件。 </td>
                            </tr>
                            <tr>
                                <td>onZoom(extent,    zoomFactor, anchor) </td>
                                <td>缩放过程中触发事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onZoomEnd(extent,    zoomFactor, anchor, level) </td>
                                <td>缩放完成时触发事件。</td>
                            </tr>
                            <tr>
                                <td>onZoomStart(extent,    zoomFactor, anchor, level) </td>
                                <td>用户开始缩放时触发事件。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="foundationclass">2 基础类</h2>
                    <h3 id="extent">2.1 Extent</h3>
                    <h4>2.1.1  描述</h4>
                    <p>边界框的最大和最小的x坐标和y坐标。</p>
                    <h4>2.1.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>构造函数</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.geometry.Extent(xmin,    ymin, xmax, ymax, spatialReference)</td>
                                <td>创建一个范围对象。坐标表示边界框左下角和右上角的坐标。空间参考也是必需的。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>esri.geometry.Extent(json)</td>
                                <td>使用JSON对象创建一个范围对象。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>2.1.3 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>xmax</td>
                                <td>Number</td>
                                <td>范围框右上角x坐标值</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>xmin</td>
                                <td>Number</td>
                                <td>范围框左下角x坐标。</td>
                            </tr>
                            <tr>
                                <td>ymax</td>
                                <td>Number</td>
                                <td>范围框右上角y坐标。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>ymin</td>
                                <td>Number</td>
                                <td>范围框左下角y坐标。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>2.1.4 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>centerAt(point)</td>
                                <td>Extent</td>
                                <td>一个以参数点为中心的同样宽度和高度的范围被返回。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>contains(point)</td>
                                <td>Boolean</td>
                                <td>当返回值为true，参数点包含在当前范围内。</td>
                            </tr>
                            <tr>
                                <td>expand(factor)</td>
                                <td>Extent</td>
                                <td>通过给定因素扩张范围。例如，1.5表示将增大50%。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>getCenter()</td>
                                <td>Point</td>
                                <td>返回范围的地图单位的中心点。</td>
                            </tr>
                            <tr>
                                <td>getHeight()</td>
                                <td>Number</td>
                                <td>最大y坐标和最小y坐标的距离。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>getWidth()</td>
                                <td>Number</td>
                                <td>最大x坐标和最小x坐标的距离。</td>
                            </tr>
                            <tr>
                                <td>intersects(extent)</td>
                                <td>Extent</td>
                                <td>当返回值是true,参数中的范围与当前范围相交。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>offset(dx,    dy)</td>
                                <td>Extent</td>
                                <td>偏移当前范围。单位是地图单位。</td>
                            </tr>
                            <tr>
                                <td>union(extent)</td>
                                <td>Extent</td>
                                <td>扩张当前范围来包含参数的范围。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>update(xmin,    xmin, xmax, ymax, spatialReference)</td>
                                <td>Extent</td>
                                <td>通过制定参数修改当前范围。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="point">2.2 Point</h3>
                    <h4>2.2.1 描述</h4>
                    <p>通过x坐标和y坐标定义的位置。可以是地图单位或屏幕单位。</p>
                    <h4>2.2.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>构造函数 </th>
                                <th>描述 </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.geometry.Point(x,    y, spatialReference)</td>
                                <td>使用x，y和空间参考创建点对象。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>esri.geometry.Point([x,y],    spatialReference)</td>
                                <td>使用包含x,y坐标值和空间参考的数组创建点对象。</td>
                            </tr>
                            <tr>
                                <td>esri.geometry.Point(json)</td>
                                <td>使用JSON对象创建点坐标。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>2.2.3 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性 </th>
                                <th class={st.secondCol}>类型 </th>
                                <th>描述 </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>x</td>
                                <td>Number</td>
                                <td>点的地图单位的x坐标。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>y</td>
                                <td>Number</td>
                                <td>点的地图单位的y坐标。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>2.2.4 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法 </th>
                                <th class={st.secondCol}>返回值 </th>
                                <th>描述 </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>offset(dx, dy)</td>
                                <td>Point</td>
                                <td>偏移点到x和y的方向。单位是地图单位。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setX(x)</td>
                                <td>Point</td>
                                <td>设置点的x坐标。</td>
                            </tr>
                            <tr>
                                <td>setY(y)</td>
                                <td>Point</td>
                                <td>设置点的y坐标。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>update(x, y)</td>
                                <td>Point</td>
                                <td>更新点。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="polygon">2.3 Polygon</h3>
                    <h4>2.3.1 描述</h4>
                    <p>环形的数组，每个环形都是一个点数组。环形的第一个点和最后一个点必须是一样的。</p>
                    <h4>2.3.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>构造函数</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.geometry.Polygon(spatialReference)</td>
                                <td>创建一个新的Polygon对象。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>esri.geometry.Polygon(json)</td>
                                <td>创建一个新的Polygon对象。使用JSON对象。 </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>2.3.3 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>构造函数</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>rings</td>
                                <td>Number[][][]</td>
                                <td>环形数组。每个环形是由三个或多个点组成。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>2.3.4 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>addRing(points or ring or pointJson)</td>
                                <td>Polygon</td>
                                <td>增加环形到Polygon。环形能使下面的形式：数字数组，点数组，JSON对象。增加时环形的索引会递增一个。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>contains(point)</td>
                                <td>Boolean</td>
                                <td>客户端检查指定点是否在polygon里面。polygon线上的点被认为是在里面的。</td>
                            </tr>
                            <tr>
                                <td>getExtent()</td>
                                <td>Extent</td>
                                <td>返回polygon的范围。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>getPoint(ringIndex,    pointIndex)</td>
                                <td>Point</td>
                                <td>返回通过环形和路径中的点指定的点。 </td>
                            </tr>
                            <tr>
                                <td>insertPoint(ringIndex,    pointIndex, point)</td>
                                <td>Polygon</td>
                                <td>插入新的点到polygon。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>removeRing(ringIndex)</td>
                                <td>Point[]</td>
                                <td>从Polygon里面删除一个环形。索引指定了要删除的环形。</td>
                            </tr>
                            <tr>
                                <td>setPoint(ringIndex,    pointIndex, point)</td>
                                <td>Polygon</td>
                                <td>更新polygon里的一个点。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="polyline">2.4 Polyline</h3>
                    <h4>2.4.1 描述</h4>
                    <p>路径数组，每个路径是一个点的数组。</p>
                    <h4>2.4.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>构造函数</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.geometry.Polyline(spatialReference)</td>
                                <td>创建一个新的Polyline对象。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>esri.geometry.Polyline(json)</td>
                                <td>创建一个新的Polyline对象。使用JSON对象。 </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>2.4.3 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>构造函数</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>paths</td>
                                <td>Number[][][]</td>
                                <td>路径数组。每个路径由两个或多个点的数组构成。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>2.4.4 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>addPath(points or ring or pointJson)</td>
                                <td>Polyline</td>
                                <td>增加路径到Polyline。路径能够是下列类型之一：数字数组，点的数组，JSON对象。当增加时路径索引递增一。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>getExtent()</td>
                                <td>Extent</td>
                                <td>返回Polyline的范围。</td>
                            </tr>
                            <tr>
                                <td>getPoint(pathIndex, pointIndex)</td>
                                <td>Point</td>
                                <td>返回通过路径和路径里的点指定的点。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>insertPoint(pathIndex, pointIndex, point)</td>
                                <td>Polyline</td>
                                <td>插入一个新的点到polyline。 </td>
                            </tr>
                            <tr>
                                <td>removePath(pathIndex)</td>
                                <td>Point[]</td>
                                <td>从Polyline删除一个路径。索引指定的路径将删除。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setPoint(pathIndex, pointIndex, point)</td>
                                <td>Polyline</td>
                                <td>在polyline中更新点。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="symbol">3 符号</h2>
                    <h3 id="linesymbol">3.1 Linesymbol</h3>
                    <h4>3.1.1 描述</h4>
                    <p>线符号用于绘画图形图层上的线型的要素。</p>
                    <h4>3.1.2 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>width</td>
                                <td>Number</td>
                                <td>线符号的宽度（单位：像素）。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="markersymbol">3.2 Markersymbol</h3>
                    <h4>3.2.1 描述</h4>
                    <p>标记符号用于绘出图形图层上的points或multipoints。</p>
                    <h4>3.2.2 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    属性
        </th>
                                <th class={st.secondCol}>
                                    类型
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>angle</td>
                                <td>Number</td>
                                <td>图片的角度。0是指向右侧并且值是顺时针。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>size</td>
                                <td>Number</td>
                                <td>标记的大小（单位：像素）。</td>
                            </tr>
                            <tr>
                                <td>xoffset</td>
                                <td>Number</td>
                                <td>x轴上的偏移量（单位：像素）。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>yoffset</td>
                                <td>Number</td>
                                <td>y轴上的偏移量（单位：像素）。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>3.2.3 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    方法
        </th>
                                <th class={st.secondCol}>
                                    返回值
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>setAngle(angle)</td>
                                <td>MarkerSymbol</td>
                                <td>设置标记的角度。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setOffset(x, y)</td>
                                <td>MarkerSymbol</td>
                                <td>设置标记的x和y的偏移量（单位：屏幕单位）。</td>
                            </tr>
                            <tr>
                                <td>setSize(size)</td>
                                <td>MarkerSymbol</td>
                                <td>设置标记的大小（单位：像素）。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="fillsymbol">3.3 Fillsymbol</h3>
                    <h4>3.3.1 方法表</h4>
                    <p>填充符号用于在图形图层上绘制多边形要素。填充物可以指定为实心的，阴影的或图片。此外，符号还能有一个可选的轮廓线，轮廓线通过线符号定义。</p>
                    <h4>3.3.2 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    属性
        </th>
                                <th class={st.secondCol}>
                                    类型
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>outline</td>
                                <td>SimpleLineSymbol</td>
                                <td>多边形的轮廓线。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>3.3.3 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    方法
        </th>
                                <th class={st.secondCol}>
                                    返回值
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>setOutline(outline)</td>
                                <td>FillSymbol</td>
                                <td>设置多边形符号的轮廓线。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="controlclass">4 空间类</h2>
                    <h3 id="infowindow">4.1 InfoWindow</h3>
                    <h4>4.1.1 描述</h4>
                    <p>InfoWindow是一个HTML弹出消息。信息窗口通常包含Graphic的属性。在图形上的默认行为是单击图形后显示信息窗口。为了单击显示信息窗口， InfoTemplate是必须的。另外，信息窗口能够被用于在地图上显示自定义内容。</p>
                    <h4>4.1.2 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    属性
        </th>
                                <th class={st.secondCol}>
                                    类型
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>anchor</td>
                                <td>String</td>
                                <td>关于图形的信息窗口的位置。参数值见常量表。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>coords</td>
                                <td>Point</td>
                                <td>信息窗口屏幕坐标的参照点。</td>
                            </tr>
                            <tr>
                                <td>fixedAnchor</td>
                                <td>String</td>
                                <td>信息窗口总是在指定位置显示。参数值见常量表。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>isShowing</td>
                                <td>Boolean</td>
                                <td>确定当前信息窗口是否被显示在地图上。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>4.1.3 常量</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    常量
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ANCHOR_LOWERLEFT</td>
                                <td>信息窗口位于点的左下方。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>ANCHOR_LOWERRIGHT</td>
                                <td>信息窗口位于点的右下方。 </td>
                            </tr>
                            <tr>
                                <td>ANCHOR_UPPERLEFT</td>
                                <td>信息窗口位于点的左上方。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>ANCHOR_UPPERRIGHT</td>
                                <td>信息窗口位于点的右上方。 </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>4.1.4 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    方法
        </th>
                                <th class={st.secondCol}>
                                    返回值
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>hide()</td>
                                <td>none</td>
                                <td>隐藏信息窗口。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>move(point)</td>
                                <td>none</td>
                                <td>移动信息窗口到指定屏幕点。</td>
                            </tr>
                            <tr>
                                <td>resize(width, height)</td>
                                <td>none</td>
                                <td>修改信息窗口大小为指定的像数高和宽。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setContent(stringOrDOMNode)</td>
                                <td>InfoWindow</td>
                                <td>设置信息窗口中的内容。</td>
                            </tr>
                            <tr>
                                <td>setFixedAnchor(anchor)</td>
                                <td>none</td>
                                <td>设置信息窗口固定位置。有效值在常量表内列出。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setTitle(title)</td>
                                <td>InfoWindow</td>
                                <td>设置信息窗口标题。</td>
                            </tr>
                            <tr>
                                <td>show(point, anchor)</td>
                                <td>none</td>
                                <td>在指定的屏幕点和固定点方向显示信息窗口。有效值在常量表中列出。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>4.1.5 事件</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    事件
        </th>
                                <th class={st.secondCol}>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onHide()</td>
                                <td>当信息窗口被隐藏时触发。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onShow()</td>
                                <td>当信息窗口被可见时触发。 </td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="navigation">4.2 Navigation</h3>
                    <h4>4.2.1 描述</h4>
                    <p>支持如平移和缩放等基本导航的工具栏。</p>
                    <h4>4.2.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.toolbars.Navigation(map)</td>
                                <td>创建新的Navigation对象。地图是一个必需的参数。 </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>4.2.3 常量</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    常量
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PAN</td>
                                <td>地图被平移。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>ZOOM_IN</td>
                                <td>地图放大。 </td>
                            </tr>
                            <tr>
                                <td>ZOOM_OUT</td>
                                <td>地图缩小。 </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>4.2.4 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    方法
        </th>
                                <th>
                                    返回值
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>activate(navType)</td>
                                <td>none</td>
                                <td>激活地图导航工具栏。激活的工具栏覆盖默认地图导航。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>deactivate()</td>
                                <td>none</td>
                                <td>禁用工具栏并重新激活地图导航。</td>
                            </tr>
                            <tr>
                                <td>isFirstExtent()</td>
                                <td>Boolean</td>
                                <td>当是"true"，地图在第一个范围。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>isLastExtent()</td>
                                <td>Boolean</td>
                                <td>当是true，地图在最后一个范围。</td>
                            </tr>
                            <tr>
                                <td>zoomToFullExtent()</td>
                                <td>none</td>
                                <td>缩放到基本图层的全部范围。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>zoomToNextExtent()</td>
                                <td>none</td>
                                <td>缩放到范围历史中的下一个范围。</td>
                            </tr>
                            <tr>
                                <td>zoomToPrevExtent()</td>
                                <td>none</td>
                                <td>缩放到范围历史中的上一个范围。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>4.2.5 事件</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    事件
        </th>
                                <th class={st.secondCol}>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onExtentHistoryChange()</td>
                                <td>当范围历史改变时触发。 </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="maplayers">5 地图图层类</h2>
                    <h3 id="layer">5.1 Layer</h3>
                    <h4>5.1.1 描述</h4>
                    <p>所有可以加到地图里的图层的基础类。</p>
                    <h4>5.1.2 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>String</td>
                                <td>图层ID。如果没有指定，esri.Map指定值。 默认情况下，图层ID是"layer"+数字。ID仅仅能在图层构造函数中被用户定义。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>loaded</td>
                                <td>Boolean</td>
                                <td>当图层被加载时，值变为true，图层属性可以被访问。onLoad事件也被触发。</td>
                            </tr>
                            <tr>
                                <td>opacity</td>
                                <td>Number</td>
                                <td>图层的不透明或透明度。属性值范围从0.0到1.0，当值是0.0时，100%透明，当值为1.0时，不透明。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>url</td>
                                <td>String</td>
                                <td>指向zhxwMap   Server REST地图服务资源的URL。 使用Services    Directory获得URL。 </td>
                            </tr>
                            <tr>
                                <td>visible</td>
                                <td>Boolean</td>
                                <td>图层的可见性。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>5.1.3 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    方法
        </th>
                                <th class={st.secondCol}>
                                    返回值
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>hide()</td>
                                <td>none</td>
                                <td>设置图层的可见性。设置为false，图层没有删除，但是从视窗隐藏。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setOpacity(opacity)</td>
                                <td>none</td>
                                <td>设置图层不透明度。 值范围从0.0到1.0，0.0是100%透明，1.0是不透明。</td>
                            </tr>
                            <tr>
                                <td>show()</td>
                                <td>none</td>
                                <td>设置图层的可见性为"true"。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>5.1.4 事件</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>事件</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onError(error) </td>
                                <td>当接收图层出现问题时触发该事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onLoad(layer) </td>
                                <td>图层的属性成功填充后触发事件。图层加到地图以前该事件必须是成功的。</td>
                            </tr>
                            <tr>
                                <td>onOpacityChange(opacity) </td>
                                <td>当图层不透明度被修改时触发，返回不透明度的值。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onUpdate() </td>
                                <td>图层完成加载或自身修改的时候触发事件。 对于ArcGISTiledMapServiceLayer，已经接收并显示所有请求的切片时触发事件。 对于ArcGISDynamicMapServiceLayer 或    ArcGISImageServiceLayer，地图图像已经接收并显示时触发事件。对于GraphicsLayer，当移动或缩放后所有图形已经被变形时触发事件。</td>
                            </tr>
                            <tr>
                                <td>onVisibilityChange(visbility) </td>
                                <td>当图层可见性已经被修改时触发，返回新的可见性。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="layerInfo">5.2 LayerInfo</h3>
                    <h4>5.2.1 描述</h4>
                    <p>包含关于地图服务里每个图层的信息。</p>
                    <h4>5.2.2 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>defaultVisibility</td>
                                <td>Boolean</td>
                                <td>地图服务中默认图层的可见性。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>id</td>
                                <td>Number</td>
                                <td>zhxwMap   Server为图层分配的图层ID。 顶层图层是0，每个图层ID是连续地递增。 如果图层从原地图文档中被增加或删除，ID值会跟着移动。</td>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>String</td>
                                <td>在地图服务里定义的图层名称。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>parentLayerId</td>
                                <td>Number</td>
                                <td>如果图层是一组图层的一部分，图层会包含这组图层的父ID。 否则，该属性值是-1。 如果图层从原地图文档中被增加或删除，ID值会跟着移动。</td>
                            </tr>
                            <tr>
                                <td>subLayerIds</td>
                                <td>Number[]</td>
                                <td>如果图层是父图层，图层将有包含在数组里的一到多个子图层。否则，该属性值是null。 如果图层从原地图文档中被增加或删除，ID值会跟着移动。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="ArcGISDynamicMapServiceLayer">5.3 ArcGISDynamicMapServiceLayer</h3>
                    <h4>5.3.1 描述</h4>
                    <p>可以使用zhxwMapServer REST API提供的动态地图服务资源。动态地图服务联机生成图像。</p>
                    <h4>5.3.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.layers.ArcGISDynamicMapServiceLayer(url, options?)</td>
                                <td>创建新的ArcGISDynamicMapServiceLayer对象。URL是必需的参数。这个图层接受一些可选参数。这些可选参数可以包容任意顺序。 </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>5.3.3 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>copyright</td>
                                <td>String</td>
                                <td>地图服务定义的版权字符串。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>description</td>
                                <td>String</td>
                                <td>地图服务定义的地图描述。</td>
                            </tr>
                            <tr>
                                <td>disableClientCaching</td>
                                <td>Boolean</td>
                                <td>当值为true时，图片总是从服务器上获取，忽略浏览器的缓存。这将被用于地图服务的数据时常修改的情况。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>dpi</td>
                                <td>Number</td>
                                <td>动态地图服务层的输出dpi。</td>
                            </tr>
                            <tr>
                                <td>imageFormat</td>
                                <td>String</td>
                                <td>输出图片类型。自zhxwMap   Server9.3.1起，支持的图片格式列表被包含在服务目录里地图服务描述的“支持的图片格式类型”下。另外，自zhxwMapServer9.3.1起，优化的地图服务能支持真PNG32图片。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>imageTransparency</td>
                                <td>Boolean</td>
                                <td valign="top"></td>
                            </tr>
                            <tr>
                                <td>layerDefinitions</td>
                                <td>String[]</td>
                                <td valign="top"></td>
                            </tr>
                            <tr class={st.odd}>
                                <td>layerInfos</td>
                                <td>LayerInfo[]</td>
                                <td valign="top"></td>
                            </tr>
                            <tr>
                                <td>units</td>
                                <td>String</td>
                                <td valign="top"></td>
                            </tr>
                            <tr class={st.odd}>
                                <td>useMapImage</td>
                                <td>Boolean</td>
                                <td>useMapImage设置。</td>
                            </tr>
                            <tr>
                                <td>visibleLayers</td>
                                <td>Number[]</td>
                                <td>获得导出地图的可见图层。 </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>5.3.4 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>exportMapImage(imageParameters?,    callback?)</td>
                                <td>none</td>
                                <td>使用ImageParameters指定的值导出地图。结束时，返回MapImage。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setDefaultLayerDefinitions()</td>
                                <td>none</td>
                                <td>重设服务上所有定义的图层的定义。</td>
                            </tr>
                            <tr>
                                <td>setDefaultVisibleLayers()</td>
                                <td>none</td>
                                <td>清除setVisibleLayers定义的可见图层，重置可见图层为地图服务的默认图层。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setDisableClientCaching(disable)</td>
                                <td>none</td>
                                <td>设置图片是否总是从服务上获得并忽略浏览器缓存。当地图服务支持数据经常改变时被用到。 </td>
                            </tr>
                            <tr>
                                <td>setDPI(dpi)</td>
                                <td>none</td>
                                <td>设置导出地图的dip。默认值为96。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setImageFormat(imageFormat)</td>
                                <td>none</td>
                                <td>设置导出地图的图片格式。</td>
                            </tr>
                            <tr>
                                <td>setImageTransparency(transparent)</td>
                                <td>none</td>
                                <td>设置动态图片的背景是否透明。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setLayerDefinitions(layerDefinitions)</td>
                                <td>none</td>
                                <td>设置图层定义用于过滤地图服务里个别的图层的要素。 layerDefinitions参数是图层定义表达式数组，如下面的代码片段：<br />
                                <code>var layerDefinitions = [];<br />
                                layerDefinitions[0] = "POPULATION > 5000000";<br />
                                layerDefinitions[5] = "AREA > 100000";<br />
                                dynamicMapServiceLayer.setLayerDefinitions(layerDefinitions);</code>
                                注意这个数组目录0和5是有效图层ID，POPULATION和AREA是各自图层相关的属性字段。当前不可见的图层的定义表达式会被服务器忽略。
                                </td>
                            </tr>
                            <tr>
                                <td>setVisibleLayers(ids)</td>
                                <td>none</td>
                                <td>设置导出地图的可见的图层。默认情况下，可视的图层通过LayerInfo的默认可见性定义。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>5.3.5 事件</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>事件</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onMapImageExport(mapImage) </td>
                                <td>当图层导出完成时触发。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="ArcGISImageServiceLayer">5.4 ArcGISImageServiceLayer</h3>
                    <h4>5.4.1 描述</h4>
                    <p>可以用zhxwMapServer REST API提供的图像地图服务资源工作。</p>
                    <h4>5.4.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.layers.ArcGISImageServiceLayer(url, options?)</td>
                                <td>创建新的ArcGISImageServiceLayer对象。URL是必需的参数，也接受一些可选参数。这些可选参数可以是任意顺序。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>5.4.3 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>bandCount</td>
                                <td>Number</td>
                                <td>ArcGISImageServiceLayer里波段的数量。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>bandIds</td>
                                <td>Number[]</td>
                                <td>当前波段选择的数组。</td>
                            </tr>
                            <tr>
                                <td>bands</td>
                                <td>Object[]</td>
                                <td>光栅数据集组成的光栅波段和统计信息。数组长度给出波段的数量，数组索引代表波段ID。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>compressionQuality</td>
                                <td>Number</td>
                                <td>当前压缩质量值。压缩质量控制了有多少损失的图片。仅仅对JPG图片类型有效。</td>
                            </tr>
                            <tr>
                                <td>copyrightText</td>
                                <td>String</td>
                                <td>图像服务定义的版权字符串。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>Description</td>
                                <td>String</td>
                                <td>图像服务定义的描述。</td>
                            </tr>
                            <tr>
                                <td>disableClientCaching</td>
                                <td>Boolean</td>
                                <td>当值为true时，图片总是从服务器上获取，忽略浏览器的缓存。这将被用于地图服务的数据时常修改的情况。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>format</td>
                                <td>String</td>
                                <td>输出图像类型。</td>
                            </tr>
                            <tr>
                                <td>interpolation</td>
                                <td>String</td>
                                <td>当前插值方法。插值方法影响当栅格数据集变形或改变坐标空间时，栅格数据集如何变换。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>pixelSizeX</td>
                                <td>Number</td>
                                <td>X方向的像素大小。</td>
                            </tr>
                            <tr>
                                <td>pixelSizeY</td>
                                <td>Number</td>
                                <td>Y方向的像素大小。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>pixelType</td>
                                <td>Number</td>
                                <td>图像服务像素类型。保存在光栅图里面的值的类型，例如有符号整数，无符号整数，或浮点数。整数全是数字，而浮点数有小数位。 </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>5.4.4 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>exportMapImage(imageServiceParameters?,callback?)</td>
                                <td>none</td>
                                <td>用通过ImageServiceParameters指定的值导出地图。完成时，返回MapImage。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setBandIds(bandIds)</td>
                                <td>none</td>
                                <td>设置导出图像的R,G,B为合适的ImageService波段ID。BandIds是0基准。</td>
                            </tr>
                            <tr>
                                <td>setCompressionQuality(quality)</td>
                                <td>none</td>
                                <td>设置导出图片的压缩质量。仅仅对JPG图片格式有效。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setDisableClientCaching(disable)</td>
                                <td>none</td>
                                <td>设置图片是否总是从服务器获取，忽略浏览器缓存。当地图服务提供数据经常修改时使用。</td>
                            </tr>
                            <tr>
                                <td>setInterpolation(interpolation)</td>
                                <td>none</td>
                                <td>设置插值方法。插值方法影响当栅格数据集变形或改变坐标空间时，栅格数据集如何变换。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>5.4.5 事件</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>事件</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onMapImageExport(mapImage) </td>
                                <td>当当地图导出完成时触发。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="ArcGISTiledMapServiceLayer">5.5 ArcGISTiledMapServiceLayer</h3>
                    <h4>5.5.1 描述</h4>
                    <p>使用zhxwMapServer REST API提供的缓存地图服务资源工作。缓存服务访问的是高速缓存切片，而不是动态渲染图图片。</p>
                    <h4>5.5.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.layers.ArcGISTiledMapServiceLayer(url, options?)</td>
                                <td>创建新的ArcGISTiledMapServiceLayer对象。URL是必需的参数，还接受一些可选参数。这些可选参数可以是任意顺序。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>5.5.3 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>copyright</td>
                                <td>String</td>
                                <td>地图服务定义的版权字符串。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>description</td>
                                <td>String</td>
                                <td>地图服务定义的地图描述。</td>
                            </tr>
                            <tr>
                                <td>layerInfos</td>
                                <td>LayerInfo[]</td>
                                <td>返回服务里的有效图层和默认可见性。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>units</td>
                                <td>String</td>
                                <td>由服务定义的图层默认单位。如果图层是地图底图，地图是一样的单位。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="DynamicMapServiceLayer">5.6 DynamicMapServiceLayer</h3>
                    <h4>5.6.1 描述</h4>
                    <p>zhxwMapServer 动态地图服务的基础类。</p>
                    <h4>5.6.2 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>fullExtent</td>
                                <td>Extent</td>
                                <td>地图服务定义的完整的范围。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>initialExtent</td>
                                <td>Extent</td>
                                <td>地图服务定义的初始范围。</td>
                            </tr>
                            <tr>
                                <td>spatialReference</td>
                                <td>LayerInfo[]</td>
                                <td>地图服务的空间参考。 支持的空间参考列表，见投影坐标系统和地理坐标系统。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>5.6.3 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>getImageUrl(extent, width, height, callback)</td>
                                <td>String</td>
                                <td>当扩展DynamicMapServiceLayer时方法将执行。 更多详细信息，见创建自定义图层类型。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>refresh()</td>
                                <td>none</td>
                                <td>通过建立新的到服务器的请求刷新地图。为了以这种方式刷新图层，setDisableClientCaching必需是true。这保证了地图图片不是客户端的缓存。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="utilityclass">6 工具类</h2>
                    <h3 id="draw">6.1 Draw</h3>
                    <h4>6.1.1 描述</h4>
                    <p>支持绘制几何体的功能的工具栏。</p>
                    <h4>6.1.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.toolbars.Draw(map)</td>
                                <td>创建新的Draw对象。地图是一个必需的参数。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>6.1.3 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>fillSymbol</td>
                                <td>SimpleFillSymbol</td>
                                <td>符号被用于绘制Polygon或Extent。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>lineSymbol</td>
                                <td>SimpleLineSymbol</td>
                                <td>符号被用于绘制Polyline。</td>
                            </tr>
                            <tr>
                                <td>markerSymbol</td>
                                <td>SimpleMarkerSymbol</td>
                                <td>符号被用于绘制Point或Multipoint。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>respectDrawingVertexOrder</td>
                                <td>Boolean</td>
                                <td>当设置为false，几何体被修改为拓扑正确性。当设置为true，输入几何体不被修改。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>6.1.4 常量</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    常量
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>EXTENT</td>
                                <td>绘制一个extent box。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>FREEHAND_POLYGON</td>
                                <td>绘制一个freehand polygon。 </td>
                            </tr>
                            <tr>
                                <td>FREEHAND_POLYLINE</td>
                                <td>绘制一个freehand polyline。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>LINE</td>
                                <td>绘制一个line。 </td>
                            </tr>
                            <tr>
                                <td>MULTI_POINT</td>
                                <td>绘制一个Multipoint。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>POINT</td>
                                <td>绘制一个point。 </td>
                            </tr>
                            <tr>
                                <td>POLYGON</td>
                                <td>绘制一个polygon。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>POLYLINE</td>
                                <td>绘制一个polyline。 </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>6.1.5 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>activate(geometryType)</td>
                                <td>none</td>
                                <td>为绘制几何体激活工具栏。激活工具条禁用地图导航。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>deactivate()</td>
                                <td>none</td>
                                <td>禁用工具栏并激活地图导航。</td>
                            </tr>
                            <tr>
                                <td>setFillSymbol(fillSymbol)</td>
                                <td>none</td>
                                <td>设置填充符号。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setLineSymbol(lineSymbol)</td>
                                <td>none</td>
                                <td>设置线段符号。</td>
                            </tr>
                            <tr>
                                <td>setMarkerSymbol(markerSymbol)</td>
                                <td>none</td>
                                <td>设置标记符号。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setRespectDrawingVertexOrder(set)</td>
                                <td>none</td>
                                <td>设置多边形几何体是否修改为拓扑正确的。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>6.1.6 事件</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>事件</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onDrawEnd(geometry)</td>
                                <td>绘制完成时触发。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 id="serviceclass">7 服务类</h2>
                    <h3 id="GeometryService">7.1 GeometryService</h3>
                    <h4>7.1.1 描述</h4>
                    <p>表示zhxwMapServer REST API提供的一个几何服务资源。用于在几何体上执行各种的操作，例如投影，简化，缓存和空间关系。</p>
                    <h4>7.1.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.tasks.GeometryService(url)</td>
                                <td>创建一个新的GeometryService对象. URL是一个必需的参数。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.1.3 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>url</td>
                                <td>String</td>
                                <td>表示zhxwMapServer REST资源的定位器服务的URL。 使用Services Directory获得URL。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.1.4 常量</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>常量</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SPATIAL_REL_COINCIDENCE</td>
                                <td>几何体的边框必须有一个交叉点，但是不考虑内部的关系（两者可以覆盖，一个包含在另一个里面，或者内部可能是不相交的）。这个关系应用于多段线和多边形。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>SPATIAL_REL_CROSS</td>
                                <td>如果两个多段线有唯一的共同点，并且至少其中一个不是终端，则多段线交叉。如果一个多线段和一个多边形在多边形内部共有一个多线段，并且共有的多线段不等于全部多线段，则多线段和多边形交叉。如果其中一个几何体是空的，则几何体不交叉。</td>
                            </tr>
                            <tr>
                                <td>SPATIAL_REL_DISJOINT</td>
                                <td>如果两个几何体的交集是空，则是不相交的。如果disjoint是false，则两个几何体相交。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>SPATIAL_REL_IN</td>
                                <td>如果基本的几何体是两个几何体的交集并且两个几何体内部的交集不是空的，那么这个基本几何体在另一个几何体的内部。除非另一个集合体是空的，一个空的几何体才会在另一个几何体的内部。 </td>
                            </tr>
                            <tr>
                                <td>SPATIAL_REL_INTERIORINTERSECTION</td>
                                <td>几何体相交不包括边界线接触。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>SPATIAL_REL_INTERSECTION</td>
                                <td>几何体内部相交或边界接触，等同于“不是不相交的”。</td>
                            </tr>
                            <tr>
                                <td>SPATIAL_REL_LINETOUCH</td>
                                <td>两个几何体是接触的，几何体的交集是非空的，但是几何体内部的交集为空。这估计接触是否沿着边界线发生（不是点）。多边形有效。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>SPATIAL_REL_OVERLAP</td>
                                <td>两个多段线共享相同的支线，或两个多线段共享相同的子区。两个空的几何体不会重叠。</td>
                            </tr>
                            <tr>
                                <td>SPATIAL_REL_POINTTOUCH</td>
                                <td>当两个几何体交集是非空时两个几何体被称之为接触，但是几何体的内部交集是空的。这估计接触是否发生在点上（不是边界线上）。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>SPATIAL_REL_RELATION</td>
                                <td>允许任何使用Shape Comparison Language的关系定义规范。 </td>
                            </tr>
                            <tr>
                                <td>SPATIAL_REL_TOUCH</td>
                                <td>esriGeometryRelationPointTouch和esriGeometryRelationLineTouch的联合。当几何体交集是非空的但是他们的内部的交集是空的，两个几何体被称之为接触。例如，点接触是一个多段线只有唯一一个点和多线段端点之一一样。如果两个几何体中的一个是空的，几何体不会是接触的。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>SPATIAL_REL_WITHIN</td>
                                <td>与esriGeometryRelationIn一致，但是也认可完全在多边形边界线上的多段线被视为在多边形内。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.1.5 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>areasAndLengths(graphics,    callback?, errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>当几何体类型是Polygon时获得Graphic[]的面积和长度。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>buffer(bufferParameters,    callback?, errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>在给定的几何体周边指定距离创建缓冲区多边形。完成时，onBufferComplete事件被触发并且可选的callback函数被调用。callback函数和事件处理器接收包含缓冲区几何体的Graphic数组。</td>
                            </tr>
                            <tr>
                                <td>labelPoints(polygons,    callback?, errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>为每个多边形计算内部点。这些内部点能用于在客户端标识多边形。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>lengths(graphics,callback?,    errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>当几何体类型是Polyline时获得Graphic[]长度。</td>
                            </tr>
                            <tr>
                                <td>project(graphics,    outSpatialReference, callback?, errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>将空间数据投影到另一个空间参考系中。完成时，onProjectComplete事件被触发并且可选的callback函数被调用。callback函数和事件处理器收到包含头投影几何体的Graphic数组。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>relation(graphics1,    graphics2, spatialRelationship, comparisonString?, callback?, errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>计算graphics1和graphics2所属的空间关系。连个数组被认为用同一个空间参考。关系是2D的。Z坐标没有使用。数组内的几何体不能是混合的。</td>
                            </tr>
                            <tr>
                                <td>simplify(graphics,callback?,    errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>改变给定几何体使他们拓扑定义和几何类型相符。完成时，onSimplifyComplete事件被触发并且可选的callback函数被调用。callback函数和事件处理器收到包含简化几何体的Graphic数组。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.1.6 事件</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>事件</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onAreasAndLengthsComplete(areasAndLengths) </td>
                                <td>当areasAndLengths操作完成时触发该事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onBufferComplete(graphics) </td>
                                <td>当缓冲操作完成时触发该事件。</td>
                            </tr>
                            <tr>
                                <td>onError(error) </td>
                                <td>当执行任务发生错误时触发该事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onLabelPointsComplete(labelPoints) </td>
                                <td>当labelPoints操作完成时触发该事件。</td>
                            </tr>
                            <tr>
                                <td>onLengthsComplete(lengths) </td>
                                <td>当长度操作完成时触发该事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onProjectComplete(graphics) </td>
                                <td>当投影操作完成时触发该事件。</td>
                            </tr>
                            <tr>
                                <td>onRelationComplete(relationships) </td>
                                <td>当关系操作完成时触发该事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onSimplifyComplete(graphics) </td>
                                <td>当简化操作完成时触发该事件。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="Identify">7.2 Identify</h3>
                    <h4>7.2.1 描述</h4>
                    <p>这个数据对象被用于IdentifyTask.execute方法的identifyParameters参数。指定用于标识要素的条件。</p>
                    <h4>7.2.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.tasks.IdentifyParameters()</td>
                                <td>创建一个新的IdentifyParameters对象. 构造函数没有参数。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.2.3 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>dpi</td>
                                <td>Number</td>
                                <td>当前地图视图的分辨率。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>geometry</td>
                                <td>Geometry</td>
                                <td>几何体用于在Identify期间选择要素。几何体类型通过    Geometry type指定。最常用的标识几何体是Point。</td>
                            </tr>
                            <tr>
                                <td>height</td>
                                <td>Number</td>
                                <td>当前被查看的地图高度（单位：像素）。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>layerIds</td>
                                <td>Number[]</td>
                                <td>执行查找操作的图层。图层通过逗号分隔的图层ID列表指定。图层id列表在ArcGISMapServiceLayer    layerInfos中返回。</td>
                            </tr>
                            <tr>
                                <td>layerOption</td>
                                <td>String</td>
                                <td>指定那些图层用于Identify。    可用值见常量表。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>mapExtent</td>
                                <td>Extent</td>
                                <td>当前查看的地图范围或地图边界框。除非sr被指定，否则mapExtent属性被视为用地图的空间参考。
                                    mapExtent, height, width, 和dpi的值被用于确定在当前范围内的可见图层。也用于基于tolerance在地图上计算搜索距离。</td>
                            </tr>
                            <tr>
                                <td>returnGeometry</td>
                                <td>Boolean</td>
                                <td>如果是true，    结果集包含和每个结果相关的几何体。默认值是false。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>spatialReference</td>
                                <td>SpatialReference</td>
                                <td>输入和输出的几何体的空间参考和mapExtent的空间参考一致。如果sr没有指定，几何体和范围被视为用地图的空间参考，输出几何体也用地图的空间参考。支持的空间参考列表，见投影坐标系统和地理坐标系统。</td>
                            </tr>
                            <tr>
                                <td>tolerance</td>
                                <td>Number</td>
                                <td>在到指定几何体的距离内，identify可以被执行，距离单位是屏幕像数。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>width</td>
                                <td>Number</td>
                                <td>当前被查看的地图宽度（单位：像素）。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.2.4 常量</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>常量</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>LAYER_OPTION_ALL</td>
                                <td>identity所有图层，即使图层是不可见的。性能注意：如果服务有很多图层，使用这个选项，请求不会很好的执行。    一个可见的图层意味着你可以在地图上的当前范围内看到它。如果一个图层被关闭或不在设置的分辨率范围内，该图层不能被identity。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>LAYER_OPTION_TOP</td>
                                <td>仅仅identity最顶层可见图层。 </td>
                            </tr>
                            <tr>
                                <td>LAYER_OPTION_VISIBLE</td>
                                <td>identity所以可见的图层。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>(1) Identifyresult</h4>
                    <h4>描述</h4>
                    <p>表示identity操作的结果。</p>
                    <h4>属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>displayFieldName</td>
                                <td>String</td>
                                <td>图层的主要显示字段的名称。属性的值和feature的其中一个字段的名称。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>feature</td>
                                <td>Graphic</td>
                                <td>一个标识的要素。</td>
                            </tr>
                            <tr>
                                <td>layerId</td>
                                <td>Number</td>
                                <td>包含feature的图层的唯一ID。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>layerName</td>
                                <td>String</td>
                                <td>包含feature的图层名称。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>(2) Identifytask</h4>
                    <h4>描述</h4>
                    <p>通过zhxwMapServer REST API提供的地图服务资源的图层执行一个identity操作。</p>
                    <h4>构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.tasks.IdentifyTask(url)</td>
                                <td>创建一个新的IdentifyTask对象. URL是一个必需的参数。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>url</td>
                                <td>String</td>
                                <td>指向zhxwMapServer REST地图服务资源的URL。使用Services Directory获得URL。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>execute(identifyParameters, callback?, errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>发送一个请求到zhxwMapREST地图服务资源来基于IdentifyParameters指定的参数执行identify要素的操作。完成时，onComplete时间被触发并且可选的callback函数被调用。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>事件</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>事件</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onComplete(identifyResults) </td>
                                <td>identify操作完成时触发该事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onError(error) </td>
                                <td>当执行任务发生错误时触发该事件。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="Find">7.3 Find</h3>
                    <h4>7.3.1 描述</h4>
                    <p>这个数据对象被用来做FindTask.execute方法的findParameters参数。该参数指定查找操作的搜索条件。</p>
                    <h4>7.3.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.tasks.FindParameters()</td>
                                <td>创建一个新的FindParameters对象. 构造函数没有参数。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.3.3 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>contains</td>
                                <td>Boolean</td>
                                <td>如果是false，    操作搜索完全匹配searchText字符串的值。 否则, 搜索包含提供的searchText字符串的值。 默认值是true。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>layerIds</td>
                                <td>Number[]</td>
                                <td>执行查找操作的图层。图层通过逗号分隔的图层ID列表指定。图层id列表在ArcGISMapServiceLayer    layerInfos中返回。</td>
                            </tr>
                            <tr>
                                <td>outSpatialReference</td>
                                <td>SpatialReference</td>
                                <td>输出几何体的空间参考。 如果outSR没有指定，输出几何体用地图的空间参考返回。 支持的空间参考列表，见投影坐标系统和地理坐标系统。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>returnGeometry</td>
                                <td>Boolean</td>
                                <td>如果是true，结果集包括和每个结果有关系的几何体。默认值是false。</td>
                            </tr>
                            <tr>
                                <td>searchFields</td>
                                <td>String[]</td>
                                <td>用于搜索的图层字段的名称。字段通过逗号分隔的字段名称列表指定。如果参数没有指定，搜索所有字段。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>searchText</td>
                                <td>String</td>
                                <td>搜索字符串文版被用于搜索图层和在图层中指定的字段以及searchFields参数。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>(1) Findresult</h4>
                    <h4>描述</h4>
                    <p>表示查找操作结果的类。</p>
                    <h4>属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>displayFieldName</td>
                                <td>String</td>
                                <td>图层的主要显示字段的名称。属性的值和feature的其中一个字段的名称。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>feature</td>
                                <td>Graphic</td>
                                <td>查找的要素。</td>
                            </tr>
                            <tr>
                                <td>foundFieldName</td>
                                <td>String</td>
                                <td>包含搜索文本的字段的名称。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>layerId</td>
                                <td>Number</td>
                                <td>包含feature的图层的唯一ID。</td>
                            </tr>
                            <tr>
                                <td>layerName</td>
                                <td>String</td>
                                <td>包含feature的图层名称。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>(2) Findtask</h4>
                    <h4>描述</h4>
                    <p>zhxwMapServer REST API提供的基于字符串搜索地图服务。搜索能够在单个图层的单个字段，一个图层的多个字段以及多个图层的多个字段上进行。</p>
                    <h4>构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.tasks.FindTask(url)</td>
                                <td>创建一个新的FindTask对象. URL是一个必需的参数。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>url</td>
                                <td>String</td>
                                <td>指向zhxwMapServer REST地图服务资源的URL。使用Services Directory获得URL。 </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>execute(findParameters, callback?, errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>发送一个请求到zhxwMapREST地图服务资源来执行一个基于FindParameters的搜索。完成时，onComplete时间被触发并且可选的callback函数被调用。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>事件</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>事件</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onComplete(findResults)  </td>
                                <td>当查找操作完成时触发该事件。结果是一个FindResult数组。如果可选的callback函数被指定，返回一样的信号。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onError(error) </td>
                                <td>当执行任务发生错误时触发该事件。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="Locator">7.4 Locator</h3>
                    <h4>7.4.1 描述</h4>
                    <p>表示zhxwMapServer REST API提供的地理编码服务资源。用于生成地址的候选位置。也被用来查找指定位置的地址。</p>
                    <h4>7.4.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.tasks.Locator(url)</td>
                                <td>创建一个新的Locator对象。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.4.3 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>url</td>
                                <td>String</td>
                                <td>指向zhxwMapServer REST地图服务资源的URL。使用Services Directory获得URL。 </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.4.4 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>addressToLocations(address,    outFields?,callback?,errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>发送请求到zhxwMap   REST地理编码资源，去查找指定在address参数中的一个单独的地址的候选位置。完成时，onAddressToLocationsComplete 事件被触发，可选的callback    函数被调用。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>locationToAddress(location,    distance, callback?, errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>基于给定的点定位一个地址。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.4.5 事件</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>事件</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onAddressToLocationsComplete(addressCandidates) </td>
                                <td>当Locator.addressToLocation()    完成的时候触发，结果是一个AddressCandidate数组。如果指定可选的callback </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onError(error) </td>
                                <td>执行任务遇到错误的时候触发。</td>
                            </tr>
                            <tr>
                                <td>onLocationToAddressComplete(addressCandidate) </td>
                                <td>当Locator.locationToAddress()完成的时候触发。结果是一个AddressCandidate。如果指定可选的callback ，返回同样的签名。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="Query">7.5 Query</h3>
                    <h4>7.5.1 描述</h4>
                    <p>Query类是QueryTask的输入。不是所有的查询属性都是执行查询任务必需的。查询定义需要下列属性之一：queryGeometry, text, 或 where。可选的属性包括 outFields, outSpatialReference 和 returnGeometry。</p>
                    <h4>7.5.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.tasks.Query()</td>
                                <td>创建新的QueryTask对象用于通过URL在图层资源上执行一个查询。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.5.3 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>geometry</td>
                                <td>Geometry</td>
                                <td>几何体应用于空间过滤。执行查询期间，spatialRelationship指定的空间关系被应用到这个几何体。有效的几何体类型是Extent, Point, Multipoint, Polyline或Polygon. </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>outFields</td>
                                <td>String[]</td>
                                <td>属性字段包含在FeatureSet里。字段必须在地图图层中存在。必须列出实际字段而不是别名。返回的字段也是实际字段名称。然而，当显示结果时可以使用字段别名。用户能够在地图文档和管理器中设置字段别名。当指定了输出字段，指定的字段应该是在查询或者结果中用到的字段，包含越少的字段响应速度会越快。
                                    每个查询必须访问图层的Shape和Objectid字段，但是字段列表不必包含这些字段。</td>
                            </tr>
                            <tr>
                                <td>outSpatialReference</td>
                                <td>SpatialReference</td>
                                <td>返回几何体的空间参考。如果没有指定，返回几何体用地图的空间参考。支持的空间参考列表，见投影坐标系统 and 地理坐标系统。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>returnGeometry</td>
                                <td>Boolean</td>
                                <td>如果是"true"，每个FeatureSet的要素包含几何体。如果不计划在地图上包含高亮要素设置为"false"(默认值)。</td>
                            </tr>
                            <tr>
                                <td>spatialRelationship</td>
                                <td>String</td>
                                <td>执行查询期间，空间关系将被用于输入几何体。有效值在常量表中列出。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>text</td>
                                <td>String</td>
                                <td>使用"like"where子句缩写。使用的字段是定义在地图文档中的显示字段。能在服务目录中确定一个图层的显示字段是什么。</td>
                            </tr>
                            <tr>
                                <td>where</td>
                                <td>String</td>
                                <td>查询的where子句。允许任何合法的操作层中字段的SQLwhere子句。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.5.4 常量</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>常量</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SPATIAL_REL_CONTAINS</td>
                                <td>要素类1的部分或全部要素包含在要素类2的要素中。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>SPATIAL_REL_CROSSES</td>
                                <td>要素类1的要素跨越要素类2中的要素。</td>
                            </tr>
                            <tr>
                                <td>SPATIAL_REL_ENVELOPEINTERSECTS</td>
                                <td>要素类1中的envelope与要素类2中的envelope相交。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>SPATIAL_REL_INDEXINTERSECTS</td>
                                <td>查询要素类的envelope和目标要素类的索引目录相交。 </td>
                            </tr>
                            <tr>
                                <td>SPATIAL_REL_INTERSECTS</td>
                                <td>要素1中的部分要素被包含在要素2的要素中。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>SPATIAL_REL_OVERLAPS</td>
                                <td>要素类1中的要素和要素类2中的要素重合。 </td>
                            </tr>
                            <tr>
                                <td>SPATIAL_REL_TOUCHES</td>
                                <td>要素类1中的要素接触要素类2中的一个要素的边框。 </td>
                            </tr>
                            <tr class={st.odd}>
                                <td>SPATIAL_REL_WITHIN</td>
                                <td>要素类1中的要素完全被要素类2中的要素包含。 </td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="Querytask">7.6 Querytask</h3>
                    <h4>7.6.1 描述</h4>
                    <p>在zhxwMapServer REST API提供的地图服务图层资源上执行一个查询操作。</p>
                    <h4>7.6.2 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.tasks.QueryTask(url)</td>
                                <td>创建一个在图层资源的url上执行查询的QueryTask对象。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.6.3 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>url</td>
                                <td>String</td>
                                <td>表示一个地图服务图层的zhxwMapServer REST资源的URL。为了获得URL，使用 Services Directory。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.6.4 方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>execute(parameters, callback?, errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>在zhxwMapServer地图图层上执行查询。返回结果是FeatureSet。如果查询成功，用户指定的callback函数被调用。FeatureSet包含Graphic数组要素，可以通过Map.graphics.add()加到地图里面。如果没有找到结果，这个数组不会被填充。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.6.5 事件</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>事件</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onComplete(featureSet)</td>
                                <td>QueryTask.execute()方法执行完成，该事件被触发。结果是一个FeatureSet。如果可选的callback函数被指定，返回相同的信号。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onError(error) </td>
                                <td>执行任务遇到错误的时候触发。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="Route">7.7 Route</h3>
                    <h4>7.7.1 构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.tasks.RouteParameters()</td>
                                <td>创建一个新的RouteParameters对象。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>7.7.2 属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>accumulateAttributes</td>
                                <td>String[]</td>
                                <td>网络属性名称的列表将被分析累计，例如，那些应该作为响应的一部分被返回的属性。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>barriers</td>
                                <td>Object</td>
                                <td>在分析期间, 加载的一组障碍物。</td>
                            </tr>
                            <tr>
                                <td>directionsLanguage</td>
                                <td>String</td>
                                <td>计算方向时使用的语言。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>directionsLengthUnits</td>
                                <td>String</td>
                                <td>当计算方向时候使用的长度单位.</td>
                            </tr>
                            <tr>
                                <td>directionsTimeAttribute</td>
                                <td>String</td>
                                <td>计算方向时，用于驾驶时间的网络属性的名称。默认定义在用于RouteTask指定的路径网络图层中。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>doNotLocateOnRestrictedElements</td>
                                <td>Boolean</td>
                                <td>如果是true，避免通过barriers限制网络元素或因为限制条件被指定在restrictionAttributes中。</td>
                            </tr>
                            <tr>
                                <td>findBestSequence</td>
                                <td>Boolean</td>
                                <td>如果是true考虑preserveFirstStop和preserveLastStop优化路线中站点的顺序。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>ignoreInvalidLocations</td>
                                <td>Boolean</td>
                                <td>在routes中, stop没有在网络上定位,或者stop不能被得到，结果将会取决于ignoreInvalidLocations的值.
                                    当值为flase的时候, 如果有一个特定的stop被定为为或者得到, 这个solve 操作会失败.
                                        当值为true时, 至少两个合法的stops 已经通过route被连接, 一个有效的结果被返回. 如果多个routes在一个单一的请求中被处理, 只要一个route被建立, 一个有效的结果被返回.不能被解释的routes列表包含在RouteTask.onSolveComplete的参数消息中</td>
                            </tr>
                            <tr>
                                <td>impedanceAttribute</td>
                                <td>String</td>
                                <td>在分析中被用作阻抗属性的网络属性名. 默认是定义在RouteTask中使用的特定的routing网络层</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>outputGeometryPrecision</td>
                                <td>Number</td>
                                <td>泛化之后输出几何体的精确度。</td>
                            </tr>
                            <tr>
                                <td>outputGeometryPrecisionUnits</td>
                                <td>String</td>
                                <td>输出几何体精确度的单位.</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>outputLines</td>
                                <td>String</td>
                                <td>在结果中生成的输出线的类型. 默认是在RouteTask中的指定的路线网络层中定义的. 可能的值, 查看NAOutputLine.</td>
                            </tr>
                            <tr>
                                <td>outSpatialReference</td>
                                <td>SpatialReference</td>
                                <td>返回带有分析结果的几何体的空间参考的WKID,几何体在空间参考的地图中被返回.</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>preserveFirstStop</td>
                                <td>Boolean</td>
                                <td>如果是true, 当findBestSequence 设置成true的时候,保持第一端点固定。只有findBestSequence是true是可用的。</td>
                            </tr>
                            <tr>
                                <td>preserveLastStrop</td>
                                <td>Boolean</td>
                                <td>如果是true，当findBestSequence 是true的时候, 保持最后一个端点在序列中固定不变。只有findBestSequence是true的时候可用。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>restrictionAttributes</td>
                                <td>String[]</td>
                                <td>用于分析限制的网络属性列表。</td>
                            </tr>
                            <tr>
                                <td>restrictUTurns</td>
                                <td>String</td>
                                <td>指定如何处理掉头。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>returnBarriers</td>
                                <td>Boolean</td>
                                <td>如果是true,障碍物作为RouteTask.onSolveComplete的第二个参数返回.</td>
                            </tr>
                            <tr>
                                <td>returnDirections</td>
                                <td>Boolean</td>
                                <td>如果是true, 在每一个结果的directions 属性中, 生成方向并返回.更多的信息可以查看Getting driving directions.</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>returnRoutes</td>
                                <td>Boolean</td>
                                <td>如果是true,在每一个RouteResult 的route属性中,生成并返回路线。</td>
                            </tr>
                            <tr>
                                <td>returnStops</td>
                                <td>Boolean</td>
                                <td>如果是true, 在每一个RouteResult的stops的属性中返回端点。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>startTime</td>
                                <td>Date</td>
                                <td>路线开始的时间. 如果没有指定,默认是在路线服务中指定的时间.</td>
                            </tr>
                            <tr>
                                <td>stops</td>
                                <td>Object</td>
                                <td>在分析期间,加载的一组端点的网络位置。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>useHierarchy</td>
                                <td>Boolean</td>
                                <td>如果是true,网络的层次属性被用于分析.</td>
                            </tr>
                            <tr>
                                <td>useTimeWindows</td>
                                <td>Boolean</td>
                                <td>如果是true,时间窗口会被用于分析.</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>(1) Routeresult</h4>
                    <h4>描述</h4>
                    <p>路线任务的结果。RouteResult属性依赖RouteParameter 输入。</p>
                    <h4>属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <td>属性</td>
                                <td>类型</td>
                                <td>描述</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>directions</td>
                                <td>DirectionsFeatureSet</td>
                                <td>如果RouteParameters.returnDirections设置为true，路线方向被返回。更多信息，见Getting driving directions。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>route</td>
                                <td>Graphic</td>
                                <td>如果RouteParameters.returnRoutes设置为true，路线图形被返回。路线相关的属性列表，见Finding the best route的"路线属性"部分。</td>
                            </tr>
                            <tr>
                                <td>routeName</td>
                                <td>String</td>
                                <td>路线名称。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>stops</td>
                                <td>Graphic[]</td>
                                <td>端点数组。仅在RouteParameters.returnStops设置为true时被返回。关于每个端点的属性列表，见Finding the best route中的“端点属性”部分。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>(2) Routetask</h4>
                    <h4>描述</h4>
                    <p>zhxwMapServer REST API提供的网络分析服务的路线图层资源上解答一个路线。</p>
                    <h4>构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.tasks.RouteTask(url)</td>
                                <td>创建一个新的RouteTask对象。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <td>属性</td>
                                <td>类型</td>
                                <td>描述</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>url</td>
                                <td>String</td>
                                <td>zhxwMapServer REST资源表示的网路分析服务的URL。为了获得URL，使用Services Directory。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>solve(params, callback?, errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>依赖路线图层及路线参数解答路线。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>事件</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>事件</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onSolveComplete(routeResults, barriers, message) </td>
                                <td>RouteTask.solve()结束时触发。如果可选得callback函数被指定，返回和callback函数一样的信号。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onError(error) </td>
                                <td>执行任务遇到错误的时候触发。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 id="GP">7.8 GP</h3>
                    <h4>(1) Geoprocessor</h4>
                    <h4>描述</h4>
                    <p>表示zhxwMapServer REST API提供的GP任务资源。一个地理处理任务资源代表地理处理服务的单个任务，支持如下操作：</p>
                    <ul style={{ listStyle: 'none' }}>
                        <li>"execute" - 当执行类型是同步时在地理处理任务资源上执行。</li>
                        <li>"submitJob" - 在一个异步的地理处理服务资源上执行。</li>
                    </ul>
                    <h4>构造函数</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>
                                    构造函数
        </th>
                                <th>
                                    描述
        </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>esri.tasks.Geoprocessor(url)</td>
                                <td>通过定义的地理处理任务的URL创建一个Geoprocessor对象。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>outputSpatialReference</td>
                                <td>SpatialReference</td>
                                <td>输出几何体的空间参考。 如果没有指定，输出几何体用输入几何体的空间参考。如果processSpatialReferencew被指定而outputSpatialReference没有指定，输出几何体用outputSpatialReference指定的空间参考。 支持的空间参考列表，见投影坐标系统和地理坐标系统。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>processSpatialReference</td>
                                <td>SpatialReference</td>
                                <td>空间参考是用于执行几何操作的模型。如果processSpatialReference被指定outputSpatialReference没有指定，输出几何体用processSpatialReference指定的空间参考。 支持的空间参考列表，见投影坐标系统和地理坐标系统。</td>
                            </tr>
                            <tr>
                                <td>updateDelay</td>
                                <td>Number</td>
                                <td>每个发送给一个异步GP任务的工作状态间的时间间隔（单位：毫秒）。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>url</td>
                                <td>String</td>
                                <td>接收地理处理请求的zhxwMap   Server Rest API资源端点。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>方法表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>方法</th>
                                <th class={st.secondCol}>返回值</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>cancelJobStatusUpdates(jobId)</td>
                                <td>none</td>
                                <td>取消一个定期的工作状态更新。用户仍然可以通过调用checkStatus()获得这个工作的状态。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>checkJobStatus(jobId,callback?,errback?)</td>
                                <td>none</td>
                                <td>发送一个请求给GP任务来得到指定jobId的当前状态。根据收到的响应，onStatusUpdate事件被触发并且可选的callback函数被调用。</td>
                            </tr>
                            <tr>
                                <td>execute(inputParameters,    callback?, errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>发送一个请求到服务器端来执行一个同步的GP任务。完成时，onExecuteComplete事件被调用并且可选的callback函数被执行。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>getResultData(jobId,    parameterName,callback?, errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>发送一个请求给GP任务来获的通过jobID和resultParameterName指定的任务结果。完成时，getresultdatacomplete会被触发，可选的callback函数会被调用。</td>
                            </tr>
                            <tr>
                                <td>getResultImage(jobId,    parameterName,imageParameters,callback?, errback?)</td>
                                <td>dojo.Deferred</td>
                                <td>发送一个请求到GP任务来获得任务结果的图片。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>getResultImageLayer(jobId,    parameterName,imageParameters,callback?, errback?)</td>
                                <td>none</td>
                                <td>获得GP任务的ArcGISDynamicMapServiceLayer结果。</td>
                            </tr>
                            <tr>
                                <td>setOutputSpatialReference(spatialReference)</td>
                                <td>none</td>
                                <td>设置输出几何体的空间参考的WKID。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>setProcessSpatialReference(spatialReference)</td>
                                <td>none</td>
                                <td>设置用于执行几何操作的空间参考的WKID。</td>
                            </tr>
                            <tr>
                                <td>setUpdateDelay(delay)</td>
                                <td>none</td>
                                <td>设置每个发送给一个异步GP任务的工作状态间的时间间隔（单位：毫秒）。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>submitJob(inputParameters,    callback?,statusCallback?, errback?)</td>
                                <td>none</td>
                                <td>通过GP任务为异步处理提交一个工作到服务器。一旦工作被提交，直到工作结束，onStatusUpdate事件被定期触发并且可选的statusCallback()函数被定期调用，时间间隔通过updateDelay属性设置。工作完成，onJobComplete事件被触发，callback函数被调用。任务执行结果可以使用getResultData(),    getResultImage() 或getResultImageLayer()方法接收。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>事件</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>事件</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onError(error) </td>
                                <td>当执行任务发生错误时触发该事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onExecuteComplete(results,    messages) </td>
                                <td>当同步地理处理任务完成时触发该事件。</td>
                            </tr>
                            <tr>
                                <td>onGetInputComplete(input) </td>
                                <td>测试版未实现。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onGetResultDataComplete(result) </td>
                                <td>当异步地理处理任务执行的结果是可用的时触发该事件。</td>
                            </tr>
                            <tr>
                                <td>onGetResultImageComplete(mapImage) </td>
                                <td>通过调用getResultImage()方法生产一个地图图像时触发该事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onGetResultImageLayerComplete(ArcGISDynamicMapServiceLayer) </td>
                                <td>getResultImageLayer()完成时触发该事件。</td>
                            </tr>
                            <tr>
                                <td>onJobComplete(status) </td>
                                <td>使用submitJob执行的异步地理处理任务完成时触发该事件。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>onStatusUpdate(status) </td>
                                <td>当工作状态更新是可用的时触发该事件。</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>(2) GPMessage</h4>
                    <h4>描述</h4>
                    <p>表示地理处理任务的执行期间的信息。包含信息如何时开始处理，什么参数值被使用，任务进度，可能的问题的警告和错误信息。由信息类型和描述组成。</p>
                    <h4>属性表</h4>
                    <table class={st.tableContent}>
                        <thead>
                            <tr>
                                <th class={st.firstCol}>属性</th>
                                <th class={st.secondCol}>类型</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>description</td>
                                <td>SpatialReference</td>
                                <td>地理处理信息的描述。</td>
                            </tr>
                            <tr class={st.odd}>
                                <td>type</td>
                                <td>String</td>
                                <td>地理处理信息类型。可以是下列值之一： "esriJobMessageTypeInformative", "esriJobMessageTypeWarning", "esriJobMessageTypeError", "esriJobMessageTypeEmpty" and "esriJobMessageTypeAbort", "esriGPMessageTypeInformative", "esriGPMessageTypeWarning", "esriGPMessageTypeError", "esriGPMessageTypeEmpty" and "esriGPMessageTypeAbort".</td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        );
    }
}
export default ClassReference;