<template>
    <div>
        <AllHead></AllHead>

        <div class="g-content" ref="size">

            <div class="g-search">
                <div class="crumb"><a href="./index.html">首页</a><span>&nbsp;&gt;&nbsp;</span><a
                        href="./index.html">实体办学</a><span>&nbsp;&gt;&nbsp;</span><a href="javascript:void(0)">精彩活动</a>
                </div>

                <div class="content clearfix">

                    <div class="info right">
                        <img src="./img/item.jpg" alt="">
                        <div class="detail">
                            <h3>班级满额班级满额班级满额班级满额班级满额班级满额</h3>
                            <div>
                                <p>时间：2017年</p>
                                <p>地点：XXXXX</p>
                                <p>2017年</p>
                                <p>主办方：宁波电视大学</p>
                                <p>12131人参与</p>
                                <button>查看详情</button>
                            </div>
                        </div>
                    </div>

                    <div class="info right">
                        <img src="img/item.jpg" alt="">
                        <div class="detail">
                            <h3>班级满额班级满额班级满额班级满额班级满额班级满额</h3>
                            <div>
                                <p>时间：2017年</p>
                                <p>地点：XXXXX</p>
                                <p>2017年</p>
                                <p>主办方：宁波电视大学</p>
                                <p>12131人参与</p>
                                <button>查看详情</button>
                            </div>
                        </div>
                    </div>


                    <div class="info right">
                        <img src="img/item.jpg" alt="">
                        <div class="detail">
                            <h3>班级满额班级满额班级满额班级满额班级满额班级满额</h3>
                            <div>
                                <p>时间：2017年</p>
                                <p>地点：XXXXX</p>
                                <p>2017年</p>
                                <p>主办方：宁波电视大学</p>
                                <p>12131人参与</p>
                                <button>查看详情</button>
                            </div>
                        </div>
                    </div>


                    <div class="info right">
                        <img src="img/item.jpg" alt="">
                        <div class="detail">
                            <h3>班级满额班级满额班级满额班级满额班级满额班级满额</h3>
                            <div>
                                <p>时间：2017年</p>
                                <p>地点：XXXXX</p>
                                <p>2017年</p>
                                <p>主办方：宁波电视大学</p>
                                <p>12131人参与</p>
                                <button class="active">我要参加</button>
                            </div>
                        </div>
                    </div>


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
  /*头部组件*/
  import AllHead from 'components/allHead';

  /*底部组件*/
  import McFoot from 'components/McFoot';


  export default {

    data() {
      return {
        total: 100,
        currentPage: 1,
        items: [
          {
            title: '请考生与XXXXXXXXXXXXXXXXXXXXXX',
            time: '2017年9月30号',
            from: '宁波电视大学',
            id: 1
          },
          {
            title: '2请考生与XXXXXXXXXXXXXXXXXXXXXX',
            time: '2017年9月30号',
            from: '宁波电视大学',
            id: 2
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

    computed: {},

    mounted() {
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
      AllHead, McFoot
    },
  }
</script>


<style scoped lang="less">
    .content{
        border-top: 1px solid #e1e1e1;
        .right{
            float: left;
            width: 580px;
            margin-top: 30px;
            &:nth-of-type(2n-1){
                margin-right: 40px;
            }
            img{
                float: left;
                margin-right: 20px;
                width: 200px;
                height: 200px;
            }
            .detail{
                display: flex;
                flex-direction: column;
                height: 200px;
                position: relative;

            }
            h3{
                line-height: 27px;
                min-height: 60px;
            }
            p{
                margin-top: 8px;
                color: #999;
                font-size: 15px;
            }
            button{
                width: 130px;
                height: 40px;
                border: none;
                background: #3a71a8;
                color: #fff;
                border-radius: 4px;
                position: absolute;
                bottom: 0;
                right: 0;
                cursor: pointer;
                &.active{
                    background: #fa6441;
                }
            }
            .active{
                background: #fa6441;
            }
        }
    }
    .page{
        margin-top: 50px;
    }
</style>