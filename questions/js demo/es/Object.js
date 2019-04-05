
const parent = {
  parentStr: "parentStr",
  [1]: "parentNum",
  [Symbol("parentSymbol")]: "parentSymbol",
  parentUnEnum: "parentUnEnum"
};
Object.defineProperty(parent, "parentUnEnum", {
  enumerable: false
});

const child = {
  childStr: "childStr",
  [2]: "childNum",
  [Symbol("childSymbol")]: "childSymbol",
  childUnEnum: "childUnEnum"
};
Object.defineProperty(child, "childUnEnum", {
  enumerable: false
});

Object.setPrototypeOf(child, parent);

//1.
let props = [];
for (const key in child) {
  props.push(key);
}
console.log(props);

console.log("______________ for...in ____________________");

//2 
const keys = Object.keys(child);
console.log(keys);
console.log("______________ Object.keys ____________________");

//3
const propertyNames = Object.getOwnPropertyNames(child);
console.log(propertyNames);
console.log("______________ getOwnPropertyNames ____________________");

//4
const symbols = Object.getOwnPropertySymbols(child);
console.log(symbols);
console.log("______________ getOwnPropertySymbols ____________________");

//5 
const allKeys = Reflect.ownKeys(child);
console.log(allKeys);
console.log("______________ ownKeys ____________________");




