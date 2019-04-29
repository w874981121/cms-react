import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.scss'

//页面配置文件
import {getStore} from "../../utility/utility";

//组件
import {Menu, Icon,} from 'antd';

const {SubMenu} = Menu;  //UI


export default class LeftNav extends Component {
    render() {
        const MAIN = JSON.parse(getStore("MAIN"));
        const keyFn= (i,l)=> l ? "nav"+i+l : "nav"+i;
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={['word1']}
                defaultOpenKeys={['sub2']}
                onClick={this.onCLicks}
                style={{height: '100%', borderRight: 0}}
            >
                {
                    MAIN.navlist.map((item,i) => {
                        let list = item.list.map((tem,l) => {
                                return (
                                <Menu.Item key={keyFn(i,l)}>
                                    <NavLink to={tem.url}>
                                        <Icon type={tem.icontype}/>
                                        {tem.name}
                                    </NavLink>
                                </Menu.Item>
                            )}
                        )
                        return (
                            <SubMenu key={keyFn(i)} title={<span><Icon type={item.icontype}/>{item.mainname}</span>}>
                                {list}
                            </SubMenu>
                        )
                    })

                }
            </Menu>
        )
    }
}
