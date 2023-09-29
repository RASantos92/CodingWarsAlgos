const testSeconds = 8541;

// disect and understand
// function humanReadable(seconds) {
//     return [(seconds / 3600) | 0, seconds % 3600 / 60, seconds % 3600 % 60].map(n => ('0' + ( '' + n|0)).substr(-2)).join(':')
// }

function humanReadable(seconds) {
    let output = "00:00:00";
    let x = (output).split(":");
    let finalOutput = "";
    if(seconds > 3600){
        var hours = 0;
        while(seconds >= 3600){
            hours++;
            seconds = seconds - 3600;
        }
        x[0] = hours.toString();
        if(x[0].length == 1){
            x[0] = x[0].replace(/^/,'0');
        }
    }
    if(seconds >= 60 && seconds < 3600){
        var mins = 0;
        while(seconds >= 60){
            mins++;
            seconds = seconds - 60;
        }
        x[1] = mins.toString();
        if(x[1].length == 1){
            x[1] = x[1].replace(/^/,'0');
        }
    }
    if(seconds < 60) {
        x[2] = seconds.toString();
        if(x[2].length == 1){
            x[2] = x[2].replace(/^/,'0');
        }
    }
    for(var i = 0; i < x.length; i++){
        finalOutput += x[i];
        if(i != 2){
            finalOutput += ":";
        }
    }
    return (finalOutput);
}

console.log(humanReadable(testSeconds));