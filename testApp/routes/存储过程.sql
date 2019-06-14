-- -- 插入书籍users_Article
create procedure insertArtic(
                             in i_user_Id int,
                             in i_user_Name VARCHAR(12),
                             in i_article_Id int,
                             in i_article_Time date,
                             in i_article_Name VARCHAR(20),
                             in i_article_Type VARCHAR(20)
                             )
begin
    DECLARE o_user_Id int;
    DECLARE o_user_Name VARCHAR(12);
    DECLARE o_article_Id int;
    DECLARE o_article_Time date;
    DECLARE o_article_Name VARCHAR(20);
    DECLARE o_article_Type VARCHAR(20);


    set o_user_Id=i_user_Id;
    set o_user_Name=i_user_Name;
    set o_article_Id=i_article_Id;
    set o_article_Time=i_article_Time;
    set o_article_Name=i_article_Name;
    set o_article_Type=i_article_Type;


    INSERT into     users_article(user_Id,user_Name,article_Id,article_Time,article_Name,article_Type)
           VALUES   (o_user_Id,o_user_Name,o_article_Id,o_article_Time,o_article_Name,o_article_Type);
end

-- 插入章节
create procedure insertSection(
                             in i_section_Id int,
                             in i_user_Name VARCHAR(12),
                             in i_article_Id int,
                             in i_section_Time date,
                             in i_section_Name VARCHAR(20),
                             in i_section_content TEXT(30000)
                             )
begin
    DECLARE o_section_Id int;
    DECLARE o_user_Name VARCHAR(12);
    DECLARE o_article_Id int;
    DECLARE o_section_Time date;
    DECLARE o_section_Name VARCHAR(20);
    DECLARE o_section_content TEXT(30000);

    set o_section_Id=i_section_Id;
    set o_user_Name=i_user_Name;
    set o_article_Id=i_article_Id;
    set o_section_Time=i_section_Time;
    set o_section_Name=i_section_Name;
    set o_section_content=i_section_content;

    INSERT into     article_section(section_Id,user_Name,article_Id,section_Time,section_Name,section_content)
           VALUES   (o_section_Id,o_user_Name,o_article_Id,o_section_Time,o_section_Name,o_section_content);
end

-- 调用
-- call insertArtic(1,'张洋',1,'2019/5/11','哈哈','玄幻')
-- call insertSection(1,'张洋',1,'2019/5/11','第一章','这是文章的内容，测试中哈哈哈哈');
-- 查找看是否插入成功
-- SELECT * from users_Article
-- SELECT * from article_Section
-- 删除
--  DROP   PROCEDURE insertArtic
-- DROP  PROCEDURE insertSection