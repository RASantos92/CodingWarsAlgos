const testStr = "show me the money"

function rot13(str) {
    let alpha = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
    var output = "";
    for (var i = 0; i < str.length; i++) {
        if(str[i] == "n"){
            output += alpha[0];
        }
        let counter = 0;
        for (var j = 0; j < alpha.length; j++) {
            if (str[i] == alpha[j]) {
                counter++;
                var letter = j + 26;
                if (letter > alpha.length) {
                    output += alpha[letter - alpha.length]
                }
                if (letter < alpha.length) {
                    output += alpha[letter];
                }
            } 
        }
        if(counter == 0){
            output += str[i];
        }
    }
    return output
}

console.log(rot13(testStr))



console.log(test.sort())
var dict = {}
for(var i = 0; i <test.length ; i++){
    if(!dict[test[i]]) dict[test[i]] = 1
    else dict[test[i]]++
}

console.log(Object.keys(dict))
var test = [5,8,7,3,2,6,1]

function findMissing(arr){
    let min = arr[0], max = arr[0]
    let arr_total = 0
    for(var i = 0; i < arr.length; i++){
        if(min > arr[i]) min = arr[i]
        if(max < arr[i]) max = arr[i]
        arr_total += arr[i]
    }
    let range_total = min
    while(min<max) min++ ,range_total+= min
    return (range_total-arr_total)
}
console.log(findMissing(test))






