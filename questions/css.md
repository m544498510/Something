1. 怎样设置两列布局？ 

2. CSS优先级 

   + 行内样式 ,  加1000

   - ID选择器，加0100。

   - 类选择器、属性选择器或伪类，加0010。

   - 元素和伪元素，加0001。

   - 通配选择器\*对特殊性没有贡献，即0000。

   - 最后比较特殊的一个标志!important（权重），为10000。

     

3. position属性介绍

   absolute, fixed, relative,  static,  inherit

   

4. display属性介绍

   block: 

5. BFC

6. HTML最小元素

7. CSS选择器及其权重

8. css 行内标签在DOM渲染时怎么解析

9. css有哪些垂直水平居中方式？

10. flex

11. 移动端适配

    ```css
    @media (min-width:321px) and (max-width:320px){
    	
    }
    ```

12. 跨域

    同源策略： 相同域名，端口，协议。

    1. jsonp

    2. CORS：Cross-origin Resource Sharing

       1. #### 简单请求处理流程

          发起AJAX请求） ==> （浏览器发现请求为跨源AJAX简单请求）==>（浏览器自动在头信息里添加`Origin字段`） ==>（服务器根据收到的`Origin字段`来决定是否同意这次请求）==> （浏览器得到回应，根据返回的头信息没有包含`Access-Control-Allow-Origin`字段判断本次CORS请求是否成功）

       2. #### 非简单请求处理流程

          （向自动发出预检请求）==> （服务器回应预检请求）==> （服务器同意则会返回一个带Access-Control-Allow-Origin头信息的HTTP回应） ==> （浏览器判断预检请求是否被允许） ==>（如果预检请求被通过，以后每次的非简单请求，就都和简单请求一样） 

