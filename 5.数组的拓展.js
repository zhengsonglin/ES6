/*
*   数组的拓展
*       1.Array.from(div) 把类数组转换成 真正的数组
*       2.Array.of() 接收一组参数转换成真数组(每组参数可以是任意类型，用“，”隔开)
*       3.Array.find()  //循环遍历数组，key和value作为筛选条件，返回第一个符合要求的value值(停止遍历)，没有则返回undefined
*       4.Array.findIndex() //同上，返回符合要求的索引（index）, ，没有则返回-1
* */

//let div = document.getElementsByTagName("div"); //数组
//let arr = Array.from(div);
//console.log(arr);       //把上面的div类数组转换成 真正的数组

let str = "wulv";
//console.log(str.split(""));     //[ 'w', 'u', 'l', 'v' ]
//console.log(Array.from(str));   //[ 'w', 'u', 'l', 'v' ]


/*
console.log(Array.of(1,2,3,4));     //[ 1, 2, 3, 4 ]
let nArr = Array.of("1,2", 3, 4, false, {name:"123"});
console.log( nArr);       //[ '1,2', 3, 4, false, { name: '123' } ]
*/

/*
let arr = [1,3,5,7,9];
let n = arr.find(function(value, key){
   // console.log(value, key);
   //  return value > 5;       //7, 符合要求后，停止遍历并返回符合要求的value, 都不符合返回undefined
    return key > 2;             // 7
});
console.log(n); //返回满足遍历要求的value值
*/

/*
let mArr = [2, 4, 6, 8, 10];
let m = mArr.findIndex(function(value, key){
 //   console.log(value, key);
    return value>10;        //循环遍历返回符合要求的索引（第一个符合要求后就停止遍历，返回当前符合要求的index）,没有则返回-1
//    return key>9;         //index>9的第一个索引值（index）， 没有则返回-1
});
console.log(m);     //返回符合要求的索引（index下标），没有符合条件的或者没有设置条件均返回-1
*/

//替换数组元素，参数:1要替换的值， 2 开始索引， 3结束索引(endIndex > startIndex , 替换个数= endIndex - startIndex)
let arr = [1,2,5,7,3];
console.log(arr.fill("aa", 2, 5));  //[ 1, 2, 'aa', 'aa', 'aa' ] , 如果endIndex 大于length，后面超出部分则无法替换



