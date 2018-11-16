import { Query } from './query';
import { until,reg } from "assets/js/until";
import { msg,loading } from 'hero';
import { confirm } from 'hero';

// require ('assets/css/config.less'); //移动
require ('assets/css/common.css'); //PC

function configIcon(){
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = 'http://at.alicdn.com/t/font_576267_8nkmvz1lm47snhfr.js';
  document.head.appendChild(script);
}

configIcon();
import Vue from 'vue';
//引入安卓 苹果
import 'assets/js/Ios';
import 'assets/js/WebViewJavascriptBridge';

//引入移动前端库

// import MuseUI from 'muse-ui';
// import 'muse-ui/dist/muse-ui.css';
// Vue.use(MuseUI);

//移动调试
// import Vconsole from 'vconsole'

//PC库
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI);

//引入视频
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
require('videojs-flash/dist/videojs-flash')
Vue.use(VideoPlayer)

let hostUrl='http://218.71.137.186:44185'

export default function (Vue) {
  Vue.use(confirm);
  Vue.use(msg);
  Vue.use(loading);
  Vue.prototype.hostUrl=hostUrl;
  Vue.prototype.Query = Query;
  Vue.prototype.until = new until();
  Vue.prototype.reg = new reg();

    // Vue.prototype.Vconsole = new Vconsole()
}