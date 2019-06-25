<template>
  <div class="hello">
    <div id="header">
      <div id="logo">
        <img src="../assets/index/img/logo.png">
      </div>
      <div id="search">
        <input type="text" name id="search-input" placeholder="输入你想看的：">
        <!-- v-model="msg" -->
        <img src="../assets/index/img/button.png">
        <!-- v-on:click="getSearch" -->
      </div>
      <div class="load" v-show="!user_Name">
        
        <button type="submit" id="landing" value="登录" class="btn btn-primary" @click="tolink('login')">登录</button>
        
        <button type="submit" id="rigester" value="注册" class="btn btn-primary" @click="tolink('login#/register')">注册</button>
      </div>
      <div class="load" v-show="user_Name" @click="tolink('user')">
         {{user_Name}}
      </div>
      <div id="nav">
        <ul class="nav nav-tabs">
          <li role="presentation">
            <router-link to="/">首页</router-link>
          </li>
          <li role="presentation">
            <router-link to="/allbooks">书库</router-link>
          </li>
          <li role="presentation">
            <router-link to="/ranking">排行</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <router-view></router-view>
    </div>

    <div id="footer">
      <img src="../assets/index/img/联系我们.png">
      <p>
        <a href="#">联系我们</a>
      </p>
      <h5>&copy 2019 最终版权及解释权归第二组所有</h5>
    </div>
  </div>
</template>

<script>
import Router from "vue-router";

import Allbooks from "@/components/index/allbooks";
import Home from "@/components/index/home";
import Ranking from "@/components/index/ranking";
import detail from "@/components/index/detail";
import Fiction from "@/components/index/fiction";
import Chapter from "@/components/index/chapter"; 
import ArticleType from "@/components/index/articleType"
const router = new Router({
  // mode: 'history',
  

  routes: [
    {
      path: "/allbooks",
      name: "Allbooks",
      component: Allbooks
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/ranking",
      name: "Ranking",
      component: Ranking
    },
    {
      path: "/detail/:article_Id",
      name: "detail",
      component: detail
    },
    {
      path: "/fiction/:section_Id_ok",
      name: "fiction",
      component: Fiction
    },
    {
      path:"/chapter/:article_Id",
      name:"chapter",
      component:Chapter
    },
    {
      path:"/articleType/:article_Type",
      name:"articleType",
      component:ArticleType
    },{
      path:"*",
      name:"*",
      component:Home
    }
  ]
});
export default {
  name: 'index',
  router,
  data(){
    return{
      user_Name:''
    }
  },
  mounted(){
    this.user_Name=this.$store.state.user_Name
  },
  methods:{
      tolink(router){
        window.location.href='/'+router
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/index/css/home.css";
@import "../assets/index/css/lunbo.css";
</style>
