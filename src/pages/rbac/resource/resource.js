import React, {Component} from 'react';

import './index.scss'
import Api from "../../../api/api"

// let is = 0;
export default class Resource extends Component {
    render() {
        return (
            <div className="resource">
                <button onClick={this.addResource}>
                    添加
                </button>


                <button onClick={this.queryResource}>
                    查询
                </button>

                <button onClick={this.deleteResource}>
                    删除
                </button>
            </div>
        );
    }
    addResource(){
        Api.resource({name:"879898"});
    }
    queryResource(){
        Api.queryresources();
    }
    deleteResource(){
        Api.deleteresource({name:"超级管理员"});
    }
}
