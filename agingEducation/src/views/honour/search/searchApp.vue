<template>
  <div id="container">
    <ageHead></ageHead>
    <div class="g-content g-content-footer" ref="size">
      <div class="g-search">
        <div class="crumb">
          <span @click="toIndex">返回首页</span>
          <span>&gt;</span>
          <span>荣誉展厅</span>
        </div>

        <div class="content">
          <div
            @click="toHonorDetail(item.televNewsPk)"
            v-for="(item,index) in items"
            :key="index"
            class="clearfix"
          >
            <!-- <img :src="item.imgUrl" alt=""> -->
            <div class="info">
              <div>
                <h2>{{item.titleNm}}</h2>
                <h3>
                  <span>{{item.crtTm}}</span>
                  <span>来源：{{item.source}}</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    <ageFoot></ageFoot>
  </div>
</template>

<script>
import Lib from "assets/js/Lib";
import ageHead from "components/ageHead";
import ageFoot from "components/ageFoot";

export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      pageSize: 10,
      items: []
    };
  },
  mounted() {
    this.getMsg();
  },
  methods: {
    toIndex() {
      window.location.href = "../home/index.html";
    },
    toHonorDetail(id) {
      window.location.href = "./searchDetail.html?id=" + id;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getMsg();
    },
    getMsg() {
      let query = new this.Query();
      query.buildWhereClause("catCd", "30010.150");
      query.buildPageClause(this.currentPage, this.pageSize);
      let param = query.getParam();
      this.until.get("/telev/news/page", param).then(res => {
        if (res.status == 200) {
          this.items = res.data.items;
          this.total = res.page.total;
        }
      });
    }
  },
  components: {
    ageHead,
    ageFoot
  }
};
</script>
