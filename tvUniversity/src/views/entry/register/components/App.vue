<template>
    <div id="container">
        <myHeader></myHeader>
        <div class="box">
            <h3>注册</h3>
            <el-form ref="form" :rules="rules" :model="form" label-width="120px">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="身份证号码" prop="ID">
                    <el-input v-model="form.ID"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" prop="telPhone">
                    <el-input v-model="form.telPhone"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code" class="code">
                    <el-input v-model="form.code"></el-input><button>发送验证码</button>
                </el-form-item>
                <el-form-item label="密码" prop="passWord">
                    <el-input v-model="form.passWord"></el-input>
                </el-form-item>
                <el-form-item label="再次输入密码" prop="checkPass">
                    <el-input v-model="form.checkPass"></el-input>
                </el-form-item>

                <el-form-item label="性别">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="学历">
                    <el-select v-model="form.region" placeholder="请选择学历">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="住址">
                    <el-input v-model="form.add"></el-input>
                </el-form-item>
                <el-form-item label="工作单位">
                    <el-input v-model="form.unit"></el-input>
                </el-form-item>
                <el-checkbox v-model="checked">我已经看过并同意《老年人学习网站实用协议》</el-checkbox>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">注册</el-button>
                    <el-button @click="resetForm('form')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!--注册成功弹出框-->
        <el-dialog
                title=""
                :visible.sync="dialogVisible"
                width="30%"
                >
            <img src="../img/success.png"/>
            <span>注册成功！</span>
        </el-dialog>
        <myFooter></myFooter>
    </div>
</template>
<script>
    import myHeader from "@/components/myHeader"
    import myFooter from "@/components/myFooter"
    import ImageClipper from "../../../../hero/components/test";
  export default {
    data() {
        //身份证号码
        var validateID = (rule, value, callback) => {

            if (!value) {
                callback(new Error('请输入身份证号码'));
                console.log('111111111111')
            } else {
                //15位数身份证正则表达式
                let arg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
                //18位
                let arg2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/;
                if (value.match(arg1) == null && value.match(arg2) == null){
                    callback(new Error('请输入正确的身份证号码！'));
                    return;
                }
                callback();
            }
        };
        //手机号码
        var validateTelPhone = (rule, value, callback) => {
            if (!value) {

                callback(new Error('请输入手机号码'));
            } else {
                let regPhone = /^(((13[0-9]{1})|(14[0-9]{1})||(15[0-9]{1})|17[0-9]{1}|(18[0-9]{1}))+\d{8})$/;
                if (!regPhone.test(value)){
                    callback(new Error('请输入正确的手机号码！'));
                    return;
                }
                callback();
            }
        };
        //密码
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                var re = new RegExp(/^[a-zA-Z0-9]{6,20}$/);       // ^表示开始  $表示结束
                if (!re.test(value)){
                    callback(new Error('用户密码必须为数字或字母，只能为6~20位！'));
                    return;
                }
                if (this.form.checkPass !== '') {
                    this.$refs.form.validateField('checkPass');
                }
                callback();
            }
        };
        //校验密码
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.form.passWord) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
      return {
          checked:false,
          dialogVisible:false, //注册成功弹出
          form:{
                name:'',
          },
          rules: {
              name: [
                  { required: true, message: '请填写您的真实姓名', trigger: 'blur' },
                  { min: 2, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              code: [
                  { required: true, message: '请填写验证码', trigger: 'blur' },
              ],
              ID: [
                  { required: true, validator: validateID, trigger: 'blur' },
              ],
              telPhone: [
                  { required: true, validator: validateTelPhone, trigger: 'blur' },
              ],
              passWord: [
                  { required: true, validator: validatePass, trigger: 'blur' },
              ],
              checkPass: [
                  { required: true,validator: validatePass2, trigger: 'blur' }
              ],
          }
      }
    },
      components:{
          ImageClipper,
          myHeader,myFooter
      },
    mounted() {

    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.dialogVisible = true
                    setTimeout(()=>{
                        window.location.href = 'login.html'
                    },1500)

                } else {

                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
  }
</script>