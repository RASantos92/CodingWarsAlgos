// ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.

// An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.
const test = "33745113175"
function validISBN10(isbn) {
    if(isbn.length != 10){
        return false
    }
    let sum = 0
    for(var i = 0; i < isbn.length; i++){
        if(i <= 9 && isNaN(parseInt(isbn[i]))) return false
        if(isbn[i] === "X") sum += 10*(i+1)
        elsesum += parseInt(isbn[i])*(i+1)
    }
    if(sum%11 === 0){return true}
    return false
}
console.log(validISBN10(test))