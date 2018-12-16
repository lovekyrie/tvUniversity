<template>
    <div id="app">
        <myHeader :type="name"></myHeader>
        <div class="content">
            <div class="pos">
                 首页 > 学习星排名
            </div>
            <table>
                <thead>
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>学习之星</th>
                    <th>教学点</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in list" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{item.nm}}</td>
                    <td>{{item.classStar}}</td>
                    <td>{{item.prodDotNm}}</td>
                </tr>
                </tbody>
            </table>
            <!--分页-->
            <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page.sync="pageNo"
                :page-size="pageSize"
                layout="total, prev, pager, next"
                :total="total">
            </el-pagination>
        </div>
        <myFooter></myFooter>
    </div>
</template>
<script>
import myHeader from "@/components/myHeader";
import myFooter from "@/components/myFooter";
export default {
  data() {
    return {
      name: "",
      pageNo: 1,
      pageSize: 10,
      total: 10,
      list: [],
      ifLogin: false,
      state: "状态"
    };
  },
  mounted() {
   
    this.ifLogin = JSON.parse(this.until.seGet("isLogin"));
    if (!this.ifLogin) {
      this.state = "";
    }
    this.getInfo();
  },
  methods: {
    //更改当前页数
    handleCurrentChange(val) {
      this.pageNo = val;
      this.getCourseList();
      this.getInfo();
    },
    async getInfo() {
      let result = await this.getRankList();
      this.list = result.data.items;
    },
    getRankList() {
      return new Promise((resolve, reject) => {
        let query = new this.Query();
        //拼接参数
        query.buildPageClause(this.pageNo, this.pageSize);
        let param = {
          query: query.toString()
        };
        this.until.get("/prod/stu/starsPage", param).then(
          res => {
            if (res.status === "200") {
              console.log("调用成功");
              resolve(res);
            } else {
              console.log("状态码返回不是200");
            }
          },
          err => {
            console.log("调用失败");
          }
        );
      });
    }
  },
  components: {
    myHeader,
    myFooter
  }
};
</script>
<style lang="less">
  #app{
  .pos{
    width: 100%;
    color: #999999;
    font-size: 24px;
    border-bottom: 1px solid #e1e1e1;
    line-height: 80px;
  }
  table{
    width: 1198px;
    margin: 20px auto;
    background: #ffffff;
    border: 1px solid #e1e1e1;
    thead{
      th{
        color: #666666;
        font-size: 18px;
        height: 86px;
        font-weight: normal;
        text-align: center;
        &:first-child{
          width: 15%;
        }
        &:nth-child(2){
          width: 40%;
          text-align: left;
        }
        &:nth-child(3){
          width: 15%;
        }
        &:nth-child(4){
          width: 15%;
        }
      }
    }
    tr{
      border: 1px solid #e1e1e1;
      &:last-child{
        border-bottom: 0;
      }
      td{
        text-align: center;
        font-size: 18px;
        height: 86px;

        &:nth-child(2){
          text-align: left;
        }
        &:last-child{
          color: #3a71a8;
          cursor: pointer;
        }
      }
    }
  }
  .el-pagination{
    padding: 40px 0;
    .el-pagination__total{
      font-size: 16px !important;
      line-height: 40px;
    }
    .btn-prev .el-icon,.el-pager li,.btn-next .el-icon,.btn-prev,.btn-next {
      font-size: 16px !important;
      width: 40px;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>