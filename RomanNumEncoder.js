
function romanNumEncoder(num){
    var romanNumDict = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C": 100,
        "XC": 90,
        "L": 50,
        "XL": 40,
        "X": 10,
        "IX": 9,
        "V": 5,
        "IV": 4,
        "I": 1
    }
    var output = "";
    for (var key in romanNumDict) {
        var value = romanNumDict[key];
        while(num - value >= 0){
            num = num - value;
            output += key;
        }
    }
    return output;
}

var x = romanNumEncoder(678);
console.log(x);