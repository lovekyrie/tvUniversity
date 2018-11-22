require ('assets/css/index.less');
require ('assets/css/common.css');

import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'

import "babel-polyfill";// 解决 IE11 Promise对象未定义
import axios from 'axios';
import vueFilter from './vueFilter';  	//全局过滤器
import {until,reg} from 'assets/js/until'
import 'assets/js/wconfig.js';
import './iconfont'  //字体库

import {Query} from 'assets/js/query'
export default{
  install(Vue){
    Vue.use(ElementUI)
    Vue.prototype.axios = axios;
    Vue.prototype.until = new until();
    Vue.prototype.reg = new reg();
    Vue.prototype.Query = Query;
  }
}


