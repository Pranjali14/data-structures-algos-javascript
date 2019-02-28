class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
    this._maxLength = 100;
  }

  push(value) {
    //type check value
    if (value) {
      this._storage[this._length] = value;
      this._length++;
    }
  }

  //    returns undefined if stack is empty
  pop() {
    let topVal;
    if (this._length) {
      topVal = this._storage[this._length - 1];
      delete this._storage[this._length - 1];
      this._length--;
    }
    return topVal;
  }

  //  Returns the last value(for stack and first for queue) in without deleting it
  peek() {
    let topVal;
    if (this._length) {
      topVal = this._storage[this._length - 1];
    }
    return topVal;
  }

  isEmpty() {
    return !Boolean(this._length);
  }

  isFull() {
    return this._length === this._maxLength;
  }

  getSize() {
    return this._length;
  }
}
const callStack = new Stack();
callStack.push("one");
callStack.push("two");
callStack.push(null);
callStack.push(undefined);
console.log(callStack._length);

console.log(callStack.pop());
console.log(callStack.peek());
console.log(callStack.pop());
console.log(callStack.pop());
console.log(callStack.isEmpty());
console.log(callStack.pop());
console.log(callStack.isFull());
console.log(callStack.getSize());
