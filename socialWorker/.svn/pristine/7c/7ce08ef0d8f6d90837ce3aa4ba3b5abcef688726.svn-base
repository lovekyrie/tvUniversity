<template>
    <div id="footer">
        <div class="content">
          <div>
            <p>联系方式：0516-88880000</p>
            <p>时间：周一至周五 8:30-11:30</p>
            <p>宁波市鄞州区天一路</p>
          </div>
         <div>
           <div>
             <p>邮编：212200</p>
             <p>邮箱：112358585@qq.com</p>
           </div>
           <div>
             <p>宁波广播电视大学</p>
             <p>2016&copy;&nbsp;版权所有 </p>
             <p>沪ICP备05052049</p>
           </div>
         </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      key: ""
    };
  },
  mounted() {
    // this.abc();
  },
  methods: {
    toHome() {
      window.location.href = "../center/index.html";
    },
    goSearch() {
      let url = "search.html";
      window.location.href = url;
    }
  }
};
</script>

<style lang="less" scoped>
@base: 58rem;
#footer {
  width: 100%;
  background: #f5f5f5;
  border-top: 1px solid #dddddd;
  color: #666666;
  padding: 30px 10px 30px 20px;
  .content {
    font-size: 16px;
    >div{
      display: flex;
      flex-flow: row wrap;
      &:nth-of-type(1){
        p{
          //就是以为这宽度是100%;
          flex:1 0 100%;
          &:not(:nth-last-of-type(1)){
            margin-bottom: 25px;
          }
        }
      }
      &:nth-last-of-type(1){
        display:flex;
        flex-flow: row nowrap;
        >div{
          flex :1 0 50%;
          &:nth-of-type(1){
            p{
              flex: 1 0 100%;
              &:nth-of-type(1){
                margin-top: 20px;
                margin-bottom: 25px;
              }
            }
          }
          &:nth-of-type(2){
            flex: 0 0 auto;
            p{
              flex: 1 0 100%;
              &:nth-of-type(1){
                margin-bottom: 20px;
              }
              &:nth-of-type(2){
                margin-bottom: 10px;
              }
              &:not(:nth-of-type(1)){
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}
</style>