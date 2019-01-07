<template>
  <!--热门课程-->
  <div class="inContent">
    <div class="learnSearch">
      <el-select v-model="value" filterable>
        <el-option label="全部消息" value="1" disabled></el-option>
        <el-option v-for="vl in options" :label="vl.label" :value="vl.value" :key="vl.label"></el-option>
      </el-select>

      <button @click="toUpdate">上传证书</button>
    </div>

    <!--证书图列-->
    <el-row :gutter="25">
      <el-col :span="6" v-for="(item,i) in certificates" :key="i">
        <div class="certificate">
          <img :src="item.url" alt="证书">
          <span>{{item.name}}</span>
        </div>
      </el-col>
    </el-row>
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
      certificates: [
        {
          url: require("../img/个人空间-我的课程详情.png"),
          name: "证书名称"
        },
        {
          url: require("../img/个人空间-我的课程详情.png"),
          name: "证书名称"
        },
        {
          url: require("../img/个人空间-我的课程详情.png"),
          name: "证书名称"
        },
        {
          url: require("../img/个人空间-我的课程详情.png"),
          name: "证书名称"
        },
        {
          url: require("../img/个人空间-我的课程详情.png"),
          name: "证书名称"
        },
        {
          url: require("../img/个人空间-我的课程详情.png"),
          name: "证书名称"
        },
        {
          url: require("../img/个人空间-我的课程详情.png"),
          name: "证书名称"
        }
      ]
    };
  },
  methods: {
    toUpdate() {
      this.$router.push({ path: "/updateCet" });
    }
  }
};
</script>

<style type="text/less" lang="less" scoped>
//内容
.inContent {
  flex: 1 0 83%;
  background-color: #f6f6f6;
  padding: 0px 30px 100px 30px;

  .learnSearch {
    height: 100px;
    padding: 30px 0;

    > button {
      float: right;
      border: 0;
      border-radius: 5px;
      width: 15%;
      height: 40px;
      font-size: 16px;
      color: #fff;
      background-color: #72b713;
    }
  }

  .certificate {
    margin-bottom: 30px;

    > img {
      width: 100%;
      margin-bottom: 10px;
    }

    > span {
      display: block;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>