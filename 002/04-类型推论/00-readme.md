# 类型推论

## 概述

1. typescript 会在没有明确指定类型的时候推测出一个类型

```
let myNumber = 'seven'
myNumber = 7
//Type '7' is not assignable to type 'string'

```

等价于

```
let myNumber:string = 'seven'
myNumber = 7

```



2. 如果定义的时候没有赋值,bu管之后有没有赋值 头会被推断成any类型而完全不被类型检查

```
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

```