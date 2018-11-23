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
                    <span><a href="#">成果交流</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">文字集锦</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">文字集锦详情</a></span>
                </div>

                <div class="honorMain">
                    <!--标题-->
                    <span class="honorTitle">
                        {{honorTitle}}
                    </span>
                    <!--时间来源副标题-->
                    <div class="honorTime">
                        <span>班级：{{classes}}</span>
                        <span>作者：{{author}}</span>
                        <span>{{honorTime}}</span>
                        <span>来源：{{honorSource}}</span>

                    </div>

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
                classes:'舞蹈班',
                author:'风雨飘扬',
                honorTime: '2017年9月30日',
                honorSource: '宁波电大',
                honorArticle: '校园并不是年轻人的专利',
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