Function.prototype.bind2 = function (thi$, ...args){
  const fn = this;
  return (...realArgs) => {
    const finalArgs = [].concat(args, realArgs);
    return fn.call(thi$, ...finalArgs);
  }
};

function a (param1, param2){
  
  console.log(param1, param2, this.b, this.c);
}

const t = {
  b: 'b',
  c: 'c'
};

(a.bind2(t, 1))('param');
