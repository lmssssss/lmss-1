var mysql   = require('mysql');
var exports=module.exports;
var mysqlConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '770880aaa',
  database : 'navol',
  // useConnectionPooling: true
});

mysqlConnection.connect(function(){console.log('mysql链接成功！dd http://127.0.0.1:3000')});


////////////链接///////////
////////////错误信息处理///////////
errMsg=err=>{
  if(err){
    console.log('[错误] --- ',err.message);
    return ;
  } 
}
/////////错误信息处理////////////
///////注册篇//////////

// /////////注册判定数据库内是否有该用户///////////
exports.selectUserName=function(user_Name, callback){
  
	var sql=`select user_Name from users_personal where user_Name=?`; 
	mysqlConnection.query(sql,user_Name,function(err,result){
    if(err){
      console.log('[错误] --- ',err.message);
      callback(false)
      return ;
    } 
        console.log(result)
        callback(result)
        
	}); 
};
// /////////注册判定数据库内是否有该用户///////////

// ////////注册插入数据//////////////////////////
exports.insertUser=function(user_Name,user_Password,user_RegistrationTime){
  var sql_1=`select max(user_Id) as user_Id from users_personal`;
  mysqlConnection.query(sql_1,function(err,result){
    if(err){
      console.log('[错误] --- ',err.message);
      return ;
    } 
    var  user_Id= result[0].user_Id+1
    console.log('正在创建用户...用户ID:',user_Id)
    var sql_2=`INSERT INTO users_personal(user_Id,user_Name,user_Password,user_RegistrationTime) VALUES(?,?,?,?)` 
    var addSqlParams=[user_Id,user_Name,user_Password,user_RegistrationTime]
    mysqlConnection.query(sql_2,addSqlParams,function(err,result){
if(err){
      console.log('[错误] ---/   ',err.message);
      return ;
    } 
            // console.log(result)
    console.log('创建成功')
    
})
  })
  
}
// ////////注册插入数据//////////////////////////

////////////////////////登陆查询比对用户名密码///////
exports.selectUserNamePass=function(user_Name,user_Password,callback){
	var sql=`select user_Name,user_Password from users_personal where user_Name=?`; 
  mysqlConnection.query(sql,user_Name,function(err,result){
    if(err){
      console.log('[错误] --- ',err.message);
      callback(false)
      return ;
    } 
    //  console.log()////{aaa:'dasds',bbb:'asfsa'},{ccc:'dasds',bbb:'asfsa'}
     if(result!=0){
       if(result[0].user_Password===user_Password
      &&result[0].user_Name===user_Name){
        console.log('用户验证成功！')
        callback(true)
      }else{
       console.log('用户名或密码错误！')
        callback(false)
      }
     }else{
       callback(false)
     }
     
    })
}
////////////////////////登陆查询比对用户名密码///////


/////////用户中心--个人信息--查找该用户数据////////////
exports.userMymsg=(user_Name,callback)=>{
  var sql=`select user_Name,user_RegistrationTime,user_Email,user_BriefIntroduction
           from users_personal where user_Name=?`; 
  mysqlConnection.query(sql,user_Name,(err,result)=>{
    if(err){
      console.log('[错误] --- ',err.message);
      callback(false)
      return ;
    } 
    callback(result[0])
  })   

}
/////////用户中心--个人信息--查找该用户数据////////////

/////////用户中心--个人信息--修改用户数据/////////////
exports.updateMymsg=(user_Name,user_Email,user_BriefIntroduction,callback)=>{
  var sql=`UPDATE users_personal SET user_Email=?,user_BriefIntroduction=? WHERE user_Name=?;`
  mysqlConnection.query(sql,[user_Email,user_BriefIntroduction,user_Name],(err,result)=>{
    if(err){
      console.log('[错误] --- ok',err.message);
      callback(false)
      return ;
    }
    callback(true)
    console.log('用户数据/修改成功')
  })
}
////////用户中心--个人信息--修改用户数据/////////////

//////////用户中心--我要投稿--插入书籍或文章//////////
exports.userMyContribute=(user_Name,article_Name,article_Type,section_Time,section_Name,section_content,callback)=>{
    var sql1=`select user_Id from users_personal where user_Name=?`
    var sql2=`call insertArtic(?,?,?,?,?,?)`
    var sql3=`call insertSection(?,?,?,?,?,?)`
    var sql4=`select article_Id from users_article where article_Name=?`;
    var sql5=`select max(article_Id) as article_Id from users_article `;
    var sql6=`select max(section_Id) as section_Id from article_aection `
    

    // var sql4=`select user_Id from users_personal where user_Name=?`
    mysqlConnection.query(sql1,user_Name,(err,result)=>{
      if(err){
        console.log('[错误] --- ',err.message);
        callback(false)
        return ;
      } 
      var user_Id=result[0].user_Id
      console.log('找到该用户，ID：',user_Id)
      mysqlConnection.query(sql4,article_Name,(err,result)=>{
        if(err){
          console.log('[错误] --- ',err.message);
          callback(false)
          return ;
        } 
        var article_Id=result
        if (article_Id==0)
        {
            console.log('数据库中没有这本小说，正在写入...')
            mysqlConnection.query(sql5,(err,result)=>{
              if(err){
                console.log('[错误] --- ',err.message);
                callback(false)
                return ;
              } 
            var article_Id=result[0].article_Id+1
            console.log('新书ID：',article_Id,'正在写入新书...')
            mysqlConnection.query(sql2,[user_Id,user_Name,article_Id,section_Time,article_Name,article_Type],(err,result)=>{
              if(err){
                console.log('[错误] --- ',err.message);
                callback(false)
                return ;
              } 
              console.log('新书写入成功，即将写入新章节...')             
            })
            mysqlConnection.query(sql6,(err,result)=>{
              if(err){
                console.log('[错误] --- ',err.message);
                callback(false)
                return ;
              } 
              var section_Id=result[0].section_Id+1
              console.log('正在写入章节...ID:',section_Id)
              mysqlConnection.query(sql3,[section_Id,user_Name,article_Id,section_Time,section_Name,section_content],(err,result)=>{
                if(err){
                  console.log('[错误] --- ',err.message);
                  callback(false)
                  return ;
                } 
                console.log('章节写入成功')
                callback(true)
              })
            })
      })
            
        }else{
            var article_Id=article_Id[0].article_Id
            console.log('数据库已经有了这本书,正在写入新章节...书籍ID:',article_Id)
            mysqlConnection.query(sql6,(err,result)=>{
              if(err){
                console.log('[错误] --- ',err.message);
                callback(false)
                return ;
              } 
              var section_Id=result[0].section_Id+1
              console.log('正在写入章节...ID:',section_Id)
              mysqlConnection.query(sql3,[section_Id,user_Name,article_Id,section_Time,section_Name,section_content],(err,result)=>{
                if(err){
                  console.log('[错误] --- ',err.message);
                  callback(false)
                  return ;
                } 
                console.log('章节写入成功')
                callback(true)
              })
            })
      }
      })
      
    })        
    
}      
//////////用户中心--我要投稿--插入书籍或文章//////////

/////////用户中心--我的资产--查询资产信息///////////
exports.userMymoney=(user_Name,callback)=>{
  var sql= `select user_YouIntegral,user_YouMoney from users_personal where user_Name=?`
  mysqlConnection.query(sql,user_Name,(err,result)=>{
    if(err){
      console.log('[错误] --- ',err.message);
      callback(false)
      return;
    } 
    callback(result[0])//{ user_YouIntegral: '100', user_YouMoney: '100' }
  })
}
/////////用户中心--我的资产--查询资产信息///////////
/////////用户中心--我的资产--兑换///////////
exports.changeMoney=(user_Name,user_YouIntegral,user_YouMoney,callback)=>{
  var sql=`UPDATE users_personal SET user_YouIntegral=user_YouIntegral-?,user_YouMoney=user_YouMoney+? WHERE user_Name=?;`
  var user_YouIntegral=parseInt(user_YouIntegral)
  var user_YouMoney=parseFloat(user_YouMoney)
            mysqlConnection.query(sql,[user_YouIntegral,user_YouMoney,user_Name],(err,result)=>{
                if(err){
                console.log('[错误] --- ',err.message);
                callback(false)
                return;
                } 
                else
                callback(true)
      })
     

  
}
/////////用户中心--我的资产--兑换///////////

/////////用户中心--提现--修改提现金额///////////
exports.cashMoney=(user_Name,user_PayId,user_PayName,user_PayNum,callback)=>{
  var sql=`UPDATE users_personal SET user_PayNum=user_PayNum+?,user_PayId=?,user_PayName=?
          ,user_YouMoney=user_YouMoney-?,user_CashStatus=1 WHERE user_Name=?;`
          console.log(user_PayNum)
  var options= [user_PayNum,user_PayId,user_PayName,user_PayNum,user_Name]
  mysqlConnection.query(sql,options,(err,result)=>{
    if(err){
      console.log('[错误] --- ',err.message);
      callback(false)
      return;
      } 
      else
      callback(true)
  })
}
/////////用户中心--提现--修改提现金额///////////

/////////用户中心--提现--查看提现金额/状态///////////
exports.watchCash=(user_Name,callback)=>{
  var sql=  `select user_PayNum,user_PayId,user_PayName,user_YouMoney,user_CashStatus from users_personal where user_Name=?;`
  mysqlConnection.query(sql,user_Name,(err,result)=>{
    if(err){
      console.log('[错误] --- ',err.message);
      callback(false)
      return;
      } else
      callback(result[0])
  })
}

/////////用户中心--提现--查看提现金额///////////

/////////点击榜//////////////
exports.ClickNum=(callback)=>{
  var sql =`select article_Name,article_Id from users_article order by article_num desc limit 20`
  mysqlConnection.query(sql,(err,result)=>{
    if(err){
      console.log('[错误] --- ',err.message);
      callback(false)
      return;
      } else
      callback(result)
  })
}
/////////点击榜//////////////

/////////增加点击量/////////
exports.addNum=(article_Id)=>{
  var sql=`UPDATE users_article SET article_num=article_num+1 where article_Id=?`
  mysqlConnection.query(sql,article_Id,(err,result)=>{
    if(err){
      console.log('[错误] --- ',err.message);
      return;
      } else{
        var sql1= `select user_Id from users_article where article_Id=?;`
        mysqlConnection.query(sql1,article_Id,(err,result)=>{
          if(err){
            console.log('[错误] --- ',err.message);
            return;
            } else{
              var sql2=`update users_personal set user_YouIntegral= user_YouIntegral+1 where user_Id=?;`
              console.log(result[0].user_Id)
              mysqlConnection.query(sql2,result[0].user_Id,(err,result)=>{
                if(err){
                  console.log('[错误] --- ',err.message);
                  return;
                  }
                  console.log('点击量增加及游子增加成功')
              })
            }
        })
      }
  })
}
/////////增加点击量/////////



///////////按类型查找书籍-书名/id-按排名////
exports.selBookId=(article_Type,callback)=>{
  var sql =`select article_Name,article_Id from users_article where article_Type=? order by article_num desc limit 20`
  mysqlConnection.query(sql,article_Type,(err,result)=>{
    if(err){
      console.log('[错误] --- ',err.message);
      callback(false)
      return;
      } else
      callback(result)
  })
}
///////////按类型查找书籍-书id////

///////////按书id查找书-书名/作者名/作者id/点击量/更新时间///////
exports.selBookAll=(article_Id,callback)=>{
  var sql=`select article_Name,user_Name,user_Id,article_Time,article_num from users_article where article_Id=?`
  mysqlConnection.query(sql,article_Id,(err,result)=>{
    if(err){
      console.log('[错误] --- ',err.message);
      callback(false)
      return;
      } else
      console.log('ok')
      callback(result)
  })
}
///////////按书id查找书-书名/作者名/作者id/点击量/更新时间///////

///////////按书id查找书-章节id///////
exports.selSectionId=(article_Id,callback)=>{
  var sql=`select section_Id from article_section where article_Id=?`
  mysqlConnection.query(sql,article_Id,(err,result)=>{
    if(err){
      console.log('[错误] --- ',err.message);
      callback(false)
      return;
      } else
      callback(result)
  })
}
///////////按书id查找书-章节id///////

/////////按章节id查找章节内容相关////////
exports.selSectionAll=(section_Id,callback)=>{
  var sql=`select article_Id,section_Name,section_content from article_section where section_Id=?`
  mysqlConnection.query(sql,section_Id,(err,result)=>{
    if(err){
      console.log('[错误] --- ',err.message);
      callback(false)
      return;
      } else
      callback(result)
  })
}
/////////按章节id查找章节内容相关////////


// ////////书籍管理//////////////////////////
exports.bookmanage=function(callback){
  var sql=`select user_Name,article_Id,article_Name,article_Time from users_article`; 
  mysqlConnection.query(sql,function(err,result){
    errMsg(err);
    callback(result)
    })
  
}


////////////用户管理////////////////////////////////
exports.usersmanage=function(callback){
  var sql=`select user_Name,user_Id,user_Password,user_RegistrationTime from users_personal`; 
  mysqlConnection.query(sql,function(err,result){
    errMsg(err);
    callback(result)
    })
  
}





//////////////////////书籍删除////////////////////////
exports.bookdelete=function(article_Id,callback){
  var sql=`DELETE  FROM users_article WHERE article_Id = ?`; 
  mysqlConnection.query(sql,article_Id,function(err,result){
    errMsg(err);
})
}

///////////////////////用户删除/////////////////////////
exports.userdelete=function(user_Id,callback){
  var sql=`DELETE  FROM users_personal WHERE user_Id = ?`; 
  mysqlConnection.query(sql,user_Id,function(err,result){
    callback(true)
    errMsg(err);
})
}


////////////////////////用户查看/////////////////////
exports.usersscan=function(user_Id,callback){ 
  var sql=`select user_Name,user_Id,user_Password,user_RegistrationTime from users_Personal where user_Id=?`;
  mysqlConnection.query(sql,user_Id,function(err,result){
    errMsg(err);
    if(result!=0){
       console.log('用户查找成功！')
       callback(result)
    }else{
      console.log('用户查找失败！')
     callback(false)
    }
})
}