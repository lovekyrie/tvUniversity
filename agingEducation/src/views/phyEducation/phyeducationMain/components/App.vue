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
          <span class="topLine">></span>
          <span>
            <a href="#">实体办学</a>
          </span>
        </div>

        <!--轮播图-->
        <div class="mainImg">
          <el-carousel arrow="never">
            <el-carousel-item v-for="(pic,index) in pics" :key="index">
              <img :src="pic.url">
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="mainNews">
          <div class="mainLeft">
            <div class="leftTitle">
              <h3>校园动态</h3>
              <a href="../phyEducation/dynamics.html">查看更多 ></a>
            </div>
            <!--校园动态-->
            <div class="leftContent" v-for="(act,index) in acts1" :key="index">
              <div class="contentImg">
                <img :src="act.url">
              </div>
              <div class="contentMsg1">
                <a href="#">
                  <h4>{{act.title}}</h4>
                </a>
                <span style="margin-bottom: 20px">{{act.time}}</span>
                <span>来源：{{act.author}}</span>
              </div>
            </div>
          </div>
          <div class="mainRight">
            <div class="rightTitle">
              <h3>精彩活动</h3>
              <a href="../phyEducation/excitingAct.html?type=true">查看更多 ></a>
            </div>
            <!--精彩活动-->
            <div class="rightContent" v-for="(act,index) in acts2" :key="index">
              <div class="contentImg">
                <img :src="act.url">
              </div>
              <div class="contentMsg2">
                <a href="#">
                  <h4>{{act.title}}</h4>
                </a>
                <span>时间：{{act.beginTime}}-{{act.endTime}}</span>
                <span>地点：{{act.place}}</span>
                <span>主办方：{{act.sponsor}}</span>
                <span style="margin-top: 14px;line-height: 16px">
                  {{act.nums}}人参与
                  <button
                    class="actBtn"
                    :style="{backgroundColor: act.btnColor}"
                  >{{act.btn}}</button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!--内容底部-->
        <div class="mainFoot">
          <!--成果交流-->
          <div class="production">
            <h4>成果交流</h4>
            <ul v-for="item in productionList" :key="item.televGainPk" @click="toResultDetail(item.catNm,item.televGainPk)">
              <li>
                <a href="#">{{item.catNm}} {{item.titleNm}}</a>
              </li>
              <p>作者：{{item.author}}</p>
              <p style="color: rgb(155,155,155)">{{item.crtTm}}</p>
            </ul>
            <p>
              <a href="../achievementsCom/subAch.html?type=true">查看更多 ></a>
            </p>
          </div>
          <!--荣誉展厅-->
          <div class="honor">
            <h4>荣誉展厅</h4>
            <div v-for="item in honorList" :key="item.televNewsPk" style="margin-bottom: 30px" @click="toHonorDetail(item.televNewsPk)">
              <img :src="item.imgUrl" alt="图片">
              <span>{{item.titleNm}}</span>
            </div>
            <p>
              <a href="../phyEducation/honorHall_P.html">查看更多 ></a>
            </p>
          </div>
          <!--课表栏目-->
          <div class="classes">
            <h4>课程栏目</h4>
            <ul>
              <li
                v-for="(item,index) in classes"
                :key="index"
              >{{item.cName}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.cTitle}}</li>
            </ul>
            <p>
              <a href="../phyEducation/classes.html">查看更多 ></a>
            </p>
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
      pageCount: 1,
      pageSmallS: 2,
      pageSize: 3,
      pics: [
        { url: require("../img/实体办学.png") },
        { url: require("../img/实体办学.png") },
        { url: require("../img/实体办学.png") }
      ],

      acts1: [
        {
          url: require("../img/实体办学2.png"),
          title: "班级全员满额，宁波老年大学一票难求怎么破",
          time: "2017年9月30日 12:00",
          author: "宁波电视大大学"
        },
        {
          url: require("../img/实体办学2.png"),
          title: "班级全员满额，宁波老年大学一票难求怎么破",
          time: "2017年9月30日 12:00",
          author: "宁波电视大大学"
        },
        {
          url: require("../img/实体办学2.png"),
          title: "班级全员满额，宁波老年大学一票难求怎么破",
          time: "2017年9月30日 12:00",
          author: "宁波电视大大学"
        }
      ],

      acts2: [
        {
          url: require("../img/实体办学2.png"),
          title: "“逗宝杯” 公益创新逻辑思维竞赛萨达大厦",
          beginTime: "2017.12.02",
          endTime: "2018.05.02",
          place: "马园社区",
          sponsor: "宁波电视大学",
          nums: 12228,
          btn: "查看详情",
          btnColor: "rgb(53,113,168)"
        },
        {
          url: require("../img/实体办学2.png"),
          title: "“逗宝杯” 公益创新逻辑思维竞赛萨达大厦",
          beginTime: "2017.12.02",
          endTime: "2018.05.02",
          place: "马园社区",
          sponsor: "宁波电视大学",
          nums: 12228,
          btn: "我要参与",
          btnColor: "rgb(250,100,65)"
        },
        {
          url: require("../img/实体办学2.png"),
          title: "“逗宝杯” 公益创新逻辑思维竞赛萨达大厦",
          beginTime: "2017.12.02",
          endTime: "2018.05.02",
          place: "马园社区",
          sponsor: "宁波电视大学",
          nums: 12228,
          btn: "我要参与",
          btnColor: "rgb(250,100,65)"
        }
      ],
      productionList:[],
      honorList:[],
      classes: [
        {
          cName: "作品名称",
          cTitle: "作品名称标题"
        },
        {
          cName: "作品名称",
          cTitle: "作品名称标题"
        },
        {
          cName: "作品名称",
          cTitle: "作品名称标题"
        },
        {
          cName: "作品名称",
          cTitle: "作品名称标题"
        }
      ]
    };
  },
  components: {
    ageHead,
    ageFoot
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      this.productionList=  await this.getResultList();
      this.honorList=await this.getHonorList();
    },
    toResultDetail(chooseType,pk){
      if(chooseType==='活力视频'){
        window.location.href='../achievementsCom/actvideoDetail.html?type=true&id='+pk
      }
      else if(chooseType==='书画摄影'){
        window.location.href='../achievementsCom/paintingDetail.html?type=true&id='+pk
      }
      else{
        window.location.href='../achievementsCom/writingDetail.html?type=true&id='+pk
      }
    },
    getResultList() {
      return new Promise((resolve, rejcet) => {
        let query = new this.Query();
        query.buildPageClause(this.pageCount, this.pageSmallS);

        let param = query.getParam();
        this.until.get("/telev/gain/page", param).then(
          res => {
            if(res.status==='200'){
              resolve(res.data.items)
            }
          }, 
          err => {});
      });
    },
    toHonorDetail(pk){
      window.location.href='./honorDetail_P.html?id='+pk
    },
    getHonorList(){
      return new Promise((resolve,rejcet)=>{
        let query=new this.Query()
        query.buildWhereClause('catCd', '30010.150');
        query.buildPageClause(this.pageCount, this.pageSmallS);

        let param=query.getParam()
        this.until.get("/telev/news/page", param).then(
          res => {
            if(res.status==='200'){
              resolve(res.data.items)
            }
          }, 
          err => {});
      })
    }
  }
};
</script>

<style scoped>
</style>