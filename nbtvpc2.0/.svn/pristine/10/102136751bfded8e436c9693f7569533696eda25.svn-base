<template>
    <div>
        <!--弹窗-->
        <div class="pop-class" @click="popState=false" v-show="popState">
            <div>
                <img src="./img/success.png" alt="">
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
                        <img src="./img/item.jpg" alt="">
                        <div>
                            <h2>标题标题标题标题标题标题标题标题标题标题标题标题标题标题</h2>
                            <h3>主办方</h3>
                            <h3><span>123456</span>人参与</h3>
                            <p>时间：</p>
                            <p>来源：宁波电大</p>
                            <a href="">返回活动 ></a>
                        </div>
                    </div>

                    <div class="c-fwb">
                        <h4>标题</h4>
                        <input type="text" placeholder="请输入标题">
                        <h4>内容</h4>
                        <div class="fwb-cnt clearfix">
                            <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
                        </div>
                    </div>

                    <div class="f-btn clearfix"><button>取消</button><button>发布</button></div>
                </div>
            </div>

        </div>

        <McFoot></McFoot>

    </div>
</template>
<script>

  import Lib from 'assets/js/Lib';
  /*头部组件*/
  import AllHead from 'components/allHead';
  /*底部组件*/
  import McFoot from 'components/McFoot';
  import UE from 'components/ue/ue.vue';


  export default {

    data() {
      return {
        popState:false,

        defaultMsg: '',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        },
        ue1: "ue1", // 不同编辑器必须不同的id

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

      getUEContent() {
        let content = this.$refs.ue.getUEContent(); // 调用子组件方法
        console.log(this.$refs.ue);
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        });
        console.log(content)
      },
      getUEContentTxt() {
        let content = this.$refs.ue.getUEContentTxt(); // 调用子组件方法
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        });
        console.log(content)
      },
      clearcnt(){
        this.$refs.ue.editor.execCommand('cleardoc');
      }
    },

    computed: {},


    components: {
      AllHead, McFoot,UE
    },
  }
</script>

<style>
    .edui-default .edui-editor-bottomContainer{
        display: none !important;
    }

</style>
<style scoped lang="less">
    .size {
        h2{
            font-size: 34px !important;
        }
        h3 {
            font-size: 30px !important;
        }
        h4 {
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
        margin-bottom: 100px;
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
                >a{
                    display: inline-block;
                    margin-top: 40px;
                    color: #3a71a8;
                    font-size: 20px;
                }
            }
        }
        .c-fwb{
            border-top: 1px solid #e1e1e1;
            width: 800px;
            margin: 0 auto;
            h4{
                font-size: 20px;
                margin: 20px 0;
            }
            input{
                width: 100%;
                height: 38px;
                border: 1px solid #d9d9d9;
                text-indent: 20px;
            }
            .fwb-cnt{

            }
        }
        .f-btn{
            width: 800px;
            margin: 0 auto;
            button{
                float: right;
                width: 165px;
                height: 40px;
                font-size: 18px;
                border:0;
                margin-top: 50px;
                cursor: pointer;
                &:nth-of-type(1){
                    border: 1px solid #d1d1d1;
                    background-color: #fff;
                }
                &:nth-of-type(2){
                    color: #fff;
                    background-color: #259b24;
                    margin-right: 40px;
                }
            }
        }

    }
</style>