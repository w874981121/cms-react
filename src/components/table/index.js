import React, {Component} from 'react';
import './index.scss'
import {Button, Table} from 'antd';

export default class TableList extends Component {
    render() {
        const {deleteResource,showModify} = this.props
        const columns = [{
            title: '权限名称',
            dataIndex: 'name',
            key: 'name',
        },{
            title: '权限ID',
            dataIndex: 'id',
            key: 'id',
            align: "center"
        }, {
            title: '权限等级',
            dataIndex: 'grade',
            key: 'grade',
            align: "center"
        },{
            title: '权限状态',
            dataIndex: 'state',
            key: 'state',
            align: "center",
            render : (text, record) => {
                return record.state ? "可用":"不可用"
            }
        }, {
            title: '权限描述',
            dataIndex: 'address',
            key: 'address',
            align: "center"
        }, {
            title: '操作',
            dataIndex: '_id',
            columnWidth: "30",
            key: '_id',
            align: "center",
            width: "210px",
            render: (text, record) => (
                <div className="space-between">
                    <Button icon="edit" onClick={showModify.bind(this,record)}>修改</Button>
                    <Button type="danger" icon="close" onClick={deleteResource.bind(this,record._id)}>删除</Button>
                </div>
            ),
        }];
        return (
            <div className="TableList m20">
                <Table dataSource={this.props.data.data} columns={columns} rowKey={record => record.id} bordered/>
            </div>
        );
    }
}
