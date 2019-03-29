<template>
  <div id="app">
    <div class="app-content" ref="size">
      <div class="detail">
        <h3>{{infoMsg.titleNm}}</h3>
        <p class="msg-bar">
          <span>作者：{{infoMsg.crtBy}}</span>
          <span>{{infoMsg.crtTm}}</span>
        </p>
        <div class="c-img">
          <img :src="infoMsg.imgUrl">
        </div>
        <div class="c-content" v-html="infoMsg.cont"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Lib from "assets/js/Lib";
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
    getMsg() {
      this.until.get("/telev/news/info/" + this.pk, {}).then(res => {
        if (res.status == 200) {
          this.infoMsg = res.data;
        }
      });
    }
  },
  computed: {}
};
</script>


<style lang="less">
html,
body {
  height: 100%;
  width: 100%;
  background-color: #fff;
  #app {
    .detail {
      h3 {
        font-size: 18px;
        padding: 1.2rem 0;
        text-align: center;
      }
      .msg-bar {
        display: flex;
        flex-flow: row nowrap;
        span {
          flex: 1 0 50%;
          text-align: center;
        }
      }
      .c-content {
        padding: 0 1.2rem;
        font-size: 14px;
        p {
          padding: 0.4rem 0;
          span {
            font-size: 14px !important;
          }
        }
      }
    }
  }
}
</style>