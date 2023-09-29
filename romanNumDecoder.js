function romanNumDecoder(str){
    var romanNumDict = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1
    }
    var output = 0;
    for(var i = 0; i < str.length; i++){
        if(romanNumDict[str[i]] < romanNumDict[str[i+1]]){
            output += romanNumDict[str[i+1]] - romanNumDict[str[i]];
            i++
        }else{
            output += romanNumDict[str[i]];
        }
    }
    return output;
}
console.log(romanNumDecoder("DCLXXVIII"));

var romanNumDictCopy