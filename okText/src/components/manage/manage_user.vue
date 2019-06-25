<template>
    <div id="content">
    <table class="table table-bordered table-striped" id="t1">
      <thead><tr><th>用户名称</th><th>用户编号</th><th>用户密码</th><th>注册时间</th></tr></thead>
      <tbody>
        <tr v-for="(user,index) in user_data" :key="user.index">
          <td>{{user[index].user_Name}}</td><td id="num">{{user[index].user_Id}}</td>
          <td>{{user[index].user_Password}}</td><td>{{user[index].user_RegistrationTime}}</td>
      
        </tr>
      </tbody>
    </table> 
    </div>
</template>

<script>
export default {
    name:'manage_user',
    data(){
        return {
           user_data:[],
    }
    },
    methods:{
    ////////////////////////////用户删除///////////////////////////
        userdlt(id){
          this.axios({
                method: 'post',
                // url: 'http://139.155.120.181:3000/users/user_dlt',
                url: 'http://139.155.120.181:3000/users/user_dlt',
                data: {
                 userid:id
                }
             }).then((res) => {
                if(res.data!=0){
                  alert('用户删除成功')
                }
              }).catch((error) => {
                console.log(error);
              });
        },
  ////////////////////////////////////用户详情///////////////////////////////
        // userkk(id){
        //   this.axios({
        //         method: 'post',
        //         url: 'http://localhost:3000/users/user_kk',
        //         data: {
        //          userid:id
        //         }
        //      }).then((res) => {
    
        //       }).catch((error) => {
        //         console.log(error);
        //       });
        // }

    },
///////////////////////////////////////////用户查看——全部用户
    beforeMount(){
            this.axios({
                method: 'get',
                 // url: 'http://139.155.120.181:3000/users/book_ck',
                url: 'http://139.155.120.181:3000/users/user_ck',
              }).then((res) => {
                for(let i in res.data){
                  this.user_data.push(res.data);//push方法解决VUE动态传值
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