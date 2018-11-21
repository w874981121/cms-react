import React, {Component} from 'react';
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';


import Welcome from "../../pages/welcome/index"
import UploadImg from "../../pages/upload_img/index"
import UploadFile from "../../pages/upload_file/index"


export default class RouterIndex extends Component {
    render() {
        return (
            
                <Switch>
                    <Route exact path="/welcome" component={Welcome} />
                    <Route path="/uploadfile" component={UploadFile} />
                    <Route path="/uploadimg" component={UploadImg} />
                </Switch>
           
        );
    }
}
