<template>
    <div id="container">
        <div class="classType">
            <select v-model="classType">
                 <option value="1">课程名称</option>
            </select>
        </div>

        <!--签到表-->
        <mu-data-table :columns="columns" :data="list">
            <template slot-scope="scope">
                <td class="is-center"><span style="font-size: 1.2rem">{{scope.row.className}}</span></td>
                <td class="is-center"><span style="font-size: 1.2rem">{{scope.row.record}}</span></td>
            </template>
        </mu-data-table>

    </div>
</template>

<script>
    export default {
        data(){

            return{
                classType:'1',

                columns:[
                    {title:'课程名称',align:'center',name:'className'},
                    {title:'签到时间',align:'center',name:'record'}
                ],
                list:[
                    {
                        className:'计算机基础',
                        record:'2017.11.16 12:00'
                    },{
                        className:'计算机基础',
                        record:'2017.11.16 12:00'
                    },{
                        className:'计算机基础',
                        record:'2017.11.16 12:00'
                    },{
                        className:'计算机基础',
                        record:'2017.11.16 12:00'
                    },{
                        className:'计算机基础',
                        record:'2017.11.16 12:00'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>