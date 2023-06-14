class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}
var temp;

/* Inorder traversal of a binary tree */
function inorder(temp) {
  if (temp == null) return;

  inorder(temp.left);
  console.log(temp.key + " ");
  inorder(temp.right);
}

/* function to insert element in binary tree */
function insert(temp, key) {
  if (temp == null) {
    root = new Node(key);
    return;
  }
  var q = [];
  q.push(temp);
  console.log(q, "qldn");
  // Do level order traversal until we find
  // an empty place.
  while (q.length != 0) {
    temp = q.shift();

    if (temp.left == null) {
      temp.left = new Node(key);
      break;
    } else q.push(temp.left);

    if (temp.right == null) {
      temp.right = new Node(key);
      break;
    } else q.push(temp.right);
  }
}

function deleteDeepest(root, delNode) {
  let q = [];
  q.push(root);

  let temp = null;

  // Do level order traversal until last node
  while (q.length > 0) {
    temp = q[0];
    q.shift();

    if (temp == delNode) {
      temp = null;
      return;
    }
    if (temp.right != null) {
      if (temp.right == delNode) {
        temp.right = null;
        return;
      } else q.push(temp.right);
    }

    if (temp.left != null) {
      if (temp.left == delNode) {
        temp.left = null;
        return;
      } else q.push(temp.left);
    }
  }
}

// Function to delete given element
// in binary tree
function Delete(root, key) {
  if (root == null) return;

  if (root.left == null && root.right == null) {
    if (root.key == key) {
      root = null;
      return;
    } else return;
  }

  let q = [];
  q.push(root);
  let temp = null,
    keyNode = null;

  // Do level order traversal until
  // we find key and last node.
  while (q.length > 0) {
    temp = q[0];
    // console.log(q, "pefepn");

    q.shift();
    if (temp.key == key) keyNode = temp;

    if (temp.left != null) q.push(temp.left);

    if (temp.right != null) q.push(temp.right);
    console.log(q, q.length, "lenth");
  }

  if (keyNode != null) {
    let x = temp.key;
    console.log(temp, "temptemp");
    deleteDeepest(root, temp);
    keyNode.key = x;
  }
}

// Driver code
var root = new Node(10);
root.left = new Node(11);
root.left.left = new Node(7);
root.right = new Node(9);
root.right.left = new Node(15);
root.right.right = new Node(8);

console.log("Inorder traversal before insertion:");
inorder(root);

var key = 12;
insert(root, key);

console.log("<br>Inorder traversal after insertion:");
inorder(root);

Delete(root, 8);
console.log("<br>Inorder traversal after insertion:");
inorder(root);
