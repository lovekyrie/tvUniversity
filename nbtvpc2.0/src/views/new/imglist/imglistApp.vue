<template>
    <div id="container">
        <AllHead></AllHead>
        <div class="g-content g-content-footer" ref="size">
            <div class="crumb"><a href="../home/index.html">首页</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a
                    href="./list.html">新闻动态</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a>资讯详情</a>
            </div>
            <div class="detail">
                <h3>{{infoMsg.nm}}</h3>
                <p class="msg-bar">
                    <span>作者：{{infoMsg.author}}</span><span>{{infoMsg.crtTm}}</span><span>来源：{{infoMsg.rmks}}</span></p>
                <div class="c-img"><img :src='infoMsg.imgUrl'></div>
                <div class="c-content" v-html="infoMsg.cont"></div>
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
        pk: '',
        infoMsg: {},
      }
    },
    mounted() {
      this.pk = this.until.getQueryString('id');
      this.getMsg();
    },
    methods: {
      getMsg() {
        this.until.get('/sys/news/info/' + this.pk, {})
          .then(res => {
            if (res.status == 200) {
              this.infoMsg = res.data;
//              $('.c-content').text(res.data.cont);
            }
          })
      }
    },
    computed: {},
    components: {
      AllHead, McFoot
    },
  }
</script>


<style lang="less">
    .size {
        h3 {
            font-size: 30px !important;
        }
        span {
            font-size: 26px !important;
        }
        a {
            font-size: 26px !important;
        }
        li {
            font-size: 26px !important;
        }
        p {
            font-size: 26px !important;
        }
    }

</style>