<template>
    <div id="container">
        <div class="classType">
            <select v-model="projectType">
                 <option value="1">项目名称</option>
            </select>
            <select v-model="classType">
                 <option value="1">课程名称</option>
            </select>
        </div>

        <!--签到表-->
        <mu-data-table :columns="columns" :data="list">
            <template slot-scope="scope">
                <td class="is-center"><span style="font-size: 1rem">{{scope.row.projectName}}</span></td>
                <td class="is-center"><span style="font-size: 1rem">{{scope.row.className}}</span></td>
                <td class="is-center"><span style="font-size: 1rem">{{scope.row.record}}</span></td>
            </template>
        </mu-data-table>

    </div>
</template>

<script>
    export default {
        data(){

            return{
                projectType:'1',
                classType:'1',

                columns:[
                    {title:'项目名称',align:'center',name:'projectName'},
                    {title:'课程名称',align:'center',name:'className'},
                    {title:'签到时间',align:'center',name:'record'}
                ],
                list:[
                    {
                        projectName:'全民计算机一期',
                        className:'计算机基础',
                        record:'2017.11.16 12:00'
                    },{
                        projectName:'全民计算机一期',
                        className:'计算机基础',
                        record:'2017.11.16 12:00'
                    },{
                        projectName:'全民计算机一期',
                        className:'计算机基础',
                        record:'2017.11.16 12:00'
                    },{
                        projectName:'全民计算机一期',
                        className:'计算机基础',
                        record:'2017.11.16 12:00'
                    },{
                        projectName:'全民计算机一期',
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