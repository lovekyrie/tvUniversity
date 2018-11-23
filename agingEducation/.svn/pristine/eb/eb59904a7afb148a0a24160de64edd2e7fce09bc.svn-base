<template>
    <div id="container">
        <!--顶部-->
        <ageHead></ageHead>
        <!--页面主体部分-->
        <div id="main">
            <!--列表-->
            <div class="writingList">
                <!--列表顶部-->
                <div class="writingTop">
                    <span><a href="#">首页</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">实体办学</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">精彩活动</a></span>
                </div>

                <!--精彩活动-->
                <el-row :gutter="80">
                    <el-col :span="12" v-for="(act,index) in acts2" :key="index">
                        <div class="Content">
                            <div class="contentImg">
                                <img :src="act.url">
                            </div>
                            <div class="contentMsg2">
                                <a href="#"><h4>{{act.title}}</h4></a>
                                <span>时间：{{act.beginTime}}-{{act.endTime}}</span>
                                <span>地点：{{act.place}}</span>
                                <span>主办方：{{act.sponsor}}</span>
                                <span style="margin-top: 14px;line-height: 16px">{{act.nums}}人参与
                                <button class="actBtn" :style="{backgroundColor: act.btnColor}">{{act.btn}}</button>
                                </span>
                            </div>

                        </div>


                    </el-col>


                </el-row>



                <!--底部分页按钮-->
                <div class="nextButton">
                    <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage"
                            :page-size="5"
                            layout="pager,next,slot"
                            background=""
                            :total="totalNews"
                            :next-text="newsNext"
                    >
                        <span style="margin-left: 10px">共{{totalNews}}条记录，共{{totalNews/5}}页</span>

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
                acts2: [
                    {
                        url: require('../img/实体办学2.png'),
                        title: '“逗宝杯” 公益创新逻辑思维竞赛',
                        beginTime: '2017.12.02',
                        endTime: '2018.05.02',
                        place: '马园社区',
                        sponsor: '宁波电视大学',
                        nums: 12228,
                        btn: '查看详情',
                        btnColor: 'rgb(53,113,168)'
                    },{
                        url: require('../img/实体办学2.png'),
                        title: '“逗宝杯” 公益创新逻辑思维竞赛',
                        beginTime: '2017.12.02',
                        endTime: '2018.05.02',
                        place: '马园社区',
                        sponsor: '宁波电视大学',
                        nums: 12228,
                        btn: '查看详情',
                        btnColor: 'rgb(53,113,168)'
                    },{
                        url: require('../img/实体办学2.png'),
                        title: '“逗宝杯” 公益创新逻辑思维竞赛',
                        beginTime: '2017.12.02',
                        endTime: '2018.05.02',
                        place: '马园社区',
                        sponsor: '宁波电视大学',
                        nums: 12228,
                        btn: '我要参与',
                        btnColor: 'rgb(250,100,65)'
                    },{
                        url: require('../img/实体办学2.png'),
                        title: '“逗宝杯” 公益创新逻辑思维竞赛',
                        beginTime: '2017.12.02',
                        endTime: '2018.05.02',
                        place: '马园社区',
                        sponsor: '宁波电视大学',
                        nums: 12228,
                        btn: '我要参与',
                        btnColor: 'rgb(250,100,65)'
                    },{
                        url: require('../img/实体办学2.png'),
                        title: '“逗宝杯” 公益创新逻辑思维竞赛',
                        beginTime: '2017.12.02',
                        endTime: '2018.05.02',
                        place: '马园社区',
                        sponsor: '宁波电视大学',
                        nums: 12228,
                        btn: '我要参与',
                        btnColor: 'rgb(250,100,65)'
                    },{
                        url: require('../img/实体办学2.png'),
                        title: '“逗宝杯” 公益创新逻辑思维竞赛',
                        beginTime: '2017.12.02',
                        endTime: '2018.05.02',
                        place: '马园社区',
                        sponsor: '宁波电视大学',
                        nums: 12228,
                        btn: '我要参与',
                        btnColor: 'rgb(250,100,65)'
                    },
                ],

                totalNews: 15,
                currentPage: 1,
                newsNext: '下一页'
            }
        },
        components: {
            ageHead,
            ageFoot,
        },
        methods: {
            //当前页变动时
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
    }
</script>

<style scoped>

</style>