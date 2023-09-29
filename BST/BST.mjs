// https://www.codewars.com/kata/52bef5e3588c56132c0003bc/train/javascript
/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Determines if this tree is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    return this.root === null;
  }

  /**
  * Inserts a new node with the given newVal in the right place to preserver
  * the order of this tree.
  * - Time: O(h) linear, h = height of tree because the new node may have to
  *    be added at the bottom.
  * - Space: O(h) linear due to the call stack.
  * @param {number} newVal The data to be added to a new node.
  * @param {BSTNode} curr The node that is currently accessed from the tree as
  *    the tree is being traversed.
  * @returns {BinarySearchTree} This tree.
  */
  insertRecursive(newVal, curr = this.root) {
    if (this.isEmpty()) {
      this.root = new BSTNode(newVal);
      return this;
    }

    if (newVal > curr.data) {
      if (curr.right === null) {
        curr.right = new BSTNode(newVal);
        return this;
      }
      return this.insertRecursive(newVal, curr.right);
    }

    if (curr.left === null) {
      curr.left = new BSTNode(newVal);
      return this;
    }
    return this.insertRecursive(newVal, curr.left);
  }

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(h) linear, h = height of tree.
   * - Space: O(h) linear due to the call stack.
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
  containsRecursive(searchVal, current = this.root) {
    if (current === null) {
      return false;
    }

    if (current.data === searchVal) {
      return true;
    }

    if (searchVal < current.data) {
      return this.containsRecursive(searchVal, current.left);
    }

    if (searchVal > current.data) {
      return this.containsRecursive(searchVal, current.right);
    }
  }

  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
      `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

threeLevelTree.print();


function treeByLevels (rootNode) {
  const queue = [];
  const output = [];

  queue.push(rootNode);

  while(queue.length > 0){
    const currentNode =  queue.shift();
    output.push(currentNode.data);
    if(currentNode.left){
      queue.push(currentNode.left);
    }
    if(currentNode.right){
      queue.push(currentNode.right)
    }
  }
	return output;
}




console.log(treeByLevels(threeLevelTree.root))