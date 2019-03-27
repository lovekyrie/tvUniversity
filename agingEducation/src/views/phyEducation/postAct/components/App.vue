<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div class="g-content g-content-footer" ref="size">
      <!--列表-->
      <div class="g-search">
        <!--列表顶部-->
        <div class="crumb">
          <span @click="toIndex">返回首页</span>
          <span class="topLine">></span>
          <span @click="toAct">精彩活动</span>
          <span class="topLine">></span>
          <span>活动详情</span>
        </div>

        <!--活动介绍-->
        <div class="mainContent">
          <div class="contentImg">
            <img :src="actInfo.imgUrl" alt="图片">
          </div>
          <div class="contentDes">
            <h3>{{actInfo.titleNm}}</h3>
            <p>主办方：{{actInfo.sponsor}}</p>
            <p>
              <span style="color:red;">{{actInfo.haveNum}}</span> 人参与
            </p>
            <p>时间：{{actInfo.startTm}}&nbsp;~&nbsp;{{actInfo.endTm}}</p>
            <p>来源：{{actInfo.source}}</p>
            <a href="#" @click.stop="toBack">返回活动 ></a>
          </div>
        </div>

        <!--输入内容-->
        <div class="contentInput">
          <h4>作品类型</h4>
          <el-select v-model="catType" placeholder="请选择" @change="pickCatType">
            <el-option v-for="item in options" :key="item.cd" :label="item.nm" :value="item.cd"></el-option>
          </el-select>
          <h4>上传作者</h4>
          <input class="inputTitle" type="text" v-model="inputAuthor" placeholder="请输入作者">
          <h4>作品名称</h4>
          <input class="inputTitle" type="text" v-model="fileName" placeholder="请输入作品名称">

          <h4>图片、文字内容</h4>
          <!-- editor富文本编辑器 -->
          <editor @trigerSubmit="getEditorInfo"></editor>
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
            <button @click="sub" style="margin-right: 20px">发布</button>
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
import Editor from "components/Editor";
export default {
  data() {
    return {
      inputAuthor: "",
      showType: false,
      actId: "",
      actInfo: {},
      imageUrl: "",
      fileName: "",
      catType: "",
      options: [],
      cont: ""
    };
  },
  components: {
    ageHead,
    ageFoot,
    Editor
  },
  mounted() {
    //需要把字符串转成boolean
    // this.showType = JSON.parse(this.until.getQueryString("type"));
    this.actId = this.until.getQueryString("id");

    this.getActInfo();
    this.getCatCd();
  },
  methods: {
    toIndex() {
      this.until.href("../home/index.html");
    },
    toAct() {
      this.until.href("./excitingAct.html");
    },
    getEditorInfo(content) {
      this.cont = content;
    },
    sub() {
      //提交参赛作品
      let param = {
        televDoingPk: this.actId,
        imgUrl: this.imageUrl,
        authorNm: this.inputAuthor,
        televRunNm: this.fileName,
        cont: this.cont,
        catCd: this.catType
      };

      this.until.postCard("/telev/run/add", JSON.stringify(param)).then(
        res => {
          if (res.status === "200") {
            this.$message({
              message: "恭喜你，您已经成功发布了一条参赛作品",
              type: "success"
            });
            setTimeout(() => {
              (window.location.href = "./actVote.html"), 1000;
            });
          } else {
            this.$message.error(res.message);
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
            this.actInfo.startTm =
              res.data.startTm && res.data.startTm.substr(0, 10);
            this.actInfo.endTm = res.data.endTm && res.data.endTm.substr(0, 10);
          }
        },
        err => {}
      );
    },
    /**得到参赛作品分类 */
    getCatCd() {
      let query = new this.Query();
      query.buildWhereClause("cd", "40030.", "RLK");
      query.buildPageClause(1, 10000);

      let param = query.getParam();
      this.until.get("/sys/cat/listTree", param).then(res => {
        if (res.status === "200") {
          this.options = res.data.items;
        }
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = res.data;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传内容只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传内容大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    clear() {
      (this.inputAuthor = ""), (this.imageUrl = "");
    }
  }
};
</script>
