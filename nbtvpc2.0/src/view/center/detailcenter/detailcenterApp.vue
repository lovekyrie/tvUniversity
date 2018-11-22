<style lang="less">
    .c-a-c{
        color: #999;
        cursor: auto;
    }
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
        li {
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
    .page {
        padding-left: 30px;
        margin: 30px 0 100px 0;

        span {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            vertical-align: middle;
        }
        .el-pagination {
            display: inline-block;
        }
        .el-pager li {
            font-size: 20px;
            height: 40px;
            width: 40px;
            line-height: 40px;
        }
        .el-pager li.btn-quicknext, .el-pager li.btn-quickprev {
            line-height: 40px;
        }
        .el-pagination button, .el-pagination span {
            height: 40px;
            line-height: 40px;
            font-size: 20px;
        }
        .el-pagination__editor {
            height: 40px;
            width: 40px;
            line-height: 40px;
            font-size: 20px;
        }
        .el-icon-arrow-left:before {
            content: '上一页';
            font-size: 20px;
        }
        .el-icon-arrow-right:before {
            content: '下一页';
            font-size: 20px;
        }
    }
</style>
<style lang="less" scoped>
    .dc-link{
        color: #999;
        font-size: 22px;
        height: 85px;
        line-height:85px;
        border-bottom:1px solid #e1e1e1;
        >a{
            color: #999;
        }
        >p{
            display: inline-block;
            width: 600px;
            color: #999;
            font-size: 22px;
        }
    }
    .dc-cnt{
        padding: 35px 0 100px 0;
        ul{
            float: left;
            width: 140px;
            height: 660px;
            background-color: #f6f6f6;
            padding: 0 30px;
            overflow: hidden;
            li{
                text-align: center;
                font-size: 24px;
                height: 45px;
                line-height:45px;
                margin-top: 40px;
                color: #666;
                cursor: pointer;
            }
            .li-c{
                background-color: #3a71a8;
                a{
                    color: #fff;
                }
            }
        }
        >div{
            float: right;
            width: 980px;
        }
    }
</style>

<template>
    <div>
        <AllHead @state="getState"></AllHead>

        <div class="g-content" ref="size">
            <!--链接栏-->
            <div class="dc-link"><a href="../home/index.html">首页</a>&nbsp;&gt;&nbsp;<router-link to="/mycourse/course" @click.native="tabVal='/mycourse/course'">个人空间</router-link><p ref="routerlink"></p></div>
            <!--内容-->
            <div class="dc-cnt clearfix">
                <!--tab栏-->
                <ul>
                    <li :class="[tabVal=='/mycourse/course'?'li-c':'']" @click="tabVal='/mycourse/course'"><router-link to="/mycourse/course">我的课程</router-link></li>
                    <li :class="[tabVal=='/myclass'?'li-c':'']" @click="tabVal='/myclass'"><router-link to="/myclass">我的班级</router-link></li>
                    <li :class="[tabVal=='/certificate'?'li-c':'']" @click="tabVal='/certificate'"><router-link to="/certificate">我的证书</router-link></li>
                    <li :class="[tabVal=='/sign'?'li-c':'']" @click="tabVal='/sign'"><router-link to="/sign">签到记录</router-link></li>
                    <li :class="[tabVal=='/mymsgcenter/msgcenter'?'li-c':'']" @click="tabVal='/mymsgcenter/msgcenter'"><router-link to="/mymsgcenter/msgcenter">消息中心</router-link></li>
                    <li :class="[tabVal=='/personal'?'li-c':'']" @click="tabVal='/personal'"><router-link to="/personal">个人资料</router-link></li>
                    <li :class="[tabVal=='/myclub/club'?'li-c':'']" @click="tabVal='/myclub/club'"><router-link to="/myclub/club">我的团</router-link></li>
                </ul>
                <!--路由出口-->
                <div>
                    <router-view></router-view>
                </div>
            </div>
        </div>

        <McFoot></McFoot>

    </div>
</template>
<script>
  /*头部组件*/
  import AllHead from 'components/allHead';
  /*底部组件*/
  import McFoot from 'components/McFoot';

  export default {
    data() {
      return {
        state:false,
        tabVal:'/mycourse/course',
        tabArr: {
          '/mycourse/course': {name: '我的课程'},
          '/mycourse/coursecnt': {name: '课程详情'},
          '/myclass': {name: '我的班级'},
          '/certificate': {name: '我的证书'},
          '/sign': {name: '签到记录'},
          '/mymsgcenter/msgcenter': {name: '消息中心'},
          '/mymsgcenter/msgcentercnt': {name: '消息详情'},
          '/personal': {name: '个人资料'},
          '/myclub/club': {name: '我的团'},
          '/myclub/clubcnt': {name: '团详情'}
        },
      }
    },
    watch:{
      $route(cur){
        this.router(cur);
      },
        state(val){
          if(val){
            $('.el-select-dropdown__item').css({'font-size':'26px'});
          }else{
            $('.el-select-dropdown__item').css({'font-size':'2px'});
          }
        }
    },
    mounted(){
      this.router(this.$route);
      this.tabVal=this.$route.path;
    },
    methods: {
        getState( val){
            this.state = val;
        },
        router(cur){
          var father = this.$refs.routerlink;
          father.innerHTML='';
          var path = cur.path;
          var cut = path.indexOf('cnt');
          if(cut>-1){
            father.innerHTML+='\&nbsp;\&nbsp;\&gt;\&nbsp;\&nbsp;';
            var twoel = path.slice(0,cut);
            var el = document.createElement('a');
            el.innerHTML= this.tabArr[twoel].name;
            el.setAttribute('href','#'+twoel);
            el.setAttribute('class','c-a-c');
            father.appendChild(el);
          }
          father.innerHTML+='\&nbsp;\&nbsp;\&gt;\&nbsp;\&nbsp;';
          var el = document.createElement('a');
          el.innerHTML= this.tabArr[path].name;
          el.setAttribute('href','#'+path);
          el.setAttribute('class','c-a-c');
          father.appendChild(el);
        }
    },
    components: {
      AllHead, McFoot,
    },
  }
</script>
