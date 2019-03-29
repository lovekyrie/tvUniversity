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
          <span @click="toExcitingAct">精彩活动</span>
          <span>></span>
          <span @click="toActVote">活动详情</span>
          <span>></span>
          <span>参赛作品详情</span>
        </div>

        <div class="detail">
          <!--时间来源副标题-->
          <div class="msg-bar">
            <span>作品类型：{{writeInfo.catNm}}</span>
            <span>上传作者：{{writeInfo.authorNm}}</span>
            <span>作品名称：{{writeInfo.televRunNm}}</span>
          </div>

          <!--文章内容-->
          <div class="c-content" v-if="!showVideo">
            <p v-html="writeInfo.cont"></p>
          </div>
          <!--视频-->
          <div
            v-else
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
      showType: false,
      writeId: "",
      crtTime: "",
      writeInfo: {},
      //    video
      videoCurrent: 0, //轮播视频当前视频
      timer: null, //定时
      showVideo: false,
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
    this.writeId = this.until.getQueryString("id");

    this.getWriteInfo();
  },
  methods: {
    toIndex() {
      this.until.href("../home/index.html");
    },
    toExcitingAct() {
      this.until.href("./excitingAct.html");
    },
    toActVote() {
      window.history.go(-1);
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
    getWriteInfo() {
      this.until.get("/telev/run/info/" + this.writeId).then(
        res => {
          if (res.status === "200") {
            this.writeInfo = res.data;
            //判断显示图片，还是视频
            if (this.writeInfo.catCd === "40030.130") {
              this.showVideo = true;
              //解析视频URL
              let videoUrl = this.writeInfo.cont.match(/http\S+.mp4/);
              this.videoList[0].playerOptions.sources[0]["src"] = videoUrl[0];
            } else {
              this.showVideo = false;
            }
          }
        },
        err => {}
      );
    }
  }
};
</script>

<style lang="less">
@import "../../../assets/css/init.less";
html,
body {
  background: #fff !important;
}
.detail {
  padding-bottom: 40px;
  color: #101010;
  h3 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:nth-of-type(1) {
      margin-top: 60px;
    }
    &:nth-of-type(2) {
      margin: 30px 0;
    }
  }
  .msg-bar {
    text-align: center;
    margin: 30px 0;
    span {
      font-size: 20px;
      color: #303030;
      &:nth-of-type(2) {
        margin: 0 100px;
      }
    }
  }
  .c-img {
    text-align: center;
    img {
      vertical-align: middle;
    }
  }
  .c-content {
    min-height: 475px;
    font-size: 20px;
    line-height: 1.5;
    color: #303030;
    div {
      font-size: 24px;
      line-height: 1.5;
    }
  }
}

.size {
  h2 {
    font-size: 32px !important;
  }
  h3 {
    font-size: 30px !important;
  }
  p {
    font-size: 26px !important;
    line-height: 35px !important;
  }
}
</style>