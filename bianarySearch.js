const testArr1 = [1, 2, 33, 44, 56, 78, 94];
const testArr = [1, 2, 33, 44, 56, 78, 94];


const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;

function binarySearch(arr, val) {
    var sta = 0;
    var end = arr.length-1;
    while(sta < end) {
        var mid = Math.floor((sta + end) / 2);
        if(arr[mid] === val) {
            return true;
        }
        if(val > arr[mid]) {
            sta = mid + 1;
        } else{
            end = mid -1;
        }
    }
    if(arr[sta] === val) {
        return sta;
    }
    
    return -1;
}
console.log(binarySearch(nums2,searchNum2))

function binarySearchRecursive(input, target){
    var center_index = Math.ceil((input.length/2)-1);
    if (target == input[center_index]){
        return center_index;
    }
    else if (target > input[center_index]){
        var newInput = input.slice(center_index+1);
        return binarySearchRecursive(newInput, target);
    }
    else if (target < input[center_index]){
        var newInput = input.slice(0, center_index);
        return binarySearchRecursive(newInput, target);
    }
    return -1;
}


console.log(binarySearchRecursive([1, 2], -2)) 
console.log(binarySearchRecursive([1, 2], 4)) 
console.log(binarySearchRecursive([1, 2], 1)) 
console.log(binarySearchRecursive([1,2,2], 2)) 
console.log(binarySearchRecursive([], 7)) 
console.log(binarySearchRecursive([1,2,2,2,2,2,2,4,5,5,5,5,6,6,6], 2)) 
console.log(binarySearchRecursive([1, 1, 1, 1, 1], 1))
console.log(binarySearchRecursive([1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10], 8))
console.log("**************************************")
console.log(binarySearch([1, 2], -2)) 
console.log(binarySearch([1, 2], 4)) 
console.log(binarySearch([1, 2], 1)) 
console.log(binarySearch([1,2,2], 2)) 
console.log(binarySearch([], 7)) 
console.log(binarySearch([1,2,2,2,2,2,2,4,5,5,5,5,6,6,6], 2)) 
console.log(binarySearch([1, 1, 1, 1, 1], 1))
console.log(binarySearch([1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9, 10], 8))