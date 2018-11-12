<template>
    <transition name="load">
        <div class="load-wrap" v-if="show">
            <header v-if="hasheader"></header>
            <div class="s-loading">
                <div class="load-img">
                    <div class="load-icon" :style="{backgroundPositionY: -(positionY%7)/18*50 + 'rem'}"></div>
                    <svg class="load_ellipse" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <ellipse cx="20" cy="10" rx="20" ry="10" style="fill:#ddd;stroke:none;"></ellipse>
                    </svg>
                </div>
            </div>
            <footer v-if="hasfooter"></footer>
        </div>
    </transition>
</template>
<script>
    export default {
      data(){
        return{
          positionY: 0,
          timer: null
        }
      },
      props:{
        show:{
          type:Boolean,
          default:true
        },
        hasfooter:{
          type:Boolean,
          default:true,
        },
        hasheader:{
          type:Boolean,
          default:true,
        }
      },
      watch:{
        show(val){
          if(!val){
            clearInterval(this.timer);
          }
        }
      },
      mounted(){
        this.timer = setInterval(() => {
          this.positionY ++;
        }, 600)
      }
    }
</script>
<style lang="less">
    @base:18rem;
    @keyframes load{
        0%   {transform: translateY(0px);}
        50%  {transform: translateY(-50px);}
        100% {transform: translateY(0px);}
    }
    @keyframes ellipse{
        0%   {transform: scale(1);}
        50%  {transform: scale(0.3);}
        100% {transform: scale(1);}
    }
.load-wrap{
    background-color: transparent;
    position: absolute;
    z-index: 260;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    header{
        height: 2.5rem;
    }
    footer{
        height: 51/@base;
    }
}
.s-loading{
    flex: 1;
    width: 100%;
    position: relative;
    background-color: white;
}
.load-icon{
    width: 100%;
    height: 100%;
    background: url('../img/icon_loading.png') no-repeat 0 0;
    animation: load .6s infinite ease-in-out;
    background-size: 100% auto;
}
.load-img{
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 261;
    transform: translate(-50%,-50%);
    width: 50/@base;
    height: 50/@base;
}
.load_ellipse{
    position: absolute;
    top: 100%;
    z-index: 261;
    top: 100%;
    left: 5/@base;
    width: 50/@base;
    height: 40/@base;
    animation: ellipse .6s infinite ease-in-out;
}
.load-enter-active, .load-leave-active {
    transition: opacity .3s ease;
}
.load-enter, .load-leave-to {
    opacity: 0;
}
</style>