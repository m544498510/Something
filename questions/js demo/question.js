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
Promise.some = function (promiseArr){
  const rejectErrorArr = [];
  return new Promise(((resolve, reject) => {
    promiseArr.forEach(promise => {
      promise
        .then(data => resolve(data))
        .catch(err => {
          rejectErrorArr.push(err);
          if(rejectErrorArr.length === promiseArr.length){
            reject(rejectErrorArr);
          }
        })
    })
  }))
};
/*
const p = new Promise(resolve => setTimeout(() => resolve('settimeout'), 0));
Promise.some([p, Promise.resolve('1'), Promise.resolve('2')])
  .then(data => console.log('resolve', data))
  .catch(e => console.log('reject', e));
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
//serializationSymbol();

/***
 * 4. 给定一个字符串，找出其中无重复字符的最长子字符串长度
 */
function getNoRepeatWordSubstr(str){
  let substr = '';
  let tmpArr = [];
  str.split('').forEach(word => {
    if(tmpArr.includes(word)){
      substr = compare(substr, tmpArr);
      const repeatIndex = tmpArr.indexOf(word);
      tmpArr.splice(0, repeatIndex + 1);
    }
    tmpArr.push(word);
  });
  substr = compare(substr, tmpArr);
  return substr;
  
  function compare(str, arr){
    if(str.length < arr.length){
      str = arr.join('');
    }
    return str;
  }
}

//console.log(getNoRepeatWordSubstr("qweqasderty"));

/***
 * 5. 实现超出整数存储范围的两个大正整数相加
 */

function bigIntAddtion(num1, num2){
  const maxLen = 4;
  const num1Tmp = parseBigInt(num1);
  const num2Tmp = parseBigInt(num2);
  const result = [];
  let needAdd1 = false;
  for (let i = 0; i < num1Tmp.length || i < num2Tmp.length; i++) {
    const tmp1 = parseInt(num1Tmp[i]) || 0;
    const tmp2 = parseInt(num2Tmp[i]) || 0;
    
    let resultTmp =  tmp1 + tmp2;
    if(needAdd1){
      resultTmp += 1;
    }
    resultTmp = String(resultTmp);
    
    if(resultTmp.length > maxLen){
      result.unshift(resultTmp.slice(1, resultTmp.length));
      needAdd1 = true;
    }else{
      result.unshift(resultTmp);
      needAdd1 = false;
    }
  }
  return result.join("");
  
  function parseBigInt(str){
    const result = [];
    const len = str.length;
    for (let i = len - 1; i >= 0; i-= maxLen ) {
      let start = i - maxLen + 1;
      start = start >= 0 ? start : 0; 
      result.push(str.slice(start, i + 1));
    }
    return result;
  }
}
//console.log(bigIntAddtion('1115111', '11115111'));

/***
 *  6. 将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组
 */
function flatArray(arr) {
  return [...(new Set(arr.flat(Infinity)))].sort((a, b) => a - b);
}
//console.log(flatArray([[3,2,1],[3,1,2],[9,7,[7,4],[[5,[6,8]]]]]));
 



















