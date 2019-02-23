import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.scss'
// import {Menu} from "antd/lib/menu";

import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

export default class LeftNav extends Component {
    render() {
        return (

            <Menu
                mode="inline"
                defaultSelectedKeys={['4']}
                defaultOpenKeys={['sub2']}
                onClick={this.onCLicks}
                style={{height: '100%', borderRight: 0}}
            >
                <SubMenu key="sub1" title={<span><Icon type="user"/>权限管理</span>}>
                    <Menu.Item key="1">
                        <NavLink to="/resource">
                            权限
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to="/">
                            角色
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink to="/">
                            用户
                        </NavLink>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop"/>文件上传</span>}>
                    <Menu.Item key="4">
                        <NavLink to="/">
                            欢迎
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <NavLink to="/uploadimg">
                            图片
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <NavLink to="/uploadfile">
                            文件
                        </NavLink>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification"/>模板</span>}>
                    <Menu.Item key="9">组团商品详情</Menu.Item>
                    <Menu.Item key="10">商品详情</Menu.Item>
                    <Menu.Item key="11">组团详情</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}
