<style lang="less">
    .el-select>.el-input{
        width: 165px;
    }
    .searchCnt{
        display: inline-block;
        width: auto;
        .el-input__inner{
            width: 310px;
        }
        input{
            font-size: 20px;
        }
    }
    .el-select,.el-input{
        float: left;
    }
    .el-select{
        margin-right: 20px;
        input{
            font-size: 20px;
        }
    }
    .el-input__inner{
        height: 45px;
    }
    .el-select-dropdown__item{
        font-size: 20px;
        height: 45px;
    }
</style>
<template>
    <div class="g-content">
        <!--链接栏-->
        <div class="r-link cm-container">
            <a href="../home/index.html">首页</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a :href="stlink">在线学习</a><span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span><a href="">正在学习</a>
        </div>
        <!--内容-->
        <div class="r-option">
            <!--标题-->
            <h3 class="r-tit">中华美食1.1</h3>
            <div class="r-video">
                <!--<embed src='http://player.youku.com/player.php/sid/XMzQyMTk1NzM5Ng==/v.swf' allowFullScreen='true' quality='high' width='800' height='500' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash'></embed>-->
                <video-player  class="video-player vjs-custom-skin"
                               ref="videoPlayer"
                               :playsinline="true"
                               :options="playerOptions"
                               @play="onPlayerPlay($event)"
                               @pause="onPlayerPause($event)"
                               @timeupdate="onPlayerTimeupdate($event)"
                               @ready="playerReadied"
                >
                </video-player>

            </div>
            <div class="r-xz">
                <h3 class="r-tit">所有课程</h3>
                <div class="clearfix"><div v-for="(item,index) in 15"><span :class="tabNum==index?'f-xzr':''" @click="tabChange(index)">中华美食1.1</span></div></div>
            </div>
        </div>
        <div class="r-cnt" v-if="showMore">
            <p class="f-art">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
            <a href="javascript:void(0)" @click="moreBtn">更多详情 ></a>
        </div>
        <div class="r-cnt" v-if="!showMore">
            <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        </div>
    </div>
</template>
<script>
  import { videoPlayer } from 'vue-video-player';
  export default {
    data(){
      return{
        stlink:'',
        showMore:true,
        tabNum:0,
        playerOptions: {
//        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" //你的m3u8地址（必填）
          }],
//          poster: "poster.jpg", //你的封面地址
          width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
//        controlBar: {
//          timeDivider: true,
//          durationDisplay: true,
//          remainingTimeDisplay: false,
//          fullscreenToggle: true  //全屏按钮
//        }
        }
      }
    },
    methods:{
      moreBtn(){
        this.showMore=false;
      },
      tabChange(index){
        this.tabNum=index;
        /*改变视频的路径*/
      },
      onPlayerPlay(player) {
//        alert("play");
      },
      onPlayerPause(player){
//        alert("pause");
      },
      onPlayerTimeupdate(player) {
         console.log('player Timeupdate!', player.currentTime())
      },
      playerReadied(player) {
        player.currentTime(30)
      }
    },
    mounted(){
      this.stlink = '#'+this.$route.params.link;
//      this.player.currentTime(20);
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    compoents:{
      videoPlayer
    }
  }
</script>
<style lang="less">
    .vjs_video_3-dimensions{
        width: 100%;
        height: 500px;
    }
    .video-js .vjs-big-play-button{
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .vjs-playback-rate{
        display: none;
    }
    .video-js .vjs-progress-control{
        pointer-events: none;
    }
</style>
<style lang="less" scoped>
    .size {
        h2{
            font-size: 30px !important;
        }
        h3 {
            font-size: 28px !important;
        }
        span {
            font-size: 26px !important;
        }
        input {
            font-size: 26px !important;
        }
        button {
            font-size: 26px !important;
        }
        a {
            font-size: 26px !important;
        }
        li{
            font-size: 26px !important;
        }
        p{
            font-size: 22px !important;
        }
    }
    @bdColor: #e1e1e1;
    /*公共样式*/
    .cm-container {
        width: 1200px;
        margin: 0 auto;
    }
    /*链接栏*/
    .r-link {
        height: 85px;
        line-height: 85px;
        color: #999;
        font-size: 20px;
        border-bottom: 1px solid @bdColor;
        a {
            display: inline-block !important;
            width: auto !important;
            color: #999;
        }
        span {
            vertical-align: middle;
        }
    }
    /*内容*/
    .r-option{
        padding-bottom: 30px;
        border-bottom: 1px solid @bdColor;
        .r-tit{
            width: 800px;
            margin: 30px auto;
            font-size: 24px;
            line-height: 1.5;
        }
        .r-video{
            /*width: 800px;*/
            /*height: 500px;*/
            margin: 0 auto;
        }
        .r-xz{
            width: 800px;
            margin: 0 auto;
            >div{
                width: 800px;
                >div{
                    float: left;
                    height: 45px;
                    line-height:45px;
                    color: #b0b0b0;
                    span{
                        cursor: pointer;
                        &.f-xzr{
                            color: red;
                        }
                    }
                    &:nth-of-type(4n+1){
                        width: 150px;
                        text-align: left;
                    }
                    &:nth-of-type(4n+2),&:nth-of-type(4n+3){
                        width: 250px;
                        text-align: center;
                    }
                    &:nth-of-type(4n+4){
                        width: 150px;
                        text-align: right;
                    }
                }
            }
        }
    }
    .r-cnt{
        text-align: center;
        width: 800px;
        margin: 0 auto;
        margin-bottom: 100px;
        p{
            margin-top: 40px;
            margin-bottom: 20px;
            text-align: left;
            line-height: 1.5;
            color: #1b1b1b;
            &.f-art{
                overflow:hidden;
                text-overflow:ellipsis;
               white-space: nowrap;
            }
        }
        a{
            width: auto;
            color: #3a71a8;
        }
    }
</style>