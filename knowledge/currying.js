let surprise = setSurprise(
  function () {
    let allOfContent = [].slice.call(arguments);
    console.log(allOfContent);
  },
  "100000",
  "10000000",
);

function setSurprise(fn) {
  let args = [].slice.call(arguments, 1);
  return function () {
    let newArgss = args.concat([].slice.call(arguments));
    return fn.apply(null, newArgss);
  };
}

surprise(1, 2, 3, 4);
