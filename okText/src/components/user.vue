<template>
  <div>
      <div id="main">
        <div id="header"><img class="logo" src="../assets/Pbimg/logo.png" @click="Toindex">
            <div class="person">
                <ul class="person_biao" >

                    <li class="person_biao_li">

                        <ul class="person_biao_next">
                            {{ul_content}}
                            <li v-for="(leftarry,index) in leftArry" @click="change_ul(index)"  
                            :key="leftarry.index" class="person_biao_next_li">
                            <router-link :to="{name:leftarry.url}" tag='span'>
                            {{leftarry.name}}
                            </router-link>
                            </li>
                        </ul>

                    </li>
                </ul>   
            </div>
            <div class="firstPage">首页</div>
        </div>
    
        <div class="l-main" id="a_main">
            <div class="menu">
                <header class="menu__header">
                    <h1 class="menu__header-title">用户中心</h1>     
                </header>
                <div class="menu__body">
                    <ul class="nav">
                        <li class="nav__item nav__item-link " v-for="(leftarry,index) in leftArry" 
                         @click="change(index) "
                        :class="{is_active:decideIndex==index}" :key="leftarry.index">
                        <router-link :to="{name:leftarry.url}" tag='div' 
                        active-class="menu_width" >

                        <i class=" nav__item-icon">{{leftarry.fuhao}}</i>
                        <span class="nav__item-text" >{{leftarry.name}}</span>

                        </router-link>
                        

                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 左列表 -->


        <div id="rightbody" class="rightbody">
                        <keep-alive><router-view></router-view></keep-alive>
            
        </div>
    </div>
  </div>
</template>

<script>
import Router from 'vue-router'

import PersonalMsg from '@/components/user/PersonalMsg'
import PersonalContribute from '@/components/user/PersonalContribute'
import PersonalMoney from '@/components/user/PersonalMoney'
import CashWithdrawal from '@/components/user/CashWithdrawal'
import ShareMakingmoney from '@/components/user/ShareMakingmoney'
import Quit from '@/components/user/Quit'

 const router =new Router({
     routes:[
          {path: '/',name: 'PersonalMsg',component: PersonalMsg},
          {path: '/PersonalContribute',name: 'PersonalContribute',component: PersonalContribute},
          {path: '/PersonalMoney',name: 'PersonalMoney',component: PersonalMoney},
          {path: '/CashWithdrawal',name: 'CashWithdrawal',component: CashWithdrawal},
          {path: '/ShareMakingmoney',name: 'ShareMakingmoney',component: ShareMakingmoney},
          {path: '/Quit',name: 'Quit',component: Quit},
          {path:'*',component:PersonalMsg}
          ]
 })
export default {
  name: 'user',
   data () {
    return {
        fuhao: '',
        ul_content: '个人信息',
        leftArry: [
            {
                url: 'PersonalMsg',
                fuhao: '#',
                name: '个人信息'
            },
            {
                url: 'PersonalContribute',
                fuhao: '',
                name: '用户投稿'
            },
            {
                url: 'PersonalMoney',
                fuhao: '',
                name: '我的资产'
            },
            {
                url: 'CashWithdrawal',
                fuhao: '',
                name: '提           现'
            },
            {
                url: 'ShareMakingmoney',
                fuhao: '',
                name: '分享赚钱'
            },
            {
                url: 'Quit',
                fuhao: '',
                name: '退               出'
            }
        ],

        // ['个人信息','用户投稿','我的资产','提现','分享赚钱','退出'],
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
            // alert('11')
        },
        change_ul: function (thisindex) {
            this.ul_content = this.leftArry[thisindex].name
            this.decideIndex = thisindex;
        },
        Toindex:function () {
            window.location.href="/";
        }
    },
    beforeMount(){
        // console.log(this.$route.path)


        // session_start()
        
        var path=this.$route.path
        var i;
        
        if(path=='/'){
                this.change(0)
                // alert('yes')
            }else{
                for(i in this.leftArry){
            if('/'+this.leftArry[i].url==path)
            {
                
                this.change(i)
                // alert(%E5%BC%A0%E6%B4%8B)

            }
            
        }
            }
        
    },
    router
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import '../assets/user/css/user.css' ;

</style>



