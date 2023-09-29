testSrt = "Snap! crackle! pop!";

function stringDedupe(str) {
    let newStr = "";
    dict = {};
    for (let i = str.length - 1; i >= 0; i--) {
        if (dict[str[i]]) {
            dict[str[i]]++;
            continue;
        }
        (dict[str[i]] = 1)
            console.log(dict);
            newStr = str[i] + newStr;

    }
    return newStr;
}

x = stringDedupe(testSrt);
console.log(x);

testSrt = "din";
var testStr = "Success";

function stringDedupe(str) {
    let newStr = "";
    dict = {};
    for (let i = str.length - 1; i >= 0; i--) {
        if (dict[str[i]]) {
            dict[str[i]]++;
            continue;
        }
        dict[str[i]] = 1;
    }
    for (let j = 0; j < str.length; j++) {
        if (str[j] == "S"){
            newStr += ")";
            j++;
        }
        for (var key in dict) {
            var value = dict[key];
            
            if (str[j] == key) {
                if (value == 1) {
                    newStr += "(";
                    console.log("((( =",str[j]);
                }
                if (value > 1) {
                    newStr += ")";
                    console.log("))) =",str[j]);
                }
            }
        }
    }
    return newStr;
}

x = stringDedupe(testStr);
console.log("x =", x);








function arrDupe(arr) {
    let dict = {}
    for (let i = 0; i < arr.length; i++) {
        if (!dict[arr[i]]) dict[arr[i]] = 1
        else arr.splice(i,1),i--
    }
    Object.keys(dict)
    return arr;
}
console.log(arrDupe([1,3,4,8,10,2,4,5,5,6,6,6,2,4,1]))
