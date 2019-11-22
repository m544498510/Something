1. 盒模型：

   + content， padding，border， margin
   + 标准：width = content width
   + IE： width = border width + padding width + content width

2. 怎样设置两列布局？ 

   + float+margin
   + flex
   + float+BFC

3. CSS优先级 

   + 行内样式 ,  加1000

   - ID选择器，加0100。

   - 类选择器、属性选择器或伪类，加0010。

   - 元素和伪元素，加0001。

   - 通配选择器\*对特殊性没有贡献，即0000。

   - 最后比较特殊的一个标志!important（权重），为10000。

     

4. position属性介绍

   absolute, fixed, relative,  static（默认值）,  inherit

   sticky ： 粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位 

   

5. display属性介绍

   + block: 块级元素（不设宽时，默认填满父元素）
   + inline：行内元素（不能更改宽高，大小由内部元素决定；padding和margin的top和bottom不起作用）
   + inline-block：同时具备上述它特点。
   + flex：弹性元素

   

6. BFC

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

   

7. css有哪些垂直水平居中方式？

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

     

8. Flexbox ？

   + <img src="./resource/flex.png">

   + display: flex

   +  容器属性：
     
     + flex-direction:  主轴方向（row | row-reverse | column | column-reverse） 左上为起始
     + flex-wrap: 控制换行 （nowrap | wrap | wrap-reverse）（reverser 只控制上下）
     + flex-flow:  上面两个属性的简写（flex-flow: row nowrap）
     
     
     
     + justify-content: 主轴上的对齐方式（默认为 flex-start）
     
       <img src="./resource/flex-justify.png">
     
     + align-items: cross 上对齐方式 （默认为stretch）
     
       <img src="./resource/flex-cross.png">
     
     + align-content：多根轴线的对齐方式
     
       <img src="./resource/flex-double.png">
     
   + 子元素属性：

     + flex-grow：拉伸因子， 0 为不拉伸（初始值）；其他值为比重

     + flex-shrink：缩小比例，默认为1，即如果空间不足，该项目将缩小。（为0代表不缩小）

     + flex-basis：在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。

     + flex: 以上3个属性的简写。

       

     + order： 排列顺序，越小越排前，默认为0。

     + [`align-self`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-self) ：侧轴上单个项目对齐方式，允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性

9. 移动端适配

   ```css
   @media (min-width:321px) and (max-width:320px){
   	
   }
   ```

10. 浮动是什么，举个栗子，为什么需要清除浮动，有没有不需要清除的情况 

   + 浮点指脱离文档流。缺点是父元素无法获取子元素高度。

   + 清除浮动：

     + ```CSS
       .clearfix{
       	zoom: 1;
       }
       .clearfix:after{
           content: "";
           display: block;
           clear: both;			//元素两边都不能浮动
           visibility:hidden;
           height:0
       }
       ```

     + 让父元素成为BFC

11. nth-child(even/odd)

    ```css
    // odd表示基数，此时选中基数行的样式，even表示偶数行
    .row:nth-child(odd){
        background: #eee;
    }  
    ```

    

12. CSS中的pixel与硬件/物理中的pixel有何不同？

    在小设备上，逻辑分辨率和物理分辨率是不同的。

    

13. em和px的区别 
