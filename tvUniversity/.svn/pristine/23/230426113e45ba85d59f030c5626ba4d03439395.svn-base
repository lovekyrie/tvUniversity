<template>
    <div id="header">
        <div class="top">
            <div class="content">
                <img src="../assets/img/logo.png" @click="toHome"/>
                宁波广播电视大学
            </div>
        </div>
        <div class="content">
            <a href="../center/index.html">宁波电视大学网</a>
            <div class="search">
                <input v-model="key" placeholder="宁波电大老年教育网"/>
                <button @click="goSearch">搜索</button>
            </div>
            <p v-if="!ifLogin"><a href="../entry/login.html">登录</a>|<a href="#">注册</a></p><p v-else><a href="#">欢迎您的登录，小六！</a> <span @click="quit">退出</span></p><p><a href="#">后台管理系统</a> </p>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'App',
        data(){
          return{
              ifLogin:false,  //是否登录
              key:'',
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