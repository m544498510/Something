1. react 虚拟DOM 是什么? 如何实现? 说一下diff算法 ?

2. react和vue的比较 ? 

3. DIFF算法为什么是O(n)复杂度而不是O(n^3)

4. react 生命周期， v16 和 之前的区别，新加的方法有什么用，有用过吗？

5. 为什么要删掉 componentWillReceiveProps，之前用的很顺手啊？

6. react HOC 原理，作用，什么情况下会选择用 HOC

7. react-router 中 withRouter 实现原理

8. Redux-saga 对比 redux-thunk 和 redux-promise 的优势，为什么要引一个这么大的包

9. 写 React/Vue 项目时为什么要在组件中写 key，其作用是什么？

   在执行diff算法时，更快的找到对应的节点

10. **angular 双向数据绑定与vue数据的双向数据绑定**

    1. 二者都是 MVVM 模式开发的典型代表
    2. angular 是通过脏检测实现，angular 会将 UI 事件，请求事件，settimeout 这类延迟，的对象放入到事件监测的脏队列，当数据变化的时候，触发 $diget 方法进行数据的更新，视图的渲染
    3. vue 通过数据属性的数据劫持和发布订阅的模式实现，大致可以理解成由3个模块组成，observer 完成对数据的劫持，compile 完成对模板片段的渲染，watcher 作为桥梁连接二者，订阅数据变化及更新视图

11. React 可以用两种方法声明 Component，它们有什么区别？什么情况你会选择哪一种？

    扩展问题：如果是 functional Component，为什么我们还要在第一行引入 import React from 'react'? 在这个文件中，应该根本就没有用到 React 的库。

     

 

 

 

 

 

 

