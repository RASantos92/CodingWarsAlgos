
class StackNode {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  /**
   * Class to represent a stack using Double linked nodes to store the stacked items.
   * Follows a LIFO (Last In First Out) order where new items are stacked on
   * top (back) and removed items are removed from the top / back.
   */
  
  class DoubleLinkedListStack {
    /**
   * The constructor is executed when instantiating a new Stack() to construct
   * a new instance.
   * @returns {Stack} This new Stack instance is returned without having to
   *    explicitly write 'return' (implicit return).
   */
    constructor() {
      this.top;
      this.bottom;
    }
  
    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) { 
        let newNode = new StackNode(item)
        if(!this.top) {
            this.top = newNode;
            this.bottom = newNode;
            return this
        }
        newNode.next = this.top;
        this.top.prev = newNode
        this.top = newNode;
        return this
    }
  
    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() { }
  
    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() { }
  
    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() { }
  
    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        let count = 0
        if(!this.top) return count;
        if(!this.top.next) return count += 1;
        let tR = this.top, bR = this.bottom;
        while(tR.next.data != bR.data && tR != bR){
            count+=2;
            tR = tR.next;
            bR = bR.prev;
        }
        return tR === bR ? count+=1:count+=2;
     }
  
    print() {
      console.log("top:", this.top.data);
      let r = this.top.next
      while (r.next) {
        console.log("    ",r.data);
        r = r.next;
      }
      console.log("bot:", this.bottom.data)
      return this;
    }
  }
const dlls = new DoubleLinkedListStack();
dlls.push(45).push(67).push(90).push(78).push(15).push(25).print()
console.log(dlls.size())