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
                    <span><a href="#">荣誉展厅</a></span>
                </div>

                <!--荣誉-->
                <div class="honor">
                    <div class="newsImg">
                        <img src="../img/荣誉展厅.png">
                    </div>
                    <div class="newsDes">
                        <p class="newsTitle"><a href="#">{{newsTitle}}</a></p>
                        <span class="newsTime">{{newsTime}}</span>
                        <span class="newsSource">来源：{{newsSource}}</span>
                    </div>
                </div>

                <!--2-->
                <div class="honor">
                    <div class="newsImg">
                        <img src="../img/荣誉展厅.png">
                    </div>
                    <div class="newsDes">
                        <p class="newsTitle"><a href="#">{{newsTitle}}</a></p>
                        <span class="newsTime">{{newsTime}}</span>
                        <span class="newsSource">来源：{{newsSource}}</span>
                    </div>
                </div>

                <!--3-->
                <div class="honor">
                    <div class="newsImg">
                        <img src="../img/荣誉展厅.png">
                    </div>
                    <div class="newsDes">
                        <p class="newsTitle"><a href="#">{{newsTitle}}</a></p>
                        <span class="newsTime">{{newsTime}}</span>
                        <span class="newsSource">来源：{{newsSource}}</span>
                    </div>
                </div>
                <!--4-->
                <div class="honor">
                    <div class="newsImg">
                        <img src="../img/荣誉展厅.png">
                    </div>
                    <div class="newsDes">
                        <p class="newsTitle"><a href="#">{{newsTitle}}</a></p>
                        <span class="newsTime">{{newsTime}}</span>
                        <span class="newsSource">来源：{{newsSource}}</span>
                    </div>
                </div>
                <!--5-->
                <div class="honor">
                    <div class="newsImg">
                        <img src="../img/荣誉展厅.png">
                    </div>
                    <div class="newsDes">
                        <p class="newsTitle"><a href="#">{{newsTitle}}</a></p>
                        <span class="newsTime">{{newsTime}}</span>
                        <span class="newsSource">来源：{{newsSource}}</span>
                    </div>
                </div>

                <!--底部分页按钮-->
                <div class="nextButton">
                    <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage"
                            :page-size="5"
                            layout="pager,next,slot"
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
                newsTitle: '宁波电大获得2015年度全国优秀校外学习中心',
                newsTime: '2017年9月30日',
                newsSource: '宁波电视大学',

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