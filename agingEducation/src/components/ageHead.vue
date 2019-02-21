<template>
  <div id="ageHead">
    <div class="aHead">
      <div class="headImg" @click="toHome">
        <img :src="logo">
      </div>
      <div class="headTitle" @click="toHome">
        <span>宁波社区大学老年教育中心</span>
        <span>宁波广播电视大学老年教育学院</span>
      </div>
      <div class="drop-list">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{address}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="item in regionList"
              :key="item.prntPk"
              :command="item.nm"
            >{{item.nm}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="right">
        <p class="login-btn" v-if="!isLogin">
          <a href="../system/login.html" target="_self">登录</a>&nbsp;|&nbsp;
          <a href="../system/register.html" target="_self">注册</a>
        </p>
        <p v-if="isLogin">
          <a href="../personalZone/personal.html">{{nickName}}</a>
          <span @click="quit">退出</span>
        </p>
        <img v-if="!showBig" :src="samllCode" alt @click="showBig=true">
      </div>
      <img class="big-code" v-if="showBig" :src="bigCode" alt @click="showBig=false">
    </div>
  </div>
</template>

<script>
import logo from "./img/logo.png";
import samllCode from "./img/smallcode.png";
import bigCode from "./img/bigcode.png";

export default {
  data() {
    return {
      ageSearch: "",
      logo,
      samllCode,
      bigCode,
      address: "宁波",
      regionCd: "",
      showBig: false,
      isLogin: false,
      nickName: "",
      regionList: []
    };
  },
  mounted() {
    let loginCredit = this.until.seGet("DD_token");
    this.isLogin = loginCredit ? true : false;
    if (loginCredit) {
      let userObj = JSON.parse(loginCredit);
      this.nickName = userObj.userInfo.nickname;
    }
    this.getRegionList();
  },
  watch: {
    regionCd(val) {
      this.until.loSave("regionCd", val);
    }
  },
  methods: {
    getRegionList() {
      this.until
        .get("/general/cat/listByPrntCd", { prntCd: 42000 })
        .then(res => {
          if (res.status === "200") {
            this.regionList = res.data.items;
            if (res.data.items.length > 0) {
              this.address = res.data.items[0].nm;
              this.regionCd = res.data.items[0].cd;
            }
          }
        });
    },
    toHome() {
      let url = window.location.href;
      if (url.indexOf("home/index.html") < 0) {
        window.location.href = "../home/index.html";
      }
    },
    handleCommand(command) {
      this.address = command;
      let regionArr = this.regionList.filter(item => {
        return item["nm"] === command;
      });
      this.regionCd = regionArr[0].cd;
    },
    quit() {
      this.until.get("/telev/usr/logout").then(
        res => {
          if (res.status === "200") {
            window.location.href = "../home/index.html";
            this.until.seSave("DD_token", "");
          }
        },
        err => {
          this.$message.error("退出失败");
        }
      );
    }
  }
};
</script>

<style lang="less" type="text/less">
#ageHead {
  min-width: 1200px;
  height: 120px;
  background-image: url("./img/navigator.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 4px rgba(73, 150, 86, 0.16);
  .aHead {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    height: 120px;
    color: #fff;
    margin: 0 auto;
    /*图片位置*/
    .headImg {
      width: 10%;
      line-height: 120px;
      img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        vertical-align: middle;
      }
    }
    /*标题*/
    .headTitle {
      width: 66%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 28px;
      color: #303030;
      cursor: pointer;
    }
    /*登录注册*/
    .right {
      width: 30%;
      display: -webkit-flex;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      color: #303030;
      p {
        width: 70%;
        color: #e3e3e3;
        display: flex;
        flex-flow: row wrap;
        a {
          flex: 1 0 100%;
          color: #303030;
          display: inline-block;
          font-size: 18px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        span {
          flex: 1 0 100%;
          font-size: 14px;
          color: #ff7867;
          cursor: pointer;
        }
      }
      .login-btn {
        flex-wrap: nowrap;
        color: #303030;
        a {
          flex: 0 0 auto;
        }
      }
      img {
        flex: 0 0 auto;
      }
    }
    .drop-list {
      width: 15%;
      .el-dropdown {
        font-size: 20px;
        color: #303030;
      }
    }
    .big-code {
      position: absolute;
      top: 0;
      right: 0;
      width: 10%;
      height: 100%;
    }
  }
}
</style>