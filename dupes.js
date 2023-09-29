function dedupeSorted(arr){
    let dict = {}
    let output = []
    for(let i = 0; i<arr.length; i++){
        if(!dict[arr[i]]) dict[arr[i]] = 1
        else dict[arr[i]]++
    }
    console.log(dict)
    for(let key in dict) output.push(parseInt(key))
    return output
}


function firstNonRepeated(arr){
    let obj = {}
    for(let i = 0; i<arr.length; i++){
        if(!obj[arr[i]]) obj[arr[i]] = 1
        else obj[arr[i]]++
    }
    for(let i = 0; i<arr.length; i++){
        if(obj[arr[i]] === 1) return arr[i]
    }
    return null
}



fetch("https://api.github.com/users/adion81")
    .then(response => response.json() )
    .then(coderData => console.log(coderData) )
    .catch(err => console.log(err) )

    async function getCoderData() {
        // The await keyword lets js know that it needs to wait until it gets a response back to continue.
        var response = await fetch("https://api.github.com/users/adion81");
        // We then need to convert the data into JSON format.
        var coderData = await response.json();
        return coderData;
    }
        
    console.log(getCoderData());
