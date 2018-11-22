<style lang="less">
    .size {
        h2 {
            font-size: 30px !important;
        }
        h3 {
            font-size: 30px !important;
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
    }

    .f-form {
        h3 {
            text-align: center;
            margin-top: 60px;
            margin-bottom: 20px;
            font-size: 28px;
        }
        > p{
            padding-right: 380px;
            font-size: 22px;
            margin-top: 30px;
            > span {
                float: right;
                height: 55px;
                line-height: 55px;
                &.f-span {
                    width: 320px;
                }
            }

        }
        .one-img{
            margin-top: 30px;
            span{
                float: right;
                font-size: 22px;
            }
            > div {
                float: right;
                width: 699px;
                img {
                    display: inline-block;
                    border: 1px solid @bdColor;
                    vertical-align: bottom;
                    width: 190px;
                    height: 190px;
                    margin-bottom: 30px;
                    margin-right: 20px;
                    margin-bottom: 30px;
                }
            }
        }
    }

    .f-msg, .f-mn, .f-payway, .f-paybtn {
        overflow: hidden;
        border-top: 1px solid @bdColor;
        padding-left: 370px;
        h3 {
            font-size: 22px;
            margin: 30px 0;
        }
        p {
            margin-bottom: 20px;
            font-size: 16px;
            color: #959595;
            line-height: 1.5;
        }
    }

    .f-mn {
        p {
            margin-top: 30px;
            span {
                color: red;
                font-size: 30px;
            }
        }
    }

    .f-payway {
        > div {
            margin-bottom: 30px;
            img {
                width: 38px;
                height: 38px;
                vertical-align: bottom;
            }
            span {
                display: inline-block;
                height: 38px;
                line-height: 38px;
                margin-left: 20px;
                font-size: 16px;
            }
        }
    }

    .f-paybtn {
        padding-top: 30px;
        svg {
            margin-right: 5px;
        }
        a {
            display: inline-block;
            width: auto;
        }
        button {
            width: 210px;
            height: 60px;
            border: 0;
            border-radius: 5px;
            color: #fff;
            font-size: 28px;
            background-color: #3a71a8;
            margin-bottom: 90px;
            margin-top: 20px;
            cursor: pointer;
        }
    }
</style>

<template>
    <div>
        <AllHead @state="getState"></AllHead>
        <div class="g-content">
            <!--链接栏-->
            <div class="r-link cm-container">
                <a href="../home/index.html">首页</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a href="">在线报名</a>
            </div>

            <div class="f-form">
                <h3>报名表提交</h3>
                <p class="clearfix" v-for="(list,key) in formObj" v-if="key!='imgUrl'">
                    <span class="f-span">{{msgdata[key]}}</span><span>{{list}}：</span>
                </p>
                <div class="one-img clearfix">
                    <div><img :src='img' alt="" class="f-img" v-for="img in imglist"></div>
                    <span>照片上传：</span></div>
                 </div>

            <div class="f-msg"><h3>课程信息</h3>
                <p><span>课程名称：</span><span>{{courseName}}</span></p>
                <p><span>参加条件：</span><span>{{condition}}</span></p></div>
            <div class="f-mn"><p>报名费用&nbsp;<span>{{price}}</span>&nbsp;元</p></div>
            <!--<div class="f-payway"><h3>支付方式</h3>-->
                <!--<div><img src="./img/zfb.png" alt=""><span>支付宝支付</span></div>-->
            <!--</div>-->
            <div class="f-paybtn">
                <p>
                    <el-checkbox v-model="checkbox">我已阅读并同意<a>《宁波广播电视大学老年教育管理系统协议》</a></el-checkbox>
                </p>
                <button @click="payBtn">去支付</button>
            </div>
        </div>
        <McFoot></McFoot>
    </div>
</template>
<script>
  import AllHead from 'components/allHead';
  import McFoot from 'components/McFoot';
  import imgs from './img/tx.jpg';

  export default {

    data() {
      return {
        pxClazzPk:'',
        pxClazzApplyPk:'',
        courseName: '',
        condition: '',
        price: 0,
        checkbox: false,
        headState: false,
        imglist:[],
        msgdata:{},
        formObj:{}
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
        if(this.until.isLogin()){
          /*获取课程信息*/
          this.pxClazzPk = this.until.getQueryString('pxClazzPk');
          this.pxClazzApplyPk = this.until.getQueryString('pxClazzApplyPk');
          this.until.get(`/px/course/info/${this.pxClazzPk}`, {})
            .then(res => {
              this.courseName = res.data.nm;
              this.price = res.data.price;
              var str = '';
              var man = res.data.maleAgeNm;
              var woman = res.data.famaleAgeNm;
              if (man) {str += '男士年龄:' + man + '岁 '}
              if (woman) {str += '女士年龄:' + woman + '岁 '}
              if (!man && !woman) {str += '无年龄限制'}
              this.condition = str;
            })
          /*获取分类*/
          this.getmsgAll();
        }else{
          this.until.toLogin(this);
        }
    },
    methods: {
      async getmsgAll(){
        let result = await this.getList();
        result.reverse();
        for(let i=0;i<result.length;i++){
          await this.getListOne(result[i]);
        }
        console.log(this.formObj);
        await this.getData();
      },
      /*获取分类*/
      getList(){
        return new Promise((resolve,reject) =>{
          let course = new this.Query();
          course.buildWhereClause('pxClazzPk', this.pxClazzPk);
          let courseParam = course.getParam();
          this.until.get('/px/clazzApplyConf/list',courseParam)
            .then(res=>{
              if(res.status == 200){
                resolve(res.data.items);
              }
            })
        });
      },
      /*分类详情*/
      getListOne(item){
        return new Promise((resolve,reject) =>{
          this.until.get('/general/cat/getByCd', {cd:item.catCd})
            .then(res => {
              if (res.status == 200) {
                this.$set(this.formObj,res.data.arg1,res.data.nm);
                resolve();
              }
            });
        });
      },
      getData(){
        this.until.get(`/px/clazzApply/info/${this.pxClazzApplyPk}`,{})
          .then(res=>{
            if(res.status==200){
                this.msgdata = res.data;
              this.imglist = this.msgdata.imgUrl.split(',');
            }
          })
      },
      payBtn() {
        /*验证是否勾选*/
        if (!this.checkbox) {
          this.$message({type: 'warning', message: '请勾选已阅读并同意协议后，继续支付！'});
          return;
        }
      },
      getState(val) {
        this.headState = val;
      }
    },
    components: {
      AllHead, McFoot
    }
  }
</script>


