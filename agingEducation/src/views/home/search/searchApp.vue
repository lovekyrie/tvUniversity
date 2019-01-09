<template>
  <div id="container">
    <ageHead></ageHead>

    <div class="g-content g-content-footer" ref="size">
      <div class="g-search">
        <div class="crumb">
          <a href="./index.html">返回首页</a>
          <span>&nbsp;&gt;&nbsp;</span>
          <a href="./index.html">实体办学</a>
          <span>&nbsp;&gt;&nbsp;</span>
          <a href="javascript:void(0)">校园动态</a>
        </div>

        <div class="content">
          <a :href="'./searchDetail.html?id='+item.id" v-for="item in items" class="clearfix">
            <img src="img/item.jpg" alt>
            <div class="info">
              <h2>{{item.title}}</h2>
              <h3>
                {{item.time}}
                <span>来源：{{item.from}}</span>
              </h3>
            </div>
          </a>
        </div>
      </div>

      <div class="page">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="10"
          layout=" prev, pager, next, total"
          :total="100"
        ></el-pagination>
        <span>共{{Math.round(total / pageSize)+1}}页</span>
      </div>
    </div>

    <ageFoot></ageFoot>
  </div>
</template>
<script>
import Lib from "assets/js/Lib";
/*头部组件*/
import ageHead from "components/ageHead";

/*底部组件*/
import ageFoot from "components/ageFoot";

export default {
  data() {
    return {
      total: 100,
      currentPage: 1,
      items: [
        {
          title: "请考生与XXXXXXXXXXXXXXXXXXXXXX",
          time: "2017年9月30号",
          from: "宁波电视大学",
          id: 1
        },
        {
          title: "2请考生与XXXXXXXXXXXXXXXXXXXXXX",
          time: "2017年9月30号",
          from: "宁波电视大学",
          id: 2
        }
      ]
    };
  },
  //相关操作事件
  methods: {
    handleCurrentChange(val) {
      console.log(val);
      //                this.axios.get(Lib.C.url_mc+'/mall/bss/news/FarmLogPage',{
      //                    params:{
      //                        pageNo:val,
      //                        pageSize:1,
      //                    }
      //                })
      //                    .then(res=>{
      //                        this.items=res.data.data.items;
      //                    }).catch(err=>{
      //                    console.log(err);
      //                });
    }
  },

  computed: {},

  mounted() {
    //            this.axios.get(Lib.C.url_mc+'/mall/bss/news/FarmLogPage',{
    //                params:{
    //                    pageNo:'',
    //                    pageSize:'',
    //                }
    //            })
    //                .then(res=>{
    //                    this.total=res.data.data.items.length;
    //                }).catch(err=>{
    //                console.log(err);
    //            });
  },
  components: {
    ageHead,
    ageFoot
  }
};
</script>



<style scoped lang="less">
.size {
  h2 {
    font-size: 30px !important;
  }
  h3 {
    font-size: 30px !important;
  }
  span {
    font-size: 26px !important;
  }
  input {
    font-size: 26px !important;
  }
  button {
    font-size: 26px !important;
  }
  a {
    font-size: 26px !important;
  }
  li {
    font-size: 26px !important;
  }
  p {
    font-size: 26px !important;
  }
}
</style>