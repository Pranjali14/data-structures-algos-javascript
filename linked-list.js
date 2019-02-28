class Node {
  constructor(val) {
    this._value = val;
    this._next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  insert(elem) {
    let node = new Node(elem);
    if (!this._head) {
      this._head = node;
    } else {
      this._tail._next = node;
    }
    this._tail = node;
  }

  remove(elem) {
    let prev = null;
    let currentNode = this._head;
    while (currentNode) {
      if (currentNode._value === elem) {
        if (prev === null) {
          // if the head is the node to be deleted then we set the head to the next node
          this._head = currentNode._next;
        } else {
          prev._next = currentNode._next;
        }
        currentNode._next = null;
        return currentNode;
      }
      prev = currentNode;
      currentNode = currentNode._next;
    }
  }

  removeTail() {
    let currentNode = this._head;
    while (currentNode._next) {
      if (currentNode._next !== this.tail) {
        currentNode = currentNode._next;
      }
    }
    currentNode._next = null;
    this._tail = currentNode;
  }

  contains(val) {}

  isHead(node) {}

  isTail(node) {}
}

const myLinkedList = new LinkedList();

myLinkedList.insert(1);
myLinkedList.insert(2);
myLinkedList.insert(3);
myLinkedList.insert(4);
myLinkedList.insert(5);

console.log(myLinkedList);

myLinkedList.remove(2);

console.log(myLinkedList.remove(1));
console.log(myLinkedList);
