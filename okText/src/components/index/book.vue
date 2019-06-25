<template>
    <div>
        
            <p class="list-group-item" v-for="(item,index) in info" :key="index">
            <router-link  
            :to="{name:'detail',params:{article_Id:item.article_Id,article_Name:item.article_Name}}">
            {{index+1}}.{{item.article_Name}}
            </router-link>
            </p>
        
    </div>
</template>

<script>
export default {
    name:'book',
    props:['info'],
    data(){
        return {
            // link :`booklist/${this.info.id}`
            article_Id:''
        };
    },
}
</script>

<style scoped>

</style>


