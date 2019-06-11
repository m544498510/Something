##### 什么是graphQL

​	一种api设计标准，有一系列实现库。

##### 和 RESTful区别

+ RESTful 单一入口针对单一资源。

  graphql 一般只有一个入口。

+ RESTful 操作的资源是离散的，数据间的关联性也不明显。

  graphql 数据更有整体性和解构性。

##### 优点

+ 数据的关联性和结构化更好

+ 更易于前端缓存数据

+ Versionless API

  相比于 RESTful 为了兼容新老客户端所添加的版本号，在 GraphQL 中，如果你需要服务端提供与以前不一样的行为，只需要修改 root Query 的定义，在上面额外添加你想要的 Node 即可。

+ 更健壮的接口

  不用再因为在缺乏沟通的情况下修改接口，而为系统埋下不稳定的定时炸弹。一切面向前端的接口都有强类型的 Schema 做保证，且完整类型定义因 [introspection](https://link.zhihu.com/?target=http%3A//graphql.org/learn/introspection/) 完全对前端可见，一旦前端发送的 query 与 Schema 不符，能快速感知到产生了错误。

##### 缺点

+ 性能问题