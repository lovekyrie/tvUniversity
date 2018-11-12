<template>
    <div id="nav">
        <div class="content">
            <!-- <a href="../center/index.html" :class="{active:type=='home'}">网站首页</a>
            <a href="../center/study.html" :class="{active:type=='current'}">当前课程</a>
            <a href="#" :class="{active:type=='past'}">往期课程</a>
            <a href="../center/notice.html" :class="{active:type=='notice'}">通知公告</a>
            <a href="../center/news.html" :class="{active:type=='news'}">校园动态</a>
            <a href="../center/policy.html" :class="{active:type=='policy'}">文件政策</a> -->
            <router-link v-for="(item, index) in navList" :to="item.link" :key="index">{{item.content}}</router-link>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'App',
        data(){
          return{
            navList:[
              {
                ID:1,
                content:'网站首页',
                link:'/center'
              },
                {
                ID:2,
                content:'在线报名',
                link:'/signup'
              },
                {
                ID:3,
                content:'在线学习',
                link:'/study'
              },
                {
                ID:4,
                content:'关于我们',
                link:'/aboutme'
              }
            ]
          }
        },
        props:['type'],
        mounted(){
            // this.abc();

        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>
    #nav{
        width: 100%;
        border-bottom: 1px solid #e1e1e1;
        height: 90px;
        .content{
            display: flex;
            display: -webkit-flex;
            a{
                height: 90px;
                line-height: 90px;
                text-align: center;
                color: #666666;
                flex: 1;
                font-size:24px;
                /*font-weight: bold;*/
            }
            a:hover{
                text-decoration: none;
            }
            a.active{
                font-weight: bold;
                color: #3a71a8;
                border-bottom: 1px solid #3a71a8;
            }
        }
    }
</style>