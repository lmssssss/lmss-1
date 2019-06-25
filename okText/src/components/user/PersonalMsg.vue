<template>
  <div class="col-md-offset-3">
    <form class="form-horizontal">
      <div class="form-group">
        <b class="col-sm-2 text-right">用户名</b>
        <div class="col-sm-10">
          <b>{{user_Name}}</b>
        </div>
      </div>

      <div class="form-group">
        <b class="col-sm-2 text-right">注册时间</b>
        <div class="col-sm-2">
          <b>{{user_RedistrationTime}}</b>
        </div>
      </div>

      <div class="form-group" id="aa">
        <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-4">
          <input
            type="email"
            class="form-control"
            id="inputEmail3"
            v-model="user_Email"
            :placeholder="user_Email"
          >
        </div>
      </div>

      <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">个人简介</label>
        <div class="col-sm-4">
          <textarea
            class="form-control"
            rows="5"
            cols="20"
            style="resize:none"
            id="inputPassword3"
            :placeholder="user_BriefIntroduction"
            v-model="user_BriefIntroduction"
            >
                   
          </textarea>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-5">
          <button type="button" class="btn btn-default" @click="upMsg" id="submit">保存修改</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { setInterval } from 'timers';
export default {
    name:'PersonalMsg',
    data(){
        return {
            user_Name: '',
            user_Email: 'Email',
            user_RedistrationTime: '',
            user_BriefIntroduction:'请输入你的个人介绍'
    }
    },
    methods:{
        upMsg(){
          // alert( this.user_RedistrationTime)

            this.axios({
                method: 'post',
                url: 'http://139.155.120.181:3000/users/upMymsg',
                data: {
                  user_Name:this.user_Name,
                  user_Email:this.user_Email,
                  user_BriefIntroduction:this.user_BriefIntroduction
                }
              }).then(function(res){
                //   alert(res.data)
                if(res.data){alert('修改成功')}else{
                    alert('修改失败')
                }
                
              }).catch(function (error) {
                console.log(error);
              });
        }
    },
    beforeMount(){
      this.user_Name=this.$store.state.user_Name
    },
    mounted(){
        
        function myTime(date){
           var arr=date.split("T");
           var d=arr[0];
         var darr = d.split('-');
      
         var t=arr[1];
         var tarr = t.split('.000');
         var marr = tarr[0].split(':');
      
         var dd = parseInt(darr[0])+"/"+parseInt(darr[1])+"/"+parseInt(darr[2]);
       return dd;
      }

        this.axios({
        method: 'post',
        url: 'http://139.155.120.181:3000/users/selPerMsg',
        data: {
          user_Name:this.user_Name
        }
      }).then((res)=>{
        //   alert(res.data)
        if(res.data){
            var data=res.data;
            var time1=data.user_RegistrationTime;
            this.user_Email=data.user_Email;
            this.user_RedistrationTime=myTime(time1);
            this.user_BriefIntroduction=data.user_BriefIntroduction;
            // alert( this.user_Email)
        // console.log(that.$store.state.status)
        }else{
            alert('查询失败')
        }
        
      }).catch(function (error) {
        console.log(error);
      })
        // console.log(this.$store.state.status)


}

}
</script>
<style scoped>
/* @import 'bootstrap/dist/css/bootstrap.css' */

</style>


