1. js除了原型继承还有哪些其他的继承方式 

2. 数组去重的方法？ 

3. 简述事件模型？

4. 获取页面元素的位置和宽高

   - element.clientWidth = content + padding

     element.clientHeight = content + padding

     element.getBoundingClientRect() 返回值情况

     left:包围盒左边 border 以外的边缘距页面左边的距离

     right:包围盒右边 border 以外的边缘距页面左边的距离

     top:包围盒上边 border 以外的边缘距页面顶部的距离

     bottom:包围盒下边 border 以外的便于距页面顶部的距离

     width: content + padding + border

     height: content + padding + border

     注意，设置外边距时外边距合并的情况

5. requestAnimationFrame原理？

6. 1) 

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

7. js bind 实现

8. vue 中on，emit，off，once

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

9. JS 双链表

10. 哪些操作会引起重绘和重排

11. 页面性能检测

