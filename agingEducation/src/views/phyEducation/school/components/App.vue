<template>
  <div id="container">
    <ageHead></ageHead>

    <div class="g-content g-content-footer" ref="size">
      <div class="g-search">
        <div class="crumb">
          <span @click="toIndex">返回首页</span>
          <span>&gt;</span>
          <span @click="toEntitySchool">实体办学</span>
          <span>&gt;</span>
          <span>{{pageNm}}</span>
        </div>

        <div class="content">
          <div
            @click="toSchoolDetail(item.televInfromPk)"
            v-for="(item,index) in items"
            :key="index"
            class="clearfix"
          >
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

export default {
  data() {
    return {
      total: 0,
      currentPage: 1,
      pageSize: 10,
      items: [],
      pageNm: "",
      cd: ""
    };
  },
  mounted() {
    this.pageNm = this.until.getQueryString("nm");
    this.cd = this.until.getQueryString("cd");
    this.getMsg();
  },
  //相关操作事件
  methods: {
    toIndex() {
      this.until.href("../home/index.html");
    },
    toEntitySchool() {
      window.location.href = "./phyeducationMain.html";
    },
    toSchoolDetail(id) {
      window.location.href = "./classesDetail.html?id=" + id;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getMsg();
    },
    getMsg() {
      let query = new this.Query();
      query.buildWhereClause("catCd", this.cd, "LK");
      query.buildPageClause(this.currentPage, this.pageSize);
      let param = query.getParam();
      this.until.get("/telev/infrom/page", param).then(res => {
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

