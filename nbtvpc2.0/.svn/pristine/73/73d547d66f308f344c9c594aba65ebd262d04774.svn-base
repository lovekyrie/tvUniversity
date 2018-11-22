<style lang="less">
    .el-select>.el-input{
        width: 165px;
    }
    .searchCnt{
        display: inline-block;
        width: auto;
        .el-input__inner{
            width: 310px;
        }
        input{
            font-size: 20px;
        }
    }
    .el-select,.el-input{
        float: left;
    }
    .el-select{
        margin-right: 20px;
        input{
            font-size: 20px;
        }
    }
    .el-input__inner{
        height: 45px;
    }
    .el-select-dropdown__item{
        font-size: 20px;
        height: 45px;
    }
</style>
<template>
    <div class="g-content">
        <!--链接栏-->
        <div class="r-link cm-container">
            <a href="../home/index.html">首页</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a href="">在线学习</a>
        </div>
        <!--内容-->
        <div class="r-option">
            <div class="f-title clearfix">
                <div><span>排名</span></div>
                <div><span>用户名</span></div>
                <div><span>学习小时</span></div>
            </div>
            <div class="f-cnt clearfix" v-for="(item,index) in list">
                <div><span>{{index+1}}</span></div>
                <div><span>{{item.name}}</span></div>
                <div><span>{{item.time}}小时</span></div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data(){
      return{
            list:[
              {name:'老张',time:'100'},
              {name:'老张',time:'100'},
              {name:'老张啊',time:'80'},
              {name:'老张',time:'100'},
              {name:'老张',time:'100'},
              {name:'老张',time:'100'},
              {name:'老张',time:'100'},
              {name:'老张',time:'100'},
              {name:'老张',time:'100'},
            ]
      }
    },
    methods:{

    }
  }
</script>
<style lang="less" scoped>
    .size {
        h2{
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
        li{
            font-size: 26px !important;
        }
        p{
            font-size: 22px !important;
        }
    }
    @bdColor: #e1e1e1;
    /*公共样式*/
    .cm-container {
        width: 1200px;
        margin: 0 auto;
    }
    /*链接栏*/
    .r-link {
        padding: 30px 0;
        color: #999;
        font-size: 20px;
        border-bottom: 1px solid @bdColor;
        a {
            display: inline-block !important;
            width: auto !important;
            color: #999;
        }
        span {
            vertical-align: top;
        }
    }
    /*内容*/
    .r-option{
        min-height: 600px;
        padding-bottom: 100px;
        .f-title,.f-cnt{
           >div{
               width: 33.3%;
               float: left;
               text-align: center;
               height: 80px;
               line-height:80px;
               color: #999;
               font-size: 22px;
           }
        }
        .f-cnt{
            >div{
                font-size: 22px;
                color: black;
                text-align: left;
                &:nth-of-type(1){
                    text-align:center;
                }
                &:nth-of-type(2){
                    text-indent: 165px;
                }
                &:nth-of-type(3){
                    text-indent: 160px;
                }
            }
            &:nth-of-type(2){
                div:nth-of-type(1){
                    color: red;
                }
            }
            &:nth-of-type(3){
                div:nth-of-type(1){
                    color: yellow;
                }
            }
            &:nth-of-type(4){
                div:nth-of-type(1){
                    color: green;
                }
            }
        }
    }

</style>