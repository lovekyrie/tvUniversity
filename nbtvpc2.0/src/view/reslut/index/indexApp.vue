
<template>
    <div>
        <AllHead @state="headstate"></AllHead>

        <div class="a-tab clearfix">
            <div>
                <button @click="toLink('text')">文字集锦</button>
                <button @click="toLink('img')">书画摄影</button>
                <button @click="toLink('vedio')">活力视频</button>
            </div>
        </div>

        <div class="g-content" ref="size">

            <div class="g-search">
                <div class="crumb"><a href="../home/index.html">首页</a><span>&nbsp;&gt;&nbsp;</span><a
                        href="javascript:void(0)">成果交流</a></div>

                <div class="content clearfix">

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
                            <button @click="applyCnt">发表</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <McFoot></McFoot>

    </div>
</template>
<script>

  import Lib from 'assets/js/Lib';
  import AllHead from 'components/allHead';
  import McFoot from 'components/McFoot';
  import UE from 'components/ue/ue.vue';

  export default {

    data() {
      return {
        defaultMsg: '',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        },
        ue1: "ue1", // 不同编辑器必须不同的id

        /*发布信息*/
        msg: {
          title: '',
          autor: '',
          class: ''
        },

        resultAll: [{value: '文学', label: '文学'}, {value: '音乐', label: '音乐'}, {value: '美术', label: '美术'}],
        resultVal: '',
      }
    },
    methods: {
      headstate(val){
        if(val){
            $('.el-input').css({'font-size':'28px'});
            $('.el-select-dropdown__item').css({'font-size':'26px'});
            $('.a-tab button').css({'font-size':'28px'});
        }else{
          $('.el-input').css({'font-size':'24px'});
          $('.el-select-dropdown__item').css({'font-size':'22px'});
          $('.a-tab button').css({'font-size':'20px'});
        }
      },
      toLink(type){
        switch (type){
          case 'text': location.href='./list.html?type=text';break;
          case 'img': location.href='./list.html?type=img';break;
          case 'vedio': location.href='./list.html?type=vedio';break;
        }
      },
      errorPop(str){
        this.$message.error(str);
      },
      /*发布内容*/
      applyCnt(){
        /*校验*/
        if(this.msg.title==''){
          this.errorPop('请输入标题！');
          return;
        }
        if(this.msg.autor==''){
          this.errorPop('请输入作者！');
          return;
        }
        if(this.msg.class==''){
          this.errorPop('请输入班级！');
          return;
        }
        if(this.resultVal==''){
          this.errorPop('请选择分类！');
          return;
        }
        console.log(this.getUEContent());
        if(this.getUEContent()==''){
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

    computed: {},

    mounted() {

    },
    components: {
      AllHead, McFoot, UE
    },
  }
</script>


<style scoped lang="less">
    .size {
        a {
            font-size: 30px !important;
        }
        h3 {
            font-size: 34px !important;
        }
        input {
            font-size: 26px !important;
        }
        button {
            font-size: 33px !important;
        }
        li{
            font-size: 28px !important;
        }
        p{
            font-size: 30px !important;
        }
        span{
            font-size: 30px !important;
        }
        input{
            font-size: 28px !important;
        }
    }
    .a-tab {
        border-bottom: 1px solid #e1e1e1;
        > div {
            width: 1200px;
            margin: 0 auto;
            height: 80px;
            line-height: 80px;
            > button {
                width: 138px;
                height: 40px;
                background-color: #3a71a8;
                color: #fff;
                font-size: 20px;
                border: 0;
                border-radius: 5px;
                margin-right: 60px;
                cursor: pointer;
            }
        }
    }

    .content {
        border-top: 1px solid #e1e1e1;
    }
</style>

<style lang="less">
    /*发布信息*/
    .c-text {
        background-color: #fff;
        > div {
            overflow: hidden;
            height: 278px;
            >div {
                font-size: 24px;
                &:nth-of-type(1) {
                    display: flex;
                    margin-top: 60px;
                    span {
                        height: 60px;
                        line-height: 60px;
                    }
                    .el-input{
                        flex: 1;
                    }
                }
                &:nth-of-type(2) {
                    margin-top: 30px;
                    display: flex;
                    justify-content: space-between;
                    >div{
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

    .edui-default .edui-editor-bottomContainer {
        display: none !important;
    }

    .el-input {
        font-size: 22px;
        input {
            height: 60px;
        }
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

    .el-select-dropdown__item {
        font-size: 22px;
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
</style>