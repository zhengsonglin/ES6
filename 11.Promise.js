/*
    传统方式， 同时进行
setTimeout(function () {
    console.log(1);
},1000);

setTimeout(function () {
    console.log(2);
},1000);

*/

/*
let p = new Promise((resolve, reject)=>{
    setTimeout(function () {
        console.log(1);
    //    resolve('我成功了，传递的参数');    //Promise执行成功， 加上resolve()继续执行后面的then方法，如果不加则不会执行then方法
        reject('我失败了，传递的参数');   //Promise执行失败， 不会执行后面的then方法
    },1000);
});

p.then(function (resolveData) {    //等待p执行完成后再继续执行
    setTimeout(function () {
        console.log(2 + "\n" + resolveData);
    },1000);
},function(rejectData){   //p失败后执行
    console.log(rejectData);
});
*/

//多个promise依次执行
let myPromise = function(num){
    return new Promise((resolve, reject)=>{
        setTimeout(function () {
            console.log(num);
            resolve(num);
        },1000)
    })
};

/*
myPromise(1).then(function (resolveData) {
  //  console.log(this);
    return myPromise(++resolveData);    //这里必须是一个Promise对象
}).then(function (resolveData) {
    return myPromise(++resolveData);
});
*/

//等myPromise(10)和myPromise(11)都执行完成后才会执行( myPromise(10)和myPromise(11)是同时进行的 )
Promise.all([myPromise(10), myPromise(11)]).then(()=>{
    console.log("等myPromise(10)和myPromise(11)都执行完成后才会执行");
});

let p3 = new Promise((resolve, reject)=>{
    reject("失败了");
});


//p3失败，then方法不会执行
Promise.all([myPromise(10), myPromise(11), p3]).then(()=>{
    console.log("p3失败了，所以当前这段话不会被执行");
},(rejectData)=>{
    console.log("输出失败信息："+rejectData);
});



