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
            <span><a href="#">我的课程</a></span>
        </div>

        <!--导航栏-->
        <div class="content">
            <div class="myMenu">
                <el-menu :default-active="this.$route.path"
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
                        <el-option label="课程名称" value="1" disabled></el-option>
                        <el-option v-for="vl in options"
                                   :label="vl.label"
                                   :value="vl.value"
                                   :key="vl.label"
                        >
                        </el-option>

                    </el-select>
                </div>

                <el-row :gutter="20">
                    <el-col :span="12" v-for="(item,i) in myLessons" :key="i">
                        <div class="lessons">
                            <img :src="item.pic">

                            <!--内容-->
                            <div style="padding: 0px 30px">
                                <p>
                                    <span class="title">{{item.title}}</span>
                                    <span class="statusStyle" v-if="item.status=='审核中'" style="color: red">
                                        {{item.status}}
                                    </span>
                                    <span class="statusStyle" v-else-if="item.status=='报名失败'" style="color: rgb(145,145,145)">
                                        {{item.status}}
                                    </span>
                                    <span class="statusStyle" v-else style="color: #3A71A8">
                                        {{item.status}}
                                    </span>
                                </p>
                                <p class="teacher">任课老师 ：{{item.teacher}}</p>
                                <p class="des">{{item.des}}</p>
                                <button @click="toDetail">查看详情</button>
                                <p style="color: rgb(145,145,145);font-size: 16px">已有 <span style="color: red">{{item.num}}</span> 人报名</p>
                            </div>

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
                        label: '所有',
                        value: '2',
                    }, {
                        label: '音乐',
                        value: '3',
                    }, {
                        label: '美术',
                        value: '4',
                    }, {
                        label: '舞蹈',
                        value: '5',
                    },
                ],
                selected: '',

                myLessons: [
                    {
                        pic: require('../img/个人空间-我的课程.png'),
                        title: '中华美食',
                        status: '审核中',
                        teacher: '刘一',
                        des: '中华美食文化源远流长',
                        num: 25,
                    },{
                        pic: require('../img/个人空间-我的课程.png'),
                        title: '中华美食',
                        status: '报名失败',
                        teacher: '刘一',
                        des: '中华美食文化源远流长',
                        num: 25,
                    },{
                        pic: require('../img/个人空间-我的课程.png'),
                        title: '中华美食',
                        status: '报名成功',
                        teacher: '刘一',
                        des: '中华美食文化源远流长',
                        num: 25,
                    },{
                        pic: require('../img/个人空间-我的课程.png'),
                        title: '中华美食',
                        status: '审核中',
                        teacher: '刘一',
                        des: '中华美食文化源远流长',
                        num: 25,
                    },
                ]


            }
        },
        methods:{
            toDetail(){
                this.$router.push({path:'/myLessonDetail'});

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
                }

                //课程
                .lessons {
                    border: 1px solid rgb(226, 226, 226);
                    background-color: white;
                    padding-bottom: 20px;
                    margin-bottom: 30px;

                    img {
                        width: 100%;
                        margin-bottom: 20px;
                    }
                    //标题
                    .title {
                        font-size: 22px;
                        margin-bottom: 10px;
                    }

                    .statusStyle{
                        float: right;
                        font-size: 18px;
                    }

                    .teacher{
                        color: rgb(145,145,145);
                        font-size: 20px;
                        margin-bottom: 20px;
                    }

                    .des{
                        font-size: 18px;
                        color: rgb(145,145,145);
                        font-weight: 300;
                        margin-bottom: 20px;
                    }

                    button{
                        width: 35%;
                        height: 33px;
                        background-color: #3A71A8;
                        color: white;
                        font-size: 16px;
                        border-radius: 4px;
                        margin-bottom: 20px;
                        font-weight: 300;
                    }

                }
            }
        }

    }

</style>