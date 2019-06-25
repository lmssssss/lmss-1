<template>
   <div id="app">
       <div id="header"><img class="logo" src="../assets/Pbimg/logo.png"></div>
        <h1 class="title-agile text-center" style="position:relative;left:0px;">欢迎注册/登录</h1>
        <div class="boxbox" style="    width: 500px;height: 387px;position: relative;
    left: 500px;border: 10px solid rgba(104, 102, 102, 0.5);
    background-clip: padding-box;margin: 2em;">
            <router-view></router-view>
            <!-- router-view这个标签中输出组件内容 -->
        </div>
        <div class="Footer" style="position:relative;left:500px;">
            <div class="footer_nav">
                <a rel="nofollow" target="_blank" href="#" style="color:black;"><B>关于纵横游</B></a>&#12288;|&#12288;
                <a rel="nofollow" target="_blank" href="#" style="color:black;"><B>商务合作</B></a>&#12288;|&#12288;
                <a target="_blank" href="#" style="color:black;"><B>友情链接</B></a>&#12288;|&#12288;
                <a rel="nofollow" target="_blank" href="#" style="color:black;"><B>帮助中心</B></a>&#12288;|&#12288;
                <a rel="nofollow" target="_blank" href="#" style="color:black;"><B>用户守则</B></a>&#12288;|&#12288;
                <a target="_blank" href="#" style="color:black;"><B>网站地图</B></a>
            </div>
        </div>
  </div>
</template>

<script>
import Router from 'vue-router'
// import {judgement} from '../assets/login/js/judgement.js'
// import axios from ''
import log from '@/components/login/log'
import register from '@/components/login/register'

const router = new Router({
  // mode:"history",
  routes: [
    {path: '/', name: 'log', component: log},
    {path: '/register', name: 'register', component: register},
    {path: '*', name: '*', component: log}
  ]
})

export default {
  name: 'login',
  router
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/login/css/style.css";
@import "../assets/login/css/font-awesome.css";

</style>
