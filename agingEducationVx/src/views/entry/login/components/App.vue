<template>
    <div id="container">
        <!--登录表单-->
        <div class="phoneForm">
            <div class="Pid">
                <label>手机号码 ：</label>
                <input type="text" v-model="Pid" placeholder="请输入手机号码">
            </div>
            <div class="Ppwd">
                <label>登录密码 ：</label>
                <input type="password" v-model="Ppwd" placeholder="请输入登录密码">
            </div>
            <!--登录按钮-->
            <button>登录</button>

            <a href="./register.html">注册</a>
        </div>
        <!--授权登录-->
        <div class="authorization">
            <a href="#">
                <img src="../img/授权登录.png" alt="图片">
                <span>授权登录</span>
            </a>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                Pid: '',
                Ppwd: '',
            }
        }
    }
</script>

<style scoped>

</style>