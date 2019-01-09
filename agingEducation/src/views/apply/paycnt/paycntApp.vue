<style lang="less">
.size {
  h2 {
    font-size: 30px !important;
  }
  h3 {
    font-size: 30px !important;
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
    font-size: 22px !important;
  }
  select {
    font-size: 26px !important;
  }
  option {
    font-size: 26px !important;
  }
}

.el-checkbox__inner.change::after {
  height: 12px;
  left: 8px;
  top: 2px;
}
</style>
<style scoped lang="less">
.r-link {
  padding: 30px 0;
  color: #999;
  font-size: 20px;
  border-bottom: 1px solid @bdColor;
  a {
    width: auto;
    display: inline-block;
    color: #999;
  }
  span {
    vertical-align: top;
  }
}

@bdColor: #e1e1e1;
/*公共样式*/
.cm-container {
  width: 1200px;
  margin: 0 auto;
}

.cm-button {
  width: 132px;
  height: 45px;
  border: 0;
  border-radius: 5px;
  color: #fff;
  background-color: #3a71a8;
  font-size: 20px;
  cursor: pointer;
}

.f-form {
  padding-bottom: 50px;
  > h3 {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
    font-size: 28px;
  }
  .onelist {
    padding-right: 380px;
    font-size: 22px;
    margin-top: 30px;
    text-align: right;
    > span {
      line-height: 55px;
      &.list-cnt {
        display: inline-block;
        width: 270px;
        height: 55px;
        text-align: left;
      }
    }
    > input,
    select {
      float: right;
      height: 53px;
      width: 315px;
      border: 1px solid @bdColor;
      text-indent: 20px;
    }
  }
}

.f-paybtn {
  button {
    display: block;
    width: 300px;
    height: 40px;
    line-height: 40px;
    border: 0;
    color: #fff;
    font-size: 24px;
    background-color: #3a71a8;
    margin-top: 10px;
    cursor: pointer;
  }
  .cancelBtn {
    border: 1px solid #3a71a8;
    background-color: #fff;
    color: #3a71a8;
  }
}

.f-msg {
  margin-top: 50px;
  overflow: hidden;
  border-top: 1px solid @bdColor;
  h3 {
    font-size: 22px;
    margin: 30px 0;
  }
  .msg-cnt {
    margin: 30px 100px;
    padding-left: 350px;
    &.bor-c {
      border-bottom: 1px solid #e1e1e1;
      padding-bottom: 20px;
      &:nth-last-of-type(1) {
        border-bottom: 0px;
        padding-bottom: 0px;
      }
    }
    p {
      font-size: 22px;
      margin-bottom: 5px;
      color: #959595;
      line-height: 1.5;
      img {
        margin-left: 30px;
        width: 33px;
        height: 35px;
        vertical-align: middle;
        cursor: pointer;
      }
      span {
        color: red;
      }
    }
  }
}

.f-pay {
  margin-top: 20px;
  overflow: hidden;
  border-top: 1px solid @bdColor;
  text-align: center;
  h2 {
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 26px;
  }
  a {
    color: #3a71a8 !important;
    cursor: pointer;
  }
  img {
    margin: 50px;
  }
}

.msg-tit {
  margin-top: 20px;
  height: 30px;
  line-height: 30px;
  position: relative;
  text-align: center;
  font-size: 24px;
  p {
    display: inline-block;
    width: 300px;
    border-top: 1px solid #c4d4e5;
    z-index: 50;
    vertical-align: middle;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    padding: 0 20px;
    color: #3a71a8;
    background-color: #fff;
    z-index: 100;
  }
}

.c-color {
  background-color: #666 !important;
  cursor: auto !important;
}

.c-tit {
  color: red !important;
}
</style>

<template>
  <div v-show="person.statNm!='否'" id="container" v-loading.fullscreen.lock="fullscreenLoading">
    <ageHead @state="getState"></ageHead>
    <div class="g-content g-content-footer">
      <!--链接栏-->
      <div class="r-link cm-container">
        <a href="../home/index.html">返回首页</a>
        <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
        <a>在线缴费</a>
      </div>

      <div class="f-form">
        <h3>在线缴费</h3>
        <div class="onelist clearfix">
          <span>学生姓名：</span>
          <span class="list-cnt">{{person.nm}}</span>
        </div>
        <div class="onelist clearfix">
          <span>学员身份证号码：</span>
          <span class="list-cnt">{{person.idCard}}</span>
        </div>
        <div class="onelist clearfix">
          <span>学员学号：</span>
          <span class="list-cnt">{{person.cd}}</span>
        </div>
        <div class="onelist clearfix">
          <span>联系电话：</span>
          <span class="list-cnt">{{person.mob}}</span>
        </div>
        <div class="f-msg" v-if="courseDList.length>0&&isOverCheck">
          <div class="msg-tit">
            <p></p>
            <span>未缴费</span>
          </div>
          <div
            v-for="(opt,index) in courseDList"
            class="bor-c msg-cnt"
            v-if="opt.statCd == '30100.140'||opt.statCd == '30100.160'&&new Date(curTime)<new Date(opt.payEndTm)"
          >
            <p>课程名称： {{opt.arg1}}</p>
            <p>缴费金额：
              <span>￥{{opt.payAmt}}</span>
            </p>
            <p v-if="opt.statCd == '30100.160'">缴费开始时间： {{opt.payFrTm}}</p>
            <p v-if="opt.statCd == '30100.160'">缴费截止时间： {{opt.payEndTm}}</p>
            <p v-if="!isPass" class="c-tit">您还未进行学籍注册</p>
            <p v-if="opt.statCd == '30100.140'" class="c-tit">您还未参加线下考核，考核通过后才能缴费</p>
            <div class="f-paybtn">
              <!--<button class="cancelBtn" @click="cancelBtn(opt.pxClazzApplyPk)"
                                    v-if="opt.statCd == '30100.160'">取消报名
              </button>-->
              <button @click="openURL($event,opt,index)" v-if="opt.statCd == '30100.160'">去缴费</button>
              <button class="c-color" v-if="opt.statCd == '30100.140'">去缴费</button>
            </div>
          </div>
        </div>
        <div class="f-msg" style="margin-bottom: 90px;" v-if="courseYList.length>0">
          <div class="msg-tit">
            <p></p>
            <span style="color:black;">已缴费</span>
          </div>
          <div v-for="opt in courseYList" class="msg-cnt">
            <p>课程名称： {{opt.arg1}}</p>
            <p>缴费金额：
              <span>￥{{opt.payAmt}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <ageFoot></ageFoot>
  </div>
</template>
<script>
import ageHead from "components/ageHead";
import ageFoot from "components/ageFoot";

export default {
  data() {
    return {
      /*是否审核通过*/
      isPass: true,
      person: {},
      headState: false,
      idCard: "",
      courseDList: [],
      courseYList: [],
      curTime: "",
      /*检测未完成之前不显示代缴费*/
      isOverCheck: false,
      fullscreenLoading: false
    };
  },
  watch: {
    headState(val) {
      if (val) {
        $(".el-checkbox__inner").css({ width: "25px", height: "25px" });
        $(".el-checkbox__inner").addClass("change");
      } else {
        $(".el-checkbox__inner").css({ width: "18px", height: "18px" });
        $(".el-checkbox__inner").removeClass("change");
      }
    }
  },
  mounted() {
    this.curTime = new Date().getTime();
    this.idCard = this.until.getQueryString("id");
    let result = this.getPerson();
    /*审核未通过不往下运行*/
    if (!result) {
      return;
    }
    this.fullscreenLoading = true;
    this.checkPay();
  },
  methods: {
    async checkPay() {
      let dpayArr = await this.getDpay();
      for (let i = 0; i < dpayArr.length; i++) {
        let result = dpayArr[i].payCd;
        if (result != "") {
          /*同步*/
          await this.queryCode(dpayArr[i]);
        }
      }
      let ddpayArr = await this.getDpay();
      this.courseDList.push(...ddpayArr);
      this.courseDList.push(...(await this.getKpay()));
      this.courseYList = await this.getYpay();
      this.isOverCheck = await this.delOldTime();
      this.fullscreenLoading = false;
    },
    /*待考核*/
    getKpay() {
      return new Promise(resolve => {
        let course = new this.Query();
        course.buildWhereClause("idCard", this.idCard);
        course.buildWhereClause("statCd", "30100.140");
        course.buildWhereClause("arg1", new Date().getFullYear());
        let courseParam = course.getParam();
        this.until.get("/px/clazzApply/list", courseParam).then(res => {
          if (res.status == 200) {
            if (JSON.stringify(res.data) == "{}") {
              resolve([]);
            } else {
              resolve(res.data.items);
            }
          }
        });
      });
    },
    /*待支付*/
    getDpay() {
      return new Promise(resolve => {
        let course = new this.Query();
        course.buildWhereClause("idCard", this.idCard);
        course.buildWhereClause("statCd", "30100.160");
        course.buildWhereClause("arg1", new Date().getFullYear());
        let courseParam = course.getParam();
        this.until.get("/px/clazzApply/list", courseParam).then(res => {
          if (res.status == 200) {
            if (JSON.stringify(res.data) == "{}") {
              resolve([]);
            } else {
              resolve(res.data.items);
            }
          }
        });
      });
    },
    /*已支付*/
    getYpay() {
      return new Promise(resolve => {
        let course = new this.Query();
        course.buildWhereClause("idCard", this.idCard);
        course.buildWhereClause("statCd", "30100.170");
        course.buildWhereClause("arg1", new Date().getFullYear());
        let courseParam = course.getParam();
        this.until.get("/px/clazzApply/list", courseParam).then(res => {
          if (res.status == 200) {
            if (JSON.stringify(res.data) == "{}") {
              resolve([]);
            } else {
              resolve(res.data.items);
            }
          }
        });
      });
    },
    /*获取缴款码*/
    getCode(obj) {
      return new Promise((resolve, rej) => {
        this.fullscreenLoading = true;
        this.until
          .post("/px/clazzApply/czPay", { clazzApplyPk: obj.pxClazzApplyPk })
          .then(res => {
            this.fullscreenLoading = false;
            if (res.status == 200) {
              resolve(res.data);
            }
            if (res.status == 400) {
              this.$confirm(res.message, "提示", {
                confirmButtonText: "确定",
                type: "warning"
              });
              rej();
            }
          });
      });
    },
    //同步数据
    queryCode(obj) {
      let $q = new Promise((resolve, reject) => {
        let param = {
          profid: obj.profId,
          payinfoid: obj.payInfoId,
          paycode: obj.payCd,
          clazzApplyPk: obj.pxClazzApplyPk
        };
        this.until.post("/px/clazzApply/updPayState", param).then(res => {
          if (res.status == 200) {
            resolve("ok");
          }
          if (res.status == 400) {
            this.fullscreenLoading = false;
            this.$alert(res.message, "提示", {
              confirmButtonText: "确定"
            });
          }
        });
      });
      return $q;
    },
    /*获取个人信息*/
    getPerson() {
      return new Promise(resolve => {
        let msg = new this.Query();
        msg.buildWhereClause("idCard", this.idCard, "EQ");
        let msgParam = msg.getParam();
        this.until.get("/px/stu/list", msgParam).then(res => {
          if (res.status == 200) {
            /*检测身份证是否存在*/
            if (this.until.isEmptyObject(res.data)) {
              resolve("false");
              this.$alert("该身份证号码未注册，无法查询", "提示", {
                confirmButtonText: "返回",
                callback: action => {
                  history.back();
                }
              });
            }
            /*检测是否通过审核*/
            if (res.data.items[0].statNm == "否") {
              resolve("false");
              this.$alert(
                "系统未检测到您的学籍信息，您可能未注册或未通过学籍审核，如有疑问请您联系学校。",
                "警告",
                {
                  confirmButtonText: "确定",
                  callback: action => {
                    history.back();
                  }
                }
              );
            } else {
              resolve("true");
              this.person = res.data.items[0];
              /*判断是否为未注册*/
              let result = res.data.items[0].hasOwnProperty("statNm");
              if (!result) {
                this.isPass = false;
              }
            }
          }
        });
      });
    },
    /*页面刚进来循环检测缴费时间 进行数组删除*/
    delOldTime() {
      return new Promise(resolve => {
        for (let index = 0; index < this.courseDList.length; index++) {
          if (
            new Date(this.curtime) > new Date(this.courseDList[index].payEndTm)
          ) {
            this.courseDList.splice(index, 1);
          }
        }
        resolve(true);
      });
    },
    /*判断缴款是否过期*/
    isPost(e, opt, index) {
      let time = new Date(opt.payEndTm).getTime();
      this.curtime = new Date().getTime();
      if (this.curtime > time) {
        this.$alert("您的课程已过缴费时间", "提示", {
          confirmButtonText: "确定",
          callback: action => {
            location.reload();
          }
        });
        return true;
      }
      return false;
    },
    async openURL(e, opt, index) {
      if (this.isPost(e, opt)) {
        this.$confirm("缴款码已过期，无法进行缴款", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        this.courseDList.splice(index, 1);
        return;
      }
      if (new Date() < new Date(opt.payFrTm)) {
        this.$confirm(`未到缴费时间，缴费开始时间是${opt.payFrTm}`, "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }
      let result = this.courseDList[index].payCd;
      try {
        /*判断是否有缴款码*/
        if (result == "") {
          /*获取支付码*/
          let obj = await this.getCode(this.courseDList[index]);
          opt.profId = obj.profId;
          opt.payInfoId = obj.payInfoId;
          opt.payCd = obj.payCd;
        }
      } catch (e) {
        return;
      }
      console.log(opt);
      window.open(
        `http://pic.nbtvu.net.cn:7009/NbtvuPI/GotoPay.aspx?profid=${
          opt.profId
        }&payinfoid=${opt.payInfoId}&paycode=${opt.payCd}&clienttype=pc`
      );
      this.$confirm("请在支付成功后点击确认刷新页面", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        callback: action => {
          location.reload();
        }
      });
    },
    getState(val) {
      this.headState = val;
    },
    /*取消报名*/
    cancelBtn(pxClazzApplyPk) {
      this.$confirm("是否取消该门课的报名?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.until
          .post("/px/clazzApply/cancelApply", { pxClazzApplyPk })
          .then(res => {
            if (res.status == 200) {
              this.$alert("取消报名成功！", "提示", {
                confirmButtonText: "确定",
                callback: action => {
                  location.reload();
                }
              });
            }
          });
      });
    }
  },
  components: {
    ageHead,
    ageFoot
  }
};
</script>


