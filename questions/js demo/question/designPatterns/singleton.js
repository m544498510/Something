
let instance = null;
class Singleton{
  constructor(name){
    if(!instance){
      this.name = name;
      
      instance = this;
      return this;
    }
    return instance;
  }
  printName(){
    console.log(this.name);
  }
}

const a = new Singleton("a");
const b = new Singleton("b");
a.printName();
b.printName();
console.log(a === b);


