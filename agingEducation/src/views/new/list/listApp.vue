<template>
  <div id="container">
    <ageHead></ageHead>

    <div class="g-content g-content-footer" ref="size">
      <div class="g-search">
        <div class="crumb">
          <span @click="toIndex">返回首页</span>
          <span>&gt;</span>
          <span>通知公告</span>
        </div>

        <div class="content">
          <div
            @click="toNewDetail(item.televNewsPk)"
            v-for="(item,index) in items"
            :key="index"
            class="clearfix"
          >
            <div class="info">
              <div>
                <h2>
                  <a href="#">{{item.titleNm}}</a>
                </h2>
                <h3>
                  <span>{{item.crtTm}}</span>
                  <!-- <span>来源：{{item.source}}</span> -->
                </h3>
              </div>
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
    <ageFoot></ageFoot>
  </div>
</template>
<script>
import Lib from "assets/js/Lib";
import ageHead from "components/ageHead";
import ageFoot from "components/ageFoot";
import iconG from "./img/iconG.png";

export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      pageSize: 10,
      items: [],
      iconG
    };
  },
  mounted() {
    this.getMsg();
  },
  //相关操作事件
  methods: {
    toIndex() {
      window.location.href = "../home/index.html";
    },
    toNewDetail(id) {
      window.location.href = "./imglist.html?id=" + id;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getMsg();
    },
    getMsg() {
      let query = new this.Query();
      //不区分校区，所以默认是电大 19/06/11
      // let regionCd = siteCd || this.until.loGet("regionCd");
      query.buildWhereClause("catCd", "30010.170");
      query.buildWhereClause("siteCd", "42000.110", "EQ");
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
  computed: {},
  components: {
    ageHead,
    ageFoot
  }
};
</script>

