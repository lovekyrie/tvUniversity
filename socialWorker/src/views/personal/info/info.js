import Vue from 'vue';
import App from './components/App';
import config from 'assets/js/wconfig';

config(Vue);


import Info from './components/info.vue'
import msg from './components/msg.vue'
import msgDetail from './components/msgDetail.vue'
import sign from './components/sign.vue'
import center from './components/center.vue'
import project from './components/project.vue'
import certificate from './components/certificate.vue'

const routes = [

  {
    path: '/info',
    component: Info
  }, //个人中心
  {
    path: '/center',
    component: center, //会员中心
  },
  {
    path: '/project',
    component: project,
  }, //学习课程
  {
    path: '/certificate',
    component: certificate
  }, //课程详情
  {
    path: '/sign',
    component: sign
  }, //签到记录
  {
    path: '/msg',
    component: msg
  }, //消息中心
  {
    path:'/msgdetail',
    component:msgDetail
  },//消息详情
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