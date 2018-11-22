import Vue from 'vue';
import App from './indexApp.vue';
require('./css/index.less');

import config_init from 'assets/js/config_init'
Vue.use(config_init);

new Vue({
  render: h => h(App)
}).$mount('#container')