<template>
    <div id="container">
        <myHeader></myHeader>
        <myNav :type="name"></myNav>
        <div class="content">
            <div class="pos">
                 首页 > 当前课程 > 课程内容
            </div>
            <div id="studyDetail">
                <div class="top">
                    <h1>{{info.title}}</h1>
                    <p>课程学习星：{{info.star}}<span></span> 浏览人次：{{info.visitorNum}}<span></span> 完成人次：{{info.compeletedNum}}</p>
                </div>
                <div class="video">
                    <div class="sign" v-show="!ifSign"><img src="../img/sign.png" @click="sign()"/> </div>
                    <video-player  class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions"
                    ></video-player>
                </div>
                <div class="intro">
                    <h3>课程简介</h3>
                    <p>{{info.content}}</p>
                </div>
            </div>
            <!--集体签到弹出-->
            <el-dialog
                    title="学员列表"
                    :visible.sync="dialogVisible"
                    width="60%"
                    :before-close="handleClose">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox :label="item.id" v-for="(item,index) in signList" :key="index">{{item.nm}}<span class="space"></span>性别：{{item.sex}}</el-checkbox>
                </el-checkbox-group>
                <span slot="footer" class="dialog-footer">
                    <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
                    <el-button type="primary" @click="dialogVisible = false">今日签到</el-button>
                </span>
            </el-dialog>
        </div>
        <myFooter></myFooter>
    </div>
</template>
<script>
import myHeader from "@/components/myHeader";
import myNav from "@/components/myNav";
import myFooter from "@/components/myFooter";
export default {
  data() {
    return {
      name: "study",
      ifSign: false, //是否签到过
      dialogVisible: false, //集体签到弹出
      checkList: [], //集体签到选中的列表
      signList: [
        {
          nm: "姓名",
          sex: "男",
          id: 1
        },
        {
          nm: "姓名",
          sex: "男",
          id: 2
        },
        {
          nm: "姓名",
          sex: "男",
          id: 3
        },
        {
          nm: "姓名",
          sex: "男",
          id: 4
        },
        {
          nm: "姓名",
          sex: "男",
          id: 5
        },
        {
          nm: "姓名",
          sex: "男",
          id: 6
        },
        {
          nm: "姓名",
          sex: "男",
          id: 7
        },
        {
          nm: "姓名",
          sex: "男",
          id: 8
        },
        {
          nm: "姓名",
          sex: "男",
          id: 0
        },
        {
          nm: "姓名",
          sex: "男",
          id: 10
        }
      ], //集体签到列表
      info: {
        ipPk: "",
        title: "中国茶文化与艺术-茶文化艺术",
        star: 150,
        visitorNum: 11,
        compeletedNum: 10,
        content: "课程简介"
      },
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src: "http://vjs.zencdn.net/v/oceans.mp4"
            // src: "rtmp://video.nblll.cn/nb111|mp4:nblllServices/宁波老年电视大学课程/Video/2018秋/中国茶文化与生活—茶文化艺术/中国茶艺的发展简史_源视频_转码视频.mp4" //url地址
          }
        ],
        poster: "http://assets.jq22.com/plugin/2015-08-25-23-08-04.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  mounted() {
    let stuState = this.until.getQueryString("stuState");
    if (stuState === "再次学习" || stuState === "继续学习") {
      this.ifSign = true;
    }

    this.classPk=this.until.getQueryString("classPk")
    this.getStudyInfo()
  },
  methods: {
    //更改当前页数
    handleCurrentChange(val) {},
    //弹窗关闭
    handleClose(done) {
      done();
    },
    //集体签到弹窗弹出
    sign() {
      this.dialogVisible = false;
      this.ifSign = true;
    },
    getStudyInfo(){
      
    }
  },
  watch: {
    checkList: function(val) {
      console.log(val);
    }
  },
  components: {
    myHeader,
    myNav,
    myFooter
  }
};
</script>