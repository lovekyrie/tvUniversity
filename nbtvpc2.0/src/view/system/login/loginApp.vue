<template>
  <div>
    <AllHead></AllHead>

    <div class="g-content" ref="size">

      <div class="login">

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <h3>登录</h3>
          <el-form-item  prop="phone">
            <span>手机号：</span>
            <el-input v-model="ruleForm.phone" placeholder="请输入手机号" type="text"></el-input>
          </el-form-item>

          <el-form-item  prop="pass">
            <span>密码：</span>
            <el-input v-model="ruleForm.pass" placeholder="请输入密码" type="password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            <a href="./find.html">忘记密码？</a>
          </el-form-item>

          <el-form-item>

            <el-button  type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>

        </el-form>
      </div>

    </div>

    <McFoot></McFoot>

  </div>
</template>
<script>

    import AllHead from 'components/allHead';
    import McFoot from 'components/McFoot';

    export default {

        data() {
            var validatePhone=(rule, value, callback)=> {
                var re= /^[1][3,4,5,7,8][0-9]{9}$/;
                if(!value||!re.test(value)){
                    callback(new Error('请输入正确手机号码'));
                }else {
                    callback();
                }
            }
            return {

                ruleForm: {
                    phone: '',
                    pass: '',
                },
                rules: {
                    phone: [
                        { validator: validatePhone, trigger: 'blur' }
                    ],
                    pass: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                }
            }
        },
        //相关操作事件
        methods: {
            //验证提交
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                      var param = {
                        username:this.ruleForm.phone,
                        password:this.ruleForm.pass
                      }
                      this.until.post('/general/access/appLogin',param)
                        .then(res => {
                          if(res.status == 200){
                            sessionStorage.setItem('DD_token',JSON.stringify(res.data));
                            location.href = '../home/index.html';
                          }else{
                            this.$message.error(res.message);
                          }
                        });

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },

        },
        mounted () {


        },
        components: {
            AllHead,McFoot
        },
    }
</script>



<style scoped lang="less">


</style>