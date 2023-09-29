var testArr = [2,3,4]
function insertToFront(arr,value){
    arr[arr.length] = arr[arr.length-1]
    for(var i = arr.length-1; i>0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = value
    return arr
}
console.log(insertToFront(testArr, 1))

function removeFromFront(arr){
    let temp = arr[arr.length-1]
    arr.length = arr.length-1
    for(var i = 0; i<arr.length;i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = temp
    console.log(arr)
}
removeFromFront(testArr)