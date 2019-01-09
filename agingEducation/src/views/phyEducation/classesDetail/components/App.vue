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
          <span>资讯详情</span>
        </div>
        <div class="content">
          <div class="detail">
            <h3>{{infoMsg.titleNm}}</h3>
            <p class="msg-bar">
              <span>作者：{{infoMsg.crtBy}}</span>
              <span>{{infoMsg.crtTm}}</span>
              <span>来源：{{infoMsg.source}}</span>
            </p>
            <div class="c-img">
              <img :src="infoMsg.imgUrl">
            </div>
            <div class="c-content" v-html="infoMsg.cont"></div>
          </div>
        </div>
      </div>
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
      pk: "",
      infoMsg: {}
    };
  },
  mounted() {
    this.pk = this.until.getQueryString("id");
    this.getMsg();
  },
  methods: {
    toIndex() {
      this.until.href("../home/index.html");
    },
    toEntitySchool() {
      this.until.href("./phyeducationMain.html");
    },
    getMsg() {
      this.until.get("/telev/infrom/info/" + this.pk, {}).then(res => {
        if (res.status == 200) {
          this.infoMsg = res.data;
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


<style lang="less">
.size {
  h3 {
    font-size: 30px !important;
  }
  span {
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
</style>