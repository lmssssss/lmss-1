<template>
  <div>
    <div id="centent">
      <div id="booktype">
        <h2 class="booktype">作品分类</h2>
        <ul id="booktype ul" class="list-group">
          <router-link :to="{name:'articleType',params:{article_Type:'玄幻奇幻'}}">
            <li title="奇幻玄幻" class="list-group-item">玄幻奇幻</li>
          </router-link>
          <router-link :to="{name:'articleType',params:{article_Type:'武侠仙侠'}}">
            <li title="武侠仙侠" class="list-group-item">武侠仙侠</li>
          </router-link>
          <router-link :to="{name:'articleType',params:{article_Type:'历史军事'}}">
            <li title="历史军事" class="list-group-item">历史军事</li>
          </router-link>
          <router-link :to="{name:'articleType',params:{article_Type:'都市娱乐'}}">
            <li title="都市娱乐" class="list-group-item">都市娱乐</li>
          </router-link>
          <router-link :to="{name:'articleType',params:{article_Type:'竞技同人'}}">
            <li title="竞技同人" class="list-group-item">竞技同人</li>
          </router-link>
          <router-link :to="{name:'articleType',params:{article_Type:'科幻游戏'}}">
            <li title="科幻游戏" class="list-group-item">科幻游戏</li>
          </router-link>
          <router-link :to="{name:'articleType',params:{article_Type:'花与女神'}}">
            <li title="花与女神" class="list-group-item">花与女神</li>
          </router-link>
          <router-link :to="{name:'articleType',params:{article_Type:'全部作品'}}">
            <li title="全部作品" class="list-group-item">全部作品</li>
          </router-link>
        </ul>
      </div>
      <div id="circul">
        <div id="banner" class="comWidth">
          <div id="banner_imgs" style="left:-520px;" class="clearfix">
            <a href="#">
              <img src="../../assets/index/img/5.jpg" alt>
            </a>
            <a href="#">
              <img src="../../assets/index/img/1.jpg" alt>
            </a>
            <a href="#">
              <img src="../../assets/index/img/2.jpg" alt>
            </a>
            <a href="#">
              <img src="../../assets/index/img/3.jpg" alt>
            </a>
            <a href="#">
              <img src="../../assets/index/img/4.jpg" alt>
            </a>
            <a href="#">
              <img src="../../assets/index/img/5.jpg" alt>
            </a>
            <a href="#">
              <img src="../../assets/index/img/1.jpg" alt>
            </a>
          </div>
          <div class="banner_buttons">
            <span index="1" class="on"></span>
            <span index="2"></span>
            <span index="3"></span>
            <span index="4"></span>
            <span index="5"></span>
          </div>
          <div class="spanner_arrow clearfix">
            <span id="pre"> < </span>
            <span id="next"> > </span>
          </div>
        </div>
      </div>
      <div id="ranking">
        <h3 class="ranking" >点击榜</h3>
        <ul id="ranking ul" class="list-group">
          <li v-for="(item,index) in ClickNumBang.slice(0,5)" :key="index" class="list-group-item">
            <router-link
              :to="{name:'detail' ,params:{article_Id:item.article_Id}}"
            >{{item.article_Name}}</router-link>
          </li>

          <li title="更多" class="list-group-item">
            <router-link to="/ranking">更多</router-link>
          </li>
          <br>
        </ul>
      </div>
      <div id="booktop" class="list-group">
        <h4 class="booktop">本月点击量最高书籍</h4>
        <booklist></booklist>
      </div>
      <div id="bookrcm" class="list-group">
        <h4 class="bookrcm">本月推荐书籍</h4>
        <booklist></booklist>
      </div>
      <div id="newbook" class="list-group">
        <h4 class="newbook">本月上新书籍</h4>
        <booklist></booklist>
      </div>
      <div id="forum" class="list-group">
        <h4 class="forum">读者论坛</h4>
        <booklist></booklist>
      </div>
    </div>
  </div>
</template>


<script>
import booklist from "@/components/index/booklist";
export default {
  name: "home",
  data() {
    return {
      msg: "",
      showmsg: "",
      ClickNumBang: []
    };
  },
  mounted() {
    this.axios({
      method: "get",
      url: "http://139.155.120.181:3000/users/ClickNum"
    })
      .then(res => {
        var data=res.data
        this.ClickNumBang = data;
        this.article_Name = data.article_Name;
        this.article_Id = data.article_Id;
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    booklist
  }
};
</script>

<style scoped>
@import "../../assets/index/css/home.css";
@import "../../assets/index/css/lunbo.css";
</style>


  