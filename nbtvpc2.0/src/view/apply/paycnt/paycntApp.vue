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
            text-align: center;
            margin-top: 60px;
            margin-bottom: 20px;
            font-size: 28px;
        }
        .onelist {
            padding-right: 380px;
            font-size: 22px;
            margin-top: 30px;
            text-align: right;
            > span {
                line-height: 55px;
                &.list-cnt{
                    display: inline-block;
                    width: 270px;
                    height: 55px;
                    text-align: left;
                }
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
        padding-top: 30px;
        text-align: center;
        svg {
            margin-right: 5px;
        }
        a {
            display: inline-block;
            width: auto;
        }
        button {
            display: inline-block;
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
    .pay-list{
        background-color: #f5f5f5;
        padding: 50px;
        padding-left: 100px;
        margin-bottom: 20px;
        >h2{
            font-size: 26px;
            line-height: 1.5;
            margin-bottom: 30px;
        }
        .list-cnt{
            width: 600px;
            background-color: #fff;
            border: 1px solid #ccc;
            padding: 20px;
            p{
                line-height:1.5;
            }

        }
    }
</style>

<template>
    <div>
        <AllHead @state="getState"></AllHead>
        <div class="g-content">
            <!--链接栏-->
            <div class="r-link cm-container">
                <a href="../home/index.html">首页</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a>在线缴费</a>
            </div>

            <div class="f-form">
                <h3>在线缴费</h3>
                <div class="onelist clearfix">
                    <span>学生姓名：</span><span class="list-cnt">312312313213123</span>
                </div>
                <div class="onelist clearfix">
                   <span>学员身份证号码：</span><span class="list-cnt">312312313213123</span>
                </div>
                <div class="onelist clearfix">
                   <span>学员学号：</span><span class="list-cnt">312312313213123</span>
                </div>
                <div class="onelist clearfix">
                    <span>联系电话：</span><span class="list-cnt">312312313213123</span>
                </div>
                <div class="pay-list">
                    <h2>课程信息</h2>
                    <div class="list-cnt">
                        <p>课程名称： 中青</p>
                        <p>参加条件：无限制</p>
                        <h3>课程缴款码：54643654343524354</h3>
                    </div>
                </div>
            </div>
            <div class="f-paybtn">
                <button @click="payBtn">提交</button>
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
        headState: false,
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
      if (this.until.isLogin()) {

      } else {
        this.until.toLogin(this);
      }
    },
    methods: {
      getState(val) {
        this.headState = val;
      },
      payBtn() {
      }
    },
    components: {
      AllHead, McFoot
    }
  }
</script>


