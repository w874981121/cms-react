import React, {Component} from 'react';
import {Button} from 'antd';
import Tablelist from '../../../components/table'
import AddResource from './addresource'
import './index.scss'
import Api from "../../../api/api"

export default class Resource extends Component {
    constructor() {
        super()
        this.state = {
            tabasList: {},
            visible: false,
        }
        this.queryResource();
    }

    //查询
    queryResource(obj) {
        let pami;
        if (obj) {
            pami = obj
        }
        Api.queryresources(pami).then(res => {
            this.setState({
                tabasList: res.data
            })
        });
    }

    //窗口状态
    showModal = () => {
        this.setState({visible: true});
    }

    //添加窗口取消
    handleCancel = () => {
        this.setState({visible: false});
    }

    //添加成功
    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            Api.addresource(values).then(res=>{
                console.log(res)
                if(res.data.code === 200){
                    this.queryResource();
                }
            });
            form.resetFields();
            this.setState({visible: false});
        });
    }
    //删除
    deleteResource = (_id)=>{
        Api.deleteresource({_id: _id}).then(res=>{
            if(res.data.code === 200)  this.queryResource();
        });
    }

    // from模块实例对象formRef
    saveFormRef = (formRef) => {
        console.log(formRef)
        this.formRef = formRef;
    }

    render() {
        return (
            <div className="resource">
                <div className="flex-start ml20 mt20">
                    <Button icon="plus" onClick={this.showModal}>
                        添加权限
                    </Button>
                    <Button className="ml20" icon="search" onClick={this.queryResource.bind(this)}>查询权限</Button>
                </div>
                <Tablelist data={this.state.tabasList} deleteResource={this.deleteResource} />
                <AddResource
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}
