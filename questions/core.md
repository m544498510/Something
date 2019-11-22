

#  HTTP

1. method： OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE和CONNECT。

   + GET: 

     + 参数可见，且可以被缓存

     + 数据类型只允许ASCII

     + 请求长度受限于浏览器和服务器

       

   + POST：

     + 参数不可见

     + 不可以被缓存

       

   + HEAD：用于获取报头信息，例如检查 cache 是否被修改，是否过期

     

   + PUT 与 PATCH

     + 都是用于更新资源

     + PUT包含更新对象的所有字段

     + PATCH 只包含更新对象需要修改该的字段。

       

   + OPTIONS: 

     + 请求web服务器告知其支持的各种功能。可以询问服务器通常支持哪些方法，或者对某些特殊资源支持哪些方法。

     

   + CONNECT

     - HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。

     

   + TRACE

     - 回显服务器收到的请求，主要用于测试或诊断。

2. http报文头部有哪些字段? 有什么意义 ?
   - Content-Length：表示请求消息正文的长度。 
   - Cookie：设置cookie,这是最重要的请求头信息之一 
   - Host：初始URL中的主机和端口。 
   - User-Agent：浏览器类型，如果Servlet返回的内容与浏览器类型有关则该值非常有用。 
   - Accept：浏览器可接受的MIME类型。
   - Accept-Charset：浏览器可接受的字符集。
   - Accept-Encoding：浏览器能够进行解码的数据编码方式，比如gzip。
   - Accept-Language：浏览器所希望的语言种类，当服务器能够提供一种以上的语言版本时要用到。 

3. 跨域

   同源策略： 相同域名，端口，协议。

   1. jsonp

   2. CORS：Cross-origin Resource Sharing

      1. #### 简单请求处理流程

         - 请求方式为下列之一: GET，POST 和 HEAD。

           且请求头信息不超出以下字段:

           - Accept
           - Accept-Language
           - Content-Language
           - Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

         - 发起AJAX请求） ==> （浏览器发现请求为跨源AJAX简单请求）==>（浏览器自动在头信息里添加`Origin字段（请求协议+域名+端口）`） ==>（服务器根据收到的`Origin字段`来决定是否同意这次请求）==> （浏览器得到回应，根据返回的头信息没有包含`Access-Control-Allow-Origin`字段判断本次CORS请求是否成功）

      2. #### 非简单请求处理流程

         （向自动发出预检请求OPTIONS）==> （服务器回应预检请求）==> （服务器同意则会返回一个带Access-Control-Allow-Origin头信息的HTTP回应） ==> （浏览器判断预检请求是否被允许） ==>（如果预检请求被通过，以后每次的非简单请求，就都和简单请求一样） 





# Event Loop

1. ### event loop

   + 任务队列 放准备执行的任务。
   + 正在执行的任务放在调用栈（call stack）中。
+ 执行完后，再去取任务队列中第一个队列。
  
2. ### 浏览器环境：

   - **宏任务(macroTask)**：script 中代码、setTimeout、setInterval、I/O、UI render；
   - **微任务(microTask)**： Promise、Object.observe、MutationObserver。

   执行完一个体宏任务后，依次执行所有微任务，再执行下一个宏任务

3. ### node环境：

   分类：

   - **microTask**：微任务；
   - **nextTick**：`process.nextTick`；
   - **timers**：执行满足条件的 setTimeout 、setInterval 回调；
   - **I/O callbacks**：是否有已完成的 I/O 操作的回调函数，来自上一轮的 poll 残留；
   - **poll**：等待还没完成的 I/O 事件，会因 **timers** 和超时时间等结束等待；
   - **check**：执行 setImmediate 的回调；
   - **close callbacks**：关闭所有的 closing handles ，一些 onclose 事件；

   循环：

   - 清空当前循环内的 **Timers Queue**，清空 **NextTick Queue**，清空 **Microtask Queue**；
   - 清空当前循环内的 **I/O Queue**，清空 **NextTick Queue**，清空 **Microtask Queue**；
   - 清空当前循环内的 **Check Queue**，清空 **NextTick Queue**，清空 **Microtask Queue**；
   - 清空当前循环内的 **Close Queue**，清空 **NextTick Queue**，清空 **Microtask Queue**；
   - 进入下轮循环。

4. 进程和线程

   - 进程是计算机最小计算控制单元，拥有独立的虚拟内存地址空间。（进程管理计算机最小的计算资源和存储资源）
   - 一个进程拥有多个线程。这多个线程共享进程的资源。

   

   - Node的单线程（事件循环event-loop）
     - 传统request由一个线程处理，即使IO等待，这个线程也没被释放。
     - node的request只由主线程处理，有IO时，直接发起IO处理请求，由底层线程（libuv）处理，主线程再去事件任务队列中处理其他任务。
     
   - 事件任务类型
     - 宏任务（macro-task）：宿主环境提供的，例如整体代码script ，setTimeout, setInterval, 事件回调
     - 微任务（micro-task）：语言标准提供的，例如promise，process.nextTick， MutationObserver 
     - 执行一个宏任务后，执行所有的微任务，再执行下一个宏任务。

   

5. 创建线程的步骤 

   webworker 不具备线程通信，锁等特性，主要用于将数据处理和页面渲染拆分开。

6. TCP为什么3次握手，每个阶段都做什么，和UDP的区别

   + TCP三次握手
     第一次：客户端发送SYN给server，客户端进入SYN_SENT
     第二次：server发送ACK和FIN给客户端，server进入SYN_RCVD
     第三次:客户端发送ACK给server，双方进入ESTABLISHED

   + TCP四次挥手

        第一次：客户端发送FIN包给server,此时客户端进入FIN_WAIT_1状态
        第二次：server发送ACK给客户端，server进入CLOSE_WAIT
        第三次：server发送FIN给客户端，server进入LAST_ACK
        第四次：客户端发送ACK给server,server进入CLOSED状态

   + TCP,UDP区别

        tcp是面向连接的，udp是无连接的
        tcp提供可靠服务，udp尽最大努力交付，但不保证可靠
        udp具有较好的实时性，工作效率比tcp高。
        tcp只能点对点传输，udp可以一对一，一对多，多对多
        

   

    

7. **大型应用程序是否应使用静态类型？**

   如何比较 TypeScript/Flow 与 Elm/ReasonML/PureScript 等 JS 转换语言？这些方法的优缺点是什么？

   选择特定类型系统的主要标准应该是什么？

   什么是类型推断（type inference）？

   静态类型语言和强类型语言有什么区别？在这方面 JavaScript 的本质是什么？

   有你知道的弱类型但静态类型的语言吗？有你知道的动态类型但强类型的语言吗？举例一二。

   提示：Structural 与 Nominal 类型系统，类型稳健性，工具/生态系统支持，正确性超过方便。

   

   + 静态类型：

     类型检查在编译阶段

   + 动态类型：

     类型检查在运行阶段

   

   + 强类型是指不允许隐式变量类型转换

     弱类型则允许隐式类型转换。

   

8. **什么是sectioning算法？**

   提示：它也被称为 HTML5 大纲算法。特别是在构建具有语义结构的网站时非常重要。

   

10. **有没有去研究webpack的一些原理和机制，怎么实现的**

   10. 解析webpack配置参数，合并从shell传入和webpack.config.js文件里配置的参数，生产最后的配置结果。

   11. 注册所有配置的插件，好让插件监听webpack构建生命周期的事件节点，以做出对应的反应。

   12. 从配置的entry入口文件开始解析文件构建AST语法树，找出每个文件所依赖的文件，递归下去。

   13. 在解析文件递归的过程中根据文件类型和loader配置找出合适的loader用来对文件进行转换。

   14. 递归完后得到每个文件的最终结果，根据entry配置生成代码块chunk。

   6. 输出所有chunk到文件系统。

11. 依赖注入：

    + 实现控制反转的一种设计模式
    + 将 被依赖的对象传给依赖者，而不需要依赖者自己去创建或查找所需对象是DI的基本原则 
    + 对抽象进行编程，不要对实现进行编程，这样就降低了客户与实现模块间的耦合 
