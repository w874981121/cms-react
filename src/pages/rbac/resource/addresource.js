import React, {Component} from 'react';
import {
    Form, Input, Icon, Select, Modal
} from 'antd';
const {Option} = Select;


class AddResource extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }

    render() {
        const {
            getFieldDecorator,
        } = this.props.form;
        const {
            visible, onCancel, onCreate,
        } = this.props;
        return (
            <Modal
                visible={visible}
                title="添加权限"
                okText="添加"
                cancelText="取消"
                onCancel={onCancel}
                onOk={onCreate}
                width="400px"
            >
                <Form layout="inline">
                    <Form.Item label="权限名称">
                        {getFieldDecorator(
                            "name", {
                                rules: [{required: true, whitespace:true, message: '请输入名称!'}]
                            },
                        )(
                            <Input prefix={<Icon type="audit" style={{color: '#cccccc'}}/>} placeholder="输入权限名称"/>
                        )}
                    </Form.Item>
                    <Form.Item label="权限等级">
                        {getFieldDecorator(
                            "grade", {
                                rules: [{required: true}],
                                initialValue:"0",
                            },
                        )(
                            <Select>
                                <Option value="0">等级0</Option>
                                <Option value="1">等级1</Option>
                                <Option value="2">等级2</Option>
                                <Option value="3">等级3</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label="权限描述">
                        {getFieldDecorator(
                            "address", {
                                rules: [{required: true, whitespace:true, message: '请输入描述!'}]
                            },
                        )(
                            <Input prefix={<Icon type="highlight" style={{color: '#cccccc'}}/>} placeholder="输入描述"/>
                        )}
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}


export default Form.create({name: 'AddResource'})(AddResource);