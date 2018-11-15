<template>
    <div id="container">
        <myHeader></myHeader>
        <div class="box">
            <h3>登录</h3>
            <div class="b-input">
                <p>用户名：</p>
                <input type="text" placeholder="请输入用户名：" v-model="userName">
            </div>
            <div class="b-input">
                <p>登陆密码：</p>
                <input type="password" placeholder="请输入登录密码" v-model="psd">
            </div>
            <p class="b-btn" @click="submit">登陆</p>
            <p class="b-rs"><a href="./register.html">注册</a><a href="forgotPassWord.html">忘记密码？</a> </p>
        </div>
        <!--成功弹出框-->
        <el-dialog title="" :visible.sync="dialogVisible" width="30%">
          <img src="../img/success.png"/>
          <span>登录成功！</span>
        </el-dialog>
        <myFooter></myFooter>
    </div>
</template>
<script>
import myHeader from "@/components/myHeader"
import myFooter from "@/components/myFooter"
  export default {
    data() {
      return {
        userName:'',
        psd:'',
        personInfo:{},
        dialogVisible:false,
      }
    },
      components:{
          myHeader,myFooter
      },
    mounted() {
    },
    methods: {
        submit(){
            
            let param={
              userName:this.userName,
              passWord:this.psd
            };

            this.until.post(this.hostUrl+'prod/dent/login',param).then(
              res=>{
                if(res.status==='200'){

                    this.personInfo=res.data.userInfo;
                    this.until.loSave('isLogin',true)
                    sessionStorage.setItem('DD_token',JSON.stringify(res.data));
                }
                else{
                  console.log('返回码不是200')
                }
              },
              err=>{
                console.log('方法调用失败！')
              }
            )

            this.dialogVisible = true
            setTimeout(()=>{
                window.location.href = '../center/index.html'
            },1500)
        }
    },
  }
</script>
