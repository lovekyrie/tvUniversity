<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div id="main">
      <!--成果分类按钮-->
      <!--列表-->
      <div class="achList">
        <!--列表顶部-->
        <div class="achTop">
          <span @click="toIndex">首页</span>
          <span class="topLine">></span>
          <span>成果交流</span>
        </div>

        <!--内容底部-->
        <div class="mainFoot">
          <!--文字集锦-->
          <div class="production">
            <div>
              <h4>文字集锦</h4>
              <span @click="toMoreWrite">查看更多></span>
            </div>
            <ul
              v-for="item in writeList"
              :key="item.televGainPk"
              @click="toWriteDetail(item.televGainPk)"
            >
              <li>
                <a href="#">{{item.titleNm}}</a>
              </li>
              <p>班级：{{item.stuNm}}</p>
              <p>作者：{{item.author}}</p>
            </ul>
          </div>
          <!--书画摄影-->
          <div class="honor">
            <div>
              <h4>书画摄影</h4>
              <span @click="toMorePaint">查看更多></span>
            </div>
            <ul
              v-for="item in paintList"
              :key="item.televGainPk"
              @click="toPaintDetail(item.televGainPk)"
            >
              <li>
                <a href="#">{{item.titleNm}}</a>
              </li>
              <p>班级：{{item.stuNm}}</p>
              <p>作者：{{item.author}}</p>
            </ul>
          </div>
          <!--活力视频-->
          <div class="classes">
            <div>
              <h4>活力视频</h4>
              <span @click="toMoreVideo">查看更多></span>
            </div>
            <ul
              v-for="item in videoList"
              :key="item.televGainPk"
              @click="toVideoDetail(item.televGainPk)"
            >
              <li>
                <a href="#">{{item.titleNm}}</a>
              </li>
              <p>班级：{{item.stuNm}}</p>
              <p>作者：{{item.author}}</p>
            </ul>
          </div>
        </div>

        <div class="operate-btn">
          <button @click="toRelease">成果发布</button>
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
import Editor from "./Editor";

export default {
  data() {
    return {
      total: 15,
      pageSize: 3,
      currentPage: 1,
      newsNext: "下一页",
      showType: false,
      writeList: [],
      paintList: [],
      videoList: [],
      showType: false
    };
  },
  computed: {
    page() {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  mounted() {
    this.showType = JSON.parse(this.until.getQueryString("type"));
    this.getWriteList();
    this.getPaintList();
    this.getVideoList();
  },
  methods: {
    toIndex() {
      window.location.href = "../home/index.html";
    },
    toMoreWrite() {
      window.location.href = "./writing.html?type=" + this.showType;
    },
    toMorePaint() {
      window.location.href = "./painting.html?type=" + this.showType;
    },
    toMoreVideo() {
      window.location.href = "./actVideo.html?type=" + this.showType;
    },
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
      this.getWriteList();
    },
    getWriteList() {
      let query = new this.Query();
      query.buildWhereClause("catNm", "文字集锦", "EQ");
      query.buildPageClause(this.currentPage, this.pageSize);

      let param = query.getParam();
      this.until.get("/telev/gain/page", param).then(
        res => {
          if (res.status === "200") {
            this.writeList = res.data.items;
            this.total = res.page.total;
          }
        },
        err => {}
      );
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
    toWriteDetail(pk) {
      window.location.href =
        "./writingDetail.html?id=" + pk + "&type=" + this.showType;
    },
    toPaintDetail(pk) {
      window.location.href =
        "./paintingDetail.html?type=" + this.showType + "&id=" + pk;
    },
    toVideoDetail(pk) {
      window.location.href =
        "./actvideoDetail.html?type=" + this.showType + "&id=" + pk;
    }
  },
  components: {
    ageHead,
    ageFoot,
    Editor
  }
};
</script>

<style scoped>
</style>