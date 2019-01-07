<template>
  <!--内容-->
  <div class="inContent">
    <div class="learnSearch">
      <el-select v-model="value" filterable>
        <el-option label="全部消息" value="1" disabled></el-option>
        <el-option v-for="vl in options" :label="vl.label" :value="vl.value" :key="vl.label"></el-option>
      </el-select>
    </div>

    <div class="tidings" v-for="(item,i) in tidings" :key="i">
      <router-link :to="item.url">
        <span
          style="display: inline-block;width:75%;overflow: hidden;font-size: 22px;white-space: nowrap;text-overflow: ellipsis"
        >{{item.title}}</span>
      </router-link>
      <span style="font-size: 18px;color: rgb(145,145,145);float: right">{{item.time}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "1",
      options: [
        {
          label: "已读",
          value: "2"
        },
        {
          label: "未读",
          value: "3"
        }
      ],

      tidings: [
        {
          url: "/tidingsDetail",
          title:
            "国画报名成功,请完成缴费请完成缴费请完成缴费请完成缴费请完成缴费请完成缴费",
          time: "2017.11.06"
        },
        {
          url: "/tidingsDetail",
          title: "请考生于11月2日至",
          time: "2017.11.06"
        },
        {
          url: "/tidingsDetail",
          title: "请考生于11月2日至",
          time: "2017.11.06"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style type="text/less" lang="less" scoped>
//内容
.inContent {
  flex: 1 0 83%;
  background-color: #f6f6f6;
  padding: 0px 30px 120px 30px;

  .learnSearch {
    height: 100px;
    padding: 30px 0;

  }

  .tidings {
    height: 85px;
    padding: 25px 10px;
    border-bottom: 1px solid rgb(215, 215, 215);
  }
}
</style>