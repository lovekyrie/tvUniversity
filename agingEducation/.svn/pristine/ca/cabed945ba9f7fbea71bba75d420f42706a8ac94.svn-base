<template>
    <div id="container">
        <!--顶部-->
        <ageHead></ageHead>
        <!--页面主体部分-->
        <div id="main">
            <!--导航栏-->
            <div class="myMenu">
                <el-menu :default-active="activeIndex"
                         class="el-menu-demo"
                         mode="horizontal"
                         @select="handleSelect"
                         text-color="#778899"
                         active-text-color="#3A71A8"
                >
                    <el-menu-item v-for="(item,i) in navList"
                                  :key="i"
                                  :index="item.name">
                        <a href="#">{{item.navItem}}</a>
                    </el-menu-item>
                </el-menu>
            </div>
            <!--正在学习-->
            <div class="learnList">
                <!--列表顶部-->
                <div class="learnTop">
                    <span><a href="#">首页</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">在线学习</a></span>
                    <span class="topLine"> > </span>
                    <span><a href="#">正在学习</a></span>
                </div>

                <div class="classVideo">
                    <h3>{{classTitle}}</h3>
                    <!--视频-->
                    <div class="video" v-for="(item,index) in videoList" v-show="index==videoCurrent"
                         @mouseenter="videoStop()" @mouseleave="videoChange">
                        <video-player class="video-player vjs-custom-skin"
                                      ref="videoPlayer"
                                      :playsinline="true"
                                      :options="item.playerOptions"
                        ></video-player>
                    </div>
                    <menu>
                    <span :class="{active:index==videoCurrent}" v-for="(item,index) in videoList"
                          @click="videChoose(index)" @mousedown="videoStop()">
                        {{item.videoName}}
                    </span>
                    </menu>

                    <!--课程目录-->
                    <h3>所有课程</h3>
                    <div class="list">
                        <div v-for="item in classes" class="inList">
                            <a href="#"> {{item.name}}</a>
                        </div>
                    </div>
                </div>

                <!--课程介绍-->
                <div class="mainFoot">
                    <p :class="flag==1?'inActive':'active'">课程介绍 ：{{classIntroduction}}</p>
                    <div class="moreIntro">
                    <a href="javascript:void(0)" @click="moreIntro">{{clickMore}} ></a>
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
                activeIndex:'1',
                navList: [
                    {
                        name: '1',
                        navItem: '推荐课程'
                    }, {
                        name: '2',
                        navItem: '近期课程'
                    }, {
                        name: '3',
                        navItem: '热门课程'
                    }, {
                        name: '4',
                        navItem: '学习之星'
                    },
                ],

                //    video
                videoCurrent: 0,  //轮播视频当前视频
                timer: null, //定时
                videoList: [{
                    playerOptions: {
                        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                        autoplay: false, //如果true,浏览器准备好时开始回放。
                        muted: false, // 默认情况下将会消除任何音频。
                        loop: false, // 导致视频一结束就重新开始。
                        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                        language: 'zh-CN',
                        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                        sources: [{
                            type: "",
                            src: "http://vjs.zencdn.net/v/oceans.mp4",
                            // src: "rtmp://video.nblll.cn/nb111|mp4:nblllServices/宁波老年电视大学课程/Video/2018秋/中国茶文化与生活—茶文化艺术/中国茶艺的发展简史_源视频_转码视频.mp4" //url地址
                        }],
                        poster: "http://assets.jq22.com/plugin/2015-08-25-23-08-04.jpg", //你的封面地址
                        // width: document.documentElement.clientWidth,
                        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                        controlBar: {
                            timeDivider: true,
                            durationDisplay: true,
                            remainingTimeDisplay: false,
                            fullscreenToggle: true  //全屏按钮
                        }
                    },
                    videoName: '',
                }

                ],
                //正在学的课程和课程目录
                classTitle:'中华美食1.1',
                classes:[
                    {
                        name:'中华美食1.1'
                    },{
                        name:'中华美食1.2'
                    },{
                        name:'中华美食1.3'
                    },{
                        name:'中华美食1.4'
                    },{
                        name:'中华美食1.5'
                    },{
                        name:'中华美食1.6'
                    },{
                        name:'中华美食1.7'
                    },{
                        name:'中华美食1.8'
                    },
                ],

                classIntroduction:'中国从史前时代的食物到发现食物，中国从史前时代的食物到发现食物中国从史前时代的食物到发现食物。' +
                '中国从史前时代的食物到发现食物中国从史前时代的食物到发现食物中国从史前时代的食物到发现食物中国从史前时代的食物到发现食物。',
                flag:'1',
                clickMore:'更多详情 ',

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

            //展开更多介绍
            moreIntro(){
                if(this.clickMore=='更多详情 '){
                    this.flag='2';
                    this.clickMore='隐藏 ';
                }
                else {
                    this.flag='1';
                    this.clickMore='更多详情 '
                }
            },

            //轮播自动切换
            videoChange(){
                this.timer = setInterval(()=>{
                    if(this.videoCurrent<this.videoList.length-1){
                        this.videoCurrent++
                    }else {
                        this.videoCurrent = 0
                    }
                    // console.log(this.videoCurrent)
                },2000)
            },
            // 轮播选择
            videChoose(val){
                this.videoCurrent = val
                this.videoChange()
            },
            //鼠标放上去时,轮播停止
            videoStop(){
                clearInterval(this.timer)
            },
        },
    }
</script>

<style scoped>

</style>