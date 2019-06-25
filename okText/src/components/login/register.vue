<template>
<div>
  <h2 class="title-agile text-center">用户注册</h2><br>
        <form><div class="field-group">
            <span class="fa fa-user" aria-hidden="true"></span>
            <div class="wthree-field"><input name="text1" id="text1" type="text" v-model='username' placeholder="用户名" required>
            
            </div></div>
<div id="error_box" style="color:red"><br></div>
            <div class="field-group">
            <span class="fa fa-lock" aria-hidden="true"></span>
            <div class="wthree-field"><input name="password" id="myInput" type="Password" v-model='password' placeholder="请输入密码">
            
            </div></div>
            <div id="error_box1" style="color:red"><br></div>'
            <div class="field-group"><span class="" aria-hidden="true"></span><div class="wthree-field">
            </div></div><div class="field-group">
            <div class="check"><label class="checkbox w3l"><input type="checkbox" @click="myFunction()"><i> </i>显示密码</label>
             </div>
             </div>
             <div class="wthree-field">
                <input id="saveForm" name="saveForm" type="button" @click='adduser' value="立即注册" />
            </div>
             <ul class="list-login"><li class="switch-agileits"><label class="switch"><input type="checkbox"><span class="slider round">
            </span><p style="color:#0066cc">记住密码</p></label></li> <li><router-link to="/">
          <span><p style="color:#0066cc">登录</p></span></router-link></li><li class="clearfix">
            </li>
            </ul>
            </form>
            </div>
</template>

<script>
addEventListener('load', function () {
  setTimeout(hideURLbar, 0)
}, false)
function hideURLbar () {
  window.scrollTo(0, 1)
}
export default {
  name: 'manage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    myFunction: function () {
      var x = document.getElementById('myInput')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    },
    adduser: function () {
      var oUname = document.getElementById('text1').value
      var oError = document.getElementById('error_box')
      var r1 = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/
      oError.innerHTML = ''

      var oUpass = document.getElementById('myInput').value
      var oError1 = document.getElementById('error_box1')
      var r2 = /^[a-zA-Z0-9_]*$/
      oError1.innerHTML = ''
      if (oUname.length > 15 || oUname.length < 2) {
        oError.innerHTML = '用户名请输入2-15位字符'
        return false
      } else if (!r1.test(oUname)) {
        oError.innerHTML = '用户名不能有除汉字、字母、数字以外的特殊字符！'
        return false
      } else {
        if (oUpass.length < 6 || oUpass.length > 15) {
          oError1.innerHTML = '密码长度在6-15之间'
          return false
        }
        if (!r2.test(oUpass)) {
          oError1.innerHTML = '密码必须包含数字、字母、下划线！'
          return true
        }
      };

      var myDate = new Date()
      var year = myDate.getFullYear() // 获取当前年
      var mon = myDate.getMonth() + 1 // 获取当前月
      var date = myDate.getDate()
      var nowtime = year + '-' + mon + '-' + date
      // this.cookie.delCookie('user_Name')

      if (!this.$store.state.user_Name){
        var that=this
      this.axios({
        method: 'post',
        url: 'http://139.155.120.181:3000/users/adduser',
        data: {
          username: this.username,
          password: this.password,
          nowtime: nowtime
        }
      }).then(function (res) {
        //   alert(res.data)
        if (res.data) {
          alert('注册成功')
        that.cookie.setCookie('user_Name',that.username,15)
        that.$store.dispatch('add',that.username);
          window.location.href = '/user'
        } else {
          alert('注册失败')
        }
      }).catch(function (error) {
        console.log(error)
      })
    }else{
      alert('请先注销登陆后再注册')
    }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
@import "../../assets/login/css/style.css";
@import "../../assets/login/css/font-awesome.css";
</style>
