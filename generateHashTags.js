const testStr = "show me the money"

function generateHashtag (str) {
    var words = (str).split(" ");
    let output = "#";
    for (var i = 0; i < words.length ; i++){
        output += words[i][0].toUpperCase() + words[i].slice(1);
    }
    return output;
}

// console.log(generateHashtag(testStr))

function lol(str){
    var words = (str).split(" ");
    console.log(words);
    var output = "";
    for(var i = 0; i<words.length ; i++){
        output +=  toUpperCase(words[i][0])
    }
    return output;
}

console.log(lol(testStr))