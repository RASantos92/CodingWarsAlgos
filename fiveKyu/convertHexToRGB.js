const testHex = "#aabbcc"

function hexStringToRGB(hexString) {
    const hexTable = {
        "A" : 10,
        "B" : 11,
        "C" : 12,
        "D" : 13,
        "E" : 14,
        "F" : 15,
    }

    let obj = {
        "r": hexString.slice(1,3).toUpperCase(),
        "g": hexString.slice(3,5).toUpperCase(),
        "b": hexString.slice(5,7).toUpperCase(),
    }
    for(key in obj){
        if(hexTable[obj[key][0]] && hexTable[obj[key][1]]){
            obj[key] = hexTable[obj[key][0]] * 16 + hexTable[obj[key][1]]
            continue
        }
        if(hexTable[obj[key][0]] && !hexTable[obj[key][1]]){
            obj[key] = (hexTable[obj[key][0]] * 16) + parseInt(obj[key][1])
            continue
        }
        if(!hexTable[obj[key][0]] && hexTable[obj[key][1]]){
            obj[key] = (parseInt(obj[key][0]) * 16) + hexTable[obj[key][1]]
            continue
        }
        if(!hexTable[obj[key][1]] && !hexTable[obj[key][0]]){
            obj[key] = (parseInt(obj[key][0]) * 16) + parseInt(obj[key][1])
            continue
        }
    }
    return obj
}

function hexStringToRGB(hexString) {
    return {
      r: parseInt(hexString.substr(1, 2), 16),
      g: parseInt(hexString.substr(3, 2), 16),
      b: parseInt(hexString.substr(5, 2), 16),
    };
  }
console.log(hexStringToRGB(testHex))






const testArr1 = ["match1","match2","match3","match4","match5"]

const testArr2 = ["userForMatch1","userForMatch2","userForMatch3","userForMatch4","userForMatch5"]
const testing = testArr1.map((num, index) =>{
    console.log(num,"\n", testArr2[index])
})
