const dice = [1,2,3,4,5,6]

function score( dice ) {
    let output = []
    let getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    dict = {};
    for(var i = 0; i <= 4; i++){
        output.push(dice[getRandomNumber(0,5)])
    }
    for(var j = output.length - 1; j >= 0; j--){
        if (dict[output[j]]){
            dict[output[j]]++;
            continue;
        }
        (dict[output[j]] = 1)
    }
    let score = 0;
    for(var key in dict){
        var value = dict[key];
        if(value == 3 && key != 1){
            score += key*100;
        }
        if(value == 3 && key == 1){
            score += key*1000;
        }
        if(value == 1){
            if(key == 1){
                score += key*100;
            }
            if(key == 5){
                score += key*10;
            }
        }
    }
    console.log(output,score)
    return score;
}
var totalScore = 0
for(var i = 0; i<5;i++){
    totalScore += score(dice)
}
console.log(totalScore)