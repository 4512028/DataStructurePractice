// 203Stack

class Stack {
  constructor() {
    this.listItems = [];
    this.count = 0;
  }

  push(number) {
    this.listItems[this.count] = number;
    this.count += 1;
    console.log("item pushed ");
    return this.count - 1;
  }

  pop() {
    if (this.count == 0) return undefined;
    let deleteItem = this.listItems[this.count - 1];
    console.log(deleteItem, "Item popoed");
    this.count -= 1;
    return deleteItem;
  }
}

const stack = new Stack();

stack.push(123);
stack.push(222);
stack.push(333);
stack.pop();

console.log(stack.listItems, "skdj");
