import { Component } from 'react';
import { Button, Input } from 'antd';
import st from './ApplyServices.less';

const { TextArea } = Input;

class ApplyServices extends Component {
  getMapServices() {
    var { mapServices } = this.props;
    return mapServices.map((e,i) => {
    return <div key={e.id}>({i+1}){e.name}({e.typeAlias})</div>;
    });
  }

  render() {
    return (
      <div className={st.applyservices + (this.props.mapServices.length ? ' active' : '')}>
        <div className={st.header}>服务申请</div>
        <div className={st.serviceslist}>{this.getMapServices()}</div>
        <TextArea placeHolder="使用说明" />
        <Button type="primary" onClick={this.props.applyServices}>申请服务</Button>
      </div>
    );
  }
}

export default ApplyServices;
