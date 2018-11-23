<template>
    <div id="container">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-6" v-for="item in certification">
                    <img :src="item.url">
                    <p>{{item.cerName}}</p>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data(){

            return{
                certification:[
                    {
                        url:require('../img/我的证书.png'),
                        cerName:'证书1',
                    },{
                        url:require('../img/我的证书.png'),
                        cerName:'证书1',
                    },{
                        url:require('../img/我的证书.png'),
                        cerName:'证书1',
                    },{
                        url:require('../img/我的证书.png'),
                        cerName:'证书1',
                    },
                ]
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>