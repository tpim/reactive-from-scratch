// function Person(first, last, age, gender, interests) {
//   // property and method definitions
//   this.name = {
//     "first": first,
//     "last": last,
//   };
//   this.age = age;
//   this.gender = gender;
//   //...see link in summary above for full definition
// }

// let person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);
// console.log(person1);

// Person.prototype.say = function () {
//   console.log(" hihi hi ");
// };

// person1.say();

// let concatArray = function (chars) {
//   return chars.reduce(function (a, b) {
//     return a.concat(b);
//   });
// };

// let concatArray = function (chars) {
//   return chars
//     .map(function (e) {
//       return +e + 1 + "";
//     })
//     .reduce(function (a, b) {
//       return a.concat(b);
//     });
// };

// let res = concatArray(["1", "2", "3"]);
// console.log(res);

//柯里化
let mutiple = function (a) {
  return function (b) {
    return +b * a + "";
  };
};

let plus = function (a) {
  return function (b) {
    return +b + a + "";
  };
};

var concatArray = function (chars, stylishChar) {
  return chars.map(stylishChar).reduce(function (a, b) {
    return a.concat(b);
  });
};

console.log(concatArray(["1", "2", "3"], plus(2)));

let setTail = function (tail) {
  return function (content) {
    return content + tail;
  };
};

let newArr = [1, 2, 3, 4].map(setTail("~"));
console.log(newArr);
