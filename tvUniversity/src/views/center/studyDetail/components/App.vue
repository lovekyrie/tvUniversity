<template>
  <div id="container">
    <myHeader :type="name"></myHeader>
    <div class="content">
      <div class="pos">首页 > 当前课程 > 课程内容</div>
      <div id="studyDetail">
        <div class="top">
          <h1>{{info.nm}}</h1>
          <p>
            课程学习星：{{info.learningStar}}
            <span></span>
            浏览人次：{{info.visitorSessions}}
            <span></span>
            完成人次：{{info.completePerson}}
          </p>
        </div>
        <!-- <div class="video">
                    <div class="sign" v-show="!ifSign"><img src="../img/sign.png" @click="sign()"/> </div>
                    <video-player  class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions"
                    ></video-player>
        </div>-->
        <div class="player-container" :style="[showList?{width:'900px'}:{width:'600px'}]">
          <div class="sign" v-show="!ifSign">
            <img src="../img/sign.png" @click="sign()">
          </div>
          <video ref="video" id="video" class="video-js" height="300" width="600" controls>
            <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
            <source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm">
          </video>

          <div class="vjs-playlist" v-if="showList"></div>
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
      <el-dialog title="学员列表" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
        <el-checkbox-group v-model="checkList">
          <el-checkbox
            :label="item.prodStuVo.prodStuPk"
            v-for="item in signList"
            :key="item.prodStuPk"
            :checked="false"
          >
            <span>{{item.prodStuVo.nm}}</span>
            <span class="space"></span>
            <span>性别：{{item.prodStuVo.sex}}</span>
          </el-checkbox>
        </el-checkbox-group>
        <span slot="footer" class="dialog-footer">
          <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
          <el-button type="primary" @click="patchSign">今日签到</el-button>
        </span>
      </el-dialog>
    </div>
    <myFooter></myFooter>
  </div>
</template>
<script>
import myHeader from "@/components/myHeader";
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
      showList: true
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
    this.retroactive =
      tokenObj && JSON.parse(tokenObj).isGroup === "是" ? true : false;
  },
  methods: {
    async getInfo() {
      var player = videojs("video");
      this.info = await this.getStudyInfo();
      let newArr = await this.getVideoList();
      if (newArr.length > 1) {
        this.showList = true;
      } else {
        this.showList = false;
      }
      player.playlist(newArr);
      player.playlistUi();

      player.on("ended", () => {
        if (player.playlist.nextIndex() == newArr.length - 1) {
          let param = {
            prodClassPk: this.classPk
          };
          this.until.post("/prod/supp/end", param).then(
            res => {
              if (res.status === "200") {
                console.log("课程学习完成");
              }
            },
            err => {}
          );
        }
      });

      if (!this.ifLogin) {
        player.on("timeupdate", () => {
          if (parseInt(player.currentTime()) > 300) {
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
    /**
     * 补签
     */
    patchSign() {
      this.dialogVisible = false;

      let param = {
        prodStuPks: this.checkList.join(","),
        prodClassPk: this.classPk,
        prodClassNm: this.classNm
      };
      this.until.post("/prod/supp/signs", param).then(res => {
        if (res.status === "200") {
          this.$message({
            message: "补签成功",
            type: "success"
          });
        }
      });
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
        query.buildOrderClause("crtTm", "asc");
        let param = query.getParam();
        param.ClassPk = this.classPk;

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
              (obj["duration"] = 45), (sourceobj["type"] = "video/mp4");
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
    myFooter
  }
};
</script>