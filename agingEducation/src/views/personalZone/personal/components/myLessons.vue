<template>
  <div class="inContent">
    <div class="learnSearch">
      <el-select v-model="value" filterable>
        <el-option label="课程名称" value="1" disabled></el-option>
        <el-option v-for="vl in options" :label="vl.label" :value="vl.value" :key="vl.label"></el-option>
      </el-select>
    </div>

    <el-row :gutter="20">
      <el-col :span="12" v-for="(item,i) in myLessons" :key="i">
        <div class="lessons">
          <img :src="item.pic">

          <!--内容-->
          <div style="padding: 0px 30px">
            <p>
              <span class="title">{{item.title}}</span>
              <span class="statusStyle" v-if="item.status=='审核中'" style="color: red">{{item.status}}</span>
              <span
                class="statusStyle"
                v-else-if="item.status=='报名失败'"
                style="color: rgb(145,145,145)"
              >{{item.status}}</span>
              <span class="statusStyle" v-else style="color: #3A71A8">{{item.status}}</span>
            </p>
            <p class="teacher">任课老师 ：{{item.teacher}}</p>
            <p class="des">{{item.des}}</p>
            <button @click="toDetail">查看详情</button>
            <p style="color: rgb(145,145,145);font-size: 16px">
              已有
              <span style="color: red">{{item.num}}</span> 人报名
            </p>
          </div>
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
          label: "所有",
          value: "2"
        },
        {
          label: "音乐",
          value: "3"
        },
        {
          label: "美术",
          value: "4"
        },
        {
          label: "舞蹈",
          value: "5"
        }
      ],
      selected: "",

      myLessons: [
        {
          pic: require("../img/个人空间-我的课程.png"),
          title: "中华美食",
          status: "审核中",
          teacher: "刘一",
          des: "中华美食文化源远流长",
          num: 25
        },
        {
          pic: require("../img/个人空间-我的课程.png"),
          title: "中华美食",
          status: "报名失败",
          teacher: "刘一",
          des: "中华美食文化源远流长",
          num: 25
        },
        {
          pic: require("../img/个人空间-我的课程.png"),
          title: "中华美食",
          status: "报名成功",
          teacher: "刘一",
          des: "中华美食文化源远流长",
          num: 25
        },
        {
          pic: require("../img/个人空间-我的课程.png"),
          title: "中华美食",
          status: "审核中",
          teacher: "刘一",
          des: "中华美食文化源远流长",
          num: 25
        }
      ]
    };
  },
  methods: {
    toDetail() {
      this.$router.push({ path: "/myLessonDetail" });
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
  }

  //课程
  .lessons {
    border: 1px solid rgb(226, 226, 226);
    background-color: white;
    padding-bottom: 20px;
    margin-bottom: 30px;

    img {
      width: 100%;
      margin-bottom: 20px;
    }
    //标题
    .title {
      font-size: 22px;
      margin-bottom: 10px;
    }

    .statusStyle {
      float: right;
      font-size: 18px;
    }

    .teacher {
      color: rgb(145, 145, 145);
      font-size: 20px;
      margin-bottom: 20px;
    }

    .des {
      font-size: 18px;
      color: rgb(145, 145, 145);
      font-weight: 300;
      margin-bottom: 20px;
    }

    button {
      border: 0;
      border-radius: 4px;
      margin-bottom: 20px;
      width: 35%;
      height: 33px;
      font-size: 16px;
      background-color: #72b713;
      color: #fff;
    }
  }
}
</style>