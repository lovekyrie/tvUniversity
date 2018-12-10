<template>
  <div id="header">
    <div class="header-wrap">
      <div class="left">
        <img :src="logo" alt>
        <a href="../center/index.html">宁波市乐龄老年电视大学</a>
      </div>
      <div class="content">
        <a href="../center/index.html" :class="{active:type=='home'}">网站首页</a>
        <a href="../center/study.html" :class="{active:type=='current'}">当前课程</a>
        <a href="../center/previousCourse.html" :class="{active:type=='past'}">往期课程</a>
        <a href="../center/notice.html" :class="{active:type=='notice'}">通知公告</a>
        <a href="../center/policy.html" :class="{active:type=='policy'}">政策文件</a>
      </div>
      <div class="right">
        <p v-if="!ifLogin">
          <a href="../entry/login.html">登录</a>
        </p>
        <p v-if="ifLogin">
          <a href="../personal/info.html">欢迎您的登录，{{info.nickname}}！</a>
          <span @click="quit">退出</span>
        </p>
        <img v-if="!showBig" :src="codeSmall" alt="" @click="showBig=true">
      </div>
      <!-- 二维码大 -->
      <img class="big-code" v-if="showBig" :src="codeBig" alt="" @click="showBig=false">
    </div>
  </div>
</template>
<script>
import myNav from "./myNav";
import logo from "./images/电大logo.png";
import codeSmall from "./images/小二维码.png";
import codeBig from "./images/大二维码.png";

export default {
  name: "App",
  props: ["type"],
  data() {
    return {
      ifLogin: false, //是否登录
      key: "",
      info: {},
      logo,
      codeSmall,
      codeBig,
      showBig:false
    };
  },
  mounted() {
    // this.abc();
    this.ifLogin = JSON.parse(this.until.seGet("isLogin"));
    let token = this.until.seGet("DD_token");
    if (token) {
      this.info = JSON.parse(token).userInfo;
    }
  },
  methods: {
    toHome() {
      window.location.href = "../center/index.html";
    },
    goSearch() {
      let url = "../center/search.html?key=" + this.key;
      window.location.href = url;
    },
    quit() {
      this.until.get("/prod/dent/logout").then(
        res => {
          if (res.status === "200") {
            window.location.href = "../center/index.html";
            this.until.seSave("isLogin", false);
            this.ifLogin = false;
          }
        },
        err => {
          this.$message.error("退出失败");
        }
      );
    }
  },
  components: {
    myNav
  }
};
</script>

<style lang="less" scoped>
#header {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e1e1e1;
  > .header-wrap {
    position: relative;
    width: 1200px;
    margin: 0 auto;
    height: 124px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-items: center;
    .left {
      display: flex;
      display: -webkit-flex;
      align-items: center;
      width: 35%;
      img{
        width: 20%;
      }
      > a {
        // margin-left: 5%;
        width: 80%;
        font-size: 28px;
        color: #3a71a8;
        flex: 1;
        font-weight: bold;
      }
    }
    .content {
      display: flex;
      display: -webkit-flex;
      width: 45%;
      a {
        height: 90px;
        line-height: 90px;
        text-align: center;
        color: #666666;
        flex: 1;
        font-size: 18px;
        /*font-weight: bold;*/
      }
      a:hover {
        text-decoration: none;
      }
      a.active {
        font-weight: bold;
        color: #3a71a8;
        border-bottom: 1px solid #3a71a8;
      }
    }
    .right{
      width: 20%;
      display: -webkit-flex;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      p {
        width: 62%;
        color: #e3e3e3;
        a {
          color: #666666;
          display: inline-block;
          font-size: 14px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        span {
          font-size: 14px;
          color: #ff7867;
          cursor: pointer;
        }
      }
      img{
        width:38%;
      }
    }
    .big-code{
      position: absolute;
      top: 0;
      right: 0;
      width: 13%;
      height: 100%;
    }
  }
}
</style>