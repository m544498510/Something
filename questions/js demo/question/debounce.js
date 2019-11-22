
let timeoutId = null;
function debounce(waitTime, handle){
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    console.log(Date.now());
    handle();
  }, waitTime);
  
  return () => clearTimeout(timeoutId);
}

console.log(Date.now());
debounce(1000, ()=>{console.log("first")});
setTimeout(() => debounce(1000, ()=>{console.log("first")}), 500);
setTimeout(() => debounce(1000, ()=>{console.log("second")}), 1601);
setTimeout(() => debounce(1000, ()=>{console.log("second")}), 2000);




