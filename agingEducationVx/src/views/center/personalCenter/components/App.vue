<template>
    <div id="container">
        <div class="headImg">
            <img :src="imgMsg" alt="头像">
            <span>{{account}}</span>
        </div>

        <!--下半部分功能选择-->
        <div class="funcSelect">
            <a :href="item.address" v-for="(item,i) in funcs" :key="i">
                <img :src="item.url">
                <span>{{item.tag}}</span>
            </a>
        </div>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                account: '15224411235',
                imgMsg: require('../img/默认头像.png'),
                funcs: [
                    {
                        address:'./personalData.html',
                        url: require('../img/个人资料.png'),
                        tag: '个人资料',
                    }, {
                        address:'',
                        url: require('../img/签到记录.png'),
                        tag: '签到记录',
                    }, {
                        address:'',
                        url: require('../img/我的班级.png'),
                        tag: '我的班级',
                    }, {
                        address:'',
                        url: require('../img/我的证书.png'),
                        tag: '我的证书',
                    }, {
                        address:'',
                        url: require('../img/消息中心.png'),
                        tag: '消息中心',
                    },
                ],

            }
        }
    }
</script>

<style scoped>

</style>