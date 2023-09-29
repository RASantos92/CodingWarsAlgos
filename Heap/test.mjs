import { MinHeap } from './minHeap.mjs';

const miniHeap = new MinHeap();
miniHeap.insert(3)
miniHeap.insert(45)
miniHeap.insert(22)
miniHeap.insert(21)
miniHeap.printHorizontalTree()
console.log(miniHeap.top())