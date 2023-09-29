// GIVEN AN ARRAY, RETURN ARRAY WITHOUT DUPLICATES
// [1,2,1,3,4,2] => [1,2,3,4]

// CHALLENGE RETURN THE SAME ARRAY

function arrDupe(arr) {
    // utilizing the use of keys in a dictonary
    let dict = {}
    for (let i = 0; i < arr.length; i++) {
        // if key not in dict create one
        if (!dict[arr[i]]) {
            // giving a value to the key
            dict[arr[i]] = 1
        }
        else{
            // if key exisits in the dictonary splice it out
            // i == the start index || 1 == number of items to slice.
            arr.splice(i,1)
            // have to reposition i to account for the index taken out.
            i--
        }
    }
    return arr;
}
console.log(arrDupe([1,2,1,3,4,2]))
