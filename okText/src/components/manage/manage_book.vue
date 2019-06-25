<template>
    <div id="content">
      <table class="table table-bordered table-striped" id="t2">
        <thead><tr><th>书籍名称</th><th>书籍编号</th><th>书籍作者</th><th>上传时间</th><th>书籍操作</th></tr></thead>
        <tbody>
          <tr  v-for="(book,index) in book_data" :key="book.index" v-show="book[index].article_Name">
            <td>{{book[index].article_Name}}</td>
            <td id="num">{{book[index].article_Id}}</td><td>{{book[index].user_Name}}</td>
            <td>{{book[index].article_Time}}</td>
            <td><button class="btn " id="dlt2" @click="bookdlt(book[index].article_Id)" >删除</button></td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
    name:'manage_book',
    data(){
        return {
           book_data:[]
    }
    },
    methods:{
      ////////////////////////////////////书籍管理-书籍删除////////////////////////////////////
bookdlt(id){
          console.log(id)
          this.axios({
                method: 'post',
                // url: 'http://139.155.120.181:3000/users/book_ck',
                url: 'http://139.155.120.181:3000/users/book_dlt',
                data: {
                 bookid:id
                }
             }).then((res) => {
                 if(res.data!=0){
                  alert('书籍删除成功')
                }
              }).catch((error) => {
                console.log(error);
              });
          
        }
    },
    ////////////////////////////////////书籍查看——全部书籍////////////////////////////////////
    beforeMount(){
            this.axios({
                method: 'get',
                // url: 'http://139.155.120.181:3000/users/book_ck',
                url: 'http://139.155.120.181:3000/users/book_ck',
                params: {
                 
                }
             }).then((res) => {
                for(let i in res.data){
                  this.book_data.push(res.data);//push方法解决VUE动态传值
                }
              }).catch((error) => {
                console.log(error);
              });
        },
}
</script>
<style scoped>
@import '../../assets/manage/css/manage_table.css' ;

</style>