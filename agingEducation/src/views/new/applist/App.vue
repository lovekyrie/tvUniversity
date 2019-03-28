<template>
  <div id="app">
    <div class="header">
      <span>通知公告</span>
    </div>
    <div ref="scroll">
      <div class="content" v-show="!flag" v-for="(item,index) in newList" :key="index">
        <div>
          <span>{{item.titleNm}}</span>
        </div>
        <div>
          <span>{{item.crtTm}}</span>
        </div>
      </div>
      <div class="noResult" v-show="flag">
        <span>查询无结果</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      pageNo: 1,
      pageSize: 10,
      carNoList: [],
      newList: [],
      hasMore: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.srcollLoad, true);
    this.getNewList();
  },
  methods: {
    srcollLoad() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        let { scrollTop, clientHeight, scrollHeight } = this.$refs.scroll;
        if (scrollTop + clientHeight + 20 > scrollHeight) {
          this.pageNo += 1;
          this.getNewList();
        }
      }, 500);
    },

    getNewList() {
      if (this.hasMore) {
        let query = new this.Query();
        query.buildWhereClause("catCd", "30010.170");
        query.buildWhereClause("siteCd", "42000.110", "EQ");
        query.buildPageClause(this.pageNo, this.pageSize);
        let param = query.getParam();
        this.until.get("/telev/news/page", param).then(
          res => {
            if (res.data) {
              this.flag = false;
              this.newList.push(...res.data.items);
            } else {
              this.flag = true;
            }

            if (this.pageNo * this.pageSize >= res.page.total) {
              this.hasMore = false;
            } else {
              this.hasMore = true;
            }
          },
          err => {
            this.flag = true;
            this.hasMore = false;
          }
        );
      }
    }
  }
};
</script>

<style lang="less">
html,
body {
  height: 100%;
  background-color: #f7f7f7;
  #app {
    height: 100%;
    .header {
      padding: 0.8rem 0;
      background-color: #fff;
      font-size: 1.8rem;
      text-align: center;
    }
    .content {
      margin-top: 0.2rem;
      background-color: #fff;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 0.4rem 0.5rem;
      > div {
        padding: 0.2rem 0;
        width: 100%;
        line-height: 1.5;
        font-size: 16px;

        > span {
          display: inline-block;
          width: 100%;
          text-align: left;
          vertical-align: top;
        }
      }
    }
    .noResult {
      padding-top: 1rem;
      text-align: center;
    }
  }
}
</style>
