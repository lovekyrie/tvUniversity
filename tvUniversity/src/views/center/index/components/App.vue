<template>
    <div id="container">
        <myHeader :type="name"></myHeader>
        <!-- 轮播 -->
        <swiper></swiper>
        <div class="content">
          <!--当前课程-->
          <div class="currentCourse">
              <div class="title">
                  <h3>当前课程</h3>
              </div>
              <div class="video" v-for="(item,index) in videoList" :key="index" v-show="index==videoCurrent" @mouseenter="videoStop()" @mouseleave="videoChange">
                  <video-player  class="video-player vjs-custom-skin"
                                  ref="videoPlayer"
                                  :playsinline="true"
                                  :options="item.playerOptions"
                  ></video-player>
              </div>
              <menu>
                  <span :class="{active:index==videoCurrent}" v-for="(item,index) in videoList" :key="index" @click="videChoose(index)" @mousedown="videoStop()">
                      {{item.videoName}}
                  </span>
              </menu>
          </div>
       
          <!--公告通知-->
          <div class="notice">
              <div class="title">
                  <h3>通知公告</h3>
                  <a href="notice.html?name=notice">查看更多 ></a>
              </div>
              <div class="list" v-for="(item,index) in notice" :key="index" @click="goNoticeDetail(item.sysNewsPk)">
                  <div class="listContent">
                      <strong>{{item.nm}}</strong>
                      <p>{{item.year}}年{{item.month}}月{{item.day}}日 {{item.time}}</p>
                  </div>
              </div>
          </div>
             <!--学习之星-->
          <div class="rand">
              <div class="title">
                  <h3>学习之星</h3>
                  <a href="starRank.html">查看更多 ></a>
              </div>
              <div class="list">
                  <p>
                      <span>排名</span>
                      <span>姓名</span>
                      <span>学习之星</span>
                      <span>教学点</span>
                  </p>
                  <p v-for="(item,index) in rankList" :key="item.prodStuPk">
                      <span>{{index+1}}</span>
                      <span>{{item.nm}}</span>
                      <span>{{item.classStar}}</span>
                      <span>{{item.prodDotNm}}</span>
                  </p>
              </div>
          </div>
        </div>
        <myFooter></myFooter>
    </div>
</template>
<script>
import myHeader from "@/components/myHeader";
import myFooter from "@/components/myFooter";
import swiper from './swiper'

export default {
  data() {
    return {
      name: "home",
      videoCurrent: 0, //轮播视频当前视频
      timer: null, //定时
      newsPageNo: 1,
      videoPageSize:1,
      newsPageSize: 3,
      pastPageSize: 4,
      starPageSize: 10,
      videoList: [
        {
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
          },
          videoName: "视频名字"
        },
        {
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
          },
          videoName: "视频名字2"
        },
        {
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
          },
          videoName: "视频名字3"
        }
      ],
      rankList: [],
      pastCourse: [],
      notice: [],
      policy: []
    };
  },
  mounted() {
    this.videoChange();

    this.getShowInfo();
  },
  methods: {
    //轮播自动切换
    async getShowInfo() {
      this.notice = await this.getNoticesList();
      this.notice = this.addObjectPropertyOfList(this.notice);

      this.rankList = await this.getStarRank();

      let classArr=await this.getCurrentCourseList();
      if(classArr.length===2){
        this.videoList=this.videoList.slice(0,-1)
      }
      else if(classArr.length===1){
        this.videoList=this.videoList.slice(0,-2)
      }
      //根据当前的课程ID去查数据
      this.getVideoList(classArr);
    },
    toCourseDetail(classPk, statNm, nm) {
      let stuState = "";
      if (statNm === "已学") {
        stuState = "再次学习";
      } else if (statNm === "在学") {
        stuState = "继续学习";
      } else {
        stuState = "开始学习";
      }
      window.location.href =
        "studyDetail.html?classPk=" +
        classPk +
        "&stuState=" +
        stuState +
        "&nm=" +
        nm;
    },
    videoChange() {
      this.timer = setInterval(() => {
        if (this.videoCurrent < this.videoList.length - 1) {
          this.videoCurrent++;
        } else {
          this.videoCurrent = 0;
        }
        console.log(this.videoCurrent);
      }, 2000);
    },
    // 轮播选择
    videChoose(val) {
      this.videoCurrent = val;
      this.videoChange();
    },
    //鼠标放上去时,轮播停止
    videoStop() {
      clearInterval(this.timer);
    },
    //公告通知
    goNoticeDetail(ipPk) {
      window.location.href = "noticeDetail.html?newPk=" + ipPk;
    },
    //给数据对象增加年月日属性
    addObjectPropertyOfList(list) {
      var that = this;

      list.forEach(item => {
        let time = that.until.formatDate(item.releTm);
        item["year"] = time.year;
        item["month"] = time.month;
        item["day"] = time.day;
        item["time"] = time.hour + ":" + time.minite;
      });

      return list;
    },
    //通知公告
    getNoticesList() {
      return new Promise((resolve, reject) => {
        let query = new this.Query();
        //拼接参数
        query.buildWhereClause("catNm", "通知公告", "EQ");
        query.buildPageClause(this.newsPageNo, this.newsPageSize);

        let param = query.getParam();
        this.until.get("/sys/news/pag", param).then(
          res => {
            if (res.status === "200") {
              resolve(res.data.items);
            } else {
              console.log("状态码返回不是200");
            }
          },
          err => {
            console.log("调用失败");
          }
        );
      });
    },
    //学习之星排行
    getStarRank() {
      return new Promise((resolve, reject) => {
        let query = new this.Query();
        //拼接参数
        query.buildPageClause(this.newsPageNo, this.pastPageSize);
        let param = {
          query: query.toString()
        };
        this.until.get("/prod/stu/starsPage", param).then(
          res => {
            if (res.status === "200") {
              console.log("调用成功");
              resolve(res.data.items);
            } else {
              console.log("状态码返回不是200");
            }
          },
          err => {
            console.log("调用失败");
          }
        );
      });
    },
    //当前课程
    getCurrentCourseList(){
      return new Promise((resolve,reject)=>{
        let query=new this.Query()
        query.buildPageClause(this.newsPageNo,this.newsPageSize)
        query.buildOrderClause('unlockTm','desc')

        let param=query.getParam()
        this.until.get('/prod/cls/pag',param).then(
          res=>{
            if(res.status==='200'){
              let newClassArr= res.data.items.map(item=>{
               let obj={}
               obj['prodClassPk']=item.prodClassPk
               return obj
             })
             resolve(newClassArr)
            }
          },
          err=>{}
        )
      })
    },
    getVideoList(arr){

      arr.forEach((item,index)=>{
        
        let query=new this.Query()
        query.buildPageClause(this.newsPageNo,this.videoPageSize)

        let param={
          ClassPk:item.prodClassPk,
          query:query.getParam()
        }
        //调用
        this.until.get('/prod/ware/page',param).then(
          res=>{
            if(res.status==='200'){
              this.videoList[index].playerOptions.sources.push(
                {
                  type: "video/mp4",
                  src: res.data.items[0].videoUrl
                }
              )
              if(res.data.items.length>0){
                this.videoList[index].videoName=res.data.items[0].nm
              }
              this.until.get('/prod/class/info/'+item.prodClassPk).then(res=>{
                 this.videoList[index].playerOptions.poster=res.data.imgUrl
              })
            }
          },
          err=>{}
        )
      })
    }
  },
  components: {
    myHeader,
    myFooter,
    swiper
  }
};
</script>