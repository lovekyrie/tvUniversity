<template>
    <div id="container">
        <myHeader></myHeader>
        <myNav :type="name"></myNav>
        <div class="content">
            <div class="pos">
                 首页 > 通知公告
            </div>
            <div class="list" v-for="(item,index) in list" :key="index" @click="toDetail(item.sysNewsPk)">
                <div class="img">
                    <img :src="item.img"/>
                </div>
                <div class="listContent">
                    <div>
                        <strong>{{item.title}}</strong>
                    </div>

                    <p>{{item.year}}年{{item.month}}月{{item.day}}日 {{item.time}}<span></span>来源：{{item.come}}</p>
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
      name: "notice",
      pageNo: 1,
      pageSize: 10,
      total: 100,
      list: [
        {
          title: "班级全员满额，宁波老年大学一票难求怎么破",
          img:
            "http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg",
          come: "宁波电视大学",
          sysNewsPk:'4139210250294272',
        },
        {
          title: "艾炙疗法 - 健康养生",
          img:
            "http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg",
          come: "宁波电视大学",
          sysNewsPk:'4139210250294272',
        },
        {
          title: "艾炙疗法 - 健康养生",
          img:
            "http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg",
          come: "宁波电视大学",
          sysNewsPk:'4139210250294272',
        }
      ]
    };
  },
  mounted() {
    //this.getNoticesList();
  },
  methods: {
    //更改当前页数
    handleCurrentChange(val) {
      //this.getNoticesList();
    },
    toDetail(newPk) {
      window.location.href = "noticeDetail.html?newPk=" + newPk;
    },
    getNoticesList() {
      let query = new this.Query();
      //拼接参数
      query.buildWhereClause("catNm", "通知公告", "EQ");
      query.buildWhereClause(this.pageNo, this.pageSize);

      let param = {
        query: query.toString()
      };
      this.until.get("/sys/news/page", param).then(
        res => {
          if (res.status === "200") {
            console.log("调用成功");
            this.list = res.data.items;
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