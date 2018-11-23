<style lang="less">
    @bdColor: #e1e1e1;
    .login {
        margin-top: 100px;
        height: 600px;
        h3 {
            text-align: center;
            font-size: 30px;
            margin-bottom: 40px;
        }
    }

    .onelist {
        margin-top: 30px;
        text-align: center;
        > p {
            display: inline-block;
            position: relative;
            font-size: 24px;
            span {
                position: absolute;
                left: -105px;
                line-height: 55px;
                width: 100px;
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
            }
        }
    }

    .cm-button {
        display: inline-block;
        width: 315px;
        height: 50px;
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

</style>
<template>
    <div>
        <ageHead></ageHead>

        <div class="g-content" ref="size">

            <div class="login">
                <h3>登录</h3>
                <div class="onelist"><p><span>手机号：</span><input type="text" placeholder="单行输入" v-model="phone"></p></div>
                <div class="onelist"><p><span>密码：</span><input type="password" placeholder="单行输入" v-model="pass"><a href="./find.html">忘记密码?</a>
                </p></div>
                <div class="c-button">
                    <button class="cm-button" @click="submitForm">登录</button>
                </div>
            </div>
        </div>
        <ageFoot></ageFoot>
    </div>
</template>
<script>

  import ageHead from 'components/ageHead';
  import ageFoot from 'components/ageFoot';

  export default {
    data() {
      return {
        phone: '',
        pass: '',
      }
    },
    mounted() {
    },
    methods: {
      //验证提交
      submitForm() {
        let phone = this.reg.checkPhone(this.phone);
        if(phone != 'ok'){
          this.$alert(phone, '提示', {
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

        let query = new this.Query();
        query.buildWhereClause('username',this.phone);
        query.buildWhereClause('password',this.pass);
        query.buildWhereClause('rememberMe',false);
        let param = query.getParam();
        this.until.post('/general/access/appLogin', param)
          .then(res => {
            if (res.status == 200) {
              sessionStorage.setItem('DD_token', JSON.stringify(res.data));
              location.href = '../home/index.html';
            } else {
              this.$alert(res.message, '提示', {
                confirmButtonText: '确定',
                callback: action => {
                }
              });
            }
          }, err => {
            this.$alert('登录失败!', '提示', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
          })
      },
    },
    components: {
      ageHead, ageFoot
    },
  }
</script>
