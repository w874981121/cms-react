import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import Top from "../../components/top";
import LeftNav from "../../components/nav";
import RouterIndex from "../../components/routers";
import Footers from '../../components/footer'


import './index.scss'
import {
    Layout, Breadcrumb,
} from 'antd';

const {Header, Content, Sider, Footer} = Layout;
export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Layout style={{height:"100%"}}>
                    <Header>
                        <Top/>
                    </Header>
                    <Layout style={{padding: '0'}}>
                        {/*左侧导航*/}
                        <Sider width={200} style={{background: '#fff'}}>
                            <LeftNav/>
                        </Sider>
                        {/*右侧布局*/}
                        <Layout style={{padding: '0 20px 0'}}>
                            {/*面包屑*/}
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            {/*内容区*/}
                            <Content  style={{background: '#fff',overflow: 'auto'}}>
                                <RouterIndex/>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                                <Footers/>
                            </Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </HashRouter>
        );
    }
}
