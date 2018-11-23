<template>
    <div id="container">
        <!--顶部-->
        <ageHead></ageHead>
        <!--页面主体部分-->
        <div id="main">
            <!--导航栏-->
            <div class="myMenu">
                <el-menu :default-active="this.$route.path"
                         router
                         class="el-menu-demo"
                         mode="horizontal"
                         @select="handleSelect"
                         text-color="#778899"
                         active-text-color="#3A71A8"

                >
                    <el-menu-item v-for="(item,i) in navList"
                                  :key="i"
                                  :index="item.name">
                        {{item.navItem}}
                    </el-menu-item>
                </el-menu>
            </div>
            <router-view></router-view>

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
                navList: [
                    {
                        name: '/recommend',
                        navItem: '推荐课程'
                    }, {
                        name: '/recent',
                        navItem: '近期课程'
                    }, {
                        name: '/hot',
                        navItem: '热门课程'
                    }, {
                        name: '/star',
                        navItem: '学习之星'
                    },
                ],


            }
        },

        components: {
            ageHead,
            ageFoot,
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(`${key} + ${keyPath}`);
            },
        },
    }
</script>

<style scoped>

</style>