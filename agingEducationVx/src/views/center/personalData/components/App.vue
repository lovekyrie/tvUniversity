<template>
    <div id="container">
        <div class="headImg">
            <span>头像</span>
            <div class="aImg">
                <img :src="aImg" alt="头像">
            </div>
        </div>

        <div class="nickName">
            <span>昵称</span>
            <span>{{nickName}}</span>
        </div>
        <div class="aName">
            <span>学员姓名</span>
            <span>{{aName}}</span>
        </div>
        <div class="idCard">
            <span>身份证号码</span>
            <span>{{idCard}}</span>
        </div>
        <div class="sex">
            <span>性别</span>
            <span>
                <mu-radio v-model="sex" value="male" label="男" color="#3a71a8"></mu-radio>
                <mu-radio v-model="sex" value="female" label="女" color="#3a71a8"></mu-radio>
            </span>
        </div>
        <div class="phoneNum">
            <span>手机号码</span>
            <span>{{phoneNum}}</span>
        </div>
        <div class="cAddress">
            <span>联系地址</span>
            <span>{{cAddress}}</span>
        </div>
        <div class="certification">
            <span>上传证件照</span>
            <div class="upper" @click="upCer">
                <img src="../img/个人资料_上传.png">
                <input id="upInput" type="file" style="opacity: 0;display: none">
            </div>

        </div>
        <div class="saveBtn">
            <button>保存</button>
        </div>

    </div>

</template>

<script>
    export default {
        data(){
            return{
                aImg:require('../img/头像.png'),
                nickName:'小张',
                aName:'张三',
                idCard:'333333199911111191',
                sex:'male',
                phoneNum:'15055002232',
                cAddress:'浙江省宁波市'
            }
        },
        methods:{
            upCer(){
                upInput.click();
            }
        }
    }
</script>

<style scoped>

</style>