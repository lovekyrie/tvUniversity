<template>
    <div id="container">

        <div class="tiding">
            <div class="payMsg">
                <label>学员身份证号码 ：</label>
                <input v-model="idCard" placeholder="单行输入">
            </div>
            <div class="payBtn">
                <button>提交</button>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        data() {

            return {
                idCard:'',

            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>