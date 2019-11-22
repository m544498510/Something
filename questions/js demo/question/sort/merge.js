//* 基本思想：将数组递归分成越来越小的数集，直到每个数集只有一个数
// * 然后将数据递归排序，使其合并成与原来数据一样的有序序列
// * 时间复杂度分析：递归分解数据，需要递归logN次，每次都需要对n个数据扫描一次，最好最坏平均都一样，所以O(nlogn)
// * 空间复杂度分析：归并排序需要一个临时temp[]来储存归并的结果，所以   O(n) 
//
function merge(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;
  
  let mid = parseInt((start + end) / 2);
  merge(arr, start, mid);
  merge(arr, mid + 1, end);
  
  const tmpArr = [];
  let start1 = start;
  let end1 = mid;
  let start2 = mid + 1;
  let end2 = end;
  
  while (start1 <= end1 && start2 <= end2) {
    if (arr[start1] < arr[start2]) {
      tmpArr.push(arr[start1]);
      start1++;
    } else {
      tmpArr.push(arr[start2]);
      start2++;
    }
  }
  while (start1 <= end1) {
    tmpArr.push(arr[start1]);
    start1++;
  }
  while (start2 <= end2) {
    tmpArr.push(arr[start2]);
    start2++;
  }
  tmpArr.forEach((v, i) => arr[start + i] = v);
  return arr;
}

console.log(merge([7, 1, 5, 2, 9, 4, 3, 8]));



