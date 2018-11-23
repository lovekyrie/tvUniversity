<template>
    <div id="container">

        <div class="headImg">
            <img src="../img/签到.png" alt="背景图">
        </div>
        <input v-model="phoneNum" placeholder="请输入手机号签到">
        <button @click="confirm">确认签到</button>
        <mu-dialog width="60%" :open.sync="openSimple">
            <span style="font-size: 1.2rem">无此信息 ，请确认手机号是否正确</span>
        </mu-dialog>
    </div>
</template>

<script>
    export default {
        data(){

            return{
                phoneNum:'',
                openSimple:false,
            }
        },
        methods:{
            //验证手机号码是否存在
            confirm(){
                this.openSimple=true;
            }
        }
    }
</script>

<style scoped>

</style>