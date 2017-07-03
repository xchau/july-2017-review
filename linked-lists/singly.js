class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class SinglyLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getInfo() {
    console.log(this.head);
    console.log(this.tail);
    console.log('LENGTH: ' + this.length);
  }

  enumerate() {
    let currentNode = this.head;
    let counter = this.length;

    while(counter) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
      counter -= 1;
    }
  }

  __getNodeAt(idx) {
    if (!this.length) return;
    if (this.length === 1) return this.head;

    let currentNode = this.head;
    let counter = idx;

    while(counter) {
      currentNode = currentNode.next;
      counter--;
    }

    return currentNode;
  }

  __getNodeAtRecursive(idx, node=this.head) {
    if (!idx) return node;

    return this.__getNodeAtRecursive(idx - 1, node.next);
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      const lastNode = this.__getNodeAt(this.length - 1);

      lastNode.next = newNode;
      this.tail = newNode;
    }

    this.length +=1;

    return newNode;
  }

  pop() {
    if (!this.length) return;
    if (this.length === 1) {
      const deleted = this.head;

      this.head = null;
      this.tail = null;
      this.length -= 1;

      return deleted;
    }

    const previous = this.__getNodeAt(this.length - 2);
    const deleted = previous.next;

    previous.next = null;
    this.tail = previous;
    this.length -= 1;

    return deleted;
  }

  shift() {
    if (!this.length) return;
    if (this.length === 1) {
      return this.pop();
    }

    const oldHead = this.head;

    this.head = oldHead.next;
    this.length -= 1;

    return oldHead;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;

      return newNode;
    }

    const oldHead = this.head;

    newNode.next = oldHead;
    this.head = newNode;
    this.length += 1;

    return newNode;
  }

  reverse() {
    if (!this.length) return;
    if (this.length === 1) return this.head;

    let prev = null;
    let curNode = this.head;
    let next;

    while(curNode) {
      next = curNode.next;
      curNode.next = prev;
      prev = curNode;
      curNode = next;
    }

    this.tail = this.head;
    this.head = prev;

    return this.head;
  }
};

const ll = new SinglyLL();

ll.push(4);
ll.push(7);
ll.push(2);
ll.push(8);
ll.shift();
ll.push(5);
// ll.getInfo();
// ll.enumerate();
ll.reverse();
ll.enumerate();
console.log(ll.__getNodeAtRecursive(1));
