import Vue from 'vue';
import App from './App.vue';
import config from 'assets/js/wconfig';

config(Vue);

require('./css/main.less');

import router from './router'
router.push('/personal/membercenter')

new Vue({
  router,
  render: h => h(App)
}).$mount('#container');
