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
                <div class="crumb"><a href="./index.html">首页</a><span>&nbsp;&gt;&nbsp;</span><a
                        href="./index.html">实体办学</a><span>&nbsp;&gt;&nbsp;</span><a href="./activity.html">精彩活动</a><span>&nbsp;&gt;&nbsp;</span><a href="javascript:void(0)">活动详情</a>
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
                            <button v-if="typeState">我要参与</button>
                            <button class="fb-zp" v-show="!typeState">发布作品</button>
                        </div>
                    </div>

                    <div class="c-jz">
                        <h3><i></i><span>活动详情</span></h3>
                        <p>精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】精彩团队【团】</p>
                        <img src="./img/sm.png" alt="">
                    </div>

                </div>
            </div>

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
        typeState:true,
        popState:false,

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
            font-size: 32px !important;
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
        li{
            font-size: 26px !important;
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
            h3{
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
            }
            img{
                display: block;
                margin: 0 auto;
                vertical-align: bottom;
            }
        }

    }
</style>