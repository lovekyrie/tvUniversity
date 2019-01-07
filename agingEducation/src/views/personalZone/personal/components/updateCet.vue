<template>
  <div class="inContent">
    <div class="upCet">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="upCard" alt>
      </el-dialog>
    </div>
    <div class="confirmBtn">
      <button @click="confirmUp">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upCard: "",
      dialogVisible: false
    };
  },
  methods: {
    //预览和删除图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.upCard = file.url;
      this.dialogVisible = true;
    },

    confirmUp() {}
  }
};
</script>

<style type="text/less" lang="less" scoped>
//内容
.inContent {
  flex: 1 0 83%;
  background-color: #f6f6f6;
  padding: 30px 30px 50px 30px;

  .upCet {
    margin-bottom: 50px;
  }

  .confirmBtn {
    text-align: center;
    padding-top: 60px;

    > button {
      width: 20%;
      height: 40px;
      font-size: 18px;
      font-weight: 300;
      border-radius: 5px;
      background-color: #3a71a8;
      color: white;
    }
  }
}
</style>