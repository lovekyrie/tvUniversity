<template>
    <!--热门课程-->
    <div class="learnList">
        <!--列表顶部-->
        <div class="learnTop">
            <span><a href="#">首页</a></span>
            <span class="topLine"> > </span>
            <span><a href="#">个人空间</a></span>
            <span class="topLine"> > </span>
            <span><a href="#">我的课程</a></span>
            <span class="topLine"> > </span>
            <span><a href="#">课程详情</a></span>
        </div>

        <!--导航栏-->
        <div class="content">
            <div class="myMenu">
                <el-menu :default-active="current"
                         router
                         class="el-menu-demo"
                         mode="vertical"
                         background-color="#F6F6F6"
                         text-color="#666666"
                         active-text-color="#FFFFFF"
                >
                    <el-menu-item v-for="(item,i) in navList"
                                  :key="i"
                                  :index="item.name">
                        {{item.navItem}}
                    </el-menu-item>
                </el-menu>
            </div>

            <!--内容-->
            <div class="inContent">
                <h3>{{title}}</h3>
                <p>{{artical}}</p>
                <div class="inImg">
                    <img :src="inImg" alt="图片">
                    <div class="inTime">{{inTime}}</div>
                </div>


            </div>
        </div>

        <!--课程-->

    </div>


</template>

<script>
    export default {
        data() {
            return {
                current:'/myLessons',
                navList: [
                    {
                        name: '/myLessons',
                        navItem: '我的课程'
                    }, {
                        name: '/myClasses',
                        navItem: '我的班级'
                    }, {
                        name: '/myCertificate',
                        navItem: '我的证书'
                    }, {
                        name: '/signIn',
                        navItem: '签到记录'
                    }, {
                        name: '/tidings',
                        navItem: '消息中心'
                    }, {
                        name: '/personalData',
                        navItem: '个人资料'
                    }, {
                        name: '/myTeam',
                        navItem: '我的团'
                    },
                ],

                title:'招生简章',
                artical:'课程详情课程详情课程详情课程详情课程详情课程详情课程详情课程详情,' +
                '课程详情课程详情课程详情课程详情课程详情课程详情课程详情课程详情。',
                inImg:require('../img/个人空间-我的课程详情.png'),
                inTime:'2018年5月12日'
            }
        },


    }
</script>

<style type="text/less" lang="less" scoped>
    .learnList {
        width: 75%;
        min-width: 1060px;
        margin: 0 auto;
        background-color: white;

        //列表顶部
        .learnTop {
            align-items: center;
            height: 80px;
            border-bottom: 1px solid rgb(235, 235, 235);
            margin-bottom: 30px;

            a {
                color: rgb(135, 135, 135);
                font-size: 20px;
                font-weight: 300;
                text-decoration: none;
            }

            .topLine {
                padding: 0 5px;
                font-size: 20px;
                color: rgb(135, 135, 135);
            }

        }

        .content {
            display: flex;
            flex-direction: row;
            margin-bottom: 200px;

            //导航栏
            .myMenu {
                flex: 1 0 14%;
                margin-right: 20px;
                text-align: center;
                max-height: 650px;

                .el-menu-demo {
                    width: 100%;
                    padding: 20px 0px 30px 0;
                }

                .el-menu-item {
                    font-size: 16px;
                    height: 40px;
                    line-height: 40px;
                    margin: 10px 0px;
                }

                .el-menu-item.is-active {
                    background-color: #3A71A8 !important;
                    margin: 10px 25px;

                }
            }

            //内容
            .inContent {
                display: flex;
                flex-direction: column;
                flex: 1 0 83%;
                background-color: #F6F6F6;
                padding: 30px 40px 50px 40px;
                justify-content: center;
                font-weight: 300;

                >h3{
                    text-align: center;
                    margin-bottom: 20px;
                    font-size: 24px;
                    font-weight: 400;
                }

                >p{
                    font-size: 22px;
                    color: rgb(145,145,145);
                    margin-bottom: 20px;
                    line-height: 1.5em;
                }

                //图片
                .inImg{
                    padding: 0 20px;

                    >img{
                        width: 100%;
                        margin-bottom: 20px;
                    }

                    .inTime{
                        float: right;
                        color: rgb(145,145,145);
                        font-size: 16px;
                    }
                }


            }
        }

    }

</style>