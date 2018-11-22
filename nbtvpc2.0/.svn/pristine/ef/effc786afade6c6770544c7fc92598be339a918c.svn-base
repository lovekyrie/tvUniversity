import Vue from 'vue';
import config_init from 'assets/js/config_init'
Vue.use(config_init);
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import App from './detailcenterApp.vue';
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