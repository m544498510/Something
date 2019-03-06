/***
 * 1、写一个js函数，实现对一个数字每3位加一个逗号，如输入100000， 
 *    输出100,000（不考虑负数，小数）—百度前端面试题
 */

function simpleToLocaleString1(num){
  const resultArr = [];
  const tmpArr = String(num).split('');
  const len = tmpArr.length;
  for (let i = 1; i <= len; i++) {
    let str = tmpArr[len - i];
    resultArr.push(str);
    if(i % 3 === 0){
      resultArr.push(',');
    }
  }
  return resultArr.reverse().join('');
}
function simpleToLocaleString2(num){
  const tmpArr = [];
  sliceStr(String(num));
  
  return tmpArr.reverse().join(',');
  function sliceStr(str){
    if(str.length > 3){
      tmpArr[tmpArr.length] = str.slice(-3);
      sliceStr(str.slice(0, -3));
    } else {
      tmpArr[tmpArr.length] = str;
    }
  }
}
//console.log(simpleToLocaleString2(10000000000));

/**
 * 2. 实现 Promise.some([]) 方法，有一个 resolve ，就resolve，全部 reject，才 reject
 */

/**
 * 3. 
 */
function serializationSymbol(){
  const tmp = {
    a: Symbol(),
    b: 10
  };
  console.log(JSON.stringify(tmp));
}
serializationSymbol();