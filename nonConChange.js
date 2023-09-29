function nonConChange(coins){ 
    coins.sort()
    let changeCreated = 0
    for(let i = 0; i<coins.length;i++){
        let changeNotCreated = changeCreated + 1
        if(coins[i] > changeNotCreated) return changeNotCreated
        changeCreated += coins[i]
    }
    return changeCreated + 1
}
console.log(nonConChange([1,1,2,5,2]))