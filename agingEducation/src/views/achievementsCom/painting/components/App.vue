<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div class="g-content g-content-footer" ref="size">
      <!--成果分类按钮-->
      <!--书画列表-->
      <div class="g-search">
        <!--列表顶部-->
        <div class="crumb">
          <span @click="toIndex">返回首页</span>
          <span>></span>
          <span @click="toSubAch">成果交流</span>
          <span>></span>
          <span>书画摄影</span>
        </div>

        <div class="content">
          <!--书画-->
          <div
            class="news"
            v-for="painting in paintList"
            :key="painting.televGainPk"
            @click="toPaintDetail(painting.televGainPk)"
          >
            <div class="newsDes">
              <p class="newsTitle">
                <a href="#">{{painting.titleNm}}</a>
              </p>
              <div>
                <span>{{painting.stuNm}}</span>
                <span>作者：{{painting.author}}</span>
              </div>
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
      return Math.ceil(this.total / this.pageSize);
    }
  },
  mounted() {
    this.getPaintList();
  },
  methods: {
    toIndex() {
      window.location.href = "../home/index.html";
    },
    toSubAch() {
      window.location.href = "./subAch.html";
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
    toPaintDetail(pk) {
      window.location.href =
        "./paintingDetail.html?type=" + this.showType + "&id=" + pk;
    }
  }
};
</script>

<style scoped>
</style>