
var binary = 01011001.toString()
const binaryArrayToNumber = binary => parseInt(binary, 2);
console.log(binaryArrayToNumber(binary))


const decToHex = num => (num).toString(16)
const hexToDec = hexStr => parseInt(hexStr,16)

var testDec = 45
var testHex = decToHex(testDec)

console.log("decToHex output",testHex)
console.log("hexToDec output", hexToDec(testHex))

