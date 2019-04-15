import React, {Component} from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import Welcome from "../../pages/welcome/index"
import UploadImg from "../../pages/upload_img/index"
import UploadFile from "../../pages/upload_file/index"
import Resource from "../../pages/rbac/resource/resource"
/*项目相关*/
import MdStandard from "../../pages/archives/standard"
import DevelopmentRecord from "../../pages/archives/development_record"


export default class RouterIndex extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route path="/uploadfile" component={UploadFile}/>
                <Route path="/uploadimg" component={UploadImg}/>
                <Route path="/resource" component={Resource}/>
                <Route path="/mdstandard" component={MdStandard}/> {/*美店开发文档*/}
                <Route path="/developmentrecord" component={DevelopmentRecord}/>
            </Switch>
        );
    }
}
