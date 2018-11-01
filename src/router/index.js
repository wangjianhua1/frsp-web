import Vue from 'vue'
import VueRouter from 'vue-router'
import iview from 'iview' // 引入iview依赖

Vue.use(VueRouter)
let routes = [
  {
    path: '/login',
    component: () => import('../views/Login'), //懒加载
    name: '登陆页面',
    hidden: true
  },
  {
    path: '/',
    component: () => import('@/views/Main'),
    name: '后台主页',
    children: [
      {path: '/404', component: () => import('../views/404')},
    ]
  },
];
const vueRouter = new VueRouter({
  mode: 'history', //防止路由以#形式展示
  routes: routes
})
vueRouter.beforeEach((to, from, next) => {
  iview.LoadingBar.start();
  let user = JSON.parse(localStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({path: '/login'})
  } else {
    next()
  }
});

vueRouter.afterEach((to, from, next) => {
  iview.LoadingBar.finish();
  window.scrollTo(0, 0);
});
export default vueRouter
