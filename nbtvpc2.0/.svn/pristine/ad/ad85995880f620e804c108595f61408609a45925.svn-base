<template>
  <div>
    <AllHead></AllHead>

    <div class="g-content" ref="size">

      <div class="crumb"><a href="../home/index.html">首页</a><span>&nbsp;&gt;&nbsp;</span><a href="./index.html">精彩活动</a><span>&nbsp;&gt;&nbsp;</span><a href="javascript:void(0)">活动详情</a></div>

      <div class="login">

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <h3>填写个人信息</h3>

          <el-form-item  prop="name">
            <span>姓名：</span>
            <el-input v-model="ruleForm.name" placeholder="请输入姓名" type="text"></el-input>
          </el-form-item>

          <el-form-item  prop="phone">
            <span>手机号：</span>
            <el-input v-model="ruleForm.phone" placeholder="请输入手机号" type="text"></el-input>
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
      var validateNmae = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名'));
        } else {
          callback();
        }
      };
      return {

        ruleForm: {
          phone: '',
          name: ''
        },
        rules: {
          phone: [
            { validator: validatePhone, trigger: 'blur' }
          ],
          name: [
            { validator:validateNmae, trigger: 'blur' }
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

            this.axios.get(Lib.C.url_mc+'/mall/sys/appDoor/loginForPc',{
              params:{
                username:this.ruleForm.name,
                phone:this.ruleForm.phone,
              }
            })
              .then(res=>{
                console.log(res.data);

                //window.location.href='index.html';

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
  .crumb{
    padding: 30px 0;
    padding-left: 30px;
    color: #999;
    a{
      color: #999;
      &:nth-last-of-type(1){
        cursor: inherit;
      }
    }
  }

</style>