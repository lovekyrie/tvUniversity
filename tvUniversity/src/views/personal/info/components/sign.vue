<template>
    <div id="sign">
        <table>
            <thead>
            <tr>
                <th>课程名称</th>
                <th>签到时间</th>
                <th>学习之星</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in list" :key="index">
                <td>{{item.prodClassNm}}</td>
                <td>{{item.crtTm}}</td>
                <td>{{item.rmks}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  data() {
    return {
      total: 48,
      pageCount: 1,
      pageSize: 10,
      list: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      this.list=  await this.getSignLog();
    },
    getSignLog() {
      return new Promise((resolve, reject) => {

        let query=new this.Query()
        query.buildPageClause(this.pageCount,this.pageSize);

        let param=query.getParam()
        this.until.get("/prod/supp/stupage",param).then(
          res=>{
            if(res.status==='200'){
              resolve(res.data.items)
            }
          },
          err=>{}
        )
      });
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
#sign {
  table {
    width: 940px;
    margin: 20px auto;
    background: #ffffff;
    border: 1px solid #e1e1e1;
    thead {
      th {
        height: 50px;
        font-size: 20px;
        font-weight: normal;
        text-align: center;
        color: #303030;
        background-color: #fbfbfb;
        &:first-child {
          width: 50%;
          text-align: left;
          padding-left: 25px;
        }
        &:nth-child(2) {
          width: 30%;
        }
        &:nth-child(3) {
          width: 20%;
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
        font-size: 20px;
        text-align: center;
        &:first-child {
          padding-left: 25px;
          text-align: left;
        }
      }
    }
  }
}
</style>