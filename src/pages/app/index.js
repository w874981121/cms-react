import React, {Component} from 'react';
import {HashRouter, NavLink} from 'react-router-dom';

import Top from "../../components/top";
import LeftNav from "../../components/nav";
import RouterIndex from "../../components/routers";
import Footers from '../../components/footer'


import './index.scss'
import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const {SubMenu} = Menu;
const {Header, Content, Sider, Footer} = Layout;
export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Layout>
                    <Header>
                        <Top/>
                    </Header>
                    <Layout style={{padding: '0'}}>
                        <Sider width={200} style={{background: '#fff'}}>
                            <LeftNav/>
                        </Sider>
                        <Layout style={{padding: '0 24px 0'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 400}}>
                                <RouterIndex/>
                            </Content>
                        </Layout>
                    </Layout>
                    <Footer>
                        <Footers/>
                    </Footer>
                </Layout>
            </HashRouter>
        );

        //
        // return (
        //     <HashRouter>
        //         <div className="app">
        //             <div className="app_top">
        //                 <Top />
        //             </div>
        //             <div className="app_center">
        //                 <div className="app_left">
        //                     <LeftNav />
        //                 </div>
        //
        //                 <div className="app_content">
        //                     <RouterIndex />
        //                 </div>
        //             </div>
        //             <div className="footer">
        //                 <Footer/>
        //             </div>
        //         </div>
        //     </HashRouter>
        // )
    }

    //跳转函数
    onCLicks = (item, key, keyPath) => {
        console.log(item)
        console.log(key)
        console.log(keyPath)
    }
}
