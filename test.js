let obj = {
  a: 1,
  b: 1,
};

Object.defineProperty(obj, "a", {
  enumerable: true,
  configurable: false,
  writable: false,
  value: "static",
});
console.log(obj.a);

let keys = Object.keys(obj);
console.log(keys);

for (let i in obj) {
  console.log(i);
}
