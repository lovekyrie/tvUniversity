<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div class="g-content g-content-footer" ref="size">
      <!--列表-->
      <div class="g-search">
        <!--列表顶部-->
        <div class="crumb">
          <span @click="toIndex">返回首页</span>
          <span>></span>
          <span @click="toAct">精彩活动</span>
          <span>></span>
          <span>活动详情</span>
        </div>

        <!--活动介绍-->
        <div class="mainContent">
          <div class="contentImg">
            <img :src="actInfo.imgUrl" alt="图片">
          </div>
          <div class="contentDes">
            <h3>{{actInfo.titleNm}}</h3>
            <p>主办方：{{actInfo.sponsor}}</p>
            <p>地点：{{actInfo.address}}</p>
            <p>
              作品数：
              <span style="color:red;">{{actInfo.haveNum || 0}}</span>
            </p>
            <p>时间：{{actInfo.startTm}}-{{actInfo.endTm}}</p>
            <p>来源：{{actInfo.source}}</p>
            <button v-show="showRelease" @click="toPostAct">发布作品</button>
          </div>
        </div>

        <!--活动详情-->
        <div class="actDetail">
          <h3>活动详情</h3>
          <el-collapse accordion v-model="activeNames">
            <el-collapse-item name="1">
              <template slot="title">
                <span class="actTitle">{{actInfo.titleNm}}</span>
              </template>
              <p class="actTitle" v-html="actInfo.cont"></p>
            </el-collapse-item>
          </el-collapse>
        </div>

        <!--投票内容-->
        <div class="voteContent">
          <h3>参赛作品</h3>
          <div class="contents">
            <el-row :gutter="25">
              <el-col
                :span="8"
                v-for="(item,index) in entriesList"
                style="margin-bottom: 30px"
                :key="index"
              >
                <div class="inContent">
                  <div class="inner">
                    <img :src="item.imgUrl" alt>
                  </div>
                  <p>上传作者:{{item.authorNm}}</p>
                  <p>已投票数:{{item.voteNum}}</p>
                  <span>
                    <button @click.once="voteItem(item)">投他一票</button>
                  </span>
                </div>
              </el-col>
            </el-row>
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
import flower from "../img/活动详情-投票献花.png";
export default {
  data() {
    return {
      activeNames: "1",
      actDetail: "这里是活动详情描述",
      total: 15,
      currentPage: 1,
      pageSize: 5,
      showType: false,
      actId: "",
      actInfo: {},
      entriesList: [],
      flower,
      showRelease: true
    };
  },
  computed: {
    page() {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  components: {
    ageHead,
    ageFoot
  },
  mounted() {
    this.showType = JSON.parse(this.until.getQueryString("type"));
    this.actId = this.until.getQueryString("id");

    this.getActInfo();
    this.getEntriesList();
  },
  methods: {
    toIndex() {
      this.until.href("../home/index.html");
    },
    toAct() {
      this.until.href("../phyEducation/excitingAct.html");
    },
    handleCurrentChange() {
      console.log(`${val}`);
    },
    voteItem(item) {
      //得到投票用户
      let userJSON = this.until.seGet("DD_token");
      if (!userJSON) {
        this.$message.error("请先登录系统，才能进行投票！");
      } else {
        let user = JSON.parse(userJSON);
        let param = {
          televUserNm: user.userInfo.username,
          televRunPk: item.televRunPk,
          televRunNm: this.actInfo.titleNm //活动名称
        };
        this.until
          .postCard("/telev/rns/addNum", JSON.stringify(param))
          .then(res => {
            if (res.status == 200) {
              //增加投票次数
              this.entriesList.forEach(element => {
                if (element === item) {
                  element.voteNum += 1;
                }
              });
              this.$message({
                message: "您已经成功投票一次",
                type: "success"
              });
            } else {
              this.$message.error(res.message);
            }
          });
      }
    },
    getActInfo() {
      this.until.get("/telev/doing/info/" + this.actId).then(
        res => {
          if (res.status === "200") {
            this.actInfo = res.data;
            this.actInfo.startTm = res.data.startTm.substr(0, 10);
            this.actInfo.endTm = res.data.endTm.substr(0, 10);

            let time = this.until.formatDate();
            let today = new Date(time.year + "-" + time.month + "-" + time.day);
            let startDt = new Date(this.actInfo.startTm);
            let endDt = new Date(this.actInfo.endTm);
            if (endDt < today || today < startDt) {
              this.showRelease = false;
            } else {
              this.showRelease = true;
            }
          }
        },
        err => {}
      );
    },
    toPostAct() {
      window.location.href =
        "./postAct.html?type=" +
        this.showType +
        "&id=" +
        this.actInfo.televDoingPk;
    },
    getEntriesList() {
      let query = new this.Query();
      query.buildPageClause(this.currentPage, this.pageSize);

      let param = query.getParam();
      param.pk = this.actId;
      this.until.get("/telev/run/page", param).then(
        res => {
          if (res.status === "200") {
            this.entriesList = res.data.items;
            this.total = res.page.total;
          }
        },
        err => {}
      );
    }
  }
};
</script>
