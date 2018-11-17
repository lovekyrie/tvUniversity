<template>
  <div class="member-c">
    <div class="head-img">
      <div>
        <img :src="nohead" alt="默认头像">
      </div>
      <div>
        <div>{{name}}</div>
        <div>{{linkedPhone}}</div>
        <div @click="toChangeInfo">
          修改个人信息
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="link-info">
      <div class="link-item" v-for="(item, index) in infoList" :key="index">
        <div>
          <img :src="item.src" alt="">
        </div>
        <div>
          <div>{{item.title}}</div>
          <div @click="toLink(item.link)">
            {{item.content}}
            <i class="el-icon-arrow-right"></i> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nohead from '../img/noHead.png'
import project from '../img/project.png'
import msg from '../img/msg.png'
import certificate from '../img/certificate.png'
import signlog from '../img/signlog.png'

export default {
  data(){
    return {
      name:'麻花',
      linkedPhone:'13500009999',
      nohead,
      project,
      certificate,
      signlog,
      msg,
      infoList:[
        {
          src:project,
          title:'我的项目',
          content:'查看班级详情',
          link:'project'
        },
        {
          src:signlog,
          title:'签到记录',
          content:'查看更多签到',
          link:'singlog'
        },
        {
          src:certificate,
          title:'我的证书',
          content:'查看获得证书',
          link:'certificate'
        },
        {
          src:msg,
          title:'消息中心',
          content:'查看更多消息',
          link:'msg'
        },
      ]
    }
  },
  methods:{
    toLink(link){
      this.$router.push(link)
    },
    toChangeInfo(){
      this.$router.push('info')
    }
  }
}
</script>

<style lang='less'>
  .head-img{
    display: flex;
    flex-flow: row nowrap;
    margin: 0 60px;
    padding: 50px 0 75px;
    border-bottom: 1px solid #e1e1e1;
    >div{
      &:nth-of-type(1){
        width: 140px;
        height: 140px;
        img{
          width: auto;
          height: auto;
          max-height: 100%;
          max-width: 100%;
          vertical-align: middle;
        }
      }
      &:nth-of-type(2){
        margin-left: 3%;
        flex:1;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        >div{
          flex:1 0 100%;
          font-size: 16px;
          &:nth-last-of-type(1){
            font-size: 18px;
            color: #0d55d2;
          }
        }
      }
    }
  }
  .link-info{
    margin: 0 60px;
    padding: 55px 0;
    display: flex;
    flex-flow: row wrap;
    .link-item{
      box-sizing: border-box;
      padding: 0 45px;
      flex: 1 0 50%;
      display: flex;
      flex-flow: row nowrap;
      margin-bottom: 40px;
      >div{
        &:nth-of-type(1){
          width: 70px;
          height: 70px;
          img{
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
            vertical-align: middle;
          }
        }
        &:nth-of-type(2){
          margin-left: 3%;
          flex: 1;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          >div{
            flex:1 0 100%;
            &:nth-of-type(1){
              font-size: 18px;
            }
          }
        }
      }
    }
  }
</style>
