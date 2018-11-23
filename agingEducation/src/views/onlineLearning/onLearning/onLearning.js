import Vue from 'vue';
import App from './components/App';
import init from 'assets/js/init';
import router from './router/router';

Vue.use(init);
require('./css/onLearning.less');

new Vue({
    router,
    render:h=>h(App)
}).$mount('#container');



