import Vue from 'vue';
import init from 'assets/js/init';
import App from './components/App';

require('./css/checkIn.less');
Vue.use(init);

new Vue({
    render:h=>h(App)
}).$mount('#container');