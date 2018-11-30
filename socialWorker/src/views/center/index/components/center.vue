<template>
  <div class="center">
    <div class="swiper-wrap">
      <swiper></swiper>
    </div>
    <div class="news">
      <div class="new-title">
        <div>新闻动态</div>
        <div>更多新闻
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="new-list" v-for="item in newList" :key="item.sysNewsPk" @click="toDetail(item.sysNewsPk)">
        <div>
          <img :src="item.imgUrl" alt>
        </div>
        <div>
          <p>{{item.nm}}</p>
          <p>{{item.rmks}}</p>
          <p>{{item.date}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "./swiper.vue";
import direction from "../img/direction_03.png";

export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 4,
      newList: []
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      this.newList=  await this.getNewList();

      var that=this;
      this.newList.forEach(item=>{
        let time= that.until.formatDate(item.crtTm)
        item['date']=time.year+'年'+time.month+'月'+time.day+'日'
      })
    },
    getNewList() {
      return new Promise((resolve, reject) => {
        let query = new this.Query();
        query.buildPageClause(this.currentPage, this.pageSize);

        let param = query.getParam();
        this.until.get("/sys/news/page", param).then(
          res => {
            if (res.status === "200") {
              resolve( res.data.items);
            }
          },
          err => {}
        );
      });
    },
    toDetail(pk){
      this.$router.push({
        path:'/newdetail',
        query:{
          id:pk
        }
      })
    }
  },
  components: {
    swiper
  }
};
</script>

<style lang='less'>
.center {
  width: 1200px;
  margin: 0 auto;
  .swiper-wrap {
    padding: 30px 0;
  }
  .news {
    .new-title {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      > div {
        flex: 0 0 auto;
        padding-bottom: 20px;
        &:nth-of-type(1) {
          font-size: 18px;
          font-weight: bold;
          border-bottom: 3px solid #3a71a8;
        }
        &:nth-of-type(2) {
          font-size: 16px;
          color: #afafaf;
        }
      }
    }
    .new-list {
      padding: 30px 5px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      > div {
        &:nth-of-type(1) {
          width: 120px;
          img {
            max-width: 100%;
            max-height: 100%;
            height: auto;
            width: auto;
            vertical-align: middle;
          }
        }
        &:nth-of-type(2) {
          margin-left: 2%;
          padding: 15px 0;
          flex: 1;
          p {
            &:not(:nth-last-of-type(1)) {
              margin-bottom: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
