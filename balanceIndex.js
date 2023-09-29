
function socialDistanceing(arr, spaceCounter = 0){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === 1){
            while(arr[i + 1] === 0) spaceCounter++, i++
            if(spaceCounter < 6) return false
        }
    }
    return true
}

console.log(socialDistanceing([0,0,1,0,0,0,0,0,0,1]))

function balanceIndex(arr){
    let leftSum = 0,rightSum = 0 
    if(arr.length < 3) return -1
    for(let i = 0 ; i < arr.length; i++) leftSum += arr[i]
    for(let i = arr.length -1 ; i > 0 ; i--){
        leftSum -= (arr[i] + arr[i-1])
        rightSum += arr[i]
        if(leftSum == rightSum) return (i - 1)
        leftSum += arr[i-1]
    }
    return -1
}
console.log(balanceIndex([5,2,7,0,1,6]))