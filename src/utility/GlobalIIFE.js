import {MAIN} from "../config/config"  // 页面配置文件
import {setTitle,setStore} from "./utility";


//自执行s
(()=>{
    setStore("MAIN",MAIN); //存储配置文件
    setTitle(MAIN.title);  //修改   document.title
    console.log("自执行函数调用结束")
})()
