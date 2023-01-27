import Tree from './Tree.js'

const array = Array.from({length: 20}, () => Math.floor(Math.random() * 200));
const array2 = [1,2,3,4,5,6,7,8];

let tree = new Tree(array2);
tree.prettyPrint(tree.root);

tree.insert(-1, tree.root);
tree.delete(8, tree.root);


tree.prettyPrint(tree.root);