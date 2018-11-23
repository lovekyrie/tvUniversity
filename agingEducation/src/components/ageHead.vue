<template>
    <div id="ageHead">
        <div class="aHead">
            <div class="headImg">
                <img src="./img/logo.png">
            </div>
            <div class="headTitle">
                <span>宁波社区大学老年教育中心</span>
                <span>宁波广播电视大学老年教育学院</span>
            </div>
            <div class="headSearch">
                <input v-model="ageSearch" placeholder="宁波电大老年教育网">
            </div>
            <div class="searchButton">
                <button class="searchButton">搜索</button>
            </div>

            <div class="loginReg">
                <a href="#" style="margin-right: 10px">登录</a>
                <a href="#">注册</a>
            </div>
            <div class="AFont">
                <span style="margin-right: 10px">字体大小</span>
                <a href="#" style="margin-right: 10px">A</a>
                <a href="#" style="font-size: 16px;font-weight: 500">A</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                ageSearch:'',
            }
        }
    }
</script>

<style lang="less" type="text/less">
    #ageHead {
        min-width: 1060px;
        height: 140px;
        background-color: rgb(58, 113, 168);

        .aHead {
            display: flex;
            width: 75%;
            min-width: 1060px;
            height: 140px;
            color: white;
            margin: 0 auto;

            /*整体左浮动*/
            div {
                float: left;
                height: 140px;
                margin-right: 30px;
            }
            /*图片位置*/
            .headImg{
                flex: 1;
                line-height: 140px;

                img{
                    width: 100%;
                    vertical-align: middle;
                }
            }
            /*标题*/
            .headTitle{
                flex: 3.3;
                display: flex;
                flex-direction: column;
                justify-content: center;
                font-size: 24px;
            }
            /*当页面宽度*/
            @media screen and (max-width: 1440px){
                .headTitle{
                    font-size: 18px;
                }
            }
            /*搜索框*/
            .headSearch{
                display: flex;
                flex: 3;
                margin-right: 0;
                align-items: center;

                input{
                    width: 100%;
                    height: 45px;
                    padding-left: 15px;
                    font-size: 16px;
                    color: rgb(145,145,145);
                    border: 1px solid;
                    border-right: none;
                }
            }

            /*搜索按钮*/
            .searchButton{
                flex: 1;
                display: flex;
                align-items: center;

                button{
                    width: 100%;
                    height: 45px;
                    display: block;
                    border:none;
                    font-size: 16px;
                    color: white;
                    text-align: center;
                    background-color: rgb(27,78,129);
                    font-weight: 300;
                }
            }

            /*登录注册*/
            .loginReg{
                flex: 0.7;
                line-height: 140px;
                min-width: 70px;

                a{
                    color: white;
                    text-decoration: none;
                    font-weight: 300;
                }
            }

            /*Afont*/
            .AFont{
                flex: 1;
                min-width: 105px;
                line-height: 140px;
                font-weight: 300;

                a{
                    color: white;
                    text-decoration: none;

                }
            }

        }
    }


</style>