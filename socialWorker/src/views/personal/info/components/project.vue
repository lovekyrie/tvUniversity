<template>
  <div class="project">
    <div class="pro-item" v-for="(item, index) in projectList" :key="index">
      <div>
        <img :src="myproject" alt="">
      </div>
      <div>
        <div>{{item.title}}</div>
        <div>{{item.address}}</div>
        <div>{{item.classTime}}</div>
        <div>{{item.classAddr}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import myproject from "../img/myproject_03.png";

export default {
  data() {
    return {
      myproject,
      projectList: [
        {
          title: "2018剧目表演基础",
          address: "芝士公园校区",
          classTime: "星期二 下午",
          classAddr: "舞蹈室——415"
        },
        {
          title: "2018剧目表演基础",
          address: "芝士公园校区",
          classTime: "星期二 下午",
          classAddr: "舞蹈室——415"
        },
        {
          title: "2018剧目表演基础",
          address: "芝士公园校区",
          classTime: "星期二 下午",
          classAddr: "舞蹈室——415"
        },
        {
          title: "2018剧目表演基础",
          address: "芝士公园校区",
          classTime: "星期二 下午",
          classAddr: "舞蹈室——415"
        }
      ]
    };
  }
};
</script>

<style lang='less'>
.project {
  padding-top:30px;
  display: flex;
  flex-flow: row wrap;
  .pro-item {
    padding-left: 30px;
    padding-bottom: 30px;
    width: 46.8%;
    display: flex;
    flex-flow: row nowrap;
    > div {
      &:nth-of-type(1) {
        width: 210px;
      }
      &:nth-of-type(2) {
        margin-left: 5%;
        height: 70%;
        display: flex;
        flex-flow: row wrap;
        > div {
          width: 100%;
          align-self: center;
          &:nth-of-type(1) {
            font-size: 18px;
          }
          &:not(:nth-of-type(1)) {
            font-size: 16px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
