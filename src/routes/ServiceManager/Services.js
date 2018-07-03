import { Component } from 'react';
import { Tabs, Icon, Form, Input, Button, Table } from 'antd';
import st from './Services.less';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const mapServices = [
  {
    id: 1,
    name: '工业企业',
    department: '国土',
    date: '2018-05-13',
  },
  {
    id: 2,
    name: '工业用地',
    department: '国土',
    date: '2018-05-13',
  },
  {
    id: 3,
    name: '法人单位',
    department: '财政',
    date: '2018-06-24',
  },
  {
    id: 4,
    name: '楼宇经济',
    department: '财政',
    date: '2018-06-24',
  },
  {
    id: 5,
    name: '体育设施',
    department: '教育',
    date: '2018-06-07',
  },
  {
    id: 6,
    name: '视频监控',
    department: '公安',
    date: '2018-06-01',
  },
];

const mapServices2 = mapServices.map(i => i).reverse();

const columns = [
  {
    title: '服务名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '隶属部门',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: '发布时间',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">删除</a>
      </span>
    ),
  },
];

const applies = [
  {
    id: 1,
    name: '工业企业',
    department: '财政',
    date: '2018-07-13',
  },
  {
    id: 2,
    name: '视频监控',
    department: '国土',
    date: '2018-06-13',
  },
];

const columns2 = [
  {
    title: '申请内容',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '申请部门',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: '申请时间',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">审核</a>
      </span>
    ),
  },
];

const applies2 = applies.map(i => i).reverse();

const mappingServices = [];

class Services extends Component {
  render() {
    return (
      <div className={st.Services}>
        <Tabs defaultActiveKey="1" tabPosition="left" style={{ height: '100%' }}>
          <TabPane
            tab={
              <span>
                <Icon type="global" />地图服务
              </span>
            }
            key="1"
          >
            <div className={st.tabpane}>
              <div className={st.tabpanetitle}>
                地图服务
                <div>
                  <Button type="primary" size="small">
                    新增
                  </Button>&emsp;
                  <Button size="small">删除</Button>&emsp;
                </div>
              </div>
              <div className={st.tabpanecontent}>
                <div>
                  <Table columns={columns} dataSource={mapServices} pagination={false} />
                </div>
                <div>
                  <FormItem {...formItemLayout} label="服务名称">
                    <Input defaultValue="工业企业分布" />
                  </FormItem>
                  <FormItem {...formItemLayout} label="发布时间">
                    <Input defaultValue="2018年6月12日" />
                  </FormItem>
                  <FormItem {...formItemLayout} label="来源部门">
                    <Input defaultValue="国土" />
                  </FormItem>
                  <FormItem {...formItemLayout} label="服务地址">
                    <Input defaultValue="http://xxxx.yyyyy.com/gyyd/mapservice" />
                  </FormItem>
                  <FormItem {...formItemLayout} label="调用说明">
                    <Input.TextArea defaultValue="wmts服务，CGCS2000坐标" />
                  </FormItem>
                  <FormItem style={{ textAlign: 'center' }}>
                    <Button type="primary">保存</Button>
                  </FormItem>
                </div>
              </div>
            </div>
            <div className={st.tabpane}>
              <div className={st.tabpanetitle}>服务申请</div>
              <div className={st.tabpanecontent}>
                <div>
                  <Table columns={columns2} dataSource={applies} pagination={false} />
                </div>
                <div>
                  <FormItem {...formItemLayout} label="申请部门">
                    <Input defaultValue="财政" />
                  </FormItem>
                  <FormItem {...formItemLayout} label="申请人">
                    <Input defaultValue="李四" />
                  </FormItem>
                  <FormItem {...formItemLayout} label="申请内容">
                    <Input defaultValue="工业企业分布" />
                  </FormItem>
                  <FormItem {...formItemLayout} label="申请说明">
                    <Input.TextArea defaultValue="用于统计财政收入" />
                  </FormItem>
                  <FormItem style={{ textAlign: 'center' }}>
                    <Button type="primary">通过</Button>&emsp;
                    <Button>打回</Button>&emsp;
                  </FormItem>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              <span>
                <Icon type="database" />数据服务
              </span>
            }
            key="2"
          >
            <div className={st.tabpane}>
              <div className={st.tabpanetitle}>
                数据服务
                <div>
                  <Button type="primary" size="small">
                    新增
                  </Button>&emsp;
                  <Button size="small">删除</Button>&emsp;
                </div>
              </div>
              <div className={st.tabpanecontent}>
                <div>
                  <Table columns={columns} dataSource={mapServices2} pagination={false} />
                </div>
                <div>
                  <FormItem {...formItemLayout} label="服务名称">
                    <Input defaultValue="工业企业" />
                  </FormItem>
                  <FormItem {...formItemLayout} label="发布时间">
                    <Input defaultValue="2018年4月28日" />
                  </FormItem>
                  <FormItem {...formItemLayout} label="来源部门">
                    <Input defaultValue="国土" />
                  </FormItem>
                  <FormItem {...formItemLayout} label="服务地址">
                    <Input defaultValue="http://xxxx.ccc.xxx/gyqy/" />
                  </FormItem>
                  <FormItem {...formItemLayout} label="调用说明">
                    <Input.TextArea defaultValue="webservice" />
                  </FormItem>
                  <FormItem style={{ textAlign: 'center' }}>
                    <Button type="primary">保存</Button>
                  </FormItem>
                </div>
              </div>
            </div>
            <div className={st.tabpane}>
              <div className={st.tabpanetitle}>服务申请</div>
              <div className={st.tabpanecontent}>
                <div>
                  <Table columns={columns2} dataSource={applies2} pagination={false} />
                </div>
                <div>
                  <FormItem {...formItemLayout} label="申请部门">
                    <Input defaultValue="税务" />
                  </FormItem>
                  <FormItem {...formItemLayout} label="申请人">
                    <Input defaultValue="李四" />
                  </FormItem>
                  <FormItem {...formItemLayout} label="申请内容">
                    <Input defaultValue="企业数据" />
                  </FormItem>
                  <FormItem {...formItemLayout} label="申请说明">
                    <Input.TextArea defaultValue="用于企业用地统计" />
                  </FormItem>
                  <FormItem style={{ textAlign: 'center' }}>
                    <Button type="primary">通过</Button>&emsp;
                    <Button>打回</Button>&emsp;
                  </FormItem>
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Services;
