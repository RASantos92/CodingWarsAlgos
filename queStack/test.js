class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.top = null;
        this.length = 0;
    }
    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        if (this.top == null) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        let newNode = new StackNode(item);
        if (this.isEmpty()) {
            this.top = newNode;
            return this.length++;
        }
        newNode.next = this.top;
        this.top = newNode;
        return this.length++;
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        else {
            let valuePopped = this.top.data;
            this.top = this.top.next;
            this.length--;
            return valuePopped;
        }

    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        if (this.isEmpty()) {
            return false;
        }
        else {
            return this.top.data;
        }

    }


    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        if (this.isEmpty()) {
            return 0;
        }
        else {
            let size = 0;
            let tempStack = new Stack();
            while (this.top) {
                let topVal = this.pop();
                tempStack.push(topVal);
                size++;
            }
            while (tempStack.top) {
                let tempTop = tempStack.pop();
                this.push(tempTop);
            }
            return size;
        }
    }

    print() {
        let runner = this.top;
        let vals = "";

        while (runner) {
            vals += `${runner.data}${runner.next ? ", " : ""}`;
            console.log(runner.next);
            runner = runner.next;
        }
        console.log(vals);
        return vals;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next;
    }
}

/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.head;
        this.tail;
        this.length = 0;
    }


    isEmpty() {
        if (this.head == null) {
            return true;
        }
        return false;
    }


    enqueue(item) {
        if (this.isEmpty()) {
            this.head = item;
            this.tail = item;
            this.length++;
            return this.length;
        }
        this.tail.next = item;
        this.tail = item;
        this.length++;
        return this.length;
    }


    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        var popNode = this.head;
        this.head = this.head.next;
        popNode.next = null;
        this.length--;
        return popNode;
    }


    front() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.head.data;
    }


    /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
    compareQueues(q2) {
        if (this.size() !== q2.size()) return false;

        let temp = new Queue();
        let isEqual = true;

        while (this.head && q2.head) {
            if (this.head.data !== q2.head.data) {
                isEqual = false;
                break;
            }
            temp.enqueue(this.dequeue());
            temp.enqueue(q2.dequeue());
        }

        while (temp.head) {
            q2.enqueue(temp.dequeue());
            this.enqueue(temp.dequeue());
        }

        return isEqual;

    }

    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isPalindrome() {
        let tempQ = new Queue();
        let tempStack = new Stack();
        let isPal = true;
        while (this.head) {
            let node = this.dequeue()
            tempQ.enqueue(node)
            tempStack.push(node.data)
        }
        
        while (tempQ.head) {
            let node = tempQ.dequeue()
            if (node.data !== tempStack.pop()) isPal = false;
            this.enqueue(node);
        }
        return isPal;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.length;
    }

    queueToArray() {
        let temp = new LinkedListQueue();
        let output = ["Head->"]
        while (this.head) temp.enqueue(this.dequeue().data)
        while (temp.head) {
            output.push(temp.head.data)
            this.enqueue(temp.dequeue().data)
        }
        output.push("<-Tail")
        return output
    }
}

const newQueue1 = new Queue();
const newQueue2 = new Queue();
const newQueue3 = new Queue();
const newNode1 = new Node(1);
const newNode2 = new Node(2);
const newNode3 = new Node(3);
const newNode4 = new Node(4);
// Queue 1 = [head -> 1,2,3,4 <-tail]
newQueue1.enqueue(newNode1)
newQueue1.enqueue(newNode2)
newQueue1.enqueue(newNode3)
newQueue1.enqueue(newNode4)
// Queue 2 = [head -> 1,2,3,4 <-tail]
newQueue2.enqueue(newNode1)
newQueue2.enqueue(newNode2)
newQueue2.enqueue(newNode3)
newQueue2.enqueue(newNode4)
// Queue 3 = [head -> 1,2,3,3,2,1 <-tail]
newQueue3.enqueue(newNode1)
newQueue3.enqueue(newNode2)
newQueue3.enqueue(newNode3)
newQueue3.enqueue(newNode3)
newQueue3.enqueue(newNode2)
newQueue3.enqueue(newNode1)

// compareQueues()
console.log(newQueue1.compareQueues(newQueue2)); // should return true
console.log(newQueue1.compareQueues(newQueue3)); // should return false

// isPalindrome()
console.log(newQueue1.isPalindrome()); // should return false
console.log(newQueue3.isPalindrome()); // should return true

