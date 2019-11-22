# 内置类型

1. 7 种：null, undefined, number, string, Object, boolean 和 symbol

2. `Null，Boolean，String，Number` 这些可以有固定长度，因此是基本类型，并且保存到了栈上。 

   `Object` 由于不可预知长度，并且可以 mutate，因此算引用类型，会被分配到了另一块区域，我们称之为堆（heap）。

#  Number

JS 至今没有真正的整数，我们用的number事实上是浮点数。 JavaScript 明确地使用了“双精度”（也就是“64位二进制”）格式。

这部分常考的一个点是精度问题。

```js
0.1 + 0.2 === 0.3; // falseCopy to clipboardErrorCopied
```

- 为什么会这样？

简单地说，0.1 和 0.2 的二进制表示形式是不精确的，所以它们相加时，结果不是精确地 0.3。而是 非常 接近的值：0.30000000000000004，但是如果你的比较失败了，“接近”是无关紧要的。

- 如何解决？

最常见的做法是使用一个很小的“错误舍入”值作为比较的 容差。 这个很小的值经常被称为“机械极小值（machine epsilon）”， 对于 JavaScript 来说这种 number 通常为 Number.EPSILON。

```js
function numbersCloseEnoughToEqual(n1,n2) {
    return Math.abs( n1 - n2 ) < Number.EPSILON;
}

var a = 0.1 + 0.2;
var b = 0.3;

numbersCloseEnoughToEqual( a, b );                    // true
numbersCloseEnoughToEqual( 0.0000001, 0.0000002 );    // false
```



# 执行上下文（Execution Context）

- 函数执行前进行的准备工作（也称执行上下文环境）

  - 准备阶段：

    1. 创建变量，包括arguments，提升函数声明，提升变量声明

    2. 生成作用域链

    3. 确定this指向

  - 准备完就放入调用栈中。

  - 执行阶段：

    1. 变量赋值
    2. 函数引用
    3. 执行代码

  - 调用完毕，弹出调用栈

- 类型：

  - 全局执行上下文
  - 函数执行上下文



#  作用域

+ 作用域就是一套变量访问规则。
+ js采用的词法作用域模型，词法作用域意味着作用域是由书写代码时变量和函数声明的位置决定的。
+ 类型：
  + 全局作用域
  + 函数作用域
  + 块级作用域

#  闭包

+ 内部函数可以访问外部函数的变量。
+ 作用：
  + 能够访问函数定义时所在的词法作用域(阻止其被回收)。
  + 私有化变量

#  原型

<img src="F:/webProject/myProject/blog/questions/resource/proto.jpg">

tip:  1). Object 和 Function 互为实例

 

#### 六、 ES6 的class 和 ES5 的类有什么区别

1. class只能new
2. class为了保证子父类的顺序，没有变量提升
3. 继承实现不一样：
   + class 通过super 关键字，继承父类的this。
   + ES5 是先有子类的this，再把父类应用到这个this上。

#### 七、描述一下this

###### 普通函数

- this 总是指向函数的直接调用者
- 如果有 new 关键字，this 指向 new 出来的实例对象
- 在事件中，this 指向触发这个事件的对象
- IE 下 attachEvent 中的 this 总是指向全局对象 Window
- 箭头函数中，函数体内的`this`对象，就是定义时所在作用域的对象，而不是使用时所在的作用域的对象。
- 直接调用的函数，this一定是window

+ + 



#### 八、模块

##### **AMD-异步模块定义**

+ 依赖前置，在定义模块的时候就要声明其依赖的模块
+ AMD在加载模块完成后就会执行改模块，所有模块都加载执行完后会进入require的回调函数，执行主逻辑，这样的效果就是依赖模块的执行顺序和书写顺序不一定一致，看网络速度，哪个先下载下来，哪个先执行，但是主逻辑一定在所有依赖加载完成后才执行
+ 流程：
  + 根据加载器规则寻找模块，并通过插入script标签异步加载；
  + 在模块代码中通过词法分析找出依赖模块并加载，递归此过程直到依赖树末端；
  + 绑定 `load` 事件，当依赖模块都加载完成时执行回调函数；

#### **CMD** - Common Module Definition通用模块定义

+ 就近依赖，只有在用到某个模块的时候再去require

+ 加载完某个依赖模块后并不执行，只是下载而已，在所有依赖模块加载完成后进入主逻辑，遇到require语句的时候才执行对应的模块，这样模块的执行顺序和书写顺序是完全一致的



#### CommonJS

+ 输出拷贝

+ **模块被循环依赖时，只会输出当前执行完成的导出值**。也就是说，`b.js` 在依赖未执行完成的 `a.js` 时，并不会等待 `a.js` 执行完，而是直接输出当前执行过的 `export` 对象：



#### ESM

+ 流程： **构建**、**实例化**和**运行**

+ 输出引用
+ import read-only 特性
+ 存在 export/import 提升