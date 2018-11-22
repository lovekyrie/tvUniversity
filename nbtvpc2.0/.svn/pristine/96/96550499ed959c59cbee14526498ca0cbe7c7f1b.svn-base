<style lang="less">
    .size {
        h2 {
            font-size: 30px !important;
        }
        h3 {
            font-size: 28px !important;
        }
        span {
            font-size: 26px !important;
        }
        input {
            font-size: 26px !important;
        }
        button {
            font-size: 26px !important;
        }
        a {
            font-size: 26px !important;
        }
        li {
            font-size: 26px !important;
        }
        p {
            font-size: 22px !important;
        }
    }

    .el-select > .el-input {
        width: 165px;
    }

    .searchCnt {
        display: inline-block;
        width: auto !important;
        .el-input__inner {
            width: 310px;
        }
        input {
            font-size: 20px;
        }
    }

    .el-select, .el-input {
        float: left;
    }

    .el-select {
        margin-right: 20px;
        input {
            font-size: 20px;
        }
    }

    .el-input__inner {
        height: 45px;
    }

    .el-select-dropdown__item {
        font-size: 20px;
        height: 45px;
    }

    .page {
        padding-left: 30px;
        margin: 30px 0 100px 0;

        span {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            vertical-align: middle;
        }
        .el-pagination {
            display: inline-block;
        }
        .el-pager li {
            font-size: 20px;
            height: 40px;
            width: 40px;
            line-height: 40px;
        }
        .el-pager li.btn-quicknext, .el-pager li.btn-quickprev {
            line-height: 40px;
        }
        .el-pagination button, .el-pagination span {
            height: 40px;
            line-height: 40px;
            font-size: 20px;
        }
        .el-pagination__editor {
            height: 40px;
            width: 40px;
            line-height: 40px;
            font-size: 20px;
        }
        .el-icon-arrow-left:before {
            content: '上一页';
            font-size: 20px;
        }
        .el-icon-arrow-right:before {
            content: '下一页';
            font-size: 20px;
        }
    }
</style>
<style scoped lang="less">

    @bdColor: #e1e1e1;
    /*公共样式*/
    .cm-container {
        width: 1200px;
        margin: 0 auto;
    }

    .cm-button {
        float: right;
        width: 132px;
        height: 45px;
        border: 0;
        border-radius: 5px;
        color: #fff;
        background-color: #3a71a8;
        font-size: 20px;
        cursor: pointer;
    }

    /*链接栏*/
    .r-link {
        padding: 30px 0;
        color: #999;
        font-size: 20px;
        border-bottom: 1px solid @bdColor;
        a {
            color: #999;
            &:nth-last-of-type(1) {
                cursor: auto;
            }
        }
        span {
            vertical-align: top;
        }
    }

    /*内容*/
    .r-content {
        .r-select {
            padding: 30px 0;
            button {
                float: right;
            }
        }
        .r-option {
            .r-opt-temp {
                float: left;
                margin-bottom: 30px;
                &:nth-of-type(2n+1) {
                    margin-right: 25px;
                }
                img {
                    display: block;
                    float: left;
                    width: 250px;
                    height: 360px;
                    vertical-align: bottom;
                }
                > div {
                    position: relative;
                    font-size: 0;
                    float: left;
                    width: 276px;
                    height: 298px;
                    border: 1px solid @bdColor;
                    border-left: 0px;
                    padding: 30px;
                    h3 {
                        margin-bottom: 20px;
                        font-size: 27px;
                        line-height: 1.5;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    p {
                        color: #666;
                        line-height: 1.5;
                    }
                    p:nth-of-type(1) {
                        font-size: 22px;
                    }
                    p:nth-of-type(2) {
                        height: 60px;
                        font-size: 20px;
                        margin-top: 20px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    > div {
                        position: absolute;
                        width: 276px;
                        left: 30px;
                        bottom: 30px;
                        span {
                            color: red;
                            font-size: 30px;
                            font-weight: bold;
                            line-height: 45px;
                        }
                        button {
                            float: right;
                        }
                    }
                }
            }
        }
    }
</style>
<style lang="less">
    .el-dialog--small{
        width: 500px;
    }
</style>

<template>
    <div>
        <AllHead @state="getState"></AllHead>
        <div class="g-content">
            <!--链接栏-->
            <div class="r-link cm-container">
                <a href="../home/index.html">首页</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a>在线报名</a>
            </div>
            <!--内容-->
            <div class="r-content cm-container">
                <!--下拉框-->
                <div class="r-select clearfix">

                    <el-select v-model="areaVal" placeholder="校园类别" @change="updata">
                        <el-option
                                v-for="item in areaOpt"
                                :key="item.pxCampPk"
                                :label="item.nm"
                                :value="item.pxCampPk">
                        </el-option>
                    </el-select>

                    <el-select v-model="courseVal" placeholder="课程类别" @change="updata">
                        <el-option
                                v-for="item in courseOpt"
                                :key="item.cd"
                                :label="item.nm"
                                :value="item.cd">
                        </el-option>
                    </el-select>

                    <!--<el-select v-model="weekVal" placeholder="星期选择">-->
                        <!--<el-option-->
                                <!--v-for="item in weekOpt"-->
                                <!--:key="item.cd"-->
                                <!--:label="item.nm"-->
                                <!--:value="item.cd">-->
                        <!--</el-option>-->
                    <!--</el-select>-->

                    <!--<el-select v-model="timeVal" placeholder="时间选择">-->
                        <!--<el-option-->
                                <!--v-for="item in timeOpt"-->
                                <!--:key="item.cd"-->
                                <!--:label="item.nm"-->
                                <!--:value="item.cd">-->
                        <!--</el-option>-->
                    <!--</el-select>-->

                    <el-input v-model="searchVal" placeholder="请输入课程名" class="searchCnt" @keyup.enter.native="searchBtn"></el-input>

                    <button class="cm-button" @click="searchBtn">搜索</button>

                </div>
                <!--选项内容-->
                <div class="r-option clearfix">
                    <div class="r-opt-temp clearfix" v-for="(option,index) in optionAll">
                        <img :src="option.imgUrl" alt="">
                        <div>
                            <h3>{{option.nm}}</h3>
                            <p><span>主讲人：{{option.teacNm}}</span></p>
                            <p>{{option.rmks}}</p>
                            <div class="clearfix">
                                <span>￥{{option.price}}</span>
                                <button class="cm-button" @click="applyLink(option.coursePk,option.pxClazzPk)">报名</button>
                            </div>
                        </div>
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
                    <span>共{{sumpage}}页</span>
                </div>

            </div>

        </div>

        <McFoot></McFoot>

    </div>

</template>
<script>
  import AllHead from 'components/allHead';
  import McFoot from 'components/McFoot';

  export default {

    data() {
      return {
        dialogTableVisible:false,
        state: false,
        areaOpt: [{nm:'全部',pxCampPk:''}],
        areaVal: '',
        courseOpt: [{nm:'全部',cd:''}],
        courseVal: '',
//        weekOpt: [],
//        weekVal: '',
//        timeOpt: [],
//        timeVal: '',
        searchVal: '',
        optionAll:[],
        total: 0,
        sumpage:0,
        currentPage: 1,
        currentPagesize:10,
        year:0
      }
    },
    mounted() {
      this.getYear();
      if (this.until.isLogin()) {
        this.token = this.until.getToken();
        /*校区类别*/
        this.until.get('/px/camp/list', {})
          .then(res => {
            if (res.status == 200) {
              this.areaOpt.push(...res.data.items);
            }
          })
        /*课程类别*/
        let course = new this.Query();
        course.buildWhereClause('prntCd', '30057');
        let courseParam = course.getParam();
        this.until.get('/sys/cat/list', courseParam)
          .then(res => {
            if (res.status == 200) {
              this.courseOpt.push(...res.data.items);
            }
          }, err => {
          });
//      /*星期*/
//      let week = new this.Query();
//      week.buildWhereClause('prntCd', '30070');
//      let weekParam = week.getParam();
//      this.until.get('/sys/cat/list', weekParam)
//        .then(res => {
//          if (res.status == 200) {
//            this.weekOpt.push(...res.data.items);
//          }
//        }, err => {
//        });
//      /*上午下午*/
//      let day = new this.Query();
//      day.buildWhereClause('prntCd', '30071');
//      let dayParam = day.getParam();
//      this.until.get('/sys/cat/list', dayParam)
//        .then(res => {
//          if (res.status == 200) {
//            this.timeOpt.push(...res.data.items);
//          }
//        }, err => {
//        });
        /*初始化课程列表*/
        let list = new this.Query();
        list.buildWhereClause('yearNm', this.year);
        list.buildPageClause(this.currentPage,this.currentPagesize);
        let listParam = list.getParam();
        this.until.get('/px/clazz/page', listParam)
          .then(res => {
            if(res.status== 200){
              this.optionAll = res.data.items;
              this.total = res.page.total;
              this.sumpage = res.page.pageNum;
            }
          })
      }else{
        this.until.toLogin(this);
      }
    },
    methods: {
      applyLink(coursePk,pxClazzPk) {
        /*获取ippk 跳转页面*/
        window.location.href = './form.html?coursePk='+coursePk+'&pxClazzPk='+pxClazzPk;
      },
      /*提醒框*/
      loginDiaLog(){
        let time = setTimeout(o => {
          this.dialogTableVisible = true;
        },1000);
      },
      getYear(){
        var time = new Date();
        this.year = time.getFullYear();
      },
      /*更新数据*/
      updata(){
        /*获取课程列表*/
        let list = new this.Query();
        if(this.areaVal != ''){
          list.buildWhereClause('campPk', this.areaVal);
        }
        if(this.courseVal != ''){
          list.buildWhereClause('courseCatCd', this.courseVal);
        }
        list.buildWhereClause('yearNm', this.year);
        list.buildPageClause(this.currentPage,this.currentPagesize);
        let listParam = list.getParam();
        this.until.get('/px/clazz/page', listParam)
          .then(res => {
            if(res.status== 200){
              this.optionAll = res.data.items;
              this.total = res.page.total;
              this.sumpage = res.page.pageNum;
            }
          })
      },
      searchBtn(){
        this.currentPage = 1;
        let list = new this.Query();
        list.buildWhereClause('nm', this.searchVal);
        list.buildPageClause(this.currentPage,this.currentPagesize);
        let listParam = list.getParam();
        this.until.get('/px/clazz/page', listParam)
          .then(res => {
            if(res.status== 200){
              this.optionAll = res.data.items;
              this.total = res.page.total;
              this.sumpage = res.page.pageNum;
            }
          })
      },
      getState(val) {
        this.state = val;
      },
      /*页数*/
      handleCurrentChange(val) {
        this.currentPage = val;
        this.updata();
      },
    },
    watch: {
      state(val) {
        let input = $('.el-select-dropdown__item');
        let inputsize = $('.el-select input');
        let size = $('.searchCnt input');
        if (val) {
          input.css({'font-size': '24px', 'height': '50px'});
          inputsize.css({'font-size': '24px'});
          size.css({'font-size': '24px'});
        } else {
          input.css({'font-size': '20px', 'height': '45px'});
          inputsize.css({'font-size': '20px'});
          size.css({'font-size': '20px'});
        }
      }
    },
    components: {
      AllHead, McFoot
    }
  }
</script>


