<template>
    <div id="container">
        <div class="icon">
            <img src="../img/签到成功.png">
            <span>签到成功</span>
        </div>

        <!--信息-->
        <div class="checkInMsg">
            <span>姓名 ：{{name}}</span>
            <span>班级 ：{{classes}}</span>
            <span>身份证号 ：{{idCard}}</span>
            <span>手机号 ：{{phoneNum}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){

            return{
                name:'朱波',
                classes:'2018基础班',
                idCard:'340000199910098972',
                phoneNum:'15023322391',
            }
        }
    }
</script>

<style scoped>

</style>