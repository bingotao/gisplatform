import { Component } from 'react';
import $ from 'jquery';
import { Button, Input, Radio, notification, message } from 'antd';
import st from './ServicePanel.less';

const TextArea = Input.TextArea;
const RadioGroup = Radio.Group;

class ServicePanel extends Component {
  state = {
    results: null,
  };

  testService() {
    var { url, params } = this.props.service;
    if (url) {
      var newParams = {};
      var where = [];
      for (let p of params) {
        let value = p.value || p.defaultValue;
        if (p.where) {
          if (value) {
            if (p.type === 'text') where.push(`${p.field}='${value}'`);
            else where.push(`${p.field}=${value}`);
          }
        } else {
          newParams[p.field] = value;
        }
      }
      newParams.where = where.length ? where.join(' and ') : '1=1';
      message.loading('服务请求中，请稍后...');
      //   $.post(
      //     url,
      //     newParams,
      //     e => {
      //       this.setState({ results: e });
      //     },
      //     'text'
      //   )
      //   .error(e => {
      //     notification.error({
      //       description: '请求超时',
      //       message: '错误',
      //     });
      //   });

      $.ajax(url, {
        data: newParams,
        dataType: 'text',
        method: 'POST',
        success: e => {
          this.setState({ results: e });
        },
        error: e => {
          notification.error({
            description: '请求超时',
            message: '错误',
          });
        },
      });
    } else {
      notification.error({
        description: '请先在资源目录中选择服务',
        message: '错误',
      });
    }
  }

  getParamsCmps() {
    let { params } = this.props.service;
    let cmps = [];
    if (params) {
      for (let p of params) {
        if (p.show !== false) {
          switch (p.type) {
            case 'text':
              cmps.push(
                <div key={p.id} className={st.paramsitem}>
                  <div>{p.name}：</div>
                  <Input defaultValue={p.defaultValue} onChange={e => (p.value = e.target.value)} />
                </div>
              );
              break;
            case 'radio':
              cmps.push(
                <div key={p.id} className={st.paramsitem}>
                  <div>{p.name}：</div>
                  <RadioGroup
                    defaultValue={p.defaultValue}
                    onChange={e => (p.value = e.target.value)}
                  >
                    {p.values.map(i => <Radio value={i}>{i + ''}</Radio>)}
                  </RadioGroup>
                </div>
              );
              break;
          }
        }
      }
    }
    return cmps;
  }

  render() {
    const { service } = this.props;
    const s = service;
    return (
      <div className={st.servicepanel}>
        <div className={st.servicedetails}>
          <div className={st.serviceheader}>{s.name || '服务名称'}</div>
          <div className={st.servicedetialsitem}>
            <div>地址：</div>
            <div>{s.url || '无'}</div>
          </div>
          <div className={st.servicedetialsitem}>
            <div>方法：</div>
            <div>{s.method || '无'}</div>
          </div>
          <div className={st.servicedetialsitem}>
            <div>说明：</div>
            <div>{s.description || '无'}</div>
          </div>
        </div>
        <div className={st.serivceparams}>
          <div className={st.serviceheader}>参数列表</div>
          {this.getParamsCmps()}
          <Button type="primary" onClick={e => this.testService()}>
            测试
          </Button>
        </div>
        <div className={st.servicetest}>
          <div className={st.testresult}>{this.state.results}</div>
        </div>
      </div>
    );
  }
}

export default ServicePanel;
