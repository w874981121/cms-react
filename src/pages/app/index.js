import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import Top from "../../components/top";
import LeftNav from "../../components/left_nav";
import RouterIndex from "../../components/routers";
import Footer from  '../../components/footer'
import './index.scss'


export default class App extends Component{
    render(){
        return (
            <HashRouter>
                <div className="app">
                    <div className="app_top">
                        <Top />
                    </div>
                    <div className="app_center">
                        <div className="app_left">
                            <LeftNav />
                        </div>
                        
                        <div className="app_content">
                            <RouterIndex />
                        </div>
                    </div>
                    <div className="footer">
                        <Footer/>
                    </div>
                </div>
            </HashRouter>
        )
    }
}
