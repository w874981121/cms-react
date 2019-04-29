import React, {Component} from 'react';
import './index.scss'
import { Row, Col } from 'antd';
import {getStore} from "../../utility/utility";

export default class Top extends Component {
    render() {
        const MAIN = JSON.parse(getStore("MAIN"));
        return (
            <div className="top">
                <Row>
                    <Col span={4}>
                        <div className="logoImg">
                            <img src={MAIN.logo_img} alt="国美美店"/>国美美店
                        </div>
                    </Col>
                    <Col span={16} className="tc">
                        {MAIN.title}
                    </Col>
                    {/*<Col span={4} className="tc">退出</Col>*/}
                </Row>
            </div>
        );
    }
    
}

