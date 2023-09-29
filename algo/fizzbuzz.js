const fizzBuzz = (num) => {
    if(num%3 === 0 && num%5 === 0){
        return"fizz buzz"
    }
    if(num%3 === 0){
        return "fizz"
    }
    if(num%5 === 0){
        return "buzz"
    }
}

console.log(fizzBuzz(2))