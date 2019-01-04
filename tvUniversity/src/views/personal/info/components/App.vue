<template>
    <div id="container">
        <myHeader></myHeader>
        <div class="content-link">
            <div class="pos">
                <a href="#">个人空间</a> > 
                <span>{{title}}</span>
            </div>
            <ul class="menu">
                <li v-for="(item,index) in menuList" :key="index">
                    <router-link :to='item.aHref'  :class="{active:iScur==index}" @click="changeMeun(index,item.title)">{{item.title}}</router-link>
                </li>
            </ul>
            <router-view class="main"></router-view>
        </div>

        <myFooter></myFooter>
    </div>
</template>
<script>
    import myHeader from "@/components/myHeader"
    import myNav from "@/components/myNav"
    import myFooter from "@/components/myFooter"
  export default {
    data() {
      return {
            title:'个人资料',
            iScur:4,
            menuList:[{
                aHref:'/study',
                title:'当期课程学习'
            },{
                aHref:'/prevent',
                title:'往期课程学习'
            },{
                aHref:'/myStar',
                title:'我的学习星'
            },{
                aHref:'/sign',
                title:'签到记录'
            },{
                aHref:'/myTeam',
                title:'我的小组'
            },{
                aHref:'/info',
                title:'个人资料'
            },{
                aHref:'/back',
                title:'后台管理'
            }]
      }
    },
    mounted() {
        let myUrl = this.$route.path
        this.menuList.forEach((item,index)=>{
            if(myUrl.indexOf(item.aHref)!='-1'){
                this.iScur = index
                this.title = item.title
            }
        })
    },
    methods: {
        changeMeun(index,title){
            this.iScur=index
            this.title = title
            console.log(this.iScur)
        }
    },
    components: {
        myHeader,myNav,myFooter
    },
      watch:{
          $route(to){
              this.menuList.forEach((item,index)=>{
                  if(to.path==item.aHref){
                      this.iScur = index
                      this.title = item.title
                  }
              })
          }
      }
  }
</script>