# 原型

## 一、概念

1. 只有函数才有`prototype`,实例只有 `__proto__`
   > 我们创建的每个函数都有一个 prototype（原型）属性，这个属性是一个指针，指向一个对象，
   > 而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。
   > 无论什么时候，只要创建了一个新函数，就会根据一组特定的规则为该函数创建一个 prototype 属性，这个属性指向函数的原型对象。在默认情况下，所有原型对象都会自动获得一个 constructor（构造函数）属性，这个属性包含一个指向 prototype 属性所在函数的指针。

**JavaScript 的 prototype 是仅函数拥有, 而对象也拥有 prototype 是源于其 constructor 属性所拥有的 prototype**

2. 函数是 `Function` 的实例，函数的`prototype`是 Object 的实例
3. `Function.prototype` 和 `Function.__proto__` 相等
4. `Object.prototype.__proto__` 指向 null
