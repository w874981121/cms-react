/**
 * 
 * URL 请求IP
 * HEADER 默认请求类型头
 * 方法写入app.js内
 * app.API.getUserId().then(res => { console.log(res) })
 * 
 */


import Request from './request.js'
import {
  ES,
  URL,
  HEADER,
  INTERFACE
} from './config.js'


/**
 * 
 * 接口生成
 * 
 */
class ApiList {
  constructor(Url, Herder, Interface, ES){
    this.ES = ES;
    let _this = this;
      return (function (a, b) {
        console.log(new Date().getTime());
        for (let k in a) {
          let obj = {
            baseUrl: b[k],  //ip地址
            header: Herder   //默认请求头
          }
          let fn = new Request(obj);
          for (let f in a[k]) {
            let mode = a[k][f][0]  //请求类型
            let url = a[k][f][1];  //请求地址
            _this[f] = (params, header) => {
              let headers =  Object.assign({}, Herder, header);
                return fn[mode](url, params, headers)
            };
          }
        };
      })(Interface, Url);
  }
}



const Api = new ApiList(URL, HEADER, INTERFACE, ES)


export default Api


