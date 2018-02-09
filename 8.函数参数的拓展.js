/*传统方式， 通过arguments获取
//
function fn(a,b){
    console.log(arguments); //json对象（不定参）
    for (let n in arguments) {
        console.log( n + " --- " + arguments[n]);
    }
}

fn('a','b','c','d','e');

*/


function fn(a, b , ...c){
    console.log(c);     //[ 3, 4, 5, 6 ]
    console.log(c.length);     //4
    console.log(...c);  //3 4 5 6
}

//fn(1, 2, 3, 4, 5, 6);


fn2 = function(a, b=2){ //即 b = b||2
    console.log(a, b);
};
//fn2(1, 3);

let fun = function(){    //传统function方式

};

/*
    es6 定义function方式（箭头函数）， 通常只用与回调函数
    //并不能当做正真的函数
    //仅仅只有一个参数的时候 才能省略 包裹参数的()
    //1.箭头函数 不能通过 new 方式创建实例
    //2. 箭头函数不存在 arguments， 但可以用 ...a 方式接受参数
    //3. this指向永远是指向 其父级 所在的对象 （关键）
    // 箭头函数自带返回功能
 */
let fn1 = ()=>{
    console.log(666);
}
let fun2 = ()=> console.log(888);       //如果只有一行，可以省略方法的{}
fn1();
fun2();

let fn3 = a=> console.log(555);     //只有一个参数时可以省略包裹参数的()， 没有参数或多个参数都不能省略
fn3();


let obj1 = {
    name : '这里是obj1',
    a:function () {
        setTimeout(function () {
           console.log(this.name);      //undefined (this 指向window)
        });

        setTimeout(()=>{
            console.log(this.name);     //这里是obj1 (this指向永远是指向定义时所在的对象 )
        });
    },
    b:()=>{
        setTimeout(()=>{
            console.log(this.name);     //undefined (this 指向window)
        });
    }

}
obj1.a();   //父级为a函数，父级所在的对象为obj1
obj1.b();   //父级为obj1, 父级所在的对象为window





