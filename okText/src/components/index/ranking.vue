<template>
  <div>
    <div id="centent">
      <div class="clickNum">
        <div class="top">点击榜:</div>
        <ul class="lists">
          <li class="list-group-item" v-for="(item,index) in items" :key="index">
            <router-link
              :to="{name:'detail',params:{article_Id:item.article_Id}}"
            >{{index+1}}.{{item.article_Name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      article_Name: "",
      article_Id: "",
      items: []
    };
  },
  mounted() {
    this.axios({
      method: "get",
      url: "http://139.155.120.181:3000/users/ClickNum"
    })
      .then(res => {
        var data = res.data;
        this.items = data;
        this.article_Name = data.article_Name;
        this.article_Id = data.article_Id;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
@import "../../assets/index/css/ranking.css";
</style>


