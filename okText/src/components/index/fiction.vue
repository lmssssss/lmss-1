<template>
  <div>
    <div id="centent">
      <div class="title">{{section_Name}}</div>
      <div class="main">
        <p>{{section_content}}</p>
      </div>
    </div>
    <div id="btn">
      <button id="prev" value="上一章" class="btn btn-info" @click="lastSec">上一章</button>
      <button id="next" value="下一章" class="btn btn-info" @click="nextSec">下一章</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "fiction",
  data() {
    return {
      section_content: " ",
      section_Name: "",
      article_Id: "",
      section_Id: "",
      section_Id_All: []
    };
  },
  methods: {
    lastSec() {
      var i;
      var section_Id_All = this.section_Id_All;
      console.log(section_Id_All)
      for (i in section_Id_All) {
        if (section_Id_All[i].section_Id == this.section_Id) {
          if (i != 0) {
            this.section_Id = section_Id_All[i - 1].section_Id;
            this.$router.push ("/chapter" + "/" + this.section_Id)
          } else {
            // console.log("s");
            this.$router.push ( "/chapter" + "/" + this.article_Id)
          }
        }
      }
    },
    nextSec() {
      var i;
      var section_Id_All = this.section_Id_All;

      for (i in section_Id_All) {
        if (section_Id_All[i].section_Id == this.section_Id) {
          if (i != section_Id_All.length - 1) {
            this.section_Id = section_Id_All[i + 1].section_Id;
             this.$router.push ("/chapter" + "/" + this.section_Id)
            
          } else {
            this.$router.push ( "/chapter" + "/" + this.article_Id)
            
          }
        }
      }
    }
  },
  beforeMount() {
    this.section_Id = this.$route.params.section_Id_ok;
  },
  mounted() {
    ////章节内容
    this.axios({
      method: "post",
      url: "http://139.155.120.181:3000/users/selSectionAll",
      data: { section_Id: this.section_Id }
    })
      .then(res => {
        var data = res.data;
        this.section_content = data[0].section_content;
        this.article_Id = data[0].article_Id;
        this.section_Name = data[0].section_Name;
        this.axios({
          url: "http://139.155.120.181:3000/users/addNum",
          method: "post",
          data: { article_Id: this.article_Id }
        });
        this.axios({
      method: "post",
      url: "http://139.155.120.181:3000/users/selSectionId",
      data: { article_Id: this.article_Id }
    })
      .then(res => {
        var data = res.data;
        this.section_Id_All = data;
      })
      .catch(err => {
        console.log(err);
      });

      })
      .catch(err => {
        console.log(err);
      });

    ///目录id
    
  }
};
</script>

<style scoped>
/* @import "../../assets/index/css/fiction.css"; */
@import "../../assets/index/css/fiction.css";
</style>
