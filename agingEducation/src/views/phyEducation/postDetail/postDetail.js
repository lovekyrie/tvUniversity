import Vue from 'vue';
import App from './App';
import init from 'assets/js/init';

Vue.use(init);

new Vue({
  render: h => h(App)
}).$mount('#container');