class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;

    }
}

class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
      // TODO: implement the constructor.
    }
  
    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
     insertAtFront(data) {
        const newHead = new DLLNode(data);
    
        if (this.isEmpty()) {
          this.head = newHead;
          this.tail = newHead;
        } else {
          const oldHead = this.head;
          oldHead.prev = newHead;
          newHead.next = oldHead;
          this.head = newHead;
        }
        return this;
      }
  
    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
     insertAtBack(data) {
        const newTail = new DLLNode(data);
    
        if (this.isEmpty()) {
          // if no head set the newTail to be both the head and the tail
          this.head = newTail;
          this.tail = newTail;
        } else {
          this.tail.next = newTail;
          newTail.prev = this.tail;
    
          this.tail = newTail;
        }
        return this;
      }
  
    // EXTRA
    /**
     * Removes the middle node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */
     removeMiddleNode() {
        // when there is only 1 node, it is the middle, remove it.
        if (!this.isEmpty() && this.head === this.tail) {
          const removedData = this.head.data;
          this.head = null;
          this.tail = null;
          return removedData;
        }
     }
  
    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
      return this.head === null;
    }
  
    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
      const vals = [];
      let runner = this.head;
  
      while (runner) {
        vals.push(runner.data);
        runner = runner.next;
      }
      return vals;
    }
  
    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBackMany(items = []) {
      items.forEach((item) => this.insertAtBack(item));
      return this;
    }
}