class Stack {
  constructor(maxSize = 10) {
    if (!Number.isFinite(maxSize)) {
      throw new Error('Not a valid number of quantity');
    }

    this.maxSize = maxSize;
    this.container = [];
    this.count = 0;
  }

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error('Non-iterable');
    }

    const stack = new Stack([...iterable].length);
    stack.container = [...iterable];

    return stack;
  }

  push(elem) {
    if (this.count >= this.maxSize) {
      throw new Error('Stack overflow');
    }

    this.container[this.count] = elem;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      throw new Error('Stack is empty');
    }

    const deletedItem = this.container[this.count - 1];

    this.count--;
    delete this.container[this.count];

    return deletedItem;
  }

  peek() {
    if (this.count === 0) {
      return null;
    }

    return this.container[this.count - 1];
  }

  isEmpty() {
    return this.container.length === 0;
  }

  toArray() {
    return Object.values(this.container);
  }
}

module.exports = { Stack };
