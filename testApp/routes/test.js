function A(){
    var x = 1;
    return function(){
        x++;
        console.log(x);
    }
}
var m1 = A();//第一次执行A函数
m1();//2
m1();//3
var m2 = A();//第二次执行A函数
m2();//2
m1();//4