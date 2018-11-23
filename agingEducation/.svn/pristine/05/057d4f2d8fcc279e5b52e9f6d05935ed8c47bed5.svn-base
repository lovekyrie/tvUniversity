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
                        <a href="#">我要参与</a>
                    </div>

                </div>

                <!--活动详情-->
                <div class="actDetail">
                    <h3>活动详情</h3>
                    <div class="activity">
                        <h4>{{act.title}}</h4>
                        <img :src="act.pic">
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
                mainContent: {
                    mainPic: require('../img/发布活动_03.png'),
                    title: '团队活动【团】',
                    sponsor: '宁波电视大学',
                    nums: '12228',
                    beginTime: '2017.12.16',
                    endTime: '2018.01.06',
                    author: '宁波电大',
                },

                act:{
                    title:'团队活动【团】团队活动【团】团队活动【团】团队活动【团】团队活动【团】',
                    pic:require('../img/活动详情.png')
                }

            }
        },
        components: {
            ageHead,
            ageFoot,
        },
        methods: {
            sub(){

            }
        },
    }
</script>

<style scoped>

</style>