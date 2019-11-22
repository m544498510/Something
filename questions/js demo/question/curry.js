function curry(func){
  let args = [];
  const inner = (...someArgs) => {
    args = args.concat(someArgs);
    if(args.length === func.length){
      return func.call(this, ...args);
    }
    return inner;
  };
  return inner;
}

function sum(a, b, c){
  return a + b + c;
}
const curried = curry(sum);
console.log(curried(1)(2)(3));

