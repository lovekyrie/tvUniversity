<template>
    <!--学习之星-->
    <div class="learnList">
        <!--列表顶部-->
        <div class="learnTop">
            <span><a href="#">首页</a></span>
            <span class="topLine"> > </span>
            <span><a href="#">在线学习</a></span>
        </div>

        <!--表格-->
        <div class="starTable">
            <el-table :data="starData"
                      width="100%"
                      :header-row-style="headerStyle"
                      :row-style="rowStyle"
            >
                <el-table-column prop="rate"
                                 label="排名"
                                 align="center"
                >
                    <!--前三序号颜色-->
                    <template slot-scope="scope">
                        <span v-if="scope.row.rate==1" style="color: red" >
                            {{scope.row.rate}}
                        </span>
                        <span v-else-if="scope.row.rate==2" style="color: orange" >
                            {{scope.row.rate}}
                        </span>
                        <span v-else-if="scope.row.rate==3" style="color: green" >
                            {{scope.row.rate}}
                        </span>
                        <span v-else>
                            {{scope.row.rate}}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="name"
                                 label="用户名"
                                 align="center"
                ></el-table-column>
                <el-table-column prop="duration"
                                 label="学习时长"
                                 align="center"
                >
                    <template slot-scope="scope">
                        {{scope.row.duration}}小时
                    </template>
                </el-table-column>

            </el-table>
        </div>


    </div>


</template>

<script>
    export default {
        data() {
            return {
                //表格样式
                headerStyle: {
                    height: '80px',
                },
                rowStyle: {
                    height: '80px'
                },

                starData: [
                    {
                        rate: 1,
                        name: '老张',
                        duration: 180,
                    }, {
                        rate: 2,
                        name: '老王',
                        duration: 100,
                    }, {
                        rate: 3,
                        name: '老张',
                        duration: 70,
                    }, {
                        rate: 4,
                        name: '老张',
                        duration: 70,
                    }, {
                        rate: 5,
                        name: '老张',
                        duration: 70,
                    },
                ]
            }
        }
    }
</script>

<style type="text/less" lang="less">
    .learnList {
        display: flex;
        width: 75%;
        min-width: 1060px;
        margin: 0 auto;
        flex-direction: column;
        background-color: white;

        //列表顶部
        .learnTop {
            display: flex;
            align-items: center;
            height: 80px;
            border-bottom: 1px solid rgb(235, 235, 235);

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

        .starTable {
            margin-bottom: 80px;

            .el-table {
                font-size: 16px;

                td, th {
                    border: none;
                }

                td {
                    font-size: 22px;
                }

            }

        }

    }

</style>