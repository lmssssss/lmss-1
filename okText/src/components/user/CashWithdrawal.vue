<template>
    <div>
        <form class="form-horizontal" >

<div class="form-group">
    <label class="col-sm-4 control-label">支付宝姓名</label>
    <div class="col-sm-3">
      <input type="text" class="form-control" placeholder="请输入支付宝姓名"  v-model="user_PayName">
    </div>
  </div>
<div class="form-group">
    <label class="col-sm-4 control-label">支付宝账号</label>
    <div class="col-sm-3">
      <input type="text" class="form-control" placeholder="请输入支付宝账号"  v-model="user_PayId">
    </div>
  </div>


          
  <div class="form-group">
    <div class="col-sm-offset-4 col-sm-10">
        <label>
          剩余游币：{{user_YouMoney}},可提现{{user_YouMoney-user_PayNum_now}}
        </label>
    </div>
  </div>     
  
  <div class="form-group">
    <label class="col-sm-4 control-label">金额</label>
    <div class="col-sm-3">
      <input type="text" class="form-control" placeholder="请输入提现金额" v-model="user_PayNum_now">
    </div>
  </div>
  
  <div class="form-group">
    <div class="col-sm-offset-4 col-sm-10">
        <h6 v-if="user_PayNum_now">
          现在正在提现：{{user_PayNum_now}}元
        </h6>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-4 col-sm-5">
      <button type="submit" class="btn btn-default" @click="cashmoney"> 提交申请</button>
    </div>
  </div>
</form>
<div class=" col-sm-7 col-sm-offset-2">
    <table class="table table-hover">
      <thead>
        <tr>
          
          <th>提现账户</th>
          <th>提现金额</th>
          <th>提现状态</th>
        </tr>
      </thead>
      <tbody>
        <tr v-show="Status">
          <td>{{user_PayName}}</td>
          <td>{{user_PayNum}}</td>
          <td>{{Status}}</td>
        </tr>
        
      </tbody>
    </table>
</div>
    <div class="text-center col-sm-10" v-if="sta">还没有提现记录哦，快去提现吧！</div>
    </div> 
</template>

<script>
import { error } from 'util';

export default {
  name:'CashWithdrawal',
  data(){
    return{
      user_Name:'',
      user_PayId:'',
      user_PayName:'',
      user_PayNum:'',
      user_CashStatus:'',
      user_YouMoney:'',
      user_PayNum_now:'',
      Status:'',
      sta:true
    }
  },
  methods:{
    cashmoney(){
      if(this.user_PayNum_now&&this.user_YouMoney-this.user_PayNum_now>=0){

      this.axios({
          url:'http://139.155.120.181:3000/users/cashMoney',
          method:'post',
          data:{
            user_Name:this.user_Name,
            user_PayId:this.user_PayId,
            user_PayName:this.user_PayName,
            user_PayNum:this.user_PayNum_now
          }
      }).then(res=>{
        if(res.data){
            alert('提现成功，请等待处理')
            this.user_YouMoney=this.user_YouMoney-this.user_PayNum_now
            this.user_PayNum=parseFloat(this.user_PayNum)+parseFloat(this.user_PayNum_now)            
            this.user_PayNum_now='';
            if(this.sta){
              this.Status='审核中';
              this.sta=false
            }
        }else{alert('请输入正确的额度')}
      }).catch(error=>{
        console.log(error)
      })

      }else{
        alert('提现失败，请输入大于0少于：'+this.user_YouMoney+'的数额')
      }
    }
  },
  mounted(){
    this.axios({
      method:'get',
      url:'http://139.155.120.181:3000/users/cashStatus',
      params:{
        user_Name:this.user_Name
      }
    }).then(res=>{
      var data=res.data;
      // console.log(data)
      this.user_PayId=data.user_PayId;
      this.user_PayName=data.user_PayName;
      this.user_PayNum=data.user_PayNum;
      // alert(this.user_PayNum)
      this.user_CashStatus=data.user_CashStatus;
      this.user_YouMoney=data.user_YouMoney;
      // alert(this.user_CashStatus)
      if(this.user_CashStatus!=0){
          this.Status='审核中';
          this.sta=false
      }
    }).catch(error=>{
      console.log(error)
    })
  },beforeMount(){
      this.user_Name=this.$store.state.user_Name
    },
  
}
</script>