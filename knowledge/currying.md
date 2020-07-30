# 柯里化

## 1.概念

> 柯里化（英语：Currying），又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

> 在直觉上，柯里化声称“如果你固定某些参数，你将得到接受余下参数的一个函数”。
> ![2020-07-30-23-51-31-kCYBkv-JXRK4i8P3FoLySr](https://imgs-201531.oss-cn-hongkong.aliyuncs.com/uPic/2020-07-30-23-51-31-kCYBkv-JXRK4i8P3FoLySr.png)
> 在理论计算机科学中，柯里化提供了在简单的理论模型中，比如：只接受一个单一参数的 lambda 演算中，研究带有多个参数的函数的方式。

> 函数柯里化的对偶是 Uncurrying，一种使用匿名单参数函数来实现多参数函数的方法。例如：

```javascript
var foo = function (a) {
  return function (b) {
    return a * a + b * b;
  };
};
```

## 2.作用

柯里化有 3 个常见作用：

- 参数复用；
- 提前返回；
- 延迟计算/运行。

## 3.例子

```javascript
let setTail = function (tail) {
  return function (content) {
    return content + tail;
  };
};

let newArr = [1, 2, 3, 4].map(setTail("~"));
console.log(newArr);
```

```javascript
let setTail = function (tail) {
  return function (content) {
    return content + tail;
  };
};

let newArr = [1, 2, 3, 4].map(setTail("~"));
console.log(newArr);
```

```javascript
let surprise = setSurprise(
  function () {
    let allOfContent = [].slice.call(arguments);
    console.log(allOfContent);
  },
  "100000",
  "10000000"
);

function setSurprise(fn) {
  let args = [].slice.call(arguments, 1);
  return function () {
    let newArgss = args.concat([].slice.call(arguments));
    return fn.apply(null, newArgss);
  };
}

surprise(1, 2, 3, 4);
```
