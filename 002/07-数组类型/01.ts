let arr1:number[] = [1,2,3,4,5]

// 数组中不允许出现其他的类型

let arr2:number[] = [1,'2',3,4,5]
// type 'string' is not assignable to type 'number'.

// 数值中的一些方法也会根据数组在定义时约定的类型进行限制

let arr3:number[] = [1,2,3,4,5];

arr3.push('8');

// Argument of type '"8"' is not assignable to parameter of type 'number'.