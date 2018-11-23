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
            <span><a href="#">我的班级</a></span>
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
                        <el-option label="班级状态" value="1" disabled></el-option>
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
                                    <span class="title">{{item.name}}</span>
                                    <span class="statusStyle" v-if="item.status=='进行中'" style="color: red">
                                        {{item.status}}
                                    </span>
                                    <span class="statusStyle" v-else style="color: rgb(145,145,145)">
                                        {{item.status}}
                                    </span>
                                </p>
                                <p class="teacher">班主任 ：{{item.teacher}}</p>
                                <p class="school">上课时间 ： {{item.schoolTime}}</p>
                                <p class="school">上课地点 ： {{item.schoolPlace}}</p>

                                <el-row :gutter="40">
                                    <el-col :span="12">
                                        <button @click="evaluating = true">满意度评测</button>
                                    </el-col>
                                    <el-col :span="12">
                                        <button style="background-color: white;color: #3A71A8;border: 1px solid #3A71A8">
                                            证书申请
                                        </button>
                                    </el-col>

                                </el-row>

                                <!--满意度评测弹出框-->
                                <el-dialog :visible.sync="evaluating" center width="28%">
                                    <div slot="title" class="dialog-title">
                                        <span style="font-size: 22px">满意度评测</span>
                                    </div>
                                    <el-form :model="form" label-position="left">
                                        <el-form-item label="对象" label-width="56px">
                                            <el-select v-model="form.region" style="width: 100%">
                                                <el-option label="学校" value="school"></el-option>
                                                <el-option label="当前课程" value="lesson"></el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-input type="textarea" rows="5" v-model="form.des"
                                                      auto-complete="off"
                                                      placeholder="您可以在这里表达您对当前课程，或学校的建议"
                                            >
                                            </el-input>
                                        </el-form-item>
                                    </el-form>
                                    <div slot="footer" class="dialog-footer">
                                        <el-button type="primary" @click="evaluating = false">提交</el-button>
                                    </div>
                                </el-dialog>

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
                        label: '进行中',
                        value: '2',
                    }, {
                        label: '已结束',
                        value: '3',
                    },
                ],
                selected: '',

                myLessons: [
                    {
                        pic: require('../img/个人空间-我的课程.png'),
                        name: '班级名称',
                        status: '进行中',
                        teacher: '刘一',
                        schoolTime: '',
                        schoolPlace: '',
                    }, {
                        pic: require('../img/个人空间-我的课程.png'),
                        name: '班级名称',
                        status: '已结束',
                        teacher: '刘一',
                        schoolTime: '',
                        schoolPlace: '',
                    }, {
                        pic: require('../img/个人空间-我的课程.png'),
                        name: '班级名称',
                        status: '已结束',
                        teacher: '刘一',
                        schoolTime: '',
                        schoolPlace: '',
                    }, {
                        pic: require('../img/个人空间-我的课程.png'),
                        name: '班级名称',
                        status: '已结束',
                        teacher: '刘一',
                        schoolTime: '',
                        schoolPlace: '',
                    },
                ],
                //满意度评测
                evaluating: false,
                form: {
                    name: '',
                    region: '学校',
                    des: '',
                },


            }
        },
        methods: {}

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
                padding: 0px 30px 30px 30px;

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
                    margin-bottom: 30px;

                    img {
                        width: 100%;
                        margin-bottom: 20px;
                    }
                    //标题
                    .title {
                        font-size: 22px;
                        margin-bottom: 15px;
                    }

                    .statusStyle {
                        float: right;
                        font-size: 18px;
                    }

                    .teacher {
                        color: rgb(145, 145, 145);
                        font-size: 18px;
                        margin-bottom: 15px;
                    }

                    .school {
                        font-size: 16px;
                        color: rgb(145, 145, 145);
                        margin-bottom: 10px;
                    }

                    button {
                        width: 85%;
                        height: 33px;
                        background-color: #3A71A8;
                        color: white;
                        font-size: 16px;
                        border-radius: 4px;
                        margin-bottom: 20px;
                        font-weight: 300;
                    }

                    //弹出框
                    .el-dialog {

                        .el-button--primary {
                            width: 50%;
                            height: 40px;
                            font-size: 18px;
                        }

                    }

                }
            }
        }

    }

</style>

<!--弹出框的样式要在全局作用域上单独修改-->
<style type="text/less" lang="less">
    .lessons {

         .el-dialog {

            .el-dialog__body {
                padding-bottom: 0;
            }

            .el-form-item__label {
                font-size: 20px;
                font-weight: 400;
            }

            .el-input {
                font-size: 18px;
            }

            .el-textarea {
                font-size: 18px;
                font-weight: 300;
            }
        }
    }

</style>