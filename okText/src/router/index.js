import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import login from '@/components/login'
import user from '@/components/user'
import manage from '@/components/manage'
import manage1 from '@/components/manage1'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/user',
      name: 'user',
      component: user
    },{
      path: '/manage',
      name: 'manage',
      component: manage
    },{
      path: '/manage1',
      name: 'manage1',
      component: manage1
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '*',
      name:'*',
      component: index
    }
  ]
})

