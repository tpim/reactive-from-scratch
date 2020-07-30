# 原型

## 一、概念

- 每个对象都有**proto** ( 除了 var obj = Object.create(null) )
- 函数是 `Function` 的实例，函数的`prototype`是 Object 的 prototype
- typeof Object == "function"
- `Function.prototype` 和 `Function.__proto__` 相等
- `Object.prototype.__proto__` 指向 null

Object 是全局的

```javascript
let a1 = {};
let a2 = {};
console.log(Object.getPrototypeOf(a1) === Object.getPrototypeOf(a2)); // true
```

没有父亲的对象

```javascript
let hd = Object.create(null, {
  name: {
    value: "tpim",
  },
});
console.log(hd);
console.log(hd.hasOwnProperty("name"));
```

![2020-07-30-23-47-55-6JodQ8-Snipaste_2020-07-30_23-40-16](https://imgs-201531.oss-cn-hongkong.aliyuncs.com/uPic/2020-07-30-23-47-55-6JodQ8-Snipaste_2020-07-30_23-40-16.png)

为长辈添加方法

```javascript  let hd = {
        show() {
          console.log("show");
        },
        render() {
          console.log("hd render");
        },
      };
      hd.__proto__.render = function () {
        console.log("render");
      };
```

## 函数

```javascript
function User() {}
console.dir(User);
```

![2020-07-31-00-09-04-eUtj1V-aDAJYu](https://imgs-201531.oss-cn-hongkong.aliyuncs.com/uPic/2020-07-31-00-09-04-eUtj1V-aDAJYu.png)

```javascript
let p = new User(); // p 的父级指向 User 的父级
p.show();
console.log(User.prototype === p.__proto__); // true
```

![2020-07-31-00-22-50-oIcepw-g4Surj](https://imgs-201531.oss-cn-hongkong.aliyuncs.com/uPic/2020-07-31-00-22-50-oIcepw-g4Surj.png)

把 User 当做对象使用时候，他的父类是 `User.__proto__`。 当使用 User 产生实例的时候，User.prototype 等于 `p.__proto__`。
![2020-07-31-00-37-04-Uium15-2yETZD](https://imgs-201531.oss-cn-hongkong.aliyuncs.com/uPic/2020-07-31-00-37-04-Uium15-2yETZD.png)

```javascript
let o = new Object();
Object.prototype.show_aaa = function () {
  console.log("baidu.com");
};

function User() {}
console.dir(User);

let u = new User();
console.dir(u);
console.log(User.prototype.__proto__ === User.__proto__.__proto__);
console.log(User.prototype.__proto__ === u.__proto__.__proto__);
u.show_aaa();
```

![2020-07-31-00-56-39-zxHxzX-8u32Q7](https://imgs-201531.oss-cn-hongkong.aliyuncs.com/uPic/2020-07-31-00-56-39-zxHxzX-8u32Q7.png)

## 继承

```javascript
let hd = {};
let parent = {
  name: "parent",
  show() {
    console.log("is: " + this.name);
  },
};
Object.setPrototypeOf(hd, parent);
hd.show(); //this 指向调用它的对象
```

通过对象创造另一个对象

```javascript
function User(name) {
  this.name = name;
}
let zhangsan = new User("zhangsan");
let lisi = new zhangsan.__proto__.constructor("lisi");
console.log(lisi);
```
