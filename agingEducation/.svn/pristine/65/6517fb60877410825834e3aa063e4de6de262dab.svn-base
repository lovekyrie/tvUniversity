<template>
    <div id="container">
        <!--顶部-->
        <ageHead></ageHead>
        <!--页面主体部分-->
        <div id="main">
            <!--列表-->
            <div class="mainList">
                <!--列表顶部-->
                <div class="mainTop">
                    <span><a href="#">首页</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">实体办学</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">精彩活动</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">活动详情</a></span>
                </div>

                <!--活动介绍-->
                <div class="mainContent">
                    <div class="contentImg"><img :src="mainContent.mainPic" alt="图片">
                    </div>

                    <div class="contentDes">
                        <h3>{{mainContent.title}}</h3>
                        <p>主办方：{{mainContent.sponsor}}</p>
                        <p style="margin-bottom: 100px"><span style="color:red;">{{mainContent.nums}}</span> 人参与</p>
                        <p style="color: rgb(135,135,135);font-weight: 300;line-height: 1.5em">
                            时间：{{mainContent.beginTime}}-{{mainContent.endTime}}</p>
                        <p style="color: rgb(135,135,135);font-weight: 300;line-height: 1.5em;margin-bottom: 35px">
                            来源：{{mainContent.author}}</p>
                        <a href="#">发布作品</a>
                    </div>
                </div>

                <!--活动详情-->
                <div class="actDetail">
                    <h3>活动详情</h3>

                    <el-collapse accordion v-model="activeNames">
                        <el-collapse-item name="1">
                            <template slot="title">
                                <span class="actTitle">{{mainContent.title}}</span>
                            </template>
                            <div><span class="actTitle">{{actDetail}}</span></div>

                        </el-collapse-item>
                    </el-collapse>


                </div>

                <!--投票内容-->
                <div class="voteContent">
                    <h3>参赛作品</h3>
                    <div class="contents">
                        <el-row :gutter="25">
                            <el-col :span="8" v-for="(item,index) in contents" style="margin-bottom: 30px" :key="index">
                                <div class="inContent">
                                    <div class="inner">
                                        {{item.works}}

                                    </div>
                                    <p>上传作者:{{item.author_v}}</p>
                                    <p>已投票数:{{item.votes}}</p>
                                    <span>
                                        <button @click.once="voteItem(index)">投他一票</button>
                                        <img :src="item.pic" alt="图片">
                                    </span>
                                </div>

                            </el-col>
                        </el-row>

                    </div>

                </div>

                <!--底部分页按钮-->
                <div class="nextButton">
                    <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage"
                            :page-size="5"
                            layout="pager,next,slot"
                            background
                            :total="total"
                            next-text="下一页">
                        <span style="margin-left: 10px">共{{total}}条记录，共{{total/5}}页</span>
                    </el-pagination>
                </div>


            </div>
        </div>

        <!--底部-->
        <ageFoot></ageFoot>
    </div>
</template>

<script>
    import ageHead from 'components/ageHead';
    import ageFoot from 'components/ageFoot';

    export default {
        data() {
            return {
                mainContent: {
                    mainPic: require('../img/发布活动_03.png'),
                    title: '“逗宝杯” 公益创新逻辑思维竞赛',
                    sponsor: '宁波电视大学',
                    nums: '12228',
                    beginTime: '2017.12.16',
                    endTime: '2018.01.06',
                    author: '宁波电大',
                },

                activeNames:'1',
                actDetail:'这里是活动详情描述',

                total:15,
                currentPage:1,

                contents:[
                    {
                        works:'《出去走走》 戴上耳机 即使不播放音乐 也有一种 与世隔绝的感觉',
                        author_v:'子书',
                        votes:'10000',
                        pic:require('../img/活动详情-投票献花.png')
                    },{
                        works:'《出去走走》 戴上耳机 即使不播放音乐 也有一种 与世隔绝的感觉',
                        author_v:'子书',
                        votes:'10000',
                        pic:require('../img/活动详情-投票献花.png')
                    },{
                        works:'《出去走走》 戴上耳机 即使不播放音乐 也有一种 与世隔绝的感觉',
                        author_v:'子书',
                        votes:'10000',
                        pic:require('../img/活动详情-投票献花.png')
                    },{
                        works:'《出去走走》 戴上耳机 即使不播放音乐 也有一种 与世隔绝的感觉',
                        author_v:'子书',
                        votes:'10000',
                        pic:require('../img/活动详情-投票献花.png')
                    },{
                        works:'《出去走走》 戴上耳机 即使不播放音乐 也有一种 与世隔绝的感觉',
                        author_v:'子书',
                        votes:'10000',
                        pic:require('../img/活动详情-投票献花.png')
                    },{
                        works:'《出去走走》 戴上耳机 即使不播放音乐 也有一种 与世隔绝的感觉',
                        author_v:'子书',
                        votes:'10000',
                        pic:require('../img/活动详情-投票献花.png')
                    },
                ]

            }
        },
        components: {
            ageHead,
            ageFoot,
        },
        methods: {
            handleCurrentChange(){
                console.log(`${val}`)
            },
            voteItem(val){
                console.log(`${val+1}号`)
            }
        },
    }
</script>

<style scoped>

</style>