const testStr = "THIS IS PRETTY COOL LEMME TELL YA"

function encodeMorse(str){
    var morseCodeDict = {
        "A" : ".-", 
        "B": "-...",
        "C": "-.-.",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--." ,
        "H": "....",
        "I": "..",
        "J": ".---",
        "K": "-.-",
        "L": ".-..",
        "M": "--",
        "N": "-.",
        "O": "---",
        "P":".--." ,
        "Q": "--.-",
        "R": ".-.",
        "S": "...",
        "T": "-",
        "U": "..-",
        "V": "...-",
        "W": ".--",
        "X": "-..-",
        "Y": "-.--",
        "Z": "--..",
        "1": ".----",
        "2":"..---",
        "3":"...--",
        "4":"....-",
        "5":".....",
        "6":"-....",
        "7":"--..." ,
        "8":"---..",
        "9":"----.",
        "0":"-----",
        "SOS":"...---..."
    }
    var words = (str).split(" ");
    var letters = [];
    var output = ""
    for(var i = 0; i < words.length; i++){
        for(var j = 0; j < words[i].length; j++){
            letters.push(words[i][j])
            letters.push(" ")
        }
        letters.push("  ")
    }
    for(var i = 0; i < letters.length; i++){
        if(letters[i] == " "){
            output += " "
        }
        if(letters[i] == "  "){
            output += " "
        }
        if(morseCodeDict[letters[i]]) {
            output += morseCodeDict[letters[i]]
        }
    }
    return output;
}

console.log(encodeMorse(testStr))