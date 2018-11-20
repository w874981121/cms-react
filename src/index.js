import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router
} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './pages/app/index';
import 'element-theme-default';


class Index extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <Router>
                <App props={this}/>
            </Router>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
serviceWorker.unregister();
