<template>
    <div id="container">
        <!--顶部-->
        <ageHead></ageHead>
        <!--页面主体部分-->
        <div id="main">
            <!--成果分类按钮-->
            <div class="selectBtn">
                <a href="#">文字集锦</a>
                <a href="#">书画摄影</a>
                <a href="#">活力视频</a>
            </div>
            <!--列表-->
            <div class="achList">
                <!--列表顶部-->
                <div class="achTop">
                    <span><a href="#">首页</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">成果交流</a></span>
                </div>
                <!--输入表单-->
                <div class="achForm">
                    <el-form ref="form" :model="form" label-width="60px" label-position="left">
                        <el-form-item label="标题:">
                            <el-input v-model="form.title" placeholder="请输入标题名称"></el-input>
                        </el-form-item>
                        <el-row :gutter="50">
                            <el-col :span="8">
                                <el-form-item label="作者:">
                                    <el-input v-model="form.antuor" placeholder="请输入作者"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="班级:">
                                    <el-input v-model="form.classes" placeholder="请输入班级"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="类别:">
                                    <el-select v-model="form.type" placeholder="成果分类" style="width: 100%">
                                        <el-option label="type1" value="1"></el-option>
                                        <el-option label="type2" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>

                    <div class="editor">
                        <h3>发表成果交流</h3>

                    </div>
                </div>

            </div>
        </div>

        <!--底部-->
        <ageFoot></ageFoot>
    </div>
</template>

<script>
    import ageHead from 'components/ageHead';
    import ageFoot from 'components/ageFoot';

    export default {
        data() {
            return {
                form: {
                    title: '',
                    author: '',
                    classes: '',
                    type: ''
                }
            }
        },
        components: {
            ageHead,
            ageFoot,
        },
        methods: {


        },
    }
</script>

<style scoped>

</style>