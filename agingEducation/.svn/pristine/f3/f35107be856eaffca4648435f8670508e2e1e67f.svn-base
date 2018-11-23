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
            <span><a href="#">签到记录</a></span>
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
                <el-table style="width: 100%"
                          :data="signTable"
                          :cell-style="cellStyle"
                          :header-cell-style="headerStyle"
                >
                    <el-table-column prop="name" label="课程名称" align="left"></el-table-column>
                    <el-table-column prop="time" label="签到时间" align="left"></el-table-column>
                </el-table>

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

                //    签到表单
                cellStyle: {
                    fontSize: '20px',
                    paddingLeft:'5%',
                },
                headerStyle: {
                    fontSize: '18px',
                    paddingLeft:'5%',
                    fontWeight:'300'
                },
                signTable: [
                    {
                        name: '计算机名称',
                        time: '2017.11.16 14:51'
                    }, {
                        name: '计算机名称',
                        time: '2017.11.16 14:51'
                    }, {
                        name: '计算机名称',
                        time: '2017.11.16 14:51'
                    }, {
                        name: '计算机名称',
                        time: '2017.11.16 14:51'
                    }, {
                        name: '计算机名称',
                        time: '2017.11.16 14:51'
                    }, {
                        name: '计算机名称',
                        time: '2017.11.16 14:51'
                    },
                ]

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
                padding: 0px 60px 90px 30px;

                .learnSearch {
                    height: 100px;
                    padding: 30px 0;

                    .el-select {

                    }
                }

            }
        }

    }

</style>