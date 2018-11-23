<template>
    <!--热门课程-->
    <div class="learnList">
        <router-view></router-view>
        <!--列表顶部-->
        <div class="learnTop">
            <span><a href="#">首页</a></span>
            <span class="topLine"> > </span>
            <span><a href="#">个人空间</a></span>
            <span class="topLine"> > </span>
            <span><a href="#">我的证书</a></span>
        </div>

        <!--导航栏-->
        <div class="content">
            <div class="myMenu">
                <el-menu default-active="/myCertificate"
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
                <div class="learnSearch">
                    <el-select v-model="value" filterable>
                        <el-option label="全部消息" value="1" disabled></el-option>
                        <el-option v-for="vl in options"
                                   :label="vl.label"
                                   :value="vl.value"
                                   :key="vl.label"
                        >
                        </el-option>
                    </el-select>

                    <button @click="toUpdate">上传证书</button>
                </div>

                <!--证书图列-->
                <el-row :gutter="25">
                    <el-col :span="6" v-for="(item,i) in certificates" :key="i">
                        <div class="certificate">
                            <img :src="item.url" alt="证书">
                            <span>{{item.name}}</span>
                        </div>
                    </el-col>
                </el-row>

            </div>
        </div>

        <!--课程-->
    </div>


</template>

<script>
    export default {
        data() {
            return {
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

                value: '1',
                options: [
                    {
                        label: '已读',
                        value: '2',
                    }, {
                        label: '未读',
                        value: '3',
                    },
                ],
                certificates:[
                    {
                        url:require('../img/个人空间-我的课程详情.png'),
                        name:'证书名称'
                    },{
                        url:require('../img/个人空间-我的课程详情.png'),
                        name:'证书名称'
                    },{
                        url:require('../img/个人空间-我的课程详情.png'),
                        name:'证书名称'
                    },{
                        url:require('../img/个人空间-我的课程详情.png'),
                        name:'证书名称'
                    },{
                        url:require('../img/个人空间-我的课程详情.png'),
                        name:'证书名称'
                    },{
                        url:require('../img/个人空间-我的课程详情.png'),
                        name:'证书名称'
                    },{
                        url:require('../img/个人空间-我的课程详情.png'),
                        name:'证书名称'
                    },
                ]

            }
        },
        methods: {
            toUpdate(){
                this.$router.push({path:'/updateCet'});
            }
        }


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
                flex: 1 0 83%;
                background-color: #F6F6F6;
                padding: 0px 30px 100px 30px;

                .learnSearch {
                    height: 100px;
                    padding: 30px 0;

                    .el-select {

                    }

                    >button{
                        float: right;
                        width: 15%;
                        height: 40px;
                        border-radius: 5px;
                        font-size: 16px;
                        background-color: #3A71A8;
                        color: white;
                    }
                }

                .certificate{
                    margin-bottom: 30px;

                    >img{
                        width: 100%;
                        margin-bottom: 10px;
                    }

                    >span{
                        display: block;
                        text-align: center;
                        font-size: 18px;
                    }
                }

            }
        }

    }

</style>