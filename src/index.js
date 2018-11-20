import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RouterIndex from './components/routers/index';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 CMS-测试demo
//             </div>
//         );
//     }
// }

ReactDOM.render(<RouterIndex />, document.getElementById('root'));
serviceWorker.unregister();
