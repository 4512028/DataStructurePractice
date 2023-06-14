class Node {
  constructor(key, next = null) {
    this.data = key;
    this.next = next;
  }
}

class linkListClass {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert firstnode
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insert  lastnode
  insertlast(data) {
    let temp;
    let current = this.head;
    temp = new Node(data);

    if (this.head) {
      while (current.next) {
        current = current.next;
      }
      console.log(current.next, temp);
      current.next = temp;
      this.size++;
    } else {
      this.head = temp;
      this.size++;
    }
  }

  //insert at index
  insertindex(data, index) {
    if (index < 0 && index > this.index) return;
    if (index == 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const node = new Node(data);
    let current, preious;
    let counts = 0;
    current = this.head;

    while (counts < index) {
      preious = current;
      counts++;
      current = current.next;
    }
    node.next = current;
    preious.next = node;
    this.size++;
  }

  // get at index
  //insert at index
  getindex(index) {
    if (index < 0 && index > this.index) return;
    let current = this.head;
    let counts = 0;
    if (index == 0) {
      console.log(current.data);
    } else {
      while (counts < index) {
        counts++;
        current = current.next;
      }
      console.log(current.data);
    }
  }
  // remov at index
  //insert at index
  removeindex(index) {
    if (index < 0 && index > this.index) return;

    let current, preious;
    let counts = 0;
    current = this.head;
    if (index == 0) {
      this.head = current.next;
    } else {
      while (counts < index) {
        preious = current;
        counts++;
        current = current.next;
      }
      preious.next = current.nexts;
    }
    this.size -= 1;
  }
  //  clear list

  clearLinkList() {
    this.head = null;
    this.size = 0;
  }
  // print list date

  displayLinkList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Returns true if first list is
// present in second list
function findList(first, second) {
  var ptr1 = first,
    ptr2 = second;

  // If both linked lists are empty,
  // return true
  if (first == null && second == null) return true;

  // Else If one is empty and
  // other is not, return false
  if (first == null || (first != null && second == null)) return false;

  // Traverse the second list by
  // picking nodes one by one
  while (second != null) {
    // Initialize ptr2 with
    // current node of second
    ptr2 = second;

    // Start matching first list
    // with second list
    while (ptr1 != null) {
      // If second list becomes empty and
      // first not then return false
      if (ptr2 == null) return false;
      // If data part is same, go to next
      // of both lists
      else if (ptr1.data == ptr2.data) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
      }

      // If not equal then break the loop
      else break;
    }

    // Return true if first list gets traversed
    // completely that means it is matched.
    if (ptr1 == null) return true;

    // Initialize ptr1 with first again
    ptr1 = first;

    // And go to next node of second list
    second = second.next;
  }
  return false;
}

const listObject = new linkListClass();
listObject.insertFirst(200);
listObject.insertFirst(300);
listObject.insertFirst(400);
listObject.insertlast(300);
listObject.insertindex(55, 2);
listObject.getindex(2);
listObject.removeindex(3);
listObject.displayLinkList();
listObject.clearLinkList();
console.log(listObject.head);

function printList(node) {
  while (node != null) {
    document.write("%d ", node.data);
    node = node.next;
  }
}

// Function to add new node to linked lists
function newNode(key) {
  var temp = new Node();
  temp.data = key;
  temp.next = null;
  return temp;
}
var a = newNode(1);
a.next = newNode(2);
a.next.next = newNode(3);
a.next.next.next = newNode(4);

var b = newNode(1);
b.next = newNode(2);
b.next.next = newNode(1);
b.next.next.next = newNode(2);
b.next.next.next.next = newNode(3);
b.next.next.next.next.next = newNode(4);
if (findList(a, b) == true) console.log("LIST FOUND");
else console.log("LIST NOT FOUND");
