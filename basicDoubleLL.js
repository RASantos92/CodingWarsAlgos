class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    isEmpty(){
        console.log("this list is empty")
        return this
    }
    insertAtHead(data){
        const newHead = new Node(data)
        let runner = this.head
        if(runner === null){
            this.head = newHead
            this.tail = newHead
        }else{
            this.head.previous = newHead
            newHead.next = this.head
            this.head = newHead
        }
        return this
    }
    insertAtTail(data){
        const
    }
    
}