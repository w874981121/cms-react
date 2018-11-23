import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.scss'


export default class LeftNav extends Component{
    render(){
        return (
            <div>
                <ul>
                    <li><NavLink className="" to="/"></NavLink></li>
                    <li><NavLink to="/uploadimg">图片上传</NavLink></li>
                    <li><NavLink to="/uploadfile">文件上传</NavLink></li>
                </ul>
            </div>
        )
    }
}
