<template>
    <div id="container">
        <!--顶部-->
        <ageHead></ageHead>
        <!--页面主体部分-->
        <div id="main">

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