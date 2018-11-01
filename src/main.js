// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

import iview from 'iview' // 引入iview依赖
import 'iview/dist/styles/iview.css' // 引入iview css样式
Vue.use(iview) // 使用iview组件

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.prototype.axios = axios

new Vue({
  el: '#app',
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
