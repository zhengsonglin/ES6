/*
* 变量的拓展
* 1.let
*       特性：1.没有与解析
*             2.不允许重复申明
*             3.块级作用域 {}称之为代码块
*
*  2. const常量
*        1. 常量 固定的值 不能被修改
* */

/*
var mm = 1;
let mm = 2;
console.log(mm);    //报错(不允许重复申明)
//或
let nn = 1;
var nn = 2;
console.log(nn);    //报错(不允许重复申明)
*/


//console.log(a); //报错 (没有与解析)
let a = 1;
console.log(a);     //1
//let a = 2;      //报错 (不允许重复申明)



{                   //块级作用域
    let b = 3;
//    console.log(b); //3
}
//console.log(b); //报错



/*
//传统闭包方法
for(var i=0; i<3; i++){
    (function(i){
        setTimeout(function(){
            console.log(i);
        })
    })(i)
}
*/

/*
for(let i=0; i<3; i++){ //{} 形成块级作用域
    setTimeout(function(){
        console.log(i);     //0， 1， 2
    })
}
*/


/*
const a = 1;
a = '我太帅了啊';
console.log(a);     //报错
*/


const b = {"name":"张三"};
b.name = "李四";
b.age = 22;
console.log(b);     //常量对象可以被修改

