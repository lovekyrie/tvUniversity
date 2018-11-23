<template>
    <!--热门课程-->
    <div class="learnList">
        <!--列表顶部-->
        <div class="learnTop">
            <span><a href="#">首页</a></span>
            <span class="topLine"> > </span>
            <span><a href="#">在线学习</a></span>
        </div>

        <!--搜索框-->
        <div class="learnSearch">
            <el-select v-model="value" filterable>
                <el-option label="课程类型" value="1" disabled></el-option>
                <el-option v-for="vl in options"
                           :label="vl.label"
                           :value="vl.value"
                           :key="vl.label"
                >
                </el-option>

            </el-select>
            <el-input v-model="selected" placeholder="输入关键字" :label="value">
            </el-input>
            <el-button type="primary">搜索</el-button>
        </div>

        <!--课程-->
        <el-row :gutter="30" style="margin-bottom: 130px">
            <el-col :span="12" v-for="(item,index) in classes" :key="index">
                <div class="classes">
                    <div class="classImg">
                        <img :src="item.classImg">
                    </div>
                    <div class="classMsg">
                        <h4>{{item.title}}</h4>
                        <p>主讲人：{{item.speaker}}</p>
                        <span>{{item.content}}</span>
                        <el-button type="primary">开始学习</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>

    </div>


</template>

<script>
    export default {
        data(){
            return {
                value:'1',
                options:[
                    {
                        label:'所有',
                        value:'2',
                    } ,{
                        label:'音乐',
                        value:'3',
                    } ,{
                        label:'美术',
                        value:'4',
                    } ,{
                        label:'舞蹈',
                        value:'5',
                    } ,
                ],

                selected:'',

                classes:[
                    {
                        classImg:require('../img/在线学习.png'),
                        title:'中华美食',
                        speaker:'刘一',
                        content:'中国饮食文化源远流长'
                    },{
                        classImg:require('../img/在线学习.png'),
                        title:'中华美食',
                        speaker:'刘一',
                        content:'中国饮食文化源远流长'
                    },{
                        classImg:require('../img/在线学习.png'),
                        title:'中华美食',
                        speaker:'刘一',
                        content:'中国饮食文化源远流长'
                    },{
                        classImg:require('../img/在线学习.png'),
                        title:'中华美食',
                        speaker:'刘一',
                        content:'中国饮食文化源远流长'
                    },
                ],

            }
        }
    }
</script>

<style type="text/less" lang="less">
    .learnList{
        display: flex;
        width: 75%;
        min-width: 1060px;
        margin: 0 auto;
        flex-direction: column;
        background-color: white;


        //列表顶部
        .learnTop{
            display: flex;
            align-items: center;
            height: 80px;
            border-bottom: 1px solid rgb(235,235,235);

            a{
                color: rgb(135,135,135);
                font-size: 20px;
                font-weight: 300;
                text-decoration: none;
            }

            .topLine{
                padding: 0 5px;
                font-size: 20px;
                color: rgb(135,135,135);
            }

        }

        //  搜索框
        .learnSearch{
            height: 100px;
            padding: 30px 0;

            .el-select{

            }

            >.el-input{
                width: 25%;
                margin: 0px 20px;

            }

            >.el-button{
                background-color: #3A71A8;
                width: 10%;
                font-weight: 300;
                font-size: 16px;
            }
        }

        //课程
        .classes{
            display: flex;
            flex-direction: row;
            margin-bottom: 30px;
            border: 1px solid rgb(235,235,235);

            //左侧图片
            .classImg{
                flex: 1;

                >img{
                    width: 100%;
                    min-height: 310px;
                }
            }

            //右侧信息
            .classMsg{
                flex: 1.3;
                padding-left: 5%;
                position: relative;

                >h4{
                    font-size: 24px;
                    line-height: 50px;
                    font-weight: 400;
                }

                //主讲人
                >p{
                    font-size: 20px;
                    color: rgb(135,135,135);
                    margin-bottom: 40px;
                }

                >span{
                    display: block;
                    font-size: 18px;
                    font-weight: 300;
                    color: rgb(135,135,135);

                }

                //按钮
                >.el-button{
                    background-color: #3A71A8;
                    font-weight: 300;
                    font-size: 16px;
                    position: absolute;
                    bottom: 30px;
                }

            }

        }


    }

</style>