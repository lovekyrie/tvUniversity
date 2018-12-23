<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div id="main">
      <!--列表-->
      <div class="mainList">
        <!--列表顶部-->
        <div class="mainTop">
          <span>
            <a href="../home/index.html">首页</a>
          </span>
          <span class="topLine">></span>
          <template v-if="showType">
            <span>
              <a href="../phyEducation/phyeducationMain.html">实体办学</a>
            </span>
            <span class="topLine">></span>
          </template>
          <span>
            <a href="../phyEducation/excitingAct.html">精彩活动</a>
          </span>
          <span class="topLine">></span>
          <span>
            <a href="#">活动详情</a>
          </span>
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
            <p style="margin-bottom: 100px">
              <span style="color:red;">{{actInfo.haveNum || 0}}</span> 人参与
            </p>
            <p
              style="color: rgb(135,135,135);font-weight: 300;line-height: 1.5em"
            >时间：{{actInfo.startTm}}-{{actInfo.endTm}}</p>
            <p
              style="color: rgb(135,135,135);font-weight: 300;line-height: 1.5em;margin-bottom: 35px"
            >来源：{{actInfo.source}}</p>
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
                    <img :src="flower" alt="图片">
                  </span>
                </div>
              </el-col>
            </el-row>
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
            next-text="下一页"
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
    handleCurrentChange() {
      console.log(`${val}`);
    },
    voteItem(item) {
      //得到投票用户
      let user = JSON.parse(this.until.seGet("DD_token"));
      if (!user) {
        this.$message.error('请先登录系统，才能进行投票！')
      } 
      else {
        let param = {
          televUserNm: user.userInfo.username,
          televRunPk: item.televRunPk,
          televRunNm: this.actInfo.titleNm //活动名称
        };
        this.until
          .postCard("/telev/rns/addNum", JSON.stringify(param))
          .then(res => {
            if (res.status === "200") {
              //
              let work = this.entriesList.filter(element => element === item);
              work.voteNum += 1;
              this.$message({
                message: "恭喜您，您已经成功投票一次",
                type: "success"
              });
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

<style scoped>
</style>