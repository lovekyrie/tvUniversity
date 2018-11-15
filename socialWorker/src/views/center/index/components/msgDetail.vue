<template>
  <div class="msg-detail">
    <div class="detail-wrap">
      <p @click="toMsg">
        <i class="el-icon-arrow-left"></i>返回
      </p>
      <div class="msg">
        <div>{{name}}</div>
        <div>{{time}}</div>
        <div>{{content}}</div>
        <div>
          <img :src="msgdetail" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import msgdetail from "../img/msgdetail_03.png";

export default {
  data() {
    return {
      name: "消息名称",
      time: "2017年4月15日",
      content: "这里是咨询的内容，这里是咨询的内容，这里是咨询的内容，这里是咨询的内容，这里是咨询的内容，",
      msgdetail
    };
  },
  mounted() {
    this.ipPk = this.$route.query.ipPk;
  },
  methods: {
    toMsg(){
      this.$router.back(-1)
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.msg-detail {
  .detail-wrap {
    padding: 30px;
    p {
      margin-bottom: 30px;
    }
    .msg {
      display: flex;
      flex-flow: row wrap;
      > div {
        flex: 1 0 100%;
        display: flex;
        justify-content: center;
        &:nth-of-type(1) {
          font-size: 24px;
          margin-bottom: 20px;
        }
        &:nth-of-type(2) {
          font-size: 18px;
          margin-bottom: 50px;
        }
        &:nth-of-type(3) {
          margin-left: 2%;
          justify-content:flex-start;
          font-size: 18px;
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>