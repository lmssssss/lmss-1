<template>
  <div class="list">
    <book v-bind:info="items.slice(0,5)"></book>
  </div>
</template>

<script>
import book from '@/components/index/book'
export default {
  name: "booklist",
  // props:['info'],
  data() {
    return {
      items: [
        // { article_Id: "1", article_Name: "斗罗大陆 " ,user_Name:"唐家三少"},
        // { article_Id: "2", article_Name: "斗破苍穹 " ,user_Name:"天蚕土豆著"},
        // { article_Id: "3", article_Name: "雪鹰领主 " ,user_Name:"我吃西红柿著"},
        // { article_Id: "4", article_Name: "完美世界 " ,user_Name:"辰东著"},
      ]
    };
  },
  mounted(){
    this.axios({
      method:'get',
      url:'http://139.155.120.181:3000/users/clickNum',
    }).then((res)=>{
      var data=res.data;
      this.items=res.data;
    })
  },
  components:{
      book
  },
}
</script>

<style scoped>
</style>
