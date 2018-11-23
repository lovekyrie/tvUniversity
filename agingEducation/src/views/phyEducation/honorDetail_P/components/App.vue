<template>
    <div id="container">
        <!--顶部-->
        <ageHead></ageHead>
        <!--页面主体部分-->
        <div id="main">
            <!--荣誉列表-->
            <div class="honorList">
                <!--列表顶部-->
                <div class="honorTop">
                    <span><a href="#">首页</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">实体办学</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">荣誉展厅</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">资讯详情</a></span>
                </div>

                <div class="honorMain">
                    <!--标题-->
                    <span class="honorTitle">
                        {{honorTitle}}
                    </span>
                    <!--时间来源副标题-->
                    <div class="honorTime">
                        <span style="margin-right: 90px">{{honorTime}}</span>
                        <span>来源：{{honorSource}}</span>
                    </div>
                    <!--图片-->
                    <div class="honorImg">
                        <img :src="honorImg">
                    </div>
                    <!--文章标题-->
                    <span class="artTitle">{{artTitle}}</span>

                    <!--文章内容-->
                    <div class="honorArticle">
                        <span>{{honorArticle}}</span>
                    </div>

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
                honorTitle: '宁波电大获得2015年度全国优秀校外学习中心',
                honorTime: '2017年9月30日 12:00',
                honorSource: '宁波电大',
                artTitle: '跟着外教老师学说英语',
                honorArticle: '老年人学习老年人学习。老年人学习老年人学习，老年人学习老年人学习' +
                '老年人学习老年人学习老年人学习。老年人学习老年人学习老年人学习，老年人学习老年人学习。',
                honorImg:require('../img/荣誉展厅详情.png'),
            }
        },
        components: {
            ageHead,
            ageFoot,
        },
        methods: {},
    }
</script>

<style scoped>

</style>