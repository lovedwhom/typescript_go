
function sum () {
    let args:number[] = arguments
}

// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 15 more.

// argements 实际上是一个类数组，不能用普通的数组的方式来描述,而应该用接口


function sum2 () {
    let args: {
        [index:number]: number;
        length:number;
        callee:Function;
    } = arguments
}


//事实上类数组都有自己的接口定义 如IArguments, NodeList, HTMLCollection等

function sum3 () {
    let args: IArguments = arguments;
}


//其中IArguments 时typescript 中定义好了的类型 实际上就是

// interface IArguments {
//     [index: number]: any;
//     length: number;
//     callee: Function;
// }


