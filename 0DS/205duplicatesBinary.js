//205duplicatesBinary

class node {
  constructor() {
    this.key = 0;
    this.count = 0;
    this.left = null;
    this.right = null;
  }
}
function newNode(item) {
  var temp = new node();
  temp.key = item;
  temp.left = temp.right = null;
  temp.count = 1;
  return temp;
}

function newNode(item) {
  var temp = new node();
  temp.key = item;
  temp.left = temp.right = null;
  temp.count = 1;
  return temp;
}

function insert(node, key) {
  /* If the tree is empty, return a new node */
  if (node == null) return newNode(key);

  // If key already exists in BST,
  // increment count and return
  if (key == node.key) {
    node.count++;
    return node;
  }

  /* Otherwise, recur down the tree */
  if (key < node.key) node.left = insert(node.left, key);
  else node.right = insert(node.right, key);

  /* return the (unchanged) node pointer */
  return node;
}

/*
     * Given a non-empty binary search tree,
     return the node with minimum key value
     * found in that tree. Note that the
     entire tree does not need to be searched.
     */
function minValueNode(node) {
  var current = node;

  /* loop down to find the leftmost leaf */
  while (current.left != null) current = current.left;

  return current;
}

/*
     * Given a binary search tree and a key,
     this function deletes a given key and
     * returns root of modified tree
     */
function deleteNode(root, key) {
  // base case
  if (root == null) return root;

  // If the key to be deleted is smaller than the
  // root's key, then it lies in left subtree
  if (key < root.key) root.left = deleteNode(root.left, key);
  // If the key to be deleted is greater than
  // the root's key, then it lies in right subtree
  else if (key > root.key) root.right = deleteNode(root.right, key);
  // if key is same as root's key
  else {
    // If key is present more than once,
    // simply decrement count and return
    if (root.count > 1) {
      root.count--;
      return root;
    }

    // ElSE, delete the node

    // node with only one child or no child
    if (root.left == null) {
      var temp = root.right;
      root = null;
      return temp;
    } else if (root.right == null) {
      var temp = root.left;
      root = null;
      return temp;
    }

    // node with two children: Get the inorder
    // successor (smallest in the right subtree)
    var temp = minValueNode(root.right);

    // Copy the inorder successor's
    // content to this node
    root.key = temp.key;
    root.count = temp.count;

    // Delete the inorder successor
    root.right = deleteNode(root.right, temp.key);
  }
  return root;
}

// Driver Code

/*
         * Let us create following BST
         12(3) / \ 10(2) 20(1) / \ 9(1) 11(1)
         */

var root = null;
root = insert(root, 12);
root = insert(root, 10);
root = insert(root, 20);
root = insert(root, 9);
root = insert(root, 11);
root = insert(root, 10);
root = insert(root, 12);
root = insert(root, 12);

console.log("Inorder traversal of " + "the given tree " + "<br/>");
inorder(root);

console.log("<br/>Delete 20<br/>");
root = deleteNode(root, 20);
console.log("Inorder traversal of " + "the modified tree <br/>");
inorder(root);

console.log("<br/>Delete 12<br/>");
root = deleteNode(root, 12);
console.log("Inorder traversal of " + "the modified tree <br/>");
inorder(root);

console.log("<br/>Delete 9<br/>");
root = deleteNode(root, 9);
console.log("Inorder traversal of " + "the modified tree <br/>");
inorder(root);
