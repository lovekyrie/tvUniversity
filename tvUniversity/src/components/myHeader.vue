<template>
    <div id="header">
        <div class="top">
            <div class="top-wrap">
                <img src="../assets/img/logo.png" @click="toHome"/>
                宁波广播电视大学
            </div>
        </div>
        <div class="header-wrap">
            <a href="../center/index.html">宁波电视大学网</a>
            <div class="search">
                <input v-model="key" placeholder="宁波电大老年教育网"/>
                <button @click="goSearch">搜索</button>
            </div>
            <p v-if="!ifLogin"><a href="../entry/login.html">登录</a></p>
            <p v-if="ifLogin"><a href="../personal/info.html">欢迎您的登录，{{info.nickname}}！</a> <span @click="quit">退出</span></p>
            <p><a href="http://218.71.137.186:44185">后台管理系统</a> </p>
        </div>
    </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      ifLogin: false, //是否登录
      key: "",
      info:{}
    };
  },
  mounted() {
    // this.abc();
    this.ifLogin = JSON.parse(this.until.seGet("isLogin"))
    let token=this.until.seGet('DD_token');
    if(token){
      this.info=JSON.parse(token).userInfo;
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
     
      this.until.get('/prod/dent/logout').then(
        res=>{
          if(res.status==='200'){
            window.location.href='../center/index.html';
            this.until.seSave('isLogin',false)
            this.ifLogin=false;
          }
        },
        err=>{
          this.$message.error('退出失败')
        }
      )
    }
  }
};
</script>

<style lang="less" scoped>
#header {
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e1e1e1;
  .top {
    background: #3a71a8;
    color: #fff;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    .top-wrap {
      width: 1200px;
      margin: 0 auto;
      img {
        width: auto;
        float: left;
      }
    }
  }
  > .header-wrap {
    width: 1200px;
    margin: 0 auto;
    height: 124px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-items: center;
    > a {
      font-size: 36px;
      color: #3a71a8;
      flex: 1;
      font-weight: bold;
    }
    .search {
      width: 300px;
      input {
        border: 1px solid #e1e1e1;
        background: #f9f9f9;
        width: 70%;
        height: 36px;
        line-height: 36px;
        text-indent: 8px;
        float: left;
        font-size: 16px;
      }
      button {
        float: left;
        background: #1b4e81;
        color: #fff;
        width: 20%;
        height: 38px;
        line-height: 38px;
        text-align: center;
        border: 0;
      }
    }
    p {
      padding-left: 25px;
      color: #e3e3e3;
      a {
        color: #666666;
        display: inline-block;
        margin: 0 8px;
        font-size: 16px;
      }
      span {
        color: #ff7867;
        cursor: pointer;
      }
    }
  }
}
</style>