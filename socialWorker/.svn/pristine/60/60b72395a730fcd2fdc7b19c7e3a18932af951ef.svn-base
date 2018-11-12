<template>
    <div id="sign">
        <table>
            <thead>
            <tr>
                <th>课程名称</th>
                <th>签到时间</th>
                <th>学习之星</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in list" :key="index">
                <td>{{item.courseNm}}</td>
                <td>{{item.signTime}}</td>
                <td>{{item.star}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                total:48,
                list:[{
                    courseNm:'中国茶文化与艺术-茶文化艺术',
                    star:150,
                    signTime:'2018-02-02 12:12:12',
                    type:'自主学习'
                },{
                    courseNm:'中国茶文化与艺术-茶文化艺术',
                    star:150,
                    signTime:'2018-02-02 12:12:12',
                    type:'自主学习'
                },{
                    courseNm:'中国茶文化与艺术-茶文化艺术',
                    star:150,
                    signTime:'2018-02-02 12:12:12',
                    type:'自主学习'
                },{
                    courseNm:'中国茶文化与艺术-茶文化艺术',
                    star:150,
                    signTime:'2018-02-02 12:12:12',
                    type:'自主学习'
                },{
                    courseNm:'中国茶文化与艺术-茶文化艺术',
                    star:150,
                    signTime:'2018-02-02 12:12:12',
                    type:'自主学习'
                },{
                    courseNm:'中国茶文化与艺术-茶文化艺术',
                    star:150,
                    signTime:'2018-02-02 12:12:12',
                    type:'自主学习'
                },{
                    courseNm:'中国茶文化与艺术-茶文化艺术',
                    star:150,
                    signTime:'2018-02-02 12:12:12',
                    type:'自主学习'
                },]
            }
        },
        mounted() {

        },
        methods: {

        },
        components: {
        }
    }
</script>
<style lang="less" scoped>
    #sign{
        table{
            width: 940px;
            margin: 20px auto;
            background: #ffffff;
            border: 1px solid #e1e1e1;
            thead{
                th{
                    color: #666666;
                    font-size: 18px;
                    height: 86px;
                    font-weight: normal;
                    text-align: center;
                    &:first-child{
                        width: 50%;
                        text-align: left;
                        padding-left: 25px;
                    }
                    &:nth-child(2){
                        width: 30%;
                    }
                    &:nth-child(3){
                        width: 20%;
                    }
                }
            }
            tr{
                border: 1px solid #e1e1e1;
                &:last-child{
                    border-bottom: 0;
                }
                td{
                    text-align: center;
                    font-size: 18px;
                    height: 86px;

                    &:first-child{
                        padding-left: 25px;
                        text-align: left;
                    }
                }
            }
        }
    }
</style>