<style lang="less">
.size {
  h2 {
    font-size: 30px !important;
  }
  h3 {
    font-size: 28px !important;
  }
  span {
    font-size: 26px !important;
  }
  input {
    font-size: 26px !important;
  }
  button {
    font-size: 26px !important;
  }
  a {
    font-size: 26px !important;
  }
  li {
    font-size: 26px !important;
  }
  p {
    font-size: 26px !important;
  }
}

.el-select > .el-input {
  width: 200px;
}

.searchCnt {
  display: inline-block;
  width: auto !important;
  .el-input__inner {
    width: 310px;
  }
  input {
    font-size: 20px;
  }
}

.el-select,
.el-input {
  float: left;
}

.el-select {
  margin-right: 20px;
  input {
    font-size: 20px;
  }
}

.el-input__inner {
  height: 45px;
}

.el-select-dropdown__item {
  font-size: 20px;
  height: 45px;
}

.page {
  padding-left: 30px;
  margin: 30px 0 100px 0;

  span {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    vertical-align: middle;
  }
  .el-pagination {
    display: inline-block;
  }
  .el-pager li {
    font-size: 20px;
    height: 40px;
    width: 40px;
    line-height: 40px;
  }
  .el-pager li.btn-quicknext,
  .el-pager li.btn-quickprev {
    line-height: 40px;
  }
  .el-pagination button,
  .el-pagination span {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
  }
  .el-pagination__editor {
    height: 40px;
    width: 40px;
    line-height: 40px;
    font-size: 20px;
  }
  .el-icon-arrow-left:before {
    content: "上一页";
    font-size: 20px;
  }
  .el-icon-arrow-right:before {
    content: "下一页";
    font-size: 20px;
  }
}

.el-dialog--small {
  width: 500px;
}
</style>
<style scoped lang="less">
@bdColor: #e1e1e1;
/*公共样式*/
.cm-container {
  width: 1200px;
  margin: 0 auto;
}

.cm-button {
  float: right;
  width: 132px;
  height: 45px;
  border: 0;
  border-radius: 5px;
  color: #fff;
  background-color: #3a71a8;
  font-size: 20px;
  cursor: pointer;
}

/*链接栏*/
.r-link {
  padding: 30px 0;
  color: #999;
  font-size: 20px;
  border-bottom: 1px solid @bdColor;
  a {
    color: #999;
    &:nth-last-of-type(1) {
      cursor: auto;
    }
  }
  span {
    vertical-align: top;
  }
}

/*内容*/
.r-content {
  .r-select {
    padding: 30px 0;
    button {
      float: right;
    }
  }
  .r-option {
    .r-opt-temp {
      position: relative;
      margin-bottom: 30px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        float: left;
        width: 250px;
        height: 360px;
        vertical-align: bottom;
        border-left: 1px solid @bdColor;
        border-right: 1px solid @bdColor;
      }
      > div {
        position: relative;
        font-size: 0;
        box-sizing: border-box;

        width: 100%;
        height: 360px;
        border: 1px solid @bdColor;
        border-left: 0px;
        padding: 30px;
        padding-left: 290px;
        h3 {
          font-size: 25px;
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p {
          color: #666;
          line-height: 1.5;
          font-size: 22px;
          &.place-list {
            margin: 5px 0;
          }
        }
        .btn-apply {
          position: absolute;
          right: 30px;
          bottom: 30px;
          width: inherit;
          span {
            float: left;
            color: red;
            font-size: 30px;
            font-weight: bold;
            line-height: 45px;
            margin-left: 320px;
          }
          button {
            margin-left: 30px;
            float: right;
          }
        }
      }
    }
  }
}

.c-color {
  background-color: #666;
  cursor: auto;
}

.c-money {
  position: relative;
  i {
    border: 2px solid #3a71a8;
    font-style: normal;
    border-radius: 5px;
    font-weight: normal;
    color: #3a71a8;
    padding: 0 3px;
  }
  .apply-sum {
    position: absolute;
    display: inline-block;
    width: 150px;
    top: 0;
    left: 50px;
    margin-left: 100px;
    font-size: 18px !important;
    color: #747474 !important;
    b {
      color: red;
    }
  }
}

.r-area {
  border: 2px solid #3a71a8;
  border-radius: 5px;
  color: #3a71a8;
  padding: 0 3px;
}
</style>

<template>
    <div class="g-content g-content-footer">
      <!--链接栏-->
      <div class="r-link cm-container">
        <a href="http://ln.nbsqjy.com/">首页</a>
        <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
        <a>在线报名</a>
      </div>
      <!--内容-->
      <div class="r-content cm-container">
        <!--下拉框-->
        <div class="r-select clearfix">
          <el-select v-model="areaVal" placeholder="校园类别" @change="update">
            <el-option
              v-for="item in areaOpt"
              :key="item.pxCampPk"
              :label="item.nm"
              :value="item.pxCampPk"
            ></el-option>
          </el-select>
          <el-select v-model="courseVal" placeholder="课程类别" @change="update">
            <el-option v-for="item in courseOpt" :key="item.cd" :label="item.nm" :value="item.cd"></el-option>
          </el-select>
          <el-input
            v-model="searchVal"
            placeholder="请输入课程名"
            class="searchCnt"
            @keyup.enter.native="searchBtn"
          ></el-input>
          <button class="cm-button" @click="searchBtn">搜索</button>
        </div>
        <!--选项内容-->
        <div class="r-option clearfix">
          <div class="r-opt-temp clearfix" v-for="(option,index) in optionAll" :key="index">
            <img :src="option.imgUrl">
            <div>
              <h3>{{option.nm}}</h3>
              <p>
                校区：
                <span class="r-area">{{option.recrPlanVo.campNm}}</span>
              </p>
              <p
                v-for="(opt,index) in option.pxClazzLessonVoList"
                :key="index"
              >上课时间：{{opt.pxClazzLessonVo.weekNm}} {{opt.pxClazzLessonVo.periNm}}&nbsp;&nbsp;&nbsp;&nbsp;上课地点：{{opt.pxClazzLessonVo.roomNm}}</p>
              <p>报名时间：{{option.recrPlanVo.vldFrTm}}&nbsp;&nbsp;~&nbsp;&nbsp;{{option.recrPlanVo.vldToTm}}</p>
              <p>报名条件：男士年龄 {{option.maleAgeNm}}&nbsp;&nbsp;&nbsp;&nbsp;女士年龄 {{option.famaleAgeNm}}</p>
              <div class="btn-apply clearfix">
                <!--<span class="apply-sum">已经有<b>5</b>个人报名</span>-->
                <span class="c-money">
                  ￥{{option.price}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i
                    v-if="option.hasExam == 1"
                  >需要考核</i>
                </span>
                <!--可以报名的条件：在规定时间内，是基础课程，人数未满(对外报名人数<对外人数)-->
                <button
                  class="cm-button"
                  v-if="isApplyTime(option) == 'ok'"
                  @click="applyLink(option,index)"
                >{{option.hasExam == 1 ? '预报名' : '报名'}}</button>
                <!--人数已满的条件：在规定时间内，是基础课程，人数已满(对外报名人数>=对外人数)-->
                <button class="cm-button c-color" v-if="isApplyTime(option) == 'full'">人数已满</button>
                <!--中高级课程未报满的条件：在规定时间内，非基础课程，人数未满(对外报名人数<对外人数)-->
                <button
                  class="cm-button"
                  v-if="isApplyTime(option) == 'nobaseW'"
                  @click="noBase"
                >{{option.hasExam == 1 ? '预报名' : '报名'}}</button>
                <!--中高级课程已饱满的条件：在规定时间内，非基础课程，人数未满(对外报名人数>=对外人数)-->
                <button class="cm-button c-color" v-if="isApplyTime(option) == 'nobaseY'">报名已满</button>
                <!--未开始报名的条件：在未开始报名时间内，无论是什么课程，人数未满(对外报名人数<对外人数)-->
                <button class="cm-button c-color" v-if="isApplyTime(option) == 'pre'" disabled>未开始</button>
                <!--不允许对外报名-->
                <button
                  class="cm-button c-color"
                  v-if="isApplyTime(option) == 'noAllow'"
                  disabled
                >不对外报名</button>
                <!--已过报名时间-->
                <button class="cm-button c-color" v-if="isApplyTime(option) == 'no'" disabled>报名结束</button>
                <button class="cm-detail cm-button" @click="getDetail(option)">查看详情</button>
              </div>
            </div>
          </div>
        </div>

        <div class="page">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="currentPagesize"
            layout=" prev, pager, next, total"
            :total="total"
          ></el-pagination>
          <span>共{{Math.ceil(total / currentPagesize)}}页</span>
        </div>
      </div>
    </div>
</template>
<script>

export default {
  data() {
    return {
      dialogTableVisible: false,
      state: false,
      areaOpt: [{ nm: "全部校区", pxCampPk: "" }],
      areaVal: "",
      courseOpt: [{ nm: "全部课程", cd: "" }],
      courseVal: "",
      searchVal: "",
      optionAll: [],
      total: 0,
      currentPage: 1,
      currentPagesize: 10,
      year: 0
    };
  },
  mounted() {
    // if (this.until.browser.versions.mobile) {
    //   alert("该页面不支持移动端，请登录微信端");
    // }
    this.year = new Date().getFullYear();
    /*校区类别*/
    let area = new this.Query();
    area.buildOrderClause("seq", "asc");
    area.buildWhereClause("statCd", "10000.150", "EQ");
    let param = area.getParam();
    this.until.get("/px/camp/list", param).then(res => {
      if (res.status == 200) {
        this.areaOpt.push(...res.data.items);
      }
    });
    /*课程类别*/
    let course = new this.Query();
    course.buildWhereClause("prntCd", "30057");
    let courseParam = course.getParam();
    this.until.get("/sys/cat/list", courseParam).then(
      res => {
        if (res.status == 200) {
          this.courseOpt.push(...res.data.items);
        }
      },
      err => {}
    );
    /*初始化课程列表*/
    let list = new this.Query();
    //      list.buildWhereClause('yearNm', this.year);
    list.buildPageClause(this.currentPage, this.currentPagesize);
    let listParam = list.getParam();
    this.until.get("/px/clazz/clazzAndLessonList", listParam).then(res => {
      if (res.status == 200) {
        this.optionAll = res.data.items;
        this.total = res.page.total;
      }
    });
  },
  methods: {
    getDetail(opt) {
      var statCd = opt.recrPlanVo.statCd == "10000.160" ? "1" : "0";
      let result = this.isApplyTime(opt);
      this.$router.push({
        path:'/onlinedetail',
        query:{
          pxRecrPlanPk:opt.recrPlanVo.pxRecrPlanPk,
          statCd:statCd,
          hasExam: opt.hasExam,
          pETime: opt.recrPlanVo.payToTm,
          type:result,
          stime:opt.recrPlanVo.vldFrTm,
          etime:opt.recrPlanVo.vldToTm,
          coursePk:opt.coursePk,
          pxClazzPk:opt.pxClazzPk,
          teacPk:opt.teacPk,
          headTeacPk:opt.headTeacPk,
          pr:opt.price,
          clazzNm:opt.nm,
          area:opt.recrPlanVo.campNm
        }
      })
      // window.open(
      //   "./courseDetail.html?pxRecrPlanPk=" +
      //     opt.recrPlanVo.pxRecrPlanPk +
      //     "&statCd=" +
      //     statCd +
      //     "&hasExam=" +
      //     opt.hasExam +
      //     "&pETime=" +
      //     opt.recrPlanVo.payToTm +
      //     "&type=" +
      //     result +
      //     "&stime=" +
      //     opt.recrPlanVo.vldFrTm +
      //     "&etime=" +
      //     opt.recrPlanVo.vldToTm +
      //     "&coursePk=" +
      //     opt.coursePk +
      //     "&pxClazzPk=" +
      //     opt.pxClazzPk +
      //     "&teacPk=" +
      //     opt.teacPk +
      //     "&headTeacPk=" +
      //     opt.headTeacPk +
      //     "&pr=" +
      //     opt.price +
      //     "&clazzNm=" +
      //     opt.nm +
      //     "&area=" +
      //     opt.recrPlanVo.campNm
      // );
    },
    applyLink(opt, index) {
      /*检测是否已过缴费时间*/
      let result = this.isApplyTime(opt);
      this.update();
      if (result == "no") {
        this.$alert("该课程已过缴费时间", "提示", {
          confirmButtonText: "确定"
        });
      }
      /*获取ippk 跳转页面*/
      this.$router.push({
        path:'/onlineform',
        query:{
          pxRecrPlanPk:opt.recrPlanVo.pxRecrPlanPk,
          coursePk:opt.coursePk,
          pxClazzPk:opt.pxClazzPk,
          pr:opt.price,
          clazzNm:opt.nm
        }
      })
      // window.open(
      //   "./form.html?pxRecrPlanPk=" +
      //     opt.recrPlanVo.pxRecrPlanPk +
      //     "&coursePk=" +
      //     opt.coursePk +
      //     "&pxClazzPk=" +
      //     opt.pxClazzPk +
      //     "&pr=" +
      //     opt.price +
      //     "&clazzNm=" +
      //     opt.nm
      // );
    },
    /*提醒框*/
    loginDiaLog() {
      let time = setTimeout(o => {
        this.dialogTableVisible = true;
      }, 1000);
    },
    /*判断课程是否可以报名*/
    isApplyTime(opt) {
      let startTime = new Date(opt.recrPlanVo.vldFrTm);
      let endTime = new Date(opt.recrPlanVo.vldToTm);
      let curTime = new Date();
      /*报名时间的状态*/
      let applyStatus = "";
      /*开始报名，但是不允许在线报名*/
      if (opt.recrPlanVo.statCd == "10000.160") {
        return "noAllow";
      }
      if (curTime > startTime && curTime < endTime) {
        applyStatus = "ok";
      } else if (curTime < startTime) {
        /*未开始报名的条件：在未开始报名时间内，无论是什么课程，人数未满(对外报名人数<对外人数)*/
        return "pre";
      } else if (curTime > endTime) {
        /*如果已过缴费时间*/
        return "no";
      }
      /*报名是否已满 当前报名人数 总人数 false:未报满*/
      let applyState = opt.currBatPersQty >= opt.batPersQty ? true : false;
      /*基础班提高班判断*/
      let cousrseLvl = opt.recrPlanVo.statCd == "10000.150" ? true : false;
      /*可以报名的条件：在规定时间内，是基础课程，人数未满(对外报名人数<对外人数)*/
      if (applyStatus == "ok" && cousrseLvl == true && applyState == false) {
        return "ok";
      }
      /*人数已满的条件：在规定时间内，是基础课程，人数已满(对外报名人数>=对外人数)*/
      if (applyStatus == "ok" && cousrseLvl == true && applyState == true) {
        return "full";
      }
      /*中高级课程未报满的条件：在规定时间内，非基础课程，人数未满(对外报名人数<对外人数)*/
      if (applyStatus == "ok" && cousrseLvl == false && applyState == false) {
        return "nobaseW";
      }
      /*中高级课程已经饱满的条件：在规定时间内，非基础课程，人数已满(对外报名人数<对外人数)*/
      if (applyStatus == "ok" && cousrseLvl == false && applyState == true) {
        return "nobaseY";
      }
    },
    /*更新数据*/
    update() {
      /*清除源数据*/
      this.optionAll = [];
      /*获取课程列表*/
      let list = new this.Query();
      if (this.courseVal != "") {
        list.buildWhereClause("courseCatCd", this.courseVal);
      }
      list.buildPageClause(this.currentPage, this.currentPagesize);
      let listParam = list.getParam();
      this.until
        .get("/px/clazz/clazzAndLessonList?campPk=" + this.areaVal, listParam)
        .then(res => {
          if (res.status == 200) {
            this.optionAll = res.data.items;
            this.total = res.page.total;
            this.sumpage = res.page.pageNum;
          } else {
            this.$alert(res.message, "提示", {
              confirmButtonText: "确定"
            });
          }
        });
    },
    noBase() {
      this.$alert("此班级未开放报名", "提示", {
        confirmButtonText: "确定",
        callback: action => {}
      });
    },
    searchBtn() {
      this.currentPage = 1;
      let list = new this.Query();
      list.buildWhereClause("nm", this.searchVal);
      list.buildPageClause(this.currentPage, this.currentPagesize);
      let listParam = list.getParam();
      this.until
        .get("/px/clazz/clazzAndLessonList?campPk=" + this.areaVal, listParam)
        .then(res => {
          if (res.status == 200) {
            this.optionAll = res.data.items;
            this.total = res.page.total;
            this.sumpage = res.page.pageNum;
          }
        });
    },
    getState(val) {
      this.state = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.update();
    }
  },
  filters: {
    format(val) {
      let times = new Date(val.replace(/(-)/g, "/"));
      let year = times.getFullYear();
      let mon = times.getMonth() + 1;
      let day = times.getDate();
      let hour = times.getHours();
      let min = times.getMinutes();
      return year + "年" + mon + "月" + day + "日 " + hour + "时" + min + "分";
    }
  },
  watch: {
    state(val) {
      let input = $(".el-select-dropdown__item");
      let inputsize = $(".el-select input");
      let size = $(".searchCnt input");
      if (val) {
        input.css({ "font-size": "24px", height: "50px" });
        inputsize.css({ "font-size": "24px" });
        size.css({ "font-size": "24px" });
      } else {
        input.css({ "font-size": "20px", height: "45px" });
        inputsize.css({ "font-size": "20px" });
        size.css({ "font-size": "20px" });
      }
    }
  },
  components: {
  }
};
</script>


