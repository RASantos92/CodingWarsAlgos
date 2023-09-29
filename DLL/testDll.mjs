import { DoublyLinkedList } from './dll.mjs';

const dll1 = new DoublyLinkedList();

console.time("hundredThousandNodes")
dll1.hundredThousandNodes()
console.timeEnd("hundredThousandNodes")


// console.time("insertAfter")
// dll1.insertAfter(87,1000000000000)
// console.timeEnd("insertAfter")


// console.time("insertAfterAttempt")

// dll1.insertAfterAttempt(87,1000000000000)

// console.timeEnd("insertAfterAttempt")

// console.log(dll1.isLoop())

// dll1.createLoop()

// console.log(dll1.isLoop())

