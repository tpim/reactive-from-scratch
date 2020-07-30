# 原型

## 一、概念

- 每个对象都有**proto** ( 除了 var obj = Object.create(null) )
- 只有函数才有`prototype`,实例只有 `__proto__`
  > 我们创建的每个函数都有一个 prototype（原型）属性，这个属性是一个指针，指向一个对象，
  > 而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。
  > 无论什么时候，只要创建了一个新函数，就会根据一组特定的规则为该函数创建一个 prototype 属性，这个属性指向函数的原型对象。在默认情况下，所有原型对象都会自动获得一个 constructor（构造函数）属性，这个属性包含一个指向 prototype 属性所在函数的指针。

**JavaScript 的 prototype 是仅函数拥有, 而对象也拥有 prototype 是源于其 constructor 属性所拥有的 prototype**

- 函数是 `Function` 的实例，函数的`prototype`是 Object 的实例
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

## 记录

- {}的 `__proto__` 的 Object
- constructor -> Function -> Object
-
