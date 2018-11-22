<template>
    <div>
        <AllHead></AllHead>

        <div class="a-tab clearfix">
            <div class="g-content">
                <p :class="tabState?'tab-xz':''" @click="toChange(true)">当前活动</p>
                <p :class="!tabState?'tab-xz':''" @click="toChange(false)">往期活动</p>
            </div>
        </div>

        <div class="g-content" ref="size">

            <div class="g-search">
                <div class="crumb"><a href="../home/index.html">首页</a><span>&nbsp;&gt;&nbsp;</span><a
                        href="./index.html">电视大学</a><span>&nbsp;&gt;&nbsp;</span><a
                        href="javascript:void(0)">精彩活动</a></div>

                <div class="content clearfix">

                    <div class="info right">
                        <img src="./img/item.jpg" alt="">
                        <div class="detail">
                            <h3 style=" -webkit-box-orient: vertical;" class="ell">班级满额班级满额班级满额班级满额班级满额班级满额</h3>
                            <p>时间：2017年</p>
                            <p>地点：XXXXX</p>
                            <p>2017年</p>
                            <p>主办方：宁波电视大学</p>
                            <p>12131人参与</p>
                            <button @click="tolink(id)">查看详情</button>
                        </div>
                    </div>

                    <div class="info right">
                        <img src="./img/item.jpg" alt="">
                        <div class="detail">
                            <h3 style=" -webkit-box-orient: vertical;" class="ell">班级满额班级满额班级满额班级满额班级满额班级满额</h3>
                            <p>时间：2017年</p>
                            <p>地点：XXXXX</p>
                            <p>2017年</p>
                            <p>主办方：宁波电视大学</p>
                            <p>12131人参与</p>
                            <button class="active" @click="tolink(id)">我要参加</button>
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
        tabState: true,

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
      toChange(bool){
        this.tabState = bool;
      },
      tolink(id) {
        /*把id传过去 然后详情页更具id获取类型再设置*/
        location.href = './activitycnt.html?id=' + 1;
      },
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
    .size {
        h3 {
            font-size: 26px !important;
        }
        span {
            font-size: 26px !important;
        }
        input {
            font-size: 26px !important;
        }
        button {
            font-size: 24px !important;
        }
        a {
            font-size: 26px !important;
        }
        li {
            font-size: 26px !important;
        }
        p {
            font-size: 20px !important;
        }
    }

    .a-tab {
        border-bottom: 1px solid #e1e1e1;
        > div {
            width: 1200px;
            margin: 0 auto;
            > p {
                width: 140px;
                height: 80px;
                line-height: 80px;
                float: left;
                box-sizing: border-box;
                text-align: center;
                margin-right: 100px;
                color: #999;
                cursor: pointer;
                &.tab-xz {
                    border-bottom: 2px solid #3a71a8;
                    color: #3a71a8;
                }
            }
        }
    }

    .content {
        border-top: 1px solid #e1e1e1;
        .right {
            float: left;
            width: 580px;
            margin-top: 30px;
            &:nth-of-type(2n-1) {
                margin-right: 40px;
            }
            img {
                float: left;
                margin-right: 20px;
                width: 200px;
                height: 200px;
            }
            .detail {
                display: flex;
                flex-direction: column;
                position: relative;
                height: 200px;
            }
            h3 {
                line-height: 25px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            p {
                margin-top: 15px;
                color: #999;
                font-size: 15px;
            }
            button {
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
                &.active {
                    background: #fa6441;
                }
            }
            .active {
                background: #fa6441;
            }
        }
    }

    .page {
        margin-top: 50px;
    }
</style>