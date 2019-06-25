<template>
  <div>
    <div id="centent" class="form">
      <ul>
        <li class="list-group-item" v-for="(item,index) in section_Id" :key="index">
          <router-link :to="{name:'fiction',params:{section_Id_ok:item.section_Id}}">第{{index+1}}章</router-link>
        </li>
      </ul>
      
      <!-- <router-link
        :to="{name:'fiction',params:{
        section_Id:section_Id[0].section_Id
      }}"
      >
        <button id="btn-2">开始阅读</button>
      </router-link> -->
      <!-- <table>
            <tr><td>第一章</td><td>第二章</td><td>第三章</td></tr>
      </table>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "chapter",
  data() {
    return {
      article_Id: '',
      section_Id: []
    };
  },
  beforeMount() {
    this.article_Id = this.$route.params.article_Id;
    console.log(this.article_Id);
  },

  mounted() {
    this.axios({
      method: "post",
      url: "http://139.155.120.181:3000/users/selSectionId",
      data: { article_Id: this.article_Id }
    })
      .then(res => {
        var data = res.data;
        this.section_Id = data;
        console.log(data);
        console.log(data)
      })
      .catch(err => {
        console.log(err);
      });

    this.axios({
      url: "http://139.155.120.181:3000/users/addNum",
      method: "post",
      data: { article_Id: this.article_Id }
    });
  },
};
</script>
 
<style scoped>
@import "../../assets/index/css/details.css";
ul {
  width: 940px;
}
li {
  display: block;
  margin: 10px;
  width: 80px;
  float: left;
  text-align: center;
}
#btn-2 {
  position: absolute;
  top: 400px;
  left: 400px;
}
</style>


