<template>
    <div id="container">
        <myHeader></myHeader>
        <myNav></myNav>
        <div style="width:100%;" class="content">
          <div class="content-link">
              <div class="pos">
                  <a href="#">个人空间</a> > {{title}}
              </div>
              <ul class="menu">
                  <li v-for="(item,index) in menuList" :key="index">
                      <router-link :to='item.aHref'  :class="{active:iScur==index}" @click="changeMeun(index,item.title)">{{item.title}}</router-link>
                  </li>
              </ul>
              <router-view class="main"></router-view>
          </div>
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
                aHref:'/center',
                title:'会员中心'
            },{
                aHref:'/project',
                title:'我的项目'
            },{
                aHref:'/certificate',
                title:'我的证书'
            },{
                aHref:'/sign',
                title:'签到记录'
            },{
                aHref:'/msg',
                title:'消息中心'
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