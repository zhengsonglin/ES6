/*
*   数值的拓展
*       Math.trunc(num)     //直接去掉小数点部分
*       Math.sign(num)      //num： 正数返回1， 负数返回-1， 0返回0， -0返回-0
*       Math.hypot(n1,n2);   //返回平方和的平方根(等同于 勾股定理)
* */

let num = 1.234;
console.log("直接去掉小数点部分: "+ Math.trunc(num));   //1， 直接去掉小数点部分， 不进行上下取整

/*
console.log("负0 返回: "+Math.sign(-0)); // -0  负0 返回-0
console.log("正0 返回: "+Math.sign(0)); // 0  正0 返回正0
console.log("负数返回: "+Math.sign(-10));    //-1, 负数返回-1
console.log("正数返回: "+Math.sign(10));    //1, 正数返回1
*/



console.log(Math.hypot(3, 4));  //5; 返回平方和的平方根 （勾股定理）
console.log(Math.hypot(6, 8));  //10
console.log(Math.hypot(1, 2, 3));  //3.74165...





