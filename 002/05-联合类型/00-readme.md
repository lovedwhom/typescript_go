# 联合类型

## 概述

联合类型表示取值可以为多种类型中的一种

```
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

## 访问联合类型的属性和方法

当typescript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性和方法

[demo02][demo02]

联合类型的变量在被复制的时候，会根据类型推论的规则推断出一个类型  
[demo03][demo03]

[demo02]: ./02.ts

[demo03]: ./03.ts