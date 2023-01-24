import Tree from './Tree.js'

const array = Array.from({length: 10}, () => Math.floor(Math.random() * 200));
const array2 = [1,2,3,4];

let tree = new Tree(array);

console.log(array);
tree.prettyPrint(tree.root);

console.log(tree.find(2, tree.root));