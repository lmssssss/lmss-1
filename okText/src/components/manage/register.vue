<template>
    <div>
    <div id="register1"> <!-- 注册页面弹窗 -->
        <h1>管理员注册</h1>
        <input type="username" class="reinput" id="reusername" placeholder="输入新的用户名">
        <input type="password" class="reinput" id="repassword" placeholder="输入你的密码">
        <div id="rebu">
        <button type="button" class="rebu" id="redel">取消</button>
        <button type="button" class="rebu" id="reestblish">确认</button>
    </div></div></div>
</template>
<script>
export default {
    name:'register',
    data(){
        return {
           
    }
    },
//     methods:{
//         upMsg(){
//           // alert( this.user_RedistrationTime)

//             this.axios({
//                 method: 'post',
//                 url: '/users/upMymsg',
//                 data: {
//                   user_Name:this.user_Name,
//                   user_Email:this.user_Email,
//                   user_BriefIntroduction:this.user_BriefIntroduction
//                 }
//               }).then(function(res){
//                 //   alert(res.data)
//                 if(res.data){alert('修改成功')}else{
//                     alert('修改失败')
//                 }
                
//               }).catch(function (error) {
//                 console.log(error);
//               });
//         }
//     },

//     beforeMount(to, from, next){

//         function myTime(date){
//            var arr=date.split("T");
//            var d=arr[0];
//          var darr = d.split('-');
      
//          var t=arr[1];
//          var tarr = t.split('.000');
//          var marr = tarr[0].split(':');
      
//          var dd = parseInt(darr[0])+"/"+parseInt(darr[1])+"/"+parseInt(darr[2]);
//        return dd;
//       }
      
//         this.axios({
//         method: 'post',
//         url: '/users/selPerMsg',
//         data: {
//           user_Name:this.user_Name
//         }
//       }).then((res)=>{
//         //   alert(res.data)
//         if(res.data){
//             var data=res.data;
//             var time1=data.user_RegistrationTime;
//             this.user_Email=data.user_Email;
//             this.user_RedistrationTime=myTime(time1);
//             this.user_BriefIntroduction=data.user_BriefIntroduction;
//             // alert( this.user_Email)
//         }else{
//             alert('查询失败')
//         }
        
//       }).catch(function (error) {
//         console.log(error);
//       })

// }

}
</script>
<style scoped>
@import '../../assets/manage/css/manage.css';
</style>


