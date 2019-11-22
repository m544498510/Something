// 两个for循环嵌套实现，外层控制遍历次数，内层用来实现交换

//* 最优时间复杂度为O(n)
// * 最坏情况下的冒泡就是逆序，时间复杂度为O(n^2) 
// * 平均情况下也为O(n^2)
// * 平均的时间复杂度=sum(Pi*f(n));Pi为每种情况出现的概率，计算起来有些困难，在这里直接用前辈的结果
// * 空间复杂度：只需要一个temp临时变量来交换数据，所以O(1)

function bubbleSort(arr){
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      const tmp = arr[j];
      if(tmp < arr[j-1]){
        arr[j] = arr[j-1];
        arr[j-1] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([7,1,5,2,9,4,3,8]));

