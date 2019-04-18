1. Array . isArray ()

    

2. 

   + newArr =  oldArr.concat (arr1, arr2  ...)

   + join   

     ```js
     [1,2,3].join('-')   	// "1-2-3"
     ```

   + reverse ()

   + slice (start = 0， end = arr.length - 1 )     浅拷贝，不改变原数组。

   + sort ( ) 

      ```js
     [1, 2, 3].sort((a, b) => {
         if(a < b) {
             return -1;
         } else if (a > b) {
             return 1;
         } else {
             return 0;
         }
     })
      ```

   + splice()   方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。 

     ```js
     array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
     // item 用于替换的元素
     ```

     

3. 增删

   + pop ()   删除并返回最后一个元素，
   + push（val1， val2，val3 ... ）    从最后添加元素
   + shift () 删除并返回第一个元素
   + unshift (val1, val2,  val3 ... ) 从头添加元素

   

4. 遍历 

   + every

   + map

   + some

   + filter

   + forEach

   + reduce (callback,  initialValue)   ----  没写initalValue,  默认使用第一个元素，少遍历一个元素。

     ```js
     [1,2,3].reduce((acc, cur, idx, srcArr) => cur ,  0)
     ```

   + reduceRight

     

5. 寻找第一个符合的元素

   + find （callback）

   + findIndex （callback）

   +  includes （value,  fromIndex = 0）

   + indexOf（value, fromIndex = 0）

   + lastIndexOf (value, fromIndex = arr.length - 1)

     

6.  flat (depth):  递归遍历多维数组，返回flat array

   

7. Array.of() : 用来替代new Array

```js
Array.of(7); 	//[7]
Array(7);		//[,,,,,,,]
```





  







