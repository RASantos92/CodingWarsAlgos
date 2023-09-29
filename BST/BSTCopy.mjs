

/**
reference:
http://btv.melezinek.cz/binary-search-tree.html
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is 
 * connected to other nodes to form the tree. 
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set 
 * after the new node is instantiated.
 */
class BSTNode { // TreeNode , node
    constructor(data) {
        this.data = data;
        this.left = null; // a BSTNode with a smaller value
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where 
 * the data of left nodes are <= to their parent and
 * the data of right nodes are > their parent's data.
 */
export class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    printInorder(curr = this.root) {
        if (!curr) {
            return;
        }
        if (curr) {
            this.printInorder(curr.left);
            console.log(curr.data);
            this.printInorder(curr.right);
        }
    }

    printPreorder(curr = this.root) {
        if (!curr) {
            return;
        }
        if (curr) {
            console.log(curr.data);
            this.printInorder(curr.left);
            this.printInorder(curr.right);
        }
    }

    printPostorder(curr = this.root) {
        if (!curr) {
            return;
        }
        if (curr) {
            this.printInorder(curr.left);
            this.printInorder(curr.right);
            console.log(curr.data);
        }
    }

    /**
   * BFS order: horizontal rows top-down left-to-right.
   * Converts this BST into an array following Breadth First Search order.
   * Example on the fullTree var:
   * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
   * - Time: O(n) linear, every node is visited.
   * - Space: O(h + n) linear due to the queue + vals array.
   * @param {BSTNode} current The current node during the traversal of this tree.
   * @returns {Array<number>} The data of all nodes in BFS order.
   */
    toArrLevelorder(current = this.root) {
        Math.floor()
        const queue = [], output = [];
        if (current) {
            queue.push(current);
        }
        while (queue.length > 0) {
            const dequeuedNode = queue.shift();
            output.push(dequeuedNode.data);
            if (dequeuedNode.left) {
                queue.push(dequeuedNode.left)
            }
            if (dequeuedNode.right) {
                queue.push(dequeuedNode.right)
            }
        }
        return output;
    }
    /**
    * Depth first search
     * DFS Preorder: (CurrNode, Left, Right)
     * Converts this BST into an array following DFS preorder.
     * Example on the fullTree var:
     * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
     * @param {Node} node The current node during the traversal 
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    // toArrPreorder(starter = this.root, vals = []) {
    //   if(curr.left){
    //     console.log(curr.data)
    //     return this.toArrPreorder(curr = curr.left,vals)
    //   }
    // }


    /**
    * Recursively counts the total number of nodes in this tree.
    * - Time: O(?).
    * - Space: O(?).
    * @param {Node} node The current node during the traversal of this tree.
    * @returns {number} The total number of nodes.
    */
    size(node = this.root, count = 0) {
        if (node === null) {
            return 0
        }
        count++
        return (this.size(node.left, count) + 1 + this.size(node.right, count))
    }

    /**
      * Calculates the height of the tree which is based on how many nodes from
      * top to bottom (whichever side is taller).
      * - Time: O(?).
      * - Space: O(?).
      * @param {Node} node The current node during traversal of this tree.
      * @returns {number} The height of the tree.
      */
    height(node = this.root) {
        if (node === null) {
            return 0
        }
        let leftHeight = this.height(node.left)
        let rightheight = this.height(node.right)
        console.log(leftHeight, rightheight)
        return leftHeight > rightheight ? leftHeight + 1 : rightheight + 1
    }

    /**
      * Determines if this tree is a full tree. A full tree is a tree where every
      * node has both a left and a right except for the leaf nodes (last nodes)
      * - Time: O(?).
      * - Space: O(?).
      * @param {Node} node The current node during traversal of this tree.
      * @returns {boolean} Indicates if this tree is full.
      */
    isFull(node = this.root) {
        if (node == null) return false
        if (node.left === null && node.right === null) return true
        if ((node.left == null && node.right != null) || (node.left != null && node.right == null)) return false
        return this.isFull(node.left) && this.isFull(node.right)
    }


    // HELPER METHOD
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

    insert(newVal) {
        const node = new BSTNode(newVal);

        if (!this.root) {
            this.root = node;
            return this;
        }

        let current = this.root;

        while (true) {
            if (newVal <= current.data) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }

                current = current.left;
            } else {
                // newVal is greater than current.data
                if (current.right === null) {
                    current.right = node;
                    return this;
                }

                current = current.right;
            }
        }
    }

    /**
    * BFS order: horizontal rows top-down left-to-right.
    * Converts this BST into an array following Breadth First Search order.
    * Example on the fullTree var:
    * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
    * - Time: O(n) linear, every node is visited.
    * - Space: O(h + n) linear due to the queue + vals array.
    * @param {BSTNode} current The current node during the traversal of this tree.
    * @returns {Array<number>} The data of all nodes in BFS order.
    */
    toArrLevelorder(current = this.root) {
        const arr = []
        const tempQ = new Queue();

        if (current) {
            tempQ.enqueue(current);
        }

        while (!tempQ.isEmpty()) {
            let dequeueNode = tempQ.dequeue();
            arr.push(dequeueNode.data)

            if (dequeueNode.left) {
                tempQ.enqueue(dequeueNode.left)
            }

            if (dequeueNode.right) {
                tempQ.enqueue(dequeueNode.right)
            }
        }
        return arr
    }

}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.insert(10);
// oneNodeTree.print()

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.insert(10);
twoLevelTree.insert(5);
twoLevelTree.insert(15);
// twoLevelTree.print()

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   8  13  20
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.insert(10);
threeLevelTree.insert(5);
threeLevelTree.insert(2);
threeLevelTree.insert(8);
threeLevelTree.insert(15);
threeLevelTree.insert(20);
threeLevelTree.insert(13);
// threeLevelTree.print()
/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
 
    [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
*/


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
    .insert(66)
    .insert(90);
fullTree.print()