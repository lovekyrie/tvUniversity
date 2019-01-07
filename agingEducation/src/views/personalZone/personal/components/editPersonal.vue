<template>
  
      <!--内容-->
      <div class="inContent">
        <!--头像-->
        <div class="headImg">
          <div class="headImgLeft">
            <span>头像</span>
          </div>

          <div class="headImgRight">
            <div :style="headImg"></div>
          </div>
        </div>
        <!--昵称-->
        <div class="nickName">
          <div class="nickNameLeft">
            <span>昵称</span>
          </div>

          <div class="nickNameRight">
            <input :placeholder="nickName" v-model="newNickName">
          </div>
        </div>
        <!--学员姓名-->
        <div class="name">
          <div class="nameLeft">
            <span>学员姓名</span>
          </div>

          <div class="nameRight">
            <input :placeholder="name" v-model="newName">
          </div>
        </div>
        <!--身份证-->
        <div class="idCard">
          <div class="idCardLeft">
            <span>身份证号码</span>
          </div>

          <div class="idCardRight">
            <input :placeholder="idCard" v-model="newIdCard">
          </div>
        </div>
        <!--性别-->
        <div class="sex">
          <div class="sexLeft">
            <span>性别</span>
          </div>

          <div class="sexRight">
            <el-radio v-model="sex" label="male">男</el-radio>
            <el-radio v-model="sex" label="female">女</el-radio>
          </div>
        </div>
        <!--手机号码-->
        <div class="phone">
          <div class="phoneLeft">
            <span>手机号码</span>
          </div>

          <div class="phoneRight">
            <input :placeholder="phone" v-model="newPhone">
          </div>
        </div>
        <!--联系地址-->
        <div class="cAddress">
          <div class="cAddressLeft">
            <span>联系地址</span>
          </div>

          <div class="cAddressRight">
            <input :placeholder="cAddress" v-model="newCAddress">
          </div>
        </div>
        <!--上传证件-->
        <div class="upCard">
          <div class="upCardLeft">
            <span>上传证件</span>
          </div>

          <div class="upCardRight">
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
        </div>
        <!--编辑资料-->
        <div class="editBtn">
          <button @click="saveEdit">保存</button>
        </div>
      </div>
 
</template>

<script>
export default {
  data() {
    return {
 
      //    个人资料
      headImg: {
        width: "110px",
        height: "110px",
        borderRadius: "100%",
        overflow: "hidden",
        border: "1px solid black"
      },
      nickName: "小张",
      newNickName: "",

      name: "张三",
      newName: "",

      idCard: "330997198808080000",
      newIdCard: "",

      sex: "male",

      phone: "13887878787",
      newPhone: "",

      cAddress: "浙江省宁波市",
      newCAddress: "",

      upCard: "",
      dialogVisible: false
    };
  },
  methods: {
    //保存编辑
    saveEdit() {
      this.$router.push({ path: "/personalData" });
    },

    //预览和删除图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.upCard = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style type="text/less" lang="less" scoped>
    //内容
    .inContent {
      flex: 1 0 83%;
      flex-direction: column;
      background-color: #f6f6f6;

      /*编辑表单*/
      input {
        border: none;
        background-color: rgb(246, 246, 246);
        height: 99%;
        width: 100%;
      }
      /*头像*/
      .headImg {
        display: flex;
        flex-direction: row;
        height: 140px;
        line-height: 140px;
        font-size: 20px;
        font-weight: 400;
        border-bottom: 1px solid rgb(215, 215, 215);

        .headImgLeft {
          flex: 1 1 26%;
          padding-left: 3%;
        }

        .headImgRight {
          display: flex;
          align-items: center;
          flex: 1 1 74%;
          img {
            width: 100%;
          }
        }
      }
      /*昵称,学员姓名，身份证，性别，手机，联系地址*/
      .nickName,
      .name,
      .idCard,
      .sex,
      .phone,
      .cAddress {
        display: flex;
        flex-direction: row;
        height: 90px;
        line-height: 90px;
        font-size: 20px;
        font-weight: 400;
        border-bottom: 1px solid rgb(215, 215, 215);

        .nickNameLeft,
        .nameLeft,
        .idCardLeft,
        .sexLeft,
        .phoneLeft,
        .cAddressLeft {
          flex: 1 1 26%;
          padding-left: 3%;
        }

        .nickNameRight,
        .nameRight,
        .idCardRight,
        .sexRight,
        .phoneRight,
        .cAddressRight {
          flex: 1 1 74%;
          padding-left: 33px;
        }
      }

      /*上传证件*/
      .upCard {
        display: flex;
        flex-direction: row;
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 20px;
        font-weight: 400;
        border-bottom: 1px solid rgb(215, 215, 215);

        .upCardLeft {
          flex: 1 1 26%;
          padding-left: 3%;
        }

        .upCardRight {
          flex: 1 1 74%;
          padding-left: 33px;

          > img {
            width: 32%;
            margin-right: 10px;
            margin-bottom: 10px;
          }
        }
      }

      .editBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 240px;

        > button {
          width: 24%;
          height: 60px;
          font-size: 24px;
          border: 1px solid rgb(199, 199, 199);
          border-radius: 4px;
          background-color: rgb(246, 246, 246);
        }
      }
    }
</style>

<style type="text/less" lang="less">
//修改单选框
.sexRight {
  .el-radio__label {
    font-size: 20px;
  }
}

//隐藏上传表单的文字
.el-upload__input {
  display: none !important;
}
</style>