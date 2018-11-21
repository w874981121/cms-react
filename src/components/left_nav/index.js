import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Menu, Layout} from 'element-react';


class LeftNav extends Component{
    constructor(props){
        super(props);
        console.log(this)
        // this.onSelect(this.props.location.pathname)
    }
    render(){
        return (
            
                <Layout.Col span={ 8 }>
                    
                    <Link to="/"></Link>
                    
                    <Link to="/uploadfile">文件上传</Link>
                    
                    <Link to="/uploadimg">图片上传</Link>
                
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
}

export default LeftNav
