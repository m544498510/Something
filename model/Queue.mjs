export default class Queue {
  constructor() {
    this.data = [];
  }
  
  push(item){
    this.data.push(item);
  }
  
  pop(){
    if(this.isEmpty()){
      return null;
    } else {
      return this.data.splice(0, 1)[0];
    }
  }
  
  isEmpty(){
    return this.data.length === 0;
  }
}