<template>
    <div id="container">
        <myHeader></myHeader>
        <myNav :type="name"></myNav>
        <div class="content">
            <div class="pos">
                 首页 > 新闻动态
            </div>
            <div class="list" v-for="(item,index) in newList" :key="index" @click="toDetail(item.sysNewsPk)">
                <div class="img">
                    <img :src="item.imgUrl"/>
                </div>
                <div class="listContent">
                    <div>
                        <strong>{{item.nm}}</strong>
                    </div>

                    <p>{{item.year}}年{{item.month}}月{{item.day}}日 {{item.time}}<span></span>来源：{{item.author}}</p>
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
import myNav from "@/components/myNav";
import myFooter from "@/components/myFooter";
export default {
  data() {
    return {
      name: "news",
      token: "",
      pageNo: 1,
      pageSize: 10,
      total: 100,
      list: [
        {
          title: "班级全员满额，宁波老年大学一票难求怎么破",
          img:
            "http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg",
          come: "宁波电视大学",
          content: "简介信息",
          sysNewsPk: "4139210250294272"
        },
        {
          title: "艾炙疗法 - 健康养生",
          img:
            "http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg",
          come: "宁波电视大学",
          content: "简介信息",
          sysNewsPk: "4139210250294272"
        },
        {
          title: "艾炙疗法 - 健康养生",
          img:
            "http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg",
          come: "宁波电视大学",
          content: "简介信息",
          sysNewsPk: "4139210250294272"
        }
      ],
      newList: []
    };
  },
  mounted() {
    this.getNewsList();
  },
  methods: {
    //更改当前页数
    handleCurrentChange(val) {
      this.pageNo=val;
      this.getNewsList();
    },
    toDetail(newPk) {
      window.location.href = "newsDetail.html?newPk=" + newPk;
    },
    getNewsList() {
       let query = new this.Query();
      // let tokenObj = this.until.seGet("DD_token");
      // this.token = this.until.getToken(JSON.parse(tokenObj));
      //拼接参数
      query.buildWhereClause("catNm", "校园动态", "EQ");
      query.buildPageClause(this.pageNo, this.pageSize);
      let param = query.getParam();

      this.until.get("/sys/news/pag", param).then(
        res => {
          if (res.status === "200") {
            console.log("调用成功");
            this.newList = res.data.items;
            this.total=res.page.total;
            var that = this;
            this.newList.forEach(element => {
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
    myNav,
    myFooter
  }
};
</script>