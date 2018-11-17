import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import center from '../components/center.vue'
import aboutMe from '../components/aboutMe.vue'
import signUp from '../components/singUp.vue'
import signUpDetail from '../components/singUpDetail.vue'
import study from '../components/study.vue'
import studyDetail from '../components/studyDetail.vue'
import personal from '../components/personal.vue'
import info from '../components/info.vue'
import certificate from '../components/certificate.vue'
import memberCenter from '../components/memberCenter.vue'
import msg from '../components/msg.vue'
import msgDetail from '../components/msgDetail.vue'
import onlineRegister from '../components/onlineRegister.vue'
import project from '../components/project.vue'
import registerDetail from '../components/registerDetail.vue'
import registerForm from '../components/registerForm.vue'
import sign from '../components/sign.vue'

export default new VueRouter({
  routes: [
    {
      path:'/',
      redirect:'/center',
    },
    {
      path:'*',
      redirect:'/center'
    },
    {
      path: '/center',
      component: center
    },
    {
      path: '/aboutme',
      component: aboutMe
    },
    {
      path: '/signup',
      component: signUp
    },
    {
      path: '/signupdetail',
      component: signUpDetail
    },
    {
      path: '/study',
      component: study
    },
    {
      path: '/studyDetail',
      component: studyDetail
    },
    {
      path:'/personal',
      component:personal,
      children:[
        {
          path: 'info',
          component: info
        }, //个人中心
        {
          path: 'membercenter',
          component: memberCenter, //会员中心
        },
        {
          path: 'project',
          component: project,
        }, //学习课程
        {
          path: 'certificate',
          component: certificate
        }, //课程详情
        {
          path: 'sign',
          component: sign
        }, //签到记录
        {
          path: 'msg',
          component: msg
        }, //消息中心
        {
          path:'msgdetail',
          component:msgDetail
        }//消息详情
      ]
    }
  ]
})