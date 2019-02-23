import React, {Component} from 'react';
import './index.scss'
import { Row, Col } from 'antd';

export default class Top extends Component {
    
    render() {
        return (
            <div className="top">
                <Row>
                    <Col span={4}>LOGO占位</Col>
                    <Col span={16}>CMS系统</Col>
                    <Col span={4}>退出占位</Col>
                </Row>
            </div>
        );
    }
    
}

