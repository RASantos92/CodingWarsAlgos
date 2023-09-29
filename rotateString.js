testString="Boris Godunov"

function rotateString(str,num){
    let newStr= "";
    if(num<0) num = num *-1
    let divide = str.length-num;
    if(divide < 0) divide *= -1
    for(let j=divide; j<str.length; j++) newStr += str[j];
    for(let i=0; i<divide; i++ ) newStr += str[i];
    return  newStr;
}


function isRotation (str1,str2, idx = 0,test = rotateString(str1,idx)){
    if (str1.length != str2.length) return false;
    if(test == str2) return true;
    if(idx < str1.length){
        idx += 1
        return isRotation(str1,str2,idx)
    }
    return false;
}

// function isRotation (str1,str2){
//     if (str1.length != str2.length) return false;
//     for(let i=0; i<str2.length; i++){
//         test = rotateString(str1,i);
//         if(test == str2) return true;
//     }
//     return false;
// }
x  = rotateString(testString,4);
console.log(x);

t = isRotation(x,testString);
console.log(t);
sum = -1
console.log(testString.length,testString.length-sum)
//Create the function isRotation(str1,str2) that returns whether the second string is a rotation of the first. Would you change your implementation if you knew that the two were usually entirely unrelated?