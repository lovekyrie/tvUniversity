<template>
    <div id="container">
        <div class="search">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-6">
                        <select v-model="classes">
                            <option value="allC">全部课程</option>
                        </select>
                    </div>
                    <div class="col-xs-6">
                        <select v-model="school">
                            <option value="allS">全部校区</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-10">
                        <input v-model="keyWords" placeholder="关键词搜索">
                    </div>
                    <div class="col-xs-2">
                        <a href="#"><img src="../img/在线报名.png" alt="图片"></a>
                    </div>
                </div>
            </div>
        </div>

        <!--课程-->
        <div class="classSelect">
            <div class="selectBox" v-for="item in classSelect">
                <div class="inImg">
                    <img :src="item.url">
                    <p>价格 ：<span style="color: red;">¥ {{item.price}}</span></p>
                </div>

                <div class="desc">
                    <h3>{{item.title}}</h3>
                    <p>校区 ：<span class="schoolPlace">{{item.schoolPlace}}</span> </p>
                    <p>上课时间 ：{{item.beginClass}}</p>
                    <p>上课地点 ：{{item.beginPlace}}</p>
                    <p>报名时间 ：{{item.regtime1}} {{item.regtime2}} ～ {{item.regtime3}} {{item.regtime4}}</p>
                    <p v-if="item.maleAge1==''">报名条件 ：男士年龄 无</p>
                    <p v-else>报名条件 ：男士年龄 {{item.maleAge1}} ～ {{item.maleAge2}}</p>
                    <p v-if="item.femaleAge1==''">&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;女士年龄 无</p>
                    <p v-else>&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;女士年龄 {{item.femaleAge1}} ～ {{item.femaleAge2}}</p>
                    <span class="btn">
                        <button v-if="item.btn=='已报满'" disabled style="background-color: rgb(99,99,99);">{{item.btn}}</button>
                        <button v-else style="background-color: red">报名</button>
                        <button>查看详情</button>
                    </span>
                </div>

            </div>

        </div>


    </div>
</template>

<script>
    export default {
        data() {

            return {
                classes:'allC',
                school:'allS',
                keyWords:'',

                classSelect:[
                    {
                        url:require('../img/我的班级.png'),
                        price:'0.01',
                        title:'2018剧目表演基础',
                        schoolPlace:'芝士公园校区',
                        beginClass:'星期二 下午',
                        beginPlace:'舞蹈室-415',

                        //报名时间
                        regtime1:'2018-05-09',
                        regtime2:'09:00:00',
                        regtime3:'2018-08-09',
                        regtime4:'09:00:00',

                        maleAge1:'',
                        maleAge2:'',
                        femaleAge1:'50',
                        femaleAge2:'62',
                        btn:'已报满',
                    },{
                        url:require('../img/我的班级.png'),
                        price:'0.01',
                        title:'2018剧目表演基础',
                        schoolPlace:'芝士公园校区',
                        beginClass:'星期二 下午',
                        beginPlace:'舞蹈室-415',

                        //报名时间
                        regtime1:'2018-05-09',
                        regtime2:'09:00:00',
                        regtime3:'2018-08-09',
                        regtime4:'09:00:00',

                        maleAge1:'',
                        maleAge2:'',
                        femaleAge1:'50',
                        femaleAge2:'62',
                        btn:'',
                    },
                ]

            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>