<template>
    <div id="container">
        <myHeader></myHeader>
        <myNav :type="name"></myNav>
        <div class="content">
            <div class="pos">
                 返回首页 > 搜索
            </div>
            <div class="list" v-for="(item,index) in list" :key="index" @click="toDetail(item.ipPk)">
                <div class="img">
                    <img :src="item.img"/>
                </div>
                <div class="listContent">
                    <div>
                        <strong>{{item.title}}</strong>
                        <p v-if="item.content">{{item.content}}</p>
                    </div>

                    <p>{{item.year}}年{{item.month}}月{{item.day}}日 {{item.time}}<span></span>来源：{{item.come}}</p>
                </div>
            </div>
            <!--分页-->
            <el-pagination
                    background
                    @current-change="handleCurrentChange"
                    :current-page.sync="pageNo"
                    :page-size="pageSize"
                    layout="total, prev, pager, next"
                    :total="total">
            </el-pagination>
        </div>
        <myFooter></myFooter>
    </div>
</template>
<script>
    import myHeader from "@/components/myHeader"
    import myNav from "@/components/myNav"
    import myFooter from "@/components/myFooter"
  export default {
    data() {
      return {
          name:'news',
          pageNo:1,
          pageSize:10,
          total:100,
          key:'', //搜索关键词
          list:[{
              title:'班级全员满额，宁波老年大学一票难求怎么破',
              img:'http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg',
              come:'宁波电视大学',
              content:'简介信息'
          },{
              title:'艾炙疗法 - 健康养生',
              img:'http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg',
              come:'宁波电视大学',
              content:'简介信息'
          },{
              title:'艾炙疗法 - 健康养生',
              img:'http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg',
              come:'宁波电视大学',
              content:'简介信息'
          }],
      }
    },
    mounted() {
        this.key = this.until.getQueryString('key')
    },
    methods: {
        //更改当前页数
        handleCurrentChange(val){

        },
        toDetail(ipPk){
            window.location.href = 'newsDetail.html?ipPk='+ipPk
        }
    },
    components: {
        myHeader,myNav,myFooter
    }
  }
</script>