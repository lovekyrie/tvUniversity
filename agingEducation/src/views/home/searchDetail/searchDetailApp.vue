<template>
  <div id="container">
    <ageHead></ageHead>

    <div class="g-content  g-content-footer" ref="size">

      <div class="crumb"><a href="./index.html">首页</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a href="./index.html">实体办学</a><span>&nbsp;&gt;&nbsp;</span><a href="./search.html">校园动态</a><span>&nbsp;&gt;&nbsp;</span><a href="javascript:void(0)">资讯详情</a></div>

      <div class="detail">
        <h2>消息名称</h2>
        <h3>2017年9月30日 12:00</h3>
        <p>消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称</p>
        <img src="img/detail.jpg" alt="">
        <h2>标题</h2>
        <p>消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称消息名称</p>
      </div>
    </div>

    <ageFoot></ageFoot>

  </div>
</template>
<script>

    import Lib from 'assets/js/Lib';
    /*头部组件*/
    import ageHead from 'components/ageHead';

    /*底部组件*/
    import ageFoot from 'components/ageFoot';


    export default {

        data() {
            return {


            }
        },
        //相关操作事件
        methods: {


        },

        computed: {


        },

        mounted () {

            console.log(Lib.M.getUrlQuery('id',Lib.C.url_host))
        },
        components: {
            ageHead,ageFoot
        },
    }
</script>



<style scoped lang="less">

  .size {
    h2{
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
    li{
      font-size: 26px !important;
    }
    p{
      font-size: 26px !important;
    }
  }
</style>