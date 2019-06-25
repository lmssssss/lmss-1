import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        user_Name:"",
        status:false
    },
    mutations:{
        addUser(state,user_Name){
            if(!state.status){
                state.user_Name=user_Name
                state.status=true
            }else{
                return false
            }
        },/////注册或登录
        delUser(state){
            if(state.status){
                state.user_Name=''
                state.status=false
            }else{
                return false
            }
        }
    },
    actions:{
        add(content,user_Name){
            content.commit('addUser',user_Name)
        },
        dele(content){
            content.commit('delUser')
        }
    }
})

