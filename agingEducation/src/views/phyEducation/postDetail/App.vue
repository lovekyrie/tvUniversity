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
          <span @click="toExcitingAct">精彩活动</span>
          <span>></span>
          <span @click="toActVote">活动详情</span>
          <span>></span>
          <span>参赛作品详情</span>
        </div>

        <div class="detail">
          <!--时间来源副标题-->
          <div class="msg-bar">
            <span>作品类型：{{writeInfo.catNm}}</span>
            <span>上传作者：{{writeInfo.authorNm}}</span>
            <span>作品名称：{{writeInfo.televRunNm}}</span>
          </div>

          <!--文章内容-->
          <div class="c-content">
            <p v-html="writeInfo.cont"></p>
          </div>
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

export default {
  data() {
    return {
      showType: false,
      writeId: "",
      crtTime: "",
      writeInfo: {}
    };
  },
  components: {
    ageHead,
    ageFoot
  },
  mounted() {
    // this.showType = JSON.parse(this.until.getQueryString("type"));
    this.writeId = this.until.getQueryString("id");

    this.getWriteInfo();
  },
  methods: {
    toIndex() {
      this.until.href("../home/index.html");
    },
    toExcitingAct() {
      this.until.href("./excitingAct.html");
    },
    toActVote() {
      window.history.go(-1);
    },
    getWriteInfo() {
      this.until.get("/telev/run/info/" + this.writeId).then(
        res => {
          if (res.status === "200") {
            this.writeInfo = res.data;
          }
        },
        err => {}
      );
    }
  }
};
</script>

<style lang="less">
@import "../../../assets/css/init.less";
html,
body {
  background: #fff !important;
}
.detail {
  padding-bottom: 40px;
  color: #101010;
  h3 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:nth-of-type(1) {
      margin-top: 60px;
    }
    &:nth-of-type(2) {
      margin: 30px 0;
    }
  }
  .msg-bar {
    text-align: center;
    margin: 30px 0;
    span {
      font-size: 20px;
      color: #303030;
      &:nth-of-type(2) {
        margin: 0 100px;
      }
    }
  }
  .c-img {
    text-align: center;
    img {
      vertical-align: middle;
    }
  }
  .c-content {
    min-height: 475px;
    font-size: 20px;
    line-height: 1.5;
    color: #303030;
    div {
      font-size: 24px;
      line-height: 1.5;
    }
  }
}

.size {
  h2 {
    font-size: 32px !important;
  }
  h3 {
    font-size: 30px !important;
  }
  p {
    font-size: 26px !important;
    line-height: 35px !important;
  }
}
</style>