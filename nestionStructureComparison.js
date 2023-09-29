const testArr = ["a","d","b","b",1,2,0,1,0,1,0,3,0,1]

var moveZeros = function (arr) {
    let output = [];
    let zeroCount = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == 0){
            zeroCount++;
        } else {
            output.push(arr[i]);
        }
        if(arr[i] == "false"){
            output.push("false")
        }
    }
    while(zeroCount > 0){
        output.push(0);
        zeroCount--;
    }
    console.log(zeroCount);
    return output;
}
console.log(moveZeros(testArr));