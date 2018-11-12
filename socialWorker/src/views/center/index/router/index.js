import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import center from '../components/center.vue'
import aboutMe from '../components/aboutMe.vue'
import signUp from '../components/singUp.vue'
import signUpDetail from '../components/singUpDetail.vue'
import study from '../components/study.vue'
import studyDetail from '../components/studyDetail.vue'

export default new VueRouter({
  routes: [{
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
    }
  ]
})