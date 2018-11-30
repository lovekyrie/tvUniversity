<template>
  <div class="new-detail">
    <div class="nav">首页 > 新闻动态</div>
    <div class="content">
      <div>{{newInfo.nm}}</div>
      <div>{{crtTime}}</div>
      <p v-html="newInfo.cont"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newId: "",
      newInfo: {},
      crtTime: ""
    };
  },
  mounted() {
    let idArr = window.location.href.split("?")[1];
    this.newId = idArr.split("=")[1];

    this.getNewInfo();
  },
  methods: {
    getNewInfo() {
      this.until.get("/sys/news/info/" + this.newId).then(
        res => {
          if (res.status === "200") {
            this.newInfo = res.data;
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

<style lang='less'>
.new-detail {
  width: 1200px;
  margin: 0 auto;
  .nav {
    color: #999;
    font-size: 24px;
    line-height: 80px;
    border-bottom: 1px solid #e1e1e1;
  }
  .content {
    margin:50px auto 0;
    >div{
      &:nth-of-type(1){
        margin-bottom: 20px;
        font-size: 24px;
        text-align: center;
      }
      &:nth-of-type(2){
        font-size: 18px;
        text-align: center;
      }

    }
     p{
        padding: 30px 50px;
      }
  }
}
</style>
