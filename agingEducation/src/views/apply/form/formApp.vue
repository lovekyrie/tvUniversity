<style lang="less">
.size {
  h2 {
    font-size: 30px !important;
  }
  h3 {
    font-size: 30px !important;
  }
  span {
    font-size: 26px !important;
  }
  input {
    font-size: 26px !important;
  }
  button {
    font-size: 26px !important;
  }
  a {
    font-size: 26px !important;
  }
  li {
    font-size: 26px !important;
  }
  p {
    font-size: 22px !important;
  }
  select {
    font-size: 26px !important;
  }
  option {
    font-size: 26px !important;
  }
}

.el-checkbox__inner.change::after {
  height: 12px;
  left: 8px;
  top: 2px;
}
</style>
<style scoped lang="less">
.r-link {
  padding: 30px 0;
  color: #999;
  font-size: 20px;
  border-bottom: 1px solid @bdColor;
  a {
    width: auto;
    display: inline-block;
    color: #999;
  }
  span {
    vertical-align: top;
  }
}

@bdColor: #e1e1e1;
/*公共样式*/
.cm-container {
  width: 1200px;
  margin: 0 auto;
}

.cm-button {
  width: 132px;
  height: 45px;
  border: 0;
  border-radius: 5px;
  color: #fff;
  background-color: #3a71a8;
  font-size: 20px;
  cursor: pointer;
}

.f-form {
  overflow: hidden;
  padding-bottom: 50px;
  h3 {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
    font-size: 28px;
  }
  .onelist {
    padding-right: 380px;
    font-size: 22px;
    margin-top: 30px;
    > span {
      float: right;
      line-height: 55px;
      width: 100px;
      display: inline-block;
    }
    > input,
    select {
      float: right;
      height: 53px;
      width: 315px;
      border: 1px solid @bdColor;
      text-indent: 20px;
    }
  }
  .one-title {
    float: right;
    font-size: 22px;
  }
  .one-photo {
    margin-top: 30px;
    > div {
      float: right;
      width: 697px;
      margin-bottom: 40px;
      .img-list {
        position: relative;
        float: left;
        display: inline-block;
        margin-right: 20px;
        margin-bottom: 30px;
        i {
          display: none;
          position: absolute;
          top: 10px;
          left: 160px;
          display: inline-block;
          width: 20px;
          height: 20px;
          background: url("img/close.png") no-repeat;
          background-size: 20px 20px;
          cursor: pointer;
        }
        img {
          display: block;
          width: 190px;
          height: 190px;
          vertical-align: bottom;
        }
      }
      .f-upimg {
        float: left;
        position: relative;
        display: inline-block;
        width: 189px;
        height: 189px;
        border: 2px dashed @bdColor;
        background: url("img/up.png") 35px 35px no-repeat;
        > input {
          display: inline-block;
          width: 192px;
          height: 192px;
          opacity: 0;
          cursor: pointer;
        }
        .f-it {
          position: absolute;
          bottom: -50px;
          left: 0;
          width: 192px;
          font-size: 18px;
          line-height: 2;
          text-align: center;
          color: #b6b6b6;
        }
      }
    }
  }
}

.f-msg,
.f-mn,
.f-payway,
.f-paybtn {
  overflow: hidden;
  border-top: 1px solid @bdColor;
  padding-left: 370px;
  h3 {
    font-size: 22px;
    margin: 30px 0;
  }
  p {
    margin-bottom: 20px;
    font-size: 16px;
    color: #959595;
    line-height: 1.5;
  }
}

.f-mn {
  p {
    margin-top: 30px;
    span {
      color: red;
      font-size: 30px;
    }
  }
}

.f-payway {
  > div {
    margin-bottom: 30px;
    img {
      width: 38px;
      height: 38px;
      vertical-align: bottom;
    }
    span {
      display: inline-block;
      height: 38px;
      line-height: 38px;
      margin-left: 20px;
      font-size: 16px;
    }
  }
}

.f-paybtn {
  padding-top: 30px;
  svg {
    margin-right: 5px;
  }
  a {
    display: inline-block;
    width: auto;
  }
  button {
    width: 210px;
    height: 60px;
    border: 0;
    border-radius: 5px;
    color: #fff;
    font-size: 28px;
    background-color: #3a71a8;
    margin-bottom: 90px;
    margin-top: 20px;
    cursor: pointer;
  }
}
</style>

<template>
  <div v-if="len" id="container">
    <ageHead @state="getState"></ageHead>
    <div class="g-content g-content-footer" v-loading.fullscreen.lock="fullscreenLoading">
      <!--链接栏-->
      <div class="r-link cm-container">
        <a href="../home/index.html">首页</a>
        <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
        <a>在线报名</a>
      </div>

      <div class="f-form">
        <h3>报名表提交</h3>
        <div class="onelist clearfix" v-for="list in msglist">
          <input
            type="text"
            placeholder="单行输入"
            v-if="list.arg2=='text'"
            v-model="formmsg[list.arg1]"
          >
          <select v-if="list.arg2=='select'" v-model="formmsg[list.arg1]">
            <option :value="list.nm" v-for="(list,index) in selectList">{{list.nm}}</option>
          </select>
          <span v-if="list.arg2!='img'">{{list.nm}}：</span>
        </div>
        <div class="one-photo clearfix" v-if="isupload.length">
          <div class="clearfix">
            <div class="img-list" v-for="(img,index) in imglist">
              <i @click="clearimg(index)" class="f-close" v-show="imglist.length"></i>
              <img :src="img" class="f-img">
            </div>
            <div class="f-upimg">
              <input type="file" ref="fFile" @change="upImg" multiple>
              <span class="f-it" v-model="photo">上传一寸近照</span>
            </div>
          </div>
          <span class="one-title">照片上传：</span>
        </div>
      </div>

      <div class="f-msg">
        <h3>课程信息</h3>
        <p>
          <span>课程名称：</span>
          <span>{{courseName}}</span>
        </p>
        <p>
          <span>参加条件：</span>
          <span>{{condition}}</span>
        </p>
      </div>
      <div class="f-mn">
        <p>报名费用&nbsp;
          <span>{{price}}</span>&nbsp;元
        </p>
      </div>
      <div class="f-paybtn">
        <p>
          <el-checkbox v-model="checkbox">我已阅读并同意
            <a>《宁波广播电视大学老年教育管理系统协议》</a>
          </el-checkbox>
        </p>
        <button @click="payBtn">提交</button>
      </div>
    </div>

    <ageFoot></ageFoot>
  </div>
</template>
<script>
import ageHead from "components/ageHead";
import ageFoot from "components/ageFoot";

export default {
  data() {
    return {
      coursePkCd: "",
      pxClazzPk: "",
      img: "",
      photo: "",
      courseName: "",
      condition: "",
      price: 0,
      checkbox: false,
      headState: false,
      /*上传图片列表*/
      imglist: [],
      imgStr: "",
      /*渲染列表数组*/
      msglist: [],
      /*判断是不是图片*/
      isupload: [],
      /*是否需要上传图片标志位*/
      isImg: false,
      formmsg: {},
      /*男女*/
      selectList: [],
      len: false,
      fullscreenLoading: false
    };
  },
  watch: {
    headState(val) {
      if (val) {
        $(".el-checkbox__inner").css({ width: "25px", height: "25px" });
        $(".el-checkbox__inner").addClass("change");
      } else {
        $(".el-checkbox__inner").css({ width: "18px", height: "18px" });
        $(".el-checkbox__inner").removeClass("change");
      }
    }
  },
  mounted() {
    this.pxRecrPlanPk = this.until.getQueryString("pxRecrPlanPk");
    this.coursePk = this.until.getQueryString("coursePk");
    this.pxClazzPk = this.until.getQueryString("pxClazzPk");
    this.price = this.until.getQueryString("pr");
    this.clazzNm = this.until.getQueryString("clazzNm");
    /*获取信息列表*/
    this.getmsgAll();
    /*获取课程信息*/
    this.until.get(`/px/clazz/info/${this.pxClazzPk}`, {}).then(res => {
      if (res.status == 200) {
        this.courseName = res.data.nm;
        var str = "";
        var man = res.data.maleAgeNm;
        var woman = res.data.famaleAgeNm;
        if (man) {
          str += "男士年龄:" + man + "岁 ";
        }
        if (woman) {
          str += "女士年龄:" + woman + "岁 ";
        }
        if (!man && !woman) {
          str += "无年龄限制";
        }
        this.condition = str;
      }
    });
  },
  methods: {
    async getmsgAll() {
      let result = await this.getList();
      if (result.length == 0) {
        this.$alert("管理员未添加课程条件", "警告", {
          confirmButtonText: "确定",
          callback: action => {
            history.back();
          }
        });
      } else {
        this.len = true;
        this.msglist = result;
      }
    },
    /*获取分类*/
    getList() {
      return new Promise((resolve, reject) => {
        this.until
          .get(`/px/clazzApplyConf/getApplyConf`, { pxClazzPk: this.pxClazzPk })
          .then(res => {
            if (res.status == 200) {
              if (JSON.stringify(res.data) === "{}") {
                resolve([]);
              } else {
                resolve(res.data.items);
              }
            }
          });
      });
    },
    upImg() {
      var maxsize = 2 * 1024 * 1024;
      var file = this.$refs.fFile.files;
      for (var j = 0; j < file.length; j++) {
        if (file[j].size > maxsize) {
          this.$alert("图片大小请限制在2M以内！", "提示", {
            confirmButtonText: "确定"
          });
          this.$refs[el].value = "";
          return;
        }
      }
      this.getImgURL(file);
    },
    getImgURL(file) {
      Object.keys(file).forEach(item => {
        let param = new FormData();
        param.append("file", file[item]);
        this.until.postImg("/general/file/upload", param).then(res => {
          if (res.status == 200) {
            this.imglist.push(res.data);
          }
        });
      });
    },
    clearimg(index) {
      this.imglist.splice(index, 1);
    },
    getState(val) {
      this.headState = val;
    },
    payBtn() {
      /*验证图片是否上传*/
      if (this.isImg) {
        if (!this.imglist.length) {
          this.$alert("请上传一寸照！", "提示", { confirmButtonText: "确定" });
          return;
        }
        this.formmsg.imgUrl = "";
        this.imglist.forEach((item, index) => {
          if (this.imglist.length == index + 1) {
            this.formmsg.imgUrl += item;
          } else {
            this.formmsg.imgUrl += item + ",";
          }
        });
      }
      this.formmsg.pxRecrPlanPk = this.pxRecrPlanPk;
      this.formmsg.pxClazzPk = this.pxClazzPk;
      this.formmsg.arg1 = this.clazzNm;
      /*信息填写了 对象里才会有属性 先判断属性数和信息渲染数是否一致*/
      var len = this.isImg ? 4 : 3;
      if (Object.keys(this.formmsg).length != this.msglist.length + len) {
        this.$alert("信息填写不完整", "提示", { confirmButtonText: "确定" });
        return;
      }
      /*再遍历查看是否有值*/
      for (let key in this.formmsg) {
        if (this.formmsg[key] == "") {
          this.$alert("信息填写不完整", "提示", { confirmButtonText: "确定" });
          return;
        }
      }
      /*验证是否勾选*/
      if (!this.checkbox) {
        this.$alert("请勾选已阅读并同意协议后完成支付", "提示", {
          confirmButtonText: "确定"
        });
        return;
      }
      this.fullscreenLoading = true;
      this.until
        .postJson("/px/clazzApply/applyAdd", JSON.stringify(this.formmsg))
        .then(res => {
          this.fullscreenLoading = false;
          if (res.status == 200) {
            sessionStorage.setItem("success", JSON.stringify(res));
            location.href = "./success.html?pxClazzPk=" + this.pxClazzPk;
            //              if (res.data.statCd == '30100.150') {
            //                this.$alert('系统检测发现您是新生，请您尽快带身份证到学校进行学籍注册，学籍注册完成后，再在线缴费付款。谢谢！', '提示', {
            //                  confirmButtonText: '返回',
            //                  callback: action => {
            //                    history.back();
            //                  }
            //                });
            //              }
            //              if (res.data.statCd == '30100.140') {
            //                this.$alert('您所报的课程需要考核，等待考核通过前往在线缴款付款。', '提示', {
            //                  confirmButtonText: '返回',
            //                  callback: action => {
            //                    history.back();
            //                  }
            //                });
            //              }
            //              if (res.data.statCd == '30100.160') {
            //                window.location.href = './pass.html?pxClazzApplyPk=' + res.data.pxClazzApplyPk + '&pxClazzPk=' + this.pxClazzPk + '&coursePk=' + this.coursePk + '&pr=' + this.price+'&nm'+this.clazzNm;
            //              }
          } else {
            this.$alert(res.message, "提示", { confirmButtonText: "确定" });
          }
        });
    }
  },
  components: {
    ageHead,
    ageFoot
  }
};
</script>


