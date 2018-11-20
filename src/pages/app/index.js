import React, {Component} from 'react';
import {HashRouter as Router,NavLink} from 'react-router-dom';
import RouterIndex from "../../components/routers";
import {Menu, Layout, Icon} from 'element-react';
import PropTypes from 'prop-types'


 class App extends Component{
     static contextTypes = {
         router: PropTypes.object
     }
    constructor(props) {
        super(props);
    }
    render(){
            return (
                <div>
                    <Layout.Col span={ 8 }>
                        <Menu defaultActive="1-1" className="el-menu-vertical-demo" onSelect={this.onSelect.bind(this)} onOpen={ this.onOpen.bind(this) } onClose={ this.onClose.bind(this) }>
                            <Menu.SubMenu index="1" title={ <span><i className="el-icon-message"></i>导航一</span> }>
                                <Menu.ItemGroup title="分组一">
                                    <Menu.Item index="1-1">
                                        <NavLink to="/UploadImg"><Icon type="team" />用户列表</NavLink>
                                    </Menu.Item>
                                    <Menu.Item index="1-2">
                                        <NavLink to="/"><Icon type="team" />用户列表2</NavLink>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup title="分组2">
                                    <Menu.Item index="1-3">选项3</Menu.Item>
                                </Menu.ItemGroup>
                            </Menu.SubMenu>
                            <Menu.Item index="2"><i className="el-icon-menu"></i>导航二</Menu.Item>
                            <Menu.Item index="3"><i className="el-icon-setting"></i>导航三</Menu.Item>
                        </Menu>
                    </Layout.Col>
                    <RouterIndex/>
                </div>
            )
    }
    
    
    onOpen(e){
        console.log("onOpen")
        console.log(e)
    }
    onClose(e){
        console.log("onClose")
        console.log(e)
    }
    onSelect(e){
        console.log("onSelect")
        console.log(e)
        console.log(this)

    }
}


export default App
