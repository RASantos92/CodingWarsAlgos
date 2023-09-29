function intersectionOfSortedArrays(array1, array2) {
    let obj1 = {}
    let obj2 = {}
    let lArr = []
    let sArr = []
    output = []

    if(array1.length < array2.length) lArr = array2, sArr = array1;
    else lArr = array1, sArr = array2;

    for(let i = 0, j = 0; i< lArr.length; i++){
        if(!obj1[lArr[i]]) obj1[lArr[i]] = 1;
        else obj1[lArr[i]]++
        if(sArr[j]){
            if(!obj2[sArr[j]]) obj2[sArr[j]] = 1
            else obj2[sArr[j]]++
            j++
        }
    }
    for(let key in obj1){
        if(obj2[key]){
            var y = 0
            if(obj2[key]>=obj1[key]){
                while(y < obj1[key]){
                    output.push(key)
                    y++
                }
            }else{
                while(y < obj2[key]){
                    output.push(key)
                    y++
                }
            }
        }
    }
    return output
}

var arr1=[5,4,88,2,5,44,5,6,8,5]
var arr2=[55,5,25,22,44,5]
// function intersectionOfSortedArrays(array1, array2) {
    
//     function checkKeys(arr) {
//         var obj = {};
//         for (var i = 0; i < arr.length; i++) {
//             if (!obj[arr[i]]) {
//                 obj[arr[i]] = 1;
//             } else {
//                 obj[arr[i]] += 1;
//             }
//         }
//         return obj;
//     }
    
//     var first = checkKeys(array1)
//     var second = checkKeys(array2)
//     var larger
//     var smaller
//     if(Object.keys(first).length < Object.keys(second).length){
//         larger = second
//         smaller = first
//     }
//     larger = first
//     smaller = second
//     var newArr = []
//     for(let item in larger) {
//         if(smaller.hasOwnProperty(item)) {
//             parseInt(item)
//             newArr.push(item)
//         }
//     }
    
//     return newArr;
// }
console.log(intersectionOfSortedArrays(arr2, arr1))