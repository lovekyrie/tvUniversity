<template>
    <div id="study">
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
                <tr v-for="(item,index) in list" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{item.nm}}</td>
                    <td>{{item.learningStar}}</td>
                    <td>{{item.statNm}}</td>
                    <td v-if="item.state=='已学'" @click="toDetail(item.prodClassPk)">再次学习</td>
                    <td v-else @click="toDetail(item.ipPk)">开始学习</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          nm: "中国茶文化与艺术-茶文化艺术",
          learningStar: 150,
          statNm: "已学",
          prodClassPk: 1
        },
        {
          nm: "中国茶文化与艺术-茶文化艺术",
          learningStar: 150,
          statNm: "未学",
          prodClassPk: 1
        },
        {
          nm: "中国茶文化与艺术-茶文化艺术",
          learningStar: 150,
          statNm: "在学",
          prodClassPk: 1
        },
        {
          nm: "中国茶文化与艺术-茶文化艺术",
          learningStar: 150,
          statNm: "已学",
          prodClassPk: 1
        },
        {
          nm: "中国茶文化与艺术-茶文化艺术",
          learningStar: 150,
          statNm: "已学",
          prodClassPk: 1
        },
        {
          nm: "中国茶文化与艺术-茶文化艺术",
          learningStar: 150,
          statNm: "已学",
          prodClassPk: 1
        },
        {
          nm: "中国茶文化与艺术-茶文化艺术",
          learningStar: 150,
          statNm: "已学",
          prodClassPk: 1
        },
        {
          nm: "中国茶文化与艺术-茶文化艺术",
          learningStar: 150,
          statNm: "已学",
          prodClassPk: 1
        },
        {
          nm: "中国茶文化与艺术-茶文化艺术",
          learningStar: 150,
          statNm: "已学",
          prodClassPk: 1
        }
      ]
    };
  },
  mounted() {},
  methods: {
    //跳转到详情页面
    toDetail(classPk) {
      this.$router.push({
        path: "/studyDetail",
        query: {
          classPk: classPk
        }
      });
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
#study {
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