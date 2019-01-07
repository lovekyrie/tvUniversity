<template>
    <div id="container">
        <myHeader :type="name"></myHeader>
        <div class="content">
            <div class="pos">
              <span><a href="../center/index.html">首页</a></span>>
              <span><a href="./policy.html">政策文件</a></span>> 
              <span>文件详情</span>
            </div>
            <div class="noticeDetail">
                <h1>{{info.nm}}</h1>
                <p>更新时间：{{info.releTm}}<span></span>作者：{{info.author}}<span></span>来源：{{info.crtBy}}<span></span>点击量：{{info.readQty}}</p>
                <div v-html="info.cont"></div>
            </div>
        </div>
        <myFooter></myFooter>
    </div>
</template>
<script>
    import myHeader from "@/components/myHeader"
    import myFooter from "@/components/myFooter"
  export default {
    data() {
      return {
           name:'policy',
           newPk:'',
           info:{
           }
      }
    },
    mounted() {

      this.newPk=this.until.getQueryString('newPk');
       this.getPolicyInfo();
    },
    methods: {

      getPolicyInfo(){
        
         this.until.get('/sys/news/info/'+this.newPk).then(
          res=>{
            if(res.status==='200'){
              this.info=res.data
              //转换日期
              let time=this.until.formatDate(res.data.releTm)
              this.info.releTm=time.year+'年'+time.month+'月'+time.day+'日' +' '+time.hour+':'+time.minite+':'+time.second
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
        myHeader,myFooter
    }
  }
</script>