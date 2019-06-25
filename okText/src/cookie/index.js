import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)



export function setCookie(user_Name,value,times){
        var s=new Date()
        // console.log(s.toUTCString())
        s.setTime(s.getTime() + (times*24*60*60*1000));
        console.log(s.toUTCString())
        var expires = "expires="+s.toUTCString();
        document.cookie = user_Name + "=" + value + "; " + expires;
}
//设置cookie

export function getCookie(user_Name){
  var user_Name = user_Name + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) 
    return c.substring(name.length,c.length);
  }
  return "";
}
//获取cookie

export function delCookie(user_Name){
    document.cookie = "user_Name=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
//删除cookie