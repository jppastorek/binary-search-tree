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
  }

  find(value) {
    let currentNode = this.root; //cannot use root because it wont update to be current if recursive
    if (value == currentNode.data) return currentNode; //exit statement --> if the value is equal to current node
    
    //recursively check each mini tree's mid point
    if (value < midPoint) {
        let nextNode;
    }
  }

  insert(value) {
    //compare value to midpoint(s) until you find where it goes
    if (value == this.root) return null;

    const newNode = new Node(value);

    if (value < this.root){

    }

  }
}
