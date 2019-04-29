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
const ES = "TEST";  //本地测试环境切换
// const ES = "PRODUCTION";  //测试生产环境切换

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
        "uploadImg": ["post", "/upload"],  //上传图片
        "resource": ["post", "/rbac/addresource"],  //添加权限
        "queryresources": ["get", "/rbac/queryresources"],  //查询权限
        "deleteresource": ["get", "/rbac/deleteresource"]    //删除权限
    },
};

const URL = URL_LIST[ES];
module.exports = {
    URL,
    HEADER,
    INTERFACE
}