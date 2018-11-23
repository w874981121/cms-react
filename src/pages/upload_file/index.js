import React, {Component} from 'react';
import {Upload} from "element-react"

export default class UploadFile extends Component {
    render() {
        return (
            <Upload
                className="upload-demo"
                drag
                action="//jsonplaceholder.typicode.com/posts/"
                multiple
                tip={<div className="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>}
            >
                <i className="el-icon-upload"></i>
                <div className="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </Upload>
        )
    }
}
