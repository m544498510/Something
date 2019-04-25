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
+ 缺点：
  + 无法取消promise
  + 内部错误不会反应到外部。外部无法catch错误。
  + 处于pending时，无法得知在哪个阶段。

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

+ 原生具备Iterator：

    + Array
    + Map
    + Set
    + String
    + TypedArray
    + 函数的 arguments 对象
    + NodeList 对象
    + Generator 函数

+ 调用Iterator的场合

  + 解构赋值
  + 扩展运算符
  + yield *
  + 遍历api

+ Iterator对象的 return()， throw()

  + return：当for... of 提前退出 （ 出错 或是 break ）
  + throw : 配合 generator

+ 异步Iterator

  ```js
    const asyncIterator = createAsyncNumberIterator();
    const p = asyncIterator.next(); // Promise
    await p;// Object {value: 1, done: false}
    await asyncIterator.next(); // Object {value: 2, done: false}
    await asyncIterator.next(); // Object {value: 3, done: false}
    await asyncIterator.next(); // Object {value: undefined, done: true}
  
  ```

+ 异步遍历器

  ```js
  async function test() {
      for await (const p of promises) {
          console.log(p);
      }
  }
  test(); //1 ,2 3
  ```

  

## 12. Generator

```js
function* helloWorldGenerator() {
  yield 'hello';
  return 'ending';
}

var hw = helloWorldGenerator();
hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
```

+ 执行顺序：

  + 调用generator后，不执行，只返回一个Iterator对象。
  + 调用next()，执行到yield处，将yield右边边的表达式求值，并返回，将next里的参数赋值给yield左边。
  + 重复上一步，一直到函数结尾，如果有return，返回return后面的值；如果没有，返回undefined。

+ throw()

  ```js
  var g = function* () {
    try {
      yield;
    } catch (e) {
      console.log('内部捕获', e);
    }
  };
  
  var i = g();
  i.next();
  
  try {
    i.throw('a');
    i.throw('b');
  } catch (e) {
    console.log('外部捕获', e);
  }
  // 内部捕获 a
  // 外部捕获 b
  ```

+ return()

  ```js
  function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  var g = gen();
  
  g.next()        // { value: 1, done: false }
  g.return('foo') // { value: "foo", done: true }
  g.next()        // { value: undefined, done: true }
  ```

  + 参数就是返回值。
  + 如果 Generator 函数内部有`try...finally`代码块，且正在执行`try`代码块，那么`return`方法会推迟到`finally`代码块执行完再执行。 

+ yield* 表达式

  + 用来在一个 Generator 函数里面执行另一个 Generator 函数。 
  + 等于展开子generator函数
  + 后面不仅可以跟Generator函数，可以跟任何Iterable的对象。

+ context

  + 一旦遇到yield命令，context暂时退出调用栈，context所有的变量和对象冻结保存，等下一次next()，再加入调用栈。

+ 用途：

  + 状态机（状态无法被非法篡改，更简洁，更函数式）
  + 异步处理
  + Iterator生成器

## 13. Async

+ 特点

  + 自带内置执行器的Generator函数
  + 更好的语义
  + 更广适用性：可以是 Promise 对象和原始类型的值 （数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象） 
  + 返回值是Promise

+ 注意事项：

  + 一旦有一个async，全部方法都得async化，或者用promise处理。

  + 最外层一定得用promise.catch 处理exception。

  + await命令放在 try ... catch 里面。

  + 如果多个await 没有继发关系，最好同时触发

    ```js
    // 写法一
    let [foo, bar] = await Promise.all([getFoo(), getBar()]);
    
    // 写法二
    let fooPromise = getFoo();
    let barPromise = getBar();
    let foo = await fooPromise;
    let bar = await barPromise;
    ```

## 14. Class

+ 注意点：

  + 不存在提升。

    ```js
    new Foo(); // ReferenceError
    class Foo {}
    ```

  + 静态方法内this 自带类本身，而不是实例。

+ 私有方法或属性：

  + 使用Symbol命名

  + 方法移到类外部

    ```js
    class Widget {
      foo (baz) {
        bar.call(this, baz);
      }
    }
    
    function bar(baz) {
      return this.snaf = baz;
    }
    ```

    

