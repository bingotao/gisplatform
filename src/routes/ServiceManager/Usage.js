import { Component } from 'react';
import { DatePicker, Card } from 'antd';
import st from './Usage.less';


const { RangePicker } = DatePicker;


class Usage extends Component {
    componentDidMount() {
        this.onChange();
        this.onChange2();
        this.onChange3();
        this.onChange4();
        this.onChange5();
        this.onChange6();
    }
    drawChart = (data) => {
        var myChart = echarts.init(document.getElementById('chart1'));
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['使用量']
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    axisLabel: { 'interval': 0 },
                    data: ['新吴区', '\n乡镇街道', '工业企业', '\n学区', '工业园区', '\n地表水监测', '公交站', '\n公园分布', '绿地现状', '\n空气监测站', '重点污染企业', '\n小区']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '使用量（次）'
                }
            ],
            series: [
                {
                    name: '使用量',
                    type: 'bar',
                    data: data,
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                }
            ]
        };
        myChart.setOption(option);
    }
    drawChart2 = (data) => {
        var myChart = echarts.init(document.getElementById('chart2'));
        var option = {
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            legend: {
                left: 20,
                top: 20,
                orient: 'vertical',
                data: ['财政', '测绘与地理信息', '电力', '发展和改革', '公安', '规划局', '国土资源', '海洋与渔业', '城乡规划', '其他']
            },
            radar: {
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                indicator: [
                    { text: '地图服务', max: 35 },
                    { text: '数据服务', max: 35 },
                    { text: '在线制图', max: 35 },
                    { text: '应用开发', max: 35 },
                    { text: '服务管理', max: 35 }
                ]
            },
            series: {
                name: '部门应用量',
                type: 'radar',
                data: [
                    {
                        value: data[0],
                        name: '财政',
                    },
                    {
                        value: data[1],
                        name: '测绘与地理信息',
                    },
                    {
                        value: data[2],
                        name: '电力',
                    },
                    {
                        value: data[3],
                        name: '发展和改革',
                    },
                    {
                        value: data[4],
                        name: '公安',
                    },
                    {
                        value: data[5],
                        name: '规划局',
                    },
                    {
                        value: data[6],
                        name: '国土资源',
                    },
                    {
                        value: data[7],
                        name: '海洋与渔业',
                    },
                    {
                        value: data[8],
                        name: '城乡规划',
                    },
                    {
                        value: data[9],
                        name: '其他',
                    }
                ]
            }
        };
        myChart.setOption(option);
    }
    drawChart3 = (data) => {
        var myChart = echarts.init(document.getElementById('chart3'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                // x: 'center',
                // y: 'bottom',
                left: 20,
                top: 20,
                orient: 'vertical',
                data: ['财政', '测绘与地理信息', '电力', '发展和改革', '公安', '规划局', '国土资源', '海洋与渔业', '城乡规划', '其他']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            series: [
                {
                    name: '使用量统计',
                    type: 'pie',
                    radius: [30, 110],
                    roseType: 'area',
                    data: [
                        { value: data[0], name: '财政' },
                        { value: data[1], name: '测绘与地理信息' },
                        { value: data[2], name: '电力' },
                        { value: data[3], name: '发展和改革' },
                        { value: data[4], name: '公安' },
                        { value: data[5], name: '规划局' },
                        { value: data[6], name: '国土资源' },
                        { value: data[7], name: '海洋与渔业' },
                        { value: data[8], name: '城乡规划' },
                        { value: data[9], name: '其他' },
                    ]
                }
            ]
        };
        myChart.setOption(option);
    }

    seed = (s) => {
        return function () {
            s = Math.sin(s) * 10000;
            return s - Math.floor(s);
        };
    };

    onChange = () => {
        var data = [];
        for (var i = 0; i < 12; i++) {
            var random1 = this.seed((i + 1) * new Date().getMilliseconds());
            var random2 = this.seed(random1());
            var random = this.seed(random2());
            data[i] = parseInt(30 * random());
        }

        this.drawChart(data);

    }
    onChange2 = () => {
        var data = [];
        for (let i = 0; i < 10; i++) {
            var temp = [];
            for (let j = 0; j < 5; j++) {
                var random1 = this.seed((j + i + 1) * new Date().getMilliseconds());
                var random2 = this.seed(random1());
                var random = this.seed(random2());
                temp[j] = parseInt(30 * random());
            }
            data[i] = temp;
        }
        this.drawChart2(data);

    }
    onChange3 = () => {
        var data = [];
        for (var i = 0; i < 10; i++) {
            var random1 = this.seed((i + 1) * new Date().getMilliseconds());
            var random2 = this.seed(random1());
            var random = this.seed(random2());
            data[i] = parseInt(30 * random());
        }
        this.drawChart3(data);
    }
    dataFormatter = (obj) => {
        var pList = ['新吴区', '\n乡镇街道', '工业企业', '\n学区', '工业园区', '\n地表水监测', '公交站', '\n公园分布', '绿地现状', '\n空气监测站', '重点污染企业', '\n其他'];
        var temp;
        for (var year = 1; year <= 12; year++) {
            var max = 0;
            var sum = 0;
            temp = obj[year];
            for (var i = 0, l = temp.length; i < l; i++) {
                max = Math.max(max, temp[i]);
                sum += temp[i];
                obj[year][i] = {
                    name: pList[i],
                    value: temp[i]
                }
            }
            obj[year + 'max'] = Math.floor(max / 100) * 100;
            obj[year + 'sum'] = sum;
        }
        return obj;
    }
    onChange4 = () => {
        var dataMap = {};

        dataMap.WMS = this.dataFormatter({
            1: [0, 28, 15, 12, 22, 27, 22, 17, 4, 22, 5, 5],
            2: [28, 15, 12, 22, 27, 22, 17, 4, 22, 5, 5, 21],
            3: [15, 12, 22, 27, 22, 17, 4, 22, 5, 5, 21, 29],
            4: [12, 22, 27, 22, 17, 4, 22, 5, 5, 21, 29, 5],
            5: [22, 27, 22, 17, 4, 22, 5, 5, 21, 29, 5, 19],
            6: [27, 22, 17, 4, 22, 5, 5, 21, 29, 5, 19, 19],
            7: [22, 17, 4, 22, 5, 5, 21, 29, 5, 19, 19, 14],
            8: [17, 4, 22, 5, 5, 21, 29, 5, 19, 19, 14, 23],
            9: [4, 22, 5, 5, 21, 29, 5, 19, 19, 14, 23, 8],
            10: [22, 5, 5, 21, 29, 5, 19, 19, 14, 23, 8, 16],
            11: [5, 5, 21, 29, 5, 19, 19, 14, 23, 8, 16, 3],
            12: [5, 21, 29, 5, 19, 19, 14, 23, 8, 16, 3, 18]
        });

        dataMap.WMTS = this.dataFormatter({
            1: [12, 6, 27, 6, 14, 13, 0, 7, 18, 10, 25, 12],
            2: [22, 5, 14, 2, 26, 19, 24, 12, 5, 23, 7, 25],
            3: [5, 14, 2, 26, 19, 24, 12, 5, 23, 7, 25, 14],
            4: [14, 2, 26, 19, 24, 12, 5, 23, 7, 25, 14, 13],
            5: [2, 26, 19, 24, 12, 5, 23, 7, 25, 14, 13, 17],
            6: [24, 28, 17, 15, 3, 7, 17, 9, 16, 23, 5, 28],
            7: [28, 17, 15, 3, 7, 17, 9, 16, 23, 5, 28, 3],
            8: [17, 15, 3, 7, 17, 9, 16, 23, 5, 28, 3, 13],
            9: [11, 14, 3, 23, 2, 15, 3, 10, 25, 29, 13, 28],
            10: [14, 3, 23, 2, 15, 3, 10, 25, 29, 13, 28, 16],
            11: [15, 23, 4, 11, 4, 12, 18, 13, 18, 0, 15, 24],
            12: [23, 4, 11, 4, 12, 18, 13, 18, 0, 15, 24, 19]
        });

        dataMap.Dynamic = this.dataFormatter({
            1: [14, 25, 23, 28, 29, 3, 3, 21, 18, 7, 21, 20],
            2: [20, 5, 28, 12, 7, 28, 14, 28, 9, 0, 24, 8],
            3: [5, 28, 12, 7, 28, 14, 28, 9, 0, 24, 8, 14],
            4: [26, 5, 18, 3, 4, 10, 20, 2, 20, 27, 26, 25],
            5: [26, 17, 14, 13, 24, 5, 18, 8, 15, 13, 24, 14],
            6: [17, 14, 13, 24, 5, 18, 8, 15, 13, 24, 14, 14],
            7: [14, 13, 24, 5, 18, 8, 15, 13, 24, 14, 14, 29],
            8: [13, 24, 5, 18, 8, 15, 13, 24, 14, 14, 29, 9],
            9: [13, 11, 18, 10, 10, 23, 6, 19, 12, 12, 26, 21],
            10: [11, 18, 10, 10, 23, 6, 19, 12, 12, 26, 21, 18],
            11: [18, 10, 10, 23, 6, 19, 12, 12, 26, 21, 18, 24],
            12: [14, 12, 14, 20, 9, 7, 23, 23, 25, 8, 6, 22]
        });


        var option = {
            baseOption: {
                timeline: {
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 1000,
                    data: [
                        '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12',
                    ],
                },
                legend: {
                    x: 'right',
                    data: ['WMS服务', 'WMTS服务', 'Dynamic服务'],
                },
                calculable: true,
                grid: {
                    top: 80,
                    bottom: 100,
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                            label: {
                                show: true,
                                formatter: function (params) {
                                    return params.value.replace('\n', '');
                                }
                            }
                        }
                    }
                },
                xAxis: [
                    {
                        'type': 'category',
                        'axisLabel': { 'interval': 0 },
                        'data': [
                            '新吴区', '\n乡镇街道', '工业企业', '\n学区', '工业园区', '\n地表水监测', '公交站', '\n公园分布', '绿地现状', '\n空气监测站', '重点污染企业', '\n其他'
                        ],
                        splitLine: { show: false }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '使用量（次）'
                    }
                ],
                series: [
                    { name: 'WMS服务', type: 'bar' },
                    { name: 'WMTS服务', type: 'bar' },
                    { name: 'Dynamic服务', type: 'bar' },
                    {
                        name: '服务占比',
                        type: 'pie',
                        center: ['75%', '35%'],
                        radius: '28%',
                        z: 100
                    }
                ]
            },
            options: [
                {
                    title: { text: '2017年1月各类型服务使用量' },
                    series: [
                        { data: dataMap.WMS['1'] },
                        { data: dataMap.WMTS['1'] },
                        { data: dataMap.Dynamic['1'] },
                        {
                            data: [
                                { name: 'WMS服务', value: dataMap.WMS['1'] },
                                { name: 'WMTS服务', value: dataMap.WMTS['1'] },
                                { name: 'Dynamic服务', value: dataMap.Dynamic['1'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2017年2月各类型服务使用量' },
                    series: [
                        { data: dataMap.WMS['2'] },
                        { data: dataMap.WMTS['2'] },
                        { data: dataMap.Dynamic['2'] },
                        {
                            data: [
                                { name: 'WMS服务', value: dataMap.WMS['2'] },
                                { name: 'WMTS服务', value: dataMap.WMTS['2'] },
                                { name: 'Dynamic服务', value: dataMap.Dynamic['2'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2017年3月各类型服务使用量' },
                    series: [
                        { data: dataMap.WMS['3'] },
                        { data: dataMap.WMTS['3'] },
                        { data: dataMap.Dynamic['3'] },
                        {
                            data: [
                                { name: 'WMS服务', value: dataMap.WMS['3'] },
                                { name: 'WMTS服务', value: dataMap.WMTS['3'] },
                                { name: 'Dynamic服务', value: dataMap.Dynamic['3'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2017年4月各类型服务使用量' },
                    series: [
                        { data: dataMap.WMS['4'] },
                        { data: dataMap.WMTS['4'] },
                        { data: dataMap.Dynamic['4'] },
                        {
                            data: [
                                { name: 'WMS服务', value: dataMap.WMS['4'] },
                                { name: 'WMTS服务', value: dataMap.WMTS['4'] },
                                { name: 'Dynamic服务', value: dataMap.Dynamic['4'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2017年5月各类型服务使用量' },
                    series: [
                        { data: dataMap.WMS['5'] },
                        { data: dataMap.WMTS['5'] },
                        { data: dataMap.Dynamic['5'] },
                        {
                            data: [
                                { name: 'WMS服务', value: dataMap.WMS['5'] },
                                { name: 'WMTS服务', value: dataMap.WMTS['5'] },
                                { name: 'Dynamic服务', value: dataMap.Dynamic['5'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2017年6月各类型服务使用量' },
                    series: [
                        { data: dataMap.WMS['6'] },
                        { data: dataMap.WMTS['6'] },
                        { data: dataMap.Dynamic['6'] },
                        {
                            data: [
                                { name: 'WMS服务', value: dataMap.WMS['6'] },
                                { name: 'WMTS服务', value: dataMap.WMTS['6'] },
                                { name: 'Dynamic服务', value: dataMap.Dynamic['6'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2017年7月各类型服务使用量' },
                    series: [
                        { data: dataMap.WMS['7'] },
                        { data: dataMap.WMTS['7'] },
                        { data: dataMap.Dynamic['7'] },
                        {
                            data: [
                                { name: 'WMS服务', value: dataMap.WMS['7'] },
                                { name: 'WMTS服务', value: dataMap.WMTS['7'] },
                                { name: 'Dynamic服务', value: dataMap.Dynamic['7'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2017年8月各类型服务使用量' },
                    series: [
                        { data: dataMap.WMS['8'] },
                        { data: dataMap.WMTS['8'] },
                        { data: dataMap.Dynamic['8'] },
                        {
                            data: [
                                { name: 'WMS服务', value: dataMap.WMS['8'] },
                                { name: 'WMTS服务', value: dataMap.WMTS['8'] },
                                { name: 'Dynamic服务', value: dataMap.Dynamic['8'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2017年9月各类型服务使用量' },
                    series: [
                        { data: dataMap.WMS['9'] },
                        { data: dataMap.WMTS['9'] },
                        { data: dataMap.Dynamic['9'] },
                        {
                            data: [
                                { name: 'WMS服务', value: dataMap.WMS['9'] },
                                { name: 'WMTS服务', value: dataMap.WMTS['9'] },
                                { name: 'Dynamic服务', value: dataMap.Dynamic['9'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2017年10月各类型服务使用量' },
                    series: [
                        { data: dataMap.WMS['10'] },
                        { data: dataMap.WMTS['10'] },
                        { data: dataMap.Dynamic['10'] },
                        {
                            data: [
                                { name: 'WMS服务', value: dataMap.WMS['10'] },
                                { name: 'WMTS服务', value: dataMap.WMTS['10'] },
                                { name: 'Dynamic服务', value: dataMap.Dynamic['10'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2017年11月各类型服务使用量' },
                    series: [
                        { data: dataMap.WMS['11'] },
                        { data: dataMap.WMTS['11'] },
                        { data: dataMap.Dynamic['11'] },
                        {
                            data: [
                                { name: 'WMS服务', value: dataMap.WMS['11'] },
                                { name: 'WMTS服务', value: dataMap.WMTS['11'] },
                                { name: 'Dynamic服务', value: dataMap.Dynamic['11'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2017年12月各类型服务使用量' },
                    series: [
                        { data: dataMap.WMS['12'] },
                        { data: dataMap.WMTS['12'] },
                        { data: dataMap.Dynamic['12'] },
                        {
                            data: [
                                { name: 'WMS服务', value: dataMap.WMS['12'] },
                                { name: 'WMTS服务', value: dataMap.WMTS['12'] },
                                { name: 'Dynamic服务', value: dataMap.Dynamic['12'] }
                            ]
                        }
                    ]
                }
            ]
        };
        var myChart = echarts.init(document.getElementById('chart4'));
        myChart.setOption(option);
    }
    onChange5 = () => {
        var option = {
            angleAxis: {
                type: 'category',
                data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07'],
                max:'dataMax',
                splitArea:{
                    interval:0,
                    show:true,
                },
                axisLabel:{
                    interval:0,
                }
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: {
                        show: true,
                        //type: ['pie', 'funnel']
                    },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            radiusAxis: {
            },
            polar: {
            },
            series: [{
                type: 'bar',
                data: [56, 39, 64, 83, 21, 74, 15],
                coordinateSystem: 'polar',
                name: '地图服务',
                stack: 'a'
            }, {
                type: 'bar',
                data: [36, 69, 44, 33, 71, 34, 5],
                coordinateSystem: 'polar',
                name: '在线制图',
                stack: 'a'
            }, {
                type: 'bar',
                data: [18, 62, 33, 54, 13, 52, 5],
                coordinateSystem: 'polar',
                name: '数据服务',
                stack: 'a'
            }, {
                type: 'bar',
                data: [21, 12, 23, 34, 11, 22, 2],
                coordinateSystem: 'polar',
                name: '应用开发',
                stack: 'a'
            }],
            legend: {
                show: true,
                data: ['地图服务', '在线制图', '数据服务', '应用开发'],
                left: 20,
                top: 40,
                orient: 'vertical',

            }
        };
        var myChart = echarts.init(document.getElementById('chart5'));
        myChart.setOption(option);
    }
    onChange6=()=>{
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['地图服务','数据服务','在线制图','应用开发'],
                left:10
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['2018-01','2018-02','2018-03','2018-04','2018-05','2018-06','2018-07']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} 次'
                }
            },
            series: [
                {
                    name:'地图服务',
                    type:'line',
                    data:[21, 51, 25, 43, 62, 23, 45],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'数据服务',
                    type:'line',
                    data:[11, 17, 21, 23, 13, 23, 30],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'在线制图',
                    type:'line',
                    data:[31, 7, 31, 13, 25, 16, 52],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'应用开发',
                    type:'line',
                    data:[21, 17, 11, 13, 33, 43, 43],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                }
            ]
        };
        var myChart = echarts.init(document.getElementById('chart6'));
        myChart.setOption(option);
    }
    render() {
        return (
            <div className={st.usage}>
                <div className={st.background}>
                    <Card title="各服务使用统计" bordered={false} className={st.card}>
                        <div className={st.time}>
                            <RangePicker onChange={this.onChange} defaultValue={[moment("20180601", "YYYYMMDD"), moment("20180701", "YYYYMMDD")]} />
                        </div>
                        <div className={st.chart} id='chart1'>
                        </div>
                    </Card>
                    <Card title="服务类型使用统计" bordered={false} className={st.card}>
                        <div className={st.chart} id='chart4' style={{ height: 333 }}>
                        </div>
                    </Card>
                    <Card title="各部门平台应用统计" bordered={false} className={st.card}>
                        <div className={st.time}>
                            <RangePicker onChange={this.onChange2} defaultValue={[moment("20180601", "YYYYMMDD"), moment("20180701", "YYYYMMDD")]} />
                        </div>
                        <div className={st.chart} id='chart2'>
                        </div>
                    </Card>
                    <Card title="各部门总体使用统计" bordered={false} className={st.card}>
                        <div className={st.time}>
                            <RangePicker onChange={this.onChange3} defaultValue={[moment("20180601", "YYYYMMDD"), moment("20180701", "YYYYMMDD")]} />
                        </div>
                        <div className={st.chart} id='chart3'>
                        </div>
                    </Card>
                    <Card title="平台总体使用对比" bordered={false} className={st.card}>
                        <div className={st.chart} id='chart5' style={{ height: 333 }}>
                        </div>
                    </Card>
                    <Card title="平台总体使用统计" bordered={false} className={st.card}>
                        <div className={st.chart} id='chart6' style={{ height: 333 }}>
                        </div>
                    </Card>
                </div>

            </div>
        );
    }
}
export default Usage;