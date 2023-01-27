import Node from "./Node.js";

export default class Tree {
  constructor(array) {
    const sortedArray = [...new Set(array)].sort(function (a, b) {
      return a - b;
    });
    this.root = this.buildTree(sortedArray);
  }

  buildTree(array) {
    //exit case
    if (array.length == 0) return null;

    //recursion
    let midPoint = Math.floor((array.length - 1) / 2);
    const nextNode = new Node(array[midPoint]);
    nextNode.left = this.buildTree(array.slice(0, midPoint));
    nextNode.right = this.buildTree(array.slice(midPoint + 1));

    return nextNode;
  }

  prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  find(value, root) {
    //cannot use root because it wont update to be current if recursive
    if (root == null) return null;
    if (value == root.data) return root; //exit statement --> if the value is equal to current node

    //recursively check each mini tree's mid point
    if (value < root.data) return this.find(value, root.left);
    if (value > root.data) return this.find(value, root.right);
  }

  insert(value, root) {
    //exit statement
    if (root == null) {
      root = new Node(value);
      return root;
    }

    if (root.left == null && root.right == null) {
      if (value < root.data) {
        root.left = new Node(value);
      } else {
        root.right = new Node(value);
      }
      return root;
    }

    //find the appropriate leaf
    if (value < root.data) return this.insert(value, root.left);
    if (value > root.data) return this.insert(value, root.right);
    //place the node on the appropriate side
    //return the new node
  }

  delete(value, root) {
    //base case if root is null, return root
    if (root == null) return root;

    if (value < root.data) {
      root.left = this.delete(value, root.left);
    } else if (value > root.data) {
      root.right = this.delete(value, root.right);
    } else {
      //leaf, just remove...one child copy to parent and delete child
      //TODO  it recurses to the correct value, but something strange happens. when pretty print staerts again
      //i notice that the first node's right is now undefined.
      if (root.left == null) {
        return root.right;
      } else if (root.right == null) {
        return root.left;
      } else {
        //two children, copy inorder successor (smallest right) and then delete inorder child (only if right child not empty)
        root.data = inOrder(root.right);
        root.right = this.delete(root.data, root.right);
      }
      return root;
    }

    function inOrder(root) {
      let inOrderChild = root.data;
      while (root.left != null) {
        inOrderChild = root.left.data;
        root = root.left;
      }
      return inOrderChild;
    }
  }
}
