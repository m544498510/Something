/*选择排序    （不稳定算法）
 * 基本思想：两个for循环嵌套，内部for循环用来找到最大（小）的元素，外部循环用来放置找到的元素
 * 复杂度：需要遍历数组才能找到峰值元素，所以复杂度与原始序列是否有序无关，最好最坏和平均情况的时间复杂度都为O(n^2);
 * 需要一个临时变量用来交换数组内数据位置，所以空间复杂度为O(1)
 */
function select(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    //get min
    for (let j = i + 1; j < arr.length -1; j++) {
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    if(minIndex !== i){
      const tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }
  }
  return arr;
}

console.log(select([7,1,5,2,9,4,3,8]));



