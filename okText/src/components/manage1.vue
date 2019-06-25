<template>
  <div>
    <div id="main">
    <div id="header"><img class="logo" src="../assets/Pbimg/logo.png"></div>
        <div class="l-main" id="a_main">
            <div class="menu">
                <header class="menu__header">
                    <h1 class="menu__header-title">管理中心</h1>     
                </header>
                <div class="menu__body">
                    <ul class="nav">
                        <li class="nav__item nav__item-link " v-for="(leftarry,index) in leftArry" 
                        @click="change(index) " 
                        :class="{is_active:decideIndex===index}" :key="leftarry.index">
                        
                        <router-link :to="{name:leftarry.url}" tag='div' 
                        active-class="menu_width">

                        <i class=" nav__item-icon">{{leftarry.fuhao}}</i>
                        <span class="nav__item-text" >{{leftarry.name}}</span>

                        </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Router from 'vue-router'
import manage_user from '@/components/manage/manage_user'
import manage_book from '@/components/manage/manage_book'
import manage_money from '@/components/manage/manage_money'

const router =new Router({
     routes:[
          {path: '/',name: 'manage_user',component: manage_user},
          {path: '/manage_book',name: 'manage_book',component: manage_book},
          {path: '/manage_money',name: 'manage_money',component: manage_money}
          ]
 })
export default {
        name:'manage1',
           data () {
    return {
        fuhao: '',
        ul_content: '用户管理',
        leftArry: [
            {
                url: 'manage_user',
                fuhao: '#',
                name: '用户管理'
            },
            {
                url: 'manage_book',
                fuhao: '',
                name: '书籍管理'
            },
            {
                 url: 'manage_money',
                fuhao: '',
                name: '提现管理'
            }

        ],
        decideIndex: 0
    }
  },
    methods: {
        change: function (index) {
            this.decideIndex = index;
            var i = 0
            for (i; i < this.leftArry.length; i++) { this.leftArry[i].fuhao = '' }
            this.leftArry[index].fuhao = '#'
            this.change_ul(index)
        },
        change_ul: function (thisindex) {
            this.ul_content = this.leftArry[thisindex].name
            this.decideIndex = thisindex;
        }
    },
    beforeMount(){
        var path=this.$route.path
        var i;
        if(path=='/'){
            this.change(0)
        }else{
            for(i in this.leftArry){
                if('/'+this.leftArry[i].url==path){
                    this.change(i)
                }
            }
        }
    },  


        router

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/manage/css/manage1.css' ;

</style>
