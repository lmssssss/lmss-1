var express = require('express');
var router = express.Router();
var mysqlConnection=require('./mysqlConnection')
var querystring = require("querystring");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods","*");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8MB4");
  next();
});
/////////////登陆
router.post('/',function(req,res,next){

  var data=req.body
  
  mysqlConnection.selectUserNamePass(data.username,data.password,results=>{
      res.send(results)
  })
  
})
/////////////登陆

/////////////注册

router.post('/adduser',function(req,res,next){
  var data=req.body
  console.log(data)
  mysqlConnection.selectUserName(data.username, results=>{
    if(results!=0){                ///这里的判断必须用！=0
       console.log(results)
       console.log('用户名重复，注册失败')
        res.send(!results)
    }
   else{
        console.log('注册成功')
        mysqlConnection.insertUser(data.username,data.password,data.nowtime)
        res.send(results)
 }   
});

})

/////////////注册

////////////用户中心--个人信息--显示
router.post('/selPerMsg',(req,res,next)=>{
  var username= req.body
  console.log(username)
  mysqlConnection.userMymsg(username.user_Name,results=>{
  res.send(results)
  })
  
})
////////////用户中心--个人信息--显示

////////////用户中心--个人信息--修改
router.post('/upMymsg',(req,res)=>{
  var data=req.body
  // console.log(data)
  mysqlConnection.updateMymsg(data.user_Name,data.user_Email,data.user_BriefIntroduction,results=>{
    res.send(results)
  })
})
////////////用户中心--个人信息--修改


////////////////用户中心--我要投稿
router.post('/contribute',(req,res)=>{
  var data=req.body
  // console.log(data)
  var user_Name=data.user_Name
  var article_Name=data.article_Name
  var article_Type=data.article_Type
  var section_Time=data.section_Time
  var section_Name=data.section_Name
  var section_content=data.section_Content
  mysqlConnection.userMyContribute(user_Name,article_Name,article_Type,section_Time,section_Name,section_content,results=>{
      res.send(results)
  })
})
////////////////用户中心--我要投稿

///////////////用户中心--我的资产--查看
router.get('/myMoney',(req,res)=>{
  var username=req.query.user_Name
  // console.log('哈哈：',req.query.user_Name)
  if(Object.getOwnPropertyNames(username).length)
 { 
  //  console.log('asds')
   mysqlConnection.userMymoney(username,results=>{
    //  console.log(results)
    res.send(results)
  })
}
})
///////////////用户中心--我的资产--查看
///////////////用户中心--我的资产--兑换
router.post('/changeMoney',(req,res)=>{
  var user_Name=req.body.user_Name;
  var user_YouIntegral=req.body.user_YouIntegral;
  var user_YouMoney=req.body.user_YouMoney
  // console.log(user_YouIntegral>0)
  // console.log(user_YouMoney>0)

  if(Object.getOwnPropertyNames(req.body).length&&user_YouIntegral>0&&user_YouMoney>0)
 { 
  mysqlConnection.userMymoney(user_Name,results=>{
    if(results&&results.user_YouIntegral-user_YouIntegral>0)
    {
          mysqlConnection.changeMoney(user_Name,user_YouIntegral,user_YouMoney,results=>{
            mysqlConnection.userMymoney(user_Name,results=>{
              res.send(results)
            })
      })
    }else{
      
      res.send(false)
    }
    })
}else{
  
  res.send(false)
}
})
///////////////用户中心--我的资产--兑换

//////////////用户中心--提现--提现请求//
router.post('/cashMoney',(req,res)=>{
  var data=req.body
  mysqlConnection.cashMoney(data.user_Name,data.user_PayId,data.user_PayName,data.user_PayNum,results=>{
    console.log('提现成功！')
    res.send(results)
  })
})
//////////////用户中心--提现--提现请求//

//////////////用户中心--提现--提现状态//
router.get('/cashStatus',(req,res)=>{
  var user_Name=req.query.user_Name;
  console.log(user_Name)
  mysqlConnection.watchCash(user_Name,results=>{
    res.send(results)
  })
})
//////////////用户中心--提现--提现状态//

//////////////////点击榜//////////////////////
router.get('/ClickNum',(req,res)=>{
  mysqlConnection.ClickNum(results=>{
    res.send(results)
  })
})
//////////////////点击榜//////////////////////

///////////////////增加点击量///////////////
router.post('/addNum',(req,res)=>{
  mysqlConnection.addNum(req.body.article_Id)
})
///////////////////增加点击量///////////////

///////////////////按类型查找书籍-书名/id-按排名///////////////
router.post('/selBookId',(req,res)=>{
  mysqlConnection.selBookId(req.body.article_Type,results=>{
    res.send(results)
  })
})
///////////////////按类型查找书籍-书名/id-按排名///////////////

///////////按书id查找书-书名/作者名/作者id/点击量/更新时间///////
router.post('/selBookId',(req,res)=>{
  mysqlConnection.selBookId(req.body.article_Id,results=>{
    res.send(results)
  })
})
///////////按书id查找书-书名/作者名/作者id/点击量/更新时间///////

///////////按书id查找书-章节id///////
router.post('/selSectionId',(req,res)=>{
  mysqlConnection.selSectionId(req.body.article_Id,results=>{
    res.send(results)
  })
})
///////////按书id查找书-章节id///////

/////////按章节id查找章节内容相关////////
router.post('/selSectionAll',(req,res)=>{
  mysqlConnection.selSectionAll(req.body.section_Id,results=>{
    res.send(results)
  })
})
/////////按章节id查找章节内容相关////////




///////////////////管理员





///////////////////8080登录//////////////
router.post('/log',function(req,res,next){
  var data=req.query
  console.log(data)
  mysqlConnection.selectUserNamePass(data.username,data.password,results=>{
    res.send(results)
})
})

///////////////////////8080书籍管理——查看所有书籍////////////////////
router.get('/book_ck', function(req, res,next) {
  console.log("接受到book_ck请求")
  mysqlConnection.bookmanage(results=>{
    console.log('发送给book_ck的回应') 
      res.send(results);
  })
});

////////////////8080用户管理-查看所有用户//////////////////////////
router.get('/user_ck', function(req, res,next) {
  console.log("接受到user_ck请求")
  mysqlConnection.usersmanage(results=>{
      console.log('发送给user_ck的回应')
      res.send(results);
      return(true)
  })
});

/////////////////////8080书籍删除//////////////////////////////////////
router.post('/book_dlt',function(req,res,next){
  var data=req.body
  console.log('接受到book_dlt请求书籍编号为',data.bookid)
  mysqlConnection.bookdelete(data.bookid,results=>{
    console.log('发送回应')
      res.send(results)
  })
})

////////////////////////8080用户删除////////////////////////////////////
router.post('/user_dlt',function(req,res,next){
  var data=req.body
  console.log('接受到book_dlt请求用户编号为',data.userid)
  mysqlConnection.userdelete(data.userid,results=>{
    console.log('发送回应')
      res.send(results)
  })
})
















module.exports = router;