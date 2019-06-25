 <template>
    <div id="myAnchor">
        
    </div> 
</template>

<script>

export default {
  name:'Quit',
  data(){
    return{
      user_Name:''
    }
  },
  beforeMount(){
      // this.$router.push('http://localhost:8080/')
      // this.$router.push('/')
      this.user_Name=this.$store.state.user_Name
      this.cookie.delCookie('user_Name')
      window.location.href="/";
      // this.$router.go(-1)
      // var anchor = document.getElementById("myAnchor");
// var result = anchor.pathname;
// alert
// (history)
  }
  
}
</script>