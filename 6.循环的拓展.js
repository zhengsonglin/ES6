/*
*   循环的拓展
*
*
* */
/*
    //es6, foreach循环数组，ie有兼容问题
    let arr = [1,2,5,7,3];
    arr.forEach(function (value, key) {
        console.log(value, key);
    });
*/

/**/
    let str = 'wulv';
    console.log(`for(let n in str)方式循环字符串`);
    for(let n in str){
        console.log(n + " --- " + str[n]);
        /*
        *   0 --- w
            1 --- u
            2 --- l
            3 --- v
        * */
    }

/*
    let str2 = 'wulv';
    console.log(`for(let n of str2)方式循环字符串`);
    for(let n of str2){
        console.log(n); //w u l v
    }

    let arr = [1,2,5,7,3];
    console.log(`for(let n of arr.keys())方式循环数组的key`);
    for(let n of arr.keys()){
        console.log(n + " --- " + arr[n]);
    }

    console.log(`for(let n of Object.values(arr))方式循环数组的value`);
    for(let value of Object.values(arr)){
        console.log(value);
    }
*/

    let obj = {
        a:1,
        b:2,
        c:3,
        arr:['1',2,'a', false]
    };
    //原始方法
    console.log(`for(let key in obj)原始方法`);
    for(let key in obj){
        console.log(key +"---" + obj[key]);
    }

    console.log(`for(let value of Object.values(obj))方式遍历对象的value`);
    for(let value of Object.values(obj)){
        console.log(value);
    }
    console.log(`for(let key of Object.keys(obj))方式遍历对象的key`);
    for(let key of Object.keys(obj)){
        console.log(key);
    }








