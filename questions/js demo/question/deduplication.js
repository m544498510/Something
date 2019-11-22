function deduplication(arr){
  const order = arr.sort();
  const result = [];
  order.forEach((num, i) => {
    if(num !== order[i+1]){
      result.push(num);
    }
  });
  return result;
}

console.log(deduplication([1,1,2,3,4,1,3,6,5,11,5]));


