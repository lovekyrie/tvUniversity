<template>
    <div id="myTeam">
        <h3>{{myTeam}}</h3>
        <p>组长：{{teamInfo.dotNum}}人 <span></span>组员：{{teamInfo.memNum}}人 <span></span>总学习星：{{teamInfo.starNum}}颗</p>
        <h3>成员列表</h3>
        <table>
            <thead>
            <tr>
                <th>姓名</th>
                <th>获学习星数量</th>
                <th>分类</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in teamList" :key="index">
                <td>{{item.nm}}</td>
                <td>{{item.classStar}}</td>
                <td>{{item.isGroup==='是'?'组长':'组员'}}</td>
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
</template>
<script>
export default {
  data() {
    return {
      myTeam: "测试组",
      teamList: [],
      teamInfo: {},
      pageNo: 1,
      pageSize: 10,
      total:100,
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
     //更改当前页数
    handleCurrentChange(val) {
      this.pageNo=val;
      this.getTeamList();
      this.getInfo()
    },
    async getInfo() {
      let result = await this.getTeamList();
      this.teamList=result.data.items;
      this.total=result.page.total;
      this.teamInfo = await this.getTeamInfo();
    },
    getTeamList() {
      return new Promise((resolve, reject) => {

        let query=new this.Query()
        query.buildPageClause(this.pageNo,this.pageSize)

        let param=query.getParam()
        this.until.get("/prod/dent/listDot",param).then(
          res => {
            if (res.status === "200") {
              resolve(res);
            }
          },
          err => {}
        );
      });
    },
    getTeamInfo() {
      return new Promise((resolve, reject) => {
        this.until.get("/prod/dent/dotCen").then(
          res => {
            if (res.status === "200") {
              resolve(res.data);
            }
          },
          err => {}
        );
      });
    }
  },
  components: {}
};
</script>
<style lang="less">
#myTeam {
  color: #101010;
  h3 {
    font-size: 24px;
    padding-left: 25px;
    padding-top: 30px;
  }
  p {
    padding-left: 25px;
    padding-top: 15px;
    font-size: 18px;
    span {
      padding-left: 50px;
    }
  }
  table {
    width: 940px;
    margin: 20px auto;
    background: #fff;
    border: 1px solid #f1f1f1;
    thead {
      th {
        height: 50px;
        font-size: 20px;
        font-weight: normal;
        text-align: center;
        color: #101010;
        background-color: #fbfbfb;
        &:first-child {
          width: 33%;
        }
        &:nth-child(2) {
          width: 33%;
        }
      }
    }
    tr {
      border: 1px solid #e1e1e1;
      color: #101010;
      &:last-child {
        border-bottom: 0;
      }
      td {
        height: 50px;
        font-size: 20px;
        text-align: center;
      }
    }
  }
  .el-pagination{
    padding-bottom: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    .active {
      background-color: #72b713;
    }
  }
}
</style>