/*
* 字符串的拓展
*   1.拼接字符串： 用反引号申明 拼接变量的方式 ${变量名}
*       可以执行运算
*       换行可以直接换(用``包裹)
*
* */

/*
let num = 1;
let mst = "aa";
let str = `${num + 10} 
            mm`;
console.log(str);       //11, 数组运算;  11mm,字符串拼接
*/

/*
let str = '张三风';
console.log(str.includes("张")); //true
console.log(str.startsWith("张")); //true,  字符串以"张"开头
console.log("从第2位开始查找: "+str.startsWith("张", 1)); //false,  从第2位开始查找（下标从0开始），字符串以"张"开头

console.log(str.endsWith("三风")); //true,  字符串以"三风"结尾
console.log("从倒数第2位开始查找(逆向查找): "+str.endsWith("三风", 1)); //false,  从倒数第2位开始查找， 字符串以"三风"结尾
*/

/*
//返回一个数组(typeof 数组 为object)
let str = "m_aaa_aa_a_b";
let rl = /a+/g;         //字符串匹配， 从上次匹配到的地方开始匹配（后面继续匹配时，不限于从第一位开始，任然是全局匹配）
let rn = /a+/y;         //结合下面一个例子对比

//console.log(rl.exec(str));      //[ 'aaa', index: 2, input: 'm_aaa_aa_a_b' ]
//console.log(rl.exec(str));      //[ 'aa', index: 6, input: 'm_aaa_aa_a_b' ]
//console.log(rl.exec(str));      //[ 'a', index: 9, input: 'm_aaa_aa_a_b' ]

console.log(rn.exec(str));      //null  从第一位开始匹配（如m_不符合要求）
console.log(rn.exec(str));      //null  从上次匹配到的地方开始匹配（如：上次不符合要求，后面均不符合要求）
*/


/*
*   从上次匹配的地方开始匹配
*   第一次:aaa  剩余部分 _aa_a
*   第二次_aa_a
*
* */
let nStr = "aaa_aa_a";
let rm = /a+/y;
console.log(rm.exec(nStr));      //[ 'aaa', index: 0, input: 'aaa_aa_a' ]  从第一位开始匹配
console.log(rm.exec(nStr));     //null



