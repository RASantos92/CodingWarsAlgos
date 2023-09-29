const testStr = "Pig latin is cool !"

function pigIt(str){
    var words = (str).split(" ");
    let output = "";
    for(var i = 0; i < words.length ; i++){
        if (words[i] != "!" || words[i] != "."|| words[i] != "?"|| words[i] != ","){
            output += words[i].slice(1, words[i].length);
            output += words[i].slice(0,1);
            if(i != words.length-1){
                output += "ay "
            } else if(words[i] != "!" && words[i] != "?") {
                output += "ay"
            }
        } else {
            output += words[i];
        }
    }
    return output;
}

console.log(pigIt(testStr))