import Tree from './Tree.js'

const array = Array.from({length: 10}, () => Math.floor(Math.random() * 200));
const array2 = [1,2,3,4,5,6,7,8];

let tree = new Tree(array2);

tree.insert(9, tree.root);
tree.insert(-1, tree.root);


tree.prettyPrint(tree.root);