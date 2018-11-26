<template>
    <div id="container">
        <ageHead></ageHead>
        <div class="g-content g-content-footer" ref="size">
            <div class="g-search">
                <div class="crumb"><a
                        href="../home/index.html">首页</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a>荣耀展厅</a></div>

                <div class="content">
                    <a :href="'./searchDetail.html?id='+item.televNewsPk" v-for="(item,index) in items" :key="index" class="clearfix">
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
                <span>共{{Math.ceil(total / pageSize)}}页</span>
            </div>
        </div>
        <ageFoot></ageFoot>
    </div>
</template>
<script>
  import Lib from 'assets/js/Lib';
  import ageHead from 'components/ageHead';
  import ageFoot from 'components/ageFoot';

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
    methods: {
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getMsg();
      },
      getMsg() {
        let query = new this.Query();
        query.buildWhereClause('catCd', '30010.150');
        query.buildPageClause(this.currentPage, this.pageSize);
        let param = query.getParam();
        this.until.get('/telev/news/page', param)
          .then(res => {
            if (res.status == 200) {
              this.items = res.data.items;
              this.total = res.page.total;
            }
          })
      }
    },
    components: {
      ageHead, ageFoot
    },
  }
</script>


<style scoped lang="less">


</style>