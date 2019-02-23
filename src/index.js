import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
/*
*
* 页面组件
* */
import App from './pages/app/index';
import 'element-theme-default';


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
