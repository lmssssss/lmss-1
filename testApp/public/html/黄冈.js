///////////前端部分/////////////////

//////////点击榜///////////////////
this.axios({
    url:'/users/ClickNum',
    method:'get'
}).then((res)=>{

    var data = res.data

    console.log(data)
}).catch(function(err){
    console.log(err)
})
//////////点击榜///////////////////

//////////月榜//////////////////////         
this.axios({
    url:'users/MounthNum',
    method:'get'
}).then(res=>{
    var data=res.data;
    console.log(data)
}).catch(err=>{
    console.log(err)
})
//////////月榜///////////////////////

//////////周榜////////////////////////
this.axios({
    url:'users/WeekNum',
    method:'get'
}).then(res=>{
    var data=res.data;
    console.log(data)
}).catch(err=>{
    console.log(err)
})
//////////周榜//////////////////////////

//////////书籍类型//////////////////////////

//////////书籍类型//////////////////////////






///////////前端部分/////////////////