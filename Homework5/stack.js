class Stack {
  constructor(maxSize = 10) {
    if (!Number.isFinite(maxSize) || maxSize <= 0) {
      throw new Error('Not a valid number of quantity');
    }

    this.maxSize = maxSize;
    this.items = [];
    this.count = 0;
  }

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error('Non-iterable');
    }

    const stack = new Stack([...iterable].length);
    stack.items = [...iterable];

    return stack;
  }

  push(elem) {
    if (this.count >= this.maxSize) {
      throw new Error('Stack overflow');
    }

    this.items[this.count] = elem;
    this.count += 1;
  }

  pop() {
    if (this.count === 0) {
      throw new Error('Stack is empty');
    }

    let deletedItem = this.items[this.count - 1];

    this.count -= 1;

    return deletedItem;
  }

  peek() {
    if (this.count === 0) {
      return null;
    }

    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return Object.values(this.items);
  }
}

module.exports = { Stack };
