// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
Problem_1{
function bigPositives(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}
var testArr=[-1,45,32,-9];
bigPositives(testArr);
console.log(testArr);
}
// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
Problem_2{
function printReturn(arr){
    var low = arr[0];
    var high = arr[0];
    for(var i=0; i<arr.length; i++){
        if(arr[i] < low){
            low = arr[i];
        }
        if(arr[i] > high){
            high = arr[i];
        }
    }
    console.log("low: " + low)
    return high;
}
var testArr=[3,54,7,8,95,4];
var x= printReturn(testArr);
console.log("high: " + x);
}
// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
Problem_3{
function printOneReturn(arr){
    console.log(arr[arr.length-2])
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2 == 1){
            return arr[i];
        }
        
    }
}
var testArr=[2,4,6,7,8,9,6];
var x = printOneReturn(testArr);
console.log(x);
}
// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
Problem_4{
function double(arr){
    var newArr=[];
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
var testArr=[2,5,67,7];
var x = double(testArr);
console.log(x);
console.log(testArr);
}
// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
Problem_5{
function countPositives(arr){
    var counter= '';
    for(var i=0; i<arr.length; i++){
        if(arr[i] > 0){
            counter++
        }
    }
    arr[arr.length-1]= counter;
    return arr;
}
var testArr=[-3,-5,-6,3,7,8,100];
countPositives(testArr);
console.log(testArr);
}
// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
Problem_6{
function evensAndOdds(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2 == 0 && arr[i+1]%2 ==0 && arr[i+2]%2 == 0){
            console.log("Even more so!");
        }
        if(arr[i]%2 == 1 && arr[i+1]%2 ==1 && arr[i+2]%2 == 1){
            console.log("That's odd!");
        }
    }
}
var testArr=[1,1,1,2,2,2,1,1,1,2,2,2];
evensAndOdds(testArr);
console.log(testArr);
}
// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
Problem_7{
function incrementSeconds(arr){
    for(var i=0; i<arr.length; i++){
        if(i%2 ==1){
            arr[i]++;
        }
    }
    console.log(arr);
    return arr;
}
var testArr=[1,2,5,8,5,4,4];
incrementSeconds(testArr);
}
// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
Problem_8{
function previousLengths(arr){
    for(var i=arr.length -1; i>0; i--){
        arr[i] = arr[i-1].length;
    }
    console.log(arr);
    return arr;
}
previousLengths(["hello","dojo","awsome"]);
}
// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
Problem_9{
function addSeven(arr){
    var newArr=[];
    for(var i=0; i<arr.length; i++){
        var x = arr[i] + 7;
        newArr.push(x);
    }
    return newArr;
}
var testArr=[8,4,5,6,7,8];
var x = addSeven(testArr);
console.log(x);
console.log(testArr);
}
// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
Problem_10{
function reverse(arr){
    for(let i = 0; i < arr.length / 2; i++){
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }
    return arr;
}
var testArr=[5,74,8,9,6];
reverse(testArr);
console.log(testArr);
}
// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
Problem_11{
function negatives(arr){
    var newArr=[];
    for(var i=0; i<arr.length; i++){
        if(arr[i] > 0){
            newArr.push(arr[i] *= -1);
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var testArr=[8,4,-5,6,7,4];
var x=negatives(testArr);
console.log(x);
console.log(testArr);
}
// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
Problem_12{
function hungry(arr){
    for(var i=0; i<arr.length; i++){
        var counter = 0;
        if(arr[i] == "food"){
            console.log("yummy")
            counter++;
        }
    }
    if(counter == 0){
        console.log("I'm hungry");
    }
}
var testArr1=[1,5,4,7,9,5,6];
var testArr2=["food",4,5,7,8,5,"food"];
hungry(testArr1);
hungry(testArr2);
}
// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
Problem_13{
function swapTowardsCenter(arr){
    for(var i=0; i<arr.length; i++){
        counter = 0;
        if(arr[i] == arr[counter]){
            [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
            counter += 2;
        }
    }
    return arr;
}
var testArr1=[1,8,9,6,2,5,4,6];
var testArr2=["pizza",45,"ink",55,68,"hut",22,1]
swapTowardsCenter(testArr1);
swapTowardsCenter(testArr2);
console.log(testArr1);
console.log(testArr2);
}
// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
Problem_14{
function scaleArr(arr,num){
    for(var i=0; i<arr.length; i++){
        arr[i] *= num;
    }
    return arr;
}
var testArr=[8,9,45,5,41];
scaleArr(testArr,2);
console.log(testArr);
}

var array = [2,4,6,8]
// need a sum
//write function to add values [0] +[1] + [2] +[3] + [4]
function iterateanarray(arr){
var sum = 0;
   for(var i=0; i<arr.length; i++){
      sum += arr[i];
   }
    return sum;
}
console.log(iterateanarray(array));

var testArr = [1,2,3,1,4]

function itarr(arr){
    for(var i = 0; )
}