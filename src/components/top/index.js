import React, {Component} from 'react';
import './index.scss'
import { Row, Col } from 'antd';

export default class Top extends Component {
    
    render() {
        return (
            <div className="top">
                <Row>
                    <Col span={4}>
                        <div className="logoImg">
                            <img src="https://gfs9.gomein.net.cn/T1VnKvB7_T1RCvBVdK.png" alt="国美美店"/>国美美店
                        </div>
                    </Col>
                    <Col span={16} className="tc">
                        美店前端CMS系统
                    </Col>
                    {/*<Col span={4} className="tc">退出</Col>*/}
                </Row>
            </div>
        );
    }
    
}

