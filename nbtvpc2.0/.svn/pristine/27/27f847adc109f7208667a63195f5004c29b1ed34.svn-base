<style lang="less">
    .pop-myd{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 500;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.6);
        >div{
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -230px;
            margin-left: -250px;
            width: 370px;
            height: 500px;
            background-color: #fff;
            padding: 0 45px;
            h3{
                font-size: 28px;
                text-align: center;
                margin-top: 40px;
            }
            p{
                margin-top: 30px;
                font-size: 24px;
                line-height:1.5;
                vertical-align: middle;
                span{
                    display: inline-block;
                    line-height: 50px;
                }
                .el-select{
                    float: right;
                    .el-input{
                        width: 295px;
                        input{
                            height: 50px;
                        }
                    }
                }
            }
            textarea{
                margin-top: 30px;
                resize: none;
                width: 100%;
                height: 185px;
                border: 1px solid #e1e1e1;
                padding: 20px;
                box-sizing: border-box;
                line-height: 1.5;
            }
            >div{
                text-align: center;
                margin-top: 40px;
                button{
                    width: 175px;
                    height: 45px;
                    color: #fff;
                    background-color: #3a71a8;
                    font-size: 20px;
                    border:0;
                    border-radius: 5px;
                }
            }
        }
    }
</style>
<template>
    <div id="app">
        <!--弹窗-->
        <div class="pop-myd"  v-show="showpop" @click="showpop=false">
            <div @click.stop>
                <h3>满意度测评</h3>
                <p>
                    <span>对象</span>
                    <el-select v-model="popVal">
                        <el-option
                                v-for="item in popAll"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </p>
                <textarea v-model="adviceVal" placeholder="您可以在这里表达您对当前教程，或者学校的建议"></textarea>
                <div><button @click="submitbtn">提交</button></div>
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
                <div><h3>{{item.name}}</h3><span :class="{'span-r':classmsg.state}">{{classmsg.state?'进行中':'已结束'}}</span></div>
                <p>班主任：{{item.teacher}}</p><p>上课地点：{{item.site}}</p><p>上课时间：{{item.time}}</p>
                <div class="clearfix"><div @click="showpop=true">满意度测评</div><div>证书申请</div></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
          return{
            /*弹窗*/
            showpop:false,
            popAll: [{value: '学校', label: '学校'}, {value: '选项2', label: '选项2'}],
            popVal:'学校',
            adviceVal:'',

            resultAll: [{value: '班级状态', label: '班级状态'}, {value: '选项2', label: '选项2'}],
            resultVal:'班级状态',

            /*班级信息*/
            classmsgAll:[],
            classmsg:{name:'你好', state:true, teacher:'老师', site:'地点', time:'时间'}
          }
        },
        methods:{
          submitbtn(){
            /*提交建议*/
          }
        },
        mounted(){
          var i= 5;
          while(i--){
            this.classmsgAll.push(this.classmsg);
          }
        }
    }
</script>
<style lang="less">
    .el-input {
        width: 370px;
        font-size: 22px;
        input {
            height: 60px;
        }
    }

    .el-select-dropdown__item {
        font-size: 22px;
        height: 50px;
        line-height: 50px;
        padding: 0;
    }

    .el-select-dropdown__item span {
        display: inline-block;
        height: 50px;
        line-height: 50px !important;
        margin-left: 10px;
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
<style lang="less" scoped>
    #app{
        width: 920px;
        background-color: #f6f6f6;
        padding:30px;
        /*内容*/
        .c-cnt{
            .c-cnt-list{
                float: left;
                width: 443px;
                margin-top: 30px;
                border: 1px solid #e1e1e1;
                font-size: 24px;
                background-color: #fff;
                &:nth-of-type(2n+1){
                    margin-right: 30px;
                }
                img{
                    width: 443px;
                    height: 398px;
                    vertical-align: bottom;
                }
                >div{
                    padding: 0 25px;
                    &:nth-of-type(1){
                        margin-top: 25px;
                        margin-bottom: 15px;
                        h3{
                            display: inline-block;
                            width: 295px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-size: 28px;
                        }
                        span{
                            float: right;
                            font-size: 24px;
                            color: #666;
                        }
                        .span-r{
                            color: #ff3000;
                        }
                    }
                    &:nth-of-type(2){
                        div{
                            float: left;
                            width: 175px;
                            height: 48px;
                            line-height:48px;
                            text-align: center;
                            border-radius: 5px;
                            margin-top: 10px;
                            margin-bottom: 30px;
                            cursor: pointer;
                            &:nth-of-type(1){
                                background: #3a71a8;
                                color: #fff;
                            }
                            &:nth-of-type(2){
                                float: right;
                                background: transparent;
                                color: #3a71a8;
                                border: 1px solid #3a71a8;
                            }
                        }
                    }
                }
                >p{
                    padding: 0 25px;
                    color: #666;
                    &:nth-of-type(1){
                        font-size: 22px;
                        margin-bottom: 25px;
                    }
                    &:nth-of-type(2),&:nth-of-type(3){
                        font-size: 20px;
                        margin-bottom: 15px;
                    }
                }
            }
        }
    }
</style>