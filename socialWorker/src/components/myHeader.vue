<template>
    <div id="header">
        <div class="top">
            <div class="content">
                <img src="../assets/img/logo.png" @click="toHome"/>
                宁波广播电视大学
            </div>
        </div>
        <div class="content">
            <a href="../center/index.html">社会培训系统</a>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                {{address}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="宁波">宁波</el-dropdown-item>
                <el-dropdown-item command="海曙">海曙</el-dropdown-item>
                <el-dropdown-item command="江北">江北</el-dropdown-item>
                <el-dropdown-item command="鄞州">鄞州</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div class="search">
                <input v-model="key" placeholder="宁波社会培训网"/>
                <button @click="goSearch">搜索</button>
            </div>
            <p v-if="!ifLogin"><a href="../entry/login.html">登录</a>|<a href="#">注册</a></p>
            <p v-else><span @click="toPersonal()">欢迎您的登录，小六！</span> <span @click="quit">退出</span></p>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'App',
        data(){
          return{
              ifLogin:true,  //是否登录
              key:'',
              address:'宁波',
          }
        },
        mounted(){
            // this.abc();

        },
        methods: {
            toHome(){
              window.location.href = '../center/index.html'
            },
            goSearch(){
                let url = '../center/search.html?key='+this.key
                window.location.href = url
            },
            quit(){

            },
            toPersonal(){
              this.$router.push('/personal/membercenter')
            },
            handleCommand(command){

              this.address=command;
            }
        }
    }
</script>

<style lang="less" scoped>
    #header{
        width: 100%;
        border-bottom: 1px solid #e1e1e1;
        .top{
            background: #3a71a8;
            color: #fff;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            img{
                width: auto;
                float: left;
            }
        }
        >.content{
            height: 124px;
            display: flex;
            display: -webkit-flex;
            align-items: center;
            justify-items: center;
            >a{
                font-size: 36px;
                color: #3a71a8;
                flex: 1;
                font-weight: bold;
            }
            .el-dropdown{
              margin-right: 400px;
              font-size: 18px;
            }
            .search{
                width: 300px;
                input{
                    border: 1px solid #e1e1e1;
                    background: #f9f9f9;
                    width: 70%;
                    height: 36px;
                    line-height: 36px;
                    text-indent: 8px;
                    float: left;
                    font-size: 16px;
                }
                button{
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
            p{
                padding-left: 25px;
                color: #e3e3e3;
                a{
                    color: #666666;
                    display: inline-block;
                    margin:0 8px;
                    font-size: 16px;
                }
                span{
                    color: #ff7867;
                    cursor: pointer;
                }
            }
        }
    }
</style>