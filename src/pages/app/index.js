import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
// import PropTypes from 'prop-types'
import LeftNav from "../../components/left_nav";
import RouterIndex from "../../components/routers";
import {Layout} from 'element-react';
import './index.scss'


export default class App extends Component{
    render(){
        return (
            <HashRouter>
                <div class="app">
                    <div class="app_left">
                        <LeftNav />
                    </div>
                    
                    <div class="app_content">
                        <RouterIndex />
                    </div>
                
                </div>
            </HashRouter>
        )
    }
}
