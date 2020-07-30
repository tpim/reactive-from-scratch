let obj = {
  a: 1,
  b: 2,
};

let a = obj;
obj.a = 100;
console.log(obj);
a.b = 1111;

console.log(obj);
