<template>
    <div>
        <div class=" text-center">
    <div class="col-md-12"><b><h4>我要投稿</h4></b><br>
        </div>
    <div class="row">



    <lable class="col-md-2 control-label text-right " style="padding:8px"><b>书名：</b></lable>
    <div class="col-md-2">
    <input type='text' placeholder='请输入书名' id='article_Name' v-model='article_Name' class="form-control" maxlength="10">
    </div>
    
    
    <lable  class="col-md-2 control-label text-right" style="padding:8px"><b>类型：</b></lable>
    <div class="col-md-2">
    <select id='article_Type' v-model='article_Type'  class ="form-control"> 
    <option name='玄幻奇幻'>玄幻奇幻</option>
    <option name='武侠仙侠'>武侠仙侠</option>
    <option name='都市娱乐'>都市娱乐</option>
    <option name='花语女生'>花语女生</option>
    <option name='历史军事'>历史军事</option>
    <option name='竞技同人'>竞技同人</option>
    <option name='科幻游戏'>科幻游戏</option>
    </select> 
    </div>


    <lable class="col-md-2 control-label text-right" style="padding:8px"><b>章节名：</b></lable>
    <div class="col-md-2">
    <input type='text' placeholder='请输入章节名' class="form-control" id='section_Name' v-model='section_Name'  maxlength="10">
    </div>

    </div>
    
    <div class="col-sm-11 col-sm-offset-1" style="margin-top:20px">
    <textarea placeholder='输入内容少于15000字 ' id='section_Content' v-model='section_Content'   class="form-control" 
    rows="12"  style="resize:none" maxlength="15000"></textarea><br>
    </div>

    <input value='提交' type='button' id='subCon' class='btn btn-default' @click='addAC'>

        </div>
    </div> 
</template>

<script>

export default {
  name:'PersonalContribute',
  data: function () {
        return {
            user_Name: '',
            article_Name:null,
            section_Name: null,
            article_Type: '玄幻奇幻',
            section_Content: null
        }
    },
    methods: {
            addAC: function() {
                var myDate = new Date();
                var year = myDate.getFullYear(); //获取当前年
                var mon = myDate.getMonth() + 1; //获取当前月
                var date = myDate.getDate();
                var section_Time=year+'-'+mon+'-'+date
                
                if(this.article_Name!=null&&this.section_Name!=null&&this.section_Content!=null){
                this.axios({
                    method: 'post',
                    url: 'http://139.155.120.181:3000/users/contribute',
                    data: {
                      user_Name:this.user_Name,
                      article_Name:this.article_Name,
                      section_Name:this.section_Name,
                      article_Type:this.article_Type,
                      section_Content:this.section_Content,
                      section_Time:section_Time
                    }
                  }).then(function(res){
                    //   alert(res.data)
                    if(res.data){alert('发布成功')}
                    
                  }).catch(function (error) {
                    console.log(error);
                  });
                }else{
                  alert('任意一项不可为空')
                }
            }
        },beforeMount(){
      this.user_Name=this.$store.state.user_Name
    },

}
  

</script>