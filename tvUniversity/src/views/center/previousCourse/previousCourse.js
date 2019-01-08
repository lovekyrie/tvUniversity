import Vue from 'vue';
import App from './app.vue';
import config from 'assets/js/wconfig';

config(Vue);

new Vue({
  render: h => h(App)
}).$mount('#container');
