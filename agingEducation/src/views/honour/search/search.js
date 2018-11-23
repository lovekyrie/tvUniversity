import Vue from 'vue';
import init from 'assets/js/init'
Vue.use(init);
import App from './searchApp.vue';
require('./css/index.less');

new Vue({
  render: h => h(App)
}).$mount('#container')