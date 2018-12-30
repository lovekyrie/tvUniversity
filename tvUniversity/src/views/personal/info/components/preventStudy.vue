<template>
  <div id="prevent">
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>课程名称</th>
          <th>学习星</th>
          <th>状态</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in courseList" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.nm}}</td>
          <td>{{item.learningStar}}</td>
          <td>{{item.statNm}}</td>
          <td v-if="item.statNm==='已学'" @click="toDetail(item.prodClassPk,'再次学习',item.nm)">再次学习</td>
          <td v-else-if="item.statNm==='在学'" @click="toDetail(item.prodClassPk,'继续学习',item.nm)">继续学习</td>
          <td v-else @click="toDetail(item.prodClassPk,'开始学习',item.nm)">开始学习</td>
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
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageNo: 1,
      pageSize: 10,
      total: 100,
      courseList: []
    };
  },
  mounted() {
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
      this.courseList = result.data.items;
      this.total = result.page.total;
    },
    //跳转到详情页面
    toDetail(classPk, stuState, nm) {
      this.$router.push({
        path: "/studyDetail",
        query: {
          classPk: classPk,
          stuState: stuState,
          nm: nm
        }
      });
    },
    getCourseList() {
      return new Promise((resolve, reject) => {
        let query = new this.Query();
        query.buildPageClause(this.pageNo, this.pageSize);

        let param = query.getParam();
        this.until.get("/prod/cls/learPage", param).then(res => {
          if (res.status === "200") {
            resolve(res);
          }
        });
      });
    }
  },
  components: {}
};
</script>
<style lang="less">
#prevent {
  table {
    width: 940px;
    margin: 20px auto;
    background: #fff;
    border: 1px solid #f1f1f1;
    thead {
      th {
        height: 50px;
        font-size: 18px;
        font-weight: normal;
        text-align: center;
        color: #303030;
        background-color: #fbfbfb;
        &:first-child {
          width: 15%;
        }
        &:nth-child(2) {
          width: 40%;
          text-align: left;
        }
        &:nth-child(3) {
          width: 15%;
        }
        &:nth-child(4) {
          width: 15%;
        }
      }
    }
    tr {
      border: 1px solid #e1e1e1;
      color: #303030;
      &:last-child {
        border-bottom: 0;
      }
      td {
        height: 50px;
        font-size: 18px;
        text-align: center;
        &:nth-child(2) {
          text-align: left;
        }
        &:last-child {
          color: #72b713;
          cursor: pointer;
        }
      }
    }
  }
  .el-pagination {
    padding-bottom: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    .active{
      background-color: #72b713;
    }
  }
}
</style>