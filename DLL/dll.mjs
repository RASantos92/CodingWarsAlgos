class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */

export class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        this.head = null;
        this.tail = null;
    }


    insertAtFront(data) {
        if (this.isEmpty()) {
            let node = new Node(data);
            this.head = node;
            this.tail = node;
        }
        else {
            let node1 = this.head;
            let newNode = new Node(data);
            newNode.next = node1;
            node1.prev = newNode;
            this.head = newNode;
        }
        return this;
    }

    test(){
        let runner = this.head;
        while(runner){
            runner = runner.next;
        }
        console.log("made it past the test noo loop")
    }

    insertAtBack(data) {
        if (this.isEmpty()) {
            let node = new Node(data);
            this.head = node;
            this.tail = node;
        }
        else {
            let newNode = new Node(data);
            let node1 = this.tail;
            node1.next = newNode;
            newNode.prev = node1;
            this.tail = newNode;
        }
        return this;
    }

    hundredThousandNodes(ammount = 10000) {
        // for (let i = 0; i < ammount; i++) {
        //     this.insertAtBack(Math.floor(Math.random() * 200000))
        //     this.insertAtFront(Math.floor(Math.random() * 200000))
        // }
        // if(ammount === 0) return this;
        // this.insertAtBack(Math.floor(Math.random() * 1001))
        // this.insertAtFront(Math.floor(Math.random() * 1001))
        // ammount -= 1
        // if(ammount%1000 == 0){
        //     console.log("there")
        //     setTimeout(this.hundredThousandNodes(ammount), 0);
        // }
        // return this.hundredThousandNodes(ammount)

    }

    insertAfterAttempt(targetVal, newVal, runner = this.head, count=0) {
        while(runner){
            if(runner.data!= targetVal){
                runner = runner.next;
            }
            else break;
        }
        if(runner){
            let next = runner.next;
            let newNode = new Node(newVal);
            runner.next = newNode;
            newNode.prev = runner;
            newNode.next = next;
            next.prev = newNode;
        }
        
        else return false;
        
        return true;
    }





    insertAfter(targetVal, newVal) { 
        if(this.isEmpty()) {
            return this.insertAtBack(newVal);
        }
        const newNode = new Node(newVal);
        let tailRunner = this.tail , headRunner = this.head;

        while(tailRunner.prev !== headRunner){
            if(tailRunner !== headRunner){
                return this
            }
            if(tailRunner.data === targetVal){
                newNode.next = tailRunner.next
                tailRunner.next.prev = newNode;
                newNode.prev = tailRunner;
                tailRunner.next = newNode
                return this;
            }
            if(headRunner.data === targetVal){
                newNode.next = headRunner.next
                headRunner.next.prev = newNode;
                newNode.prev = headRunner;
                headRunner.next = newNode
                return this
            }
            headRunner = headRunner.next;
            tailRunner = tailRunner.prev;
        }
        // console.log(tailRunner)
        this.insertAtBack(newVal);

    }


    isLoop() {
        let runner = this.head.next, walker = this.head

        while(runner.next){
            if(runner === walker){
                return true;
            }
            runner = runner.next.next;
            walker = walker.next;
        }
        return false
    }

    createLoop(){
        this.tail.next = this.head;
    }

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
