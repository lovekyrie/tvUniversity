<template>
  <div class="member-c">
    <div class="head-img">
      <div>
        <img src="" alt="默认头像">
      </div>
      <div>
        <div>{{name}}</div>
        <div>{{linkedPhone}}</div>
        <div>
          修改个人信息
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="link-info">

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:'麻花',
      linkedPhone:'13500009999',

    }
  }
}
</script>

<style>

</style>
