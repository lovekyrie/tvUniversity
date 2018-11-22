
<style scoped lang="less">
  @bdColor: #e1e1e1;
  /*公共样式*/
  .cm-container{
    width: 1200px;
    margin: 0 auto;
  }
  /*tab栏*/
  .c-tab{
    border-bottom: 1px solid #ddd;
    >div{
      ul{
        li{
          float: left;
          width: 140px;
          height: 80px;
          line-height:80px;
          text-align: center;
          margin: 0 40px;
          a{
            display: inline-block;
            height: 80px;
            width: 100%;
            color: #999;
            font-size: 18px;
            box-sizing: border-box;
            &.tab-xz{
              color: #3a71a8;
              border-bottom: 3px solid #3a71a8;
            }
          }

        }
      }
    }
  }

  /*内容*/
  .r-content{
    min-height: 620px;
  }
</style>

<template>
  <div>
    <AllHead @state="getState"></AllHead>

    <div class="g-content">
      <!--tab栏-->
      <div class="c-tab">
        <div class="cm-container">
          <ul class="clearfix">
            <li @click="tabState=0"><router-link to="/recommend" :class="tabState==0?'tab-xz':''">推荐课程</router-link></li>
            <li @click="tabState=1"><router-link to="/recent" :class="tabState==1?'tab-xz':''">近期课程</router-link></li>
            <li @click="tabState=2"><router-link to="/hot" :class="tabState==2?'tab-xz':''">热门课程</router-link></li>
            <li @click="tabState=3"><router-link to="/star" :class="tabState==3?'tab-xz':''">学习之星</router-link></li>
          </ul>
        </div>
      </div>

      <!--内容-->
      <div class="r-content cm-container">
        <router-view></router-view>
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
              tabState:0,
              state:false,
            }
        },

        methods: {
          getState(val){
            this.state=val;
          },
        },

      watch:{
        state(val){
          let input = $('.el-select-dropdown__item');
          let inputsize = $('.el-select input');
          let size = $('.searchCnt input');
          if(val){
            input.css({'font-size':'24px','height':'50px'});
            inputsize.css({'font-size':'24px'});
            size.css({'font-size':'24px'});
          }else{
            input.css({'font-size':'20px','height':'45px'});
            inputsize.css({'font-size':'20px'});
            size.css({'font-size':'20px'});
          }
        }
      },

        components: {
            AllHead,McFoot
        }

    }
</script>


