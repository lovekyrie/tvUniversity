<template>
    <div id="container">
        <div style="width:100%;background-color:#f9f9f9;" class="content">
          <div class="content-link">
              <div class="pos">
                  <a href="#">个人空间</a> > {{title}}
              </div>
              <ul class="menu">
                  <li v-for="(item,index) in menuList" :key="index">
                      <router-link :to='item.aHref' :class="{active:iScur==index}">{{item.title}}</router-link>
                  </li>
              </ul>
              <router-view class="main" :key="$route.fullPath"></router-view>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      title: "个人资料",
      iScur: 4,
      menuList: [
        {
          aHref: "membercenter",
          title: "会员中心"
        },
        {
          aHref: "project",
          title: "我的项目"
        },
        {
          aHref: "certificate",
          title: "我的证书"
        },
        {
          aHref: "sign",
          title: "签到记录"
        },
        {
          aHref: "msg",
          title: "消息中心"
        }
      ]
    };
  },
  mounted() {
    let myUrl = this.$route.path;
    this.menuList.forEach((item, index) => {
      if (myUrl.indexOf(item.aHref) != "-1") {
        this.iScur = index;
        this.title = item.title;
      }
    });
  },
  methods: {
 
  },
  watch: {
    $route(to) {
      this.menuList.forEach((item, index) => {
        if (to.path.indexOf(item.aHref) > -1) {
          this.iScur = index;
          this.title = item.title;
        }
      });
    }
  }
};
</script>
<style lang='less'>
@base: 18rem;
#container {
  .pos {
    width: 100%;
    height: 87px;
    line-height: 87px;
    font-size: 24px;
    color: #999;
    border-bottom: 1px solid #e1e1e1;
    margin-bottom: 30px;
    a {
      font-size: 24px;
    }
  }
  ul.menu {
    float: left;
    width: 200px;
    height: 580px;
    background: #fff;
    padding-top: 40px;
    margin-bottom: 40px;
    a {
      text-align: center;
      display: block;
      width: 150px;
      height: 45px;
      line-height: 45px;
      margin: 0 auto;
      margin-bottom: 20px;
      font-size: 20px;
    }
    a:hover {
      text-decoration: none;
      background: #3a71a8;
      color: #ffffff;
    }
    a.active {
      background: #3a71a8;
      color: #ffffff;
    }
  }
  .main {
    width: 980px;
    background: #fff;
    float: right;
    margin-bottom: 40px;
  }
  .content-link {
    width: 1200px;
    margin: 0 auto;
    height: 1200px;
  }
}
</style>
