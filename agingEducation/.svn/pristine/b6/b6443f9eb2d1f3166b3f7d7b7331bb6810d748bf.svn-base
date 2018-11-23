<template>
    <div id="container">
        <!--顶部-->
        <ageHead></ageHead>
        <!--页面主体部分-->
        <div id="main">
            <!--书画列表-->
            <div class="paintingList">
                <!--列表顶部-->
                <div class="writingTop">
                    <span><a href="#">首页</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">成果交流</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">书画摄影</a></span>
                </div>

                <!--书画-->
                <div class="news" v-for="painting in paintings">
                    <div class="newsDes">
                        <p class="newsTitle"><a href="#">· {{painting.Title}}</a></p>
                        <span>&nbsp;&nbsp;&nbsp;{{painting.Source}}</span>
                        <span style="float: right">{{painting.author}}</span>
                    </div>
                </div>


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
                paintings:[
                    {
                        Title: '班级全员满额，宁波老年大学一票难求怎么破？',
                        Source: '舞蹈班',
                        author:'风雨飘扬'
                    },{
                        Title: '班级全员满额，宁波老年大学一票难求怎么破？',
                        Source: '舞蹈班',
                        author:'风雨飘扬'
                    },{
                        Title: '班级全员满额，宁波老年大学一票难求怎么破？',
                        Source: '舞蹈班',
                        author:'风雨飘扬'
                    },{
                        Title: '班级全员满额，宁波老年大学一票难求怎么破？',
                        Source: '舞蹈班',
                        author:'风雨飘扬'
                    },{
                        Title: '班级全员满额，宁波老年大学一票难求怎么破？',
                        Source: '舞蹈班',
                        author:'风雨飘扬'
                    },
                ],


                totalNews:15,
                currentPage:1,
                newsNext:'下一页'
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