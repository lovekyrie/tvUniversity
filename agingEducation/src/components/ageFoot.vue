<template>
    <div id="ageFoot">
        <div class="footRow1">
            <span><a href="#">宁波广播电视大学</a></span>
            <span><a href="#">宁波电大老年教育网</a></span>
            <span><a href="#">宁波老年实体办学网</a></span>
            <span style="border: none;"><a href="#">宁波电视大学网</a></span>
        </div>

        <div class="footRow2">
            <span style="margin-right: 85px">联系方式：0516-34534352</span>
            <span>电子邮箱：11234525@qq.com</span>
        </div>
        <div class="footRow3">
            <span>2016©️ 版权所有 沪ICP备05052049</span>
        </div>

    </div>

</template>

<script>
    export default {
        name: ""
    }
</script>

<style lang="less" type="text/less">
    #ageFoot {
        display: flex;
        flex-direction: column;
        min-width: 1060px;
        height: 110px;
        padding-top: 20px;
        background-color: rgb(245, 245, 245);
        align-items: center;
        border-top: 1px solid rgb(225, 225, 225);
        color: rgb(135, 135, 135);

        /*所有底部链接样式*/
        a{
            text-decoration: none;
            color: rgb(135, 135, 135);
        }

        /*第一行*/
        .footRow1 {
            margin-bottom: 10px;
            >span{
                display: inline-block;
                padding-right: 40px;
                margin-right: 40px;
                border-right: 1px solid rgb(145,145,145);
            }


        }

    }

</style>