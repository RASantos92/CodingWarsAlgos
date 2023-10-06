const testArray = ["test"];


const testMapReturn = testArray.map((e) => {
    // console.log(e);
    return undefined;
})

// testMapReturn2 = testArray2.map((e) => {
    //     console.log("real test", e);
    //     return e == undefined ? 0 : e;
    // })
    
    const testArray2 = []
    testArray2[8] = 0;
    console.log("hello")
for(let i = 0; i<testArray2.length; i++){
    console.log(testArray2[i],i, "hello")
}
console.log("goodbye")
// console.log(testMapReturn);

if(testArray.indexOf(3) < 0){
    console.log("there are no threes")
}