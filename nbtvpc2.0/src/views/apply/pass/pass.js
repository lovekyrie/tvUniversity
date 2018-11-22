import Vue from 'vue';
import config_init from 'assets/js/config_init'
Vue.use(config_init);
import App from './passApp.vue';
new Vue({
  render: h => h(App)
}).$mount('#container')