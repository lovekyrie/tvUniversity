<template>
  <div id="header">
    <div class="header-wrap">
      <div class="left">
        <img :src="logo" alt>
        <a href="../center/index.html">宁波市乐龄老年电视大学</a>
      </div>
      <div class="content-nav">
        <a href="../center/index.html" :class="{active:type=='home'}">网站首页</a>
        <a href="../center/study.html" :class="{active:type=='current'}">当前课程</a>
        <a href="../center/previousCourse.html" :class="{active:type=='past'}">往期课程</a>
        <a href="../center/notice.html" :class="{active:type=='notice'}">通知公告</a>
        <a href="../center/policy.html" :class="{active:type=='policy'}">政策文件</a>
      </div>
      <div class="right">
        <p class="login-btn" v-if="!ifLogin">
          <a href="../entry/login.html" target="_self">登录</a>
        </p>
        <p v-if="ifLogin">
          <a href="../personal/info.html" target="_self">{{info.nickname}}</a>
          <span @click="quit">退出</span>
        </p>
        <img v-if="!showBig" :src="codeSmall" alt @click="showBig=true">
      </div>
      <!-- 二维码大 -->
      <img class="big-code" v-if="showBig" :src="codeBig" alt @click="showBig=false">
    </div>
  </div>
</template>
<script>
import myNav from "./myNav";
import logo from "./img/logo.png";
import codeSmall from "./img/smallcode.png";
import codeBig from "./img/bigcode.png";

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
      showBig: false
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

<style lang="less">
#header {
  border-bottom: 1px solid #e1e1e1;
  width: 100%;
  height: auto;
  background: url("./img/navigator.png") no-repeat center;
  background-size: cover;
  box-shadow: 0 2px 4px rgba(73, 150, 86, 0.16);
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
      > a {
        margin-left: 5%;
        width: 80%;
        font-size: 28px;
        color: #101010;
        flex: 1;
        font-weight: bold;
      }
    }
    .content-nav {
      display: flex;
      display: -webkit-flex;
      width: 45%;
      a {
        margin: 0 10px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        color: #101010;
        flex: 1;
        font-size: 18px;
        /*font-weight: bold;*/
      }
      a:hover {
        text-decoration: none;
      }
      a.active {
        font-weight: bold;
        color: #72b713;
        border-bottom: 1px solid #72b713;
      }
    }
    .right {
      width: 20%;
      display: -webkit-flex;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      p {
        display: flex;
        flex-flow: row wrap;
        width: 62%;
        color: #e3e3e3;
        text-align: right;
        a {
          width: 90%;
          color: #666;
          display: inline-block;
          font-size: 18px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        span {
          width: 90%;
          font-size: 18px;
          color: #ff7867;
          cursor: pointer;
        }
      }
      .login-btn {
        a {
          font-size: 16px;
          margin-left: 100px;
        }
      }
    }
    .big-code {
      position: absolute;
      top: 0;
      right: 0;
      width: 11%;
      height: 100%;
    }
  }
}
</style>