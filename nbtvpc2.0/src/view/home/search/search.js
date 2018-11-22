// import "babel-polyfill";
import Vue from 'vue';

import Lib from 'assets/js/Lib';
import App from './searchApp.vue';
// import ElementUI from 'element-ui';
import {until} from 'assets/js/until'
Vue.prototype.until = new until();

require('./css/index.less');


new Vue({
  render: h => h(App)
}).$mount('#container')