class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.child = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    isEmpty() {
        return this.head === null;
    }




    insertAtBack(data) {
        const newBack = new Node(data);
        let runner = this.head;
        if (runner === null) {
            this.head = newBack;
        } else {
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newBack;
        }
        return this;
    }

    moveMinToFront() {
        if (!this.head) {
            console.log("this list is empty")
            return this
        }
        let runner = this.head
        let nBeforeMin = null
        let nAfterMin = null
        let minNode = this.head
        while (runner.next) {
            if (runner.next.value < minNode.value) {
                minNode = runner.next
                nBeforeMin = runner
                nAfterMin = runner.next.next
            }
            runner = runner.next
        }
        minNode.next = this.head
        this.head = minNode
        nBeforeMin.next = nAfterMin
        return this
    }

    moveMaxToBack() {
        if (!this.head) {
            console.log("this list is empty")
            return this
        }
        var runner = this.head
        let nBeforeMax = null
        let nAfterMax = null
        let maxNode = this.head
        while (runner.next) {
            if (runner.next.value > maxNode.value) {
                maxNode = runner.next
                nBeforeMax = runner
                nAfterMax = runner.next.next
            }
            runner = runner.next
        }
        runner.next = maxNode
        maxNode.next = null
        nBeforeMax.next = nAfterMax
        return this
    }

    removeFront() {
        if (!this.head) {
            console.log("there is nothing here")
            return this
        }
        var temp = this.head
        this.head = this.head.next
        temp.next = null
        return this
    }

    removeBack() {
        let runner = this.head
        while (runner.next.next) {
            runner = runner.next
        }
        runner.next = null
        return this
    }

    insertAtFront(data) {
        const newHead = new Node(data);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    contains(val) {
        let runner = this.head;
        while (runner) {
            if (runner.data === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    printSll() {
        let runner = this.head;
        while (runner) {
            console.log(runner.value)
            runner = runner.next
        }
        return this;
    }
    editValue(valueToEdit, updatedValue) {
        let runner = this.head
        while (runner) {
            if (runner.value === valueToEdit) {
                runner.value = updatedValue
                return this
            }
            runner = runner.next
        }
        return this
    }
    removeValue(val) {
        let runner = this.head
        while (runner) {
            if (runner.next.value === val) {
                let temp = runner.next
                runner.next = runner.next.next
                temp.next = null
                return this
            }
            runner = runner.next
        }
        return this
    }
    getSecondToLast() {
        if (!this.head.next) {
            return null
        }
        if (!this.head.next.next) {
            return this.head
        }
        let runner = this.head
        while (runner.next.next) {
            runner = runner.next
        }
        return runner
    }
    prependValue(eVal, newVal) {
        const newNode = new Node(newVal);
        if (!this.head) {
            this.head = newNode
            return this
        }
        let runner = this.head
        while (runner.next) {
            if (runner.next.value === eVal) {
                newNode.next = runner.next
                runner.next = newNode
                return this
            }
            runner = runner.next
        }
        console.log("your value was not found in the list")
        return this
    }

    appendValue(eVal, newVal, back = true) {
        const newNode = new Node(newVal);
        if (!this.head) {
            this.head = newNode
            return this
        }
        let runner = this.head
        while (runner.next) {
            if (runner.value === eVal) {
                newNode.next = runner.next
                runner.next = newNode
                return this
            }
            runner = runner.next
        }
        if (back) this.insertAtBack(newVal)
        else this.insertAtFront(newVal)
        return this
    }
    maxToBack() {
        let runner = this.head
        let max = this.head
        let bm
        let am
        while (runner.next) {
            if (runner.next.value > max.value) {
                max = runner.next
                bm = runner
                am = runner.next.next
            }
            runner = runner.next
        }
        runner.next = max
        bm.next = am
        runner.next.next = null
        return this
    }



    removeSecondToLast() {
        if (!this.head) return this

        let runner = this.head

        while (runner.next.next.next) {
            runner = runner.next
        }

        let nodeToBeDestoryed = runner.next
        runner.next = nodeToBeDestoryed.next
        nodeToBeDestoryed.next = null
        return this
    }

    // remove all nodes that have a negative value
    removeNegatives() {
        if (!this.head) return this
        if (this.head.value < 0) {
            this.removeFront()
        }
        let runner = this.head
        let nodeToBeDestoryed
        while (runner.next) {
            if (runner.next.value < 0) {
                nodeToBeDestoryed = runner.next
                runner.next = runner.next.next
                nodeToBeDestoryed.next = null
                continue
            }
            runner = runner.next
        }
        if (runner.value < 0) {
            this.removeBack()
        }
        return this
    }

    insertAtBackMany(arrayOfValues, runner = this.head) {
        if (runner) {
            while (runner.next) {
                runner = runner.next
            }
        } else {
            this.head = new Node(arrayOfValues[0])
            runner = this.head
            arrayOfValues = arrayOfValues.filter((i) => {
                return i != arrayOfValues[0]
            })
        }
        for (const val of arrayOfValues) {
            runner.next = new Node(val);
            runner = runner.next
        }
    }
}

var newList = new SinglyLinkedList();
var newList1 = new SinglyLinkedList();
newList.insertAtFront(-45).insertAtBack(3).insertAtBack(56).insertAtBack(6).printSll().removeValue(56)
console.log("+++++++++++++++++++++++++++++++")



newList.printSll()
console.log("+++++++++++++++++++++++++++++++")

newList1.insertAtBackMany([1, 2, 3, 4])
newList1.printSll()


