
var testA = [5,3]
function reverseArr(arr){
    for(var i=0 ,j = arr.length -1; i < Math.floor(arr.length /2);i++,j--){
        [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    return arr
}
console.log(reverseArr(testA))

var testB= [2,5,4,5,6,58]
function recursiveReversed(arr, i = 0, j=arr.length-1){
    if(i === Math.floor((arr.length)/2)) return i
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return recursiveReversed(arr,i+1,j-1)
}
console.log(recursiveReversed(testB))
console.log(testB)


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