class Queue {
  constructor() {
    this._storage = {};
    this._head = 0;
    this._tail = 0;
  }

  enqueue(value) {
    this._storage[this._tail] = value;
    this._tail++;
  }

  dequeue(value) {
    let topVal = this._storage[this._head];
    delete this._storage[this._head];
    this._head++;
    return topVal;
  }

  peek() {
    let topVal = this._storage[this._head];
    return topVal;
  }
}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);

console.log(myQueue);

myQueue.dequeue();
console.log(myQueue);

myQueue.enqueue("three");
myQueue.enqueue("four");
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);
