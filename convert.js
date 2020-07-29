function convert(obj) {
  for (let i in obj) {
    transfrom(obj, i);
  }
}
const transfrom = (obj, i) => {
  let unKnow = obj[i];
  Object.defineProperty(obj, i, {
    get() {
      console.log(`getting "${i}": ${unKnow}`, unKnow);
      return unKnow;
    },
    set(value) {
      console.log(`setting "${i}" to ${value}`);
      unKnow = value;
    },
  });
};

let a = {
  a: 1,
  b: 2,
};

convert(a);
a.a;
a.a = 100;
