<template>
  <div class="about">
    <div>
      <img :src="about" alt="">
      <p>{{desc}}</p>
    </div>
  </div>
</template>

<script>
import about from "../img/about_03.png";

export default {
  data() {
    return {
      about,
      desc: `这是咨询的内容，这是咨询的内容，这是咨询的内容，这是咨询的内容，这是咨询的内容，`
    };
  }
};
</script>

<style lang='less'>
.about {
  width: 1200px;
  margin: 0 auto;
  padding: 55px 0;
  div {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    img {
      vertical-align: middle;
    }
    p {
      margin-top: 30px;
      flex: 1 0 100%;
      margin-left: 12%;
      font-size: 16px;
    }
  }
}
</style>
