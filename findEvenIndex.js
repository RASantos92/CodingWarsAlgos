const testArr = [20,10,30,10,10,15,35]

function findEvenIndex(arr) {
    let sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    condition = false
    let compair = 0;
    for(var i = 0; i < arr.length; i++){
        let sumCom = (sum - arr[i]) / 2;
        if(compair == sumCom){
            return i;
        } else {
            compair += arr[i]
        }
    }
    return -1;
}

console.log(findEvenIndex(testArr))
