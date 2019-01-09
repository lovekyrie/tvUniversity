<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div class="g-content g-content-footer" ref="size">
      <!--书画列表-->
      <div class="g-search">
        <!--列表顶部-->
        <div class="crumb">
          <span @click="toIndex">返回首页</span>
          <span>></span>
          <span @click="toSubAch">成果交流</span>
          <span>></span>
          <span>文字集锦</span>
        </div>

        <div class="content">
          <!--书画-->
          <div
            class="news"
            v-for="writing in writeList"
            :key="writing.televGainPk"
            @click="toWriteDetail(writing.televGainPk)"
          >
            <div class="newsDes">
              <p class="newsTitle">
                <a href="#">{{writing.titleNm}}</a>
              </p>
              <div>
                <span>{{writing.stuNm}}</span>
                <span>作者：{{writing.author}}</span>
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
      total: 15,
      pageSize: 5,
      currentPage: 1,
      newsNext: "下一页",
      showType: false,
      writeList: []
    };
  },
  computed: {
    page() {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  mounted() {
    this.getWriteList();
  },
  components: {
    ageHead,
    ageFoot
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
  }
};
</script>

<style scoped>
</style>