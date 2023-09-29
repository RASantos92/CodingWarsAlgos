var test = 158324

function sumToOneDigit(n) {
    sum = n.toString().split('').map(Number)
        .reduce(function (a, b) {
            console.log("a",a,"B",b)
            return a + b;
        }, 0);
    if(sum > 10){
        return sumToOneDigit(sum)
    }
    else return sum
}

console.log(sumToOneDigit(test))





function createAna(str, output = [], count = str.length*2){
    if(count == 0){
        return output
    }
    output.push(rotateString(str,1))
    return createAna(str = rotateString(str,1),output,count-1)
}
function rotateString(str,num){
    let newStr= "";
    if(num<0) num = num *-1
    let divide = str.length-num;
    if(divide < 0) divide *= -1
    for(let j=divide; j<str.length; j++) newStr += str[j];
    for(let i=0; i<divide; i++ ) newStr += str[i];
    return  newStr;
}

console.log(createAna("lim"))