<template>
  <div>
    <AllHead></AllHead>

    <div class="g-content" ref="size">

      <div class="crumb"><a href="../home/index.html">首页</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a href="./center.html">个人空间</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a>详情页面</a></div>

      <div class="detail">
        <h3>{{data.title}}</h3>
        <p class="msg-bar"><span>作者：{{data.autor}}</span><span>{{data.time}}</span><span>来源：{{data.source}}</span></p>
        <div class="c-img"><img src="img/temp.png" alt=""></div>
        <h3>{{data.title}}</h3>
        <p class="c-content">{{data.content}}</p></div>
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


    export default {

        data() {
            return {
              data:{
                title:'标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
                autor:'作者',
                time:'2017-11.14 15.30',
                source:'宁波',
                img:'',
                texttitle:'标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
                content:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
              }

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
</style>