<template>
    <div id="container">
        <div class="classType">
            <select v-model="classType">
                <option value="1">全部消息</option>
                <option value="2">已读</option>
                <option value="3">未读</option>
            </select>
        </div>
        <div class="tidings" v-for="item in tidings" @click="toDetail(item.id)">
            <div class="tiding">
                <ul>
                    <span :class="item.val==1?'block1':'none0'"> · </span>
                    <li>{{item.title}}</li>
                </ul>
                <span>{{item.time}}</span>

            </div>

            <div class="arrow">
                <span> > </span>
            </div>

        </div>


    </div>
</template>

<script>
    export default {
        data() {

            return {
                classType: '1',


                tidings: [
                    {
                        id: '0',
                        val: '1',
                        title: '您报名的计算机一期项目审核通过',
                        time: '09:41',
                    }, {
                        id: '1',
                        val: '0',
                        title: '您报名的计算机一期项目审核通过',
                        time: '09:41',
                    },
                ]

            }
        },
        methods:{
            toDetail(id){
                window.location.href='tidingDetail.html';
            }
        }
    }
</script>

<style scoped>

</style>