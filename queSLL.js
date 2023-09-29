class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the queue
    enqueue(value) {
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return this
        }
        this.tail.next = newNode
        this.tail = newNode
        return this
    }

    // remove and return the front value from the queue
    dequeue() {
        let output = null
        if(!this.head){
            console.log("the list is empty")
            return ouput
        }
        output = this.head
        this.head = this.head.next
        output.next = null
        return output
    }

    //return true/false based on whether you find the given value in a queue
    contains(value) {
        if(!this.head){
            console.log("this list is empty")
            return false
        }
        let runner = this.head
        while(runner){
            if(runner.value === value) return true
            runner = runner.next
        }
        return false
    }

    // remove the minimum value in the queue (remember your edgecases and pointers!)
    removeMin() {
        if(!this.head){
            console.log("this list is empty")
            return this
        }
        let runner = this.head
        let minNode = this.head
        let nBeforMin
        let nAfterMin
        while(runner.next.next){
            if (runner.next.value < minNode.value){
                nBeforMin = runner
                nAfterMin = runner.next.next
                minNode = runner.next
            }
            runner = runner.next
        }
        if(runner.value < minNode){
                nBeforMin = runner
                nAfterMin = runner.next.next
                minNode = runner.next
        }
        //if min node is in the back
        if(runner.next.value < minNode){
            this.dequeue()
        }
        // if the min node is in the front
        if(this.head.value === minNode.value){
            this.head = this.head.next
            minNode.next = null
        }
        nBeforMin.next = nAfterMin
        minNode.next = null
        return this;
    }
    printList(){
        if(!this.head){
            console.log("this list is empty")
            return this
        }
        let runner = this.head
        while(runner){
            console.log(runner.value)
            runner = runner.next
        }
        return this
    }
    size(){
        if(!this.head){
            console.log("this list is empty")
            return this
        }
        let runner = this.head
        let size = 0
        while(runner){
            runner = runner.next
            size++
        }
        return size
    }
    interleaveQueue(){
        if(!this.head){
            console.log("this list is empty")
            return this
        }
        const newList = new SLQueue()
        let runner = this.head
        let count = 0
        let arr1 = []
        let arr2 = []
        while(runner){
            if(count < Math.floor(this.size()/2)) arr1.push(runner.value)
            else arr2.push(runner.value)
            runner = runner.next
            count++
        }
        for(var i = 0; i < arr2.length; i++){
            if(arr1[i] != undefined) newList.enqueue(arr1[i])
            newList.enqueue(arr2[i])
        }
        console.log(arr1, arr2)
        return newList
    }
}

var newList = new SLQueue()
newList.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5).enqueue(6).printList()
console.log("*******************************")
var newSll = newList.interleaveQueue()
newSll.printList()


function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  console.log(fibonacci(7))