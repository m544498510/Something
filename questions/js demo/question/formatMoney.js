function formatMoney(money) {
  const tmp = money.toString().split('.');
  const intStr = tmp[0];
  const len = intStr.length;
  
  const resultArr = [];
  const count = Math.ceil(len / 3);
  for (let i = 0; i < count; i++) {
    if(i !== 0){
      resultArr.unshift(",");
    }
    let start = len - 3 * (i + 1);
    start = start > -1 ? start : 0;
    const subStr = intStr.slice(start, len - 3 * i);
    resultArr.unshift(subStr);
  }
  
  const decimal = tmp[1] ? `.${tmp[1]}`: "";
  return resultArr.join("") + decimal;
}

console.log(formatMoney(1123456789));
console.log(formatMoney(1123456789.123));


