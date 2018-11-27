import React, {Component} from 'react';
import {Upload, Button} from "element-react"
import Api from "../../api/api"

export default class UploadImg extends Component {
    render() {
        const fileList2 = [
            {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'},
            {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'}
        ]
        return (
            <div>
                <Upload
                    className="upload-demo"
                    action="//jsonplaceholder.typicode.com/posts/"
                    onPreview={file => this.handlePreview(file)}
                    onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                    fileList={fileList2}
                    listType="picture"
                    tip={<div className="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>}>
                    <Button size="small" type="primary">点击上传</Button>
                </Upload>
                <button onClick={this.onClickApi}>调用</button>
            </div>
        )
    }

    handleRemove(file, fileList) {
        console.log(file, fileList);
    }

    handlePreview(file) {
        console.log(file);
    }
    onClickApi(){
        console.log("/-/*//-*/-*-*-*/-")

        // console.log(Api.uploadImg)
        Api.uploadImg({name:"1111111111"})

        // Api.uploadImg({name:"9998978977897897"}).then(res=>{
        //     console.log("65566546465")
        // })
    }
}
