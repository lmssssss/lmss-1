<template>
  <div>
    <div id="main">
        <div id="header"><img class="logo" src="../assets/Pbimg/logo.png"></div>
        <div class="container">
        <div class="row">   
            <div class="col-md-offset-3 col-md-6">
                <form class="form-horizontal">
                    <span class="heading">管理员登录</span>
                    <div class="form-group">
                        <input type="username" class="form-control" id="inputEmail3" placeholder="用户名" v-model="username">
                        <i class="fa fa-user"></i>
                    </div>
                    <div class="form-group help">
                        <input type="password" class="form-control" id="inputPassword3" placeholder="密码" v-model="password">
                        <i class="fa fa-lock"></i>
                        <a href="#" class="fa fa-question-circle"></a>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-default" id="log" @click="add()">立刻登录</button>
                    </div>
                </form></div></div></div></div>
    <router-view></router-view>
    </div>
</template>

<script>
import Router from 'vue-router'
import register from '@/components/manage/register'

const router =new Router({
     routes:[
          {path: '/register',name: 'register',component: register}
          ]
 })
export default {
   name:'manage',
   data(){
     return{
      username:'',
      password:''
     }
   },
   methods:{
     add(){
       console.log(this.username)
       console.log(this.password)
       this.axios({
         method:'post',
         url:'http://139.155.120.181:3000/users/log',
          params:{
           username:this.username,
           password:this.password
         }
       }).then((res)=>{
               if(res.data){alert('登录成功');
               window.location.href='/manage1'
               }else{
              alert('用户名密码错误')}
       }).catch((error)=>{
         console.log(error)
       })
     }
   }
   ,
        router
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/user/css/user.css' ;
@import '../assets/manage/css/manage.css';
</style>
