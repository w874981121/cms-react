//第三方模块组件
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// 页面组件
import App from './pages/app/index';
import 'element-theme-default';
//功能组件
import "./utility/GlobalIIFE"              // 入场自执行





ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
