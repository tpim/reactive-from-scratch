class Vue {
  constructor(opt) {
    this.opt = opt;
    this.observe(obt.data);
    let root = document.querySelector(opt.el);
    this.compile(root);
  }
  observe(data) {
    Object.keys(data).forEach((key) => {
      let obv = new Observe();
      data["_" + key] = data[key];
      Object.defineProperty(data, key, {
        get() {
          Observet.target && obv.addSubNode(Observe.target);
          return data["_" + key];
        },
        set(newVal) {
          obv.update(newVal);
          data["_" + key] = newVal;
        },
      });
    });
  }
  compile(node) {
    [].forEach.call(node.childNodes, (child) => {
      if (!child.firstElementChild && /\{\{(.*)\}\}/.test(child.innerHTML)) {
        let key = RegExp.$1.trim();
        child.innerHTML = child.innerHTML.replace(
          new RegExp("\\{\\{\\s*" + key + "\\s*\\}\\}", "gm"),
          this.opt.data[key],
        );
        Observe.target = child;
        this.opt.data[key];
        Observe.target = null;
      } else if (child.firstElementChild) {
        this.compile(child);
      }
    });
  }
}

class Observe {
  constructor() {
    this.subNode = [];
  }
  addSubNode(node) {
    this.subNode.push(node);
  }
  update(newVal) {
    this.subNode.forEach((node) => {
      node.innerHTML = newVal;
    });
  }
}
