Function.prototype.bind = function(target){
  console.log("call the custom bind");
  const orgFunc = this;
  return function(...args){
    return orgFunc.call(target, ...args);
  }
};

const a = {
  name: 'a',
  func: function(arg){
    console.log(this, arg);
  },
};

a.bindFunc = a.func.bind({name: 'b'});

a.func("a.arg");
a.bindFunc("b.arg");
