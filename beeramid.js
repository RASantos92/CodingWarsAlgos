// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

// your referral bonus, and

// the price of a beer can

// For example:

// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16
function beeramid(referral,beerPrice){
    let pyramidLevels = 2
    if(referral< beerPrice) return pyramidLevels = 0
    let beers = Math.floor(referral/beerPrice)-1
    while(beers >= 0){
        beers -= (pyramidLevels*pyramidLevels)
        if(beers>=0) pyramidLevels++
        if(beers<0) pyramidLevels--
    }
    return pyramidLevels
}
console.log(beeramid(1500,2))


function fibonacci(num) {
    if(num ==0){
        return 0
    }
    if(num <2) {
        return num;
    }
    else {
        return + fibonacci(num-1)+ fibonacci(num - 2)   ;
    }
}

console.log(fibonacci(9))

function GCF(a, b,sc=0) {
    if ( ! b) return a;
    return GCF(b, a % b,sc);
};
console.log(gcd(123, 1000));