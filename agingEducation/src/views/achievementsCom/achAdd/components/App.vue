<template>
    <div id="container">
        <!--顶部-->
        <ageHead></ageHead>
        <!--页面主体部分-->
        <div id="main">
            <!--成果分类按钮-->
            <div class="selectBtn">
                <!-- <button @click="toWrite">文字集锦</button>
                <button @click="toPaint">书画摄影</button>
                <button @click="toVideo">活力视频</button> -->
                <button @click="toRelease">成果发布</button>
            </div>
            <!--列表-->
            <div class="achList">
                <!--列表顶部-->
                <div class="achTop">
                    <span><a href="../home/index.html">首页</a></span>
                    <template v-if="showType">
                      <span class="topLine"> > </span>
                      <span><a href="../phyEducation/phyeducationMain.html">实体办学</a></span>
                    </template>
                    <span class="topLine"> > </span>
                    <span><a :href="'./subAch.html?type='+showType">成果交流</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">成果发布</a></span>
                </div>
                <!--输入表单-->
                <div class="achForm">
                    <el-form ref="form" :model="form" label-width="60px" label-position="left">
                        <el-form-item label="标题:">
                            <el-input v-model="form.titleNm" placeholder="请输入标题名称"></el-input>
                        </el-form-item>
                        <el-row :gutter="50">
                            <el-col :span="8">
                                <el-form-item label="作者:">
                                    <el-input v-model="form.author" placeholder="请输入作者"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="班级:">
                                    <el-input v-model="form.stuNm" placeholder="请输入班级"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="类别:">
                                    <el-select v-model="form.catNm" placeholder="成果分类" style="width: 100%">
                                        <el-option label="文字集锦" value="文字集锦"></el-option>
                                        <el-option label="书画摄影" value="书画摄影"></el-option>
                                        <el-option label="活力视频" value="活力视频"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>

                    <div class="editor">
                        <h3>发表成果交流</h3>
                        <editor @trigerSubmit="getEditorInfo"></editor>
                        <el-row>
                          <el-button @click="addResultCom">发布</el-button>
                          <el-button>取消</el-button>
                        </el-row>
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
import Editor from "./Editor";

export default {
  data() {
    return {
      form: {
        titleNm: "",
        author: "",
        stuNm: "",
        catNm: "",
        source: "",
        cont:""
      },
      showType:false
    };
  },
  mounted(){
    this.showType=JSON.parse(this.until.getQueryString('type'))
  },
  methods: {
    getEditorInfo(content){
      this.form.cont=content
    },
    toWrite(){
      window.location.href='./writing.html?type='+this.showType
    },
    toPaint(){
      window.location.href='./painting.html?type='+this.showType
    },
    toVideo(){
      window.location.href='./actVideo.html?type='+this.showType
    },
    toRelease(){
      window.location.href='./achAdd.html?type='+this.showType
    },
    //发布成果交流接口
    addResultCom() {

      let paramObj = Object.assign(this.form);
      this.until.postCard("/telev/gain/add", JSON.stringify(paramObj)).then(
        res => {
          if (res.status === "200") {
            this.$message({
              message: "恭喜你，您已经成功发布了一条成果交流",
              type: "success"
            });
          }
        },
        err => {}
      );
    }
  },
  components: {
    ageHead,
    ageFoot,
    Editor
  }
};
</script>

<style scoped>
</style>