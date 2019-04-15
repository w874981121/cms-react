import React, {Component} from 'react';
import './index.scss';  //
export default class Standard extends Component {
    render() {
        return (
            <div id="standard" className="p20">
                <div className="title-h1">
                    <h1><strong>美店前端项目开发文档</strong></h1>
                    <p></p>
                </div>
                <h2><strong>Git使用规范</strong></h2>
                <h3><strong>【命名规范】</strong></h3>
                <ul className="ml20">
                    <li>创建特性分支，名称要以f_开头，加上特性名</li>
                    <li>创建发布分支，名称要以r_开头，加上预发布版本号</li>
                    <li>创建Bug修复分支，名称要以b_开头，加上Bug号，无BUG号备注Bug</li>
                    <li>创建标签，名称要以t_开头，加上发布版本号</li>
                    <li>不允许在pro uat master 上面修改代码，开发流程为在</li>
                </ul>
                <h3><strong>【使用规范】</strong></h3>
                <ul className="ml20">
                    <li>不允许在pro uat master 上面修改代码，开发流程为先创建自己的分支，完成功能后merge到uat，测试完成后merge到master，并保持自己的分支不受污染。</li>
                    <li>合并主分支前要先提交uat测试完成，合并到master,再次测试，最后合并到pro发布</li>
                    <li>每次提交必须写明注释，如果是修复Bug，请加上Bug号</li>
                    <li>合并分支时必须使用--no-ff参数，以保留合并历史轨迹</li>
                </ul>
            </div>
        );
    }
}
