<template>
    <div id="container">
        <myHeader></myHeader>
        <myNav :type="name"></myNav>
        <div class="content">
            <div class="pos">
                 首页 > 校园动态 > 动态详情
            </div>
            <div class="noticeDetail">
                <h1>{{info.nm}}</h1>
                <p>
                  <span>{{info.releTm}}</span>
                  <span>来源：{{info.author}}</span>  
                </p>
                <div v-html="info.cont"></div>
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
           name:'news',
           title:'',
           newPk:'',
           info:{}
      }
    },
    mounted() {

      this.newPk=this.until.getQueryString('newPk');

       this.getNewInfo();
    },
    methods: {

      getNewInfo(){

        this.until.get('/sys/news/info/'+this.newPk).then(
          res=>{
            if(res.status==='200'){
              this.info=res.data
              //转换日期
              let time=this.until.formatDate(res.data.releTm)
              this.info.releTm=time.year+'年'+time.month+'月'+time.day+'日' +' '+time.hour+':'+time.minite
            }
            else{
              console.log('状态码返回不是200')
            }
          },
          err=>{

          }
        )
      }
    },
    components: {
        myHeader,myNav,myFooter
    }
  }
</script>