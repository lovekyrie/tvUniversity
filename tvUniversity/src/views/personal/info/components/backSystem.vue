<template>
  <div id="back">
    <a ref="backUrl" href="http://218.71.137.186:44185" target="_blank" style="display:none;">后台链接</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$refs.backUrl.click();
  }
};
</script>

<style>
</style>
