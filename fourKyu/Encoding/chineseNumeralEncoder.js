//https://www.codewars.com/kata/52608f5345d4a19bed000b31/train/javascript

const numerals = {
    "-":"负",
    ".":"点",
    0:"零",
    1:"一",
    2:"二",
    3:"三",
    4:"四",
    5:"五",
    6:"六",
    7:"七",
    8:"八",
    9:"九",
    10:"十",
    100:"百",
    1000:"千",
    10000:"万",
    " " : ""
};

const handleNumberBetween10and19 = (num) => {
    let output = "";
    if(num < 20 && num > 9){
        console.log(num.toString()[1] === "0" )
        output += numerals[10] + numerals[num.toString()[1] !== "0" ? num.toString()[1] : " "];
    }
    return output;
}
const encodeSubSection = (fullNumber) => {
    let output = "";
    const placeMultiplier = {2: 10, 3: 100, 4: 1000, 5: 10000}
    if(fullNumber < 20 && fullNumber > 9){
        output += handleNumberBetween10and19(fullNumber, output);
    } else if(fullNumber.length === 1){
        output += numerals[fullNumber]
    } else {

        const splitNumbersArray = fullNumber.split("");
        let potentialModification = "";
        const lastTwoDigets = splitNumbersArray[splitNumbersArray.length-2] + splitNumbersArray[splitNumbersArray.length-1]
        // console.log("testing",lastTwoDigets > 20);

        if(lastTwoDigets < 20 && lastTwoDigets > 9 ){
            potentialModification += handleNumberBetween10and19(lastTwoDigets, output);
        } 
        // console.log(splitNumbersArray)

        output += splitNumbersArray.map((n,i)=>{
            if(potentialModification !== "" && splitNumbersArray.length - i < 3) 
                return "";
            let output = n !== "0"? numerals[n] : -1;
            splitNumbersArray.length - i > 1 && n !== "0" ? output += numerals[placeMultiplier[splitNumbersArray.length-i]] : null;
            // console.log(n,i,  splitNumbersArray.length - i ,output, )
            return output;
        }).filter((n)=> n!= -1).join("")
        potentialModification !== "" ? output += potentialModification: null;
    }
    return output;
}
const chineseNumEncoder = (num) => {
    let output = "";
    const numberToString = num.toString();
    const numberLength = numberToString.length;
    const decimalLocation = numberToString.indexOf(".");
    // if the decimal location is above 0 that means there is a decimal in our number
    if(decimalLocation > 0){
        const fullNumber = numberToString.slice(0, decimalLocation);
        const decimalNumber = numberToString.slice(decimalLocation+1, numberLength);
        output += encodeSubSection(fullNumber,output);
        output += "." + encodeSubSection(decimalNumber,output)
    }
    return output
}

console.log(chineseNumEncoder(123.45));



// const POW = {0:'', 1:"十", 2:"百", 3:"千", 4:"万"};
// const SYM = {"-":"负", ".":"点", 0:"零", 1:"一", 2:"二", 3:"三", 4:"四", 5:"五", 6:"六", 7:"七", 8:"八", 9:"九", 10:"十"};
// for(let n=1;n<10;n++) SYM[n+10] = POW[1]+SYM[n];


// function toChineseNumeral(n){
//     let [i,r] = ( ''+Math.abs(n) ).split('.')
//     return (n<0 ? SYM['-']:'') + parse(i) + decimals(r);
// }

// const decimals=r=> !r ? '' : SYM['.']+[...r].map(d=>SYM[d]).join('');

// const parse=n=> SYM[n] || [...''+n].reverse()
//                                    .map((d,i)=>SYM[d]+(+d?POW[i]:''))
//                                    .reverse().join('')
//                                    .replace(/零+$|(?<=零)零+/g, '');