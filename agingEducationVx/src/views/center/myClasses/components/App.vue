<template>
    <div id="container">
        <div class="myClasses" v-for="item in classes">
            <div class="inImg">
                <img :src="item.url" alt="图片">
            </div>
            <div class="classMsg">
                <h3>{{item.classTitle}}</h3>
                <p>校区 ：<span class="schoolPlace">{{item.schoolPlace}}</span> </p>
                <p>上课时间 ：{{item.classTime}}</p>
                <p>上课地点 ：{{item.classPlace}}</p>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        data() {

            return {
                classes: [
                    {
                        url: require('../img/我的班级.png'),
                        classTitle: '2018剧幕表演基础',
                        schoolPlace:'芝士公园校区',
                        classTime: '星期二 下午',
                        classPlace: '舞蹈室-415'
                    },{
                        url: require('../img/我的班级.png'),
                        classTitle: '2018剧幕表演基础',
                        schoolPlace:'芝士公园校区',
                        classTime: '星期二 下午',
                        classPlace: '舞蹈室-415'
                    },
                ]
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>