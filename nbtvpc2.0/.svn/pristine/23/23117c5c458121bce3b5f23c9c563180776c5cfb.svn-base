<template>
    <div id="course" scoped>
        <div class="vedio-list clearfix" v-for="item in 2">
            <h3>2017.11.14</h3>
            <div v-for="item in 6">
                <a href="">
                    <img src="../img/temp.png" alt="">
                    <h3>标题</h3>
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
</template>
<script>
  export default {
    data() {
      return {
        resultAll: [{value: '课程名称', label: '课程名称'}, {value: '选项2', label: '选项2'}],
        resultVal:'课程名称',
        total:100,
        currentPage:1,
      }
    },
    mounted() {

    },
    methods: {
      handleCurrentChange(val) {
      }
    }
  }
</script>
<style lang="less">
    /*下拉框字体*/
    .el-input {
        width: 370px;
        font-size: 24px;
    input {
        height: 60px;
    }
    }

    .el-select-dropdown__item {
        font-size: 26px;
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
        #course {
        width: 920px;
        background-color: #f6f6f6;
        padding: 30px;
        .vedio-list{
            h3{
                font-size: 24px;
                margin: 20px 0;
            }
            >div{
                >a{
                    overflow: hidden;
                    width: 280px;
                    margin-bottom: 30px;
                    float: left;
                    margin-right: 26px;
                    &:nth-of-type(3n){
                        margin-right: 0;
                    }
                    img{
                        width: 280px;
                        height: 280px;
                        vertical-align: bottom;
                    }
                    h3{
                        text-align: center;
                        font-size: 22px;
                        margin: 10px 0;
                    }
                }
            }
        }
    }
</style>