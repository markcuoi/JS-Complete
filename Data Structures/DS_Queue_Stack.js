class Queue {
  constructor() {
    this.data = data;
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    return this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
