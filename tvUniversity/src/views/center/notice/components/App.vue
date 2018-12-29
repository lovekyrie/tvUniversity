<template>
    <div id="container">
        <myHeader :type="name"></myHeader>
        <div class="content">
            <div class="pos">
              <span><a href="./index.html">首页</a></span>&nbsp;>
              <span>通知公告</span>
            </div>
            <div class="list" v-for="(item,index) in list" :key="index" @click="toDetail(item.sysNewsPk)">
                <div class="listContent">
                    <div>
                        <strong>{{item.nm}}</strong>
                    </div>
                    <p>
                     <span>{{item.year}}年{{item.month}}月{{item.day}}日 {{item.time}}</span>
                     <span>来源：{{item.author}}</span>
                    </p>
                </div>
            </div>
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
      name: "notice",
      pageNo: 1,
      pageSize: 10,
      total: 100,
      list: []
    };
  },
  mounted() {
    this.getNoticesList();
  },
  methods: {
    //更改当前页数
    handleCurrentChange(val) {
      this.pageNo=val;
      this.getNoticesList();
    },
    toDetail(newPk) {
      window.location.href = "noticeDetail.html?newPk=" + newPk;
    },
    getNoticesList() {
      let query = new this.Query();
      //拼接参数
      query.buildWhereClause("catNm", "通知公告", "EQ");
      query.buildPageClause(this.pageNo, this.pageSize);

      let param = {
        query: query.toString()
      };
      this.until.get("/sys/news/pag", param).then(
        res => {
          if (res.status === "200") {
            console.log("调用成功");
            this.list = res.data.items;
            this.total=res.page.total;

            var that = this;
            this.list.forEach(element => {
              let time = that.until.formatDate(element.releTm);
              element["year"] = time.year;
              element["month"] = time.month;
              element["day"] = time.day;
            });
          } else {
            console.log("状态码返回不是200");
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
    myFooter
  }
};
</script>