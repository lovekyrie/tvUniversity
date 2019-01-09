
<style scoped lang="less">
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
body {
  padding-bottom: 300px;
}
@bdColor: #e1e1e1;
/*公共样式*/
.cm-container {
  width: 1200px;
  margin: 0 auto;
}
/*链接栏*/
.r-link {
  height: 85px;
  line-height: 85px;
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
    margin: 0 10px;
  }
}
/*内容*/
.r-content {
  min-height: 620px;
  margin-bottom: 100px;
  > div {
    width: 500px;
    margin: 0 auto;
    > img {
      display: block;
      margin: 0 auto;
      width: 105px;
      height: 104px;
      vertical-align: bottom;
    }
    > p {
      margin-top: 30px;
      font-size: 22px;
      text-align: center;
      text-indent: 5px;
    }
  }
}
.msg-tit {
  margin-top: 50px !important;
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
    margin-top: 0 !important;
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
.person-msg {
  width: 550px !important;
  font-size: 24px;
  p {
    margin-top: 50px !important;
    text-align: left !important;
    span {
      display: inline-block;
      &:nth-of-type(1) {
        margin-left: 80px;
        width: 150px;
      }
    }
  }
}
.warning {
  width: 100% !important;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-top: 40px !important;
  .war-title {
    margin-top: 40px !important;
    svg {
      color: red;
      font-size: 26px;
    }
  }
  .war-cnt {
    margin-bottom: 40px !important;
    font-size: 16px;
    color: #808080;
    width: 400px;
    margin: 0 auto;
    margin-top: 20px;
    line-height: 1.5;
  }
}
.suc-img {
  span {
    &:nth-of-type(1) {
      vertical-align: top;
    }
  }
  img {
    display: inline-block;
    width: 190px;
    height: 190px;
    vertical-align: bottom;
    border: 1px solid #e1e1e1;
  }
}

.f-paybtn {
  padding-top: 30px;
  text-align: center;
  margin-top: 20px !important;
  svg {
    margin-right: 5px;
  }
  a {
    display: inline-block;
    width: auto;
  }
  button {
    display: inline-block;
    width: 300px;
    height: 60px;
    border: 0;
    border-radius: 5px;
    color: #fff;
    font-size: 28px;
    background-color: #3a71a8;
    margin-bottom: 90px;
    margin-top: 20px;
    cursor: pointer;
  }
}
</style>

<template>
  <div id="container">
    <ageHead></ageHead>

    <div class="g-content g-content-footer">
      <!--链接栏-->
      <div class="r-link cm-container">
        <a href="../home/index.html">返回首页</a>
        <span>&gt;</span>
        <a>在线报名</a>
      </div>

      <!--内容-->
      <div class="r-content cm-container" style="margin-top: 100px;">
        <div>
          <img src="./img/success.png" alt>
          <p>恭喜您，报名成功！</p>
        </div>

        <div class="warning" v-if="msg.statCd == '30100.150'||msg.statCd == '30100.140' ">
          <p class="war-title">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jinggao"></use>
            </svg>
            提示信息
          </p>
          <!--<p class="war-cnt" v-if="msg.statCd == '30100.150'">系统检测发现您是新生，请您尽快带身份证到学校进行学籍注册，学籍注册完成后，再在线缴费付款。谢谢！</p>-->
          <!--<p class="war-cnt" v-if="msg.statCd == '30100.140'">您所报的课程需要考核，等待考核通过前往在线缴款付款。</p>-->
          <p class="war-cnt" v-html="obj.message"></p>
        </div>

        <div class="msg-tit">
          <p></p>
          <span>报名信息</span>
        </div>
        <div class="person-msg">
          <p v-for="(opt,i) in list" :key="i" class="suc-img">
            <span>{{opt.nm}}:</span>
            <span v-if="opt.nm !='imgUrl'">{{msg[opt.arg1]}}</span>
            <img v-if="opt.nm =='imgUrl'" :src="msg[opt.arg1]">
          </p>
        </div>
        <div class="f-paybtn" v-if="msg.statCd == '30100.160'">
          <button @click="payBtn">立即缴费</button>
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
      msg: {},
      list: [],
      obj: null
    };
  },
  mounted() {
    this.pxClazzPk = this.until.getQueryString("pxClazzPk");
    this.wait();
  },
  methods: {
    payBtn() {
      location.href = "./paycnt.html?id=" + this.obj.data.idCard;
    },
    async wait() {
      this.obj = JSON.parse(sessionStorage.getItem("success"));
      this.msg = this.obj.data;
      this.list = await this.getList();
    },
    getList() {
      return new Promise((resolve, reject) => {
        this.until
          .get(`/px/clazzApplyConf/getApplyConf`, { pxClazzPk: this.pxClazzPk })
          .then(res => {
            if (res.status == 200) {
              if (JSON.stringify(res.data) === "{}") {
                resolve([]);
              } else {
                resolve(res.data.items);
              }
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


