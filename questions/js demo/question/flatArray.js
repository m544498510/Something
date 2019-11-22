Array.prototype.flat = function(depth){
  return flatArr(this, depth);
  function flatArr(targetArr, depth = Number.MAX_SAFE_INTEGER, resultArr = [],){
    if(depth > -1){
      targetArr.forEach(item => {
        if(Array.isArray(item)){
          flatArr(item, depth -1, resultArr);
        } else {
          resultArr.push(item);
        }
      });
    } else {
      resultArr.push(targetArr);
    }
    return resultArr;
  }
};

const a = [1, [2,3], [[4,5], [[6],7]],8];
console.log(a.flat());
console.log(a.flat(1));
