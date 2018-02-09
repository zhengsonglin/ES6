/*
*   Set: es6新增的函数结构 是一个构造函数，所有的值是唯一的
*
* */

let set = new Set([1, 2, 2, '2', '3']); //会去掉重复的2，但是字符串类型的2和number类型的2 是不重复的
console.log(set);
/*
*   1.size  指set的大小，相当于数组的length
*   2.add() 向set后面添加元素， 相当于数组中的push()
*   3.delete() 删除set中指定的元素， 指定的元素存在返回1，不存在返回-1
*   4.has() 查找，如果找到返回 true， 没找到返回false
*   5.clear() 清除所有内容
* */
console.log(set.size);  //4
console.log(set.add('4'));  //Set { 1, 2, '2', '3', '4' } ，添加元素
set.delete(1);      //在set中，如果删除的元素存在则返回1， 不存在则返回-1, 如console.log(set.delete(1))打印1
console.log(set);   //Set { 2, '2', '3', '4' }

console.log(set.has('4'));  // 找到字符串4， 返回true
console.log(set.has(5));  // 找不到， 返回false

set.clear();
console.log(set);   //Set {}  , 删除全部元素

