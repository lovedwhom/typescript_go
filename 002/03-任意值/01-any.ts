
// 普通类型，在赋值过程中类型是不允许被改变得
// let myAge :string ='seven'

// myAge =7

//任意值
//用来表示允许复制为任意类型

let myAge :any = 'seven'

myAge =7



//任意值得属性和方法
// 在任意值上访问任何属性都是允许的

let anyThing:any = 'Tom'
console.log(anyThing.myname);
console.log(anyThing.myName.firstName);

// 也允许调用任何方法：
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');


//未声明的变量

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

// let something;
// something = 'seven';
// something = 7;

// something.setName('Tom');

// 等价于

// let something: any;
// something = 'seven';
// something = 7;

// something.setName('Tom');