import React, {Component} from 'react';
import {Button} from 'antd';
import Tablelist from '../../../components/table'
import './index.scss'
import Api from "../../../api/api"

export default class Resource extends Component {
    constructor() {
        super()
        this.state = {
            tabasList: {}
        }
       this.queryResource();
    }

    queryResource(obj) {
        let pami;
        if(obj){
            pami = obj
        }
        Api.queryresources(pami).then(res => {
            this.setState({
                tabasList: res.data
            })
        });
    }

    render() {
        return (
            <div className="resource">
                <div className="flex-start ml20 mt20">
                    <Button icon="plus">添加权限</Button>
                    <Button className="ml20" icon="search" onClick={this.queryResource.bind(this)}>查询权限</Button>
                </div>
                <Tablelist data={this.state.tabasList}/>
            </div>
        );
    }
}
