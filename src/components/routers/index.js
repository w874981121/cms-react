import React, {Component} from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import Welcome from "../../pages/welcome/index"
import UploadImg from "../../pages/upload_img/index"
import UploadFile from "../../pages/upload_file/index"
import Resource from "../../pages/rbac/resource/resource"


export default class RouterIndex extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={ Welcome } />
                    <Route path="/uploadfile" component={ UploadFile } />
                    <Route path="/uploadimg" component={ UploadImg } />
                    <Route path="/resource" component={ Resource } />
                </Switch>
            </div>
        );
    }
}
