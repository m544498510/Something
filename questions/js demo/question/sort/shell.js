function shell(arr) {
  let increment = calculateIncrement(arr.length);
  while (increment > 0) {
    for (let i = 0; i < increment; i++) {
      for (let j = i + increment; j < arr.length; j += increment) {
        if (arr[j] < arr[j - increment]) {
          let k;
          const tmp = arr[j];
          for (k = j - increment; k >= 0 && tmp < arr[k]; k -= increment) {
            arr[k + increment] = arr[k];
          }
          arr[k + increment] = tmp;
        }
      }
    }
    increment = (increment - 1)/3 ;
    
  }
  return arr;
}

function calculateIncrement(len) {
  let increment = 1;
  while (increment < len / 3) {
    increment = increment * 3 + 1;
  }
  return increment;
}

console.log(shell([7, 1, 5, 2, 9, 4, 3, 8]));



