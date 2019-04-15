/**
 *
 * 公用方法集合
 * 2019-02-20
 *
 * */

//页面titile修改
export const setTitle = t => document.title = t ? t : "游冶郎-管理系统";

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
};
/**
 * 获取localStorage
 */
export const getStore = (name) => {
    if (!name) return;
    return window.localStorage.getItem(name);
};
/**
 * 清除localStorage
 */
export const clearStore = () => {
    window.localStorage.clear();
};

/**
 *
 * 设置cookie值
 * key:　name
 * value:　value
 * expires: 过期时间
 * path:路径  服务器路径
 * domain:域   域名
 * secure: 安全
 * */
export const setCookie = (name, value, expires, path, domain, secure) => {
    var cookie = name + '=' + encodeURIComponent(value);
    if (expires) cookie += ';expires=' + expires.toGMTString();
    if (path) cookie += ';path=' + path;
    if (domain) cookie += ';domain=' + domain;
    if (secure) cookie += ';secure';
    document.cookie = cookie;
};

/**
 * 获取cookie值
 * */
export const getCookie = (name) => {
    if (!name) return;
    let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    let r = document.cookie.match(reg);
    let context = ""
    if (r !== null) {
        return context = r[2];
    }
    return context == null || context === "" || context === "undefined" ? "" : encodeURIComponent(context);
};

/**
 * 获取url里的参数value (需要改进)
 * */
export const getQueryStringByName = (name) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    let context = "";
    if (r !== null) context = r[2];
    return context == null || context === "" || context === "undefined" ? "" : context;
};