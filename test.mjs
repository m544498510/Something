
const p = new Promise(resolve => {
  setTimeout(() => {
    resolve("123");
  },100);
});

p.then(a => console.log(a));
console.log(new Date());
setTimeout(() => {
  console.log(new Date());
  p.then(a => console.log(new Date(), a));
},1000);
