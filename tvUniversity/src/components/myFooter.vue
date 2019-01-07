<template>
  <div id="footer">
    <div class="footer-wrap">
      <p>
        <a href="http://www.nbtvu.net.cn/">宁波广播电视大学</a>
        <span>|</span>
        <a href="http://lnt.nbsqjy.com">宁波电大老年教育网</a>
        <span>|</span>
        <a href="#">宁波老年实体办学网</a>
        <span>|</span>
        <a href="#">宁波电视大学网</a>
      </p>
      <p>联系方式：0574-87201535
        <span></span>地址：宁波市江北区文教路1号
      </p>
      <p>2018©版权所有 浙ICP备05015663号-2</p>
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
  padding: 15px 0 5px 0;
  .footer-wrap {
    width: 1200px;
    margin: 0 auto;
    p {
      text-align: center;
      line-height: 30px;
      padding: 10px 0;
      font-size: 16px;

      &:nth-child(2) {
        padding-bottom: 0;
      }
      &:last-child {
        padding: 0;
        font-size: 14px;
      }
      a {
        display: inline-block;
        width: auto;
        color: #666666;
        font-size: 16px;
      }
      span {
        color: #dcdcdc;
        padding: 0 35px;
      }
    }
  }
}
</style>