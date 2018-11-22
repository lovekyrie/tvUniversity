// import "babel-polyfill";
import Vue from 'vue';

import Lib from 'assets/js/Lib';
import App from './registerApp.vue';
// import ElementUI from 'element-ui';

require('./css/index.less');
require('assets/css/school.less');


import { reg } from "assets/js/until";

Vue.prototype.reg = new reg();

new Vue({
  render: h => h(App)
}).$mount('#container')