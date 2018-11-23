import Vue from 'vue';
import Router from 'vue-router';

//路由
import myLessons from '../components/myLessons'
import myLessonDetail from '../components/myLessonDetail'

import myClasses from '../components/myClasses'

import personalData from '../components/personalData'
import editPersonal from '../components/editPersonal'

import signIn from '../components/signIn'
import myTeam from '../components/myTeam'
import teamDetail from '../components/teamDetail'

import myCertificate from '../components/myCertificate'
import updateCet from '../components/updateCet'

import tidings from '../components/tidings'
import tidingsDetail from  '../components/tidingsDetail'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '*',
            redirect: '/myLessons'
        },
        {
            path:'/myLessons',
            name:'myLessons',
            component:myLessons,
        },
        {
            path:'/myLessonDetail',
            name:'myLessonDetail',
            component:myLessonDetail
        },
        {
            path:'/myClasses',
            name:'myClasses',
            component:myClasses
        },{
            path:'/personalData',
            name:'personalData',
            component:personalData
        },{
            path:'/editPersonal',
            name:'editPersonal',
            component:editPersonal
        },{
            path:'/signIn',
            name:'signIn',
            component:signIn
        },{
            path:'/myTeam',
            name:'myTeam',
            component:myTeam
        },{
            path:'/teamDetail',
            name:'teamDetail',
            component:teamDetail
        },{
            path:'/myCertificate',
            name:'myCertificate',
            component:myCertificate
        },{
            path:'/updateCet',
            name:'updateCet',
            component:updateCet
        },{
            path:'/tidings',
            name:'tidings',
            component:tidings
        },{
            path:'/tidingsDetail',
            name:'tidingsDetail',
            component:tidingsDetail
        },
    ]
})