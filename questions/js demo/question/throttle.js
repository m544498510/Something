let timeoutId = null;
function throttle(waitTime, handle){
  if(!timeoutId){
    timeoutId = setTimeout(()=> {
      timeoutId = null;
      handle();
    }, waitTime);
  }
  return () => {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
}
throttle(1000, () => console.log("first"));
throttle(1000, () => console.log("first"));
throttle(1000, () => console.log("first"));
throttle(1000, () => console.log("first"));

setTimeout(() => {
  throttle(1000, () => console.log("second"));
  throttle(1000, () => console.log("second"));
  throttle(1000, () => console.log("second"));
  throttle(1000, () => console.log("second"));
}, 1001);


