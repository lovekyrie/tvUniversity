import Vue from 'vue';
import App from './components/App';
import config from 'assets/js/wconfig';

config(Vue);


import Info from './components/info.vue'
import study from './components/study.vue'
import studyDetail from './components/studyDetail.vue'

import myStar from './components/myStar.vue'
import sign from './components/sign.vue'
import myTeam from './components/myTeam.vue'

const routes = [{
    path: '/',
    redirect: '/study'
  },
  {
    path: '*',
    redirect: '/study'
  },
  {
    path: '/info',
    component: Info
  }, //个人中心
  {
    path: '/myStar',
    component: myStar
  }, //我的学习星

  {
    path: '/study',
    component: study
  }, //学习课程
  {
    path: '/studyDetail',
    component: studyDetail
  }, //课程详情
  {
    path: '/sign',
    component: sign
  }, //签到记录
  {
    path: '/myTeam',
    component: myTeam
  }, //我的小组
]


require('./css/main.less');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#container');