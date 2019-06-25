<template>
  <div id="centent">
    <h3 class="h3">{{article_Type}}</h3>
    <ul>
      <li class="list-group-item" v-for="(item,index) in items" :key="index">
        <router-link :to="{name:'detail',params:{article_Id:item.article_Id}}">{{item.article_Name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "articleType",
  data() {
    return {
      article_Type: "",
      article_Name: "",
      article_Id: "",
      items: []
    };
  },
  beforeMount() {
    this.article_Type = this.$route.params.article_Type;
  },
  mounted() {
    this.axios({
      method: "post",
      url: "http://139.155.120.181:3000/users/selBookId",
      data: { article_Type: this.article_Type }
      // params: {}
    })
      .then(res => {
        // this.artucle_Type = data.artucle_Type;
        var data = res.data;
        this.items = res.data;
        this.article_Name = data.article_Name;
        this.article_Id = data.article_Id;
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
#centent {
  width: 940px;
  height: 460px;
  background-color: aliceblue;
  border: 2px soild lightblue;
  margin: auto;
  position: relative;
}
.h3 {
  text-align: center;
}
ul {
  width: 940px;
}
li {
  display: block;
  margin: 10px;
  width: 120px;
  float: left;
  text-align: center;
}
</style>


