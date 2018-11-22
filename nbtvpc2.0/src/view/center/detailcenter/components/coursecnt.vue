<template>
    <div id="course">
        <h3>{{infoData.nm}}</h3>
        <p class="cnt-content">{{infoData.rmks}}</p>
        <div class="cnt-img"><img :src="infoData.imgUrl" alt=""></div>
        <p v-for="item in placeData" class="c-place">时间：{{item.weekNm}}&nbsp;{{item.periNm}} 地点：{{item.roomNm}}</p>
        <div class="teach-info clearfix">
            <div>
                <p>任课老师：{{teachData.nm}}</p>
                <img :src="teachData.profImgUrl">
                <p>教师介绍：{{teachData.rmks}}</p>
            </div>
            <div>
                <p>班主任：{{headteachData.nm}}</p>
                <img :src="headteachData.profImgUrl">
                <p>教师介绍：{{headteachData.rmks}}</p>
            </div>
        </div>
        <p class="cnt-time clearfix"><span>{{infoData.crtTm|formdata}}</span></p>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        infoData:{},
        placeData:[],
        teachData:{},
        headteachData:{},
      }
    },
    mounted(){
      if (this.until.isLogin()) {
        this.coursePk = this.$route.query.coursePk;
        this.pxClazzPk = this.$route.query.pxClazzPk;
        this.teacPk = this.$route.query.teacPk;
        this.headTeacPk = this.$route.query.headTeacPk;
        this.until.get('/px/course/info/'+this.coursePk,{})
          .then(res=>{
            if(res.status = 200){
              this.infoData = res.data;
              this.getClassinfo();
              this.getTeachInfo();
              this.getHeadTeachInfo();
            }
          });
      } else {
        this.until.toLogin(this);
      }
    },
    methods: {
      getClassinfo(){
        let query = new this.Query();
        query.buildWhereClause('clazzPk',this.pxClazzPk);
        let param = query.getParam();
        this.until.get('/px/clazzLesson/list/',param)
          .then(res=>{
            if(res.status == 200){
                this.placeData = res.data.items;
            }
          });
      },
      /*任课老师信息*/
        getTeachInfo(){
          this.until.get('/px/teac/info/'+this.headTeacPk,{})
            .then(res=>{
                if(res.status == 200){
                    this.headteachData = res.data;
                }
            });
        },
        /*班主任信息*/
        getHeadTeachInfo(){
          this.until.get('/px/teac/info/'+this.teacPk,{})
            .then(res=>{
              if(res.status == 200){
                this.teachData = res.data;
              }
            });
        }
    },
    filters:{
      formdata(val){
        let time = new Date(val);
        let str = '';
        str += time.getFullYear()+'年';
        str += time.getMonth()+1+'月';
        str += time.getDate()+'日';
        return str;
      }
    }
  }
</script>

<style lang="less" scoped>
    #course {
        width: 920px;
        background-color: #f6f6f6;
        padding: 30px;
        h3{
            font-size: 26px;
            text-align: center;
            margin: 20px 0;
        }
        .cnt-content{
            margin: 30px 0;
            line-height: 1.5;
            font-size: 22px;
            color: #666;
            text-indent: 25px;
        }
        .cnt-img{
            text-align: center;
            max-width: 100%;
            margin-bottom: 30px;
        }
        .cnt-time{
            margin: 30px 30px 40px 0;
            span{
                float: right;
                color: #b7b7b7;
            }
        }
    }
    .teach-info{
        >div{
            margin: 30px 0;
            box-sizing: border-box;
            float: left;
            width: 50%;
            padding-left: 100px;
        }
        img{
            display: block;
            width: 200px !important;
            height: 250px !important;
            vertical-align: bottom;
            margin: 10px 0;
            border: 2px solid #e1e1e1;
        }
    }
    .c-place{
        text-indent: 100px;
        line-height:1.5;
    }
</style>