<template>
    <div id="container">
        <myHeader></myHeader>
        <myNav :type="name"></myNav>
        <div class="content">
            <div class="pos">
                 首页 > 当前课程
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
                <tr v-for="(item,index) in list" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{item.nm}}</td>
                    <td>{{item.learningStar}}</td>
                    <td>{{item.statNm}}</td>
                    <td v-if="item.statNm==='已学'" @click="toDetail(item.prodClassPk,'再次学习')">再次学习</td>
                    <td v-else-if="item.statNm==='在学'"  @click="toDetail(item.prodClassPk,'继续学习')">继续学习</td>
                    <td v-else  @click="toDetail(item.prodClassPk,'开始学习')">开始学习</td>
                </tr>
                </tbody>
            </table>

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
      name: "study",
      pageNo: 1,
      pageSize: 10,
      total: 100,
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
  mounted() {

    // this.getCourseList();
  },
  methods: {
    //更改当前页数
    handleCurrentChange(val) {},
    toDetail(classPk, stuState) {
      window.location.href =
        "studyDetail.html?classPk=" + classPk + "&stuState=" + stuState;
    },
    getCourseList(){

      let query=new this.Query();

      query.buildWhereClause(this.pageNo,this.pageSize);

      let param={
        query:query.toString()
      }

      this.until.get('/prod/class/page',param).then(
        res=>{
          if(res.status==='200'){
            this.list=res.data.items;
          }
          else{
            console.log('调用失败,返回的状态码不是200')
          }
        },
        err=>{
          console.log('调用失败')
        }
      )
    }
  },
  components: {
    myHeader,
    myNav,
    myFooter
  }
};
</script>