// import "babel-polyfill";
import Vue from 'vue';

import Lib from 'assets/js/Lib';
import App from './activitycntApp.vue';
// import ElementUI from 'element-ui';


require('./css/index.less');


new Vue({
  render: h => h(App)
}).$mount('#container')