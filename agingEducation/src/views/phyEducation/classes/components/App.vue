<template>
    <div id="container">
        <!--顶部-->
        <ageHead></ageHead>
        <!--页面主体部分-->
        <div id="main">
            <!--校园列表-->
            <div class="newsList">
                <!--列表顶部-->
                <div class="newsTop">
                    <span><a href="#">首页</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">实体办学</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">课程栏目</a></span>
                </div>

                <!--校园-->
                <div class="news" v-for="(item,index) in news" :key="index">
                    <div class="newsImg">
                        <img :src="item.pic">
                    </div>
                    <div class="newsDes">
                        <p class="newsTitle"><a href="#">{{item.newsTitle}}</a></p>
                        <span class="newsTime">{{item.newsTime}}</span>
                        <span class="newsSource">来源：{{item.newsSource}}</span>
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
                            :total="totalNews"
                            next-text="下一页">
                        <span style="margin-left: 10px">共{{totalNews}}条记录，共{{parseInt(totalNews/5)}}页</span>

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
                news:[
                    {
                        pic:require('../img/课程栏目.png'),
                        newsTitle: '2018年春节舞蹈版 课程表',
                        newsTime: '2017年9月30日',
                        newsSource: '宁波电视大学',
                    },{
                        pic:require('../img/课程栏目.png'),
                        newsTitle: '2018年春节舞蹈版 课程表',
                        newsTime: '2017年9月30日',
                        newsSource: '宁波电视大学',
                    },{
                        pic:require('../img/课程栏目.png'),
                        newsTitle: '2018年春节舞蹈版 课程表',
                        newsTime: '2017年9月30日',
                        newsSource: '宁波电视大学',
                    },{
                        pic:require('../img/课程栏目.png'),
                        newsTitle: '2018年春节舞蹈版 课程表',
                        newsTime: '2017年9月30日',
                        newsSource: '宁波电视大学',
                    },{
                        pic:require('../img/课程栏目.png'),
                        newsTitle: '2018年春节舞蹈版 课程表',
                        newsTime: '2017年9月30日',
                        newsSource: '宁波电视大学',
                    },

                ],
                totalNews:15,
                currentPage:1,
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