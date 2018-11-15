<template>
    <div id="container">
        <myHeader></myHeader>
        <myNav></myNav>
        <div class="content">
            <router-view></router-view>
        </div>
        <myFooter></myFooter>
    </div>
</template>
<script>
import myHeader from "@/components/myHeader";
import myNav from "@/components/myNav";
import myFooter from "@/components/myFooter";
export default {
  data() {
    return {
      videoCurrent: 0, //轮播视频当前视频
      timer: null //定时
    };
  },
  mounted() {
    // this.videoChange();
  },
  methods: {
    //校园动态
    getNewsList() {
      let query = new this.Query();
      //拼接参数
      query.buildWhereClause("catNm", "校园动态", "EQ");
      query.buildWhereClause(this.newsPageNo, this.newsPageSize);

      let param = {
        query: query.toString()
      };
      this.until.get("/sys/news/page", param).then(
        res => {
          if (res.status === "200") {
            console.log("调用成功");
            this.newList = res.data.items;
          } else {
            console.log("状态码返回不是200");
          }
        },
        err => {
          console.log("调用失败");
        }
      );
    }
  },
  components: {
    myHeader,
    myNav,
    myFooter
  }
};
</script>

<style lang='less'>
#container {
  .content {
    width: 100%;
  }
}
</style>
