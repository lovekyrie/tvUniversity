<template>
  <div id="ageHead">
    <div class="aHead">
      <div class="headImg" @click="toHome">
        <img :src="logo">
      </div>
      <div class="headTitle">
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
            <el-dropdown-item command="宁波">宁波</el-dropdown-item>
            <el-dropdown-item command="海曙">海曙</el-dropdown-item>
            <el-dropdown-item command="江北">江北</el-dropdown-item>
            <el-dropdown-item command="鄞州">鄞州</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="loginReg">
        <span>
        <a href="#">登录</a>&nbsp;|&nbsp;<a href="#">注册</a>
        </span>
        <img v-if="!showBig" :src="samllCode" alt @click="showBig=true">
      </div>
      <img class="big-code" v-if="showBig" :src="bigCode" alt="" @click="showBig=false">
    </div>
  </div>
</template>

<script>
import logo from "./img/电大logo.png";
import samllCode from "./img/小二维码.png";
import bigCode from "./img/大二维码.png";

export default {
  data() {
    return {
      ageSearch: "",
      logo,
      samllCode,
      bigCode,
      address: "宁波",
      showBig:false,
    };
  },
  methods: {
    toHome() {
      let url = window.location.href;
      if (url.indexOf("home/index.html") < 0) {
        window.location.href = "../home/index.html";
      }
    },
    handleCommand(command) {
      this.address = command;
    }
  }
};
</script>

<style lang="less" type="text/less">
#ageHead {
  min-width: 1200px;
  height: 120px;
  background-color: rgb(58, 113, 168);
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
        width: 100%;
        vertical-align: middle;
      }
    }
    /*标题*/
    .headTitle {
      width: 32%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 24px;
    }
    /*登录注册*/
    .loginReg {
      width: 20%;
      line-height: 140px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      span,img{
        flex: 1 0 50%;        
      }
      img{
        flex:0 0 auto;
        height: 75px;
      }
      a {
        color: white;
        text-decoration: none;
        font-weight: 300;
      }
    }
    .drop-list {
      width: 25%;
      .el-dropdown{
        font-size: 18px;
        color: #fff;
      }
    }
     .big-code{
      position: absolute;
      top: 0;
      right: 0;
      width: 10%;
      height: 100%;
    }
  }
}
</style>