var PersonalMsg = {
    template:
        `<div class="col-md-offset-3">
                
                                <form class="form-horizontal">

                                <div class="form-group">
                                <b  class="col-sm-2 text-right">用户名</b>  
                                <div class="col-sm-10">

                                <b>{{user_Name}}</b>
                                </div>
                                
                                </div>

                                <div class="form-group">
                                <b  class="col-sm-2 text-right">注册时间</b> 
                                <div class="col-sm-2">
                               <b>{{user_RedistrationTime}}</b>
                                </div>
                                </div>

                                <div class="form-group" id='aa'>
                                  <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                                  <div class="col-sm-4">
                                    <input type="email" class="form-control" id="inputEmail3" v-model="user_Email"  :placeholder="user_Email">
                                  </div>
                                </div>

                                <div class="form-group">
                                  <label for="inputPassword3" class="col-sm-2 control-label">个人简介</label>
                                  <div class="col-sm-4">
                                    <textarea  class="form-control" 
                                    rows="5" cols="20"  style="resize:none" 
                                    id="inputPassword3"  :placeholder="user_BriefIntroduction" v-model='user_BriefIntroduction'>
                                    {{user_BriefIntroduction}}
                                    </textarea>
                                  </div>
                                </div>
                    
                                <div class="form-group">
                                  <div class="col-sm-offset-2 col-sm-5">
                                    <button type="button" class="btn btn-default" @click="upMsg" id='submit'>保存修改</button>
                                  </div>
                                </div>
                              </form>
                                
    </div> `,
    data: function () {
        return {
            user_Name: '张洋',
            user_Email: 'Email',
            user_RedistrationTime: '',
            user_BriefIntroduction:'请输入你的个人介绍'
        }
    },
    methods: {
        upMsg: function () {
          // alert( this.user_RedistrationTime)

            axios({
                method: 'post',
                url: '/users/upMymsg',
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
    beforeMount :function(to, from, next){

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
      
        axios({
        method: 'post',
        url: '/users/selPerMsg',
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
        }else{
            alert('查询失败')
        }
        
      }).catch(function (error) {
        console.log(error);
      })

    

}

  
}
//个人信息

var PersonalContribute = {

    template:
        `<div class=" text-center">
    <div class="col-md-12"><b><h4>我要投稿</h2></b><br></div>
    <div class="row">



    <lable class="col-md-2 control-label text-right " style="padding:8px"><b>书名：</b></lable>
    <div class="col-md-2">
    <input type='text' placeholder='请输入书名' id='article_Name' v-model='article_Name' class="form-control" maxlength="10">
    </div>
    
    
    <lable  class="col-md-2 control-label text-right" style="padding:8px"><b>类型：</b></lable>
    <div class="col-md-2">
    <select id='article_Type' v-model='article_Type'  class ="form-control"> 
    <option name='玄幻'>玄幻</option>
    <option name='仙侠'>仙侠</option>
    <option name='都市'>都市</option>
    <option name='女生'>女生</option>
    <option name=''>女生</option>
    <option name=''>女生</option>
    <option name=''>女生</option>
    <option name=''>女生</option>
    <option name=''>女生</option>

    </select> 
    </div>


    <lable class="col-md-2 control-label text-right" style="padding:8px"><b>章节名：</b></lable>
    <div class="col-md-2">
    <input type='text' placeholder='请输入章节名' class="form-control" id='section_Name' v-model='section_Name'  maxlength="10">
    </div>

    </div>
    
    <div class="col-sm-11 col-sm-offset-1" style="margin-top:20px">
    <textarea placeholder='输入内容少于15000字 ' id='section_Content' v-model='section_Content'   class="form-control" 
    rows="12"  style="resize:none" maxlength="15000"></textarea><br>
    </div>

    <input value='提交' type='button' id='subCon' class='btn btn-default' @click='addAC'>

        </div>`,
    data: function () {
        return {
            user_Name: '张洋',
            article_Name:'',
            section_Name: '',
            article_Type: '玄幻',
            section_Content: ''
        }
    },
    methods: {
            addAC: function() {
                var myDate = new Date();
                var year = myDate.getFullYear(); //获取当前年
                var mon = myDate.getMonth() + 1; //获取当前月
                var date = myDate.getDate();
                var section_Time=year+'-'+mon+'-'+date
               
                axios({
                    method: 'post',
                    url: '/users/contribute',
                    data: {
                      user_Name:this.user_Name,
                      article_Name:this.article_Name,
                      section_Name:this.section_Name,
                      article_Type:this.article_Type,
                      section_Content:this.section_Content,
                      section_Time:section_Time
                    }
                  }).then(function(res){
                    //   alert(res.data)
                    if(res.data){alert('发布成功')}
                    
                  }).catch(function (error) {
                    console.log(error);
                  });
            }
        }

}
////我要投稿



var PersonalMoney = { template: `<div>

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
              
                       

                    </div>`,
    data:function(){
      return {
        user_Name:'张洋',
        user_YouIntegral:'100',//游子
        user_YouMoney:'100',//游币
        change_YouIntegral:'',
        change_YouMoney:''
      }
    },
    methods:{
        changeMoney:function(){
            this.change_YouMoney=this.change_YouIntegral/1000;
            axios({
              method:'post',
              url:'/users/changeMoney',
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
    },
    beforeMount :function(to, from, next){
      // alert(this.user_Name)
      axios.get('/users/myMoney',{
      params:{user_Name:this.user_Name}
    }).then((res)=>{
      //   alert(res.data)
      if(res.data){
          var data=res.data;
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
//我的资产
var CashWithdrawal = { template: '<p>CashWithdrawal</p>' }

//我要提现
var ShareMakingmoney = { template: '<p>ShareMakingmoney</p>' }
var Quit = { template: '<p>Quit</p>' }
var routes = [
    { path: '/PersonalMsg', component: PersonalMsg },
    { path: '/PersonalContribute', component: PersonalContribute },
    { path: '/PersonalMoney', component: PersonalMoney },
    { path: '/CashWithdrawal', component: CashWithdrawal },
    { path: '/ShareMakingmoney', component: ShareMakingmoney },
    { path: '/Quit', component: Quit },
    { path: '*', component: PersonalMsg }
]
var router = new VueRouter({
    routes
})//创建路由器实例




var user_ul = new Vue({
    // el:'#main',
    data: {
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
        decideIndex: 0,
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
    router
}).$mount('#main')

