import React, {Component} from 'react';
import {Button} from 'antd';
import Tablelist from '../../../components/table'
import AddResource from './addresource'
import ModifyResource from './modifyresource'
import './index.scss'
import Api from "../../../api/api"

export default class Resource extends Component {
    constructor() {
        super()
        this.state = {
            tabasList: {},
            visible: false,
            modifystate: false,
            modifyObject:{
                name:"",
                address:"",
                grade:"0"
            },
        };
        this.queryResource();
    }
    //查询
    queryResource() {
        Api.queryresources().then(res => {
            console.log(res)
            if (res.data.code !== 200) {
                return
            }
            this.setState({
                tabasList: res.data
            })
        });
    }

    //添加窗口状态打开
    showModal = () => {
        this.setState({visible: true});
    }

    //修改窗口状态打开
    showModify = (res) => {
        console.log(res)

        this.setState({
            modifystate: true,
            modifyObject: res,
        });
    }
    //添加窗口取消
    handleCancel = () => {
        this.setState({visible: false});
    }

    //修改窗口状态取消
    handModify= () => {
        this.setState({modifystate: false});
    }

    //添加成功
    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            Api.addresource(values).then(res => {
                console.log(res)
                if (res.data.code === 200) {
                    this.queryResource();
                }
            });
            form.resetFields();
            this.setState({visible: false});
        });
    }
    //修改成功回调执行
    handleModify= () => {
        const form = this.modifyformRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            values = Object.assign({
                _id: this.modifyformRef.props.modifyObject._id
            },values)

            Api.modifyresource(values).then(res => {
                console.log(res)
                if (res.data.code === 200) {
                    this.queryResource();
                }
            });
            form.resetFields();
            this.setState({modifystate: false});
        });
    }
    //删除
    deleteResource = (_id) => {
        Api.deleteresource({_id: _id}).then(res => {
            if (res.data.code === 200) this.queryResource();
        });
    }

    // from模块实例对象formRef
    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }
    modifyFormRef = (formRef) => {
        this.modifyformRef = formRef;
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
                <Tablelist data={this.state.tabasList} deleteResource={this.deleteResource} showModify={this.showModify}/>
                <AddResource
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
                <ModifyResource
                    wrappedComponentRef={this.modifyFormRef}
                    visible={this.state.modifystate}
                    modifyObject={this.state.modifyObject}
                    onCancel={this.handModify}
                    onCreate={this.handleModify}
                />
            </div>
        );
    }
}
