/*
* Generator
*   1. 语法在普通的函数后面加*
*   2. 当遇到yield关键字的时候函数就会停止执行
*   3. 需要把fn()执行结果保存到变量里 .next()
* */

/*
function* fn(num){
    console.log(num);   //不会执行
    yield console.log(++num);
    yield console.log(++num);
    yield console.log(++num);
    yield console.log(++num);
}

let f = fn(1);
f.next();
f.next();
f.next();
f.next();
*/


function* fn2(){
    for(let i=0; i<5; i++){
        yield console.log(i);
    }
}
let f2 = fn2();
f2.next();
f2.next();
f2.next();
f2.next();

function* fn3() {
    let a = yield 0;
    console.log(a);
}

let f = fn3();
console.log(f.next('这里是第一个next'));
console.log(f.next('这里是第二个next'));
console.log(f.next('这里是第三个next'));
