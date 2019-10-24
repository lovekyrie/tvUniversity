<template>
  <div id="container">
    <!--顶部-->
    <ageHead></ageHead>
    <!--页面主体部分-->
    <div class="g-content g-content-footer" ref="size">
      <!--成果分类按钮-->
      <!--列表-->
      <div class="g-search">
        <!--列表顶部-->
        <div class="crumb">
          <span @click="toIndex">返回首页</span>
          <span>&gt;</span>
          <span>实体办学</span>
        </div>

        <div class="content">
          <!--内容底部-->
          <div class="mainFoot">
            <!--办学概况-->
            <div class="school" v-for="(item, index) in categoryList" :key="index">
              <div>
                <h4>{{item.nm}}</h4>
                <span @click="toMoreSchool(item.cd,item.nm)">查看更多></span>
              </div>
              <ul
                v-for="itemChild in item.list"
                :key="itemChild.televInfromPk"
                @click="toPhotoDetail(itemChild.televInfromPk)"
              >
                <li>
                  <a href="#">{{itemChild.titleNm}}</a>
                </li>
                <p>作者：{{itemChild.author}}</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--底部-->
    <ageFoot></ageFoot>
  </div>
</template>

<script>
import ageHead from "components/ageHead";
import ageFoot from "components/ageFoot";

export default {
  data() {
    return {
      total: 15,
      pageSize: 3,
      currentPage: 1,
      newsNext: "下一页",
      showType: false,
      photoList: [],
      writingList: [],
      commentList: [],
      windowList: [],
      schoolList: [],
      dynamicList: [],
      categoryList: [],
      showType: false
    };
  },
  computed: {
    page() {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  async mounted() {
    // this.showType = JSON.parse(this.until.getQueryString("type"));
    //得到所有分类
    await this.getCategoryList();
  },
  methods: {
    toIndex() {
      window.location.href = "../home/index.html";
    },

    toMoreSchool(cd,nm) {
      this.until.href(`./school.html?cd=${cd}&nm=${nm}`);
    },
    toMoreDynamic() {
      this.until.href("./dynamic.html");
    },
    getCategoryList() {
      this.until
        .get("/general/cat/listByPrntCd", { prntCd: "40020" })
        .then(res => {
          if (res.status === "200") {
            this.categoryList = res.data.items;
            //给每个item取列表数据
            this.categoryList.forEach((item, index) => {
              const query = new this.Query();
              query.buildWhereClause("catCd", item.cd, "LK");
              query.buildPageClause(this.currentPage, this.pageSize);

              const param = query.getParam();
              this.until.get("/telev/infrom/page", param).then(res => {
                item.list = res.data.items;
                this.$set(this.categoryList, index, item);
              });
            });
          }
        });
    },

    toPhotoDetail(pk) {
      window.location.href = "./classesDetail.html?id=" + pk;
    }
  },
  components: {
    ageHead,
    ageFoot
  }
};
</script>

<style scoped>
</style>