<template>
    <div id="container">
        <myHeader></myHeader>
        <myNav :type="name"></myNav>
        <div class="content">
            <div class="pos">
                 首页 > 文件政策
            </div>

            <ul>
                <li v-for="(item,index) in list" @click="toDetail(item.sysNewsPk)" :key="index">
                  <p>{{item.nm}}</p>
                  <span>{{item.year}}年{{item.month}}月{{item.day}}日</span>
                </li>
            </ul>

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
import myNav from "@/components/myNav";
import myFooter from "@/components/myFooter";
export default {
  data() {
    return {
      name: "policy",
      pageNo: 1,
      pageSize: 10,
      total: 100,
      list: []
    };
  },
  mounted() {
    this.getPolicysList();
  },
  methods: {
    //更改当前页数
    handleCurrentChange(val) {
      this.pageNo=val;
      this.getPolicysList();
    },
    toDetail(newPk) {
      window.location.href = "policyDetail.html?newPk=" + newPk;
    },
    getPolicysList() {
      let query = new this.Query();
      //拼接参数
      query.buildWhereClause("catNm", "校园政策", "EQ");
      query.buildPageClause(this.pageNo, this.pageSize);

      let param = {
        query: query.toString()
      };
      this.until.get("/sys/news/page", param).then(
        res => {
          if (res.status === "200") {
            this.list = res.data.items;
            this.total=res.page.total;
            
            var that=this;
            this.list.forEach(item=>{
              let time=that.until.formatDate(item.releTm)
              item['year']=time.year;
              item['month']=time.month;
              item['day']=time.day;
            })
          }
        },
        err => {
          console.log("调用失败");
        }
      );
    }
  },
  components: {
    myHeader,
    myNav,
    myFooter
  }
};
</script>