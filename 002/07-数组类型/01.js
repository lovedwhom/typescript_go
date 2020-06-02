var arr1 = [1, 2, 3, 4, 5];
// 数组中不允许出现其他的类型
var arr2 = [1, '2', 3, 4, 5];
// type 'string' is not assignable to type 'number'.
// 数值中的一些方法也会根据数组在定义时约定的类型进行限制
var arr3 = [1, 2, 3, 4, 5];
arr3.push('8');
