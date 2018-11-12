<template>
    <div id="container">
        <myHeader></myHeader>
        <myNav :type="name"></myNav>
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
            <!--学习之星-->
            <div class="rand">
                <div class="title">
                    <h3>学习之星</h3>
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
            <!--往期课程-->
            <div class="pastCourse">
                <div class="title">
                    <h3>往期课程</h3>
                    <a href="#">查看更多 ></a>
                </div>
                <ul>
                    <li v-for="(item,index) in pastCourse" :key="index">
                        <div class="img">
                            <img :src="item.img"/>
                        </div>
                        {{item.nm}}
                    </li>
                </ul>
            </div>
            <!--公告通知-->
            <div class="notice">
                <div class="title">
                    <h4>公告通知</h4>
                    <a href="notice.html?name=notice">查看更多 ></a>
                </div>
                <div class="list" v-for="(item,index) in notice" :key="index" @click="goNoticeDetail(item.ipPk)">
                    <div class="img">
                        <img :src="item.img"/>
                    </div>
                    <div class="listContent">
                        <strong>{{item.title}}</strong>
                        <p>{{item.year}}年{{item.month}}月{{item.day}}日 {{item.time}}</p>
                        <p>来源：{{item.come}}</p>
                    </div>
                </div>
            </div>
            <!--校园动态-->
            <div class="notice" style="float: right">
                <div class="title">
                    <h4>校园动态</h4>
                    <a href="notice.html?name=news">查看更多 ></a>
                </div>
                <div class="list" v-for="(item,index) in notice" :key="index" @click="goNewsDetail(item.ipPk)">
                    <div class="img">
                        <img :src="item.img"/>
                    </div>
                    <div class="listContent">
                        <strong>{{item.title}}</strong>
                        <p>{{item.year}}年{{item.month}}月{{item.day}}日 {{item.time}}</p>
                        <p>来源：{{item.come}}</p>
                    </div>
                </div>
            </div>
            <!--文件政策-->
            <div class="policy">
                <div class="title">
                    <h4>文件政策</h4>
                    <a href="policy.html">查看更多 ></a>
                </div>
                <ul>
                    <li v-for="(item,index) in policy" :key="index" @click="goPolicyDetail(item.sysNewsPk)"><p>{{item.title}}</p><span>年月日</span></li>
                </ul>
            </div>
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
      name: "home",
      videoCurrent: 0, //轮播视频当前视频
      timer: null, //定时
      videoList: [
        {
          playerOptions: {
            newsPageNo:1,
            newsPageSize:3,
            starPageSize:10,
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
          },
          videoName: "视频名字3"
        }
      ],
      rankList: [
        {
          prodStuPk: 1,
          nm: "张三",
          classStar: "108",
          prodDotNm: "宁大总部"
        },
        {
          prodStuPk: 1,
          nm: "张三",
          classStar: "108",
          prodDotNm: "宁大总部"
        },
        {
          prodStuPk: 1,
          nm: "张三",
          classStar: "108",
          prodDotNm: "宁大总部"
        },
        {
          prodStuPk: 1,
          nm: "张三",
          classStar: "108",
          prodDotNm: "宁大总部"
        },
        {
          prodStuPk: 1,
          nm: "张三",
          classStar: "108",
          prodDotNm: "宁大总部"
        },
        {
          prodStuPk: 1,
          nm: "张三",
          classStar: "108",
          prodDotNm: "宁大总部"
        },
        {
          prodStuPk: 1,
          nm: "张三",
          classStar: "108",
          prodDotNm: "宁大总部"
        },
        {
          prodStuPk: 1,
          nm: "张三",
          classStar: "108",
          prodDotNm: "宁大总部"
        },
        {
          prodStuPk: 1,
          nm: "张三",
          classStar: "108",
          prodDotNm: "宁大总部"
        },
        {
          prodStuPk: 1,
          nm: "张三",
          classStar: "108",
          prodDotNm: "宁大总部"
        }
      ],
      pastCourse: [
        {
          nm: "艾炙疗法 - 健康养生",
          img:
            "http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg"
        },
        {
          nm: "艾炙疗法 - 健康养生",
          img:
            "http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg"
        },
        {
          nm: "艾炙疗法 - 健康养生",
          img:
            "http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg"
        },
        {
          nm: "艾炙疗法 - 健康养生",
          img:
            "http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg"
        }
      ],
      notice: [
        {
          title: "班级全员满额，宁波老年大学一票难求怎么破",
          img:
            "http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg",
          come: "宁波电视大学",
          sysNewsPk:'4139210250294272',
        },
        {
          title: "艾炙疗法 - 健康养生",
          img:
            "http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg",
          come: "宁波电视大学",
          sysNewsPk:'4139210250294272',
        },
        {
          title: "艾炙疗法 - 健康养生",
          img:
            "http://e.hiphotos.baidu.com/image/pic/item/aec379310a55b3199f70cd0e4ea98226cffc173b.jpg",
          come: "宁波电视大学",
          sysNewsPk:'4139210250294272',
        }
      ],
      newList:[],
      policy: [
        {
          title: "文件名称",
          sysNewsPk:'4139210250294272',
        },
        {
          title: "文件名称",
          sysNewsPk:'4139210250294272',
        },
        {
          title: "文件名称",
          sysNewsPk:'4139210250294272',
        }
      ]
    };
  },
  mounted() {
    this.videoChange();

    // this.getNoticesList();
    // this.getNewsList();
    // this.getPolicysList();
    // this.getStarRank()
  },
  methods: {
    //轮播自动切换
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
      window.location.href = "noticeDetail.html?ipPk=" + ipPk;
    },
    //校园动态详情
    goNewsDetail(ipPk) {
      window.location.href = "newsDetail.html?ipPk=" + ipPk;
    },
    //文件政策详情
    goPolicyDetail(ipPk) {
      window.location.href = "policyDetail.html?ipPk=" + ipPk;
    },
    //通知公告
    getNoticesList(){

      let query=new this.Query();
       //拼接参数
      query.buildWhereClause("catNm", "通知公告", "EQ");
      query.buildWhereClause(this.newsPageNo, this.newsPageSize);

      let param = {
        query: query.toString()
      };
      this.until.get("/sys/news/page", param).then(
        res => {
          if (res.status === "200") {
            console.log("调用成功");
            this.notice = res.data.items;
          } else {
            console.log("状态码返回不是200");
          }
        },
        err => {
          console.log("调用失败");
        }
      );
    },
    //校园动态
    getNewsList(){

       let query=new this.Query();
       //拼接参数
      query.buildWhereClause("catNm", "校园动态", "EQ");
      query.buildWhereClause(this.newsPageNo, this.newsPageSize);

      let param = {
        query: query.toString()
      };
      this.until.get("/sys/news/page", param).then(
        res => {
          if (res.status === "200") {
            console.log("调用成功");
            this.newList = res.data.items;
          } else {
            console.log("状态码返回不是200");
          }
        },
        err => {
          console.log("调用失败");
        }
      );
    },
    //文件政策
    getPolicysList(){

       let query=new this.Query();
       //拼接参数
      query.buildWhereClause("catNm", "文件政策", "EQ");
      query.buildWhereClause(this.newsPageNo, this.newsPageSize);

      let param = {
        query: query.toString()
      };
      this.until.get("/sys/news/page", param).then(
        res => {
          if (res.status === "200") {
            console.log("调用成功");
            this.policy = res.data.items;
          } else {
            console.log("状态码返回不是200");
          }
        },
        err => {
          console.log("调用失败");
        }
      );
    },
    //学习之星排行
    getStarRank(){

      let query=new this.Query();
       //拼接参数
      query.buildWhereClause(this.newsPageNo, this.starPageSize);

      let param = {
        query: query.toString()
      };
      this.until.get("/prod/stu/starsPage", param).then(
        res => {
          if (res.status === "200") {
            console.log("调用成功");
            this.rankList = res.data.items;
          } else {
            console.log("状态码返回不是200");
          }
        },
        err => {
          console.log("调用失败");
        }
      );
    }
  },
  components: {
    myHeader,
    myNav,
    myFooter
  }
};
</script>