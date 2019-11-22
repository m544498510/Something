function compose(...funcArr){
  return function(arg){
    return funcArr.reduceRight((acc, func) => func(acc),arg)
  }
}

function sum1(a){
  return a + 1;
}

function sum2(a){
  return a + 2;
}

const sum3 = compose(sum1, sum2);

console.log(sum3(3));


