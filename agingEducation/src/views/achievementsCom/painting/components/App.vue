<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div id="main">
       <!--成果分类按钮-->
      <div class="selectBtn">
          <!-- <button @click="toWrite">文字集锦</button>
          <button @click="toPaint">书画摄影</button>
          <button @click="toVideo">活力视频</button> -->
          <button @click="toRelease">成果发布</button>
      </div>
      <!--书画列表-->
      <div class="paintingList">
        <!--列表顶部-->
        <div class="writingTop">
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
            <a href="#">书画摄影</a>
          </span>
        </div>

        <!--书画-->
        <div class="news" v-for="painting in paintList" :key="painting.televGainPk" @click="toPaintDetail(painting.televGainPk)">
          <div class="newsDes">
            <p class="newsTitle">
              <a href="#">· {{painting.titleNm}}</a>
            </p>
            <span>&nbsp;&nbsp;&nbsp;{{painting.stuNm}}</span>
            <span style="float: right">{{painting.author}}</span>
          </div>
        </div>

        <!--底部分页按钮-->
        <div class="nextButton">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="pager,next,slot"
            background
            :total="total"
            :next-text="newsNext"
          >
            <span style="margin-left: 10px">共{{total}}条记录，共{{page}}页</span>
          </el-pagination>
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
      paintList: [],
      total: 15,
      pageSize: 5,
      showType: false,
      currentPage: 1,
      newsNext: "下一页"
    };
  },
  components: {
    ageHead,
    ageFoot
  },
  computed: {
    page() {
      return Math.ceil(this.total/this.pageSize)
    }
  },
  mounted() {
    this.showType = JSON.parse(this.until.getQueryString("type"));

    this.getPaintList();
  },
  methods: {
    toWrite(){
      window.location.href='./writing.html?type='+this.showType
    },
    toPaint(){
      window.location.href='./painting.html?type='+this.showType
    },
    toVideo(){
      window.location.href='./actVideo.html?type='+this.showType
    },
    toRelease(){
      window.location.href='./achAdd.html?type='+this.showType
    },
    //当前页变动时
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getPaintList();
    },
    getPaintList() {

      let query = new this.Query();
      query.buildWhereClause("catNm", "书画摄影", "EQ");
      query.buildPageClause(this.currentPage, this.pageSize);

      let param = query.getParam();
      this.until.get("/telev/gain/page", param).then(
        res => {
          if (res.status === "200") {
            this.paintList = res.data.items;
            this.total = res.page.total;
          }
        },
        err => {}
      );
    },
    toPaintDetail(pk){
      window.location.href='./paintingDetail.html?type='+this.showType+'&id='+pk
    }
  }
};
</script>

<style scoped>
</style>