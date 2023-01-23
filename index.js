import Tree from './Tree.js'

const array = [1,2,3,4,5,6,7,8];

let tree = new Tree(array);

tree.prettyPrint(tree.root);