<template>
    
    <div id="content">
    <table class="table table-bordered table-striped" id="t2">
    <thead><tr><th>用户名称</th><th>用户编号</th><th>提现金额</th><th>提现状态</th><th>提现操作</th></tr></thead>
    <tbody><tr v-for="(money,index) in money_data" :key="money.index">
    <td>{{money[index].user_Name}}</td>
    <td id="num">{{money[index].user_Id}}</td>
    <td>{{money[index].user_PayNum}}</td>
    <td>待提现</td>
    <td><button class="btn" id="dlt2" @click="tx(money[index].user_Id)" >提现</button></td></tr></tbody>
    </table>
    </div>
</template>

<script>
export default {
    name:'manage_money',
    data(){
        return {
           money_data:[]
    }
    },
    methods:{
tx(id){
          console.log(id)
          this.axios({
                method: 'post',
                 // url: 'http://139.155.120.181:3000/users/tx',
                url: 'http://139.155.120.181:3000/users/tx',
                data: {
                 userid:id
                }
             }).then((res) => {
                 if(res.data!=0){
                  alert('提现成功')
                }
              }).catch((error) => {
                console.log(error);
              });
          
        }
    },
    ////////////////////////////////////提现查看——全部金额////////////////////////////////////
    beforeMount(){
            this.axios({
                method: 'get',
                 // url: 'http://139.155.120.181:3000/users/money_ck',
                url: 'http://139.155.120.181:3000/users/money_ck',
                params: {
                 
                }
             }).then((res) => {
                for(let i in res.data){
                  this.money_data.push(res.data);//push方法解决VUE动态传值
                }
              }).catch((error) => {
                console.log(error);
              });
        },
}
</script>
<style scoped>
@import '../../assets/manage/css/manage_table.css' ;

</style>