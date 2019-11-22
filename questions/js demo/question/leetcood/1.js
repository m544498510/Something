const nums = [2, 7, 11, 15];
const target = 9;

function towSum(nums, target){
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    for (let j = i + 1; j < arguments.length; j++) {
      const second = nums[j];
      if(first + second === target){
        return [i, j];
      }
    }
  }
  return [];
}

function towSumByHash(nums, target){
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map.set(num, i);
  }
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complete = target - num;
    if(map.has(complete) && complete !== num){
      return [i, map.get(complete)]
    }
  }
  
  
  
}

// must console [0, 1]
console.log(towSum(nums, target));
console.log(towSumByHash(nums, target));


