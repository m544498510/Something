/*  快速排序（不稳定算法）
 *  
 *  复杂度：简单来说，复杂度就是对数据的操作次数
 *  在最好和平均情况下，数据从中间划分成两部分，一个大小为n的数组需要划分Log2n次，即递归log2n次，
 *  一次对n级别个数据进行操作，所以时间复杂度为O（n*log2n）
 * 在最坏的情况下，每次都选到数组中的最大或者最小的元素，每次划分成n-1和1两部分，这样就需要递归n-1次，
 * 一次对n级别个数据进行操作，所以最坏的时间复杂度为O(2n)

 *  快速排序的空间复杂度可以理解为递归的深度，而递归的实现依靠栈。
 *   已经说明平均需要递归log2n次，所以平均空间复杂度为O(nlog2n)
 * 
 */
function quick(arr, start = 0, end = arr.length - 1) {
  if(start >= end) return arr;
  
  let low = start;
  let high = end;
  const baseLine = arr[start];
  while (low < high) {
    while (low < high && arr[high] > baseLine){
      high--;
    }
    if(low < high){
      arr[low] = arr[high];
    }
    while (low < high && arr[low] < baseLine){
      low++;
    }
    if(low < high){
      arr[high] = arr[low];
    }
  }
  arr[high] = baseLine;
  
  quick(arr, start, high -1);
  quick(arr, high + 1, end);
  return arr;
}

console.log(quick([7, 1, 5, 2, 9, 4, 3, 8]));



