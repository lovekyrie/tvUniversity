<template>
  <div>
    <AllHead></AllHead>

    <div class="g-content" ref="size">

      <div class="crumb"><a href="./index.html">首页</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a href="./index.html">电视大学</a><span>&nbsp;&gt;&nbsp;</span><a href="./file.html">政治文件</a><span>&nbsp;&gt;&nbsp;</span><a href="javascript:void(0)">甬电老大</a></div>

      <div class="detail">
        <h2>消息名称</h2>
        <p><span>更新时间：</span><span>作者：</span><span>来源：</span><span>点击量：</span></p>
        <img src="./img/file.png" alt="">
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
            AllHead,McFoot
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