<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div id="main">
      <div class="learnList">
        <div class="learnTop">
          <span>
            <a href="#">返回首页</a>
          </span>
          <span class="topLine">></span>
          <span>
            <a href="#">个人空间</a>
          </span>
          <span class="topLine">></span>
          <span>
            <a href="#">{{title}}</a>
          </span>
        </div>
        <div class="content">
          <div class="myMenu">
            <el-menu
              router
              class="el-menu-demo"
              mode="vertical"
              text-color="#303030"
              active-text-color="#FFFFFF"
            >
              <el-menu-item
                v-for="(item,i) in navList"
                :key="i"
                @click="changeMeun(item.navItem)"
                :index="item.name"
              >{{item.navItem}}</el-menu-item>
            </el-menu>
          </div>
          <router-view></router-view>
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
      title: "我的课程",
      navList: [
        {
          name: "/myLessons",
          navItem: "我的课程"
        },
        {
          name: "/myClasses",
          navItem: "我的班级"
        },
        {
          name: "/myCertificate",
          navItem: "我的证书"
        },
        {
          name: "/signIn",
          navItem: "签到记录"
        },
        {
          name: "/tidings",
          navItem: "消息中心"
        },
        {
          name: "/personalData",
          navItem: "个人资料"
        },
        {
          name: "/myTeam",
          navItem: "我的团"
        }
      ]
    };
  },

  components: {
    ageHead,
    ageFoot
  },
  methods: {
    // handleSelect(key, keyPath) {
    //   console.log(`${key} + ${keyPath}`);
    // }
    changeMeun(titleNm) {
      this.title = titleNm;
    }
  }
};
</script>

<style scoped>
</style>