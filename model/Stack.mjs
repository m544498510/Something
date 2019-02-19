export default class Stack {
  constructor(){
    this.data = [];
  }
  
  push(val){
    this.data.push(val);
  }
  
  pop(){
    if(this.isEmpty()){
      throw new Error('Stack is empty!');
    } else {
      return this.data.pop();
    }
  }
  
  peek(){
    return this.data[this.data.length - 1];
  }
  
  size(){
    return this.data.length;
  }
  
  isEmpty(){
    return this.size() === 0;
  }
  
  clear(){
    this.data = [];
  }
  
}