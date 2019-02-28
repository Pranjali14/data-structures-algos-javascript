function LinkedList() {
  this.arr = [];
}

LinkedList.prototype.enqueue = function(data) {
  this.arr.push(data);
};

LinkedList.prototype.dequeue = function(data) {
  this.arr.shift(data);
};

LinkedList.prototype.getTop = function(data) {
  if (this.arr[0]) {
    return this.arr[0];
  }
  return null;
};

LinkedList.prototype.getLength = function(data) {
  return this.arr.length;
};

const x = new LinkedList();

x.enqueue(2);
x.enqueue(3);
x.enqueue(4);
console.log(x.getLength());
console.log(x.getTop());
console.log(x);

x.dequeue();

console.log(x);
