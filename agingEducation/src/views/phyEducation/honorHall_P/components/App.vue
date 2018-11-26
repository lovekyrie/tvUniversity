<template>
    <div id="container">
        <!--顶部-->
        <ageHead></ageHead>
        <!--页面主体部分-->
        <div id="main">
            <!--荣誉列表-->
            <div class="honorList">
                <!--列表顶部-->
                <div class="honorTop">
                    <span><a href="../home/index.html">首页</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="../phyEducation/phyeducationMain.html">实体办学</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">荣誉展厅</a></span>
                </div>

                <!--荣誉-->
                <div class="honor" v-for="(item, index) in items" :key="index" @click="toHonorDetail(item.televNewsPk)">
                    <div class="newsImg">
                        <img :src="item.imgUrl">
                    </div>
                    <div class="newsDes">
                        <p class="newsTitle"><a href="#">{{item.titleNm}}</a></p>
                        <span class="newsTime">{{item.crtTm}}</span>
                        <span class="newsSource">来源：{{item.rmks}}</span>
                    </div>
                </div>
                <!--底部分页按钮-->
                <div class="nextButton">
                    <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage"
                            :page-size="5"
                            layout="pager,next,slot"
                            :total="total"
                            :next-text="newsNext"
                    >
                        <span style="margin-left: 10px">共{{total}}条记录，共{{page}}页</span>

                    </el-pagination>

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
      total: 0,
      pageSize: 5,
      items: [],
      currentPage: 1,
      newsNext: "下一页"
    };
  },
  computed:{
    page(){
      return Math.floor((this.total-1)/5)+1
    }
  },
  mounted() {

    this.getMsg()
  },
  components: {
    ageHead,
    ageFoot
  },
  methods: {
    //当前页变动时
    handleCurrentChange(val) {
     this.currentPage=val;
     this.getMsg()
    },
    toHonorDetail(newsPk){
      window.location.href='./honorDetail_P.html?id='+newsPk
    },
    getMsg(){

      let query=new this.Query()
      query.buildWhereClause('catCd', '30010.150','EQ')
      query.buildPageClause(this.currentPage,this.pageSize)

      let param=query.getParam()
      this.until.get('/telev/news/page',param).then(
        res=>{
          if(res.status==='200'){
            this.items=res.data.items;
            this.total=res.page.total;
          }
        },
        err=>{}
      )
    }
  }
};
</script>

<style scoped>
</style>