<template>
    <div id="studyDetail">
        <div class="top">
            <h1>{{info.nm}}</h1>
            <p>课程学习星：{{info.learningStar}}<span></span> 浏览人次：{{info.visitorSessions}}<span></span> 完成人次：{{info.completePerson}}</p>
        </div>
        <div class="video">
            <div class="sign" v-show="!ifSign"><img src="../img/sign.png" @click="sign()"/> </div>
            <video-player  class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
            ></video-player>
        </div>
        <div class="intro">
            <h3>课程简介</h3>
            <p v-html="info.summary"></p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      ifSign: false, //是否签到过
      classPk: "",
      classNm: "",
      info: {},
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
      }
    };
  },
  mounted() {
    this.classPk = this.$route.query.classPk;
    this.classNm = this.$route.query.nm;
    let stuState = this.$route.query.stuState;
    if (stuState === "再次学习" || stuState === "继续学习") {
      this.ifSign = true;
    }

    this.getInfo();
    //得到isGroup 个人中心不可能有补签
  },
  methods: {
    async getInfo() {
      this.info = await this.getStudyInfo();
      let newArr= await this.getVideoList();
      this.playerOptions.sources.push(...newArr);
      this.signList = await this.groupSignList();
    },
    getStudyInfo() {
      //根据classPk得到具体的课程信息
      return new Promise(resolve => {
        this.until.get("/prod/class/info/" + this.classPk).then(
          res => {
            if (res.status === "200") {
              resolve(res.data);
            } else {
              console.log("返回的状态码不是200");
            }
          },
          err => {}
        );
      });
    },
    getVideoList() {
      //得到视频列表
      return new Promise(resolve => {
        let query = new this.Query();
        query.buildPageClause(this.pageCount, this.pageSize);
        query = query.getParam();

        let param = {
          ClassPk: this.classPk,
          query
        };
        this.until.get("/prod/ware/page", param).then(res => {
          if (res.status === "200") {
            let newArr = res.data.items.map(item => {
              let obj = {};
              obj["type"] = "";
              obj["src"] = item["videoUrl"];

              return obj;
            });
            resolve(newArr)
          } else {
            console.log("返回的状态码不是200");
          }
        });
      });
    },
    groupSignList() {
      return new Promise(resolve => {
        this.until.get("/prod/supp/ement").then(
          res => {
            resolve(res.data);
          },
          err => {}
        );
      });
    },
    sign(){
       //签到调用接口
      let param = {
        prodClassPk: this.classPk,
        prodClassNm: this.classNm
      };

      this.until.post("/prod/supp/sign", param).then(
        res => {
          if (res.status === "200") {
            this.ifSign = true;
          } else if (res.status === "400") {
            this.ifSign = true;
            this.$message(res.message);
          } else {
            console.log("返回状态码不正确");
          }
        },
        err => {}
      );
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
#studyDetail {
  padding-bottom: 30px;
  .top {
    width: 900px;
    margin: 20px auto;
    display: flex;
    display: -webkit-flex;
    line-height: 40px;
    h1 {
      font-size: 24px;
      flex: 1;
    }
    p {
      color: #999;
      font-size: 16px;
      padding-right: 10px;
      span {
        padding-left: 15px;
      }
    }
  }
  .video {
    width: 910px;
    border-radius: 15px;
    margin: 0 auto;
    position: relative;
    .sign {
      z-index: 999;
      position: absolute;
      background: rgba(0, 0, 0, 0.8);
      width: 100%;
      height: 100%;
      display: flex;
      border-radius: 15px;
      img {
        margin: auto;
        cursor: pointer;
      }
    }
    .video-player {
      border-radius: 15px;
      .vjs-custom-skin > .video-js,
      .vjs-poster {
        border-radius: 15px;
      }
      .vjs-modal-dialog {
        border-radius: 15px;
      }
    }
  }
  .intro {
    width: 900px;
    margin: 0 auto;
    h3 {
      padding-top: 20px;
      padding-bottom: 5px;
      font-size: 20px;
    }
  }
}
</style>