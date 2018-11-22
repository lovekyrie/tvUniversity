<template>
    <div>
        <!--弹窗-->
        <div class="pop-class" @click="popState=false" v-show="popState">
            <div>
                <img src="img/success.png" alt="">
                <p>恭喜发布成功！</p>
            </div>
        </div>
        <AllHead></AllHead>

        <div class="g-content" ref="size">

            <div class="g-search">
                <div class="crumb"><a href="./index.html">首页</a><span>&nbsp;&gt;&nbsp;</span><a href="./index.html">当前活动</a><span>&nbsp;&gt;&nbsp;</span><a href="javascript:void(0)">活动详情</a>
                </div>

                <div class="content clearfix">

                    <div class="c-cnt clearfix">
                        <img src="img/item.jpg" alt="">
                        <div>
                            <h2>标题标题标题标题标题标题标题标题标题标题标题标题标题标题</h2>
                            <h3>主办方</h3>
                            <h3><span>123456</span>人参与</h3>
                            <p>时间：</p>
                            <p>来源：宁波电大</p>
                            <button class="fb-zp">发布作品</button>
                        </div>
                    </div>

                    <div class="c-jz" v-show="showWay" @click="showWay=false">
                        <h3 class="c-tit"><i></i><span>活动详情</span></h3>
                        <p class="f-sl">精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】</p>
                        <div>
                            <span>展开<svg class="icon" aria-hidden="true"><use xlink:href="#icon-sanjiaoxing-down"></use></svg></span>
                        </div>
                    </div>

                    <div class="c-jz" v-show="!showWay" @click="showWay=true">
                        <h3 class="c-tit"><i></i><span>活动详情</span></h3>
                        <p>精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】</p>
                        <div>
                            <span>收起<svg class="icon" aria-hidden="true"><use xlink:href="#icon-sanjiaoxing-up"></use></svg></span>
                        </div>
                    </div>

                    <div class="c-tp">
                        <h3 class="c-tit"><i></i><span>参赛作品</span></h3>
                        <div class="c-list clearfix"  v-for="item in 6">
                            <div>
                                <p>《出去走走》<br>戴上耳机<br>即使不播放音乐<br>也总有一种<br>与世隔绝的感觉</p>
                            </div>
                            <div>
                                <p>上传作者：</p>
                                <p>已投票数：</p>
                                <button @click.once="voteOcne">投ta一票</button>
                                <img src="img/kf.png" alt="">
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <div class="page">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="10"
                    layout=" prev, pager, next, total"
                    :total="100">
            </el-pagination>
            <span>共10页</span>
        </div>

        <McFoot></McFoot>

    </div>
</template>
<script>

  import Lib from 'assets/js/Lib';
  import AllHead from 'components/allHead';
  import McFoot from 'components/McFoot';


  export default {

    data() {
      return {
        popState:false,
        showWay:true,

        total:100,
        currentPage:1,

      }
    },
    mounted() {
    },
    methods: {
      /*弹窗延时*/
      timeClose(){
        this.popState =true;
        setTimeout((o)=>{
          this.popState = false;
        },2000);
      },
      /*投ta一票*/
      voteOcne(){

      },
      handleCurrentChange(val) {
        console.log(val)
//                this.axios.get(Lib.C.url_mc+'/mall/bss/news/FarmLogPage',{
//                    params:{
//                        pageNo:val,
//                        pageSize:1,
//                    }
//                })
//                    .then(res=>{
//                        this.items=res.data.data.items;
//                    }).catch(err=>{
//                    console.log(err);
//                });
      },


    },

    computed: {},


    components: {
      AllHead, McFoot
    },
  }
</script>

<style scoped lang="less">
    .size {
        h2{
            font-size: 34px !important;
        }
        h3 {
            font-size: 30px !important;
        }
        span {
            font-size: 30px !important;
        }
        input {
            font-size: 24px !important;
        }
        button {
            font-size: 30px !important;
        }
        a {
            font-size: 30px !important;
        }
        li{
            font-size: 28px !important;
        }
        p{
            font-size: 26px !important;
        }
    }
    /*弹窗*/
    .pop-class{
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, .6);
        >div{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 625px;
            height: 370px;
            background-color: #fff;
            border-radius: 10px;
            img{
                display: block;
                width: 105px;
                height: 105px;
                margin: 0 auto;
                vertical-align: bottom;
                margin-top: 90px;
            }
            p{
                margin-top: 50px;
                text-align: center;
                font-size: 30px;
            }
        }
    }

    .content{
        border-top: 1px solid #e1e1e1;
        margin-bottom: 150px;
        .c-cnt{
            margin: 30px 0;
            img{
                float: left;
                width: 445px;
                height: 445px;
                border: 1px solid #e1e1e1;
                margin-right: 55px;
            }
            >div{
                width: 698px;
                float: left;
                h2{
                    font-size: 30px;
                    line-height: 1.5;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    display:-webkit-box;
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:2;
                }
                h3{
                    margin-top: 10px;
                    font-size: 24px;
                    line-height: 1.5;
                    span{
                        color: red;
                    }
                }
                >p{
                    color: #b6b6b6;
                    line-height: 1.5;
                    &:nth-of-type(1){
                        margin-top: 110px;
                    }
                }
               button{
                   margin-top: 30px;
                   width: 135px;
                   height: 44px;
                   color: #fff;
                   background-color: #fa6441;
                   border: 0;
                   border-radius: 5px;
                   font-size: 20px;
                   cursor: pointer;
                   &.fb-zp{
                       background-color: #3a71a8;
                   }
               }
            }
        }
        .c-jz{
            .c-tit{
                font-size: 20px;
                line-height:65px;
                border-bottom: 1px solid #e1e1e1;
                i{
                    display: inline-block;
                    width: 5px;
                    height: 22px;
                    background-color: #000;
                    vertical-align: -6%;
                    margin-right: 20px;
                }
            }
            p{
                margin: 20px 0;
                line-height: 1.5;
                color: #666;
                &.f-sl{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            div{
                text-align: center;
                margin-top: 60px;
                span{
                   color: #999;
                    cursor: pointer;
                    svg{
                        color: #999;
                        margin-left: 5px;
                    }
                }
            }
        }

        .c-tp{
            .c-tit{
                font-size: 20px;
                line-height:65px;
                border-bottom: 1px solid #e1e1e1;
                i{
                    display: inline-block;
                    width: 5px;
                    height: 22px;
                    background-color: #000;
                    vertical-align: -6%;
                    margin-right: 20px;
                }
            }
            .c-list{
                float: left;
                margin-top: 30px;
                margin-right: 30px;
                &:nth-of-type(3n){
                    margin-right: 0;
                }
                >div{
                    width: 364px;
                    border: 1px solid #e7e7e7;
                    &:nth-of-type(1){
                        height: 364px;
                        background-color: #f9f9f9;
                        padding: 85px 75px;
                        >p{
                            height: 100%;
                            line-height: 1.5;
                            color:#787878;
                            font-size: 26px;
                        }
                    }
                    &:nth-of-type(2){
                        position: relative;
                        padding: 20px;
                        height: 200px;
                        border-top:0;
                        p{
                            margin-top: 10px;
                            font-size: 24px;
                            line-height:1.5;
                        }
                        button{
                            position: absolute;
                            bottom: 20px;
                            left: 20px;
                            width: 158px;
                            height: 48px;
                            background-color: #3a71a8;
                            border: 0;
                            border-radius: 5px;
                            font-size: 24px;
                            color: #fff;
                            cursor: pointer;
                        }
                        img{
                            position: absolute;
                            bottom: 24px;
                            right: 20px;
                            width: 33px;
                            height: 38px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>