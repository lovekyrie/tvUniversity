<template>
    <div class="study">
       <div class="nav">
          首页 > 当前学习
        </div>
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
                    <td v-else-if="item.statNm==='在学'"  @click="toDetail(item.prodClassPk,'继续学习',item.nm)">继续学习</td>
                    <td v-else  @click="toDetail(item.prodClassPk,'开始学习',item.nm)">开始学习</td>
                </tr>
            </tbody>
        </table>
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
      this.getInfo()
    },
    async getInfo() {
      let result= await this.getCourseList();
      this.courseList=result.data.items;
      this.total=result.page.total;
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
        this.until.get("/prod/cls/page", param).then(res => {
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
<style lang="less" scoped>
.study {
  .nav{
    width: 1200px;
    margin: 0 auto;
    color: #999;
    font-size: 24px;
    line-height: 80px;
    border-bottom: 1px solid #e1e1e1;
  }
  table {
    width: 940px;
    margin: 20px auto;
    background: #fff;
    border: 1px solid #e1e1e1;
    thead {
      th {
        color: #666;
        font-size: 18px;
        height: 86px;
        font-weight: normal;
        text-align: center;
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
      &:last-child {
        border-bottom: 0;
      }
      td {
        text-align: center;
        font-size: 18px;
        height: 86px;

        &:nth-child(2) {
          text-align: left;
        }
        &:last-child {
          color: #3a71a8;
          cursor: pointer;
        }
      }
    }
  }
}
</style>