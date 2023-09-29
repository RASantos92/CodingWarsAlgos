function binarySearch(
    sortedNums,
    searchNum,
    leftIdx = 0,
    rightIdx = sortedNums.length - 1
) {
    if (leftIdx > rightIdx) return -1;
    const midIdx = Math.floor((rightIdx + leftIdx) / 2);
    if (sortedNums[midIdx] === searchNum) return midIdx;
    if (searchNum < sortedNums[midIdx]) return binarySearch(sortedNums, searchNum, 0, midIdx - 1);
    return binarySearch(sortedNums, searchNum, midIdx + 1, rightIdx);
}


console.log(binarySearch([1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10],7))
test = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10]
test.slice(0,5)
console.log(test)