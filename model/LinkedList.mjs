export default class LinkedList {
  constructor(firstNodeValue){
    this.head = null;
    this.last = null;
    this.length = 0;
    
    if(firstNodeValue){
      this.head = new Node(firstNodeValue);
      this.last = this.head;
      this.length ++;
    }
    return this;
  }
  
  getByIndex(index){
    if(!index || typeof index !== 'number' || index >= this.length || index < 0){
      return null;
    }
    let tmpNode;
    if(index <= this.length / 2){
      tmpNode = this.head;
      for (let i = 0; i < index; i++) {
        tmpNode = tmpNode.next;
      }
    }else {
      tmpNode = this.last;
      for (let i = this.length - 1; i > index; i--) {
        tmpNode = tmpNode.prev;
      }
    }
    return tmpNode;
  }
  
  add(value){
    const node = new Node(value);
    if(this.length === 0){
      this.head = node;
      this.last = node;
    }else{
      this.last.next = node;
      node.prev = this.last;
      this.last = node;
    }
    this.length++;
    return this;
  }
  
  addAfterPosition(value, index){
    if(!index || typeof index !== 'number' || index >= this.length || index < 0){
      return null;
    }
    
    const newNode = new Node(value);
    const prevNode = this.getByIndex(index);
    const nextNode =prevNode.next;
    
    newNode.prev = prevNode;
    prevNode.next = newNode;
    
    newNode.next = nextNode;
    nextNode.prev = newNode;
    
    this.length ++;
    return this;
  }
  
  remove(index){
    if(!index || typeof index !== 'number' || index >= this.length || index < 0){
      return null;
    }
  
    const currentNode = this.getByIndex(index);
    const prevNode = currentNode.prev;
    const nextNode = currentNode.next;
    
    prevNode.next = nextNode;
    nextNode.prev  = prevNode;
    
    this.length --;
    return this;
  }
  
  toArray(){
    const arr = [];
    let node = this.head;
    while (node){
      arr.push(node.value);
      node = node.next;
    } 
    return arr;
  }
  
  static arrToLinkedList(arr){
    const list = new LinkedList();
    arr.forEach(item => list.add(item));
    return list;
  }
  
  toString(){
    return this.toArray().toString();
  }
  
  revert(){
    let node = this.head;
    while (node){
      const tmp = node.next;
      node.next = node.prev;
      node.prev = tmp;
      
      node = tmp;
    }
    
    const tmp = this.head;
    this.head = this.last;
    this.last = tmp;
    return this;
  }
  
} 

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

function testCase(){
  const arr = [1,2,3];
  const list = LinkedList.arrToLinkedList(arr);
  console.log(list.toString());
  
  list.add(4).add(5).add(6);
  console.log(list.toString());
  
  list.addAfterPosition('error',1);
  console.log(list.toString());
  
  list.remove(2);
  console.log(list.toString());
  
  list.revert();
  console.log(list.toString());
}


