1. 哪些操作会引起重绘和重排

   重绘：**浏览器会根据元素的新属性重新绘制，使元素呈现新的外观** 

   重排：

   - 添加或删除可见的DOM元素                                                      
   - 元素位置改变
   - 元素尺寸改变（margin，padding，border，content size）
   - 内容改变
   - 页面渲染器初始化
   - 浏览器尺寸改变

2. 获取页面元素的位置和宽高

   只读：

   - clientWidth 和 clientHeight：可视区域宽高，padding + content (如果出现滚动条，会减去滚动条宽高)
   - offsetWidth 和 offsetHeight：border + padding + content （本身设定，与滚动条等其他信息无关）
   - clientTop 和 clientLeft：border的宽度。
   - offsetTop 和 offsetLeft：和offset parent的距离。（offset parent指最近一个具有定位属性的父级元素）
   - scrollWidth 和 scrollHeight：这两个属性指的是当元素内部的内容超出其宽度和高度的时候，元素内部内容的实际宽度和高度，需要注意的是，当元素其中内容没有超过其高度或者宽度的时候，该属性是取不到的。

   可读可写：

   - scrollTop 和 scrollLeft：在可视区域内的位置

    

   Event对象：

   - clientX 和 clientY：鼠标相对浏览器可视区域左上角坐标
   - screenX 和 screenY：鼠标相对屏幕左上角坐标
   - offsetX 和 offsetY：相对事件源的坐标
   - pageX 和 pageY：相对页面的坐标（包括不可见部分）

3. 页面性能检测

   主要指标：运行时间，内存，FPS

   + 首页加载速度
   + http请求数量

4. js加载顺序

   <img src="./resource/script.png">

   ​	defer 是“渲染完再执行”，async 是“下载完就执行”，defer 如果有多个脚本，会按照在页面中出现的顺序加载，多个async 脚本不能保证加载顺序

   ​	加载 es6模块的时候设置 type=module，异步加载不会造成阻塞浏览器，页面渲染完再执行，可以同时加上async属性，异步执行脚本（利用顶层的this等于undefined这个语法点，可以侦测当前代码是否在 ES6 模块之中）



5. 页面解析顺序

   1、DNS服务器通过域名查找对应的web 服务器ip地址；

   2、浏览器访问web服务器；

   　这里涉及到客户端与服务器的tcp 三次握手与四次挥手，可以参考上篇博文《[TCP的三次握手(建立连接）与 四次挥手(关闭连接）](http://www.cnblogs.com/CandyManPing/p/6626661.html)》；

   3、服务器处理完成返回html;

   4、浏览器解析、加载页面

   　　解析html 构建dom树 -> 构建render树 -> 布局render树 -> 绘制render树 ：

   我们知道浏览器为了体验友好，并不是文档全部都解析才绘制到屏幕上，而是从上至下开始解析html，遇到css 会开启线程下载css；

   解析：
   　　1、将HTML构建成一个DOM树，DOM 树的构建过程是一个深度遍历过程：当前节点的所有子节点都构建好后才会去构建当前节点的下一个兄弟节点。 
   　　2、将CSS解析成CSS去构造CSSOM树( CSSOM = CSS Object Model CSS对象模型)
   　　3、根据DOM树和CSSOM来构造 Rendering Tree（渲染树）。注意：Rendering Tree 渲染树并不等同于 DOM 树，因为一些像 Header 或 display:none 的东西就没必要放在渲染树中了。

   　　4.有了Render Tree，浏览器已经能知道网页中有哪些节点、各个节点的CSS定义以及他们的从属关系。
   　　5.下一步操作称之为Layout，顾名思义就是计算出每个节点在屏幕中的位置 layout render tree。 
   　　6.再下一步就是绘制，即遍历render树，并使用浏览器UI后端层绘制每个节点。

   性能优化中重绘、重排： 
   （1）Reflow（回流/重排）：当它发现了某个部分发生了变化影响了布局，渲染树需要重新计算。 
   （2）Repaint（重绘）：改变了某个元素的背景颜色，文字颜色等，不影响元素周围或内部布局的属性，将只会引起浏览器的repaint，根据元素的新属性重新绘制，使元素呈现新的外观。重绘不会带来重新布局，并不一定伴随重排；
   Reflow要比Repaint更花费时间，也就更影响性能。所以在写代码的时候，要尽量避免过多的Reflow。

   reflow的原因：

   （1）页面初始化的时候； 
   （2）操作DOM时； 
   （3）某些元素的尺寸变了； 
   （4）如果 CSS 的属性发生变化了。

   减少 reflow/repaint

   　（1）不要一条一条地修改 DOM 的样式。与其这样，还不如预先定义好 css 的 class，然后修改 DOM 的 className。 
   　（2）不要把 DOM 结点的属性值放在一个循环里当成循环里的变量。 
   　（3）为动画的 HTML 元件使用 fixed 或 absoult 的 position，那么修改他们的 CSS 是不会 reflow 的。 
   　（4）千万不要使用 table 布局。因为可能很小的一个小改动会造成整个 table 的重新布局。

​    

6. 浏览器事件有哪些过程? 为什么一般在冒泡阶段, 而不是在捕获阶段注册监听? addEventListener 参数分别是什么 ?

7. 静态文件的浏览器缓存如何实现?

8. DOM基础知识,添加元素,删除元素等等...

10. DOM节点类型

11. http缓存知道多少 

12. 强缓存和协商缓存的缓存，是从哪里拿的？

13. IndexDB，HTTP/2 或 Service Workers 

14. **Fetch API 相对于传统的 Ajax 有哪些改进？** 

15. **使用单页应用将文件上传到服务器的有哪些方法？**

    提示：XMLHttpRequest2（streaming），fetch（non-streaming），File API

 

16. 跨域

    同源策略： 相同域名，端口，协议。

    1. jsonp

    2. CORS：Cross-origin Resource Sharing

       1. #### 简单请求处理流程

          发起AJAX请求） ==> （浏览器发现请求为跨源AJAX简单请求）==>（浏览器自动在头信息里添加`Origin字段`） ==>（服务器根据收到的`Origin字段`来决定是否同意这次请求）==> （浏览器得到回应，根据返回的头信息没有包含`Access-Control-Allow-Origin`字段判断本次CORS请求是否成功）

       2. #### 非简单请求处理流程

          （向自动发出预检请求）==> （服务器回应预检请求）==> （服务器同意则会返回一个带Access-Control-Allow-Origin头信息的HTTP回应） ==> （浏览器判断预检请求是否被允许） ==>（如果预检请求被通过，以后每次的非简单请求，就都和简单请求一样） 

17. **XSS 与 CSRF 两种跨站攻击**

    1. xss 跨站脚本攻击，主要是前端层面的，用户在输入层面插入攻击脚本，改变页面的显示，或则窃取网站 cookie，预防方法：不相信用户的所有操作，对用户输入进行一个转义，不允许 js 对 cookie 的读写
    2. csrf 跨站请求伪造，以你的名义，发送恶意请求，通过 cookie 加参数等形式过滤
    3. 我们没法彻底杜绝攻击，只能提高攻击门槛

18. **网站性能优化**

    1. http 请求方面，减少请求数量，请求体积，对应的做法是，对项目资源进行压缩，控制项目资源的 dns 解析在2到4个域名，提取公告的样式，公共的组件，雪碧图，缓存资源，
    2. 压缩资源，提取公共资源压缩，提取 css ，js 公共方法
    3. 不要缩放图片，使用雪碧图，使用字体图表（阿里矢量图库）
    4. 使用 CDN，抛开无用的 cookie
    5. 减少重绘重排，CSS属性读写分离，最好不要用js 修改样式，dom 离线更新，渲染前指定图片的大小
    6. js 代码层面的优化，减少对字符串的计算，合理使用闭包，首屏的js 资源加载放在最底部  























​    

​    

​    