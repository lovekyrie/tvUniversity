import Vue from 'vue';
import App from './components/App';
import init from 'assets/js/init';

Vue.use(init);
require('./css/classes.less');

new Vue({
    render:h=>h(App)
}).$mount('#container');