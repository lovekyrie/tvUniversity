
<style scoped lang="less">
    .pop-myd{
        >div{
            height: 300px;
            margin-top: -150px;
            button{
                margin: 30px 0;
            }
        }
    }
</style>
<template>
    <div id="app">
        <!--弹窗-->
        <div class="pop-myd" v-show="showpop" @click="showpop=false">
            <div @click.stop>
                <div>
                    <h3>团申请</h3>
                    <p>您申请的{{applyname}}团，我们会在第一时间联系您！</p>
                    <button @click="submitbtn">提交</button>
                </div>
            </div>
        </div>
        <!--下拉框-->
        <el-select v-model="resultVal">
            <el-option
                    v-for="item in resultAll"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
        <!--内容-->
        <div class="c-cnt clearfix">
            <div class="c-cnt-list" v-for="item in classmsgAll">
                <img src="../img/cs.png" alt="">
                <div><h3>{{item.name}}</h3><span :class="{'span-r':classmsg.state}">{{classmsg.state ? '已加入' : ''}}</span></div>
                <p>班主任：{{item.teacher}}</p>
                <p>{{item.content}}</p>
                <div class="clearfix">
                    <div @click="detailcnt">查看详情</div>
                    <div v-if="!classmsg.state" @click="applybtn(item.name)">申请加入</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        showpop: false,
        /*申请团的名字*/
        applyname:'',

        resultAll: [{value: '全部团', label: '全部团'}, {value: '选项2', label: '选项2'}],
        resultVal: '全部团',

        /*班级信息*/
        classmsgAll: [],
        classmsg: {
          name: '团名称',
          state: false,
          teacher: '老师',
          content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        },

      }
    },
    methods:{
      submitbtn(){
        /*提交申请*/
      },
      applybtn(name){
        this.showpop=true;
        this.applyname=name;
      },
      detailcnt(){
        this.$router.push('/myclub/clubcnt');
      }
    },
    mounted() {
      var i = 5;
      while (i--) {
        this.classmsgAll.push(this.classmsg);
      }
    }
  }
</script>

<style lang="less" scoped>
    #app {
        width: 920px;
        background-color: #f6f6f6;
        padding: 30px;
        /*内容*/
        .c-cnt {
            .c-cnt-list {
                float: left;
                width: 443px;
                margin-top: 30px;
                border: 1px solid #e1e1e1;
                font-size: 24px;
                background-color: #fff;
                &:nth-of-type(2n+1) {
                    margin-right: 30px;
                }
                img {
                    width: 443px;
                    height: 398px;
                    vertical-align: bottom;
                }
                > div {
                    padding: 0 25px;
                    &:nth-of-type(1) {
                        margin-top: 25px;
                        margin-bottom: 15px;
                        h3 {
                            display: inline-block;
                            width: 295px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 28px;
                        }
                        span {
                            float: right;
                            font-size: 24px;
                            color: #666;
                        }
                        .span-r {
                            color: #ff3000;
                        }
                    }
                    &:nth-of-type(2) {
                        div {
                            float: left;
                            width: 175px;
                            height: 48px;
                            line-height: 48px;
                            text-align: center;
                            border-radius: 5px;
                            margin-top: 10px;
                            margin-bottom: 30px;
                            cursor: pointer;
                            &:nth-of-type(1) {
                                background: #3a71a8;
                                color: #fff;
                            }
                            &:nth-of-type(2) {
                                float: right;
                                background: transparent;
                                color: #3a71a8;
                                border: 1px solid #3a71a8;
                            }
                        }
                    }
                }
                > p {
                    padding: 0 25px;
                    color: #666;
                    &:nth-of-type(1) {
                        font-size: 22px;
                        margin-bottom: 25px;
                    }
                    &:nth-of-type(2) {
                        font-size: 20px;
                        margin-bottom: 15px;
                        line-height: 1.2;
                        overflow: hidden;
                        text-overflow: ellipsis;
                       white-space: nowrap;
                    }
                }
            }
        }
    }
</style>