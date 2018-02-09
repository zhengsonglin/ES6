/*
*   Map es6新增的一个数据结构， 类似于对象 【也可以用obj或function作为key】
*
*       1.size
*       2.set() 添加键值对
*       3.has() 查找key是否存在，true存在， false不存在
*       4.delete() 通过key删除
*       5.clear() 清空map
* */
let obj = {a:1, b:'2'};
let fn = function () {

}
let map = new Map([
    ['name', 'wulv'],
    ['age', 18],
    [obj, '这里key是obj'],
    [fn, '这里的key是function']
]);
console.log(map);

let obj2 = {};
console.log('\n --------map.set(obj2, \'123\') ---------');
console.log(map.set(obj2, '123'));  //添加数据，key为obj类型
console.log(map.set("newData", '123'));

//console.log(map.has(obj2));     //true， 判断集合是否有某一个key， 存在返回true
console.log('\n--------map.delete(fn)-------');
map.delete(fn); //删除key为fn的键值对，key存在返回true， 不存在返回false
console.log(map);



console.log('\n --------map.clear()清空map------');
map.clear();
console.log(map);   //Map {}

