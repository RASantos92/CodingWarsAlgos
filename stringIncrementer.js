const testStr="foobar0120";
// should have used isNaN === is not a number
function incrementString(str) {
    let numbers = "123456789"
    let number = "";
    let strOutput = "";
    for(var i = 0; i< str.length; i++){
        if(str[i] == 0){
            if(number.length = 0){
                strOutput += str[i]
            } else {
                number += str[i]
            }
        }
        let counter = 0;
        for(var j = 0; j<numbers.length; j++){
            if(str[i] == numbers[j]){
                number += str[i]
                counter++;
            }
        }
        if(counter == 0){
            strOutput += str[i];
        }
    }
    if(number == 0){
        if(str[str.length-1] == 0){
            strOutput = str.slice(0, str.length-1);
            number = parseInt(str.slice(str.length-1)) + 1;
            return strOutput+number;
        }
        return (str + "1");
    }
    if(number > 0){
        if(number.length >= 3 && number[number.length-1] == 9){
            if(number[0] == 9){
                return (strOutput + (parseInt(number) + 1));
            }
        return ((strOutput.slice(0, strOutput.length-1))+(parseInt(number) + 1));
        } else{
            return (strOutput + (parseInt(number) + 1));
        }
    }
}

console.log(incrementString(testStr))