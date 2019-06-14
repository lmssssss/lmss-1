CREATE TABLE  `users_Personal`(
   `user_Id`                    INT,
-- 用户id
   `user_Name`                  VARCHAR(12) NOT NULL,
-- 用户名   
   `user_Password`              CHAR(20)    NOT NULL,
-- 密码
   `user_RegistrationTime`      DATE        NOT NULL,
-- 注册时间
   `user_Email`               CHAR(50)    NULL,
-- 邮箱地址
   `user_BriefIntroduction`     VARCHAR(12) NULL,
-- 个人简介
   `user_YouIntegral`           CHAR(100)    DEFAULT 100,
-- 游子积分
   `user_YouMoney`              CHAR(100)    DEFAULT 100,
-- 游币
    `user_PayId`                CHAR(20)    NULL,
-- 支付宝账号
    `user_PayName`              varCHAR(20)    NULL,
-- 支付宝姓名
    `user_PayNum`              CHAR(20)    NULL,
-- 提现金额
    `user_CashStatus`          int (1)  DEFAULT 0,
--提现状态    
    PRIMARY KEY ( `user_Id`)
-- user_Id设为主键
)ENGINE=InnoDB DEFAULT CHARSET=utf8MB4;

CREATE TABLE  `users_Article`(
   `user_Id`                    INT, 
-- 
   `user_Name`                  VARCHAR(12) NOT NULL,
-- 
   `article_Id`                 INT,
-- 文章id
   `article_Time`               DATE        NOT NULL,
-- 文章创建时间
   `article_Name`               VARCHAR(20) NOT NULL,
-- 文章名
    `article_num`               int(20) default 0,
-- 文章点击量
    `article_Type`             varchar(20) not null,
   PRIMARY KEY ( `article_Id` ),
-- article_Id设为主键
   FOREIGN KEY (`user_Id`) REFERENCES `users_Personal`(`user_Id`)
-- user_Id设为外键
)ENGINE=InnoDB DEFAULT CHARSET=utf8MB4;


CREATE TABLE  `article_Section`(
   `user_Name`                  VARCHAR(12) NOT NULL,
-- 
   `article_Id`                 INT ,    
-- 
   `section_Id`                 INT UNSIGNED AUTO_INCREMENT,    
-- 章节id，自增型
   `section_Time`               DATE        NOT NULL,
-- 章节创建时间
   `section_Name`               VARCHAR(20) NOT NULL,
-- 章节名
   `section_content`            TEXT(30000),
-- 章节内容
   PRIMARY KEY ( `section_Id` ),
-- section_Id设为主键
   FOREIGN KEY (`article_Id`) REFERENCES `users_Article`(`article_Id`)
-- 
)ENGINE=InnoDB DEFAULT CHARSET=utf8MB4;

-- DROP TABLE users_Personal ;
-- DROP TABLE users_Article ;
-- DROP TABLE article_Section ;