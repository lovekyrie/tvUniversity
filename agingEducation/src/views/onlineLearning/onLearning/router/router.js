import Vue from 'vue';
import Router from 'vue-router';

//路由
import recommend from '../components/recommend'
import recent from '../components/recent'
import hot from '../components/hot'
import star from '../components/star'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '*',
            redirect: '/recommend'
        },
        {
            path:'/recommend',
            name:'recommend',
            component:recommend
        },{
            path:'/recent',
            name:'recent',
            component:recent
        },{
            path:'/hot',
            name:'hot',
            component:hot
        },{
            path:'/star',
            name:'star',
            component:star
        },
    ]
})