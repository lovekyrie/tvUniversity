<template>
  <div>
    <AllHead></AllHead>

    <div class="g-content" ref="size">

      <div class="g-search">
        <div class="crumb"><a href="../home/index.html">首页</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a href="./index.html">成果交流</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a href="javascript:void(0)">{{linktext}}</a></div>

        <div class="content">
          <a :href="'./'+linktype+'list.html?id='+item.id" v-for="item in items" class="clearfix">
            <img src="./img/item.jpg" alt="">
            <div class="info">
              <h2>{{item.title}}</h2>
              <h3>{{item.time}} <span>来源：{{item.from}}</span></h3>
            </div>
          </a>
        </div>
      </div>

      <div class="page">
        <el-pagination
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="10"
                layout=" prev, pager, next, total"
                :total="100">
        </el-pagination>
        <span>共10页</span>
      </div>

    </div>

    <McFoot></McFoot>

  </div>
</template>
<script>

    import Lib from 'assets/js/Lib';
    import AllHead from 'components/allHead';
    import McFoot from 'components/McFoot';

    export default {

        data() {
            return {
                linktype:'',
                linktext:'',

                total:100,
                currentPage:1,
                items:[
                    {
                        title:'请考生与XXXXXXXXXXXXXXXXXXXXXX',
                        time:'2017年9月30号',
                        from:'宁波电视大学',
                        id:1
                    },
                    {
                        title:'2请考生与XXXXXXXXXXXXXXXXXXXXXX',
                        time:'2017年9月30号',
                        from:'宁波电视大学',
                        id:2
                    }
                ]

            }
        },
        //相关操作事件
        methods: {

            handleCurrentChange(val) {
                console.log(val)
//                this.axios.get(Lib.C.url_mc+'/mall/bss/news/FarmLogPage',{
//                    params:{
//                        pageNo:val,
//                        pageSize:1,
//                    }
//                })
//                    .then(res=>{
//                        this.items=res.data.data.items;
//                    }).catch(err=>{
//                    console.log(err);
//                });
            },
        },

        computed: {


        },

        mounted () {
          this.linktype = Lib.M.getUrlQuery('type',Lib.C.url_host);
          switch (this.linktype){
            case 'text': this.linktext = '文字集锦';break;
            case 'img': this.linktext = '书画摄影';break;
            case 'vedio': this.linktext = '活力视频';break;
          }
          /*根据类型选择接口内容*/

//            this.axios.get(Lib.C.url_mc+'/mall/bss/news/FarmLogPage',{
//                params:{
//                    pageNo:'',
//                    pageSize:'',
//                }
//            })
//                .then(res=>{
//                    this.total=res.data.data.items.length;
//                }).catch(err=>{
//                console.log(err);
//            });
        },
        components: {
            AllHead,McFoot
        },
    }
</script>



<style scoped lang="less">

  .size{
    h2{
      font-size: 30px!important;
    }
    h3{
      font-size: 26px!important;
    }
    a {
      font-size: 30px !important;
    }
    span {
      font-size: 30px !important;
    }
  }

</style>