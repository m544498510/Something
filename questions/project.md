1. **怎么去设计一个组件封装** 

   - 组件化是对实现的分层，是更有效地代码组合方式

   - 组件化是对资源的重组和优化，从而使项目资源管理更合理

   - 组件化有利于单元测试

   - 组件化对重构较友好

     [前端组件化设计思路](https://ijser.cn/2017/06/25/web-component-design-in-front-end/)

2. 性能优化：

   + 空间优化：
     + 不在window上挂数据
     + 不用的数据及时删除
   + 时间优化：
     + 首屏优化：
       +  合并静态资源，减少请求
       + 丑化压缩，减少文件大小
       + 利用同构技术，首屏由服务器渲染出来。
     + 图片懒加载
     + 事件代理
   + 代码优化：
     + 遍历次数
     + 遍历方式
       

3. **有没有去研究webpack的一些原理和机制，怎么实现的** 

   **你说一下webpack的一些plugin，怎么使用webpack对项目进行优化。**

   正好最近在做webpack构建优化和性能优化的事儿，当时吹了大概15~20分钟吧，插件请见webpack插件归纳总结。

   构建优化：

   1. 减少编译体积 ContextReplacementPugin、IgnorePlugin、babel-plugin-import、babel-plugin-transform-runtime

   2. 并行编译 happypack、thread-loader、uglifyjsWebpackPlugin开启并行

   3. 缓存 cache-loader、hard-source-webpack-plugin、uglifyjsWebpackPlugin开启缓存、babel-loader开启缓存

   4. 预编译 dllWebpackPlugin && DllReferencePlugin、auto-dll-webapck-plugin

   **性能优化：**

   ​	1．减少编译体积 Tree-shaking、Scope Hositing

   ​	2．hash缓存 webpack-md5-plugin

   ​	3．拆包 splitChunksPlugin、import()、require.ensure

   

4. webpack的原理, loader 和 plugin 是干什么的? 有自己手写过么 ?

5. Rollup和webpack区别, treeshaking是什么?

 

 

