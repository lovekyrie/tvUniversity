<style lang="less">
    .size {
        h2 {
            font-size: 30px !important;
        }
        h3 {
            font-size: 30px !important;
        }
        h4 {
            font-size: 30px !important;
        }
        span {
            font-size: 26px !important;
        }
        input {
            font-size: 26px !important;
        }
        a {
            font-size: 26px !important;
        }
        li {
            font-size: 26px !important;
        }
        p {
            font-size: 22px !important;
        }
        th {
            font-size: 26px !important;
        }
        td {
            font-size: 26px !important;
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
            color: #999;
        }
        span {
            margin: 0 10px;
        }
    }

    /*内容*/
    .r-content {
        h3 {
            font-size: 28px;
            text-align: center;
            margin-top: 50px;
            margin-bottom: 30px;
        }
        p {
            font-size: 20px;
            text-indent: 30px;
            line-height: 1.5;
            &.r-cntcl {
                font-weight: bold;
            }
        }
        h4 {
            font-size: 22px;
            font-weight: bold;
            margin: 10px 0;
        }
    }

    table {
        display: inline-block;
        margin-top: 50px;
        th, td {
            text-align: center;
            border: 1px solid #000;
            vertical-align: middle;
            padding: 20px;
        }
    }

    /*按钮*/
    .r-button {
        margin-top: 80px;
        margin-bottom: 240px;
        text-align: center;
        button {
            display: inline-block;
            width: 420px;
            height: 110px;
            border: 0;
            border-radius: 10px;
            font-size: 38px;
            color: #fff;
            background-color: #136FA1;
            cursor: pointer;
        }
    }

    .r-button {
        .r-btn-w {
            background-color: #fff;
            color: #8c8c8c;
            border: 1px solid #999;
        }
    }
</style>
<style lang="less">
    .el-dialog--small {
        width: 500px;
    }
</style>
<template>
    <div id="container">
        <ageHead></ageHead>

        <div class="g-content g-content-footer">
            <!--链接栏-->
            <div class="r-link cm-container">
                <!--<a href="../home/index.html">首页</a>-->
                <a href="http://ln.nbsqjy.com/">首页</a>
                <span>&gt;</span><a href="">在线报名</a>
            </div>

            <div v-html="info.cont" class="r-content"></div>
            <div style="text-align: center">
                <table border="1" cellpadding="50" v-if="!!option.length">
                    <tr height="80" style="text-align:center">
                        <th width="105">系别</th>
                        <th width="130">专业</th>
                        <th width="105">招生<br>人数</th>
                        <!--<th width="340">-->
                            <!--简&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;介-->
                        <!--</th>-->
                        <th width="120">学制<br>安排</th>
                        <th width="140">上课时间</th>
                    </tr>
                    <div v-for="item in option">
                        <tr v-for="(opt,index) in item.panel">
                            <td width="105" :rowspan="item.panel.length" v-if="index == 0">{{item.name}}</td>
                            <td width="130">{{opt.nm}}</td>
                            <td width="105">{{opt.openPersQty}}</td>
                            <!--<td width="340" style="text-align: left;padding: 10px;line-height: 1.2;">-->
                            <!--讲授硬笔书法的写字姿势、基本知识、特点、书写基本要领和方法。硬笔书法的结构、笔势和款式。介绍学习名人字帖，提高学员硬笔书法的基本技能。-->
                            <!--</td>-->
                            <td width="120">{{opt.statNm}}</td>
                            <td width="140">{{opt.timeStr[0]}}</td>
                        </tr>
                    </div>
                </table>
            </div>
            <!--按钮-->
            <div class="r-button">
                <button @click="applyLink">立即报名</button>
                <button @click="payLink" style="margin-left: 50px;" class="r-btn-w">在线缴费</button>
            </div>
        </div>

        <ageFoot></ageFoot>

    </div>
</template>
<script>
  import ageHead from 'components/ageHead';
  import ageFoot from 'components/ageFoot';

  export default {
    data() {
      return {
        info: {},
        option:[]
      }
    },
    mounted() {
      let query = new this.Query();
      query.buildWhereClause('catCd', '30020.160', 'EQ');
      query.buildWhereClause("statCd","10000.150","EQ");

      query.buildPageClause('1', '1');
      let param=query.getParam();
      this.until.get('/sys/show/list', param)
        .then(res => {
          if (res.status == 200) {
            this.info = res.data.items[0];
          }
        })

      let list = new this.Query();
      let listParam = list.getParam();
      this.until.get('/px/clazz/clazzAndLessonList', listParam)
        .then(res => {
          if (res.status == 200 && res.data.items) {
            let arr = [];
            res.data.items.forEach(o => {
              let timeStr = [];
              o.pxClazzLessonVoList.forEach(b => {
                timeStr.push(b.pxClazzLessonVo.weekNm + b.pxClazzLessonVo.periNm);
              });
              o.timeStr = timeStr;

              if (arr.length == 0) {
                arr.push({name: o.courseCatNm, panel: []})
              }
              let len = arr.length;
              for (let i = 0; i < len; i++) {
                if (arr[i].name == o.courseCatNm) {
                  arr[i].panel.push(o);
                  break;
                }
                if (i == len - 1) {
                  arr.push({name: o.courseCatNm, panel: [o]})
                }
              }
            });
            this.option.push(...arr);
          }
        })
    },
    methods: {

      applyLink() {
        window.location.href = './select.html';
      },
      payLink() {
        window.location.href = './pay.html';
      },
      loginDiaLog() {
        let time = setTimeout(o => {
          this.dialogTableVisible = true;
          clearTimeout(time);
        }, 1000);
      }
    },
    components: {
      ageHead, ageFoot
    }

  }
</script>


