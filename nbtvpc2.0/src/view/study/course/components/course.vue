<style lang="less">
    .size {
        h2{
            font-size: 30px !important;
        }
        h3 {
            font-size: 28px !important;
        }
        span {
            font-size: 26px !important;
        }
        input {
            font-size: 26px !important;
        }
        button {
            font-size: 26px !important;
        }
        a {
            font-size: 26px !important;
        }
        li{
            font-size: 26px !important;
        }
        p{
            font-size: 22px !important;
        }
    }
    .page{
        padding-left: 30px;
        margin: 30px 0 100px 0;

        span{
            display: inline-block;
            height: 40px;
            line-height: 40px;
            vertical-align: middle;
        }
        .el-pagination{
            display: inline-block;
        }
        .el-pager li{
            font-size: 20px;
            height: 40px;
            width: 40px;
            line-height: 40px;
        }
        .el-pager li.btn-quicknext, .el-pager li.btn-quickprev{
            line-height: 40px;
        }
        .el-pagination button, .el-pagination span{
            height: 40px;
            line-height: 40px;
            font-size: 20px;
        }
        .el-pagination__editor{
            height: 40px;
            width: 40px;
            line-height: 40px;
            font-size: 20px;
        }
        .el-icon-arrow-left:before{
            content: '上一页';
            font-size: 20px;
        }
        .el-icon-arrow-right:before{
            content: '下一页';
            font-size: 20px;
        }
    }
</style>

<style lang="less">
    .el-select>.el-input{
        width: 165px;
    }
    .searchCnt{
        display: inline-block;
        width: auto;
        .el-input__inner{
            width: 310px;
        }
        input{
            font-size: 20px;
        }
    }
    .el-select,.el-input{
        float: left;
    }
    .el-select{
        margin-right: 20px;
        input{
            font-size: 20px;
        }
    }
    .el-input__inner{
        height: 45px;
    }
    .el-select-dropdown__item{
        font-size: 20px;
        height: 45px;
    }
</style>
<template>
    <div class="g-content">
        <!--弹窗-->
        <div class="pop-class" @click="popState=false" v-show="popState">
            <div @click.stop>
                <p class="pop-title">
                    <span>选择老师</span>
                    <svg class="icon" aria-hidden="true" @click="popState=false">
                        <use xlink:href="#icon-guanbi"></use>
                    </svg>
                </p>
                <div class="pop-silder">
                        <svg class="icon" aria-hidden="true"  @click="leftMove">
                            <use xlink:href="#icon-jiantouarrowhead7"></use>
                        </svg>
                        <img :src="popAll[popnum].img" alt="">
                        <svg class="icon" aria-hidden="true" @click="rightMove">
                            <use xlink:href="#icon-jiantouarrow487"></use>
                        </svg>
                </div>
                <p class="pop-msg"><span>{{popAll[popnum].name}}</span><span>{{popAll[popnum].jobTitle}}</span></p>
                <p class="pop-cnt">{{popAll[popnum].introduce}}</p>
                <div class="pop-button"><button class="cm-button" @click="applyLink">确定</button></div>
            </div>
        </div>
        <!--链接栏-->
        <div class="r-link cm-container">
            <a href="../home/index.html">首页</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a>在线学习</a>
        </div>
        <!--内容-->
        <!--下拉框-->
        <div class="r-select clearfix cm-container">

            <el-select v-model="courseVal" placeholder="课程类型">
                <el-option
                        v-for="item in courseOpt"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>

            <el-input v-model="searchVal" placeholder="请输入内容" class="searchCnt"></el-input>

            <button class="cm-button">搜索</button>

        </div>
        <!--选项内容-->
        <div class="r-option clearfix">
            <div class="r-opt-temp clearfix" v-for="(option,index) in optionAll">
                <img src="../img/temp.png" alt="">
                <div>
                    <h3>{{option.title}}</h3>
                    <p><span>主讲人：{{option.teacher}}</span></p>
                    <p>{{option.cnt}}</p>
                    <div class="clearfix">
                        <button class="cm-button" @click="openPop(index)">开始学习</button>
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
</template>
<script>
    import tx from '../img/tx.jpg'
    import tx1 from '../img/tx1.jpeg'
    import tx2 from '../img/tx2.jpeg'
    import tx3 from '../img/tx3.jpeg'
  export default {
    data(){
      return{
        popState:false,
        total:100,
        currentPage:1,
        /*弹窗信息*/
        popAll:[{img:tx,name:'小白',jobTitle:'教授',introduce:'介绍'},{img:tx1,name:'小黑',jobTitle:'老师',introduce:'介绍'},{img:tx3,name:'小绿',jobTitle:'老师',introduce:'介绍'},{img:tx2,name:'小黄',jobTitle:'老师',introduce:'介绍'}],
        popnum:0,

        courseOpt: [{value: '所有', label: '所有'}, {value: '音乐', label: '音乐'}, {value: '美术', label: '美术'}, {value: '舞蹈', label: '舞蹈'}],
        courseVal: '',
        searchVal:'',
        optionAll:[
          {title:'标题标题标题标题标题标题标题标题标题标题标题',teacher:'老师',cnt:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',price:'40',img:''},
          {title:'标题标题标题标题标题标题标题标题标题标题标题',teacher:'老师',cnt:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',price:'40',img:''},
          {title:'标题标题标题标题标题标题标题标题标题标题标题',teacher:'老师',cnt:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',price:'40',img:''},
          {title:'标题标题标题标题标题标题标题标题标题标题标题',teacher:'老师',cnt:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',price:'40',img:''}
        ]
      }
    },
    methods:{
      openPop(index){
        /*获取课程的id*/
        this.popState=true;
      },
      applyLink(index){
        /*获取老师的id*/
        this.$router.push({name:'coursecnt',params:{link:this.$route.path}});
      },
      rightMove(){
        if(this.popnum+1<this.popAll.length){
            this.popnum++;
        }else{
            this.popnum=0;
        }
      },
      leftMove(){
        if(this.popnum>0){
            this.popnum--;
        }else{
            this.popnum=this.popAll.length-1;
        }
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
    }
  }
</script>
<style lang="less" scoped>
    @bdColor: #e1e1e1;
    /*公共样式*/
    .cm-container {
        width: 1200px;
        margin: 0 auto;
    }
    .cm-button{
        width: 132px;
        height: 45px;
        border: 0;
        border-radius: 5px;
        color: #fff;
        background-color: #3a71a8;
        font-size: 20px;
        margin-left: 30px;
    }
    /*弹窗*/
    .pop-class{
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, .6);
        >div{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 605px;
            height: 650px;
            background-color: #fff;
            border-radius: 5px;
            font-size: 0;
            .pop-title{
                position: relative;
                height: 110px;
                line-height: 110px;
                text-align: center;
                border-bottom: 1px solid @bdColor;
                font-size: 30px;
                svg{
                    position: absolute;
                    top: 40px;
                    right: 40px;
                    color: #a2a2a2;
                    cursor: pointer;
                }
            }
            .pop-silder{
                text-align: center;
                height: 250px;
                line-height: 250px;
                margin-top: 30px;
                img{
                    display: inline-block;
                    width: 250px;
                    height: 250px;
                    border: 1px solid @bdColor;
                    vertical-align: bottom;
                }
                svg{
                    font-size: 100px;
                    color: #999;
                    cursor: pointer;
                    vertical-align: middle;
                    &:nth-of-type(1){
                        margin-right: 20px;
                    }
                    &:nth-of-type(2){
                        margin-left: 20px;
                    }
                }

            }
            .pop-msg{
                text-align: center;
                font-size: 26px;
                margin: 30px 0;
                span{
                    padding: 0 40px;
                }
            }
            .pop-cnt{
                color: #959595;
                font-size: 20px;
                text-align: center;
                overflow:hidden;
                text-overflow:ellipsis;
            }
            .pop-button{
                position: absolute;
                bottom: 30px;
                left: 0;
                width: 100%;
                text-align: center;
                button{
                    margin-left: 0;
                    cursor: pointer;
                }
            }
        }
    }
    /*链接栏*/
    .r-link {
        padding: 30px 0;
        color: #999;
        font-size: 20px;
        border-bottom: 1px solid @bdColor;
        a {
            color: #999;
            &:nth-last-of-type(1){
                cursor: auto;
            }
        }
        span{
            vertical-align: top;
        }
    }
    /*下拉框*/
    .r-select{
        padding: 35px 0;
    }
    /*内容*/
    .r-option{
        min-height: 600px;
        padding-bottom: 50px;
        .r-opt-temp{
            float: left;
            margin-bottom: 30px;
            &:nth-of-type(2n+1){
                margin-right: 25px;
            }
            >img{
                display: block;
                float: left;
                width: 250px;
                height: 360px;
                vertical-align: bottom;
            }
            >div{
                position: relative;
                font-size: 0;
                float: left;
                width: 276px;
                height: 298px;
                border: 1px solid @bdColor;
                border-left: 0px;
                padding: 30px;
                box-sizing: content-box;
                h3{
                    margin-bottom: 20px;
                    font-size: 26px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                p{
                    color: #666;
                    line-height: 1.5;
                }
                p:nth-of-type(1){
                    font-size: 22px;
                }
                p:nth-of-type(2){
                    height:60px;
                    font-size: 20px;
                    margin-top: 20px;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
                >div{
                    position: absolute;
                    width: 276px;
                    left: 30px;
                    bottom: 30px;
                    span{
                        color: red;
                        font-size: 30px;
                        font-weight: bold;
                        line-height: 45px;
                    }
                    button{
                        margin-left: 0;
                        cursor: pointer;
                    }
                }
            }
        }
    }

</style>