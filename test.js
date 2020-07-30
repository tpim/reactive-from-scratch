function Person(first, last, age, gender, interests) {
  // property and method definitions
  this.name = {
    "first": first,
    "last": last,
  };
  this.age = age;
  this.gender = gender;
  //...see link in summary above for full definition
}

let person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);
console.log(person1);

Person.prototype.say = function () {
  console.log(" hihi hi ");
};

person1.say();
