<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div id="main">
      <!--列表-->
      <div class="writingList">
        <!--列表顶部-->
        <div class="writingTop">
          <span>
            <a href="../home/index.html">首页</a>
          </span>
          <template v-if="showType">
            <span class="topLine">></span>
            <span>
              <a href="../phyEducation/phyeducationMain.html">实体办学</a>
            </span>
          </template>
          <span class="topLine">></span>
          <span>
            <a href="#">精彩活动</a>
          </span>
        </div>

        <!--精彩活动-->
        <el-row :gutter="80">
          <el-col :span="12" v-for="(act,index) in actList" :key="index">
            <div class="Content">
              <div class="contentImg">
                <img :src="act.imgUrl">
              </div>
              <div class="contentMsg2">
                <a href="#">
                  <h4>{{act.titleNm}}</h4>
                </a>
                <span>时间：{{act.startTm}}&nbsp;~&nbsp;{{act.endTm}}</span>
                <span>地点：{{act.address}}</span>
                <span>主办方：{{act.source}}</span>
                <span style="margin-top: 14px;line-height: 16px">
                  {{act.sponsor}}人参与
                  <button
                    class="actBtn"
                    @click="toDetail(act.televDoingPk)"
                  >查看详情</button>
                </span>
              </div>
            </div>
          </el-col>
        </el-row>

        <!--底部分页按钮-->
        <div class="nextButton">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="pager,next,slot"
            background
            :total="total"
            :next-text="newsNext"
          >
            <span style="margin-left: 10px">共{{total}}条记录，共{{page}}页</span>
          </el-pagination>
        </div>
      </div>
    </div>

    <!--底部-->
    <ageFoot></ageFoot>
  </div>
</template>

<script>
    import ageHead from 'components/ageHead';
    import ageFoot from 'components/ageFoot';

    export default {
        data() {
            return {
              showType:false,
                actList:[],
                total: 15,
                pageSize:5,
                currentPage: 1,
                newsNext: '下一页'
            }
        },
        components: {
            ageHead,
            ageFoot,
        },
        computed:{
          page(){
            return Math.floor( (this.total-1)/this.pageSize)+1
          }
        },
        mounted(){

          this.showType=this.until.getQueryString('type')==='实体办学'?true:false
          this.getActList()
        },
        methods: {
            //当前页变动时
            handleCurrentChange(val) {
              this.currentPage=val;
              this.getActList()
            },
            getActList(){

              let query=new this.Query()
              query.buildPageClause(this.currentPage,this.pageSize)

              let param=query.getParam()
              this.until.get('/telev/doing/page',param).then(
                res=>{
                  if(res.status==='200'){
                    this.actList=res.data.items;
                    this.total=res.page.total;

                    this.actList.forEach((item,index)=>{
                      item.startTm=item.startTm.substr(0,10)
                      item.endTm=item.endTm.substr(0,10)
                    })
                  }
                },
                err=>{}
              )
            },
            toDetail(btnId){
              window.location.href='./actVote.html?id='+btnId+'&type='+this.showType
            }
        },
    }
</script>

<style scoped>

</style>