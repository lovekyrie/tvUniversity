<template>
    <div>
        <div id="course">
            <!--下拉框-->
            <el-select v-model="resultVal" @change="getClassMsg(resultVal)">
                <el-option
                        v-for="item in resultAll"
                        :key="item.cd"
                        :label="item.nm"
                        :value="item.nm">
                </el-option>
            </el-select>
            <!--内容-->
            <div class="c-cnt clearfix">
                <div class="c-cnt-list" v-for="item in classmsgAll">
                    <img :src="item.imgUrl" alt="">
                    <div>
                        <h3>{{item.courseNm}}</h3>
                        <span v-if="item.state==0" class="span-r">报名成功</span>
                        <span v-if="item.state==1" class="span-b">审核中</span>
                        <span v-if="item.state==2">报名失败</span>
                    </div>
                    <p>任课老师：{{item.teacNm}}  班主任：{{item.teacNm}}</p>
                    <p>{{item.rmks}}</p>
                    <div class="clearfix">
                        <div @click="detailcnt(item.coursePk,item.pxClazzPk,item.teacPk,item.headTeacPk)">查看详情</div>
                    </div>
                    <p>已有<span>{{item.totPersQty}}</span>报名</p>
                </div>
            </div>
            <div class="page">
                <el-pagination
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-size="currentPagesize"
                        layout=" prev, pager, next, total"
                        :total="total">
                </el-pagination>
                <span>共{{total}}页</span>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        resultAll: [{nm:'全部',cd:0}],
        resultVal: '全部',
        currentPage:1,
        currentPagesize:1,
        total:0,
        /*班级信息*/
        classmsgAll: []
      }
    },
  mounted() {
    if (this.until.isLogin()) {
      /*课程类别*/
      let course = new this.Query();
      course.buildWhereClause('prntCd', '30057');
      let courseParam = course.getParam();
      this.until.get('/sys/cat/list', courseParam)
        .then(res => {
          if (res.status == 200) {
            this.resultAll.push(...res.data.items);
            this.getClassMsg(this.resultVal);
          }
        });
    } else {
      this.until.toLogin(this);
    }
  },
    methods: {
      handleCurrentChange(val){
        this.currentPage = val;
        this.getClassMsg(this.resultVal);
      },
      detailcnt(coursePk,pxClazzPk,teacPk,headTeacPk) {
        this.$router.push({path:'/mycourse/coursecnt',query:{'coursePk':coursePk,'pxClazzPk':pxClazzPk,'teacPk':teacPk,'headTeacPk':headTeacPk}});
      },
      getClassMsg(cd){
        let course = new this.Query();
        if(cd!=''&&cd!='全部'){
          course.buildWhereClause('courseCatNm', cd);
        }
        course.buildPageClause(this.currentPage,this.currentPagesize);
        let courseParam = course.getParam();
        this.until.get('/px/clazz/clazzAndLessonListSelf',courseParam)
          .then(res=>{
            if(res.status == 200){
                this.classmsgAll = res.data.items;
                this.currentPage = res.page.pageNum;
                this.currentPagesize = res.page.pageSize;
                this.total = res.page.total;
            }
          });
      }
    }
  }
</script>
<style lang="less" scoped>
    #course {
        width: 920px;
        background-color: #f6f6f6;
        padding: 30px;
        /*内容*/
        .c-cnt {
            margin-bottom: 60px;
            .c-cnt-list {
                float: left;
                width: 443px;
                border: 1px solid #e1e1e1;
                font-size: 24px;
                background-color: #fff;
                margin-top: 30px;
                &:nth-of-type(2n+1) {
                    margin-right: 30px;
                }
                img {
                    width: 443px;
                    height: 398px;
                    vertical-align: bottom;
                }
                > div {
                    padding: 0 25px;
                    &:nth-of-type(1) {
                        margin-top: 25px;
                        margin-bottom: 15px;
                        h3 {
                            display: inline-block;
                            width: 295px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 28px;
                        }
                        span {
                            float: right;
                            font-size: 24px;
                            color: #666;
                        }
                        .span-r {
                            color: #ff3000;
                        }
                        .span-b {
                            color: #3a71a8;
                        }
                    }
                    &:nth-of-type(2) {
                        div {
                            float: left;
                            width: 175px;
                            height: 48px;
                            line-height: 48px;
                            text-align: center;
                            border-radius: 5px;
                            margin-top: 10px;
                            margin-bottom: 15px;
                            cursor: pointer;
                            &:nth-of-type(1) {
                                background: #3a71a8;
                                color: #fff;
                            }
                        }
                    }
                }
                > p {
                    padding: 0 25px;
                    color: #666;
                    &:nth-of-type(1) {
                        font-size: 22px;
                        margin-bottom: 25px;
                    }
                    &:nth-of-type(2), &:nth-of-type(3) {
                        font-size: 20px;
                        margin-bottom: 15px;
                        line-height: 1.2;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    &:nth-of-type(3) {
                        margin-bottom: 25px;
                        span {
                            color: #ff0000;
                        }
                    }
                }
            }
        }
    }
</style>