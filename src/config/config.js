/**
 *
 * 系统基础配置文件：
 * logo图
 * 使用方名称
 * 系统名称
 *
 *
 * */
export const MAIN={
    title:"前端管理系统",
    logo_img:"https://gfs9.gomein.net.cn/T1VnKvB7_T1RCvBVdK.png",
    companyname:"国美美店",
    background:"",
    color:"",
    navlist:[{
        mainname: "权限管理",
        power:"0",
        icontype:"lock",
        list:[{
            name:"权限",
            power:"0",
            icontype:"crown",
            url:"/resource",
        },{
            name:"角色",
            power:"0",
            icontype:"team",
            url:"",
        },{
            name:"用户",
            power:"0",
            icontype:"user",
            url:"",
        }]
    },{
        mainname: "美店前端",
        power:"0",
        icontype:"solution",
        list:[{
            name:"项目开发文档",
            power:"0",
            icontype:"profile",
            url:"/mdstandard",
        },{
            name:"项目开发记录",
            power:"0",
            icontype:"profile",
            url:"/developmentrecord",
        }]
    }]
}
