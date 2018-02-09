/*
*   构造函数
*      定义构造函数的语法 class + 自定义的名字 {}
* */

function fn() {

}

//上面的 等于 下面
class Cat{
    //构造函数本身
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    getName(){
        return this.name;
    }
    static getColor(color){  //静态方法， 不需要new创建实例, 可以直接调用
        console.log(color);
    }
}

//extends 继承， （狗继承的猫的方法）
class Dog extends Cat{
    constructor(name, color){
        super(name);    //父类本身constructor
    }
    static getColor(color){
        super.getColor(color);
    }
}

let c = new Cat("猫", "red");
console.log(c.getName());
Cat.getColor("blue");       //不需要new创建实例, 可以直接调用


let d = new Dog("狗", "black");
console.log('\n'+d.getName());

Dog.getColor("black");      //不需要new创建实例, 可以直接调用




