import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Menu, Layout} from 'element-react';

class LeftNav extends Component{
    render(){
        return (
                <Layout.Col span={ 8 }>
                <Menu defaultActive="1-1" className="el-menu-vertical-demo" onSelect={this.onSelect.bind(this)} onOpen={ this.onOpen.bind(this) } onClose={ this.onClose.bind(this) }>
                    <Menu.Item index="/file"><i className="el-icon-menu"></i>文件上传</Menu.Item>
                    <Menu.Item index="/uploadimg"><i className="el-icon-setting"></i>图片上传</Menu.Item>
                </Menu>
            </Layout.Col>
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
    /*
    * 路径备注
    * */
    onSelect(e){
        let _nowPath = this.props.location.pathname
        if(e !== _nowPath){
            this.props.history.push(e)
        }
    }
}


export default withRouter(LeftNav)
