<template>
    <div id="course" scoped>
        <!--下拉框-->
        <div class="c-tit">
            <el-select v-model="resultVal">
                <el-option
                        v-for="item in resultAll"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>

        <!--内容-->
        <div class="c-c-t"><span>课程名称</span><span>签到时间</span></div>
        <div class="c-cnt clearfix">
            <div class="c-c-l c-c-t" v-for="item in signAll"><span>{{item.classname}}</span><span>{{item.time}}</span>
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
        signAll: [],
        sign: {classname: '手榴弹制造', time: '2017.11.14 12:11'},
        total:100,
        currentPage:1,
      }
    },
    mounted() {
      var i = 5;
      while (i--) {
        this.signAll.push(this.sign);
      }
    },
    methods: {
      handleCurrentChange(val) {

      }
    }
  }
</script>

<style lang="less" scoped>
    #course {
        width: 920px;
        background-color: #f6f6f6;
        padding: 30px;
        .c-c-t {
            height: 85px;
            line-height: 85px;
            border: 1px solid #e1e1e1;
            font-size: 22px;
            padding: 0 60px;
            color: #666;
            background-color: #fff;
            margin-top: 30px;
            span {
                display: inline-block;
                &:nth-of-type(1) {
                    width: 540px;
                }
                &:nth-of-type(2) {
                    width: 210px;
                }
            }
        }
        /*内容*/
        .c-cnt {
            min-height: 300px;
            border-left: 1px solid #e1e1e1;
            border-right: 1px solid #e1e1e1;
            .c-c-l {
                margin-top: 0;
                border: 0;
                border-bottom: 1px solid #e1e1e1;
                font-size: 22px;
                color: #000;
            }
        }
    }
</style>