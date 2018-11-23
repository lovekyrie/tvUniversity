import Vue from 'vue';
import App from './indexApp.vue';
require('./css/index.less');

import init from 'assets/js/init'
Vue.use(init);

new Vue({
  render: h => h(App)
}).$mount('#container')