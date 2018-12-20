<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div id="main">
      <!--成果分类按钮-->
      <div class="selectBtn">
        <button @click="toWrite">文字集锦</button>
        <button @click="toPaint">书画摄影</button>
        <button @click="toVideo">活力视频</button>
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

        <!--书画-->
        <div
          class="news"
          v-for="writing in writeList"
          :key="writing.televGainPk"
          @click="toWriteDetail(writing.televGainPk)"
        >
          <div class="newsDes">
            <p class="newsTitle">
              <a href="#">· {{writing.titleNm}}</a>
            </p>
            <span>&nbsp;&nbsp;&nbsp;{{writing.stuNm}}</span>
            <span style="float: right">{{writing.author}}</span>
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
import Editor from "./Editor";

export default {
  data() {
    return {
      total: 15,
      pageSize: 5,
      currentPage: 1,
      newsNext: "下一页",
      showType: false,
      writeList: [],
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
     this.getWriteList()
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
    toWriteDetail(pk) {
      window.location.href =
        "./writingDetail.html?id=" + pk + "&type=" + this.showType;
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