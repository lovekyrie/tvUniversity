<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div id="main">
      <!--列表-->
      <div class="mainList">
        <!--列表顶部-->
        <div class="mainTop">
          <span>
            <a href="../home/index.html">首页</a>
          </span>
          <template v-if="showType">
            <span class="topLine">></span>
            <span>
              <a href="../phyEducation/phyeducationMain.html">实体办学</a>
            </span>
          </template>
          <span class="topLine">></span>
          <span>
            <a href="./excitingAct.html">精彩活动</a>
          </span>
          <span class="topLine">></span>
          <span>
            <a href="#">活动详情</a>
          </span>
        </div>

        <!--活动介绍-->
        <div class="mainContent">
          <div class="contentImg">
            <img :src="actInfo.imgUrl" alt="图片">
          </div>

          <div class="contentDes">
            <h3>{{actInfo.titleNm}}</h3>
            <p>主办方：{{actInfo.sponsor}}</p>
            <p style="margin-bottom: 100px">
              <span style="color:red;">{{actInfo.haveNum}}</span> 人参与
            </p>
            <p
              style="color: rgb(135,135,135);font-weight: 300;line-height: 1.5em"
            >时间：{{actInfo.startTm}}&nbsp;~&nbsp;{{actInfo.endTm}}</p>
            <p
              style="color: rgb(135,135,135);font-weight: 300;line-height: 1.5em;margin-bottom: 35px"
            >来源：{{actInfo.source}}</p>
            <a href="#" @click.stop="toBack">返回活动 ></a>
          </div>
        </div>

        <!--输入内容-->
        <div class="contentInput">
          <h4>上传作者</h4>
          <input class="inputTitle" type="text" v-model="inputAuthor" placeholder="请输入作者">

          <h4>内容</h4>
          <el-upload
            class="avatar-uploader"
            action="/general/file/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <div class="subBtn">
            <button @click="sub" style="margin-right: 20px" class="btn-success">发布</button>
            <button @click="clear">取消</button>
          </div>
        </div>
      </div>
    </div>

    <!--底部-->
    <ageFoot></ageFoot>
  </div>
</template>

<script>
import ageHead from "components/ageHead";
import ageFoot from "components/ageFoot";

export default {
  data() {
    return {
      inputAuthor: "",
      showType: false,
      actId: "",
      actInfo: {},
      imageUrl: ""
    };
  },
  components: {
    ageHead,
    ageFoot
  },
  mounted() {
    //需要把字符串转成boolean
    this.showType = JSON.parse(this.until.getQueryString("type"));
    this.actId = this.until.getQueryString("id");

    this.getActInfo();
  },
  methods: {
    sub() {
      //提交参赛作品
      let param = {
        televDoingPk: this.actId,
        imgUrl: this.imageUrl,
        authorNm: this.inputAuthor
      };

      this.until.postCard("/telev/run/add", JSON.stringify(param)).then(
        res => {
          if (res.status === "200") {
            this.$message({
              message: "恭喜你，您已经成功发布了一条参赛作品",
              type: "success"
            });
          }
        },
        err => {}
      );
    },
    toBack(event) {
      // event.preventDefault()
      window.history.back();
    },
    getActInfo() {
      this.until.get("/telev/doing/info/" + this.actId).then(
        res => {
          if (res.status === "200") {
            this.actInfo = res.data;
            this.actInfo.startTm = res.data.startTm.substr(0, 10);
            this.actInfo.endTm = res.data.endTm.substr(0, 10);
          }
        },
        err => {}
      );
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = res.data;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    clear(){
      this.inputAuthor="",
      this.imageUrl=''
    }
  }
};
</script>

<style scoped>
</style>