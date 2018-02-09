

/*
*   对象的代理
*       get(obj, key){} //当对象被访问的时候触发
*       set(obj, key, value){}  //当对象被重新设置的时候触发
*       ['wu' + 'lv']:"666"  //定义对象的一种新方式
* */

let obj = {
    a:1,
    b:2,
    age:20,
    say(){
        console.log("说点什么呢! 我的年纪是："+ this.age);
    },
    ['wu' + 'lv']:"666",
    ['name']:"张三"
}

let p1 = new Proxy(obj, {
    get(obj, key){  //key(被访问的key值), 访问对象的属性或方法时触发，并返回自定义内容
      //  return "123";
        return obj[key];
    },
    set(obj, key, value){  //key(被设置的key值), value(key被设置的value值)
        console.log("key:"+ key + "---" + "value:" + value + "---" + obj.age);
        if(value > obj.age){
            obj.age = value;
        }
    }
});

/*
//console.log(p1.say);       //123，
p1.age = 10;
console.log(p1.age);    //因为10<20, 所有p1.age为20

console.log(`访问obj中 ['wu' + 'lv']方式设置的值：`+ obj.wulv);
console.log(`访问obj中 ['name']方式设置的值：`+ obj.name);
*/

/*
*   Object.is()    //判断参数是否相等
*   Object.assign() //多个obj对象组装成一个， 如果有重复属性或方法，后面的会替换前面
* */

//console.log("用===也无法判断0和-0: "+ (0 === -0) );  //true
//console.log(`用Object.is(0, -0)判断0和-0: ` + Object.is(0, -0));  //false
//console.log(` NaN == NaN : `+ (NaN == NaN) );
//console.log(`Object.is(NaN, NaN) :` + Object.is(NaN, NaN));

let ob1 = {
    a:1,
    b:2
};
let ob2 = {
    b:4,
    say(){
        console.log(this.b);
    }
};
let ob3 = {
    c:"666",
    say(){
        console.log("speak");
    }
}
let nObj = Object.assign(ob1, ob2, ob3);    //多个对象合并成一个对象， 后面的对象会覆盖掉前面重复的属性或方法
console.log(nObj);
nObj.say();

/*
*   获取对象的prototype
* */

let cat = function(name) {  //cat对象
    this.name = name;
    this.sex = 'male';
};
cat.prototype.showName = function(){
    return this.name;
};
cat.prototype.showSex = function(){
    return this.sex;
};
let c = new cat('c');
console.log(Object.getPrototypeOf(c));  //获取对象的prototype

let dog = function(){};    //dog对象
dog.prototype.getColor = function(){};
let d = new dog();

Object.setPrototypeOf(d, cat.prototype);
console.log(Object.getPrototypeOf(d));      //覆盖自身的getColor方法
