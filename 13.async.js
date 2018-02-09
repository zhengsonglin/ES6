
/*
*   async 语法: 在函数前面加上关键字 async
*   await 在async定义的方法体里面使用， 关键字后面必须是Promise对象
*
* */


    let p1 = function(){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                console.log("这里是p1");
                resolve("这里是返回的p1数据");
            },2000);
        });
    };

    let p2 = function(data){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                console.log("这里是p2, 来自于p1中的返回值:"+ data);
                resolve("这里是返回的p2数据");
            },2000);
        });
    };

    /*
        当遇到await 自动执行关键字后面的Promise对象
        当Promise对象变为成功或失败 会自动继续执行下一个await后面的Promise
     */
    async function fn() {
        console.log('start');
        //只有在async函数里面才能使用await关键字
        let pp1= await p1();
        let pp2= await p2(pp1);
        //这里return出去的东西 在then里面接收
        return pp2;
    }
    fn().then((data)=>{
        setTimeout(() => {
            console.log(data);
            console.log("end");
        },2000);
    });















