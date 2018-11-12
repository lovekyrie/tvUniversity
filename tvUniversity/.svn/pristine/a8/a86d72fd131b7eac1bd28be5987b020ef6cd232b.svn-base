<template>
    <div id="myTeam">
        <h3>{{myTeam}}</h3>
        <p>组长：4人 <span></span>组员：12人 <span></span>总学习星：555颗</p>
        <h3>成员列表</h3>
        <table>
            <thead>
            <tr>
                <th>姓名</th>
                <th>获学习星数量</th>
                <th>分类</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in list" :key="index">
                <td>{{item.nm}}</td>
                <td>{{item.star}}</td>
                <td>{{item.classify}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                myTeam:'测试组',
                list:[{
                    nm:'张',
                    star:150,
                    classify:'组员'
                },{
                    nm:'张',
                    star:150,
                    classify:'组员'
                },{
                    nm:'张',
                    star:150,
                    classify:'组员'
                },{
                    nm:'张',
                    star:150,
                    classify:'组员'
                },{
                    nm:'张',
                    star:150,
                    classify:'组员'
                },{
                    nm:'张',
                    star:150,
                    classify:'组员'
                },{
                    nm:'张',
                    star:150,
                    classify:'组员'
                },{
                    nm:'张',
                    star:150,
                    classify:'组员'
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
    #myTeam{
        h3{
            font-size: 24px;
            padding-left: 25px;
            padding-top: 30px;
        }
        p{
            padding-left: 25px;
            padding-top: 15px;
            span{
                padding-left: 50px;
            }
        }
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
                        width: 33%;
                    }
                    &:nth-child(2){
                        width: 33%;
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

                }
            }
        }
    }
</style>