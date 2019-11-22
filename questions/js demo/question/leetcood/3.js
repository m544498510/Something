console.log(lengthOfLongestSubstring("abcabcbb"));  //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3

function lengthOfLongestSubstring(str){
  const arr = str.split("");
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    const map = {
      [word]: true
    };
    for (let j = i + 1; j < arr.length; j++) {
      const otherWord = arr[j];
      if(map[otherWord]){
        if(maxLength < j - i){
          maxLength = j - i;
        }
        break;
      } else {
        map[otherWord] = true;
      }
    }
  }
  return maxLength;
}


