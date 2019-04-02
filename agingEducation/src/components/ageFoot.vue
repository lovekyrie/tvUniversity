<template>
  <div id="ageFoot">
    <div class="footRow1">
      <span>
        <a href="http://www.nbtvu.net.cn/">宁波广播电视大学</a>
      </span>
      <span>
        <a href="http://www.nbsqjy.com/">宁波社区教育网</a>
      </span>
      <span>
        <a href="http://www.nblll.cn/">宁波终身学习网</a>
      </span>
      <span style="border: none;">
        <a href="http://lndd.nbsqjy.com:44185/dist/views/center/index.html">宁波市乐龄老年电视大学</a>
      </span>
    </div>

    <div class="footRow2">
      <span>联系方式：0574-87201535（芝士公园校区）0574-87043646（东部新城校区）</span>
      <span>地址：宁波市江北区文教路1号</span>
      <span>
        <a href="http://lnt.nbsqjy.com/view/index.html" target="_blank">后台管理系统</a>
      </span>
    </div>
    <div class="footRow3">
      <span>2018©版权所有 浙ICP备10047159号</span>
    </div>
  </div>
</template>

<script>
export default {
  name: ""
};
</script>

<style lang="less" type="text/less">
#ageFoot {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgb(225, 225, 225);
  padding-top: 20px;
  min-width: 1060px;
  height: 130px;
  font-size: 18px;
  color: rgb(135, 135, 135);
  background-color: rgb(245, 245, 245);

  /*所有底部链接样式*/
  a {
    text-decoration: none;
    color: rgb(135, 135, 135);
  }

  /*第一行*/
  .footRow1 {
    margin-bottom: 10px;
    font-size: 20px;
    > span {
      display: inline-block;
      padding-right: 40px;
      margin-right: 40px;
      border-right: 1px solid rgb(145, 145, 145);
    }
  }
  .footRow2 {
    margin-bottom: 10px;
    > span {
      &:not(:nth-last-of-type(1)) {
        margin-right: 30px;
      }
    }
  }
}
</style>