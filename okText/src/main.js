// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'

// import '../node_modules/bootstrap/dist/js/bootstrap.js'




import '../node_modules/bootstrap/dist/css/bootstrap.css'



import router from './router'
import store from './store'

import {setCookie} from './cookie/index.js'
import {getCookie} from './cookie/index.js'
import {delCookie} from './cookie/index.js'

Vue.prototype.cookie={
  setCookie,
  getCookie,
  delCookie
}
//////路由守卫////////////
router.beforeEach((to,from,next)=>{
  if(to.name=='user')
  {
    if(!getCookie('user_Name')){
        next('/login')
    }else{next()}

  }else{next()}

})
//////路由守卫////////////


Vue.config.productionTip = false
Vue.prototype.axios=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  
})
