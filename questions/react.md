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

12. 调用 setState 之后发生了什么？
    在代码中调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程（Reconciliation）。经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个UI界面。在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。

    

13. React 中 refs 的作用是什么？ 

14. 在生命周期中的哪一步你应该发起 AJAX 请求？
    我们应当将AJAX 请求放到 componentDidMount 函数中执行，主要原因有下：

    - React 下一代调和算法 Fiber 会通过开始或停止渲染的方式优化应用性能，其会影响到 componentWillMount 的触发次数。对于 componentWillMount 这个生命周期函数的调用次数会变得不确定，React 可能会多次频繁调用 componentWillMount。如果我们将 AJAX 请求放到 componentWillMount 函数中，那么显而易见其会被触发多次，自然也就不是好的选择。
    - 如果我们将 AJAX 请求放置在生命周期的其他函数中，我们并不能保证请求仅在组件挂载完毕后才会要求响应。如果我们的数据请求在组件挂载之前就完成，并且调用了setState函数将数据添加到组件状态中，对于未挂载的组件则会报错。而在 componentDidMount 函数中进行 AJAX 请求则能有效避免这个问题。

15. 传入 setState 函数的第二个参数的作用是什么？

    该函数会在setState函数调用完成并且组件开始重渲染的时候被调用，我们可以用该函数来监听渲染是否完成：

    ```js
    this.setState(
      { username: 'tylermcginnis33' },
      () => console.log('setState has finished and the component has re-rendered.')
    )
    ```

 

16. state和props触发更新的生命周期分别有什么区别
17. emit事件怎么发，需要引入什么
18. 为什么虚拟dom比真实dom性能好
19. 介绍高阶组件，和普通组件有什么区别；

 

 

 

 

 

