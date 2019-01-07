<template>
  <!--内容-->
  <div class="inContent">
    <h3>{{title}}</h3>
    <p>{{artical}}</p>
    <a href="#">立即交费</a>
    <div class="inImg">
      <img :src="inImg" alt="图片">
      <div class="inTime">{{inTime}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "消息名称",
      artical: "消息内容，消息内容，消息内容，消息内容。",
      inImg: require("../img/个人空间-我的课程详情.png"),
      inTime: "2018年5月12日"
    };
  },
  methods: {}
};
</script>

<style type="text/less" lang="less" scoped>
//内容
.inContent {
  display: flex;
  flex-direction: column;
  flex: 1 0 83%;
  background-color: #f6f6f6;
  padding: 30px 40px 50px 40px;
  justify-content: center;
  font-weight: 300;

  > h3 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 400;
  }

  > p {
    font-size: 20px;
    color: rgb(145, 145, 145);
    line-height: 1.5em;
  }

  > a {
    font-size: 20px;
    color: #3a71a8;

    margin-bottom: 20px;
  }

  //图片
  .inImg {
    padding: 0 20px;

    > img {
      width: 100%;
      margin-bottom: 20px;
    }

    .inTime {
      float: right;
      color: rgb(145, 145, 145);
      font-size: 16px;
    }
  }
}
</style>