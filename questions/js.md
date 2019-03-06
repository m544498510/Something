1. js除了原型继承还有哪些其他的继承方式 

   a. 原型继承

   b. Call 继承（使用call直接修改this）

   c. 遍历父类，手动添加方法和属性

2. 数组去重的方法？ 

   a. indexOf  (对象和NAN不去重)

   b.filter （对象不去重 NaN 会被忽略掉）

   ```js
   var array = [1, 2, 1, 1, '1'];
   
   function unique(array) {
       var res = array.filter(function(item, index, array){
           return array.indexOf(item) === index;
       })
       return res;
   }
   
   console.log(unique(array));
   ```

   c. Set (对象和NAN不去重)

   ```js
   const arr = [1,2,1,2];
   const tmpSet = new Set(arr);
   const result = [...tmpSet]
   ```

   d. Object

   ```js
   var array = [{value: 1}, {value: 1}, {value: 2}];
   
   function unique(array) {
       var obj = {};
       return array.filter(function(item, index, array){
           console.log(typeof item + JSON.stringify(item))
           return obj.hasOwnProperty(typeof item + JSON.stringify(item)) 
               ? false 
           	: (obj[typeof item + JSON.stringify(item)] = true)
       })
   }
   
   console.log(unique(array)); // [{value: 1}, {value: 2}]
   
   ```

3. requestAnimationFrame原理？

   Window.requestAnimationFrame(callback)

   callback(timeStamp<DOMHighResTimeStamp>)

   通过requestAnimationFrame注册方法，浏览器每次render前会调用这些注册方法，并且注册只起效一次。

4. 1) 

   ```js
   setTimeout(() => console.log('a'), 0);
   var p = new Promise((resolve) => {
     console.log('b');
     resolve();
   });
   p.then(() => console.log('c'));
   p.then(() => console.log('d'));
   console.log('e');
   // 结果：b e c d a
   // 任务队列优先级：promise.Trick()>promise的回调>setTimeout>setImmediate
   ```

   2)

   ```js
   async function async1() {
       console.log("a");
       await  async2(); //执行这一句后，await会让出当前线程，将后面的代码加到任务队列中，然后继续执行函数后面的同步代码
       console.log("b");
   
   }
   async function async2() {
      console.log( 'c');
   }
   console.log("d");
   setTimeout(function () {
       console.log("e");
   },0);
   async1();
   new Promise(function (resolve) {
       console.log("f");
       resolve();
   }).then(function () {
       console.log("g");
   });
   console.log('h');
   // 在页面的script标签中运行结果：d a c f h b g e
   // 直接在控制台中运行结果：      d a c f h g b e
   
   ```

5. js bind 实现

   ```js
   Function.prototype.bind2 = function (context) {
   
       if (typeof this !== "function") {
         throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
       }
   
       var self = this;
       var args = Array.prototype.slice.call(arguments, 1);
   
       var fNOP = function () {};
   
       var fBound = function () {
           var bindArgs = Array.prototype.slice.call(arguments);
           return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
       }
   
       fNOP.prototype = this.prototype;
       fBound.prototype = new fNOP();
       return fBound;
   }
   
   ```

6. vue 中on，emit，off，once

   ```JS
   // 参照 vue 源码实现
   var EventEmiter = function (){
     this._events = {};
   };
   EventEmiter.prototype.on = function (event, cb){
     if (Array.isArray(event)){
       for (let i = 0, l = event.length; i < l; i++){
         this.on(event[i], cb);
       }
     } else {
       (this._events[event] || (this._events[event] = [])).push(cb);
     }
     return this;
   };
   EventEmiter.prototype.once = function (event, cb){
     function on () {
       this.off(event, cb);
       cb.apply(this, arguments);
     }
     on.fn = cb;
     this.on(event, on);
     return this;
   };
   EventEmiter.prototype.off = function (event, cb){
     if (!arguments.length){
       this._events = Object.create(null);
       return this;
     }
     if (Array.isArray(event)){
       for (let i = 0, l = event.length; i < l; i++){
         this.off(event[i],cb);
       }
       return this;
     }
     if (!cb){
       this._events[event] = null;
       return this;
     }
     if (cb){
       let cbs = this._events[event];
       let i = cbs.length;
       while(i--){
         if (cb === cbs[i] || cb === cbs[i].fn){
           cbs.splice(i, 1);
           break;
         }
       }
       return this;
     }
   };
   EventEmiter.prototype.emit = function (event){
     let cbs = this._events[event];
     let args = Array.prototype.slice.call(arguments, 1);
     if (cbs){
       for (let i = 0, l = cbs.length; i < l; i++){
         cbs[i].apply(this,args);
       }
     }
   };
   ```

7. **ES6模块与CommonJS模块的差异** 

   1. CommonJs 模块输出的是一个值的拷贝，ES6模块输出的是一个值的引用
   2. CommonJS 模块是运行时加载，ES6模块是编译时输出接口
   3. ES6输入的模块变量，只是一个符号链接，所以这个变量是只读的，对它进行重新赋值就会报错

8. js 有哪些数据类型 如何判断? null 和 undefined区别 应用场景?

9. new String('a') 和 'a' 是一样的么?

10. ES6 generator函数简述

11. js浮点数运算不精确 如何解决?

12. 正则表达式如何匹配一段url ?在正则表达式中有哪几种作用?

13. class 继承 和 原型链继承 的区别 

14. **Typed Arrays**  

15. **讨论与 Promise 相关的问题。**

    提示：及早求值（eager evaluation），尴尬的取消机制，用 then() 方法伪装 map() 和 flatMap() 等。

 

 

 