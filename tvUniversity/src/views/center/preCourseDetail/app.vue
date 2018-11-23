<template>
    <div id="app">
        <myHeader></myHeader>
        <myNav :type="name"></myNav>
        <div class="content">
            <div class="pos">
                 首页 > 往期课程 > 课程内容
            </div>
            <div id="studyDetail">
                <div class="top">
                    <h1>{{info.nm}}</h1>
                    <p>课程学习星：{{info.learningStar}}<span></span> 浏览人次：{{info.visitorSessions}}<span></span> 完成人次：{{info.completePerson}}</p>
                </div>
                  <div class="player-container">
                    <video
                      ref="video"
                      id="video"
                      class="video-js"
                      height="300"
                      width="600"
                      controls>
                      <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
                      <source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm">
                    </video>

                    <div class="vjs-playlist">
                    </div>
                </div>
                <div class="intro">
                  <div>
                    <h3>课程简介</h3>
                    <button v-if="retroactive" @click="goToRetroactive">补签</button>
                  </div>
                  <div v-html="info.summary"></div>
                </div>
            </div>
            <!--集体签到弹出-->
            <el-dialog
                    title="学员列表"
                    :visible.sync="dialogVisible"
                    width="60%"
                    :before-close="handleClose">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox :label="item.prodStuPk" v-for="(item,index) in signList" :key="index">
                      <span>{{item.prodStuVo.nm}}</span>
                      <span class="space"></span>
                      <span>性别：{{item.prodStuVo.sex}}</span>
                    </el-checkbox>
                </el-checkbox-group>
                <span slot="footer" class="dialog-footer">
                    <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
                    <el-button type="primary" @click="dialogVisible = false">今日签到</el-button>
                </span>
            </el-dialog>
        </div>
        <myFooter></myFooter>
    </div>
</template>
<script>
import myHeader from "@/components/myHeader";
import myNav from "@/components/myNav";
import myFooter from "@/components/myFooter";
import { resolve } from "url";
import videojs from "video.js";
export default {
  data() {
    return {
      name: "study",
      retroactive: false,
      classPk: "",
      classNm: "",
      pageSize: 10,
      pageCount: 1,
      ifSign: false, //是否签到过
      dialogVisible: false, //集体签到弹出
      checkList: [], //集体签到选中的列表
      signList: [], //集体签到列表
      ifLogin: false,
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
          // {
          //   type: "",
          //   src: "http://vjs.zencdn.net/v/oceans.mp4"
          //   // src: "rtmp://video.nblll.cn/nb111|mp4:nblllServices/宁波老年电视大学课程/Video/2018秋/中国茶文化与生活—茶文化艺术/中国茶艺的发展简史_源视频_转码视频.mp4" //url地址
          // },
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
    this.ifLogin = JSON.parse(this.until.seGet("isLogin"));
    if (!this.ifLogin) {
      this.ifSign = true;
    }

    // this.getPlayList();
    let stuState = this.until.getQueryString("stuState");
    if (stuState === "再次学习" || stuState === "继续学习") {
      this.ifSign = true;
    }

    this.classPk = this.until.getQueryString("classPk");
    this.classNm = this.until.getQueryString("nm");
    this.getInfo();
    //得到isGroup
    let tokenObj = this.until.seGet("DD_token");
    this.retroactive = JSON.parse(tokenObj).isGroup === "是" ? true : false;

  // var player = videojs("video");
    // player.on('playlistitem', function() {
    //   player.playlist()
    //   console.log( player.playlist.currentIndex())
    // });

  },
  methods: {
    async getInfo() {
      var player = videojs("video");
      this.info = await this.getStudyInfo();
      let newArr = await this.getVideoList();
      player.playlist(newArr);
      player.playlistUi();

      player.on('playlistitem', function() {

         if(newArr[newArr.length-1]==player.playlist.last()){
           console.log('1111')
         }
      });

      if (!this.ifLogin) {
        player.on("timeupdate", () => {
          if (parseInt(player.currentTime()) > 1) {
            // player.pause()
            player.dispose();
            this.$alert(`您当前还未登录系统，试看视频时间结束。`, "试看结束", {
              confirmButtonText: "确定",
              callback: action => {}
            });
          }
        });
      }
      this.signList = await this.groupSignList();
    },
    //更改当前页数
    handleCurrentChange(val) {},
    //弹窗关闭
    handleClose(done) {
      done();
    },
    //集体签到弹窗弹出
    goToRetroactive() {
      this.dialogVisible = true;
    },
    sign() {
      //签到调用接口
      let param = {
        prodClassPk: this.classPk,
        prodClassNm: this.classNm
      };
      this.dialogVisible = false;
      //已经签到过的时候，无需再调用借口

      this.until.post("/prod/supp/sign", param).then(
        res => {
          if (res.status === "200") {
            this.ifSign = true;
          } else if (res.status === "400") {
            this.ifSign = true;
            this.$message.error(res.message);
          } else {
            console.log("返回状态码不正确");
          }
        },
        err => {}
      );
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
        query.buildOrderClause('crtTm','asc')
        let param = query.getParam();
        param.ClassPk=this.classPk
        
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
    }
  },
  watch: {
    checkList: function(val) {
      console.log(val);
    }
  },
  components: {
    myHeader,
    myNav,
    myFooter
  }
};
</script>
<style lang="less">
#app{
  .pos{
    width: 100%;
    color: #999999;
    font-size: 24px;
    border-bottom: 1px solid #e1e1e1;
    line-height: 80px;
    font-size: 16px;
  }
  #studyDetail{
    padding-bottom: 30px;
    .top{
      width: 900px;
      margin: 20px auto;
      display: flex;
      display: -webkit-flex;
      line-height: 40px;
      h1{
        font-size: 24px;
        flex: 1;
      }
      p{
        color: #999;
        font-size: 16px;
        padding-right: 10px;
        span{
          padding-left: 15px;
        }
      }
    }
  
    .intro{
      width: 900px;
      margin: 0 auto;
      display: flex;
      flex-flow: row wrap;
      >div{
        flex:  1 0 100%;
        &:nth-of-type(1){
          display: flex;
          flex-flow: row nowrap;
          h3,button{
            flex: 1 0 50%;
          }
          h3{
            padding-top: 20px;
            padding-bottom: 5px;
            font-size: 20px;
          }
          button{
            flex: 1 0 auto;
          }
        }
      }
     
    }
    .player-container {
      background: #1a1a1a;
      overflow: auto;
      width: 900px;
      margin: 0 auto 20px;
      position: relative;
      .video-js {
        float: left;
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
    
  }
  .el-dialog{
    .el-dialog__header{
      border-bottom: 1px solid #e1e1e1;
      text-align: center;
      line-height: 50px;
    }
    .el-dialog__footer{
      text-align: center;
      .el-button--primary{
        background: #3a71a8;
        border:1px solid #3a71a8;
      }
    }
    .el-dialog__body{
      width: 100%;
      padding: 0;
      border-bottom: 1px solid #e1e1e1;
      .el-checkbox-group{
        display: flex;
        flex-flow: row wrap;
        .el-checkbox{
          flex:  1 1 33%;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          margin: 0;
          border-bottom: 1px solid #e1e1e1;
          line-height: 50px;
          height: 50px;
          &:nth-child(3n+1),
          &:nth-child(3n+2){
            border-right: 1px solid #e1e1e1;
          }
          .el-checkbox__input{
            margin-left: 15px;
          }
          .el-checkbox__label{
            font-size: 16px;
            display: flex;
            flex-flow: row nowrap;
            span{
              &:nth-of-type(1){
                width:60px;
              }
            }
          }
          .space{
            padding-left: 25px;
          }
        }
      }
     
    }
  }
}
</style>
