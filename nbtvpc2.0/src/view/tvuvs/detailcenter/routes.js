import vedio from './components/vedio.vue';
import sign from './components/sign.vue';
import msgcenter from './components/msgcenter.vue';
import mymsgcenter from './components/mymsgcenter.vue';
import personal from './components/personal.vue';
import content from './components/content.vue';

//配置路由
export default [
  {path:'/',redirect:'/vedio'},
  {path:'/vedio',component:vedio},
  {path:'/sign',component:sign},
  {path:'/mymsgcenter',component:mymsgcenter,children:[{path:'msgcenter',component:msgcenter},{path:'msgcentercnt',component:content}]},
  {path:'/personal',component:personal},
];


