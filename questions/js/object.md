1. 新建

   - Object.create( proto,  [propertiesObject] )

   - Object.formEntries( [ [ key1, value1 ], [ key2, value2 ] ] )  

     ​	—— 支持度很低

2. 属性

   + Object.definedProperty (obj, prop, descriptor )
   + Object.definedProperties( obj, { key : descriptor } )

   |                     | Configurable | enmerable | value | writable | get（func） | Set （func） |
   | ------------------- | ------------ | --------- | ----- | -------- | ----------- | ------------ |
   | Data descriptor     | √            | √         | √     | √        |             |              |
   | Accessor descriptor | √            | √         |       |          | √           | √            |

   + Object.getOwnPropertyDescriptor ( obj, prop )
   + Object.getOwnPropertyDescriptors ( obj )
   + Object.getOwnPropertyNames( obj )
   + Object.getOwnPropertySymbols( obj )

    

   + obj.hasOwnProperty ( prop )

   

3. 拷贝

   + Object . assign (target, source1, source2 ...)   

     ​	—— 将source 浅拷贝进 target

   + 

4. 遍历

   + Object.entries ( obj )

     ```js
     const obj = { foo: 'bar', baz: 42 };
     console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
     ```

   + Object.keys( obj )

   + Object.values( obj )

     

5. 冻结

   + Object.freeze ( obj ) 

     ​	 —— 冻结后，不能crud属性，也不能修改属性的descriptor。严格模式下修改throw exception。

   + Object.preventExtensions ( obj )

     ​	—— 不可扩展，也就是永远不能再添加新的属性。

   + Object.seal ( obj )

     ​	—— 封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要可写就可以改变。

6. 判断

   + Object.is( val1, val2 )

     ​	 —— 类似 ===， 但 +0 和 -0,  NaN 不同。

   + Object.isExtensible ( obj ) 

     ​	—— [`Object.preventExtensions`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)，[`Object.seal`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) 或 [`Object.freeze`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) 方法都可以标记一个对象为不可扩展（non-extensible）。

   + Object.isFrozen( obj )

   + Object.isSealed ( obj )

     ​	—— 是否被密封

   + obj.isPrototypeOf ( obj2 )

     ​	—— obj2 是否在obj 的原型链上

   +  obj.propertyIsEnumerable(prop)

7. 其他

   + Object.getPrototypeOf ( obj )
   + Object.setPrototypeOf ( obj, prototype )