<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div class="g-content g-content-footer" ref="size">
      <!--列表-->
      <div class="g-search">
        <!--列表顶部-->
        <div class="crumb">
          <span @click="toIndex">返回首页</span>
          <span>></span>
          <span @click="toSubAch">成果交流</span>
          <span>></span>
          <span @click="toVideo">活力视频</span>
          <span>></span>
          <span>活力视频详情</span>
        </div>

        <div class="honorMain">
          <!--标题-->
          <span class="honorTitle">{{videoInfo.titleNm}}</span>
          <!--时间来源副标题-->
          <div class="honorTime">
            <span>班级：{{videoInfo.stuNm}}</span>
            <span>作者：{{videoInfo.author}}</span>
            <span>{{crtTime}}</span>
            <span>来源：{{videoInfo.source}}</span>
          </div>
          <!--视频-->
          <div
            class="video"
            v-for="(item,index) in videoList"
            :key="index"
            v-show="index==videoCurrent"
            @mouseenter="videoStop()"
            @mouseleave="videoChange"
          >
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="item.playerOptions"
            ></video-player>
          </div>
          <menu>
            <span
              :class="{active:index==videoCurrent}"
              v-for="(item,index) in videoList"
              :key="index"
              @click="videChoose(index)"
              @mousedown="videoStop()"
            >{{item.videoName}}</span>
          </menu>
          <!--文章内容-->
          <div class="honorArticle">
            <p v-html="videoInfo.cont"></p>
          </div>
        </div>
      </div>
    </div>

    <!--底部-->
    <ageFoot></ageFoot>
  </div>
</template>

<script>
import ageHead from "components/ageHead";
import ageFoot from "components/ageFoot";

export default {
  data() {
    return {
      honorTitle: "宁波电大获得2015年度全国优秀校外学习中心",
      classes: "舞蹈班",
      author: "风雨飘扬",
      honorTime: "2017年9月30日",
      honorSource: "宁波电大",
      honorArticle: "校园并不是年轻人的专利",
      videoInfo: {},
      showType: false,
      videoId: "",
      crtTime:"",
      //    video
      videoCurrent: 0, //轮播视频当前视频
      timer: null, //定时
      videoList: [
        {
          playerOptions: {
            playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            autoplay: false, //如果true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 导致视频一结束就重新开始。
            preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: "zh-CN",
            aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [
              {
                type: "",
                src: "http://vjs.zencdn.net/v/oceans.mp4"
                // src: "rtmp://video.nblll.cn/nb111|mp4:nblllServices/宁波老年电视大学课程/Video/2018秋/中国茶文化与生活—茶文化艺术/中国茶艺的发展简史_源视频_转码视频.mp4" //url地址
              }
            ],
            poster: "http://assets.jq22.com/plugin/2015-08-25-23-08-04.jpg", //你的封面地址
            // width: document.documentElement.clientWidth,
            notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true,
              durationDisplay: true,
              remainingTimeDisplay: false,
              fullscreenToggle: true //全屏按钮
            }
          },
          videoName: ""
        }
      ]
    };
  },
  components: {
    ageHead,
    ageFoot
  },
  mounted() {
    // this.showType = JSON.parse(this.until.getQueryString("type"));
    this.videoId = this.until.getQueryString("id");

    this.getVideoInfo();
  },
  methods: {
    toIndex(){
      this.until.href('../home/index.html')
    },
    toSubAch(){
      this.until.href('./subAch.html')
    },
    toVideo(){
      this.until.href('./actVideo.html')
    },
    //轮播自动切换
    videoChange() {
      this.timer = setInterval(() => {
        if (this.videoCurrent < this.videoList.length - 1) {
          this.videoCurrent++;
        } else {
          this.videoCurrent = 0;
        }
        console.log(this.videoCurrent);
      }, 2000);
    },
    // 轮播选择
    videChoose(val) {
      this.videoCurrent = val;
      this.videoChange();
    },
    //鼠标放上去时,轮播停止
    videoStop() {
      clearInterval(this.timer);
    },
    getVideoInfo(){

      this.until.get('/telev/gain/info/'+this.videoId).then(
        res=>{
          if(res.status==='200'){
            this.videoInfo=res.data
            let time=this.until.formatDate(res.data.crtTm)
             this.crtTime=time.year+'年'+time.month+'月'+time.day+'日'
          }
        },
        err=>{}
      )
    }
  }
};
</script>

<style scoped>
</style>