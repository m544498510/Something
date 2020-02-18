

# 文件路径匹配模式 -----  glob









# Nodejs的模块化和ES6的模块化区别

1. CommonJS模块输出的是一个值的拷贝，ES6模块输出的是值的引用 
   + CommonJS模块输出值的拷贝，一旦输出一个值，模块内部的变化就影响不到这个值。 
   + ES6模块的运行机制与CommonJS不一样。JS引擎对脚本静态分析的时候，遇到模块加载命令`import`，就会生产一个只读引用。等到脚本真正执行时，再根据只读引用，到被加载的模块中取值。原始值变了，`import`加载的值也会跟着变。因此ES6模块是动态引用，并且不会缓存值，模块里的变量绑定其所在的模块。 
2.  CommonJS模块是运行时加载，ES6模块是编译时输出接口 
   + 运行时加载：CommonJS模块就是对象，即在输入时先加载整个模块，生产一个对象，然后再从这个对象上面读取方法，这种加载成为”运行时加载“ -
   + 编译时加载：ES6模块不是对象，而是通过`export`命令显示指定输出的代码，`import`时采用静态命令的形式。即在`import`时可以指定加载某个输出值，而不是加载整个模块，这种加载成为**编译时加载** 



1. 
2. 简述公司node架构中容灾的实现 ?
3. express和koa的对比，两者中间件的原理，koa捕获异常多种情况说一下
4. express里面登录的session服务怎么样实现分布式服务

 

 
