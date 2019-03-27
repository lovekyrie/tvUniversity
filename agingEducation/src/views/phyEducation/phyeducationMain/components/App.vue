<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div class="g-content g-content-footer" ref="size">
      <!--成果分类按钮-->
      <!--列表-->
      <div class="g-search">
        <!--列表顶部-->
        <div class="crumb">
          <span @click="toIndex">返回首页</span>
          <span>&gt;</span>
          <span>实体办学</span>
        </div>

        <div class="content">
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
                <li>{{item.titleNm}}</li>
                <p>作者：{{item.crtBy}}</p>
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
                <li>{{item.titleNm}}</li>
                <p>作者：{{item.crtBy}}</p>
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
                <li>{{item.titleNm}}</li>
                <p>作者：{{item.crtBy}}</p>
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
                <li>{{item.titleNm}}</li>
                <p>作者：{{item.crtBy}}</p>
              </ul>
            </div>
            <!--办学概况-->
            <div class="school">
              <div>
                <h4>办学概况</h4>
                <span @click="toMoreSchool">查看更多></span>
              </div>
              <ul
                v-for="item in schoolList"
                :key="item.televInfromPk"
                @click="toPhotoDetail(item.televInfromPk)"
              >
                <li>{{item.titleNm}}</li>
                <p>作者：{{item.crtBy}}</p>
              </ul>
            </div>
            <!--校园动态-->
            <div class="class-dynamic">
              <div>
                <h4>校园动态</h4>
                <span @click="toMoreDynamic">查看更多></span>
              </div>
              <ul
                v-for="item in dynamicList"
                :key="item.televInfromPk"
                @click="toPhotoDetail(item.televInfromPk)"
              >
                <li>{{item.titleNm}}</li>
                <p>作者：{{item.crtBy}}</p>
              </ul>
            </div>
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
      schoolList: [],
      dynamicList: [],
      showType: false
    };
  },
  computed: {
    page() {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  mounted() {
    // this.showType = JSON.parse(this.until.getQueryString("type"));
    this.getPhotoList("40020.110");
    this.getPhotoList("40020.120");
    this.getPhotoList("40020.130");
    this.getPhotoList("40020.140");
    this.getPhotoList("40020.150");
    this.getPhotoList("40020.160");
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
    toMoreSchool() {
      this.until.href("./school.html");
    },
    toMoreDynamic() {
      this.until.href("./dynamic.html");
    },
    getPhotoList(photoCd) {
      let query = new this.Query();
      query.buildWhereClause("catCd", photoCd, "LK");
      query.buildPageClause(this.currentPage, this.pageSize);

      let param = query.getParam();
      this.until.get("/telev/infrom/page", param).then(
        res => {
          if (res.status === "200") {
            switch (photoCd) {
              case "40020.110":
                this.photoList = res.data.items;
                break;
              case "40020.120":
                this.writingList = res.data.items;
                break;
              case "40020.130":
                this.commentList = res.data.items;
                break;
              case "40020.140":
                this.windowList = res.data.items;
                break;
              case "40020.150":
                this.schoolList = res.data.items;
                break;
              case "40020.160":
                this.dynamicList = res.data.items;
                break;
            }
          }
        },
        err => {}
      );
    },
    toPhotoDetail(pk) {
      window.location.href = "./classesDetail.html?id=" + pk;
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