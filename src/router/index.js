import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import NotFound from '../views/404'
import Main from '../views/Main'
import iview from 'iview' // 引入iview依赖


Vue.use(VueRouter)
let routes = [
  {
    path: '/login',
    component: Login,
    name: '登陆页面',
    hidden: true
  },
  {
    path: '/',
    component: Main,
    name: '后台主页',
    children: [
      {path: '/404', component: NotFound},
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
