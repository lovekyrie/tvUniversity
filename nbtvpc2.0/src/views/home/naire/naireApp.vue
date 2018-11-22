<template>
  <div>
    <AllHead></AllHead>

    <div class="g-content" ref="size">

      <div class="naire">
        <h2>宁波老年大学问卷调查</h2>
        <div class="item" v-for="(item,index) in items">
          <p><em v-if="item.must">*</em>{{index+1}}.{{item.question}} <ins v-if="item.type==1" >[多选题]</ins></p>
          <span v-if="item.type==0" v-for='(val,zIndex) in item.check' :class="{active:zIndex==item.iScur}" @click="radio(item,index,val,zIndex)">{{val}}</span>
          <span v-if="item.type==1" v-for='(val,zIndex) in item.check' :class="{active:item.checked.indexOf(val)!=-1}" @click="check(item,index,val,zIndex)">{{val}}</span>
          <textarea v-if="item.type==2" v-model="item.text"></textarea>
        </div>

        <h4><button>提交</button></h4>
      </div>


    </div>

    <McFoot></McFoot>

  </div>
</template>
<script>



    /*头部组件*/
    import AllHead from 'components/allHead';

    /*底部组件*/
    import McFoot from 'components/McFoot';


    export default {

        data() {
            return {

                items:[
                    {
                        question:'性别',
                        check:['男','女'],
                        type:0,
                        must:true,
                        iScur:-1,
                        checked:[]
                    },
                    {
                        question:'年龄',
                        check:['60岁以下','61-69岁','70岁以上'],
                        type:0,
                        must:true,
                        iScur:-1,
                        checked:[]
                    },
                    {
                        question:'课程',
                        check:['舞蹈','声乐','绘画','电竞','其他'],
                        type:1,
                        must:true,
                        iScur:-1,
                        checked:[]
                    },
                    {
                        question:'您认为老年培训班离家的距离应为多远?',
                        text:'',
                        type:2,
                        must:false,
                    },
                ]
            }
        },
        //相关操作事件
        methods: {
            radio(item,index,val,zIndex){
                if(this.items[index].iScur==zIndex){
                    this.items[index].iScur=-1;
                    this.items[index].checked=[];
                    return false
                }
                this.items[index].iScur=zIndex;
                this.items[index].checked=[val];
            },
            check(item,index,val,zIndex){
                if(this.items[index].checked.indexOf(val)!=-1){
                    this.items[index].checked.splice(this.items[index].checked.indexOf(val),1);
                    return false
                }
                this.items[index].checked.push(val)
            }

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