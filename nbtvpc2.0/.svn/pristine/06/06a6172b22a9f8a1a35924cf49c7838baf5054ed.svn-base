// import "babel-polyfill";
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Lib from 'assets/js/Lib';
import App from './detailcenterApp.vue';
// import ElementUI from 'element-ui';

require('./css/index.less');


import routes from './routes'
//创建路由实例
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#container')