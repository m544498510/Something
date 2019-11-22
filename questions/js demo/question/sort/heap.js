//https://www.cnblogs.com/Java3y/p/8639937.html
//完全二叉树有个特性：左边子节点位置 = 当前父节点的两倍 + 1，右边子节点位置 = 当前父节点的两倍 + 2
// length / 2 - 1是二叉树中最后一个非叶子结点的序号
//最坏平均情况都需要循环建堆， O（nlogn）
//      *  空间复杂度：堆排序为原地排序，常量级额外空间 O（）
function adjustHeap(arr, index, len) {
  const lChild = index * 2 + 1;
  const rChild = index * 2 + 2;
  let max = index;
  if (lChild < len && arr[lChild] > arr[max]) {
    max = lChild;
  }
  if (rChild < len && arr[rChild] > arr[max]) {
    max = rChild;
  }
  if(max !== index){
    const tmp = arr[index];
    arr[index] = arr[max];
    arr[max] = tmp;
    adjustHeap(arr, max, len);
  }
  return arr;
}

function heap(arr) {
  const lastNoLeafIndex = arr.length / 2 - 1;
  for (let i = lastNoLeafIndex; i > 0; i--) {
    adjustHeap(arr, i, arr.length);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    const tmp = arr[0];
    arr[0] = arr[i];
    arr[i] = tmp;
    adjustHeap(arr, 0, i);
  }
  return arr;
}

console.log(heap([7, 1, 5, 2, 9, 4, 3, 8]));





