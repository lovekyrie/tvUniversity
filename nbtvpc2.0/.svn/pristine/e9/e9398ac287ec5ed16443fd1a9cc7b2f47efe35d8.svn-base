// require ('assets/css/init.less');
// require ('assets/css/base.less');

import Vue from 'vue';

require ('assets/css/index.less');

require ('assets/css/common.css');

import 'element-ui/lib/theme-default/index.css'

import "babel-polyfill";// 解决 IE11 Promise对象未定义

import axios from 'axios';

import ElementUI from 'element-ui'

Vue.use(ElementUI)

import {until} from 'assets/js/until'
Vue.prototype.until = new until();



Vue.prototype.axios = axios;

import C from './conf'; 	//全局的站点配置文件
import M from './common'; 	//全局的共用事件
import './iconfont'  //字体库

import vueFilter from './vueFilter';  	//全局过滤器




export default{
	M,
	C,
}