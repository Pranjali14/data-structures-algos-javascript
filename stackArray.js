function Stack() {
  this._arr = [];
  this._maxlength = 2;
}

Stack.prototype.push = function(data) {
  if (this._arr.length < this._maxlength) {
    this._arr.push(data);
  } else {
    throw new Error("Exceed max stack size " + this._maxlength);
  }
};

var x = new Stack();

x.push(1);
x.push(2);
console.log(x);
x.push(2);
