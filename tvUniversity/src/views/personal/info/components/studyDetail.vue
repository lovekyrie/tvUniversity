<template>
    <div id="studyDetail">
        <div class="top">
            <h1>{{info.nm}}</h1>
            <p>课程学习星：{{info.learningStar}}<span></span> 浏览人次：{{info.visitorSessions}}<span></span> 完成人次：{{info.completePerson}}</p>
        </div>
        <!-- <div class="video">
            <div class="sign" v-show="!ifSign"><img src="../img/sign.png" @click="sign()"/> </div>
            <video-player  class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
            ></video-player>
        </div> -->
          <div class="player-container">
            <div class="sign" v-show="!ifSign"><img src="../img/sign.png" @click="sign()"/> </div>
              <video
                id="video"
                class="video-js"
                height="300"
                width="600"
                controls>
                <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
                <source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm">
              </video>

              <div class="vjs-playlist">
                <!--
                  The contents of this element will be filled based on the
                  currently loaded playlist
                -->
              </div>
          </div>
        <div class="intro">
            <h3>课程简介</h3>
            <p v-html="info.summary"></p>
        </div>
    </div>
</template>
<script>
import videojs from 'video.js'
export default {
  data() {
    return {
      ifSign: false, //是否签到过
      classPk: "",
      classNm: "",
      info: {},
      
    };
  },
  mounted() {
    // this.getPlayList();
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
      var player = videojs("video");
      this.info = await this.getStudyInfo();
      let newArr = await this.getVideoList();
      player.playlist(newArr);
      player.playlistUi();

      player.on('ended',()=>{
        
        if(player.playlist.nextIndex()==newArr.length-1){

          let param={
            prodClassPk: this.classPk
          }
          this.until.post('/prod/supp/end',param).then(
            res=>{
              if(res.status==='200'){
                console.log('课程学习完成')
              }
            },
            err=>{}
          )
        }
      })
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
            //拼接视频格式
            let playList = [];
            res.data.items.forEach(item => {
              let obj = {},
                sourceobj = {},
                sourceArr = [];
              obj["name"] = item["nm"];
              obj["description"] = "teach online video";
              (obj["duration"] = 45), (sourceobj["type"] = "video/webm");
              sourceobj["src"] = item["videoUrl"];
              sourceArr.push(sourceobj);
              obj["sources"] = sourceArr;

              playList.push(obj);
            });
            resolve(playList);
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
  .player-container {
      background: #1a1a1a;
      overflow: auto;
      width: 900px;
      margin: 0 auto 20px;
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
      .video-js {
        float: left;
        width: 600px;
        height: 300px;
      }
      .vjs-playlist,
      .my-custom-class,
      #my-custom-element {
        float: left;
        width: 300px;
      }
      .vjs-playlist.vjs-playlist-horizontal {
        float: none;
        height: 120px;
        width: 600px;
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