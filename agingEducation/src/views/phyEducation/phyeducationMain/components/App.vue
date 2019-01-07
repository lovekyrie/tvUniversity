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
          <span>实体办学</span>
        </div>

        <!--内容底部-->
        <div class="mainFoot">
          <!--图文共赏-->
          <div class="production">
            <div>
              <h4>图文共赏</h4>
              <span @click="toMorePhoto">查看更多></span>
            </div>
            <ul
              v-for="item in photoList"
              :key="item.televInfromPk"
              @click="toPhotoDetail(item.televInfromPk)"
            >
              <li>
                <a href="#">{{item.titleNm}}</a>
              </li>
              <p>来源：{{item.source}}</p>
            </ul>
          </div>
          <!--文字集锦-->
          <div class="honor">
            <div>
              <h4>文字集锦</h4>
              <span @click="toMoreWrite">查看更多></span>
            </div>
            <ul
              v-for="item in writingList"
              :key="item.televInfromPk"
              @click="toPhotoDetail(item.televInfromPk)"
            >
              <li>
                <a href="#">{{item.titleNm}}</a>
              </li>
              <p>来源：{{item.source}}</p>
            </ul>
          </div>
          <!--学员笔谈-->
          <div class="classes">
            <div>
              <h4>学员笔谈</h4>
              <span @click="toMoreComment">查看更多></span>
            </div>
            <ul
              v-for="item in commentList"
              :key="item.televInfromPk"
              @click="toPhotoDetail(item.televInfromPk)"
            >
              <li>
                <a href="#">{{item.titleNm}}</a>
              </li>
              <p>来源：{{item.source}}</p>
            </ul>
          </div>
          <!--教师之窗-->
          <div class="teacher">
            <div>
              <h4>教师之窗</h4>
              <span @click="toMoreWindow">查看更多></span>
            </div>
            <ul
              v-for="item in windowList"
              :key="item.televInfromPk"
              @click="toPhotoDetail(item.televInfromPk)"
            >
              <li>
                <a href="#">{{item.titleNm}}</a>
              </li>
              <p>来源：{{item.source}}</p>
            </ul>
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
      total: 15,
      pageSize: 3,
      currentPage: 1,
      newsNext: "下一页",
      showType: false,
      photoList: [],
      writingList: [],
      commentList: [],
      windowList: [],
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
    this.getPhotoList();
    this.getWriteList();
    this.getCommentList();
    this.getWindowList();
  },
  methods: {
    toIndex() {
      window.location.href = "../home/index.html";
    },
    toMorePhoto() {
      window.location.href = "./photo.html";
    },
    toMoreWrite() {
      window.location.href = "./writing.html";
    },
    toMoreComment() {
      window.location.href = "./classes.html";
    },
    toMoreWindow() {
      window.location.href = "./window.html";
    },
    getPhotoList() {
      let query = new this.Query();
      query.buildWhereClause("catCd", "40020.110", "LK");
      query.buildPageClause(this.currentPage, this.pageSize);

      let param = query.getParam();
      this.until.get("/telev/infrom/page", param).then(
        res => {
          if (res.status === "200") {
            this.photoList = res.data.items;
            this.total = res.page.total;
          }
        },
        err => {}
      );
    },
    getWriteList() {
      let query = new this.Query();
      query.buildWhereClause("catCd", "40020.120", "LK");
      query.buildPageClause(this.currentPage, this.pageSize);

      let param = query.getParam();
      this.until.get("/telev/infrom/page", param).then(
        res => {
          if (res.status === "200") {
            this.writingList = res.data.items;
            this.total = res.page.total;
          }
        },
        err => {}
      );
    },
    getCommentList() {
      let query = new this.Query();
      query.buildWhereClause("catCd", "40020.130", "LK");
      query.buildPageClause(this.currentPage, this.pageSize);

      let param = query.getParam();
      this.until.get("/telev/infrom/page", param).then(
        res => {
          if (res.status === "200") {
            this.commentList = res.data.items;
            this.total = res.page.total;
          }
        },
        err => {}
      );
    },
    getWindowList() {
      let query = new this.Query();
      query.buildWhereClause("catCd", "40020.140", "LK");
      query.buildPageClause(this.currentPage, this.pageSize);

      let param = query.getParam();
      this.until.get("/telev/infrom/page", param).then(
        res => {
          if (res.status === "200") {
            this.windowList = res.data.items;
            this.total = res.page.total;
          }
        },
        err => {}
      );
    },
    toPhotoDetail(pk) {
      window.location.href =
        "./classesDetail.html?id=" + pk ;
    }
  },
  components: {
    ageHead,
    ageFoot
  }
};
</script>

<style scoped>
</style>