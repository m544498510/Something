# react



1. ### context:

   + 原有问题：
     	1. 破坏react组件的分型架构（从理想的 React 应用的根组件树中抽取的任意一部分都仍是一个可以直接运行的子组件树）
      2. 无法正确触发rerender，一但中间某个组件的`shouldComponentUpdate` 返回false，会导致其子组件不更新。

   + 新API

     ```jsx
     const AppContext = React.createContext<IObj>({v: 0});
     
     export default class ContextText extends React.PureComponent{
       render(){
         return (
           <AppContext.Provider value={{v: 1}}>
             <div>
               <AppContext.Consumer>
                 {
                   context  => (
                     <div>{context.v}</div>
                   )
                 }
               </AppContext.Consumer>
     
             </div>
           </AppContext.Provider>
         )
       }
     }
     ```

   + 使用场景：
     + 多主题，多语言的实现。
     + 作为底层接口给业务封装用。

2. ###  function component hook

   + #### 实现原理

     + 每调用一次hook api，都会产生一个Hook实例的，Hooks是链表结构（useContext除外），每个组件有一套hook链表

     + 不要在循环，条件或嵌套函数中调用 `Hook`， 确保总是在你的 `React` 函数的最顶层调用他们。

       这是由于所有Hook存储在链表里，顺序不能变化。

   + ##### useState （类似class component 的state）

     ```jsx
     function App () {
         //前一个是state，后一个参数是firber的dispatch方法
         const [ count, setCount ] = useState(0)
         return (
           <div>
             点击次数: { count } 
             <button onClick={() => { setCount(count + 1)}}>点我</button>
           </div>
           )
       }
     ```

     + 参数是初始值，可以传入function，并且只会执行一次（只再mountDispatcher里执行，updateDispatcher里该参数直接没用）
     + dispatch相同的值，不会触发刷新
     + dispatch参数接受function：```lastState => nextState   ```

   + #### useEffect (处理副作用)

     ```jsx
     function App () {
       useEffect(() => {
         document.title = count
       })
       return <div>123</div>
     }
     ```

     + 根据第二个参数，useEffect对应不同的生命周期

       + 无第二个参数，等同于componentDidMount 或 componentDidUpdate;

       + 传入[]，等同于componentDidMount，返回的方法等同于 componentWillUnmount

         ```jsx
             useEffect(() => {
               window.addEventListener('resize', onChange, false)
         
               return () => {
                 window.removeEventListener('resize', onChange, false)
               }
             }, [])
         
         ```

       + 传入数组，只有数组里的变量发生变动时，useEffect才会执行。等同于有条件的componentDidMount 或 componentDidUpdate；

   +  #### useContext

     ```jsx
     const Context = createContext(0)
     
     function Item3 () {
       const count = useContext(Context);
       return (
         <div>{ count }</div>
       )
     }
     ```

     

   +  #### useMemo

     ```jsx
     function App () {
       const [ count, setCount ] = useState(0)
       const add = useMemo(() => {
         return count + 1
       }, [count])
       return (
         <div>
           点击次数: { count }
           <br/>
           次数加一: { add }
           <button onClick={() => { setCount(count + 1)}}>点我</button>
         </div>
         )
     }
     ```

     + 在render时执行，所以不建议有副作用的逻辑。
     + 支持第二参数，类似useEffect。
     + 有点类似于vue的computed，作为衍生状态的性能优化。

   +  #### useCallback

     ```js
     const onClick = useCallback(() => {
      console.log('button click')
     }, [])
     ```

     + 用于缓存方法声明，防止re-render时反复创建，并导致子组件re-render。
     + 支持第二参数，类似useEffect

   + #### useRef

     + 获取子组件的实例(只有子组件是class component时可用)

       ```jsx
       // 使用 ref 子组件必须是类组件
       class Children extends PureComponent {
         render () {
           return <div />
         }
       }
       
       function App () {
         const childrenRef = useRef(null)
         // const 
         const onClick = useMemo(() => {
           return () => {
             console.log('button click')
             console.log(childrenRef.current)
             setCount((count) => count + 1)
           }
         }, [])
         return (
           <div>
             点击次数: { count }
             <Children ref={childrenRef}  count={count}></Children>
             <button onClick={onClick}>点我</button>
           </div>
           )
       }
       
       ```

       

     + 在函数组件中的一个全局变量，不会因为重复 `render` 重复申明， 类似于类组件的 `this.xxx`

       ```jsx
       function App () {
         const [ count, setCount ] = useState(0)
         const timer = useRef(null)
       
         useEffect(() => {
           let id = setInterval(() => {
             setCount(count => count + 1)
           }, 500)
       
           timer.current = id
           return () => {
             clearInterval(timer.current)
           }
         }, [])
       
         const onClickRef = useCallback(() => {
           clearInterval(timer.current)
         }, [])
       
       
         return (
           <div>
             点击次数: { count }
             <button onClick={onClickRef}>useRef</button>
           </div>
           )
       }
       
       ```

       

   +  #### useReducer

     类似redux

     + 第一个参数是 一个 `reducer`，就是一个函数类似 `(state, action) => newState` 的函数，传入 上一个 `state` 和本次的 `action`
     + 第二个参数是初始 `state`，也就是默认值，是比较简单的方法

     + 第三个参数是惰性初始化，这么做可以将用于计算 `state` 的逻辑提取到 `reducer` 外部，这也为将来对重置 `state` 的 `action` 做处理提供了便利

     ```jsx
     function App() {
       const [state, dispatch] = useReducer(reducer, {
         count: 0
       });
       return (
         <>
           点击次数: {state.count}
           <button onClick={() => dispatch({type: 'increment'})}>+</button>
           <button onClick={() => dispatch({type: 'decrement'})}>-</button>
         </>
       );
     }
     ```

     

   + 自定义hook

     ```jsx
     function useWidth (defaultWidth) {
       const [width, setWidth] = useState(document.body.clientWidth)
     
       const onChange = useCallback (() => {
         setWidth(document.body.clientWidth)
       }, [])
     
       useEffect(() => {
         window.addEventListener('resize', onChange, false)
     
         return () => {
           window.removeEventListener('resize', onChange, false)
         }
       }, [onChange])
     
       return width
     }
     
     function App () {
     
       const width = useWidth(document.body.clientWidth)
     
       return (
         <div> 
           页面宽度: { width }
         </div>
         )
     }
     ```

     

     

3. 分层结构：

   + `虚拟DOM层`：负责**描述**结构与逻辑;

   + `内部组件层`：负责组件的更新, ReactDOM.render、 setState、 forceUpdate都是与它们打交道，能让你多次setState，只执行一次真实的渲染, 在适合的时机执行你的组件实例的生命周期钩子; 

   + `底层渲染层`： 不同的显示介质有不同的渲染方法，比如说浏览器端，它使用元素节点，文本节点，

     

4. react 虚拟DOM 是什么? 如何实现? 

   + Virtural DOM：实际就是使用json表示一个dom tree，然后再利用vdom 生成一个真实的dom。等于在js和dom中间加了一层。因为操作dom开销比操作json的开销大得多。
   + 当需要修改dom时，实现生成一个新的V-DOM，再通过diff算法比较两个V-DOM的差异。
   + 然后将这些差异统一更新到DOM上。
   + V-DOM 节点上的3个属性：tag name，props 和 children。
     

5. 说一下diff算法 ?

   + 常规的两棵树计算最小更新方式的时间复杂度是 O(n^3)，diff算法只有 O(n)。

     + 常规diff：比对差异需要遍历两次（O(n^2)），还需要计算最小转换方式。
+ diff策略：
   + DOM节点跨层级操作特别少，可忽略不记
  + 两个不同类型的元素会产生不同的树
  + 对于同一层级的一组子节点，它们可以通过唯一 key 进行区分
  
 + diff 粒度：

   1. **Tree Diff**：将新旧两颗虚拟 DOM 树,按照层级对应的关系,从头到尾的遍历一遍,,就能找到那些元素是需要更新的
      + 只比对同一层级的节点
      + 如果一节点被移除，则默认其子孙节点也被移除。
   2. **Component Diff**（tree node diff）：其实就是比较tag name。
      + 如果类型相同, 则按照原策略进行Virtual DOM比较
      + 如果类型不相同,删除旧的组件,再创建一个新的组件,插入到删除组件的那个位置
      + 如果是同一个类型的组件，有可能经过一轮Virtual DOM比较下来，并没有发生变化。如果我们能够提前确切知道这一点，那么就可以省下大量的diff运算时间。因此，React允许用户通过shouldComponentUpdate()来判断该组件是否需要进行diff算法分析。
   3. **Element Diff**（list node diff）：其实就是比较children
      + INSERT_MARKUP（插入）
      + MOVE_EXISTING（移动）
      + REMOVE_NODE（删除）



6. react 生命周期， v16 和 之前的区别，新加的方法有什么用，有用过吗？

+ 旧生命周期

![旧生命周期](../resource/reactLifeCycle_old.png)

+ tips：
  + componentWillMount：注册事件监听
  + componentDidMount：ajax请求
  + componentWillReceiveProps ：用于修改state（不会引起二次渲染），以及监听props的业务逻辑
  + componentWillUnmount：撤销事件监听

+ 新生命周期

  + 原有的render前的生命周期会被多次调用，例如componentWillMount

  + componentWillMount，componentWillReceiveProps，componentWillUpdate都被getDerivedStateFromProps替代。

  + 具体：

    1. `componentDidCatch(error, info)`：

       如果 `render()` 函数抛出错误，则会触发该函数。

       error为错误message，info包含错误堆栈信息。

    2. `static getDerivedStateFromProps(nextProps, prevState)`：

       无论是Mounting还是Updating，也无论是因为什么引起的Updating，全部都会被调用。它应该返回一个对象来更新状态，或者返回null来不更新任何内容。

    3. `static getSnapshotBeforeUpdate(prevProps, prevState)`：

       被调用于render之后，可以读取但无法使用DOM的时候。它使您的组件可以在可能更改之前从DOM捕获一些信息（例如滚动位置）。此生命周期返回的任何值都将作为参数传递给componentDidUpdate（）。

    ![](../resource/reactLifeCycle_new.jpg)



5. react HOC 原理，作用，什么情况下会选择用 HOC

   + 属性代理

     ```js
     const HOC = (WrappedComponent) =>
       class WrapperComponent extends Component {
         render() {
           return <WrappedComponent {...this.props} />;
         }
     }
     ```

     + 操作props
     + 获得`refs`的引用
     + 用其他元素包裹组件

   + 反向继承

     ```js
     const HOC = (WrappedComponent) =>
       class extends WrappedComponent {
         render() {
           return super.render();
         }
       }
     ```

     + 渲染劫持

6. Redux-saga 对比 redux-thunk 和 redux-promise 的优势，为什么要引一个这么大的包

   + redux-thunk：模板代码过多

   + redux-promise：payload为promise，resolve和reject都会出发reducer，但payload不同。问题在于无法处理乐观更新。

   + redux-saga：

     + 专门的异步action管理器。

     + 利用generator实现。

     + 能够取消异步流程，容易处理竞态问题。

       

7. 调用 setState 之后发生了什么？
   在代码中调用setState函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程（Reconciliation）。经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个UI界面。在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。

   

8. 传入 setState 函数的第二个参数的作用是什么？

   该函数会在setState函数调用完成并且组件开始重渲染的时候被调用，我们可以用该函数来监听渲染是否完成：

   ```js
   this.setState(
     { username: 'tylermcginnis33' },
     () => console.log('setState has finished and the component has re-rendered.')
   )
   ```

    

9. state和props触发更新的生命周期分别有什么区别

   旧生命周期里，props多一个componentWillRecevieProps；

   新的无区别。

   

10. 介绍react filber；介绍filber结构    （未完）

    - 原有的更新是同步的，如果一次更新过于复杂，会导致卡顿。

    - fiber优化的是`内部组件层`，分为两个阶段Phase：Reconciliation phase 和 Commit phase。第一个阶段会被打断重来。

    - fiber tree 是一种数据结构，有return（父组件），child（第一个子组件），sibling（兄弟组件）三个属性。形成了三叉链表结构。

11. 16.8 新特性：

    + Context

    + Suspense：悬停，暂停，用于解决异步数据显示。（不需要在业务代码加入state：fetching）

    + lazy 

      ```jsx
      const About = lazy(() => import('./About.jsx'))
      const Loading = () => <h1>Loading...</h1>
      class App extends Component {
          render() {
              return (
                  <Suspense fallback={<Loading/>}>
                      <About/>
                  </Suspense>
              )
          }
      }
      ```

    + Error Boundaries 

      错误边界是一种 React 组件，这种组件**可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI**，而不是渲染那些崩溃了的子组件树。

      + 无法捕获以下错误：
        + 事件处理（[了解更多](https://zh-hans.reactjs.org/docs/error-boundaries.html#how-about-event-handlers)）
        + 异步代码（例如 `setTimeout` 或 `requestAnimationFrame` 回调函数）
        + 服务端渲染
        + 它自身抛出来的错误（并非它的子组件）

      ```jsx
      class ErrorBoundary extends React.Component {
        constructor(props) {
          super(props);
          this.state = { hasError: false };
        }
      
        static getDerivedStateFromError(error) {
          // 更新 state 使下一次渲染可以显示降级 UI
          return { hasError: true };
        }
      
        componentDidCatch(error, info) {
          logComponentStackToMyService(info.componentStack);
        }
      
        render() {
          if (this.state.hasError) {
            // 你可以渲染任何自定义的降级 UI
            return <h1>Something went wrong.</h1>;
          }
      
          return this.props.children; 
        }
      }
      
      ```

    + memo

      function component 版的PurComponent



12. **react有什么坑点**

+ 宽度获取
+ 遍历子节点的时候，不要用 index 作为组件的 key 进行传入。

 

13. React如何提高性能

+ 适当地使用shouldComponentUpdate生命周期方法。 它避免了组件的不必要的渲染。
+ 不可变性是提高性能的关键。
+ 在显示列表或表格时始终使用 Keys，这会让 React 的更新速度更快
+ 多使用function component
+ 在redux中只存储原始状态，保证store的简洁

 

# Redux



1. #### createStore

   ```js
   function createStore(reducer, preloadedState, enhancer){}
   ```

   

2. ### Middleware

   ```js
   function createLogger(options = {}) {
     return ({ getState, dispatch }) => (next) => (action) => {
       let returnedValue;
       // .... 
       returnedValue = next(action);
       // ....
       return returnedValue;
     };
   }
   ```

   

3. **combineReducers**  原理

   

4. ```js
   isPlainObject
   ```

 



7. 优点：
   + 中间件机制
   + 完善的社区
8. 缺点：

+ 业务逻辑的位置；
+ 样板代码；
+ connect带来的视图层和数据层的耦合（单独声明container component）



9.  connect原理；绑定connect的过程 

```js
connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
```

