//302ConstructBSTPreeoreder

// JavaScript program to construct BST
// from given preorder traversal

// A binary tree node
class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  // The main function that constructs BST from pre[]
  constructTree(pre, size) {
    // The first element of pre[] is always root
    var root = new Node(pre[0]);

    var s = [];

    // Push root
    s.push(root);

    // Iterate through rest of the size-1
    // items of given preorder array
    for (var i = 1; i < size; ++i) {
      var temp = null;

      /* Keep on popping while the next value is greater than
            stack's top value. */
      while (s.length > 0 && pre[i] > s[s.length - 1].data) {
        temp = s.pop();
      }

      // Make this greater value as the right child
      // and push it to the stack
      if (temp != null) {
        temp.right = new Node(pre[i]);
        s.push(temp.right);
      }

      // If the next value is less than the stack's top
      // value, make this value as the left child of the
      // stack's top node. Push the new node to stack
      else {
        temp = s[s.length - 1];
        temp.left = new Node(pre[i]);
        s.push(temp.left);
      }
    }

    return root;
  }

  // A utility function to print
  // inorder traversal of a Binary Tree
  printInorder(node) {
    if (node == null) {
      return;
    }
    this.printInorder(node.left);
    console.log(node.data + " ");
    this.printInorder(node.right);
  }
}
// Driver program to test above functions

var tree = new BinaryTree();
var pre = [10, 5, 1, 7, 40, 50];
var size = pre.length;
var root = tree.constructTree(pre, size);
console.log("Inorder traversal of the constructed tree is <br>");
tree.printInorder(root);
