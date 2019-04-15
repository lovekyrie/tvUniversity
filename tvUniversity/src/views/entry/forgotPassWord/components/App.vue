<template>
  <div id="container">
    <myHeader></myHeader>
    <div class="box">
      <h3>找回密码</h3>
      <el-form ref="form" :rules="rules" :model="form" label-width="120px">
        <el-form-item label="手机号码" prop="telPhone">
          <el-input v-model="form.telPhone"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code" class="code">
          <el-input v-model="form.code"></el-input>
          <button>发送验证码</button>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input v-model="form.passWord"></el-input>
        </el-form-item>
        <el-form-item label="再次输入密码" prop="checkPass">
          <el-input v-model="form.checkPass"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--注册成功弹出框-->
    <el-dialog title :visible.sync="dialogVisible" width="30%">
      <img src="../img/success.png">
      <span>登录成功！</span>
    </el-dialog>
    <myFooter></myFooter>
  </div>
</template>
<script>
import myHeader from "@/components/myHeader";
import myFooter from "@/components/myFooter";
export default {
  data() {
    //手机号码
    var validateTelPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入手机号码"));
      } else {
        let regPhone = /^(((13[0-9]{1})|(14[0-9]{1})||(15[0-9]{1})|17[0-9]{1}|(18[0-9]{1}))+\d{8})$/;
        if (!regPhone.test(value)) {
          callback(new Error("请输入正确的手机号码！"));
          return;
        }
        callback();
      }
    };
    //密码
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        var re = new RegExp(/^[a-zA-Z0-9]{6,20}$/); // ^表示开始  $表示结束
        if (!re.test(value)) {
          callback(new Error("用户密码必须为数字或字母，只能为6~20位！"));
          return;
        }
        if (this.form.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    //校验密码
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.passWord) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      checked: false,
      dialogVisible: false, //注册成功弹出
      form: {
        name: ""
      },
      rules: {
        code: [{ required: true, message: "请填写验证码", trigger: "blur" }],
        telPhone: [
          { required: true, validator: validateTelPhone, trigger: "blur" }
        ],
        passWord: [
          { required: true, validator: validatePass, trigger: "blur" }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  components: {
    myHeader,
    myFooter
  },
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogVisible = true;
          setTimeout(() => {
            window.location.href = "../center/index.html";
          }, 1500);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>