/**
 *
 * REQUEST 封裝
 *
 *
 */
import axios from 'axios'
import qs from 'qs'

class Request {
    /**
     *
     * 接收对象两个参数，
     * header   针对IP传入请求头
     * baseUrl  必传参数，服务地址
     *
     */
    constructor({
                    header,
                    baseUrl
                }) {
       this.axiosFn =  this.init(baseUrl, header)
    }

    /**
     *
     * 请求公共方法
     * 可在此设置全局请求相关
     * 公共方法
     * loading
     * 失败处理
     * 等
     *
     */
    init(baseUrl, header) {
        const instance = axios.create({
            baseURL: baseUrl,
            // 用于请求之前对请求数据进行操作
            // 只用当请求方法为‘PUT’，‘POST’和‘PATCH’时可用
            // 最后一个函数需return出相应数据
            // 可以修改headers
            transformRequest: [function (data, headers) {
                // 可以对data做任何操作

                return data;
            }],

            // 用于对相应数据进行处理
            // 它会通过then或者catch
            transformResponse: [function (data) {
                // 可以对data做任何操作
                return data;
            }],
            withCredentials: false,
            timeout: 20 * 1000,
            headers: Object.assign({}, header),
            // 响应格式
            // 可选项 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
            responseType: 'json', // 默认值是json
        });


// http request拦截器  发送
        instance.interceptors.request.use(
            config => {
                return config
            },
            err => {
                return Promise.reject(err);
            }
        )

// http response 拦截器  返回
        instance.interceptors.response.use(
            response => {
                return response
            },
            error => {
                if (error.response) {
                    switch (error.response.status) {
                        case 401:
                            console.error("错误：401")
                            break;
                        default:
                            return Promise.reject(error)
                    }
                }
                return Promise.reject(error)
            }
        )
        return instance
    }

    requestFn(method, url, data, header, resCallback, errCallbackreject) {
        let _req_config ={
            url: url,
            header: Object.assign({}, header),
            method: method,
        }
        //区分入参方式
        if(method === "post"){
            _req_config.data = qs.stringify(data);
        }else if(method === "get"){
            _req_config.params = data;
        }
        this.axiosFn(_req_config).then(res=>{
            resCallback(res)
        }).catch(err=>{
            errCallbackreject(err)
        })
    }

    /**
     *
     * 请求方法：
     *   可参考post或get，修改请求方式字段按即可
     *   方法可接收三个参数
     *   url 请求地址
     *   data 请求入参
     *   header 修改请求头
     */
    post(url, data, header) {
        return  new Promise((resolve, reject) => {
            this.requestFn("post", url, data, header, resolve, reject)
        })
    }

    get(url, data, header) {
        return new Promise((resolve, reject) => {
            this.requestFn("get", url, data, header, resolve, reject)
        })
    }

}

export default Request