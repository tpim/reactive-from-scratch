let NBAcol = {};
NBAcol.list = [];

NBAcol.on = function (fun) {
  this.list.push(fun);
};

NBAcol.emit = function () {
  this.list.forEach((cb) => {
    cb.apply(this, arguments);
  });
};

NBAcol.on(function (team) {
  console.log("observe:" + team);
});

NBAcol.on(function (team) {
  console.log("observe:" + team);
});
NBAcol.emit("huren");
NBAcol.emit("yongshi");
