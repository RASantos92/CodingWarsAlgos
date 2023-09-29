
function generateCoinChange(input) {
    input = Math.floor(input * 100);
    var change = {
        'quarters':0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    }
    change['quarters'] += Math.floor(input/25);
    input = input%25;
    change['dimes'] += Math.floor(input/10);
    input -= input%10;
    change['nickels'] += Math.floor(input/5);
    input -= input%5;
    change['pennies'] = input
    return change
}

console.log(generateCoinChange(0.67))

const numsC = [2, -4, 0, -3, -2, 1];

function missingValue(unorderedNums) {
    sortedNums = mergeSort(unorderedNums)
    for (var i = 0; i<sortedNums.length; i++){
        if(sortedNums[i+1] == undefined) return null
        if(sortedNums[i]+1 != sortedNums[i+1]) return (sortedNums[i]+1)
    }
}

function merge(left, right) {
    let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; 
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; 
        }
    }
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const middle = arr.length / 2;
    const left = arr.slice(0, middle); 
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}   

console.log(missingValue(numsC))