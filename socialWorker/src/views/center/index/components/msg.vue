<template>
    <div class="study">
      <div class="study-wrap">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{address}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="宁波">宁波</el-dropdown-item>
            <el-dropdown-item command="海曙">海曙</el-dropdown-item>
            <el-dropdown-item command="江北">江北</el-dropdown-item>
            <el-dropdown-item command="鄞州">鄞州</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="msg-item" v-for="(item, index) in list" :key="index" @click="toMsgDetail(item.ipPk)">
          <span>
            {{item.content}}
          </span>
          <span>{{item.time}}</span>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      address: "课程名称",
      list: [
        {
          content: "《国分》课程报名成功，请完成缴费，以免耽误课程安排",
          time: "2018年10月22日"
        },
        {
          content: "《国分》课程报名成功，请完成缴费，以免耽误课程安排",
          time: "2018年10月22日"
        },
        {
          content:
            "请考生于11月2日至11月9日在网上进行确认，否则可能影响正常上课",
          time: "2018年10月22日"
        },
        {
          content:
            "请考生于11月2日至11月9日在网上进行确认，否则可能影响正常上课",
          time: "2018年10月22日"
        },
        {
          content:
            "请考生于11月2日至11月9日在网上进行确认，否则可能影响正常上课",
          time: "2018年10月22日"
        },
        {
          content:
            "请考生于11月2日至11月9日在网上进行确认，否则可能影响正常上课",
          time: "2018年10月22日"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    //跳转到详情页面
    handleCommand(command) {
      this.address = command;
    },
    toMsgDetail(ipPk){
      this.$router.push({
        path:'msgdetail',
        query:{
          ipPk:ipPk
        }
      })
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.study {
  .study-wrap {
    padding: 30px;
    display: flex;
    flex-flow: row wrap;
    .el-dropdown {
      border: 1px solid #cbcbcb;
      border-radius: 5px;
      padding: 20px 30px;
      .el-icon--right {
        margin-left: 40px;
      }
    }
    .msg-item{
      padding: 30px 0;
      flex: 1 0 100%;
      display: flex;
      flex-flow: row nowrap;
      border-bottom: 1px solid #cbcbcb;
      >span{
        flex: 1 0 50%;
        &:nth-of-type(2){
          flex: 0 0 auto;
        }
      }
    }
  }
}
</style>