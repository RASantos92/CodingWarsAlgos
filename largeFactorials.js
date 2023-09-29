function factorial(n) {
    let output = "test";
    let intsum = 2;
    for(var i = 3; i <= n ;i++){
        intsum += intsum * i;
        console.log(i, "  ",intsum)
    }
    return output;
}

console.log(factorial(5));