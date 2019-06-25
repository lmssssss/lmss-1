<template>
  <div id="app">
    <!-- <button type="button" class="btn btn-default">Middle</button>  -->
    <!-- <router-link :to="{name:'test1',params:{id:info.id}}" tag="li"> -->
    <!-- <router-link :to="{name:'test1',params:{id:'10'}}" tag='li'>前往路由1</router-link> -->
 
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeMount(){
  var a=(this.cookie.getCookie('user_Name')).split("=")
    // alert(a[1])
   this.$store.dispatch('add',a[1]);
  // alert(this.$store.state.user_Name)
  }
}
</script>

<style>
/* *{padding: 0;margin: 0} */
#app{        width: 100%;
            height: 768px;
            background: #F4F4F4;   
            font-family: Arial, sans-serif;   
            font-size: 14px;   
            font-weight: lighter;   
            line-height: 1.3;
        }
</style>
