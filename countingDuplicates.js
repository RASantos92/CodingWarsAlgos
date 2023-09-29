const testStr = "Indivisibilities";
// toUppercase was hella usefull in this algo look more into .join and .sort
function duplicateCount(str) {
    dict = {};
    let modStr = str.toUpperCase()
    for (let i = str.length - 1; i >= 0; i--) {
        if (dict[modStr[i]]) {
            dict[modStr[i]]++;
            continue;
        }
        (dict[modStr[i]] = 1)
    }
    let counter = 0;
    for(var key in dict){
        var value = dict[key];
        if( value > 1){
            counter++;
        }
    }
    return counter;
}

console.log(duplicateCount(testStr))

var testDict = {};
testDict["s15"] = 20;
testDict["s00"] = 3;
testDict["s14"] = 20;
console.log(testDict)