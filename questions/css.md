1. 怎样设置两列布局？ 

   + float+margin
   + flex
   + float+BFC

2. CSS优先级 

   + 行内样式 ,  加1000

   - ID选择器，加0100。

   - 类选择器、属性选择器或伪类，加0010。

   - 元素和伪元素，加0001。

   - 通配选择器\*对特殊性没有贡献，即0000。

   - 最后比较特殊的一个标志!important（权重），为10000。

     

3. position属性介绍

   absolute, fixed, relative,  static,  inherit

   sticky ： 粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位 

   

4. display属性介绍

   + block: 块级元素（不设宽时，默认填满父元素）
   + inline：行内元素（不能更改宽高，大小由内部元素决定；padding和margin的top和bottom不起作用）
   + inline-block：同时具备上述它特点。
   + flex：弹性元素

   

5. BFC

   Block Formatting Context是一个独立的布局环境，其中的元素布局是不受外界的影响。

   满足一下一个条件即可：

   + float值不是none
   + position不是static或relative
   + display为inline-block，table-cell，flex，table-caption或inline-flex
   + overflow不是visible

   特点：

   1. 内部的Box会在垂直方向上一个接一个的放置
   2. 垂直方向上的距离由margin决定。（完整的说法是：属于同一个BFC的两个相邻Box的margin会发生重叠，与方向无关。）
   3. 每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明BFC中子元素不会超出他的包含块，而position为absolute的元素可以超出他的包含块边界）
   4. BFC的区域不会与float的元素区域重叠
   5. 计算BFC的高度时，浮动子元素也参与计算
   6. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素

   用途：

   + 避免外边距折叠
   + 清除浮动
   + 多栏布局

   

6. css有哪些垂直水平居中方式？

   + 绝对定位 + transform

     ```css
     .container {
         position: relative;
     }
     .child {
     	position: absolute;
     	top: 50%；
     	left: 50%;
     	transform: translate(-50%, -50%);
     }
     ```

   + flex

     ```css
     .container {
         display: flex;
         align-items: center;
     }
     ```

     

7. Flexbox

   + display: flex
   +  子元素属性：
     + flex-grow：拉伸因子， 0 为不拉伸（初始值）；其他值为比重
     + [`align-self`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self) 侧轴上单个项目对齐方式

8. 移动端适配

   ```css
   @media (min-width:321px) and (max-width:320px){
   	
   }
   ```

9. 浮动是什么，举个栗子，为什么需要清除浮动，有没有不需要清除的情况 

   + 浮点指脱离文档流。缺点是父元素无法获取子元素高度。

   + 清除浮动：

     + ```CSS
       .clearfix{
       	zoom: 1;
       }
       .clearfix:after{
           content: "";
           display: block;
           clear: both;
           visibility:hidden;
           height:0
       }
       ```

     + 给父元素添加样式overflow: hidden;或者overflow: auto;

     + 让父元素成为BFC

       

10. CSS中的pixel与硬件/物理中的pixel有何不同？

    在小设备上，逻辑分辨率和物理分辨率是不同的。

    

11. em和px的区别 
