1. js prototype

   <img src="./resource/proto.jpg">

   tip:  1). Object 和 Function 互为实例

2.  进程和线程

   - 进程是计算机最小计算控制单元，拥有独立的虚拟内存地址空间。（进程管理计算机最小的计算资源和存储资源）
   - 一个进程拥有多个线程。这多个线程共享进程的资源。

   

   - Node的单线程
     - 传统request由一个线程处理，即使IO等待，这个线程也没被释放。
     - node的request只由主线程处理，有IO时，直接发起IO处理请求，由底层线程（libuv）处理，主线程再去事件栈中处理其他任务。

   

3. 创建线程的步骤 

   webworker 不具备线程通信，锁等特性，主要用于将数据处理和页面渲染拆分开。

4. TCP为什么3次握手，每个阶段都做什么，和UDP的区别

   TCP三次握手
   第一次：客户端发送SYN给server，客户端进入SYN_SENT
   第二次：server发送ACK和FIN给客户端，server进入SYN_RCVD
   第三次:客户端发送ACK给server，双方进入ESTABLISHED

      TCP四次挥手

      第一次：客户端发送FIN包给server,此时客户端进入FIN_WAIT_1状态
      第二次：server发送ACK给客户端，server进入CLOSE_WAIT
      第三次：server发送FIN给客户端，server进入LAST_ACK
      第四次：客户端发送ACK给server,server进入CLOSED状态

      TCP,UDP区别

      tcp是面向连接的，udp是无连接的
      tcp提供可靠服务，udp尽最大努力交付，但不保证可靠
      udp具有较好的实时性，工作效率比tcp高。
      tcp只能点对点传输，udp可以一对一，一对多，多对多