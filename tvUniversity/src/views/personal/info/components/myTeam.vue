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
    </div>
</template>
<script>
export default {
  data() {
    return {
      myTeam: "测试组",
      teamList: [],
      teamInfo: {}
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      this.teamList = await this.getTeamList();
      this.teamInfo = await this.getTeamInfo();
    },
    getTeamList() {
      return new Promise((resolve, reject) => {
        this.until.get("/prod/dent/listDot").then(
          res => {
            if (res.status === "200") {
              resolve(res.data.items);
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
<style lang="less" scoped>
#myTeam {
  h3 {
    font-size: 24px;
    padding-left: 25px;
    padding-top: 30px;
  }
  p {
    padding-left: 25px;
    padding-top: 15px;
    span {
      padding-left: 50px;
    }
  }
  table {
    width: 940px;
    margin: 20px auto;
    background: #ffffff;
    border: 1px solid #e1e1e1;
    thead {
      th {
        color: #666666;
        font-size: 18px;
        height: 86px;
        font-weight: normal;
        text-align: center;
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
      &:last-child {
        border-bottom: 0;
      }
      td {
        text-align: center;
        font-size: 18px;
        height: 86px;
      }
    }
  }
}
</style>