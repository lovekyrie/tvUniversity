<style lang="less">
    .dd-cnt{
        /*background:url("./img/header.png");*/
        background-color: #3a71a8;
        height: 60px;
        line-height:60px;
        .top-menu-contents{
            height: 60px;
            line-height:60px;
            width: 1200px;
            margin: 0 auto;
            font-size: 0;
            img{
                display: inline-block;
                width: 45px;
                height: 45px;
                vertical-align: middle;
            }
            #topMenu{
                font-size: 20px;
                color: #fff;
                vertical-align: middle;
                margin-left: 10px;
            }
        }
    }
</style>
<template>
    <div class="header">
        <!--<div class="content">-->
            <!--<a href="../home/index.html"><img src="./img/ad.jpg" alt=""></a>-->
            <!--<div class="title">-->
                <!--<p>宁波社区大学老年教育中心</p>-->
                <!--<p>宁波广播电视大学老年教育学院</p>-->
            <!--</div>-->
            <!--<div class="search"><input type="text" placeholder="宁波电大老年教育网" style='background-color: #fff;'><button @click="building">搜索</button></div>-->
            <!--<p class="home-login">-->
                <!--<a href="../system/login.html" v-if="!token">登录</a>-->
                <!--<a href="../system/register.html" v-if="!token">注册</a>-->
                <!--<a v-if="token" class="name">{{username}}</a>-->
                <!--<a v-if="token" @click="cancelLogin" class="cl-class">退出</a>-->
            <!--</p>-->
            <!--<h3><em>字体大小</em><ins @click="sizeA">A</ins>&nbsp;<span @click="sizeB">A</span></h3>-->
        <!--</div>-->
        <div class="dd-cnt">
            <div class="top-menu-contents">
                <img src="./img/logo.png">
                <span id="topMenu">宁波社区大学老年教育中心</span>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        token: '',
        username:'',
        size:'0'
      }
    },
    mounted() {
      if(this.until.isLogin()){
        this.token = this.until.getToken();
        /*获取详细信息*/
        var StuPK = this.until.getStuPK();

       let promise = new Promise(resolve=>{
          this.until.get(`/px/stu/infoAll/${StuPK}`,{})
            .then(res=>{
              var userInfo = {
                name:res.data.SysUserDtox.crtBy,
                img:res.data.SysUserDtox.imgUrl,
                dz:0
              };
              resolve(userInfo);
            this.username = res.data.SysUserDtox.crtBy;
            })
       })
        this.$emit('userInfo',promise);
      }
      if(localStorage.getItem('size')=='1'){
        this.size = localStorage.getItem('size');
      }
      this.size=='1'?this.sizeB():this.sizeA();
    },
    methods: {
      building(){
        this.$alert('该功能正在建设中','提示',{
          confirmButtonText:'确定'
        });
      },
      sizeA() {
        $('.g-content').removeClass('size');
        this.$emit('state', false);
        localStorage.setItem('size','0');
        this.size = '0';
      },
      sizeB() {
        $('.g-content').addClass('size');
        this.$emit('state', true);
        localStorage.setItem('size','1');
        this.size = '1';
      },
      cancelLogin() {
        this.until.delToken();
      }
    }
  }
</script>
<!--<style lang="less">-->
    <!--.header {-->
        <!--background: #3a71a8;-->
        <!--color: #fff;-->

        <!--.content {-->
            <!--display: flex;-->
            <!--align-items: center;-->
            <!--width: 1200px;-->
            <!--margin: 0 auto;-->
            <!--height: 90px;-->
        <!--}-->
        <!--.home-login {-->
            <!--width: 180px;-->
            <!--text-align: center;-->
        <!--}-->
        <!--img {-->
            <!--width: 50px;-->
            <!--height: 70px;-->
        <!--}-->
        <!--.title {-->
            <!--margin: 0 26px;-->

            <!--p {-->
                <!--font-size: 20px;-->
            <!--}-->
            <!--p:nth-of-type(1) {-->
                <!--margin-bottom: 15px;-->
            <!--}-->
        <!--}-->
        <!--input {-->
            <!--display: inline-block;-->
            <!--width: 300px;-->
            <!--height: 45px;-->
            <!--text-indent: 10px;-->
            <!--border: none;-->
            <!--font-size: 20px;-->
        <!--}-->
        <!--button {-->
            <!--display: inline-block;-->
            <!--height: 45px;-->
            <!--border: none;-->
            <!--width: 110px;-->
            <!--background: #1b4e81;-->
            <!--color: #fff;-->
            <!--font-size: 20px;-->
            <!--cursor: pointer;-->
        <!--}-->
        <!--a {-->
            <!--display: inline-block;-->
            <!--color: #fff;-->
            <!--font-size: 20px;-->
            <!--height: auto;-->
            <!--cursor: pointer;-->
            <!--overflow: hidden;-->
            <!--&:nth-of-type(1){-->
                <!--margin-left: 40px;-->
            <!--}-->
            <!--&:nth-of-type(2){-->
                <!--margin-left: 30px;-->
            <!--}-->
            <!--&.name{-->
                <!--width: 80px;-->
                <!--text-overflow: ellipsis;-->
                <!--white-space: nowrap;-->
            <!--}-->
            <!--&.cl-class{-->
                <!--margin-left: 0px;-->
            <!--}-->
        <!--}-->
        <!--h3 {-->
            <!--font-size: 20px;-->
            <!--margin-left: 20px;-->
            <!--margin-bottom: 5px;-->
            <!--em {-->
                <!--margin-right: 15px;-->
            <!--}-->
            <!--ins {-->
                <!--cursor: pointer;-->
            <!--}-->
            <!--span {-->
                <!--font-size: 25px;-->
                <!--cursor: pointer;-->
            <!--}-->
        <!--}-->
    <!--}-->

<!--</style>-->