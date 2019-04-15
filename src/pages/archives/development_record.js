import React, {Component} from 'react';
import './index.scss';  //
//组件
export default class Development_record extends Component {
    render() {
        return (
            <div id="development_record" className="p20">
                <div className="title-h1">
                    <h1><strong>美店前端项目开发记录</strong></h1>
                </div>
                <h2><strong>分享规范</strong></h2>
                <h3><strong>【埋码规范】</strong></h3>
                <ul className="ml20">
                    <li>神策基础埋码</li>
                    <li>分享按钮自定义埋码</li>
                    <li>intcmp 站内页面链接跳转正确赋值</li>
                </ul>
                <h3><strong>【分享参数】</strong></h3>
                <p>(mid&stid: 用于记录分享者，传递给订单，计算佣金&门店业绩)</p>
                <p>(mid&stid: 分享时均取当前用户的mid和当前的stid)</p>
                <ul className="ml20">
                    <li>
                        <h4><strong>mid下单取值顺序：</strong></h4>
                        1、url获取的(mid)；<br/>
                        2、记录url的cookie(m_u_mid)；<br/>
                        3、自己的(m_s_mid)；<br/>
                        4、默认（861512）
                    </li>
                    <li>
                        <h4><strong>stid下单取值顺序：</strong></h4>
                        1、url获取的优先url(stid)；<br/>
                        2、记录url的cookie(m_u_stid)；<br/>
                        3、自己的(m_s_stid)。<br/>
                    </li>
                </ul>

                <h2><strong>购物流程</strong></h2>
                <h3><strong>选择SKU</strong></h3>
                <ul className="ml20">
                    <li>1、选择SKU，二级区域码调用价格活动接口返回实时sku数据进行数据切换</li>
                    <li>2、</li>
                    <li>3、</li>
                </ul>

            </div>
        );
    }
}
