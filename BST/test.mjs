import { BinarySearchTree } from './BST.mjs';

const fullTree = new BinarySearchTree();
fullTree
  .insert(25)
  .insert(15)
  .insert(10)
  .insert(22)
  .insert(4)
  .insert(12)
  .insert(18)
  .insert(24)
  .insert(50)
  .insert(35)
  .insert(70)
  .insert(31)
  .insert(44)
  // .insert(66)
//   .insert(90);
  console.log(fullTree.print())
  console.log(fullTree.toArrLevelorder())
//   fullTree.printPreorder()