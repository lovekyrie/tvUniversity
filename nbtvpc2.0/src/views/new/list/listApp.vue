<template>
    <div id="container">
        <AllHead></AllHead>

        <div class="g-content g-content-footer" ref="size">

            <div class="g-search">
                <div class="crumb"><a
                        href="../home/index.html">首页</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a>新闻动态</a></div>

                <div class="content">
                    <a :href="'./imglist.html?id='+item.sysNewsPk" v-for="item in items" class="clearfix">
                        <img :src="item.imgUrl" alt="">
                        <div class="info">
                            <h2>{{item.nm}}</h2>
                            <h3>{{item.crtTm}} <span>来源：{{item.rmks}}</span></h3>
                        </div>
                    </a>
                </div>
            </div>
            <div class="page">
                <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="pageSize"
                        layout=" prev, pager, next, total"
                        :total="total">
                </el-pagination>
                <span>共{{Math.ceil(total/pageSize)}}页</span>
            </div>
        </div>
        <McFoot></McFoot>
    </div>
</template>
<script>

  import Lib from 'assets/js/Lib';
  import AllHead from 'components/allHead';
  import McFoot from 'components/McFoot';

  export default {

    data() {
      return {
        total: 0,
        currentPage: 1,
        pageSize: 10,
        items: []
      }
    },
    mounted() {
      this.getMsg();
    },
    //相关操作事件
    methods: {
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getMsg();
      },
      getMsg() {
        let query = new this.Query();
        query.buildWhereClause('catCd', '30010.160');
        query.buildPageClause(this.currentPage, this.pageSize);
        let param = query.getParam();
        this.until.get('/sys/news/page', param)
          .then(res => {
            if(res.status == 200){
              this.items = res.data.items;
              this.total = res.page.total;
            }
          })
      }
    },
    computed: {},
    components: {
      AllHead, McFoot
    },
  }
</script>


<style lang="less">

    .size {
        h2 {
            font-size: 30px !important;
        }
        h3 {
            font-size: 26px !important;
        }
        a {
            font-size: 26px !important;
        }
        span {
            font-size: 26px !important;
        }
    }

</style>