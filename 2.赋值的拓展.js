
/*
* 赋值的拓展 结构赋值： 可以按照一定的结构进行赋值
*       1. 对象属性名一定要对上
*
*
* */

/*
let [a,b] = [1,2];
console.log(a,b);       //1,2
*/

/*
let [ a, [b, c] ] = [1, [2, 3] ];
console.log(a,b,c);     //1,2,3
*/

/*
let obj = {
    arr:[1,2,3],
    str:'hello',
}
let {arr, str} = obj;       //这里必须用arr和str代替数组和字符串类型
console.log(arr, str);
*/

/*

var a = "张三";       //注意这里用let时，后面不用let再申明， 因为let变量不能重复定义
var b = "李四";

var [a, b] = [b, a];        //交换属性值
console.log(a, b);      //李四 张三
*/

/**/
let a = "张三";       //注意这里不能用let， 因为let变量不能重复定义
let b = "李四";

 [a, b] = [b, a];        //交换属性值
console.log(a, b);      //李四 张三


