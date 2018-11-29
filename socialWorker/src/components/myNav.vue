<template>
    <div id="nav">
        <div class="nav-wrap">
            <router-link v-for="(item, index) in navList" :to="item.link" :key="index">{{item.content}}</router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      navList: [
        {
          ID: 1,
          content: "网站首页",
          link: "/center"
        },
        {
          ID: 2,
          content: "在线报名",
          link: "/online"
        },
        {
          ID: 3,
          content: "在线学习",
          link: "/study"
        },
        {
          ID: 4,
          content: "关于我们",
          link: "/aboutme"
        }
      ]
    };
  },
  props: ["type"],
  mounted() {
    // this.abc();
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#nav {
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  height: 90px;
  .nav-wrap {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
    a {
      height: 90px;
      line-height: 90px;
      text-align: center;
      color: #666666;
      flex: 1;
      font-size: 24px;
      /*font-weight: bold;*/
    }
    a:hover {
      text-decoration: none;
    }
    a.active {
      font-weight: bold;
      color: #3a71a8;
      border-bottom: 1px solid #3a71a8;
    }
  }
}
</style>