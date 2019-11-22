/*
* 直接插入排序（稳定算法）
* 把list分为前半部分有序和后半部分无序，然后遍历后半部分，把里面的值插入有序部分内。
* 用两个for循环实现，外层i用来控制数组的数据量，内层用来找到a[i]需要插入的位置
* 时间复杂度：最好情况是数组有序，依次把数据放到前一个数的后面   O(n)
* 最坏情况是数组逆序，遍历n次数组，每次都需要把n个数据向后移动  O(n)
* 平均情况      O(n)
* 空间复杂度：需要一个临时变量temp来存储即将插入的数 据   所以   O(1)
* 
*/

function insert(arr) {
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] < arr[i -1]){
      let j;
      const tmp = arr[i];
      for (j = i-1; j >= 0 && tmp < arr[j]; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j+1] = tmp;
    }
  }
  return arr;
}

console.log(insert([7,1,5,2,9,4,3,8]));



