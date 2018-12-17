require('assets/css/common.css');
require ('assets/css/index.less');
//注册时，vux必须放在 import Vue from 'vue'; 之前，否侧打包的体积非常大，估计是vux OR vue 抽风了
import { AlertPlugin,LoadingPlugin  } from 'vux'

import Vue from 'vue';

//------ VUX UI 注册，如果不需要  VUX UI 请删除以下注册 -------
Vue.use(AlertPlugin); //全局注册alert事件，注册之后，不需要每个页面都import alert
Vue.use(LoadingPlugin ); //全局注册alert事件，注册之后，不需要每个页面都import alert
//--- VUX UI 注册 END --


import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI)

import C from './conf';
import M from './common';

import vueFilter from './vueFilter';

import {until} from 'assets/js/until.js'
Vue.prototype.until = new until();

//解决click点击300毫秒延时问题
import FastClick from 'fastclick';
FastClick.attach(document.body);	

export default{
  M,C
}