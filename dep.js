class Dep {
  constructor() {
    this.taskList = new Set();
  }

  getDep() {
    if (activeUpdate) {
      this.taskList.add(activeUpdate);
    }
  }

  notify() {
    this.taskList.forEach((item) => item());
  }
}
let activeUpdate = null;

function autorun(update) {
  const wrappedUpdate = () => {
    activeUpdate = wrappedUpdate;
    console.log("invoke update func");
    update();
    activeUpdate = null;
  };
  wrappedUpdate();
}

function scan(obj) {
  Object.keys(obj).forEach((key) => {
    let internelValue = obj[key];
    const dep = new Dep();

    Object.defineProperty(obj, key, {
      get() {
        dep.getDep();
        return internelValue;
      },
      set(newValue) {
        const changed = internelValue !== newValue;
        internelValue = newValue;
        if (changed) {
          dep.notify();
        }
      },
    });
  });
  return obj;
}

var state = {
  count: 0,
};

scan(state);

autorun(() => {
  //get operator.
  a = state.count;
});

state.count = 1;

console.log(a);

state.count = 2;

console.log(a);
