// import "babel-polyfill";
import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import 'video.js/dist/video-js.css'
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer);

import Lib from 'assets/js/Lib';
import 'assets/js/wconfig.js';
import App from './courseApp.vue';
// import ElementUI from 'element-ui';

import routes from './routes'
const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#container')