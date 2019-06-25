<template>
    <div>
        <div>

                    <div  class="col-md-10 text-center">
                    <h4>我的资产</h4>
                    </div>

                            <div>
                                <b  class="col-sm-5 text-right">游子:</b>  
                                <div class="col-sm-5">
                                <b>{{user_YouIntegral}}</b>
                                </div>
                            </div>

                            <div>
                                <b  class="col-sm-5 text-right">游币:</b>  
                                <div class="col-sm-5">
                                <b>{{user_YouMoney}}</b>
                                </div>
                            </div>
                    
                    

                      <div  class="col-md-10 text-center">
                      <h4 style="margin-top:20px">游币兑换</h4>
                      <h6>(1000游子=1游币，正在兑换：{{change_YouIntegral/1000}})</h6>
                                  <label  class="col-sm-5 text-right" style="padding:8px">游子</label>
                                  <div class="col-sm-4">
                                    <input type="email" class="form-control" id="inputEmail3" v-model="change_YouIntegral"  placeholder="请输入你要兑换的游子">
                                  </div>
                                  <div class="col-sm-2">
                    <input class="text-center btn btn-default form-control" type='button' value="兑换" @click="changeMoney">
                    </div> 
                      </div>
                      <div class="col-sm-9 text-right"><h6>有钱了？<router-link to="/CashWithdrawal">去提现</router-link>吧!</h6></div>
              
                       

                    </div>
    </div> 
</template>

<script>

export default {
  name:'PersonalMoney',
  data:function(){
      return {
        user_Name:'',
        user_YouIntegral:'',//游子
        user_YouMoney:'',//游币
        change_YouIntegral:'',
        change_YouMoney:''
      }
    },
    methods:{
        changeMoney:function(){
            this.change_YouMoney=this.change_YouIntegral/1000;
            this.axios({
              method:'post',
              url:'http://139.155.120.181:3000/users/changeMoney',
              data:{
                user_Name:this.user_Name,
                user_YouIntegral:this.change_YouIntegral,
                user_YouMoney:this.change_YouMoney
              }
            }).then(res=>{
              if(res.data){
                alert('兑换成功')
                this.user_YouIntegral=res.data.user_YouIntegral
                this.user_YouMoney=res.data.user_YouMoney
                this.change_YouIntegral=''
            }else{
              alert('兑换失败')
              this.change_YouIntegral=''
            }
            })
        }
    },beforeMount(){
      this.user_Name=this.$store.state.user_Name
    },
    mounted :function(to, from, next){
      // alert(this.user_Name)
      this.axios.get('http://139.155.120.181:3000/users/myMoney',{
      params:{user_Name:this.user_Name}
    }).then((res)=>{
      //   alert(res.data)
      if(res.data){
          var data=res.data;
          // console.log(data)
          this.user_YouIntegral=data.user_YouIntegral;
          this.user_YouMoney=data.user_YouMoney;
          // alert( this.user_Email)
      }else{
          alert('查询失败')
      }
      
    }).catch(function (error) {
      console.log(error);
    })

}
}
</script>