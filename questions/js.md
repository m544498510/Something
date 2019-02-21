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

3. 获取页面元素的位置和宽高

   只读：

   * clientWidth 和 clientHeight：可视区域宽高，padding + content (如果出现滚动条，会减去滚动条宽高)
   * offsetWidth 和 offsetHeight：border + padding + content （本身设定，与滚动条等其他信息无关）
   * clientTop 和 clientLeft：border的宽度。
   * offsetTop 和 offsetLeft：和offset parent的距离。（offset parent指最近一个具有定位属性的父级元素）
   * scrollWidth 和 scrollHeight：这两个属性指的是当元素内部的内容超出其宽度和高度的时候，元素内部内容的实际宽度和高度，需要注意的是，当元素其中内容没有超过其高度或者宽度的时候，该属性是取不到的。

   可读可写：

   * scrollTop 和 scrollLeft：在可视区域内的位置

    

   Event对象：

   * clientX 和 clientY：鼠标相对浏览器可视区域左上角坐标
   * screenX 和 screenY：鼠标相对屏幕左上角坐标
   * offsetX 和 offsetY：相对事件源的坐标
   * pageX 和 pageY：相对页面的坐标（包括不可见部分）

4. requestAnimationFrame原理？

   Window.requestAnimationFrame(callback)

   callback(timeStamp<DOMHighResTimeStamp>)

   通过requestAnimationFrame注册方法，浏览器每次render前会调用这些注册方法，并且注册只起效一次。

5. 1) 

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

6. js bind 实现

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

7. vue 中on，emit，off，once

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

8. JS 双链表

9. 哪些操作会引起重绘和重排

   重排：

   - 添加或删除可见的DOM元素                                                      
   - 元素位置改变
   - 元素尺寸改变（margin，padding，border，content size）
   - 内容改变
   - 页面渲染器初始化
   - 浏览器尺寸改变

10. 页面性能检测

11. 数组继承

12. 二叉树

13. 树的广度和深度优先遍历

14. 进程和线程

15. 创建线程的步骤

16. TCP为什么3次握手，每个阶段都做什么，和UDP的区别

17. FTP

18. 页面解析顺序

19. call apply bind arguments

20. 实现栈

21. node 异步机制

22.  **js 自定义事件实现** 

23. **ES6模块与CommonJS模块的差异** 

    1. CommonJs 模块输出的是一个值的拷贝，ES6模块输出的是一个值的引用
    2. CommonJS 模块是运行时加载，ES6模块是编译时输出接口
    3. ES6输入的模块变量，只是一个符号链接，所以这个变量是只读的，对它进行重新赋值就会报错

24.  **Node 事件循环，js 事件循环差异** 

