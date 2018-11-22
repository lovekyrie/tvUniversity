<template>
    <div id="course" scoped>
        <!--下拉框-->
        <div class="c-tit">
            <el-select v-model="result">
                <el-option
                        v-for="item in resultAll"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>

        <!--内容-->
        <div class="c-cnt clearfix">
            <div class="c-c-l" v-for="item in signAll"  @click="msglink"><span>{{item.content}}</span><span>{{item.time}}</span></div>
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
        resultAll: [{value: '全部消息', label: '全部消息'}, {value: '选项2', label: '选项2'}],
        result:'全部消息',
        signAll: [],
        sign: {content: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦', time: '2017.11.14 12:11'},
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

      },
      msglink(){
        this.$router.push('/mymsgcenter/msgcentercnt');
      }
    }
  }
</script>

<style lang="less" scoped>
    #course {
        width: 920px;
        background-color: #f6f6f6;
        padding: 30px;
        /*内容*/
        .c-cnt {
            .c-c-l{
                padding-left: 25px;
                height: 85px;
                line-height:85px;
                border-bottom: 1px solid #e1e1e1;
                font-size: 24px;
                span{
                    display: inline-block;
                    height: 85px;
                    line-height:85px;
                    vertical-align: middle;
                    &:nth-of-type(1){
                        width: 650px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        cursor: pointer;
                    }
                    &:nth-of-type(2){
                        text-align: center;
                        width: 240px;
                        font-size: 22px;
                        color:#bdbdbd;
                    }
                }
            }
        }
    }
</style>