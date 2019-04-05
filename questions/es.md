##	1. let and const

+ 不存在变量提升（变量在声明前就存在，值为undefined）

+ 暂时性死区

  ```js
  var tmp = 123;
  
  if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
  }
  ```

+ 块级作用域内的函数声明类似var的变量提升

+ const 只声明不赋值也会报错

  

##  2. 解构赋值 

+ 等号两边模式匹配
+ 只要具有Iterator接口，都可以用array解构
+ 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象 

## 3. 数值

+ 0o 表示八进制

## 4. 函数

+ 参数默认值 采用惰性求值

+ 参数默认值 只在传入undefined时生效

+ rest 参数 (替代 arguments )

  ```js
  function add(...values) {
    let sum = 0;
  
    for (var val of values) {
      sum += val;
    }
  
    return sum;
  }
  
  add(2, 5, 3) // 10
  ```

+ 箭头函数

  + 自带bind
  + 不可以作为构造函数
  + 没有arguments
  + 不可以使用yield

+ 双冒号运算符

  ```	js
  foo::bar
  //等同于
  bar.bind(foo)
  
  foo::bar(...arguments);
  // 等同于
  bar.apply(foo, arguments);
  ```

+ 尾调用优化

  ```js
  function f(x){
    return g(x);
  }
  ```

  在执行g时，释放f的调用帧（call frame，用于保存调用位置和内部变量信息）

  

## 5. Object

+ 属性的Descriptor

  ```js
  let obj = { foo: 123 };
  Object.getOwnPropertyDescriptor(obj, 'foo')
  //  {
  //    value: 123,
  //    writable: true,
  //    enumerable: true,
  //    configurable: true
  //  }
  ```

  + 可枚举性（enumerable）：控制以下遍历
    + for...in
    + Object.keys()
    + JSON.stringify()
    + Object.assign()

  + 属性遍历

    + for ... in：遍历 自身 和 继承 的 可枚举属性（不含Symbol）
    + Object.keys()：自身 的 可枚举 属性 （不含 Symbol）的键名
    + Object.getOwnPropertyNames()：自身的属性（不含 Symbol，但包括不可枚举）的键名
    + Object.getOwnPropertySymbols()：自身所有的Symbol 属性 键名
    + Reflect.ownKeys()：所有自身的键名

  + 遍历顺序：

    1. 先自身，再继承
    2. 数值键，数值升序
    3. 字符串键，加入时间升序
    4. Symbol，加入时间升序

  + super （仅用于对象简写方法里）

    ```	js
    const proto = {
      foo: 'hello'
    };
    
    const obj = {
      foo: 'world',
      find() {
        return super.foo;
      }
    };
    
    Object.setPrototypeOf(obj, proto);
    obj.find() // "hello"
    ```

  + 扩展运算符

    ```js
    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
    
    let z = { a: 3, b: 4 };
    let n = { ...z };
    ```

    

## 6. Symbol

+ 用途：
  + 常量的值
  + 在对象里达到私有化效果

+ Symbol.for  返回同一个指定key的symbol （带登记效果）

  Symbol.keyFor  返回一个已登记的symbol的key



## 7. Set 和 Map

+ Set
  + Set.prototype.size 
  + add(value) 
  + delete(value)
  + has(value)
  + clear()
+ Map
  + size
  + set(key, value)
  + get(key)
  + has(key)
  + delete(key)
  + clear()

## 8. Proxy

+ 支持操作：
  + **get(target, propKey, receiver)** 
  + **set(target, propKey, value, receiver)** 
  + **has(target, propKey)**  ： 拦截HasProperty 的操作，常见在 in 运算符
  + **deleteProperty(target, propKey)** 
  + **ownKeys(target)** ： 拦截对key的遍历
  + **construct(target, args)** ：拦截 new
  + 其他省略

## 9. Reflect

承载某些对像操作方法，和Proxy一一对应，可以理解为Proxy的逆向操作。

## 10. Promise

+ 状态：pending，fulfilled，rejected，状态一旦改变，就不会再变。

## 11. Iterator

+ 一个数据结构具有 Symbol.iterator 属性，就认为可遍历（ for ... of ）。

  ```js
  const obj = {
    [Symbol.iterator] : function () {
      return {
        next: function () {
          return {
            value: 1,
            done: true
          };
        }
      };
    }
  };
  ```

+  原生具备Iterator：

  + Array
  + Map
  + Set
  + String
  + TypedArray
  + 函数的 arguments 对象
  + NodeList 对象

+ 调用Iterator的场合

  + 解构赋值
  + 扩展运算符
  + yield *
  + 遍历api

+ Iterator对象的 return()， throw()

  + 