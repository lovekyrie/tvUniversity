import mycourse from './components/mycourse.vue';
import myclass from './components/myclass.vue';
import certificate from './components/certificate.vue';
import sign from './components/sign.vue';
import msgcenter from './components/msgcenter.vue';
import mymsgcenter from './components/mymsgcenter.vue';
import personal from './components/personal.vue';
import myclub from './components/myclub.vue';
import course from './components/course.vue';
import club from './components/club.vue';
import content from './components/content.vue';
import coursecnt from './components/coursecnt.vue';

//配置路由
export default [
  {path:'/',redirect:'/mycourse/course'},
  {path:'/mycourse',component:mycourse,children:[{path:'course',component:course},{path:'coursecnt',component:coursecnt,name:'coursecnt'}]},
  {path:'/myclass',component:myclass},
  {path:'/certificate',component:certificate},
  {path:'/sign',component:sign},
  {path:'/mymsgcenter',component:mymsgcenter,children:[{path:'msgcenter',component:msgcenter},{path:'msgcentercnt',component:content}]},
  {path:'/personal',component:personal},
  {path:'/myclub',component:myclub,children:[{path:'club',component:club},{path:'clubcnt',component:content}]},
];


