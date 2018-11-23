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
</style>

<template>
    <div id="container">
        <ageHead @state="getState"></ageHead>
        <div class="g-content g-content-footer">
            <!--链接栏-->
            <div class="r-link cm-container">
                <!--<a href="../home/index.html">首页</a>-->
                <a href="http://ln.nbsqjy.com/">首页</a>
                <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a>在线缴费</a>
            </div>

            <div class="f-form">
                <h3>在线缴费</h3>
                <div class="onelist clearfix">
                    <input type="text" placeholder="单行输入" v-model="idCard" @keyup.enter="payBtn"><span>学员身份证号码：</span>
                </div>
            </div>
            <div class="f-paybtn">
                <button @click="payBtn">提交</button>
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
        idCard:''
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
      if (this.until.browser.versions.mobile) {
        alert('该页面不支持移动端，请登录微信端');
      }
    },
    methods: {
      getState(val) {
        this.headState = val;
      },
      payBtn() {
        location.href = './paycnt.html?id='+this.idCard.toUpperCase();
      }
    },
    components: {
      ageHead, ageFoot
    }
  }
</script>


