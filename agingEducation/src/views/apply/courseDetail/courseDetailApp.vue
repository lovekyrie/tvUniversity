<style lang="less">
    .size {
        h2 {
            font-size: 30px !important;
        }
        h3 {
            font-size: 26px !important;
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
            font-size: 26px !important;
        }
        select {
            font-size: 26px !important;
        }
        option {
            font-size: 26px !important;
        }
    }

    .el-checkbox__inner.change::after {
        height: 12px;
        left: 8px;
        top: 2px;
    }
</style>
<style scoped lang="less">
    .r-link {
        padding: 30px 0;
        color: #999;
        font-size: 20px;
        border-bottom: 1px solid @bdColor;
        a {
            width: auto;
            display: inline-block;
            color: #999;
            cursor: pointer;
            &:nth-last-of-type(1) {
                cursor: auto;
            }
        }
        span {
            vertical-align: top;
        }
    }

    @bdColor: #e1e1e1;
    /*公共样式*/
    .cm-container {
        width: 1200px;
        margin: 0 auto;
    }

    .cm-button {
        width: 132px;
        height: 45px;
        border: 0;
        border-radius: 5px;
        color: #fff;
        background-color: #3a71a8;
        font-size: 20px;
        cursor: pointer;
    }

    .f-form {
        padding-bottom: 20px;
        h3 {
            text-align: left;
            margin-top: 60px;
            margin-bottom: 20px;
            font-size: 28px;
        }
        .onelist {
            padding-right: 380px;
            font-size: 22px;
            margin-top: 30px;
            > span {
                float: right;
                line-height: 55px;
            }
            > input, select {
                float: right;
                height: 53px;
                width: 315px;
                border: 1px solid @bdColor;
                text-indent: 20px;
            }
        }
        .one-title {
            float: right;
            font-size: 22px;
        }
        .one-photo {
            margin-top: 30px;
            > div {
                float: right;
                width: 697px;
                margin-bottom: 40px;
                .img-list {
                    position: relative;
                    float: left;
                    display: inline-block;
                    margin-right: 20px;
                    margin-bottom: 30px;
                    i {
                        display: none;
                        position: absolute;
                        top: 10px;
                        left: 160px;
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        background: url("img/close.png") no-repeat;
                        background-size: 20px 20px;
                        cursor: pointer;
                    }
                    img {
                        display: block;
                        width: 190px;
                        height: 190px;
                        vertical-align: bottom;
                    }
                }
                .f-upimg {
                    float: left;
                    position: relative;
                    display: inline-block;
                    width: 189px;
                    height: 189px;
                    border: 2px dashed @bdColor;
                    background: url("img/up.png") 35px 35px no-repeat;
                    > input {
                        display: inline-block;
                        width: 192px;
                        height: 192px;
                        opacity: 0;
                        cursor: pointer;
                    }
                    .f-it {
                        position: absolute;
                        bottom: -50px;
                        left: 0;
                        width: 192px;
                        font-size: 18px;
                        line-height: 2;
                        text-align: center;
                        color: #b6b6b6;
                    }
                }
            }
        }
    }

    .f-paybtn {
        svg {
            margin-right: 5px;
        }
        a {
            display: inline-block;
            width: auto;
        }
        button {
            margin-top: 20px;
            display: inline-block;
            width: 200px;
            height: 60px;
            border: 0;
            border-radius: 5px;
            color: #fff;
            font-size: 28px;
            background-color: #3a71a8;
            margin-bottom: 90px;
            cursor: pointer;
            margin-left: 115px;
        }
    }
    .course-cnt {
        overflow: hidden;
        margin-top: 20px;
        h3 {
            font-size: 24px;
            text-align: left;
            line-height: 1.5;
        }
        .cnt-content {
            line-height: 1.5;
            font-size: 22px;
            color: #666;
        }
        .cnt-img {
            text-align: center;
            max-width: 100%;
            margin-bottom: 30px;
        }
        .cnt-time {
            margin: 60px 30px 20px 0;
            padding: 0 40px;
            span {
                float: right;
                color: #b7b7b7;
            }
        }
    }

    .teach-info {
        text-align: center;
        overflow: hidden;
        font-size: 0;
        > div {
            width: 50%;
            display: inline-block;
        }
        p {
            line-height: 1.5;
            font-size: 24px;
            &:nth-of-type(1) {
                margin-top: 10px;
                text-align: center;
            }
            &:nth-of-type(2) {
                margin-top: 20px;
                padding: 0 100px;
                text-align: left;
            }
        }
    }

    .c-color {
        background-color: #666 !important;
        cursor: auto !important;
    }
    .s-sytle{
        margin: 10px 0;
        h4{
            float: left;
            width: 115px;
            height: 30px;
            line-height:30px;
            font-size: 20px;
        }
        >div{
            float: left;
            width: 800px;
            img {
                display: inline-block;
                text-align: center;
                width: 200px !important;
                height: 250px !important;
                vertical-align: bottom;
                margin: 10px 0;
                border: 2px solid #e1e1e1;
            }
        }
    }
    .c-place {
        line-height:30px;
        font-size: 19px;
        color: #666;
    }
    .bt{
        display: inline-block;
        width: 5px;
        height: 18px;
        background-color: #3a71a8;
        vertical-align: -6%;
        margin-right: 8px;
    }
</style>

<template>
    <div id="container">
        <ageHead @state="getState"></ageHead>
        <div class="g-content g-content-footer">
            <!--链接栏-->
            <div class="r-link cm-container">
                <!--<a href="../home/index.html">首页</a>-->
                <a href="http://ln.nbsqjy.com/">首页</a>

                <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a href="./select.html">我的课程</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a>课程详情</a>
            </div>

            <div class="course-cnt">
                <h3><i class="bt" style="height: 20px;vertical-align: -5%;"></i>{{infoData.nm}}</h3>
                <p class="cnt-content">{{infoData.intro}}</p>
                <!--<div class="cnt-img"><img :src="infoData.imgUrl" alt=""></div>-->
                <div class="s-sytle clearfix">
                    <h4><i class="bt"></i>校区：</h4>
                    <div><p class="c-place">{{area}}</p></div>
                </div>
                <div class="s-sytle clearfix">
                    <h4><i class="bt"></i>课程安排：</h4>
                    <div><p v-for="item in placeData" class="c-place">时间：{{item.weekNm}}&nbsp;{{item.periNm}}&nbsp;&nbsp;&nbsp;&nbsp;地点：{{item.roomNm}}</p></div>
                </div>
                <div class="s-sytle clearfix">
                    <h4><i class="bt"></i>报名条件：</h4>
                    <div><p class="c-place">男：{{infoData.maleAgeNm}}岁&nbsp;&nbsp;&nbsp;&nbsp;女：{{infoData.famaleAgeNm}}岁</p></div>
                </div>
                <div class="s-sytle clearfix">
                    <h4><i class="bt"></i>报名起止时间：</h4>
                    <div><p class="c-place">{{stime}}&nbsp;&nbsp;~&nbsp;&nbsp;{{etime}}</p></div>
                </div>
                <div class="s-sytle clearfix">
                    <h4 style="width: 155px;"><i class="bt"></i>缴费起止时间：</h4>
                    <div><p class="c-place">{{pSTime}}&nbsp;&nbsp;~&nbsp;&nbsp;{{pETime}}</p></div>
                </div>
                <div class="s-sytle clearfix" v-if="!teachData.intro==''">
                    <h4><i class="bt"></i>教师介绍</h4>
                    <div><p class="c-place">{{teachData.intro}}</p></div>
                </div>
                <div class="s-sytle clearfix">
                    <h4><i class="bt"></i>任课老师：</h4>
                    <div>
                        <p class="c-place">{{teachData.nm}}</p>
                        <img :src="teachData.teacImgUrl" v-if="!teachData.teacImgUrl==''">
                    </div>
                </div>
            </div>
            <div class="f-paybtn">
                <!--可以报名的条件：在规定时间内，是基础课程，人数未满(对外报名人数<对外人数)-->
                <button v-if="courseType == 'ok'" @click="applyBtn()">{{hasExam == 1 ? '预报名' : '报名'}}</button>
                <!--人数已满的条件：在规定时间内，是基础课程，人数已满(对外报名人数>=对外人数)-->
                <button v-if="courseType == 'full'">人数已满</button>
                <!--中高级课程未报满的条件：在规定时间内，非基础课程，人数未满(对外报名人数<对外人数)-->
                <button v-if="courseType == 'nobaseW'" @click="noBase">{{hasExam == 1 ? '预报名' : '报名'}}</button>
                <!--中高级课程已报满的条件：在规定时间内，非基础课程，人数未满(对外报名人数<对外人数)-->
                <button class="c-color" v-if="courseType == 'nobaseY'">已报满</button>
                <!--未开始报名的条件：在未开始报名时间内，无论是什么课程，人数未满(对外报名人数<对外人数)-->
                <button class="c-color" v-if="courseType == 'pre'" disabled>未开始</button>
                <!--已过缴费时间-->
                <button class="c-color" v-if="courseType == 'no'" disabled>已结束</button>
                <!--不对外报名-->
                <button class="c-color" v-if="courseType == 'noAllow'" disabled>不对外报名</button>
            </div>
        </div>
        <ageFoot></ageFoot>
    </div>
</template>
<script>
  import ageHead from 'components/ageHead';
  import ageFoot from 'components/ageFoot';

  export default {
    data() {
      return {
        headState: false,
        infoData: {},
        placeData: [],
        teachData: {},
        headteachData: {},
        courseType: '',
        stime: '',
        etime: '',
        pxRecrPlanPk: '',
        coursePk: '',
        pxClazzPk: '',
        teacPk: '',
        headTeacPk: '',
        price: '',
        nm: '',
        pSTime:'',
        pETime:'',
        area:'',
        hasExam:''
      }
    },
    watch: {
      headState(val) {
        if (val) {
          $('.el-checkbox__inner').css({width: '25px', height: '25px'});
          $('.el-checkbox__inner').addClass('change');
        } else {
          $('.el-checkbox__inner').css({width: '18px', height: '18px'});
          $('.el-checkbox__inner').removeClass('change');
        }
      }
    },
    mounted() {
      this.courseType = this.until.getQueryString('type');
      this.statCd = this.until.getQueryString('statCd');
      this.hasExam = this.until.getQueryString('hasExam');
      this.area = this.until.getQueryString('area');
      this.pSTime=this.until.getQueryString('pSTime');
      this.pETime = this.until.getQueryString('pETime');
      this.stime = this.until.getQueryString('stime');
      this.etime = this.until.getQueryString('etime');
      this.pxRecrPlanPk = this.until.getQueryString('pxRecrPlanPk');
      this.coursePk = this.until.getQueryString('coursePk');
      this.pxClazzPk = this.until.getQueryString('pxClazzPk');
      this.teacPk = this.until.getQueryString('teacPk');
      this.headTeacPk = this.until.getQueryString('headTeacPk');
      this.price = this.until.getQueryString('pr');
      this.nm = this.until.getQueryString('clazzNm');
      this.listAll();
    },
    methods: {
      async listAll() {
        await this.getPersonal();
        await this.getClassinfo();
        await this.getTeachInfo();
      },
      applyBtn() {
        let result = this.isOldTime();
        if (result == 'no') {
          this.$alert('该班级已过报名截止时间', '提示', {
            confirmButtonText: '返回',
            callback: action => {
              history.back();
            }
          });
        }
        window.location.href = './form.html?pxRecrPlanPk=' + this.pxRecrPlanPk + '&coursePk=' + this.coursePk + '&pxClazzPk=' + this.pxClazzPk + '&pr=' + this.price + '&clazzNm=' + this.nm;
      },
      isOldTime() {
        let startTime = new Date(this.stime);
        let endTime = new Date(this.etime);
        let curTime = new Date();
        /*报名时间的状态*/
        let applyStatus = '';
        if (curTime > startTime && curTime < endTime) {
          applyStatus = 'ok';
        } else if (curTime > endTime) {
          /*如果已过缴费时间*/
          return 'no';
        }
      },
      noBase() {
        this.$alert('非基础班，报名请联系班主任', '提示', {
          confirmButtonText: '确定',
          callback: action => {
          }
        });
      },
      getState(val) {
        this.headState = val;
      },
      getPersonal() {
        return new Promise(resolve => {
          this.until.get('/px/course/info/' + this.coursePk, {})
            .then(res => {
              if (res.status = 200) {
                this.infoData = res.data;
                resolve();
              }
            });
        });
      },
      getClassinfo() {
        return new Promise(resolve => {
          let clazz = new this.Query();
          clazz.buildWhereClause('clazzPk', this.pxClazzPk);
          let clazzParam = clazz.getParam();
          this.until.get('/px/clazzLesson/list', clazzParam)
            .then(res => {
              if (res.status == 200) {
                this.placeData = res.data.items;
                resolve();
              }
            });
        })
      },
      /*任课老师信息*/
        getTeachInfo() {
        return new Promise(resolve => {
          this.until.get('/px/teac/info/' + this.teacPk, {})
            .then(res => {
              if (res.status == 200) {
                this.teachData = res.data;
                this.teachData.teacImgUrl = this.teachData.teacImgUrl.split(',')[0];
                resolve();
              }
            });
        });
      }
    },
    filters: {
      formdata(val) {
        let time = new Date(val);
        let str = '';
        str += time.getFullYear() + '年';
        str += time.getMonth() + 1 + '月';
        str += time.getDate() + '日';
        return str;
      },
      format(val){
        let times = new Date(val.replace(/(-)/g, '/'));
        let year = times.getFullYear();
        let mon = times.getMonth()+1;
        let day = times.getDate();
        let hour = times.getHours();
        let min = times.getMinutes();
        return year+'年'+mon+'月'+day+'日 '+hour+'时'+min+'分'
      }
    },
    components: {
      ageHead, ageFoot
    }
  }
</script>


