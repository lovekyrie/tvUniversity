<template>
  <div class="swipper">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in swipperList" :key="item.ID">
          <div>
            <img :src="item.swipper" alt="">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
import swipper from "../img/1.jpg";

export default {
  data(){
    return {
       swipperList: [
        { ID: 1, swipper },
        { ID: 2, swipper },
        { ID: 3, swipper },
        { ID: 4, swipper }
      ],
    }
  }
}
</script>

<style lang='less'>
.swipper {
      width: 100%;
      height: 310px;
      margin: 0 auto;
      .el-carousel__container {
        height: 310px;
        background-color: #fff;
        .el-carousel__item {
          height: 310px;
          display: -webkit-flex;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          > div {
            width: 100%;
            img {
              width: auto;
              height: auto;
              max-width: 100%;
              max-height: 100%;
              vertical-align: middle;
            }
          }
        }
      }
    }
</style>
