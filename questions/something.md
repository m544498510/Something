1. 计算元素宽高：

   ```js
     const selector = document.querySelector('.table-selector');
     const style = window.getComputedStyle(selector);				// style.height => "300px"
   	const height = selector.offsetHeight;										// 300
```
   
   