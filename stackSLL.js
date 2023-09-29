class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a stack operates on the principal of "First In, Last Out" like waiting in line for something
class SLStack{
    constructor() {
        this.top = null
    }

    // add a given value to your stack
    push(value){
        const newNode = new Node(value)
        if(!this.top){
            this.top = newNode
            return this
        }
        newNode.next = this.top
        this.top = newNode
        return this
    }
    // remove and return the top value
    pop(){
        if(!this.top){
            console.log("this stack is empty nothing to return")
            return null
        }
        let output = this.top
        this.top = this.top.next
        return output
    }

    // return (don't remove) the top value of a stack
    getTop() {
        if(!this.top){
            console.log("this stack is empty nothing to return")
            return null
        }
        return this.top
    }
    printStack(){
        if(!this.top){
            console.log("this stack is empty nothing to return")
            return this
        }
        let runner = this.top
        while(runner){
            console.log(runner.value)
            runner = runner.next
        }
        return this
    }
}

var testStack = new SLStack()
var test = new SLStack()
testStack.push(65).push(89).push(4).push(7).printStack()
console.log("****************************")
testStack.pop()
testStack.printStack()
console.log("****************************")
console.log(testStack.getTop())
test.getTop()

