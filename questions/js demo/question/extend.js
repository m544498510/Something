function Father() {
  this.type = 'father';
}

Father.prototype = {
  familyName: 'familyName',
  getFamilyName() {
    return this.familyName ;
  }
};

//prototype
function Child1() {
  this.type = 'child1';
  this.name = 'child1';
  this.getFullName = () => {
    return this.name + ' ' +  this.getFamilyName();
  }
}
Child1.prototype = new Father();

const child1 = new Child1();
console.log(child1.getFullName());

/***
 　　　　重点：让新实例的原型等于父类的实例。
 
 　　　　特点：1、实例可继承的属性有：实例的构造函数的属性，父类构造函数属性，父类原型的属性。（新实例不会继承父类实例的属性！）
 
 　　　　缺点：1、新实例无法向父类构造函数传参。
 
 　　　　　　　2、继承单一。
 
 　　　　　　　3、所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）
 */


//借用构造函数继承

function Child2(){
  Father.call(this);
  this.name = "child2";
  this.getFullName = () => {
    return this.name;
  }
}
const child2 = new Child2();
console.log(child2.getFullName());

/***
 特点：1、只继承了父类构造函数的属性，没有继承父类原型的属性。
 
 　　　　　　　2、解决了原型链继承缺点1、2、3。
 
 　　　　　　　3、可以继承多个构造函数属性（call多个）。
 
 　　　　　　　4、在子实例中可向父实例传参。
 
 　　　　缺点：1、只能继承父类构造函数的属性。
 
 　　　　　　　2、无法实现构造函数的复用。（每次用每次都要重新调用）
 
 　　　　　　　3、每个新实例都有父类构造函数的副本，臃肿。
 */


//组合继承
function Child3() {
  Father.call(this);
  this.name = 'child3';
  this.getFullName = () => {
    return this.name + ' ' + this.getFamilyName();
  }
}
Child3.prototype = new Father();
const child3 = new Child3();
console.log(child3.getFullName());
