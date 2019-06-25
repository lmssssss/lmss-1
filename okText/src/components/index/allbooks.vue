<template>
  <div>
    <div id="centent">
      <div class="type">
        <div class>作品分类：</div>
        <ul class="lists">
          <li class="list-group-item" v-for="(item,index) in items" :key="index">
            <router-link
              :to="{name:'articleType',params:{article_Type:item.article_Type}}"
            >{{item.article_Type}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "allbooks",
  data: function() {
    return {
      items: [
          {article_Type:"玄幻奇幻"},
          {article_Type:"武侠仙侠"},
          {article_Type:"历史军事"},
          {article_Type:"都市娱乐"},
          {article_Type:"竞技同人"},
          {article_Type:"科幻游戏"},
          {article_Type:"花与女神"},
          {article_Type:"全部作品"},
      ]
    };
  },
};
</script>

<style scoped>
@import "../../assets/index/css/allbooks.css";
</style>


