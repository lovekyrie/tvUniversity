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
          <span @click="toSubAch">成果交流</span>
          <span>></span>
          <span @click="toWriting">文字集锦</span>
          <span>></span>
          <span>文字集锦详情</span>
        </div>

        <div class="honorMain">
          <!--标题-->
          <span class="honorTitle">{{writeInfo.titleNm}}</span>
          <!--时间来源副标题-->
          <div class="honorTime">
            <span>班级：{{writeInfo.stuNm}}</span>
            <span>作者：{{writeInfo.author}}</span>
            <span>{{crtTime}}</span>
            <span>来源：{{writeInfo.source}}</span>
          </div>

          <!--文章内容-->
          <div class="honorArticle">
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
    toSubAch() {
      this.until.href("./subAch.html");
    },
    toWriting() {
      this.until.href("writing.html");
    },
    getWriteInfo() {
      this.until.get("/telev/gain/info/" + this.writeId).then(
        res => {
          if (res.status === "200") {
            this.writeInfo = res.data;
            let time = this.until.formatDate(res.data.crtTm);
            this.crtTime =
              time.year + "年" + time.month + "月" + time.day + "日";
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