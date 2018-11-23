// require ('assets/css/index.less');
require('assets/css/common.css');

// require ('assets/css/reset.css');
// require ('assets/css/help.css');
// require ('assets/css/mobile.less');
// require ('assets/css/project.less');
// import 'assets/js/ScreenAdaptive.js';

import 'bootstrap/dist/css/bootstrap.min.css'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';


//引入视频
import VideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
require('videojs-flash/dist/videojs-flash')


import "babel-polyfill";// 解决 IE11 Promise对象未定义
import axios from 'axios';
import './vueFilter';  	//全局过滤器
import {until, reg, app} from 'assets/js/until'
import 'assets/js/wconfig.js';
import './iconfont'  //字体库
import './wconfig.js'
import {Query} from 'assets/js/query'

// import 'assets/js/Ios';
// import 'assets/js/WebViewJavascriptBridge';

export default {
    install(Vue) {
        Vue.use(ElementUI);
        Vue.use(MuseUI);
        Vue.use(VideoPlayer);
        Vue.prototype.axios = axios;
        Vue.prototype.until = new until();
        Vue.prototype.app = new app();
        Vue.prototype.reg = new reg();
        Vue.prototype.Query = Query;


    }
}


