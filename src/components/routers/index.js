import React, {Component} from 'react';
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';


import Welcome from "../../pages/welcome/index"
import UploadImg from "../../pages/upload_img/index"


export default class RouterIndex extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/uploadimg" component={UploadImg} />
                </Switch>
            </HashRouter>
        );
    }
}
