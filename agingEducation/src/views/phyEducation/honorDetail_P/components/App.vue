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
                    <span><a href="../home/index.html">首页</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="../phyEducation/phyeducationMain.html">实体办学</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="../phyEducation/honorHall_P.html">荣誉展厅</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">资讯详情</a></span>
                </div>

                <div class="honorMain">
                    <!--标题-->
                    <span class="honorTitle">
                        {{info.titleNm}}
                    </span>
                    <!--时间来源副标题-->
                    <div class="honorTime">
                        <span style="margin-right: 90px">{{info.crtTm}}</span>
                        <span>来源：{{info.source}}</span>
                    </div>
                    <!--图片-->
                    <div class="honorImg">
                        <img :src="info.imgUrl">
                    </div>
                    <!--文章标题-->
                    <span class="artTitle">{{info.imgNm}}</span>

                    <!--文章内容-->
                    <div class="honorArticle">
                        <span v-html="info.cont"></span>
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
                honorId:"",
                info:{},
            }
        },
        components: {
            ageHead,
            ageFoot,
        },
        mounted(){

          this.honorId=this.until.getQueryString('id')
          this.getHonorInfo()
        },
        methods: {
          getHonorInfo(){

            this.until.get('/telev/news/info/'+this.honorId).then(
              res=>{
                if(res.status==='200'){
                  this.info=res.data;
                }
              },
              err=>{}
            )
          }
        },
    }
</script>

<style scoped>

</style>