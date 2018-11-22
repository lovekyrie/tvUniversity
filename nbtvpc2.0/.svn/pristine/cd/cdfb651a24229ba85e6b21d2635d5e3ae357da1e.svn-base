<template>
  <div>
    <AllHead></AllHead>

    <div class="g-content" ref="size">

      <div class="login">

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <h3>注册</h3>
          <el-form-item  prop="name">
            <span>姓名：</span>
            <el-input v-model="ruleForm.name" placeholder="请输入您的真实姓名" type="text"></el-input>
          </el-form-item>
          <el-form-item  prop="card">
            <span>身份证号：</span>
            <el-input v-model="ruleForm.card" placeholder="请输入您的身份证" type="text"></el-input>
          </el-form-item>
          <el-form-item  prop="radio" >
            <span>性别：</span>
            <el-radio-group v-model="ruleForm.radio">
              <el-radio label="1">男</el-radio>
              <el-radio label="2">女</el-radio>
            </el-radio-group>

          </el-form-item>
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
            <el-input v-model="ruleForm.checkPass" placeholder="请再次输入密码" type="password"></el-input>

          </el-form-item>

          <el-form-item  prop="checked">
            <el-checkbox v-model="ruleForm.checked">我已经看过并同意《老年人学习网站实用协议》</el-checkbox>

          </el-form-item>

          <span class="m-button m-button2"  @click="">{{ruleForm.tyzm}}</span>

          <el-form-item>

            <el-button  type="primary" @click="submitForm('ruleForm')">确定</el-button>
          </el-form-item>


        </el-form>
      </div>


      <el-dialog  :visible.sync="dialogTableVisible">

        <img src="./img/true.jpg" alt="">
        <h2>注册成功！</h2>

      </el-dialog>

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
            var validateCard=(rule, value, callback)=> {
                //15位数身份证正则表达式
                let re1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
                //18位数身份证正则表达式
                let re2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/;
                if (value.match(re1) == null && value.match(re2) == null){
                    callback(new Error('请输入正确身份证号'));
                }else {
                    callback();
                }
            }
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
                dialogTableVisible:false,
                text:'发送验证码',
                ruleForm: {
                    name:'',
                    card:'',
                    radio:'',
                    phone: '',
                    yzm:'',
                    pass: '',
                    checkPass:'',
                    checked:false
                },
                rules: {
                    name: [
                        { required: true, message: '请输入您的真实姓名', trigger: 'blur' },
                    ],
                    card: [
                        { validator: validateCard, trigger: 'blur' }
                    ],
                    radio: [
                        { required: true, message: '请选择性别', trigger: 'change' },
                    ],
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
                    checked: [
                        { required: true, message: '请先勾选', trigger: 'change' },
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
                        if(res.status != 200){
                           this.$message.error('获取失败');
                        }else{
//                            console.log('获取成功')
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
//                        console.log(err);
                    })
                }
            },

            //验证提交
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                      let param = {
                        name:this.ruleForm.name,
                        idCard:this.ruleForm.card,
                        sex:this.ruleForm.radio,
                        phone:this.ruleForm.phone,
                        code:this.ruleForm.yzm,
                        password:this.ruleForm.pass
                      }
                      this.until.post('/general/access/register',param)
                        .then(res=>{
                          if(res.status == 200){
                            setTimeout(()=>{
                              location.href = './login.html';
                            },2000);
                          }else{
                            this.$message.error(res.message);
                          }
                        })
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