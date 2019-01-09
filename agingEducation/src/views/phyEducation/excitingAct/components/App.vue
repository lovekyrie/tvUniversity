<template>
  <div id="container">
    <!--顶部-->
    <age-head></age-head>
    <!--页面主体部分-->
    <div class="g-content g-content-footer" ref="size">
      <!--列表-->
      <div class="g-search">
        <!--列表顶部-->
        <div class="crumb">
          <span @click="toIndex">返回首页</span>
          <span>></span>
          <span>精彩活动</span>
        </div>

        <div class="content">
          <!--精彩活动-->
          <el-row :gutter="80">
            <el-col :span="12" v-for="(act,index) in actList" :key="index">
              <div class="content-wrap">
                <div class="content-img">
                  <img :src="act.imgUrl || defaultImg">
                </div>
                <div class="contentMsg2">
                  <h4>{{act.titleNm}}</h4>
                  <span>时间：{{act.startTm}}&nbsp;~&nbsp;{{act.endTm}}</span>
                  <span>地点：{{act.address}}</span>
                  <span>主办方：{{act.sponsor}}</span>
                  <div>
                    <span>作品人数：
                     <i>{{act.haveNum}}</i>
                    </span>
                    <button class="actBtn" @click="toDetail(act.televDoingPk)">查看详情</button>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
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
    <age-foot></age-foot>
  </div>
</template>

<script>
import ageHead from "components/ageHead";
import ageFoot from "components/ageFoot";
import defaultImg from "../img/default.png";

export default {
  data() {
    return {
      defaultImg,
      showType: false,
      actList: [],
      total: 15,
      pageSize: 4,
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
    this.getActList();
  },
  methods: {
    toIndex() {
      this.until.href("../home/index.html");
    },
    //当前页变动时
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getActList();
    },
    getActList() {
      let query = new this.Query();
      query.buildPageClause(this.currentPage, this.pageSize);

      let param = query.getParam();
      this.until.get("/telev/doing/page", param).then(
        res => {
          if (res.status === "200") {
            this.actList = res.data.items;
            this.total = res.page.total;

            this.actList.forEach((item, index) => {
              item.startTm = item.startTm && item.startTm.substr(0, 10);
              item.endTm = item.endTm && item.endTm.substr(0, 10);
            });
          }
        },
        err => {}
      );
    },
    toDetail(btnId) {
      window.location.href =
        "./actVote.html?id=" + btnId + "&type=" + this.showType;
    }
  }
};
</script>
