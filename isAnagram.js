function isAnagram(str1,str2){
    let dict1 = {}, dict2 = {}
    let larger = "", smaller = ""
    if(str1.length > str2.length) larger = str1 , smaller = str2;
    else larger = str2 , smaller = str1;
    for(var i = 0; i<larger.length; i++){
        if(!dict1[larger[i]]) dict1[larger[i].toUpperCase()] = 1
        else dict1[larger[i].toUpperCase()]++
        if(smaller[i]){
            if(!dict2[smaller[i]]) dict2[smaller[i].toUpperCase()] = 1
            else dict2[smaller[i].toUpperCase()]++
        }
    }
    for(var x in dict1){
        if(x !== " "){
            if(dict1[x] !== dict2[x]) return false
        }
    }
    return true
}

test1 = "t  t i m e  e"
test2 = "imeett"
console.log(isAnagram(test1,test2))