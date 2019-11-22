#  加密算法

1. Base64位加密 （可加密解密）

2. HMAC加密 （不可解密）

   Hash-based Message Authentication Code

   以一个密钥和一个消息为输入，通过哈希算法生成一个消息摘要作为输出（加盐）。

3. AES加密 （密钥解密）
   对称密钥加密，加密解密都是用同一个密钥。

4. RSA加密（公钥加密，私钥解密）

   非对称加密





# 二分法查找

1. 用于数据量大的有序List
2. 时间复杂度：T(n)=O(log2n)， 空间复杂度：S(n)=logn





# 排序算法

#### 1、稳定排序和非稳定排序

简单地说就是所有相等的数经过某种排序方法后，仍能保持它们在排序之前的相对次序，我们就
说这种排序方法是稳定的。反之，就是非稳定的。
比如：一组数排序前是a1,a2,a3,a4,a5，其中a2=a4，经过某种排序后为a1,a2,a4,a3,a5，
则我们说这种排序是稳定的，因为a2排序前在a4的前面，排序后它还是在a4的前面。假如变成a1,a4,
a2,a3,a5就不是稳定的了。

#### 2、内排序和外排序

在排序过程中，所有需要排序的数都在内存，并在内存中调整它们的存储顺序，称为内排序；
在排序过程中，只有部分数被调入内存，并借助内存调整数在外存中的存放顺序排序方法称为外排序。

#### 3、算法的时间复杂度和空间复杂度

所谓算法的时间复杂度，是指执行算法所需要的计算工作量。
一个算法的空间复杂度，一般是指执行这个算法所需要的内存空间。



#### **4 、各种排序算法性能比较：**

　　<table>
<thead>
<tr>
<th style="text-align:center">排序方法</th>
<th style="text-align:center">平均时间</th>
<th style="text-align:center">最好时间</th>
<th style="text-align:center">最坏时间</th>
<th style="text-align:left">辅助空间</th>
<th style="text-align:left">稳定性</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">简单排序 - 冒泡排序</td>
<td style="text-align:center">O(n<sup>2</sup>)</td>
<td style="text-align:center">O(n)</td>
    <td style="text-align:center">O(n^2)</td>
<td style="text-align:left">O(1)</td>
<td style="text-align:left">稳定</td>
</tr>
<tr>
<td style="text-align:center">简单排序 - 选择排序</td>
<td style="text-align:center">O(n<sup>2</sup>)</td>
<td style="text-align:center">O(n<sup>2</sup>)</td>
<td style="text-align:center">O(n<sup>2</sup>)</td>
<td style="text-align:left">O(1)</td>
<td style="text-align:left">不稳定</td>
</tr>
<tr>
<td style="text-align:center">简单排序 - 插入排序</td>
<td style="text-align:center">O(n)</td>
<td style="text-align:center">O(n)</td>
    <td style="text-align:center">O(n<sup>2</sup>)</td>
<td style="text-align:left">O(1)</td>
<td style="text-align:left">稳定</td>
</tr>
<tr>
<td style="text-align:center">快速排序</td>
<td style="text-align:center">O(nlogn)</td>
    <td style="text-align:center">O(nlogn)</td>
<td style="text-align:center">O(n<sup>2</sup>)</td>
<td style="text-align:left">O(logn)</td>
<td style="text-align:left">不稳定</td>
</tr>
<tr>
<td style="text-align:center">堆排序</td>
<td style="text-align:center">O(nlogn)</td>
<td style="text-align:center">O(nlogn)</td>
    <td style="text-align:center">O(nlogn)</td>
<td style="text-align:left">O(1)</td>
<td style="text-align:left">不稳定</td>
</tr>
<tr>
<td style="text-align:center">归并排序</td>
<td style="text-align:center">O(nlogn)</td>
    <td style="text-align:center">O(nlogn)</td>
<td style="text-align:center">O(nlogn)</td>
<td style="text-align:left">O(n)</td>
<td style="text-align:left">稳定</td>
</tr>
<tr>
<td style="text-align:center">希尔排序</td>
<td style="text-align:center">O(nlogn<sup>2</sup>) = O(n<sup>1.3</sup>)</td>
    <td style="text-align:left">O(n)</td>
<td style="text-align:center">O(n<sup>2</sup>)</td>
<td style="text-align:left">O(n)</td>
<td style="text-align:left">不稳定</td>
</tr>
<tr>
<td style="text-align:center">计数排序</td>
<td style="text-align:center">O(n + k)</td>
<td style="text-align:center"></td>
    <td style="text-align:center">O(n + k)</td>
<td style="text-align:left">O(k)</td>
<td style="text-align:left">稳定</td>
</tr>
<tr>
<td style="text-align:center">桶排序</td>
<td style="text-align:center">O(n + k)</td>
    <td style="text-align:center"></td>
<td style="text-align:center">O(n<sup>2</sup>)</td>
<td style="text-align:left">O(n)</td>
<td style="text-align:left">稳定</td>
</tr>
<tr>
<td style="text-align:center">基数排序</td>
<td style="text-align:center">O(nk)</td>
<td style="text-align:center">O(nk)</td>
    <td style="text-align:center">O(nk)</td>
<td style="text-align:left">O(n + k)</td>
<td style="text-align:left">不稳定</td>
</tr>
</tbody>
</table>

#### 5、 具体

+ ### 冒泡排序

  通过与相邻元素的比较和交换来把小的数交换到最前面，或者把大的数交换到最后面。

+ ### 选择排序

  选择排序的思想其实和冒泡排序有点类似，都是在一次排序后把最小的元素放到最前面。
  但是过程不同，冒泡排序是通过相邻的比较和交换。而选择排序是通过对整体的选择。

  其实选择排序可以看成冒泡排序的优化，因为其目的相同，只是选择排序只有在确定了最小数的前提下才进行交换，**大大减少了交换的次数。**

+ ### 插入排序

  插入排序不是通过交换位置而是通过比较找到合适的位置插入元素来达到排序的目的。

+ ### 快速排序

  其实其思想是来自冒泡排序，冒泡排序是通过相邻元素的比较和交换把最小的冒泡到最顶端，而快速排序是比较和交换小数和大数，这样一来不仅把小数冒泡到上面同时也把大数沉到下面。

+ ### 堆排序

  堆排序是借助堆来实现的选择排序。
  注意：如果想升序排序就使用大顶堆，反之使用小顶堆。原因是堆顶元素需要交换到序列尾部。

+ ### 归并排序

  归并排序使用了递归分治的思想。
  把待排序列看成由两个有序的子序列，然后合并两个子序列，然后把子序列看成由两个有序序列...倒着来看，其实就是先两两合并，然后四四合并...最终形成有序序列。

+ ### 希尔排序

  希尔排序是插入排序的一种高效率的实现。
  简单的插入排序中，如果待排序列是正序时，时间复杂度是O(n)，如果序列是基本有序的，使用直接插入排序效率就非常高。
  希尔排序就利用了这个特点。基本思想是：先将整个待排记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录基本有序时再对全体记录进行一次直接插入排序。

+ ### 计数排序

  前提条件：待排序的数要满足一定的范围的整数，而且计数排序需要比较多的辅助空间。其基本思想是，用待排序的数作为计数数组的下标，统计每个数字的个数。然后依次输出即可得到有序序列。

+ ### 桶排序

  桶排序算是计数排序的一种改进和推广。
  基本思想：使用**映射函数**将待排序的数组划分成M个的子区间(桶) 。接着对每个桶中的所有元素进行比较排序(可以使用快排)。然后依次枚举输出每个桶中的全部内容即是一个有序序列。
  桶排序之所以能够高效，其关键在于这个映射函数，它必须做到：如果关键字`k1<k2`，那么`f(k1)<=f(k2)`。**也就是说第 i 个桶中的最小数据都要大于第 i - 1 个桶中最大数据。**

+ ### 基数排序

  基数排序是一种和前面排序方式不同的排序方式，基数排序不需要进行关键字之间的比较。
  基数排序是一种借助**多关键字排序**思想对单逻辑关键字进行排序的方法。所谓的多关键字排序就是有多个优先级不同的关键字。
  如果对数字进行排序，那么个位、十位、百位就是不同优先级的关键字，如果要进行升序排序，那么个位、十位、百位优先级依次增加。

  