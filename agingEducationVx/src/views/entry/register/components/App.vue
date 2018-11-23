<template>
    <div id="container">
        <!--注册表单-->
        <div class="regForm">
            <div class="regName">
                <label>学员姓名 ：</label>
                <input type="text" v-model="regName" placeholder="请输入学员真实姓名">
            </div>
            <div class="regIdCard">
                <label>身份证号 ：</label>
                <input type="text" v-model="regIdCard" placeholder="请输入学员身份证号码">
            </div>
            <div class="sex">
                <label>学员性别 ：</label>
                <div class="inSex">
                    <mu-radio v-model="sex" value="male" label="男" color="#3a71a8"></mu-radio>
                    <mu-radio v-model="sex" value="female" label="女" color="#3a71a8"></mu-radio>
                </div>
            </div>
            <div class="regPhone">
                <label>手机号码 ：</label>
                <input type="text" v-model="regPhone" placeholder="请输入手机号码">
            </div>
            <div class="regCode">
                <label> 验证码 ：</label>
                <input class="inRegCode" type="text" v-model="regCode" placeholder="请输入验证码">
                <button class="regCodeBtn">发送验证码</button>
            </div>
            <div class="regPwd">
                <label>登录密码 ：</label>
                <input type="text" v-model="regPwd" placeholder="请输入登录密码">
            </div>

            <button>完成</button>
            <a href="./login.html">登录</a>
        </div>
        <span>*注 ：请填写学员本人真实信息</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                regName: '',
                regIdCard: '',
                sex: 'male',
                regPhone: '',
                regCode: '',
                regPwd: '',
            }
        }
    }
</script>

<style scoped>

</style>