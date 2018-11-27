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
          <span>
            <a href="../home/index.html">首页</a>
          </span>
          <template v-if="showType">
            <span class="topLine">></span>
            <span>
              <a href="../phyEducation/phyeducationMain.html">实体办学</a>
            </span>
          </template>
          <span class="topLine">></span>
          <span>
            <a href="../phyEducation/excitingAct.html">精彩活动</a>
          </span>
          <span class="topLine">></span>
          <span>
            <a href="#">活动详情</a>
          </span>
        </div>

        <!--活动介绍-->
        <div class="mainContent">
          <div class="contentImg">
            <img :src="actInfo.imgUrl" alt="图片">
          </div>

          <div class="contentDes">
            <h3>{{actInfo.titleNm}}</h3>
            <p>主办方：{{actInfo.sponsor}}</p>
            <p style="margin-bottom: 100px">
              <span style="color:red;">{{actInfo.haveNum}}</span> 人参与
            </p>
            <p
              style="color: rgb(135,135,135);font-weight: 300;line-height: 1.5em"
            >时间：{{actInfo.startTm}}&nbsp;~&nbsp;{{actInfo.endTm}}</p>
            <p
              style="color: rgb(135,135,135);font-weight: 300;line-height: 1.5em;margin-bottom: 35px"
            >来源：{{actInfo.source}}</p>
            <button @click="toPushAct">发布作品</button>  
          </div>
        </div>

        <!--活动详情-->
        <div class="actDetail">
          <h3>活动详情</h3>
          <div class="activity">
            <h4>{{actInfo.titleNm}}</h4>
            <p v-html="actInfo.cont"></p>
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
                actInfo:{},
                showType:false,
                actId:'',
            }
        },
        components: {
            ageHead,
            ageFoot,
        },
        mounted(){

          this.showType=JSON.parse(this.until.getQueryString('type'))
          this.actId=this.until.getQueryString('id')
          this.getActInfo()
        },
        methods: {
            toPushAct(){
              window.location.href='./postAct.html?type='+this.showType
            },
            getActInfo(){
             
              this.until.get('/telev/doing/info/'+this.actId).then(
                res=>{
                  if(res.status==='200'){
                    this.actInfo=res.data
                    this.actInfo.startTm=res.data.startTm.substr(0,10)
                    this.actInfo.endTm=res.data.endTm.substr(0,10)
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