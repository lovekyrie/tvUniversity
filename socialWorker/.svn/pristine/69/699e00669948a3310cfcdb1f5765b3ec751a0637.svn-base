<template>
  <div class="center">
    <div class="swiper-wrap">
      <swiper></swiper>
    </div>
    <div class="news">
      <div class="new-title">
        <div>新闻动态</div>
        <div>更多新闻<i class="el-icon-arrow-right"></i></div>
      </div>
      <div class="new-list" v-for="(item, index) in newList" :key="index">
        <div>
          <img :src="item.src" alt="">
        </div>
        <div>
          <p>{{item.title}}</p>
          <p>{{item.content}}</p>
          <p>{{item.date}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from './swiper.vue'
import direction from '../img/direction_03.png'

export default {
  data(){
    return{
      newList:[
        {
          src:direction,
          title:'2017宁波广播电视大学继续教育学院招生指南',
          content:'继续教育学院报名时间',
          date:'2017年9月30日'
        },
        {
          src:direction,
          title:'2017宁波广播电视大学继续教育学院招生指南',
          content:'继续教育学院报名时间',
          date:'2017年9月30日'
        },
        {
          src:direction,
          title:'2017宁波广播电视大学继续教育学院招生指南',
          content:'继续教育学院报名时间',
          date:'2017年9月30日'
        },
        {
          src:direction,
          title:'2017宁波广播电视大学继续教育学院招生指南',
          content:'继续教育学院报名时间',
          date:'2017年9月30日'
        },
      ]
    }
  },
  methods:{

  },
  components:{
    swiper
  }
}
</script>

<style lang='less'>
.center{
  width: 1200px;
  margin: 0 auto;
  .swiper-wrap{
    padding: 30px 0;
  }
  .news{
    .new-title{
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      >div{
        flex: 0 0 auto;
        padding-bottom: 20px;
        &:nth-of-type(1){
          font-size: 18px;
          font-weight: bold;
          border-bottom: 3px solid #3a71a8;
        }
        &:nth-of-type(2){
          font-size: 16px;
          color: #afafaf;
        }
      }
    }
    .new-list{
      padding: 30px 5px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      >div{
        &:nth-of-type(1){
          width: 120px;
          img{
            max-width: 100%;
            max-height: 100%;
            height: auto;
            width: auto;
            vertical-align: middle;
          }
        }
        &:nth-of-type(2){
          margin-left: 2%;
          padding: 15px 0;
          flex :1;
          p{
            &:not(:nth-last-of-type(1)){
              margin-bottom: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
