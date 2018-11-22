<template>
  <div>
    <AllHead></AllHead>

    <div class="g-content" ref="size">

      <div class="login">

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <h3>找回密码</h3>
          <el-form-item  prop="phone">
            <span>手机号：</span>
            <el-input v-model="ruleForm.phone" placeholder="请输入手机号码" type="text"></el-input>
          </el-form-item>

          <el-form-item  prop= "yzm">
            <span>验证码：</span>
            <el-input v-model="ruleForm.yzm" placeholder="请输入验证码" type="text" class="yzm"></el-input>
            <ins  @click="getYzm">{{text}}</ins>
          </el-form-item>

          <el-form-item  prop="pass">
            <span>密码：</span>
            <el-input v-model="ruleForm.pass" placeholder="请输入密码" type="password"></el-input>

          </el-form-item>

          <el-form-item  prop="checkPass">
            <span>再次输入密码：</span>
            <el-input v-model="ruleForm.checkPass" placeholder="请再次输入密码" type="password"  @keyup.enter.native="submitForm('ruleForm')"></el-input>

          </el-form-item>

          <el-form-item>

            <el-button  type="primary" @click="submitForm('ruleForm')">确定</el-button>
          </el-form-item>


        </el-form>
      </div>

    </div>

    <McFoot></McFoot>

  </div>
</template>
<script>
    import Lib from 'assets/js/Lib';
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
            var validatePass = (rule, value, callback) => {
                var re=/^[0-9A-Za-z]{6,10}$/
                if (!value) {
                    callback(new Error('请输入密码'));
                } else if(!re.test(value)){
                    callback(new Error('密码必须由6-20位字母或数字组成'));
                }else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {

                text:'发送验证码',
                ruleForm: {
                    phone: '',
                    yzm:'',
                    pass: '',
                    checkPass:'',
                },
                rules: {
                    phone: [
                        { validator: validatePhone, trigger: 'blur' }
                    ],
                    yzm: [
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                    ],
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                }
            }
        },
        //相关操作事件
        methods: {

            //获取验证码
            getYzm(){
                var This=event.target;
                if(this.text!='发送验证码'){
                    return false
                }
                if(!this.ruleForm.phone||this.reg.checkPhone(this.ruleForm.phone)!='ok'){
                    this.$alert('请输入正确手机号码', {
                        confirmButtonText: '确定',
                    });

                }else if(this.reg.checkPhone(this.ruleForm.phone)=='ok'){
                    this.axios.get('/general/access/sendCode',{
                      params:{
                        phone: this.ruleForm.phone,
                      }
                    }).then(res=>{
                      console.log(res);
                      if(res.status != 200){
                          this.$message.error('获取失败');
                        }else{
                            console.log('获取成功')
                            var curCount=30;
                            this.text='重新获取'+curCount;
                            This.style.background='#ddd';
                            var timer=setInterval(()=>{
                                curCount--;
                                this.text='重新获取'+curCount;
                                if(curCount<0){
                                    this.text='获取验证码';
                                    This.style.background='#fff';
                                    clearInterval(timer)
                                }
                            },1000)
                        }
                    }).catch(err=> {
                        var curCount=30;
                        this.text='重新获取'+curCount;
                        This.style.background='#ddd';
                        var timer=setInterval(()=>{
                            curCount--;
                            this.text='重新获取'+curCount;
                            if(curCount<0){
                                this.text='获取验证码';
                                This.style.background='#fff';
                                clearInterval(timer)
                            }
                        },1000)
                        console.log(err);
                    })
                }
            },


            //验证提交
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.until.post('/general/access/forgetPwd',{
                                phone:this.ruleForm.phone.toString(),
                                password:this.ruleForm.pass.toString(),
                                code:this.ruleForm.yzm.toString(),
                        })
                            .then(res=>{
                                if(res.status == 200){
                                  window.location.href='./login.html';

                                }
                            }).catch(err=>{
                            console.log(err);
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },


        },
        computed: {


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