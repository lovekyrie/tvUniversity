<template>
    <div id="container">
        <myHeader></myHeader>
        <div class="box">
            <div class="b-input">
              <p></p>
              <div>
                <span></span>
                <h3>登录</h3>
                <span></span>
              </div>
              <p></p>
            </div>
            <div class="b-input">
                <p>手机码：</p>
                <div>
                   <input type="text" placeholder="单行输入" v-model="phone">
                </div>
                 <p></p>
            </div>
            <div class="b-input">
                <p>密码：</p>
                <div>
                  <input type="password" placeholder="单行输入" v-model="psd">
                </div>
                <p><a href="forgotPassWord.html">忘记密码？</a></p> 
            </div>
           <div class="b-input">
                <p></p>
                <div>
                   <input type="button" value="登录">
                </div>
                <p></p>
           </div>
        </div>
        <!--成功弹出框-->
        <el-dialog
                title=""
                :visible.sync="dialogVisible"
                width="30%"
        >
            <img src="../img/success.png"/>
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
    return {
      phone: "",
      psd: "",
      dialogVisible: false
    };
  },
  components: {
    myHeader,
    myFooter
  },
  mounted() {},
  methods: {
    submit() {
      this.dialogVisible = true;
      setTimeout(() => {
        window.location.href = "../center/index.html";
      }, 1500);
    }
  }
};
</script>
