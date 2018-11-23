<style lang="less">
  @bdColor: #e1e1e1;
  .login {
    margin-top: 100px;
    height: 800px;
    h3 {
      text-align: center;
      font-size: 30px;
      margin-bottom: 40px;
    }
  }

  .onelist {
    margin-top: 30px;
    text-align: center;
    height: 53px;
    line-height:53px;
    > p {
      display: inline-block;
      position: relative;
      font-size: 24px;
      span {
        position: absolute;
        left: -305px;
        line-height: 55px;
        width: 300px;
        text-align: right;
      }
      a {
        font-size: 20px;
        color: #537FAF;
        position: absolute;
        right: -125px;
        line-height: 55px;
      }
      input {
        height: 53px;
        width: 315px;
        border: 1px solid @bdColor;
        text-indent: 20px;
        vertical-align: middle;
      }
    }
  }

  .onelist {
    margin-top: 30px;
    text-align: center;
    height: 53px;
    line-height:53px;
    > p {
      display: inline-block;
      position: relative;
      font-size: 24px;
      span {
        position: absolute;
        left: -305px;
        line-height: 55px;
        width: 300px;
        text-align: right;
      }
      a {
        font-size: 20px;
        color: #537FAF;
        position: absolute;
        right: -125px;
        line-height: 55px;
      }
      input {
        height: 53px;
        width: 315px;
        border: 1px solid @bdColor;
        text-indent: 20px;
        vertical-align: middle;
      }
    }
  }

  .onelist-s {
    margin-top: 30px;
    text-align: center;
    > p {
      display: inline-block;
      position: relative;
      width: 315px;
      font-size: 24px;
      height: 53px;
      line-height:53px;
      span {
        position: absolute;
        left: -305px;
        line-height: 55px;
        width: 300px;
        text-align: right;
      }
      a {
        font-size: 20px;
        color: #537FAF;
        position: absolute;
        right: -125px;
        line-height: 55px;
      }
      input {
        width: 20px;
        height: 20px;
        -webkit-appearance: radio;
        &:nth-of-type(1){
          margin-left: 0;
        }
      }
    }
  }


  .cm-button {
    display: inline-block;
    width: 315px;
    height: 50px;
    line-height: 50px;
    border: 0;
    color: #fff;
    background-color: #3a71a8;
    font-size: 22px;
    cursor: pointer;
    border-radius: 5px;
  }

  .c-button {
    margin-top: 80px;
    text-align: center;
  }

  .yzmbtn {
    height: 53px;
    width: 95px;
    border: 1px solid #e1e1e1;
    background-color: #fff;
    font-size: 16px;
    margin-left: 20px;
    vertical-align: middle;
    cursor: pointer;
  }

  .size {
    h3 {
      font-size: 34px !important;
    }
    span {
      font-size: 24px !important;
    }
    input {
      font-size: 24px !important;
    }
    .cm-button {
      font-size: 24px !important;
    }
  }
</style>
<template>
  <div>
    <ageHead></ageHead>

    <div class="g-content" ref="size">

      <div class="login">
        <h3>找回密码</h3>
        <div class="onelist"><p><span>手机号：</span><input type="text" placeholder="单行输入" v-model="phone"></p>
        </div>
        <div class="onelist">
          <p><span>验证码：</span><input type="text" placeholder="单行输入" v-model="yzm" style="width: 200px;">
            <button class="yzmbtn" ref="yzm" @click="getYzm">发送验证码</button>
          </p>
        </div>
        <div class="onelist"><p><span>密码：</span><input type="password" placeholder="单行输入" v-model="pass"></p>
        </div>
        <div class="onelist"><p><span>再次输入密码：</span><input type="password" placeholder="单行输入" v-model="checkPass">
        </p></div>
        <div class="c-button">
          <div class="cm-button" @click="submitForm">确定</div>
        </div>
      </div>

      <el-dialog :visible.sync="dialogTableVisible">
        <img src="./img/true.jpg" alt="">
        <h2>修改成功！</h2>
      </el-dialog>
    </div>
    <ageFoot></ageFoot>
  </div>
</template>
<script>
  import Lib from 'assets/js/Lib';
  import ageHead from 'components/ageHead';
  import ageFoot from 'components/ageFoot';

  export default {
    data() {
      return {
        dialogTableVisible: false,
        phone: '',
        yzm: '',
        pass: '',
        checkPass: '',
      }
    },
    methods: {
      getYzm() {
        if(this.phone == ''){
          this.$alert('手机号码不能为空', '提示', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return;
        }
        this.countdown(this.$refs.yzm,50);
        this.axios.get('/general/sms/sendCode', {
          params: {
            phone: this.phone,
          }
        }).then(res => {
          if (res.status != 200) {
            this.$alert('验证码获取失败！', '提示', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
          }
        })
      },
      //验证提交
      submitForm(formName) {
        let phone = this.reg.checkPhone(this.phone);
        if(phone != 'ok'){
          this.$alert(phone, '提示', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return;
        }
        if(this.yzm == ''){
          this.$alert('验证码不能为空', '提示', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return;
        }
        if(this.pass == ''){
          this.$alert('密码不能为空', '提示', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return;
        }
        if(this.pass != this.checkPass){
          this.$alert('两次密码不相同', '提示', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          return;
        }
        let param = {
          phone: this.phone,
          code: this.yzm,
          password: this.pass
        }
        this.until.post('/general/access/forgetPwd', param)
          .then(res => {
            if (res.status == 200) {
              this.dialogTableVisible = true;
              setTimeout(() => {
                location.href = './login.html';
              }, 2000);
            } else {
              this.$alert(res.message, '提示', {
                confirmButtonText: '确定',
                callback: action => {
                }
              });
            }
          });
      },
      /*验证码倒计时*/
      countdown(el,count){
        let timer =  setInterval(()=>{
          if(count == 0){
            el.innerHTML=`重新获取`;
            el.removeAttribute('disabled');
            clearInterval(timer);
          }else{
            count--;
            el.innerHTML=`( ${count} )`;
            el.setAttribute('disabled',true);
          }
        },1000);
      }
    },
    components: {
      ageHead, ageFoot
    }
  }
</script>


