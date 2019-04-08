/**
 *******************************************************************************
 *                       Continental Confidential
 *                  Copyright (c) Continental, AG. 2019
 *
 *      This software is furnished under license and may be used or
 *      copied only in accordance with the terms of such license.
 *******************************************************************************
 * @file Observer.mjs
 * @brief
 *******************************************************************************
 */

export function observable(target) {
  const newTarget = new Proxy(target, {
    set: (targetObj, propKey, value, receiver) => {
      
      //target must be a plain object
      const newObj = Reflect.set(targetObj, propKey, value, receiver);
      receiver.onChangeHandles.forEach(handle => handle(newObj));
      return newObj;
    }
  });
  
  Object.setPrototypeOf(newTarget, {
    onChangeHandles: [],
    observer(handle) {
      this.onChangeHandles.push(handle);
      return true;
    }
  });
  return newTarget;
}

const obj = observable({
  a: 1
});

obj.observer((newObj) => {
  console.log("observable object", newObj, obj);
});

obj.a = {
  b: 1
};
obj.a.b = 3;


/****     Observable Class        ****/
class Observable {
  constructor(){
    this.handles = [];
    
    return new Proxy(this, {
      set: (target, p, value, receiver) => {
        const newTarget = Reflect.set(target, p, value, receiver);
        this.handles.forEach(handle => handle());
        return newTarget;
      }
    });
  }
  
  observer(handle){
    this.handles.push(handle);
    return true;
  }
}

class Test extends Observable{
  constructor(){
    super();
    this.value = 1;
  }
  
  setValue(val){
    this.value = val;
  }
  
  getValue(){
    return this.value;
  }
}

const test = new Test();
test.observer(() => console.log(test.getValue()));
test.setValue('Observable class  new set1');
test.setValue('Observable class  new set2');
