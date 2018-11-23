<template>
    <div id="container">

        <div class="tiding">
            <div class="des">
                {{des}}
            </div>
            <div class="time">
                {{time}}
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        data() {

            return {
                des:'您报名的',
                time:'09:45',
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>