<template>
    <div id="myStar">
        <p>已获总学习星：{{info.starNum}}</p>
        <table>
            <thead>
            <tr>
                <th>学习课程名称</th>
                <th>获学习星数量</th>
                <th>获取时间</th>
                <th>获取类型</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in list" :key="index">
                <td>{{item.prodClassNm}}</td>
                <td>{{item.rmks}}</td>
                <td>{{item.crtTm}}</td>
                <td>自主学习</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  data() {
    return {
      info: {},
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
      this.list = await this.getSignLog();
      this.info = await this.getStarTotal();
    },
    getSignLog() {
      return new Promise((resolve, reject) => {
        let query = new this.Query();
        query.buildPageClause(this.pageCount, this.pageSize);

        let param = query.getParam();
        this.until.get("/prod/supp/stupage", param).then(
          res => {
            if (res.status === "200") {
              resolve(res.data.items);
            }
          },
          err => {}
        );
      });
    },
    getStarTotal() {
      return new Promise((resolve, reject) => {
        this.until.get("/prod/supp/getStar").then(
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
<style lang="less" scoped>
#myStar {
  p {
    padding-left: 25px;
    padding-top: 30px;
    font-size: 24px;
    color: #101010;
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
          width: 40%;
          text-align: left;
          padding-left: 25px;
        }
        &:nth-child(2) {
          width: 15%;
        }
        &:nth-child(3) {
          width: 30%;
        }
        &:nth-child(4) {
          width: 15%;
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
        text-align: center;
        font-size: 20px;
        &:first-child {
          padding-left: 25px;
          text-align: left;
        }
      }
    }
  }
}
</style>