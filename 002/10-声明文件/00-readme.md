# 声明文件

当使用第三方库时，我们需要引入它得声明文件，才能获得对应得代码补全、接口提示等功能

## 新语法

declare var 声明全局变量    
declare function 声明全局方法  
declare class 声明全局类  
declare enum 声明全局枚举类型  
declare namespace 声明(含有子属性的) 全局对象  
interface 和type 声明全局类型  
export 导出变量  
export namespace 导出(含有子属性的)对象  
export default es6默认导出  
export =    commonjs 导出模块  
export as namespace  UMD库声明全局变量    
declare global 扩展全局变量  
declare module 拓展模块  
///\<reference/> 三斜线命令    

## 声明语句
假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 \<script> 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。

我们通常这样获取一个 id 是 foo 的元素：  
[demo01][demo01] 

但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西1：  
[demo02][demo02]

这时，我们需要使用 declare var 来定义它的类型2：  
[demo03][demo03]

例中，declare var 并没有真的定义一个变量，只是定义了全局变量 jQuery 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。它编译结果是：

```
jQuery('#foo');
```
## 什么时声明文件
通常我们会把声明语句放到一个单独的文件（jQuery.d.ts）中，这就是声明文件  
[demo04-d][demo04-d]  
[demo04][demo04]
一般来说，ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件。所以当我们  将 jQuery.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 jQuery 的类型定义了。



## 书写声明文件
当一个第三方库没有提供声明文件时，我们就需要自己书写声明文件了。前面只介绍了最简单的声明文件内容，而真正书写一个声明文件并不是一件简单的事，以下会详细介绍如何书写声明文件。

在不同的场景下，声明文件的内容和使用方式会有所区别。

库的使用场景主要有以下几种：

* 全局变量：通过 \<script> 标签引入第三方库，注入全局变量
* npm 包：通过 import foo from 'foo' 导入，符合 ES6 模块规范
* UMD 库：既可以通过 \<script> 标签引入，又可以通过 import 导入
* 直接扩展全局变量：通过 <\script> 标签引入后，改变一个全局变量的结构
* 在 npm 包或 UMD 库中扩展全局变量：引用 npm 包或 UMD 库后，改变一个全局变量的结构
* 模块插件：通过 <\script> 或 import 导入后，改变另一个模块的结构

### 全局变量

全局变量是最简单的一种场景，之前举的例子就是通过 \<script> 标签引入 jQuery，注入全局变量 $ 和 jQuery。

使用全局变量的声明文件时，如果是以 npm install @types/xxx --save-dev 安装的，则不需要任何配置。如果是将声明文件直接存放于当前项目中，则建议和其他源码一起放到 src 目录下（或者对应的源码目录下）

```
/path/to/project
├── src
|  ├── index.ts
|  └── jQuery.d.ts
└── tsconfig.json
```

全局变量的声明文件主要有以下几种语法

 *    declare var 声明全局变量
 *    declare function 声明全局方法
 *    declare class 声明全局类
  *   declare enum 声明全局枚举类型
 *    declare namespace 声明（含有子属性的）全局对象
 *    interface 和 type 声明全局类型

#### declare var
在所有的声明语句中，declare var 是最简单的，如之前所学，它能够用来定义一个全局变量的类型。与其类似的，还有 declare let 和 declare const，使用 let 与使用 var 没有什么区别：

需要注意的是，声明语句中只能定义类型，切勿在声明语句中定义具体的实现
[demo05][demo05]

#### declare function

declare function 用来定义全局函数的类型。jQuery 其实就是一个函数，所以也可以用 function 来定义：
```
// src/jQuery.d.ts

declare function jQuery(selector: string): any;
```

```
// src/index.ts

jQuery('#foo');
```

在函数类型的声明语句中，函数重载也是支持的

```
// src/jQuery.d.ts

declare function jQuery(selector: string): any;
declare function jQuery(domReadyCallback: () => any): any;
```

```
// src/index.ts

jQuery('#foo');
jQuery(function() {
    alert('Dom Ready!');
});
```

####  declare class

```
// src/Animal.d.ts

declare class Animal {
    name: string;
    constructor(name: string);
    sayHi(): string;
}
```

```
// src/index.ts

let cat = new Animal('Tom');
```

同样的，declare class 语句也只能用来定义类型，不能用来定义具体的实现，比如定义 sayHi 方法的具体实现则会报错：

[demo06][demo06]


#### declare enum 

使用 declare enum 定义的枚举类型也称作外部枚举（Ambient Enums  
[demo07-d][demo07-d]  
[demo07][demo07]
与其他全局变量的类型声明一致，declare enum 仅用来定义类型，而不是具体的值。

Directions.d.ts 仅仅会用于编译时的检查，声明文件里的内容在编译结果中会被删除。它编译结果是
```
var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```
其中 Directions 是由第三方库定义好的全局变量。

####  declare namespace
namespace 是 ts 早期时为了解决模块化而创造的关键字，中文称为命名空间。

[demo08-d][demo08-d]
[demo08][demo08]

##### 嵌套的命名空间

如果对象拥有深层的层级，则需要用嵌套的 namespace 来声明深层的属性的类型
[demo09-d][demo09-d]
[demo09][demo09]


假如 jQuery 下仅有 fn 这一个属性（没有 ajax 等其他属性或方法），则可以不需要嵌套 namespace

[demo10-d][dem10-d]
[demo10][demo10]







[demo01]: ./01.ts
[demo02]: ./02.ts
[demo03]: ./03.ts
[demo04-d]:./04.d.ts
[demo04]: ./04.ts
[demo05]: ./05.ts
[demo06]: ./06.d.ts

[demo07-d]: ./07.d.ts
[demo07]: ./07.ts
[demo08-d]: ./08.d.ts
[demo08]: .08.ts
[demo09-d]: ./09.d.ts
[demo09]: ./09.ts
[demo10-d]: ./10.d.ts
[demo10]: ./10.ts
