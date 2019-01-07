<template>
  <div id="back">
    <a ref="backUrl" href="http://lndd.nbsqjy.com:44185" target="_blank" style="display:none;">后台链接</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.backUrl.click();
    });
  }
};
</script>

<style>
</style>
