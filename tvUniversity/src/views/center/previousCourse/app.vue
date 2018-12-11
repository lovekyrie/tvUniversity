<template>
    <div id="app">
        <myHeader :type="name"></myHeader>
        <div class="content">
            <div class="pos">
                 首页 > 往期课程
            </div>
            <table>
                <thead>
                <tr>
                    <th>序号</th>
                    <th>课程名称</th>
                    <th>学习星</th>
                    <th>{{state}}</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in list" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{item.nm}}</td>
                    <td>{{item.learningStar}}</td>
                    <td>{{item.statNm}}</td>
                    <td v-if="!ifLogin" @click="toTryDetail(item.prodClassPk,'再次学习',item.nm)">开始试看</td>
                    <template v-else>
                      <td v-if="item.statNm==='已学'" @click="toDetail(item.prodClassPk,'再次学习',item.nm)">再次学习</td>
                      <!-- <td v-else-if="item.statNm==='在学'"  @click="toDetail(item.prodClassPk,'继续学习',item.nm)">继续学习</td> -->
                      <td v-else  @click="toDetail(item.prodClassPk,'开始学习',item.nm)">开始学习</td>
                    </template>
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
      name: "past",
      pageNo: 1,
      pageSize: 10,
      total: 100,
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
      let result = await this.getCourseList();
      this.list = result.data.items;
      this.total = result.page.total;
    },
    toDetail(classPk, stuState, nm) {
      if (!this.ifLogin) {
        this.$message.error("您还不是该网站的注册用户，没有开始学习功能！");
      } else {
        window.location.href =
          "studyDetail.html?classPk=" +
          classPk +
          "&stuState=" +
          stuState +
          "&nm=" +
          nm;
      }
    },
    toTryDetail(classPk, stuState, nm) {
      window.location.href =
        "studyDetail.html?classPk=" +
        classPk +
        "&stuState=" +
        stuState +
        "&nm=" +
        nm;
    },
    getCourseList() {
      //是否登录需要绑定两个接口
      if (this.ifLogin) {
        return new Promise((resolve, reject) => {
          let query = new this.Query();
          // query.buildWhereClause('statNm','已学','EQ');
          query.buildPageClause(this.pageNo, this.pageSize);

          let param = query.getParam();
          this.until.get("/prod/cls/learPage", param).then(
            res => {
              if (res.status === "200") {
                resolve(res);
              }
            },
            err => {}
          );
        });
      }
      else{
        return new Promise((resolve,reject)=>{
          let query=new this.Query()
          query.buildPageClause(this.pageNo,this.pageSize);

          let param=query.getParam()
          this.until.get("/prod/cls/pag",param).then(
            res=>{
              if(res.status==='200'){
                resolve(res)
              }
            },
            err=>{}
          )
        })
      }
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