<template>
  <div class="cretificate">
    <div class="creti-item" v-for="(item, index) in list" :key="index">
      <div>
        <img :src="mycertificate" alt="">
      </div>
      <div>{{item.name}}</div>
    </div>
  </div>
</template>

<script>
import mycertificate from '../img/mycertificate_03.png'

export default {
  data(){
    return{
      mycertificate,
      list:[
        {
          name:'证书名称'
        },
        {
          name:'证书名称'
        },
        {
          name:'证书名称'
        },
        {
          name:'证书名称'
        },
        {
          name:'证书名称'
        },
        {
          name:'证书名称'
        },
      ]
    }
  }
}
</script>

<style lang='less'>
.cretificate{
  padding: 30px 0;
  display: flex;
  flex-flow: row wrap;
  >.creti-item{
    flex: 1 0 30%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 30px;
    >div{
      &:nth-of-type(2){
        margin-top: 20px;
      }
    }
  }  
}
</style>
