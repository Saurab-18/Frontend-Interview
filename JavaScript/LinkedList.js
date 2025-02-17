class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  deleteHead() {
    if (this.head == null) return null;
    let temp = this.head;
    this.head = this.head.next;
    this.size--;
    return temp.value;
  }

  deleteTail() {
    if (this.isEmpty()) return null;
    let removedValue;
    if (this.head == null) {
      removedValue = this.head.value;
    } else {
      let prev = this.head;
      while (prev.next.next) {
        prev = prev.next;
      }
      removedValue = prev.next.value;
      prev.next = null;
    }
    this.size--;
    return removedValue;
  }

  prepend(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return "Cannot add node at this index";
    }
    if (index == 0) {
      this.prepend(value);
    } else {
      let node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return "Cannot remove from node this index";
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value == value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let listValue = [];
      while (curr) {
        listValue.push(curr.value);
        curr = curr.next;
      }
      return listValue;
    }
  }
}

const list = new LinkedList();
list.append(31);
list.prepend(5);
list.prepend(10);
list.prepend(15);
list.prepend(12);
list.append(21);
list.insert(54, 3);
console.log(list.print());
list.deleteHead();
list.deleteTail();
list.removeFrom(2);
console.log(list.print());
