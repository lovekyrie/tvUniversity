<style lang="less">
    .size {
        h2{
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
        li{
            font-size: 26px !important;
        }
        p{
            font-size: 26px !important;
        }
    }
</style>
<template>
    <div id="course">
        <!--下拉框-->
        <div class="c-tit" v-show="upstate">
            <el-select v-model="resultVal" placeholder="全部证书">
                <el-option
                        v-for="item in resultAll"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <button class="up-btn" @click="upstate=false">上传证书</button>

        </div>
        <!--内容-->
        <div class="c-cnt clearfix">
            <!--上传图片-->
            <div class="c-up-img" v-show="!upstate"><input type="file" multiple @change="upimg" ref="upimgel">
                <p>本地上传</p></div>
            <div class="up-cnt clearfix">
                <div class="up-cnt-list" v-for="(item,index) in certificateAll">
                    <img class="up-list-img" id="up-list-img" :src="item.img" alt="">
                    <p contenteditable="plaintext-only">{{item.name}}</p>
                    <img class="up-list-i" src="../img/close.png" alt="" v-show="!upstate" @click="delimg(index)">
                </div>
            </div>
            <div class="up-cnt-btn" v-show="!upstate">
                <button @click="confirmbtn">确定</button>
            </div>
        </div>

    </div>
</template>
<script>
  export default {
    data() {
      return {
        resultAll: [{value: '全部证书', label: '全部证书'}, {value: '选项2', label: '双皮奶'}],
        resultVal: '全部证书',

        certificateAll: [],

        upstate: true
      }
    },
    methods: {
      /*上传照片*/
      upimg() {
        var self = this;
        var file = this.$refs.upimgel.files;
        for (var i = 0; i < file.length; i++) {
          var fileReader = new FileReader();
          fileReader.readAsDataURL(file[i]);
          fileReader.onloadend = function (e) {
            var obj = {};
            obj.img = e.target.result;
            obj.name = '编辑证书名称';
            /*物理显示*/
            self.certificateAll.push(obj);
            /*上传到后台*/
          };
        }
      },
      delimg(index){
        /*物理删除*/
        this.certificateAll.splice(index,1);
      },
      confirmbtn(){
        if(this.$refs.upimgel.files.length>0){
            //发送给后台
        }else{
          this.$message.error('没有要上传的图片！！');
        }
      }
    }
  }
</script>
<style lang="less" scoped>
    /*下拉框字体*/
    .el-input {
        width: 370px;
        font-size: 24px;
        input {
            height: 60px;
        }
    }

    .el-select-dropdown__item {
        font-size: 26px;
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

    #course {
        width: 920px;
        background-color: #f6f6f6;
        padding: 30px;
        .c-tit {
            .up-btn {
                float: right;
                width: 145px;
                height: 45px;
                line-height: 45px;
                text-align: center;
                background-color: #3a71a8;
                border-radius: 5px;
                color: #fff;
                margin-right: 10px;
                cursor: pointer;
            }
        }
        /*内容*/
        .c-cnt {
            margin-top: 30px;
            min-height: 300px;
            margin-bottom: 30px;
            .c-up-img {
                position: relative;
                width: 200px;
                height: 210px;
                background: url("../img/up.png") 62px 40px no-repeat;
                border: 1px solid #e1e1e1;
                background-color: #fff;
                input {
                    width: 200px;
                    height: 210px;
                    opacity: 0;
                }
                p {
                    position: absolute;
                    bottom: 35px;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    color: #999;
                    font-size: 24px;
                }
            }
            .up-cnt {
                margin-top: 30px;
                .up-cnt-list {
                    position: relative;
                    width: 207px;
                    float: left;
                    margin-right: 30px;
                    &:nth-of-type(4n) {
                        margin-right: 0;
                    }
                    .up-list-i {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        width: 25px;
                        height: 25px;
                    }
                    .up-list-img {
                        width: 205px;
                        height: 205px;
                        border: 1px solid #e1e1e1;
                        vertical-align: bottom;
                    }
                    p {
                        display: block;
                        width: 100%;
                        height: auto;
                        text-align: center;
                        font-size: 22px;
                        margin: 20px 0 40px 0;
                        border: 0;
                        background-color: #F6F6F6;
                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
            .up-cnt-btn {
                text-align: center;
                button {
                    width: 290px;
                    height: 60px;
                    background-color: #3A71A8;
                    border: 0;
                    border-radius: 5px;
                    color: #fff;
                    font-size: 20px;
                }
            }
        }
    }
</style>