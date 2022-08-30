class Node {
  constructor(elem) {
    this.data = elem;
    this.next = null;
  }
}

class Stack {
  constructor(maxSize = 10) {
    if (!Number.isFinite(maxSize) || maxSize <= 0) {
      throw new Error('Not a valid number of quantity');
    }

    this.top = null;
    this.maxSize = maxSize;
    this.count = 0;
  }

  static fromIterable(iterable) {
    const isIterable = iterable && Symbol.iterator in Object(iterable);

    if (!isIterable[Symbol.iterator]) {
      throw new Error('Non-iterable');
    }

    const valueLength = iterable.length;
    const stack = new Stack(valueLength);

    for (let value of iterable) {
      stack.push(value);
    }

    return stack;
  }

  push(elem) {
    if (this.count >= this.maxSize) {
      throw new Error('Stack overflow');
    }

    const node = new Node(elem);

    node.previous = this.top;
    this.top = node;
    this.count++;

    return this.top;
  }

  pop() {
    if (this.count === 0) {
      throw new Error('Stack is empty');
    }

    const deletedElem = this.top;
    this.top = this.top.previous;
    this.size--;

    return deletedElem.data;
  }

  peek() {
    if (this.top === null) {
      return null;
    }

    return this.top.data;
  }

  isEmpty() {
    return this.count === 0;
  }

  toArray() {
    if (this.top === null) {
      return null;
    }

    const arr = [];
    let current = this.top;

    for (let i = 0; i < this.count; i++) {
      arr[i] = current.data;
      current = current.next;
    }

    return arr.reverse();
  }
}

module.exports = { Stack };
