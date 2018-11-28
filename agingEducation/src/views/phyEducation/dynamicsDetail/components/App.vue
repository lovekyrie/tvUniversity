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
          <span>
            <a href="../home/index.html">首页</a>
          </span>
          <span class="topLine">></span>
          <span>
            <a href="../phyEducation/phyeducationMain.html">实体办学</a>
          </span>
          <span class="topLine">></span>
          <span>
            <a href="./dynamics.html">校园动态</a>
          </span>
          <span class="topLine">></span>
          <span>
            <a href="#">资讯详情</a>
          </span>
        </div>

        <div class="honorMain">
          <!--标题-->
          <span class="honorTitle">{{newInfo.titleNm}}</span>
          <!--时间来源副标题-->
          <div class="honorTime">
            <span style="margin-right: 90px">{{newInfo.crtTm}}</span>
            <span>来源：{{newInfo.source}}</span>
          </div>
          <!--图片-->
          <div class="honorImg">
            <img :src="newInfo.imgUrl">
          </div>
          <!--文章标题-->
          <span class="artTitle">{{newInfo.titleNm}}</span>

          <!--文章内容-->
          <div class="honorArticle">
            <p v-html="newInfo.cont"></p>
          </div>
        </div>
      </div>
    </div>

    <!--底部-->
    <ageFoot></ageFoot>
  </div>
</template>

<script>
import ageHead from "components/ageHead";
import ageFoot from "components/ageFoot";

export default {
  data() {
    return {
      honorTitle: "班级全员满额，宁波老年大学一票难求怎么破",
      honorTime: "2017年9月30日 12:00",
      honorSource: "宁波电大",
      artTitle: "跟着外教老师学说英语",
      honorArticle:
        "老年人学习老年人学习。老年人学习老年人学习，老年人学习老年人学习" +
        "老年人学习老年人学习老年人学习。老年人学习老年人学习老年人学习，老年人学习老年人学习。",
      honorImg: require("../img/资讯详情_03.png"),
      newId:'',
      newInfo:{}
    };
  },
  components: {
    ageHead,
    ageFoot
  },
  mounted(){

    this.newId=this.until.getQueryString('id')
    this.getNewInfo()
  },
  methods: {
    getNewInfo(){

      this.until.get('/telev/news/info/'+this.newId).then(
        res=>{
          if(res.status==='200'){
            this.newInfo=res.data
          }
        },
        err=>{}
      )
    }
  }
};
</script>

<style scoped>
</style>