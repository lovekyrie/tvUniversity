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
            font-size: 26px !important;
        }
    }

    .edui-default .edui-editor-bottomContainer {
        display: none !important;
    }

    .el-input {
        width: 370px;
        font-size: 20px;
        input {
            height: 60px;
        }
    }

    .el-select-dropdown__item {
        font-size: 20px;
        height: 50px;
        line-height: 50px;
        padding: 0;
    }

    .el-select-dropdown__item span {
        display: inline-block;
        height: 50px;
        line-height: 50px !important;
        margin-left: 10px;
    }

    .el-input {
        font-size: 22px !important;
    }

    .page {
        padding-left: 30px;
        margin: 30px 0 100px 0;

        span {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            vertical-align: middle;
        }
        .el-pagination {
            display: inline-block;
        }
        .el-pager li {
            font-size: 20px;
            height: 40px;
            width: 40px;
            line-height: 40px;
        }
        .el-pager li.btn-quicknext, .el-pager li.btn-quickprev {
            line-height: 40px;
        }
        .el-pagination button, .el-pagination span {
            height: 40px;
            line-height: 40px;
            font-size: 20px;
        }
        .el-pagination__editor {
            height: 40px;
            width: 40px;
            line-height: 40px;
            font-size: 20px;
        }
        .el-icon-arrow-left:before {
            content: '上一页';
            font-size: 20px;
        }
        .el-icon-arrow-right:before {
            content: '下一页';
            font-size: 20px;
        }
    }

</style>
<style lang="less">
    /*公共样式*/
    body {
        background: url("img/bg.jpg") no-repeat;
        background-size: cover;
    }

    .container {
        width: 1200px;
        margin: 0 auto;
    }

    /*内容头部*/
    .c-header {
        position: relative;
        text-align: center;
        color: #fff;
        .c-h-dz {
            position: absolute;
            top: 30px;
            right: 30px;
            width: 120px;
            height: 50px;
            line-height: 50px;
            background-color: #fff;
            border-radius: 5px;
            text-align: left;
            cursor: pointer;
            img {
                position: absolute;
                top: 12px;
                left: 28px;
            }
            span {
                display: inline-block;
                margin-left: 62px;
                width: 50px;
                color: #000;
                text-align: center;
            }
        }
        .c-h-tx {
            display: inline-block;
            margin-top: 35px;
            font-size: 18px;
            width: 150px;
            height: 150px;
            > div {
                display: inline-block;
                background: url("img/timg.jpg") no-repeat;
                border-radius: 50%;
                width: 150px;
                height: 150px;
                background-size: 150px 150px;
                input {
                    width: 150px;
                    height: 150px;
                    vertical-align: middle;
                    opacity: 0;
                }
            }
        }
        h3 {
            font-size: 26px;
            margin-top: 30px;
            line-height:1.5;
            text-align: center;
        }
        p {
            margin-top: 20px;
            span {
                cursor: pointer;
            }
        }
        ul {
            margin-top: 50px;
            margin-bottom: 20px;
            overflow: hidden;
            li {
                float: left;
                width: 171px;
                text-align: center;
                cursor: pointer;
                a {
                    color: #fff;
                }
            }
        }
    }

    /*内容列表*/
    .c-list {
        .c-l-class {
            height: 90px;
            padding: 50px 60px 0 60px;
            background-color: #fff;
            span {
                float: left;
                height: 65px;
                line-height: 65px;
                text-align: center;
                margin-right: 20px;
                font-size: 22px;
                &:nth-last-of-type(1) {
                    float: right;
                }
            }
            .el-select {
                float: left;
                &:nth-last-of-type(1) {
                    float: right;
                }
                .el-input {
                    width: 370px;
                    font-size: 24px;
                    input {
                        height: 65px;
                    }
                }
            }
        }
        /*内容*/
        .c-l-classcnt {
            background-color: #fff;
            > div {
                overflow: hidden;
                height: 210px;
                padding: 0 60px;
                border-bottom: 1px solid #e1e1e1;
                > div {
                    &:nth-of-type(1) {
                        margin-top: 40px;
                        > h3 {
                            display: inline-block;
                            width: 900px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 26px;
                            cursor: pointer;
                        }
                        > span {
                            float: right;
                            display: inline-block;
                            line-height: 1.5;
                            font-size: 26px;
                        }
                    }
                    &:nth-of-type(2) {
                        margin-top: 25px;
                        height: 25px;
                        line-height: 25px;
                        font-size: 22px;
                        > p:nth-of-type(1) {
                            display: inline-block;
                            color: #999;
                            height: 25px;
                            font-size: 22px;
                        }
                        > div {
                            float: right;
                            display: inline-block;
                            width: auto;
                            height: 25px;
                            line-height: 25px;
                            span {
                                margin: 0 15px;
                                vertical-align: middle;
                            }
                            img {
                                vertical-align: top;
                            }
                        }
                    }
                }
                > p {
                    margin-top: 30px;
                    font-size: 22px;
                }
            }
        }
        /*分页*/
        .c-l-foot {
            height: 105px;
            padding: 45px 0;
            padding-left: 60px;
            background-color: #fff;

        }
    }

    /*发布信息*/
    .c-text {
        background-color: #fff;
        > div {
            padding: 0 30px;
            overflow: hidden;
            height: 278px;
            > div {
                font-size: 24px;
                &:nth-of-type(1) {
                    display: flex;
                    margin-top: 60px;
                    span {
                        height: 60px;
                        line-height: 60px;
                    }
                    .el-input {
                        flex: 1;
                    }
                }
                &:nth-of-type(2) {
                    margin-top: 30px;
                    display: flex;
                    justify-content: space-between;
                    > div {
                        width: auto;
                        .el-input {
                            float: left;
                            width: 236px;
                        }
                        span {
                            float: left;
                            height: 60px;
                            line-height: 60px;
                            font-size: 24px;
                        }
                    }
                }
                input {
                    height: 60px;
                }
            }
        }
    }

    /*富文本*/
    .c-send {
        margin-bottom: 90px;
        > p {
            height: 65px;
            line-height: 65px;
            background-color: #3a71a8;
            font-size: 26px;
            color: #fff;
            padding-left: 50px;
        }
        .f-button {
            background-color: #fff;
            button {
                float: right;
                width: 90px;
                height: 40px;
                border: 0;
                border-radius: 5px;
                color: #fff;
                font-size: 22px;
                margin: 20px 60px 20px 0;
                &:nth-of-type(1) {
                    background-color: #858585;
                }
                &:nth-of-type(2) {
                    background-color: #3A71A8;
                }
            }
        }

    }

</style>
<template>
    <div>
        <AllHead @state="headstatus" @userInfo="getUserInfo"></AllHead>

        <div class="g-content" ref="size">
            <!--内容头部-->
            <div class="container">
                <div class="c-header">
                    <div class="c-h-dz" @click.once="addznum()" ref="znum"><img src="img/zan.png"
                                                                                alt=""><span>{{personal.znum}}</span>
                    </div>
                    <div class="c-h-tx">
                        <div :style="{backgroundImage:`url(${personal.img})`}">
                            <input type="file" @change="uptx"  ref="uptx" disabled>
                        </div>
                    </div>
                    <h3 id="i-name"><span>{{personal.name}}</span></h3>
                    <p v-show="state==0"><span @click="editname">修改昵称</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span
                            @click="editimg">修改头像</span></p>
                    <p v-show="state==2"><span
                            @click="cancelSaveImg">取消</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span @click="saveimg">保存</span>
                    </p>
                    <p v-show="state==1"><span @click="cancelSavename">取消</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span
                            @click="savename">保存</span></p>
                    <ul class="clearfix">
                        <li><a href="./detailcenter.html#/mycourse/course">我的课程</a></li>
                        <li><a href="./detailcenter.html#/myclass">我的班级</a></li>
                        <li><a href="./detailcenter.html#/certificate">我的证书</a></li>
                        <li><a href="./detailcenter.html#/sign">签到记录</a></li>
                        <li><a href="./detailcenter.html#/mymsgcenter/msgcenter">消息中心</a></li>
                        <li><a href="./detailcenter.html#/personal">个人资料</a></li>
                        <li><a href="./detailcenter.html#/myclub/club">我的团</a></li>
                    </ul>
                </div>
            </div>
            <!--内容列表-->
            <div class="c-list">
                <!--分类-->
                <div class="c-l-class">
                    <span>成果分类：</span>
                    <el-select v-model="classVal" placeholder="所有分类">
                        <el-option
                                v-for="item in classAll"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="typeVal" placeholder="所有类型">
                        <el-option
                                v-for="item in typeAll"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <span>类型标签：</span>
                </div>
                <!--分类内容-->
                <div class="c-l-classcnt">
                    <div v-for="(list,index) in articleAll">
                        <div><h3 @click="classlink(list.type)">·&nbsp;{{list.title}}</h3><span>【{{list.class}}】</span>
                        </div>
                        <p>作者：{{list.autor}}</p>
                        <div class="clearfix"><p>{{list.time}}</p>
                            <div @click.once="addwz(index)"><img src="img/zan.png" alt=""><span>{{list.znum}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!--分页-->
                <div class="c-l-foot">
                    <div class="page">
                        <el-pagination
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                :page-size="10"
                                layout=" prev, pager, next, total"
                                :total="100">
                        </el-pagination>
                        <span>共10页</span>
                    </div>
                </div>
            </div>
            <!--发布信息-->
            <div class="c-text">
                <div>
                    <div>
                        <span>标题：</span>
                        <el-input placeholder="请输入标题名称" v-model="msg.title"></el-input>
                    </div>

                    <div>
                        <div class="clearfix">
                            <span>作者：</span>
                            <el-input placeholder="请输入作者" v-model="msg.autor"></el-input>
                        </div>

                        <div class="clearfix">
                            <span>班级：</span>
                            <el-input placeholder="请输入班级" v-model="msg.class"></el-input>
                        </div>

                        <div class="clearfix">
                            <span>类型：</span>
                            <el-select v-model="resultVal" placeholder="成果分类">
                                <el-option
                                        v-for="item in resultAll"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>

                    </div>
                </div>
            </div>
            <!--发布内容-->
            <div class="c-send">
                <p>发表成果交流</p>
                <div class="editor-container">
                    <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
                </div>
                <div class="f-button clearfix">
                    <button @click="clearcnt">取消</button>
                    <button @click="getUEContent">发表</button>
                </div>
            </div>
        </div>

        <McFoot></McFoot>

    </div>
</template>
<script>
  import AllHead from 'components/allHead';
  import McFoot from 'components/McFoot';
  import tximg from './img/timg.jpg'
  import UE from 'components/ue/ue.vue';

  export default {
    data() {
      return {
        headstate: false,
        /*0:不编辑 1：编辑名字 2：修改头像*/
        state: 0,
        /*成果分类*/
        classAll: [{value: '文学', label: '文学'}, {value: '音乐', label: '音乐'}, {value: '美术', label: '美术'}],
        classVal: '',
        /*类型标签*/
        typeAll: [{value: '文学集锦', label: '文学集锦'}, {value: '书画摄影', label: '书画摄影'}, {value: '活力视频', label: '活力视频'}],
        typeVal: '',
        /*类型*/
        resultAll: [{value: '文学', label: '文学'}, {value: '音乐', label: '音乐'}, {value: '美术', label: '美术'}],
        resultVal: '',
        /*内容*/
        articleAll: [],
        article: {title: '电大电大电大电大电大电大电大电大', class: '文学', autor: '礼拜', time: '2017.11.14', znum: '100'},
        /*个人信息*/
        personal: {
          name: '老人与海',
          img: tximg,
          znum: 0
        },
        oldname:'',
        oldimg: '',
        imgfile: null,
        /*发布信息*/
        msg: {
          title: '',
          autor: '',
          class: '',
        },
        total: 100,
        currentPage: 1,
        defaultMsg: '',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        },
        ue1: "ue1", // 不同编辑器必须不同的id
      }
    },
    watch: {
      headstate(val) {
        if (val) {
          $('.el-select-dropdown__item').css({'font-size': '26px'});
        } else {
          $('.el-select-dropdown__item').css({'font-size': '2px'});
        }
      }
    },
    mounted() {
      var i = 5;
      while (i--) {
        this.articleAll.push(this.article);
      }
    },
    methods: {
      getUserInfo(data) {
        if (data) {
          data.then(res => {
            this.personal.name = res.name;
            this.personal.img = res.img;
          })
        }
      },
      headstatus(val) {
        this.headstate = val;
      },
      /*分页*/
      handleCurrentChange(val) {

      },
      upphoto(el, fn) {
        var maxsize = 2 * 1024 * 1024;
        var file = this.$refs[el].files;
        for (var j = 0; j < file.length; j++) {
          if (file[j].size > maxsize) {
            this.$message.error('图片大小请限制在2M以内！');
            this.$refs[el].value = '';
            return;
          }
        };
        for (var i = 0; i < file.length; i++) {
          var fileReader = new FileReader();
          fileReader.readAsDataURL(file[i]);
          fileReader.onloadend = function (e) {
            var obj = {};
            obj.img = e.target.result;
            fn(obj, file);
          };
        }
      },
      uptx() {
        this.upphoto('uptx', (obj, file) => {
          this.imgfile = file[0];
          this.oldimg = this.personal.img;
          this.personal.img = obj.img;
        });
      },
      editimg() {
        this.state = 2;
        this.$refs.uptx.removeAttribute('disabled');
        this.$refs.uptx.style.cursor = 'pointer';
      },
      saveimg() {
        /*接口上传图片*/
        this.$refs.uptx.style.cursor = 'default';
        let param = new FormData();
        param.append('file', this.imgfile);
        this.until.postImg('/general/file/upload', param)
          .then(res => {
            var param = {
              "imgUrl": res.data,
              "sysUserPk": this.until.getTokenData().userInfo.sysUserPk
            };
            this.until.postJson('/sys/user/edit', JSON.stringify(param))
              .then(res => {
                if (res.status == 200) {
                  this.state = 0;
                  this.$message({message: '头像修改成功！', type: 'success'});
                }
              });
          });
      },
      cancelSaveImg() {
        this.state = 0;
        this.personal.img = this.oldimg;
      },
      editname() {
        this.state = 1;
        this.oldname = this.personal.name;
        $('#i-name span').attr('contenteditable',true).attr('spellcheck',true);
      },
      savename() {
        /*接口上传昵称*/
        var param = {
          "imgUrl": res.data,
          "sysUserPk": this.until.getTokenData().userInfo.sysUserPk
        };
        this.until.postJson('/sys/user/edit', JSON.stringify(param))
          .then(res => {
            if (res.status == 200) {
              this.state = 0;
              this.$message({message: '头像修改成功！', type: 'success'});
            }
          });
      },
      cancelSavename(){
        this.state = 0;
        this.personal.name = this.oldname;
      },
      addznum() {
        this.personal.znum++;
        /*发送给接口*/
      },
      addwz(index) {
        this.articleAll[index].znum++;
        /*发送给接口*/
      },
      classlink(type) {
        if (type == '文学') {
          window.open('./textlist.html');
        } else if (type == '图片') {
          window.open('./imglist.html');
        } else if (type == '视频') {
          window.open('./vediolist.html');
        }
      },
      errorPop(str) {
        this.$message.error(str);
      },
      /*发布内容*/
      applyCnt() {
        /*校验*/
        if (this.msg.title == '') {
          this.errorPop('请输入标题！');
          return;
        }
        if (this.msg.autor == '') {
          this.errorPop('请输入作者！');
          return;
        }
        if (this.msg.class == '') {
          this.errorPop('请输入班级！');
          return;
        }
        if (this.resultVal == '') {
          this.errorPop('请选择分类！');
          return;
        }
        if (this.getUEContent() == '') {
          this.errorPop('请输入内容！');
          return;
        }
        /*接口发送给后台*/
      },
      getUEContent() {
        let content = this.$refs.ue.getUEContent(); // 调用子组件方法
//        console.log(this.$refs.ue);
//        this.$notify({
//          title: '获取成功，可在控制台查看！',
//          message: content,
//          type: 'success'
//        });
//        console.log(content)
        return content;

      },
      getUEContentTxt() {
        let content = this.$refs.ue.getUEContentTxt(); // 调用子组件方法
//        this.$notify({
//          title: '获取成功，可在控制台查看！',
//          message: content,
//          type: 'success'
//        });
//        console.log(content)
        return content;
      },
      clearcnt() {
        this.$refs.ue.editor.execCommand('cleardoc');
      }
    },
    components: {
      AllHead, McFoot, UE
    },
  }
</script>
