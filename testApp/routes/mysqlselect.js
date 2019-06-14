// var mysql   = require('mysql');
var mysqlConnection=require('./mysqlConnection')
// var exports=module.exports;
console.log('ok')
// var user_Name='sqvfgaf'
// var user_Password='dewv'
// var user_RegistrationTime='2342-03-23'

// mysqlConnection.watchCash('李茂松',results=>{
//   console.log(results)
// })
// mysqlConnection.ClickNum(results=>{
//   console.log(results)
// })
// mysqlConnection.addNum(1)
// mysqlConnection.selBookId('男生',results=>{
//   console.log(results)
// })
// mysqlConnection.selBookAll(1,results=>{
//   console.log('ok',results)
// })
mysqlConnection.userMymsg('张洋',results=>{
  console.log(results)
  })
// mysqlConnection.selSectionId(5,results=>{
//   console.log(results)
// })
// mysqlConnection.selBookAll(1,results=>{
//   console.log(results)
// })
// mysqlConnection.changeMoney('李茂松',100,100,results=>{
//   console.log(results)
// })
// var bbb=mysqlConnection.selectUser('张洋')
// console.log(bbb)
// mysqlConnection.watchCash('张洋',results=>{
//   console.log(results)
// })
// // mysqlConnection.userAllmsg('张洋',results=>{
//     console.log(results)
// })
// mysqlConnection.userMyContribute('张洋','as','玄幻','2342-03-23','第一章','测试章节',results=>{console.log(results)})
// mysqlConnection.changeMoney('张洋','100','1',results=>{
//     res.send(results)
//    console.log(results)
//  })
// mysqlConnection.userMymoney('张洋',results=>{console.log(results)})
// // mysqlConnection.userMymsg('张洋')
// mysqlConnection.selectUserName('张洋',results=>{console.log(results)})
// mysqlConnection.insertUser('我是谁','123456789csfas','2331/01/12')
// console.log(__filename)
// mysqlConnection.selectUserName(user_Name, results=>{
//      if(results!=0){                ///这里的判断必须用！=0
//         console.log(results)
//         console.log('用户名重复')
//          res.send(false)
//      }
//     else{
//          console.log('欧克')
//          mysqlConnection.insertUser(user_Name,user_Password,user_RegistrationTime)
//          res.send(true)
//   }   
// });

// mysqlConnection.selectUserNamePass(user_Name,user_Password,results=>{
//         res.send(results)
//         console.log(results)
// })

