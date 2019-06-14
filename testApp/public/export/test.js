var  content_1 = { template: '<div>我是内容1<br>\
<input type="text" value="我是内容1"><br>\
<input type="button" value="我是内容1"><br></div>' }
var content_2 = { template: '<div>我是内容2<br>\
<input type="text" value="我是内容2"><br>\
<input type="button" value="我是内容2"><br></div>'}
var content_3 = { template: '<div>我是内容3<br>\
<input type="text" value="我是内容3"><br>\
<input type="button" value="我是内容3"><br></div>'}
//定义3个组件
var routes = [
{ path: '/content_1', component: content_1 },
{ path: '/content_2', component: content_2 },
{ path: '/content_3', component: content_3 }
]//创建3个路由，并将想要的组件映射到该路由
var router = new VueRouter({
routes 
})//创建路由器实例
var aa=1
export  {router};
export {aa};
// default