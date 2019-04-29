import React, {Component} from 'react';
import './index.scss'
import {Button, Table} from 'antd';
import Api from "../../api/api";

export default class TableList extends Component {
    constructor(props) {
        super(props)
        this.dataList =this.props.data
    }

    render() {
        const columns = [{
            title: 'id',
            dataIndex: '_id',
            key: '_id',
        }, {
            title: '权限名称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '权限等级',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '权限描述',
            dataIndex: 'address',
            key: 'address',
            align: "center"
        }, {
            title: '操作',
            dataIndex: 'id',
            columnWidth: "30",
            key: 'id',
            align: "center",
            width: "210px",
            render: (text, record) => (
                <div className="space-between">
                    <Button icon="edit">修改</Button>
                    <Button type="danger" icon="close" onClick={this.deleteResource.bind(record)}>删除</Button>
                </div>
            ),
        }];
        return (
            <div className="TableList m20">
                <Table dataSource={this.props.data.data} columns={columns} rowKey={record => record._id} bordered/>
            </div>
        );
    }

    deleteResource() {
        Api.deleteresource({_id: this._id});
    }
}
