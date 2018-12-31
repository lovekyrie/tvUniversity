<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div id="main">
      <!--列表-->
      <div class="paintingList">
        <!--列表顶部-->
        <div class="honorTop">
          <span>
            <a href="#">首页</a>
          </span>
          <span class="topLine">></span>
          <template v-if="showType">
            <span>
              <a href="../phyEducation/phyeducationMain.html">实体办学</a>
            </span>
            <span class="topLine">></span>
          </template>
          <span>
            <a :href="'./subAch.html?type='+showType">成果交流</a>
          </span>
          <span class="topLine">></span>
          <span>
            <a :href="'./painting.html?type='+showType">书画摄影</a>
          </span>
          <span class="topLine">></span>
          <span>书画摄影详情</span>
        </div>

        <div class="honorMain">
          <!--标题-->
          <span class="honorTitle">{{paintInfo.titleNm}}</span>
          <!--时间来源副标题-->
          <div class="honorTime">
            <span>班级：{{paintInfo.stuNm}}</span>
            <span>作者：{{paintInfo.author}}</span>
            <span>{{crtTime}}</span>
            <span>来源：{{paintInfo.source}}</span>
          </div>
          <!--文章内容-->
          <div class="honorArticle">
           <p v-html="paintInfo.cont"></p>
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
      crtTime:'',
      showType:false,
      paintId:'',
      paintInfo:{},
    };
  },
  components: {
    ageHead,
    ageFoot
  },
  mounted(){

    this.showType=JSON.parse(this.until.getQueryString('type'))
    this.paintId=this.until.getQueryString('id')

    this.getPaintInfo()
  },
  methods: {
    getPaintInfo(){

      this.until.get('/telev/gain/info/'+this.paintId).then(
        res=>{
          if(res.status==='200'){
            this.paintInfo=res.data
            let time=this.until.formatDate(res.data.crtTm)
            this.crtTime=time.year+'年'+time.month+'月'+time.day+'日'
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