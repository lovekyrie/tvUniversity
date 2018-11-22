// import "babel-polyfill";
import Vue from 'vue';

import Lib from 'assets/js/Lib';
import App from './findApp.vue';
// import ElementUI from 'element-ui';

require('assets/css/school.less');

import { reg,until } from "assets/js/until";

Vue.prototype.reg = new reg();
Vue.prototype.until = new until();

new Vue({
  render: h => h(App)
}).$mount('#container')