<template>
    <div id="info">
        <table>
            <tr>
                <td> 头像：</td>
                <td>
                    <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </td>
            </tr>
            <tr>
                <td>昵称：</td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td>学生姓名：</td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td>身份证号：</td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td>手机号码：</td>
                <td><input type="number"/></td>
            </tr>
            <tr>
                <td>联系地址：</td>
                <td><v-distpicker></v-distpicker><input type="text" class="add"/></td>
            </tr>
            <tr>
                <td> 上传证件照：</td>
                <td>
                    <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess2"
                            :before-upload="beforeAvatarUpload2">
                        <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </td>
            </tr>
            <tfoot>
                <td></td>
                <td>
                    <button type="submit" >提交</button>
                    <button type="button"  @click="cancel">取消</button>
                </td>
            </tfoot>
        </table>

    </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
  export default {
    data() {
      return {
          imageUrl: '',  //头像
          imageUrl2:'',  //证件照
    
      }
    },
    mounted() {

    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        handleAvatarSuccess2(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload2(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        cancel(){

        }
    },
    components: {
		VDistpicker
    }
  }
</script>
<style lang="less" >
    .avatar-uploader .el-upload {
        border: 1px solid #cccccc;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        margin-top: 10px;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    #info{
        padding:40px 0;
        table{
            margin-left: 58px;
            width: 100%;
            tr{
                &:first-child{
                    td{
                        vertical-align: top;
                        line-height: 60px;
                        &:first-child{
                            width: 100px;
                        }
                    }
                }
                &:last-child{
                    td{
                        vertical-align: top;
                        line-height: 60px;

                    }
                }
                td{

                    line-height: 40px;
                    input{
                        width: 415px;
                        height: 58px;
                        line-height: 58px;
                        border: 1px solid #cccccc;
                        margin: 10px 0;
                        text-indent: 15px;
                        font-size: 18px;
                    }
                    input.add{
                        width: 300px;
                    }
                    .distpicker-address-wrapper{
                        float: left;
                        margin: 10px 0;
                        select{
                            padding: 0 10px;
                            height: 58px;
                            line-height: 58px;
                            float: left;
                            margin-right: 10px;
                        }

                    }
                }
            }
            button{
                width: 160px;
                height: 50px;
                line-height: 50px;
                border: 0;
                text-align: center;
                border-radius: 5px;
                margin-top: 20px;
                cursor: pointer;
                &:first-child{
                    background: #3a71a8;
                    color: #fff;
                    border: 1px solid #3a71a8;

                }
                &:last-child{
                    border: 1px solid #999999;
                    background: #f6f6f6;
                }
            }
        }
    }
</style>