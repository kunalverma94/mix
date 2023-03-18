const pub = (function () {
  this.x = [];
  this.add = function (p) {
    x.push(p);
  }
  this.remove = function (p) {
    if (p % 2 == 0)
      return
    const i = x.indexOf(p);
    if (i < 0)
      return
    x.splice(i, 1);
  }

  this.print = function () {
    console.log(x.join('-'))
  }

  return {
    add: this.add,
    remove: this.remove,
    print: this.print
  }
})();

pub.add(1);
pub.add(2);
pub.add(7);
pub.remove(7);

pub.print()