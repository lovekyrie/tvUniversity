<style lang="less">
  .c-cnt{
    display: flex;
    margin-bottom: 60px;
    .c-slider{
      flex:1;
      margin-right: 30px;
      h3{
        border-bottom: 1px solid #e1e1e1;
        font-size: 22px;
        span{
          display: inline-block;
          height: 70px;
          line-height:70px;
          border-bottom: 2px solid #3a71a8;
        }
      }
      >div{
        display: flex;
        flex-direction: column;
        embed{
          margin-top: 20px;
          flex: 1;
          width: 100%;
          height: 431px;
        }
        >div{
          height: 45px;
          display: flex;
          span{
            flex:1;
            display: inline-block;
            height: 45px;
            line-height:45px;
            text-align: center;
            background-color: #c9c9c9;
            color: #666;
            border-right: 1px solid #fff;
            cursor: pointer;
            &:nth-last-of-type(1){
              border-right: 0;
            }
            &.xz-cl{
              background-color: #3a71a8;
              color: #fff;
              font-size: 22px;
            }
          }
        }
      }
    }
    .c-star{
      width: 525px;
      h3{
        border-bottom: 1px solid #e1e1e1;
        font-size: 22px;
        span{
          display: inline-block;
          height: 70px;
          line-height:70px;
          border-bottom: 2px solid #3a71a8;
        }
      }
      >div{
        border-bottom: 1px solid #e1e1e1;
        font-size: 24px;
        &:nth-last-of-type(1){
          border: 0;
        }
        span{
          display: inline-block;
          text-align: center;
          height: 70px;
          line-height:70px;
          &:nth-of-type(1){
            width: 90px;
          }
          &:nth-of-type(2){
            width: 100px;
          }
          &:nth-of-type(3){
            width: 170px;
            color: red;
          }
          &:nth-of-type(4){
            width: 165px;
          }

        }
      }
    }
  }
  .c-wq{
    margin-bottom: 30px;
    h3{
      border-bottom: 1px solid #e1e1e1;
      font-size: 22px;
      span{
        display: inline-block;
        height: 70px;
        line-height:70px;
        border-bottom: 2px solid #3a71a8;
      }
    }
   >div{
     display: flex;
     justify-content: space-between;
     >a{
       width: 280px;
       img{
         width: 280px;
         height: 274px;
         margin-top: 20px;
         vertical-align: bottom;
       }
       span{
         display: inline-block;
         width: 100%;
         text-align: center;
         line-height: 1.5;
         font-size: 24px;
       }
     }
   }

  }
</style>

<template>
  <div>
    <AllHead></AllHead>

    <div class="g-content" ref="size">

      <div class="crumb"><a href="../home/index.html">首页</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a href="javascript:void(0)">实体办学</a></div>

      <div class="c-cnt">
        <div class="c-slider">
          <h3><span>当前课程</span></h3>
          <div>
            <embed src='http://player.youku.com/player.php/sid/XMzQyOTU1NjUxNg==/v.swf' allowFullScreen='true' quality='high' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>
            <div><span class="xz-cl">视频1</span><span>视频2</span><span>视频3</span></div>
          </div>
        </div>
        <div class="c-star">
          <h3><span>学习之星</span></h3>
          <div><span>排名</span><span>姓名</span><span>学习之星</span><span>教学点</span></div>
          <div v-for="item in 6"><span>1</span><span>王健林</span><span>180</span><span>宁大总部</span></div>
        </div>
      </div>

      <div class="c-wq">
        <h3><span>往期课程</span></h3>
        <div>
          <a href="" v-for="item in 4">
            <img src="./img/tx.jpg" alt="">
            <span>养生</span>
          </a>
        </div>
      </div>

      <div class="clearfix">
        <div class="item left">
          <h2><i></i>校园动态 <a href="">查看更多&gt;</a></h2>
          <div class="info">
            <a href="">
              <img src="./img/item.jpg" alt="">
              <div class="detail">
                <h3 style=" -webkit-box-orient: vertical;" class="ell">班级满额班级满额班级满额班级满额班级满额班级满额</h3>
                <div>
                  <p>2017年</p>
                  <p>来源：宁波电视大学</p>
                </div>
              </div>
            </a>
        </div>
          <div class="info">
            <a href="">
              <img src="./img/item.jpg" alt="">
              <div class="detail">
                <h3 style=" -webkit-box-orient: vertical;" class="ell">班级满额班级满额</h3>
                <div>
                  <p>2017年</p>
                  <p>来源：宁波电视大学</p>
                </div>
              </div>
            </a>
          </div>
          <div class="info">
            <a href="">
              <img src="./img/item.jpg" alt="">
              <div class="detail">
                <h3 style=" -webkit-box-orient: vertical;" class="ell">班级满额班级满额班级满额班级满额班级满额班级满额</h3>
                <div>
                  <p>2017年</p>
                  <p>来源：宁波电视大学</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="item right">
          <h2><i></i>精彩活动 <a href="">查看更多&gt;</a></h2>
          <div class="info">
            <img src="./img/item.jpg" alt="">
            <div class="detail">
              <h3 style=" -webkit-box-orient: vertical;" class="ell">班级满额班级满额班级满额班级满额班级满额班级满额</h3>
              <div>
                <p >时间：2017年</p>
                <p>地点：XXXXX</p>
                <p>2017年</p>
                <p>主办方：宁波电视大学</p>
                <p>12131人参与</p>
                <button>查看详情</button>
              </div>
            </div>
          </div>
          <div class="info">
            <img src="./img/item.jpg" alt="">
            <div class="detail">
              <h3 style=" -webkit-box-orient: vertical;" class="ell">班级满额班级</h3>
              <div>
                <p >时间：2017年</p>
                <p>地点：XXXXX</p>
                <p>2017年</p>
                <p>主办方：宁波电视大学</p>
                <p>12131人参与</p>
                <button class="active">我要参与</button>
              </div>
            </div>
          </div>
          <div class="info">
            <img src="./img/item.jpg" alt="">
            <div class="detail">
              <h3 style=" -webkit-box-orient: vertical;" class="ell">班级满额班级满额班级满额班级满额班级满额班级满额</h3>
              <div>
                <p >时间：2017年</p>
                <p>地点：XXXXX</p>
                <p>2017年</p>
                <p>主办方：宁波电视大学</p>
                <p>12131人参与</p>
                <button>查看详情</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="m-bottom">

        <div class="li">
          <h2><span></span>成果交流</h2>
          <div class="li-cnt">
            <a href="">
              <h3><i></i>作品名称</h3>
              <h4><i></i>作者：XXX</h4>
              <h5>2017.12.12 12：46</h5>
            </a>
            <a href="">
              <h3><i></i>作品名称</h3>
              <h4><i></i>作者：XXX</h4>
              <h5>2017.12.12 12：46</h5>
            </a>
          </div>
          <a href="" class="m-bmore">查看更多 ></a>
        </div>

        <div class="li">
          <h2><span></span>荣誉展厅</h2>
          <div class="li-con">
            <a href="" class="clearfix">
              <img src="./img/tx.jpg" alt="">
              <p><span>标题标题标题标</span></p>
            </a>
            <a href="" class="clearfix">
              <img src="./img/tx.jpg" alt="">
              <p><span>标题标题标题标</span></p>
            </a>
          </div>
          <a href="" class="m-bmore">查看更多 ></a>
        </div>

        <div class="li">
          <h2><span></span>课表栏目</h2>
          <div class="li-list">
            <a href=""><h3><i></i>标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</h3></a>
            <a href=""><h3><i></i>标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</h3></a>
            <a href=""><h3><i></i>标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</h3></a>
            <a href=""><h3><i></i>标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</h3></a>
            <a href=""><h3><i></i>标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</h3></a>
            <a href=""><h3><i></i>标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</h3></a>
          </div>
          <a href="" class="m-bmore">查看更多 ></a>
        </div>

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

                slide:[{
                    srcUrl:'http://www.nbtsnm.cn/Attachment/GoodsBrand/2018/1/23/201801232132158551.jpg',
                    hrefUrl:'1',
                },{
                    srcUrl:'http://www.nbtsnm.cn/Attachment/GoodsBrand/2018/1/23/201801232132158551.jpg',
                    hrefUrl:'2',
                }]
            }
        },
        //相关操作事件
        methods: {


        },

        computed: {


        },

        mounted () {

        },
        components: {
            AllHead,McFoot
        },
    }
</script>



<style scoped lang="less">


</style>