/*
This morning we are going to be creating what we think is a singly linked list. With just the definition of a singly linked list and an explination of what a node is, we will be creating our interpretation of a Singly Linked list.

EXPLINATION =
A singly linked list is a type of linked list that is unidirectional, that is, it can be traversed in only one direction from head to the last node (tail).

VISUAL = https://miro.medium.com/v2/resize:fit:953/1*iiEWrP2IznA6HbmuIdK0lQ.png

STEPS TO CREATING A NODE CLASS = 
    Create a class called node with a constuctor.
        The node class should have 2 attributes, a value and a next attribute.

After creation of the Node class chain together 4 nodes and figure out how we will structure our Singly Linked list.
*/

class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head;
        this.length = 0;
        this.tail;
    }

    insert(data) {
        const newNode = new Node(data);
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            this.tail.next = newNode;
            this.length++
            this.tail = newNode;
        }
        return this;
    }

    print(){
        if(this.length == 0) return "nothing to see here"
        let runner = this.head;
        while(runner){
            console.log(runner.value);
            runner = runner.next
        }
        return this;
    }
}

const sll = new SLL();

sll.insert(5).insert(6).insert(3).insert(9)

console.log(sll)


