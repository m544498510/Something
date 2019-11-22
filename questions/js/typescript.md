#### basic types

+ 布尔类型（boolean）

+ 数据类型（number）

+ 字符串类型（string）

+ 数组类型（array）

  ```ts
  let arr: number[] = [1, 2];
  ```

+ 元组类型（tuple）

  元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同。

  ```ts
  // Declare a tuple type
  let x: [string, number];
  // Initialize it
  x = ['hello', 10]; // OK
  ```

  

+ 枚举类型（enum）

  ```tsx
  enum Color {Red, Green, Blue}
  let c: Color = Color.Green;
  ```

  + 默认为数字枚举，自增长
  + 

+ 任意值类型（any）

+ null 和 undefined

+ void 类型

+ never 类型

  `never  ` 类型表示的是那些永不存在的值的类型。 例如， `never` 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；



#### interface

```tsx
//对象接口
interface SquareConfig {
  color?: string;				//可选
  readonly y: number;			//只读
  [propName: string]: any;		//额外属性
  setTime(d: Date): void;		//对象方法
}

//函数接口
interface SearchFunc {
  (source: string, subString: string): boolean;
}

//继承
interface a extends b {

}

```



#### class

```tsx
class Greeter extends Animal{
    static origin = {x: 0, y: 0};
    readonly greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
    
    private g() {}
    
    protected child() {}
    
    get fullName(): string {
        return this.greeting + '_new';
    }
}

let greeter = new Greeter("world");

```





#### function

```tsx
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

//this的处理
class Handler {
    info: string;
    onClickGood(this: void, e: Event) {
        // can't use this here because it's of type void!
        console.log('clicked!');
    }
}

//支持重载
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };

```





#### 泛型

```tsx
function identity<T>(arg: T): T {
    return arg;
}

//泛型约束
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}


//在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，
function create<T>(c: {new(): T; }): T {
    return new c();
}
```



### 黑魔法

+ 子类类型声明: 

  ```typescript
  declare type ChildClass = { new (name: string): FatherClass };
  ```

  

##### 问题

1. 无法声明Promise reject 的返回数据类型
2. 没有方法重载
3. 手动根据某个属性排序时，无法对属性名变量类型定义
4. 没有方法的异常抛出声明