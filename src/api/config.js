/**
 *
 * 接口/环境
 * 相关配置
 * wyq
 * DATA：2018/11/16
 *
 */

/**
 *
 * 环境变量：
 * 生产环境：PRODUCTION，
 * 测试环境：TEST
 *
 */
const ES = "TEST";
const URL_LIST = {
    // 线上测试环境
    PRODUCTION: {
        QD_CMS: "http://10.115.5.4:3000/", //node 服务
    },
    TEST: { //本地测试
        QD_CMS: "http://127.0.0.1:3000", //node 服务
    }
}

/**
 * //默认请求头
 * koa-router
 *
 */
const HEADER = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

/**
 *
 * 接口地址配置项
 * 对象“GOMES”<键值> 为接口IP或域名
 * 对象“getUserId”<key> 为接口方法名
 * 对象“getUserId”<value> 数组为接口配置项
 * 【0】请求类型
 * 【1】请求参数
 * 【2】是否需要携带Cookie
 *
 */
const INTERFACE = {
    "QD_CMS": {
        "uploadImg": ["post", "/upload"],
        "resource": ["post", "/rbac/addresource"],
        "queryresources": ["get", "/rbac/queryresources"],
        "deleteresource": ["get", "/rbac/deleteresource"]
    },
};

const URL = URL_LIST[ES];
module.exports = {
    ES,
    URL,
    HEADER,
    INTERFACE
}