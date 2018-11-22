import Vue from 'vue';
import {until} from 'assets/js/until'
Vue.prototype.until = new until();
import Lib from 'assets/js/Lib';
import App from './loginApp.vue';
require('./css/index.less');

// import "babel-polyfill";
// import Lib from 'assets/js/Lib';
// import ElementUI from 'element-ui';

new Vue({
  render: h => h(App)
}).$mount('#container')