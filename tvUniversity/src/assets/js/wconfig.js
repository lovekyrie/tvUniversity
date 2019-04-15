import {
  Query
} from './query';
import {
  until,
  reg
} from "assets/js/until";

// require ('assets/css/config.less'); //移动
require('assets/css/common.css'); //PC

function configIcon() {
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


//PC库
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI);

//引入视频
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-playlist/dist/videojs-playlist'
import 'videojs-playlist-ui/dist/videojs-playlist-ui'
import 'videojs-playlist-ui/dist/videojs-playlist-ui.vertical.css'
Vue.use(VideoPlayer)

export default function (Vue) {
  Vue.prototype.Query = Query;
  Vue.prototype.until = new until();
  Vue.prototype.reg = new reg();

  // Vue.prototype.Vconsole = new Vconsole()
}