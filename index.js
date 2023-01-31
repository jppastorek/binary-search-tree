import Tree from './Tree.js'

const array = Array.from({length: 20}, () => Math.floor(Math.random() * 200));
const array2 = [1,2,3,4,5,6,7,8];

let tree = new Tree(array2);
tree.prettyPrint(tree.root);

console.log(tree.levelOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());

console.log(tree.depth(4, tree.root));