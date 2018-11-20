import React, {Component} from 'react';
import {
    HashRouter,
    Router,
    Link,
    Switch,
    Route
} from 'react-router-dom';


import App from "../../pages/App/index"
import Content from "../../pages/content/index"
import Home from "../../pages/home/index"

export default class RouterIndex extends Component {
    render() {
        return (
            <div>

                <ul>
                    <li>45664</li>
                </ul>

            <HashRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/content" component={Content} />
                    <Route path="/home" component={Home} />
                </Switch>
            </HashRouter>
            </div>
        );
    }
}
