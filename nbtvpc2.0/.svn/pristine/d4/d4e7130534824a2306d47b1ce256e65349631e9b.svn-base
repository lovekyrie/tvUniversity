
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
      font-size: 30px !important;
    }
  }
  @bdColor: #e1e1e1;
  /*公共样式*/
  .cm-container{
    width: 1200px;
    margin: 0 auto;

  }
  /*链接栏*/
  .r-link{
    height: 85px;
    line-height: 85px;
    color: #999;
    font-size: 20px;
    border-bottom: 1px solid @bdColor;
    a{
      color: #999;
      &:nth-last-of-type(1){
        cursor: auto;
      }
    }
    span{
      margin: 0 10px;
    }
  }
  /*内容*/
  .r-content{
    min-height: 620px;
    >div{
      width: 150px;
      margin: 0 auto;
      margin-top: 130px;
      img{
        display: block;
        margin: 0 auto;
        width: 105px;
        height: 104px;
        vertical-align: bottom;
      }
      p{
        margin-top: 30px;
        font-size: 28px;
        text-align: center;
        text-indent: 5px;
      }
    }
  }
</style>

<template>
  <div>
    <AllHead></AllHead>

    <div class="g-content">
      <!--链接栏-->
      <div class="r-link cm-container">
          <a href="../home/index.html">首页</a><span>&gt;</span><a>在线报名</a>
      </div>

      <!--内容-->
      <div class="r-content cm-container">
        <div>
          <img src="./img/success.png" alt="">
          <p>付款成功</p>
        </div>
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

            }
        },
        mounted(){
          this.timeout();
        },
        methods: {
          timeout(){
            setTimeout(o=>{
              location.href='./select.html';
            },3000);
          }
        },

        components: {
            AllHead,McFoot
        }

    }
</script>


