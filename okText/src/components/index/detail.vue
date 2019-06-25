<template>
  <div>
    <div id="centent">
      <div class="douluo-img">
        <div class="bg"></div>
      </div>
      <h3>{{article_Name}}</h3>
      <div class="title">
        <h2>{{article_Name}}</h2>
        <p class="writer">{{user_Name}}著</p>
      </div>
      <p class="intro">心潮澎湃，无限幻想，迎风挥击千层浪，少年不败热血！</p>
      <div class="main">
        宇宙本来无序，三界却于无序之中产生有序，故而每五千年便遭灭世天劫。洪荒时期
        ，天劫降临，水神共工怒触不周之山，宇宙四极倒塌，九州崩裂，大地陷于东南，海水灌
        于陆地。女娲便锻炼五色石，用以修补苍天，折断鳌足，用以鼎立四极。但此举使
        得女娲耗费大量仙气，
        不得不重回昆仑修行。在回昆仑途中，女娲得遇鸿钧老祖，便将人类托付给他
      </div>






      <router-link
        :to="{
            name:'chapter',
            params:{article_Id:article_Id_ok}
            }"
      >
        <input type="button" id="btn-1" value="章节目录">
      </router-link>






      <!-- <router-link :to="{name:'articleType',params:{article_Type:'历史军事'}}"> -->
      <router-link :to="{name:'fiction',params:{section_Id_ok:section_Id}}">
        <button id="btn-2">开始阅读</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      article_Name: "",
      article_Id: "",
      article_Id_ok: "",
      user_Name: "",
      user_Id: "",
      article_Time: "", //time
      article_num: "",
      section_Id:''
    };
  },
  methods: {},
  beforeMount() {
    this.article_Id = this.$route.params.article_Id;
    this.article_Id_ok=this.article_Id
    // console.log(this.article_Id);
  },
  mounted() {



this.axios({
      method: "post",
      url: "http://139.155.120.181:3000/users/selSectionId",
      data: { article_Id: this.article_Id }
    })
      .then(res => {
        var data = res.data;
        this.section_Id = data[0].section_Id;
        console.log( this.section_Id);

      })
      .catch(err => {
        console.log(err);
      });



    this.axios({
      method: "post",
      url: "http://139.155.120.181:3000/users/selBook",
      data: { article_Id: this.article_Id }
    })
      .then(res => {
        var data = res.data;
        this.article_Name = data[0].article_Name;
        this.user_Name = data[0].user_Name;
        this.user_Id = data[0].user_Id;
        this.article_Time = data[0].article_Time;
        this.article_num = data[0].article_num;
        this.article_Id = data[0].article_Id;
        //  console.log(data)
      })
      .catch(err => {
        console.log(err);
      });
    this.axios({
      url: "http://139.155.120.181:3000/users/addNum",
      method: "post",
      data: { article_Id: this.article_Id }
    });
  }
};
</script>

<style scoped>
@import "../../assets/index/css/details.css";
</style>
