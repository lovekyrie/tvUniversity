<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div id="main">
      <!--视频列表-->
      <div class="videoList">
        <!--列表顶部-->
        <div class="videoTop">
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
          <span>活力视频</span>
        </div>

        <!--视频-->
        <div
          class="news"
          v-for="video in videoList"
          :key="video.televGainPk"
          @click="toVideoDetail(video.televGainPk)"
        >
          <div class="newsDes">
            <p class="newsTitle">
              <a href="#">{{video.titleNm}}</a>
            </p>
            <div>
              <span>{{video.stuNm}}</span>
              <span>作者：{{video.author}}</span>
            </div>
          </div>
        </div>
      <!--分页-->
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="total"
        ></el-pagination>
        <!-- <span>共{{Math.ceil(total/pageSize)}}页</span> -->
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
      videoList: [],
      showType: false,
      total: 15,
      pageSize: 5,
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
      return Math.ceil(this.total / this.pageSize);
    }
  },
  mounted() {
    this.showType = JSON.parse(this.until.getQueryString("type"));
    this.getVideoList();
  },
  methods: {
    toWrite() {
      window.location.href = "./writing.html?type=" + this.showType;
    },
    toPaint() {
      window.location.href = "./painting.html?type=" + this.showType;
    },
    toVideo() {
      window.location.href = "./actVideo.html?type=" + this.showType;
    },
    toRelease() {
      window.location.href = "./achAdd.html?type=" + this.showType;
    },
    //当前页变动时
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getVideoList();
    },
    getVideoList() {
      let query = new this.Query();
      query.buildWhereClause("catNm", "活力视频", "EQ");
      query.buildPageClause(this.currentPage, this.pageSize);

      let param = query.getParam();
      this.until.get("/telev/gain/page", param).then(
        res => {
          if (res.status === "200") {
            this.videoList = res.data.items;
            this.total = res.page.total;
          }
        },
        err => {}
      );
    },
    toVideoDetail(pk) {
      window.location.href =
        "./actvideoDetail.html?type=" + this.showType + "&id=" + pk;
    }
  }
};
</script>

<style scoped>
</style>