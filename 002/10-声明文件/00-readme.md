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

### 嵌套的命名空间

如果对象拥有深层的层级，则需要用嵌套的 namespace 来声明深层的属性的类型  
[demo09-d][demo09-d]  
[demo09][demo09]  


假如 jQuery 下仅有 fn 这一个属性（没有 ajax 等其他属性或方法），则可以不需要嵌套 namespace

[demo10-d][demo10-d]  
[demo10][demo10]  

#### interface和type
除了全局变量之外，可能有一些类型我们也希望暴露出来。在类型声明文件中，我们可以直接使用interface或type来声明一个全局的接口或类型  
[demo11][demo11]  
这样的话，在其他文件中也可以使用这个接口或类型了：  
[demo11-d][demo11-d]  

#### 防止命名冲突
暴露在最外层的interface或type或作为全局类型作用于整个项目中，我们应该尽可能少的减少全局变量或全局类型的变量。故最好将他们放到namespace下  

[demo12-d][demo12-d]  

注意这个时候 使用interface 要加上jquery前缀  
[demo12][demo12]  

#### 声明合并

假如 jQuery 既是一个函数，可以直接被调用 jQuery('#foo')，又是一个对象，拥有子属性 jQuery.ajax()（事实确实如此），那么我们可以组合多个声明语句，它们会不冲突的合并起来  
[demo13-d][demo13-d]  
[demno13][demo13]  

### npm包
一般我们通过 import foo from 'foo' 导入一个 npm 包，这是符合 ES6 模块规范的。

在我们尝试给一个 npm 包创建声明文件之前，需要先看看它的声明文件是否已经存在。一般来说，npm 包的声明文件可能存在于两个地方：

1. 与该 npm 包绑定在一起。判断依据是 package.json 中有 types 字段，或者有一个 index.d.ts 声明文件。这种模式不需要额外安装其他包，是最为推荐的，所以以后我们自己创建 npm 包的时候，最好也将声明文件与 npm 包绑定在一起。
2. 发布到 @types 里。我们只需要尝试安装一下对应的 @types 包就知道是否存在该声明文件，安装命令是 npm install @types/foo --save-dev。这种模式一般是由于 npm 包的维护者没有提供声明文件，所以只能由其他人将声明文件发布到 @types 里了。  

假如以上两种方式都没有找到对应的声明文件，那么我们就需要自己为它写声明文件了。由于是通过 import 语句导入的模块，所以声明文件存放的位置也有所约束，一般有两种方案：

1. 创建一个 node_modules/@types/foo/index.d.ts 文件，存放 foo 模块的声明文件。这种方式不需要额外的配置，但是 node_modules 目录不稳定，代码也没有被保存到仓库中，无法回溯版本，有不小心被删除的风险，故不太建议用这种方案，一般只用作临时测试。
2. 创建一个 types 目录，专门用来管理自己写的声明文件，将 foo 的声明文件放到 types/foo/index.d.ts 中。这种方式需要配置下 tsconfig.json 中的 paths 和 baseUrl 字段。
目录结构

```
/path/to/project
├── src
|  └── index.ts
├── types
|  └── foo
|     └── index.d.ts
└── tsconfig.json
```
tsconfig.json 内容

```
{
    "compilerOptions": {
        "module": "commonjs",
        "baseUrl": "./",
        "paths": {
            "*": ["types/*"]
        }
    }
}

```
如此配置之后，通过 import 导入 foo 的时候，也会去 types 目录下寻找对应的模块的声明文件了。

npm 包的声明文件主要有以下几种语法：

* export 导出变量
* export namespace 导出（含有子属性的）对象
* export default ES6 默认导出
* export = commonjs 导出模块

#### export
npm 包的声明文件与全局变量的声明文件有很大区别。在 npm 包的声明文件中，使用 declare 不再会声明一个全局变量，而只会在当前文件中声明一个局部变量。只有在声明文件中使用 export 导出，然后在使用方 import 导入后，才会应用到这些类型声明。



#### 混用 declare 和 export
注意，与全局变量的声明文件类似，interface 前是不需要 declare 的。


export namespace
与 declare namespace 类似，export namespace 用来导出一个拥有子属性的对象17

#### export default

在 ES6 模块系统中，使用 export default 可以导出一个默认值，使用方可以用 import foo from 'foo' 而不是 import { foo } from 'foo' 来导入这个默认值。


注意，只有 function、class 和 interface 可以直接默认导出，其他的变量需要先定义出来，再默认导出

#### export =
```
// 整体导出
module.exports = foo;
// 单个导出
exports.bar = bar;
```

在 ts 中，针对这种模块导出，有多种方式可以导入，第一种方式是 const ... = require：

```
// 整体导入
const foo = require('foo');
// 单个导入
const bar = require('foo').bar;
```
第二种方式是 import ... from，注意针对整体导出，需要使用 import * as 来导入：
```
// 整体导入
import * as foo from 'foo';
// 单个导入
import { bar } from 'foo';
```












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
[demo11]: ./11.ts
[demo11-d]: ./11.d.ts
[demo12-d]: ./12.d.ts
[demo12]: ./12.ts
[demo13]: ./13.d.ts
[demo13]: ./13.ts