<template>
    <div id="app">
        <ul class="per-ul">
            <li><p>头像</p><div :style="{backgroundImage:`url(${personal.img})`}"><input type="file" @change="uptx" ref="c-tx" disabled></div></li>
            <li><p>昵称</p><input type="text" v-model="personal.nickname" disabled></li>
            <li><p>学员姓名</p><input type="text" v-model="personal.name" disabled></li>
            <li><p>身份证号码</p><input type="text" v-model="personal.id" disabled></li>
            <li>
                <p>性别</p>
                <input type="radio" name="sex" id="sex1" @click="personal.sex='男'" :checked="personal.sex=='男'?'checked':''" disabled><label for="sex1">男</label>
                <input type="radio" name="sex" id="sex2" @click="personal.sex='女'" :checked="personal.sex=='女'?'checked':''" disabled><label for="sex2">女</label>
            </li>
            <li><p>手机号码</p><input type="text" v-model="personal.phone" disabled></li>
            <li><p>联系地址</p><input type="text" v-model="personal.address" disabled></li>
            <li>
                <p>上传证件</p>
                <div class="clearfix">
                    <div class="c-show" v-for="item in photoAll"><img :src="item.img" alt=""></div>
                    <div class="c-up-img"><input type="file" multiple @change="upimg" ref="upimgel" disabled></div>
                </div>
            </li>
            <li><button v-show="!editstate" @click="editmsg">编辑资料</button><button v-show="editstate" @click="savebtn">保存</button></li>
        </ul>
    </div>
</template>
<script>
    import img from '../img/timg.jpg'
    export default {
        data(){
          return{
            editstate:false,
            /*数据修改标志位*/
            changestate:false,
            personal:{
              img:img,
              nickname:'mess',
              name:'李白',
              id:'666',
              sex:'男',
              phone:'666',
              address:'666'
            },
            photoAll:[]
          }
        },
      watch:{
        personal(){
            this.changestate=false;
        }
      },
      methods:{
        upphoto(el,fn){
          var maxsize = 2*1024*1024;
          var file = this.$refs[el].files;
          for(var j =0;j<file.length;j++){
            if(file[j].size>maxsize){
              this.$message.error('图片大小请限制在2M以内！');
              this.$refs[el].value='';
              return;
            }
          };
          for (var i = 0; i < file.length; i++) {
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file[i]);
            fileReader.onloadend = function (e) {
              var obj = {};
              obj.img = e.target.result;
              fn(obj);
            };
          }
        },
        uptx(){
           var self = this;
          this.upphoto('c-tx',function(obj){
            self.personal.img=obj.img;
          });
        },
        upimg() {
          var self = this;
            this.upphoto('upimgel',function (obj) {
              /*物理显示*/
              self.photoAll.push(obj);
              /*上传到后台*/
            });
        },
        savebtn(){
            if(changestate){
            /*数据修改发后台*/
            }else{
            /*数据没修改*/
            }
        },
        editmsg(){
          this.editstate = true;
            $('.per-ul li input').removeAttr('disabled');
          $('.per-ul').addClass('edit-cl');
        }
      }
    }
</script>
<style lang="less" scoped>
    #app{
        width: 980px;
        background-color: #f6f6f6;
        .per-ul{
            width: 100%;
            &.edit-cl{
                color: #999;
                input{
                    color: #999;
                }
            }
            li{
                height: 82px;
                line-height:82px;
                border-bottom: 1px solid #e1e1e1;
                input{
                    width: 650px;
                    height: 40px;
                    border: 0;
                    background-color: #F7F6F5;
                    font-size: 22px;
                }
                &:nth-last-of-type(1){
                    border: 0;
                }
                &:nth-of-type(5){
                    input{
                        width: 24px;
                        height: 24px;
                        -webkit-appearance:radio;
                        vertical-align: middle;
                        margin-right: 15px;
                        &:nth-of-type(2){
                            margin-left: 100px;
                        }
                    }
                }
                &:nth-of-type(8){
                    height: auto;
                    min-height: 270px;
                    p{
                        float: left;
                        margin-top: 30px;
                        vertical-align: top;
                    }
                    >div{
                        display: inline-block;
                        vertical-align: middle;
                        width: 680px;
                        margin-bottom: 30px;
                        >div:nth-of-type(3n){
                            margin-right: 0;
                        }
                        .c-show{
                            margin-top: 30px;
                            margin-right: 30px;
                            float: left;
                            width: 200px;
                            height: 200px;
                            img{
                                width: 200px;
                                height: 200px;
                                vertical-align: top;
                            }
                        }
                        .c-up-img {
                            margin-top: 30px;
                            margin-right: 30px;
                            float: left;
                            width: 200px;
                            height: 200px;
                            border: 1px solid #e1e1e1;
                            background: url("../img/up.png") 62px 62px no-repeat;
                            background-color: #fff;
                            input {
                                width: 200px;
                                height: 200px;
                                opacity: 0;
                            }
                        }
                    }
                }
                &:nth-of-type(9){
                    height: 240px;
                    line-height:240px;
                    text-align: center;
                    button{
                        display: inline-block;
                        width: 250px;
                        height: 60px;
                        background-color: transparent;
                        font-size: 28px;
                        border: 1px solid #999;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                }
                &:nth-of-type(1){
                    height: 140px;
                    line-height:140px;
                   >div{
                        display: inline-block;
                       background:url("../img/timg.jpg") no-repeat;
                       border-radius: 50%;
                       width: 100px;
                       height: 100px;
                       background-size: 100px 100px;
                       input{
                           width: 100px;
                           height: 100px;
                           vertical-align: middle;
                           opacity: 0;
                       }
                   }
                }
                p{
                    display: inline-block;
                    width: 240px;
                    font-size: 24px;
                    padding-left: 45px;
                }
            }
        }
    }
</style>