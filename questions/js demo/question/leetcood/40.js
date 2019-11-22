
function combinationSum(candidates, target){
  const result = [];
  candidates = candidates.sort((a, b) => a - b);
  helper(candidates, target, 0, [], result);
  return result;
}

function helper(candidates, target, start, tmp, result){
  if(target === 0){
    result.push([...tmp]);
    return true;
  }
  
  for (let i = start; i < candidates.length && candidates[i] <= target; i++) {
    const item = candidates[i];
    if(i === start || item !== candidates[i - 1]){
      tmp.push(item);
      helper(candidates, target - item, i + 1, tmp, result);
      tmp.length -= 1;
  
    }
  }
}

console.log(combinationSum([10, 1, 2, 7,1, 6, 5], 8));


