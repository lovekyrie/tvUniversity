<template>
    <div id="container">
        <!--个人信息-->
        <div class="personalMsg">
            <div>
                <label>学员姓名 ：</label>
                <span>
                {{sName}}
            </span>
            </div>

            <div>
                <label>学员身份证号码 ：</label>
                <span>
                {{sIdCard}}
            </span>
            </div>

            <div>
                <label>学员学号 ：</label>
                <span>
                {{sId}}
            </span>

            </div>
            <div>
                <label>学员联系电话 ：</label>
                <span>
                {{sPhoneNum}}
            </span>
            </div>
        </div>

        <!--未缴费-->
        <div class="split">
            <span class="line"></span>
            <span class="inSplit">未缴费</span>
            <span class="line"></span>
        </div>
        <!--缴费信息-->
        <div class="payMsg" v-for="(item,i) in payMsg" :key="i">
            <span>课程名称 ：{{item.className}}</span>
            <span>缴费金额 ：<span style="color: red"> ¥ {{item.cost}}</span></span>
            <span>剩余时间 ：{{item.remainingTime}}</span>
            <button>去缴费</button>
        </div>

        <!--已缴费-->
        <div class="split">
            <span class="line"></span>
            <span class="inSplit" style="color: rgb(85,85,85)">已缴费</span>
            <span class="line"></span>
        </div>

        <div class="payMsg2" v-for="(item,i) in payMsg2">
            <span>课程名称 ：{{item.className}}</span>
            <span>缴费金额 ： ¥ {{item.cost}}</span>
        </div>





    </div>
</template>

<script>
    export default {
        data() {

            return {
                sName: '张国学',
                sIdCard: '323232198811013213',
                sId: '2018000001',
                sPhoneNum: '15022321325',

                payMsg:[
                    {
                        className:'中青年计算机培训',
                        cost:'600',
                        remainingTime:'21：22：12',
                    },{
                        className:'中青年计算机培训',
                        cost:'600',
                        remainingTime:'21：22：12',
                    },
                ],
                payMsg2:[
                    {
                        className:'中青年计算机培训',
                        cost:'600',
                    },
                ],

            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>