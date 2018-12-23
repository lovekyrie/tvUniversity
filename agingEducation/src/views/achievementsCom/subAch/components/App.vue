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
      <!--列表-->
      <div class="achList">
        <!--列表顶部-->
        <div class="achTop">
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
            <a href="#">成果交流</a>
          </span>
        </div>

        <!--内容底部-->
        <div class="mainFoot">
          <!--文字集锦-->
          <div class="production">
            <h4>文字集锦</h4>
            <ul
              v-for="item in writeList"
              :key="item.televGainPk"
              @click="toWriteDetail(item.televGainPk)"
            >
              <li>
                <a href="#">{{item.titleNm}}</a>
              </li>
              <p>作者：{{item.stuNm}}</p>
              <p style="color: rgb(155,155,155)">{{item.author}}</p>
            </ul>
            <p>
              <a :href="'./writing.html?type='+showType">查看更多 ></a>
            </p>
          </div>
          <!--书画摄影-->
          <div class="honor">
            <h4>书画摄影</h4>
            <ul
              v-for="item in paintList"
              :key="item.televGainPk"
              @click="toPaintDetail(item.catNm,item.televGainPk)"
            >
              <li>
                <a href="#">{{item.titleNm}}</a>
              </li>
              <p>作者：{{item.stuNm}}</p>
              <p style="color: rgb(155,155,155)">{{item.author}}</p>
            </ul>
            <p>
              <a :href="'./painting.html?type='+showType">查看更多 ></a>
            </p>
          </div>
          <!--活力视频-->
          <div class="classes">
            <h4>活力视频</h4>
            <ul
              v-for="item in videoList"
              :key="item.televGainPk"
              @click="toVideoDetail(item.televGainPk)"
            >
              <li>
                <a href="#">{{item.titleNm}}</a>
              </li>
              <p>作者：{{item.stuNm}}</p>
              <p style="color: rgb(155,155,155)">{{item.author}}</p>
            </ul>
            <p>
              <a :href="'./actVideo.html?type='+showType">查看更多 ></a>
            </p>
          </div>
        </div>

        <div class="operate-btn">
        <button @click="toRelease">成果发布</button>
        </div>
        <!--底部分页按钮-->
        <!-- <div class="nextButton">
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
        </div>-->
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
     toPaintDetail(pk){
      window.location.href='./paintingDetail.html?type='+this.showType+'&id='+pk
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