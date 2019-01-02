<template>
  <div style="height: 100%" id="container">
    <ageHead></ageHead>
    <div class="g-content g-content-footer" ref="size">
      <div class="home" style="margin-top: 20px;">
        <div class="new-list">
          <div class="title">
            <img :src="video" alt>
            <h3>校园动态</h3>
          </div>
          <div @click="toDetail(item.televNewsPk)" class="new-item" v-for="(item, index) in items" :key="index">
            <!-- <img :src="icon" alt=""> -->
            <p>{{item.titleNm}}</p>
            <span>{{item.createTm}}</span>
          </div>
        </div>
        <img src="./img/home.png"  usemap="#Map" border="0">
        <map name="Map" id="Map">
          <!--精彩活动-->
          <!--<area shape="poly" coords="291,316,242,283,199,266,176,252,150,246,124,242,98,244,79,249,73,250,57,258,51,266,35,276,26,287,13,296,8,313,6,325,3,342,2,353,2,366,4,379,4,391,7,408,9,419,17,429,24,441,31,448,44,457,57,462,64,468,82,475,88,480,101,481,111,483,131,481,140,482,161,481,176,474,186,463,203,460,237,446,271,425,282,416,289,412" href="../activity/index.html" />-->
          <area
            shape="poly"
            coords="248, 266, 120, 207, 92, 207, 59, 218, 23, 243, 9, 272, 2, 299, 3, 329, 21, 369, 57, 401, 98, 411, 123, 408, 249, 350, 239, 312, 239, 297"
            href="../phyEducation/excitingAct.html"
          >
          <!--校园动态-->
          <area
            shape="poly"
            coords="255,255,134,167,114,123,120,75,141,38,188,9,228,5,270,18,301.5,48,318,92,326,218,291,224,273,237"
            href="../new/list.html"
          >
          <!--<area shape="poly" coords="384,251,384,202,383,181,382,151,381,130,377,109,377,87,366,72,352,51,329,32,313,15,286,12,248,6,200,16,168,40,156,51,150,71,137,100,137,133,141,157,147,180,156,202,173,224,207,242,244,266,264,286,285,290,296,297,300,304" />-->
          <!--成果交流-->
          <!--<area shape="poly" coords="298,420,244,446,221,467,173,497,147,534,138,558,135,588,135,615,141,638,148,655,161,667,175,681,184,690,211,699,222,705,251,708,271,711,295,711,319,699,337,691,348,673,360,652,371,633,373,612,381,591,384,570,387,540,385,515,387,500,386,484,387,467" href="../reslut/index.html" />-->
          <area
            shape="poly"
            coords="252,355.5,132,442.5,117,471,117,526.5,141,568.5,181.5,597,219,604.5,276,586.5,306,552,318,516,327,399,289.5,388.5,268.5,373.5"
            href="../achievementsCom/subAch.html"
          >

          <!--荣耀展厅-->
          <area
            shape="poly"
            coords="334.5,396,346.5,532.5,381,585,429,604.5,486,595.5,537,546,546,499.5,531,448.5,405,355.5,372,385.5"
            href="../honour/search.html"
          >
          <!--<area shape="poly" coords="394,470,395,519,395,557,399,583,404,614,412,639,420,661,432,681,457,693,480,701,499,710,525,711,551,707,574,700,591,688,606,677,618,658,628,642,635,625,643,604,645,588,639,565,634,548,627,533,610,513,595,497,580,485,564,471,556,466,536,455,527,448,510,437,489,424,477,418,471,415" />-->
          <!--实体办学-->
          <!--<area shape="poly" coords="481,312,537,279,589,252,628,244,665,237,699,250,716,261,730,272,745,283,759,302,767,329,770,340,772,365,768,387,761,405,756,426,743,444,736,449,730,454,705,467,685,478,673,480,639,485,602,474,576,464,550,448,521,437,495,421,478,412" href="../school/index.html" />-->
          <area
            shape="poly"
            coords="408,348,547.5,409.5,610.5,391.5,654,330,652.5,274.5,612,223.5,544.5,205.5,408,264,418.5,306"
            href="../phyEducation/phyeducationMain.html"
          >

          <!--电视大学-->
          <!--<area shape="poly" coords="477,306,529,271,561,249,597,227,616,205,631,183,643,156,645,132,644,104,637,89,632,79,624,65,618,50,606,39,592,29,578,19,558,14,535,10,489,9,470,15,445,33,431,44,420,56,408,81,407,95,399,120,394,140,394,159,390,182,391,202,389,220,389,238,392,248,392,252,389,258" href="../tvuvs/index.html" />-->
          <area
            shape="poly"
            coords="402,256.5,529.5,166.5,544.5,109.5,531,55.5,492,19.5,444,7.5,384,24,351,64.5,333,216,370.5,226.5"
            href="http://218.71.137.186:44185/dist/views/center/index.html"
          >
        </map>
        <!--<p><a href="../apply/rule.html">在线报名</a><a href="../study/course.html">在线学习</a><a href="../center/center.html">个人空间</a><a href="./naire.html">问卷调查</a></p>-->
      </div>
      <p class="bottom">
        <a href="../apply/rule.html">在线报名</a>
        <a href="../apply/pay.html">在线缴费</a>
      </p>
    </div>
    <ageFoot></ageFoot>
  </div>
</template>
<script>
import ageHead from "components/ageHead";
import ageFoot from "components/ageFoot";
import video from "./img/voice.png";
import iconG from './img/iconG.png';
import icon from './img/icon.png';

export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 3,
      items: [],
      video,
      iconG,
      icon
    };
  },
  mounted() {
    this.getMsg();
  },
  methods: {
    building() {
      this.$alert("该功能正在建设中", "提示", {
        confirmButtonText: "确定"
      });
    },
    getMsg() {
      let query = new this.Query();
      query.buildWhereClause("catCd", "30010.160");
      query.buildPageClause(this.currentPage, this.pageSize);
      let param = query.getParam();
      this.until.get("/telev/news/page", param).then(res => {
        if (res.status == 200) {
          this.items = res.data.items;
          this.items.forEach(item => {
            let time = this.until.formatDate(item.crtTm);
            item.createTm =
              time.year + "年" + time.month + "月" + time.day + "日";
          });
        }
      });
    },
    toDetail(pk){
      window.location.href='../new/imglist.html?id='+pk
    }
  },
  components: {
    ageHead,
    ageFoot
  }
};
</script>

